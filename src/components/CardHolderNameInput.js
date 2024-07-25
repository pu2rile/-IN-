import React from 'react';

const CardHolderNameInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 30) {
      onChange(inputValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="카드 소유자 이름"
    />
  );
};

export default CardHolderNameInput;