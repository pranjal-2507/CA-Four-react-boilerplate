// imported the required elements.
import React, { useState } from "react";
import "./QuestionBox.css";
import Quizzo from "./Quizzo.png";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import questionsData from "../questions";
import Result from "./Result";

// Created the functional component named QuestionBox.
function QuestionBox() {
  // State variables to manage various aspects of the component
  const [questionIndex, setQuestionIndex] = useState(0);
  const [textColor, setTextColor] = useState("black");
  const [isBlack, setIsBlack] = useState(true);
  const [containerColor, setContainerColor] = useState("white");
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  // Function to handle changing the text color
  const handleColor = () => {
    setIsBlack(!isBlack);
    setTextColor(isBlack ? "red" : "black");
  };

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setIsBlack(!isBlack);
    setTextColor(isBlack ? "white" : "black");
    setContainerColor(isBlack ? "rgb(86 81 81)" : "white");
  };

  // Function to highlight the text in a question
  const highlightText = () => {
    setIsHighlighted(true);
    setTextColor("red");
  };

  // Function to remove the highlight from the text
  const removeHighlight = () => {
    setIsHighlighted(false);
    setTextColor(isBlack ? "black" : "white");
  };

  // Function to handle option clicks and update state accordingly
  const handleOptionClick = (val) => {
    if (val === true) {
      setCorrectCount(correctCount + 1);
    }
    setQuestionIndex((prevIndex) => prevIndex + 1);

    setIsHighlighted(false);
    setTextColor(isBlack ? "black" : "white");
  };

  // If all questions are answered, render the Result component
  if (questionIndex === questionsData.length) {
    return <Result correctCount={correctCount} />;
  }

  return (
    <>
      {/* Navbar section with logo and mode toggle button */}
      <div className="navBar">
        <img className="logo" src={Quizzo} alt="" />
        <button className="Mode" onClick={toggleMode}>
          {isBlack ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>

      <div className="main">
        <div className="container" style={{ backgroundColor: containerColor }}>
          {/* Display current question number and total questions */}
          <h2 className="NoOfQues">
            Question: {questionIndex + 1} out of {questionsData.length}
          </h2>

          {/* Display the question text with optional highlighting */}
          <h1
            className="Questions"
            style={{ color: isHighlighted ? "red" : "black" }}
          >
            {questionsData[questionIndex].text}
          </h1>

          {/* Render options for the current question */}
          <div className="options">
            {questionsData[questionIndex].options.map((option) => (
              <div
                key={option.id}
                className="option"
                onClick={() => handleOptionClick(option.isCorrect)}
              >
                <span className="ABCD">
                  {String.fromCharCode(65 + option.id)}.{" "}
                </span>
                {option.text}
              </div>
            ))}
          </div>

          {/* Buttons for highlighting and removing highlight */}
          <div className="Btns">
            <button className="Btn" onClick={highlightText}>
              Highlight
            </button>
            <button className="Btn" onClick={removeHighlight}>
              Remove Highlight
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionBox;
