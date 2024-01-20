import React, { useState } from "react";
import "./QuestionBox.css";
import Quizzo from "./Quizzo.png";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import questionsData from "../questions";
import Result from "./Result";

function QuestionBox() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [textColor, setTextColor] = useState("black");
    const [isBlack, setIsBlack] = useState(true);
    const [containerColor, setContainerColor] = useState("white");
    const [isHighlighted, setIsHighlighted] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);

  const handleColor = () => {
    setIsBlack(!isBlack);
    setTextColor(isBlack ? "red" : "black");
  };

  const toggleMode = () => {
    setIsBlack(!isBlack);
    setTextColor(isBlack ? "white" : "black");
    setContainerColor(isBlack ? "rgb(86 81 81)" : "white");
  };

  const highlightText = () => {
    setIsHighlighted(true);
    setTextColor("red");
  };

  const removeHighlight = () => {
    setIsHighlighted(false);
    setTextColor(isBlack ? "black" : "white");
  };

  const handleOptionClick = (val) => {
    // console.log(val)
    if(val===true){
      setCorrectCount(correctCount+1)
    }
    setQuestionIndex((prevIndex) => prevIndex + 1);

    setIsHighlighted(false);
    setTextColor(isBlack ? "black" : "white");
  };

  if (questionIndex === questionsData.length) {
    return <Result correctCount={correctCount} />; 
  }

  return (
    <>
      <div className="navBar">
        <img className="logo" src={Quizzo} alt="" />
        <button className="Mode" onClick={toggleMode}>
          {isBlack ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>
      <div className="main">
        <div className="container" style={{ backgroundColor: containerColor }}>
          <h2 className="NoOfQues">
            Question: {questionIndex + 1} out of {questionsData.length}
          </h2>
          <h1
            className="Questions"
            style={{ color: isHighlighted ? "red" : "black" }}
          >
            {questionsData[questionIndex].text}
          </h1>

          <div className="options">
            {questionsData[questionIndex].options.map((option) => (
              <div
                key={option.id}
                className="option"
                onClick={()=>handleOptionClick(option.isCorrect)}
              >
                <span className="ABCD">
                  {String.fromCharCode(65 + option.id)}.{" "}
                </span>
                {option.text}
              </div>
            ))}
          </div>
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
