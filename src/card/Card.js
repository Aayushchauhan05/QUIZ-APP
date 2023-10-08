import React from 'react'
import './Card.css';
import MATHS from '../data/Maths';
function Card() {
  function quiz() {
   return <MATHS/>;
  }
  return (
   <>
     <div className="maincon d-flex justify-content-evenly h-60">
          <div className="card">
            <span></span>
            <div className="content" onClick={quiz}>React</div>
          </div>
          <div className="card">
            <span></span>
            <div className="content">HTML Quiz</div>
          </div>
          <div className="card">
            <span></span>
            <div className="content">JavaScript Quiz</div>
          </div>
        </div>
        
   </>
  )
}

export default Card