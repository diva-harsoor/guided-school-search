import React, { useState } from 'react';

function MultipleChoiceQuestion({ question, options, onAnswer }) {
  const handleChange = (event) => {
    onAnswer(event.target.value);
  };

  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <label>
        <input
          type="radio"
          name="multiple-choice"
          value={option}
          onChange={handleChange}
        />
        {option}
        </label>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestion;