import React, { useState } from 'react';
import './Result.css';
import QuestionBox from './QuestionBox';
import Quizzo from "./Quizzo.png";

export default function Result() {
  const [showQuestionBox, setShowQuestionBox] = useState(false);

  const handleBack = () => {
    setShowQuestionBox(true);
  };

  if (showQuestionBox) {
    return <QuestionBox />;
  }

  return (
    <div>
       <img className="logo" src={Quizzo} alt="" />
      <button className='Mode'>Dark</button>
      <div className="cont">
        <h1 className='result'>RESULT</h1>
        <h2 className='score'>1 out of 5 Correct - (20%)</h2>
        <button className='restart' onClick={handleBack}>RESTART</button>
      </div>
    </div>
  );
}
