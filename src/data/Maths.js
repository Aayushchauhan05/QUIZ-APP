import React, { useState } from "react";
import './Maths.css';
import { resultintial } from "./api";

const MATHS = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [result, setResult] = useState(resultintial);
  const [showResult, setShowResult] = useState(false);

  const onClickNext = () => {
    if (answerIndex !== null) {
      setResult((prevResult) => ({
        ...prevResult,
        totalQuestions: prevResult.totalQuestions + 1,
        correctAnswers: isAnswerCorrect ? prevResult.correctAnswers + 1 : prevResult.correctAnswers,
        score: isAnswerCorrect ? prevResult.score + 5 : prevResult.score,
      }));

      if (currentQuestion !== questions.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      } else {
        setCurrentQuestion(0);
        setShowResult(true);
      }

      setAnswerIndex(null);
      setIsAnswerCorrect(null);
    }
  };

  const onAnswerClick = (answer, index) => {
    setAnswerIndex(index);
    setIsAnswerCorrect(answer === questions[currentQuestion].correctAnswer);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <span className="active-question">{currentQuestion + 1}</span>
          <span className="total-question">/{questions.length}</span>
          <h1>{questions[currentQuestion].question}</h1>
          <ul>
            {questions[currentQuestion].choices.map((answer, index) => (
              <li
                onClick={() => onAnswerClick(answer, index)}
                key={answer}
                className={answerIndex === index ? 'selected-answer' : null}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="footer">
            <button onClick={onClickNext} disabled={answerIndex === null}>
              {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>Total Questions: <span>{result.totalQuestions}</span> </p>
          <p>Correct Answers: <span>{result.correctAnswers}</span></p>
          <p>Score: <span>{result.score}</span></p>
          <p> corect Answer: <span>{result.wrongAnswer}</span></p>
        </div>
      )}
    </div>
  );
};

export default MATHS;
