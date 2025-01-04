import React, { useState } from 'react';
import MultipleChoiceQuestion from './MultipleChoiceQuestion.js'
import AddressInputQuestion from './AddressInputQuestion.js'
import SliderQuestion from './SliderQuestion.js'


const Question = ({ questionData, onAnswer, currentAnswer }) => {
  const { type, ...rest } = questionData;

  switch (type) {
    case 'multiple-choice':
      return <MultipleChoiceQuestion {...rest} onAnswer={onAnswer} />;  
    case 'address-input':
      return <AddressInputQuestion {...rest} onAnswer={onAnswer} />;
    case 'slider':
      return <SliderQuestion {...rest} onAnswer={onAnswer} initialValues={currentAnswer}/>
    default:
      console.log(type);
      return <div>Invalid question type</div>
    
  }
}

export default Question;