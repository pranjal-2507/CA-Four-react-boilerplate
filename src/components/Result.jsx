import React from 'react'
import  './Result.css'

export default function Result() {
  return (
    <div>
      <button className='Mode'>Dark</button>
      <div className="cont">
        <h1 className='result'>RESULT</h1>
        <h2 className='score'>1 out of 5 Correct - (20%)</h2>
        <button className='restart'>RESTART</button>
      </div>
    </div>
  )
}
