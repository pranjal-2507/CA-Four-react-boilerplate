import React from 'react'
import './QuestionBox.css'
// import Quizzo from '/components/Quizzo.png'




 function QuestionBox() {
  return (
    <>
    {/* <div className="navBar">
      <img src={Quizzo} alt="" />
    </div> */}
  <div className="main">
    <div className="container">
        <h2 className='NoOfQues'>Question : 1 out of 5</h2>
        <h1 className='Questions'>What is React js?</h1>

        <div className="options">
          <div id='optA' className='option'><span className='ABCD'>A. </span>Server Side Framework</div>
          <div id='optB' className='option'><span className='ABCD'>B. </span>User Interface Framework</div>
          <div id='optC' className='option'><span className='ABCD'>C. </span>Both A and B</div>
          <div id='optD' className='option'><span className='ABCD'>D. </span>None of these</div>
        </div>
        <div className="Btns">
          <button className='Btn'>Highlight</button>
          <button className='Btn'>Remove Highlight</button>
        </div>
    </div>
    </div>
    </>
  )
}
export default QuestionBox
