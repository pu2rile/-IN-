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
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
    />
  );
};

export default CardHolderNameInput;