import React, { useState } from 'react';
import Question from './Question.js'

const Quiz = ({answers, setAnswers}) => {

  const [step, setStep] = useState(0)

  const questions = [
    {
      type: 'multiple-choice',
      question: 'What grade level is your student?',
      options: ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    },
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
      type: 'multiple-choice',
      question: 'Are you interested in special admissions schools?',
      options: ['Yes', 'No'],
    },
    {
      type: 'slider',
      question: 'What is the furthest distance you would consider for your child\'s school?',
      sliders: [
        { label: 'Distance in miles'}
      ]
    },
    {
      type: 'slider',
      question: 'Rate the importance of the following:',
      sliders: [
        { label: 'Growth in performance' },
        { label: 'Absolute performance' },
        { label: 'Climate' },
        { label: 'Racial diversity' },
        { label: 'Socioeconomic diversity' },
        { label: 'College readiness' },
        { label: 'Closeness to home '}
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