import React from 'react';
import Navbar from './navbar/Navbar';
import './App.css'; // Import your CSS file
import Card from './card/Card';
import MATHS from './data/Maths';
import {quiz} from './data/api'



function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="heading">
          <div className="image">
            <img
              src="https://www.pngmart.com/files/19/Quiz-Logo-PNG-HD.png"
              alt=""
            />
          </div>
          <h1>QUIZ CATEGORY</h1>
        </div>
       <Card/>
       
    {/* <MATHS questions={quiz.questions} /> */}
      
      </main>
    </div>
  );
}

export default App;
