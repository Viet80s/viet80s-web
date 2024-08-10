"use client";
import React, { useState, useEffect } from "react";
import {
  Home,
  RotateCcw,
  Loader2,
  Send,
  ArrowBigLeftDash,
  ArrowBigRightDash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import toast from "react-hot-toast";
import { count } from "console";
import NavBar from "@/components/NavBar";
import DetailsFooter from "@/components/DetailsFooter";
import Footer from "@/components/Footer";
import { drinks, mainCourses, profiles, starters } from "./data";
import { findProfileByCombination } from "./functions";
import Image from "next/image";

function LoadingPage() {
  return (
    <div>
      <NavBar />
      <div className="w-screen min-h-screen bg-[url('/pictures/bg1.svg')] bg-center bg-cover">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center text-2xl">
              <h1>Questions are loading ...</h1>
              <Loader2 className="h-10 w-10 animate-spin ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
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

  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [choices, setChoices] = useState<Choice[]>([]);
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
  const [avgCat1, setAvgCat1] = useState(0);
  const [avgCat2, setAvgCat2] = useState(0);
  const [avgCat4, setAvgCat4] = useState(0);
  const [avgCat3, setAvgCat3] = useState(0);
  const [answeredScore, setSelectedAnswerScore] = useState(0);

  const [showFinalPage, setShowFinalPage] = useState(false);
  const [insertData, setInsertData] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [exFactor, setExFactor] = useState(0);
  const [taFactor, setTaFactor] = useState(0);
  const [moFactor, setMoFactor] = useState(0);
  const [stFactor, setStFactor] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionsResponse = await fetch("/api/questions", {
          cache: "no-cache",
        });
        const choicesResponse = await fetch("/api/choices", {
          cache: "no-cache",
        });
        const questionsData = await questionsResponse.json();
        const choicesData = await choicesResponse.json();
        setQuestions(questionsData);
        setChoices(choicesData);
        setLoading(false); // Set loading to false when data is loaded
      } catch (error: any) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (showFinalPage) {
      setActiveQuestion(0);
      setAvgCat1(sumCat1 / countCat1 || 0);
      setAvgCat2(sumCat2 / countCat2 || 0);
      setAvgCat3(sumCat3 / countCat3 || 0);
      setAvgCat4(sumCat4 / countCat4 || 0);
      if (avgCat1 >= 2) {
        setExFactor(1);
      }
      if (avgCat2 >= 2) {
        setTaFactor(1);
      }
      if (avgCat3 >= 2) {
        setMoFactor(1);
      }
      if (avgCat4 >= 2) {
        setStFactor(1);
      }
    }
  }, [
    activeQuestion,
    questions.length,
    sumCat1,
    countCat1,
    sumCat2,
    countCat2,
    sumCat3,
    countCat3,
    showFinalPage,
    sumCat4,
    countCat4,
    avgCat1,
    avgCat2,
    avgCat3,
    avgCat4,
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
  const insertDataToDatabase = async () => {
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
        toast.success("Data sent succesfully");
        setSubmitted(true);
      }
    } catch (error: any) {
      console.error("Error inserting data:", error.message);
      toast.error("Error inserting data");
    }
  };

  const combination = [exFactor, taFactor, moFactor, stFactor];
  const filterCombo = findProfileByCombination(combination);
  const startersCombo = filterCombo?.startersCombo;
  const mainCombo = filterCombo?.mainCombo;
  const drinkCombo = filterCombo?.drinkCombo;

  return (
    <div>
      <NavBar />
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
            ) : (
              <div className="items-center text-xl gap-2 mb-5 ml-2">
                <h1>Many thanks for taking the quiz</h1>
                <h2>Your result is as follows:</h2>
                {filterCombo ? (
                  <>
                    <h1 className="text-lg font-bold">
                      - Your nickname: {filterCombo?.name}
                    </h1>
                    <h1 className="text-md font-serif">
                      Description: {filterCombo?.description}
                    </h1>
                    <h1 className="text-md">
                      - Recommended Starters:{" "}
                      {startersCombo
                        ?.map((starter) => starters[starter]?.name)
                        .join(", ")}
                    </h1>
                    <h1 className="text-md">
                      - Recommended Main Courses:{" "}
                      {mainCombo
                        ?.map((main) => mainCourses[main]?.name)
                        .join(", ")}
                    </h1>
                    <h1 className="text-md">
                      - Recommended Drinks:{" "}
                      {drinkCombo
                        ?.map((drink) => drinks[drink]?.name)
                        .join(", ")}
                    </h1>
                  </>
                ) : (
                  <p>No profile found for the combination.</p>
                )}
                <div className="flex mt-5 gap-5 justify-center">
                  {submitted ? (
                    // Render the "Home" button after submission
                    <Link href="/">
                      <Button>
                        Home <Home className="ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Button onClick={() => (window.location.href = "/quiz")}>
                        {" "}
                        Restart <RotateCcw className="ml-2" />
                      </Button>

                      <Button onClick={insertDataToDatabase}>
                        Submit <Send className="ml-2" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
