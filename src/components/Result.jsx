// Imported the required elements.
import React, { useState, useEffect } from "react";
import "./Result.css";
import QuestionBox from "./QuestionBox";
import Quizzo from "./Quizzo.png";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import questions from "../questions";

// Created the functional component.
export default function Result({ correctCount }) {
  // State variables for managing the component's state
  const [isBlack, setIsBlack] = useState(true);
  const [changePercentage, setChangePercentage] = useState(0);
  const [containerColor, setContainerColor] = useState(true);

  // useEffect hook to calculate the percentage when correctCount changes
  useEffect(() => {
    const percentage = (correctCount / questions.length) * 100;
    setChangePercentage(percentage);
  }, [correctCount]);

  const handleBack = () => {
    window.location.reload();
  };

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setIsBlack((prevIsBlack) => !prevIsBlack);

    if (containerColor === "white") {
      setContainerColor("rgb(86 81 81)");
    } else {
      setContainerColor("white");
    }
  };

  // renderence of the result component
  return (
    <div className="result-container">
      <img className="logo" src={Quizzo} alt="" />
      <button className="Mode" onClick={toggleMode}>
        {isBlack ? <MdDarkMode /> : <MdLightMode />}
      </button>

      <div className="cont" style={{ backgroundColor: containerColor }}>
        <h1 className="result">RESULT</h1>

        {/* Displaying the score and percentage */}
        <h2 className="score">{`${correctCount} out of ${questions.length} Correct - (${changePercentage}%)`}</h2>

        <button className="restart" onClick={handleBack}>
          RESTART
        </button>
      </div>
    </div>
  );
}
