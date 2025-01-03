import React, { useState } from 'react';

const SliderQuestion = ({ question, sliders, onAnswer }) => {

  const handleChange = (index, value) => {
    onAnswer((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  return (
    <div>
      <h3>{question}</h3>
      {sliders.map((slider, index) => (
        <div key={index}>
          <label>{slider.label}</label>
          <input
            type="range"
            min="1"
            max="10"
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default SliderQuestion;