import React, { useEffect, useRef } from 'react';

const SliderQuestion = ({ question, sliders, onAnswer }) => {
  // Create an array of refs for all sliders
  const sliderRefs = useRef([]);


  const updateSlider = (index) => {
    const slider = sliderRefs.current[index];
    if (!slider) return;
    
    const value = slider.value;
    const max = slider.max || 10;
    // Calculate percentage but adjust for the thumb width
    const thumbWidth = 20; // width of the thumb in pixels
    const range = slider.offsetWidth - thumbWidth;
    const adjustedPercentage = ((value - 1) / (max - 1)) * 100;
    
    slider.style.background = `linear-gradient(to right, #ea8c55 0%, #ea8c55 ${adjustedPercentage}%, #eff6ee ${adjustedPercentage}%, #eff6ee 100%)`;
  };

  useEffect(() => {
    // Initialize all sliders
    sliderRefs.current.forEach((slider, index) => {
      if (slider) {
        updateSlider(index);
      }
    });
  }, [sliders.length]); // Dependency on sliders.length to reinitialize if sliders change

  const handleChange = (index, value) => {
    onAnswer((prev) => ({
      ...prev,
      [index]: value,
    }));
    // Update the slider appearance when value changes
    updateSlider(index);
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
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default SliderQuestion;