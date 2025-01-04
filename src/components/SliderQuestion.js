import React, { useEffect, useRef, useState } from 'react';

const SliderQuestion = ({ question, sliders, onAnswer, initialValues }) => {
  const sliderRefs = useRef([]);
  const [sliderValues, setSliderValues] = useState(
    initialValues || sliders.map(() => 1)
  );

  useEffect(() => {
    if (initialValues) {
      setSliderValues(initialValues);
    }
  }, [initialValues]);

  useEffect(() => {
    sliderRefs.current.forEach((slider, index) => {
      if (slider) {
        updateSlider(index);
      }
    });
  }, [sliderValues]);

  const handleChange = (index, value) => {
    const newValue = Number(value);
    const updatedValues = [...sliderValues];
    updatedValues[index] = newValue;
    setSliderValues(updatedValues);
    onAnswer(updatedValues);
    updateSlider(index);
  };

  const updateSlider = (index) => {
    const slider = sliderRefs.current[index];
    if (!slider) return;
    
    const value = sliderValues[index];
    const max = slider.max || 10;
    const thumbWidth = 20;
    const range = slider.offsetWidth - thumbWidth;
    const adjustedPercentage = ((value - 1) / (max - 1)) * 100;

    slider.style.background = `linear-gradient(to right, #ea8c55 0%, #ea8c55 ${adjustedPercentage}%, #eff6ee ${adjustedPercentage}%, #eff6ee 100%)`;
  };

  return (
    <div>
      <h3>{question}</h3>
      {sliders.map((slider, index) => (
        <div key={index}>
          <label>{slider.label}</label>
          <input 
            className="slider"
            type="range"
            ref={el => sliderRefs.current[index] = el}
            min="1"
            max="10"
            value={sliderValues[index]}
            onChange={(e) => handleChange(index, e.target.value)}
          />
          <span>{sliderValues[index]} of 10</span>
        </div>
      ))}
    </div>
  );
};

export default SliderQuestion;
