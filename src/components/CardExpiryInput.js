import React from 'react';

const CardExpiryInput = ({ value, onChange }) => {
  const formatExpiryDate = (date) => {
    // 숫자 이외의 문자 제거
    const cleaned = date.replace(/[^0-9]/g, '');

    // 최대 4자리까지만 사용 (MMYY)
    const limited = cleaned.slice(0, 4);

    // MM/YY 형식으로 포맷
    if (limited.length >= 3) {
      return `${limited.slice(0, 2)}/${limited.slice(2, 4)}`;
    } else if (limited.length >= 1) {
      return `${limited.slice(0, 2)}`;
    }
    return limited;
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatExpiryDate(inputValue);
    onChange(formattedValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="MM/YY"
      maxLength="5" // 최대 길이 설정 (MM/YY)
    />
  );
};

export default CardExpiryInput;