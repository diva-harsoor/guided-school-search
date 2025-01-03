import React, { useState } from 'react';
import Question from './Question.js'

const Quiz = () => {

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      type: 'address-input',
      question: 'Where do you live?'
    },
    {
      type: 'multiple-choice',
      question: 'Are you interested in charter schools?',
      options: ['Yes', 'No']
    },
    {
      type: 'slider',
      question: 'Rate the importance of the following:',
      sliders: [
        { label: 'Distance from home' },
        { label: 'Improvement in student performance'},
        { label: 'Absolute student performance'}
      ]
    }
  ]

  const handleAnswer = (answer) => {
    setAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[step] = answer;
      return updatedAnswers;
    });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="question-container">
      <h2>Guided Search</h2>
      <Question questionData={questions[step]} onAnswer={handleAnswer} />

      <button onClick={prevStep} disabled={step === 0}>Back</button>
      <button onClick={nextStep} disabled={step === questions.length - 1}>Next</button>
      <button>Get Results</button>
    </div>
  );
}

export default Quiz;