"use client";
import React, { useState, useEffect } from "react";
import {
  Home,
  RotateCcw,
  ArrowBigLeftDash,
  ArrowBigRightDash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import toast from "react-hot-toast";
import { findProfileByCombination } from "./functions";
import Image from "next/image";
import { handleEffect2 } from "./effect-2";
import { LoadingPage } from "./LoadingPage";
import { FinalPage } from "./FinalPage";

interface Choice {
  question_id: number;
  choice: string;
  score: number;
  id: number;
}
interface Question {
  id: number;
  questions: string;
  category: number;
}

export default function Quiz({
  questions,
  choices,
}: {
  questions: Question[];
  choices: Choice[];
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (questions.length > 0 && choices.length > 0) {
      setLoading(false);
    }
  }, [questions, choices]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [sumCat1, setSumCat1] = useState(0);
  const [sumCat2, setSumCat2] = useState(0);
  const [sumCat3, setSumCat3] = useState(0);
  const [sumCat4, setSumCat4] = useState(0);
  const [countCat1, setCountCat1] = useState(0);
  const [countCat2, setCountCat2] = useState(0);
  const [countCat4, setCountCat4] = useState(0);
  const [countCat3, setCountCat3] = useState(0);

  const [answeredScore, setSelectedAnswerScore] = useState(0);

  const [showFinalPage, setShowFinalPage] = useState(false);

  const [exFactor, setExFactor] = useState(0);
  const [taFactor, setTaFactor] = useState(0);
  const [moFactor, setMoFactor] = useState(0);
  const [stFactor, setStFactor] = useState(0);

  useEffect(() => {
    if (showFinalPage) {
      // Update factors based on averages
      const newExFactor = (sumCat1 / countCat1 || 0) >= 2 ? 1 : 0;
      const newTaFactor = (sumCat2 / countCat2 || 0) >= 2 ? 1 : 0;
      const newMoFactor = (sumCat3 / countCat3 || 0) >= 2 ? 1 : 0;
      const newStFactor = (sumCat4 / countCat4 || 0) >= 2 ? 1 : 0;

      setExFactor(newExFactor);
      setTaFactor(newTaFactor);
      setMoFactor(newMoFactor);
      setStFactor(newStFactor);

      // Insert data to the database after factors are set
      insertDataToDatabase(newExFactor, newTaFactor, newMoFactor, newStFactor);
    }
  }, [
    showFinalPage,
    sumCat1,
    countCat1,
    sumCat2,
    countCat2,
    sumCat3,
    countCat3,
    sumCat4,
    countCat4,
  ]);

  if (loading) {
    return <LoadingPage />;
  }
  const currentQuestion = questions[activeQuestion];
  const currentCategory = currentQuestion.category;
  const currentChoices = choices?.filter(
    (choice) => choice.question_id === currentQuestion.id
  );

  const handleNextQuestion = (index: number | null) => {
    // Check if an answer is selected before proceeding to the next question
    if (selectedAnswerIndex !== null) {
      // Get the selected choice
      const selectedChoice = choices.filter(
        (choice) => choice.question_id === currentQuestion.id
      )[selectedAnswerIndex];
      // Update the sum variables based on the category
      if (currentCategory === 1) {
        setSumCat1((prevSum) => Number(prevSum) + Number(selectedChoice.score));
        setSelectedAnswerScore((prevScore) => selectedChoice.score);
        setCountCat1((prevCount) => Number(prevCount) + 1);
      } else if (currentCategory === 2) {
        setSumCat2((prevSum) => Number(prevSum) + Number(selectedChoice.score));
        setSelectedAnswerScore((prevScore) => selectedChoice.score);
        setCountCat2((prevCount) => Number(prevCount) + 1);
      } else if (currentCategory === 3) {
        setSumCat3((prevSum) => Number(prevSum) + Number(selectedChoice.score));
        setSelectedAnswerScore((prevScore) => selectedChoice.score);
        setCountCat3((prevCount) => Number(prevCount) + 1);
      } else if (currentCategory === 4) {
        setSumCat4((prevSum) => Number(prevSum) + Number(selectedChoice.score));
        setSelectedAnswerScore((prevScore) => selectedChoice.score);
        setCountCat4((prevCount) => Number(prevCount) + 1);
      }
      // Update state to move to the next question
      if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1);
      }

      if (activeQuestion === questions.length - 1) {
        setShowFinalPage(true);
        handleEffect2();
      }
      // Reset selected answer for the new question
      setSelectedAnswerIndex(null);
      setSelectedChoice(null);
    } else {
      toast.error(
        "Please select an answer before moving to the next question."
      );
    }
  };

  const handleAnswerSelection = (index: number) => {
    setSelectedChoice(index);
    setSelectedAnswerIndex(index);
  };

  const handlePreviousQuestion = () => {
    // Check if there's a previous question to go back to
    if (activeQuestion > 0) {
      // Update the state to move to the previous question
      setActiveQuestion((prev) => prev - 1);
      // Update the sum variables based on the category (subtracting instead of adding)
      if (currentCategory === 1) {
        setSumCat1((prevSum) => Number(prevSum) - Number(answeredScore));
        setCountCat1((prevCount) => Number(prevCount) - 1);
      } else if (currentCategory === 2) {
        setSumCat2((prevSum) => Number(prevSum) - Number(answeredScore));
        setCountCat2((prevCount) => Number(prevCount) - 1);
      } else if (currentCategory === 3) {
        setSumCat3((prevSum) => Number(prevSum) - Number(answeredScore));
        setCountCat3((prevCount) => Number(prevCount) - 1);
      } else if (currentCategory === 4) {
        setSumCat4((prevSum) => Number(prevSum) - Number(answeredScore));
        setCountCat4((prevCount) => Number(prevCount) - 1);
      }
    } else {
      toast.error("Cannot go back further. This is the first question.");
    }
  };
  const insertDataToDatabase = async (
    exFactor: number,
    taFactor: number,
    moFactor: number,
    stFactor: number
  ) => {
    try {
      const response = await fetch("/api/insertData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          exFactor,
          taFactor,
          moFactor,
          stFactor,
        }),
      });

      if (response.ok) {
        toast.success("You have finished the quiz! Thanks for participating.");
      }
    } catch (error: any) {
      console.error("Error inserting data:", error.message);
      toast.error("Error inserting data");
    }
  };

  const combination = [exFactor, taFactor, moFactor, stFactor];
  const filterCombo = findProfileByCombination(combination);

  return (
    <div className="w-screen min-h-screen bg-[url('/pictures/bg1.svg')] bg-center bg-cover px-5">
      <div className="w-full py-5">
        <div className="flex flex-col items-center text-center">
          {!showFinalPage ? (
            <>
              <div className="items-center text-xl gap-2 mb-5 ml-2">
                <h1 className="underline text-2xl">Viet80s Fun Quiz</h1>
                <h2>
                  Question: {activeQuestion + 1}
                  <span>/{questions.length}</span>
                </h2>
              </div>
              <div className="text-2xl text-slate-950 gap-2 mb-5 ml-2">
                <p>{currentQuestion.questions}</p>
              </div>
              <div className="text-xl text-slate-950 gap-2 mb-5 ml-2 grid grid-cols-2">
                {choices.length > 0 &&
                  currentChoices.map((choice, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                      <div>
                        <label
                          htmlFor={`choice${index}`}
                          className="cursor-pointer"
                          onClick={() => handleAnswerSelection(index)}
                        >
                          {choice.id > 40 ? (
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id={`choice${index}`}
                                name="choices"
                                checked={selectedChoice === index}
                                onChange={() => handleAnswerSelection(index)}
                                style={{ transform: "scale(1.3)" }}
                              />
                              <div className="ml-2">{choice.choice}</div>
                            </div>
                          ) : (
                            <Image
                              src={`/pictures/quiz/answers/${choice.id}.webp`}
                              alt={`Slide ${index + 1}`}
                              width={500}
                              height={350}
                              fetchPriority="high"
                              priority
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className={
                                selectedChoice !== null &&
                                selectedChoice !== index
                                  ? "opacity-50"
                                  : ""
                              }
                            />
                          )}
                          {choice.id <= 40 && (
                            <div className="ml-2">{choice.choice}</div>
                          )}
                        </label>
                      </div>
                    </div>
                  ))}
              </div>
              <div>
                <div className="flex gap-1 mb-3 items-center">
                  <Button
                    onClick={handlePreviousQuestion}
                    className="flex items-center"
                  >
                    {" "}
                    <ArrowBigLeftDash
                      className="mr-2"
                      size={20}
                    /> Previous{" "}
                  </Button>
                  <Button
                    onClick={() => handleNextQuestion(selectedAnswerIndex)}
                    className="flex items-center"
                  >
                    Next <ArrowBigRightDash size={20} className="ml-2" />
                  </Button>
                </div>
                <div className="items-center">
                  <Link href="/">
                    <Button className="mr-1" size={"sm"}>
                      Home <Home className="ml-2" size={15} />
                    </Button>
                  </Link>

                  <Button
                    onClick={() => (window.location.href = "/quiz")}
                    size={"sm"}
                  >
                    {" "}
                    Restart <RotateCcw className="ml-2" size={15} />
                  </Button>
                </div>
              </div>
            </>
          ) : filterCombo ? (
            <FinalPage filterCombo={filterCombo} />
          ) : (
            <p>Sorry! No profile found for your answers.</p>
          )}
        </div>
      </div>
    </div>
  );
}
