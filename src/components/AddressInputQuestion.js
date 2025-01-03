import React, { useState } from 'react';

const AddressInputQuestion = ({ question, onAnswer }) => {

  const handleChange = (event) => {
    onAnswer(event.target.value);
  };

  return (
    <div>
      <h3>{question}</h3>
      <input
        type="text"
        placeholder="Enter address"
        onChange={handleChange}
      />
    </div>
  );
};

export default AddressInputQuestion;