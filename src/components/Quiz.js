import React, { useState } from 'react';
import Question from './Question.js'

const Quiz = ({ questions, answers, setAnswers }) => {
  const [step, setStep] = useState(0);

  const handleAnswer = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [step]: answer,
    }));
  };
  
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="question-container">
      <h2>Guided Search</h2>
      <Question 
        questionData={questions[step]} 
        onAnswer={handleAnswer}
        currentAnswer={answers[step]}
      />

      <button onClick={prevStep} disabled={step === 0}>Back</button>
      <button onClick={nextStep} disabled={step === questions.length - 1}>Next</button>
      <button>Get Results</button>
    </div>
  );
};

export default Quiz;