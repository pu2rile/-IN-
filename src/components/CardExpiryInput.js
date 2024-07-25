import React from 'react';

const CardExpiryInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d{0,2}\/?\d{0,2}$/.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="MM/YY"
    />
  );
};

export default CardExpiryInput;