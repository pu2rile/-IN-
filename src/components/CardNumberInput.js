import React from 'react';

const CardNumberInput = ({ value, onChange }) => {
  const formatCardNumber = (number) => {
    return number.replace(/[^0-9]/g, '').replace(/(\d{4})(?=\d)/g, '$1-');
  };

  const handleChange = (e) => {
    let inputValue = e.target.value;
    // 숫자와 '-' 이외의 문자는 모두 제거
    inputValue = inputValue.replace(/[^0-9-]/g, '');
    // 숫자 4자리마다 '-' 추가
    inputValue = formatCardNumber(inputValue);
    // 19자를 초과하지 않도록 제한 (예: 1234-5678-9012-3456)
    if (inputValue.length <= 19) {
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