import React from 'react';

const CardPasswordInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 4) {
      onChange(inputValue);
    }
  };

  return (
    <input
      type="password"
      value={value}
      onChange={handleChange}
      placeholder="카드 비밀번호"
    />
  );
};

export default CardPasswordInput;