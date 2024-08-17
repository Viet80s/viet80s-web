import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Quiz from "./quiz";

export default async function Page() {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/";
  const questions = await fetch(`${baseUrl}api/questions/`).then((res) =>
    res.json()
  );
  const choices = await fetch(`${baseUrl}api/choices/`).then((res) =>
    res.json()
  );

  return (
    <div>
      <NavBar />
      <Quiz questions={questions} choices={choices} />
      <div>
        <Footer />
      </div>
    </div>
  );
}
