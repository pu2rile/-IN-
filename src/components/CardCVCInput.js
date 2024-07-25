import React from 'react';

const CardCVCInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 3) {
      onChange(inputValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="CVC"
    />
  );
};

export default CardCVCInput;