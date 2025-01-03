import React, { useState } from 'react';
import MultipleChoiceQuestion from './MultipleChoiceQuestion.js'
import AddressInputQuestion from './AddressInputQuestion.js'
import SliderQuestion from './SliderQuestion.js'


const Question = ({ questionData, onAnswer }) => {
  const { type, ...rest } = questionData;

  switch (type) {
    case 'multiple-choice':
      return <MultipleChoiceQuestion {...rest} onAnswer={onAnswer} />;  
    case 'address-input':
      return <AddressInputQuestion {...rest} onAnswer={onAnswer} />;
    case 'slider':
      return <SliderQuestion {...rest} onAnswer={onAnswer} />
    default:
      return <div>Invalid question type</div>
    
  }
}

export default Question;