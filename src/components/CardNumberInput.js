import React from 'react';

const CardNumberInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 16) {
      onChange(inputValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="카드 번호"
    />
  );
};

export default CardNumberInput;