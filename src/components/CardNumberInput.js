import React from 'react';

const CardNumberInput = ({ value, onChange }) => {
  const formatCardNumber = (number) => {
    // 숫자 이외의 문자 제거
    const cleaned = number.replace(/[^0-9]/g, '');
    // 입력된 숫자가 16자리를 초과하지 않도록 제한
    const limited = cleaned.slice(0, 16);
    // 숫자 4자리마다 '-' 추가
    const formatted = limited.replace(/(\d{4})(?=\d)/g, '$1-');
    return formatted;
  };

  const maskCardNumber = (number) => {
    // 숫자와 '-'이 포함된 전체 문자열에서 뒷자리 8개 마스킹
    return number.replace(/(\d{4}-\d{4})(-\d{4})(-\d{4})/, '$1-****-****');
  };

  const handleChange = (e) => {
    let inputValue = e.target.value;
    // 숫자와 '-' 이외의 문자는 모두 제거
    inputValue = inputValue.replace(/[^0-9-]/g, '');
    // 입력된 값을 포맷하고 마스킹 처리
    let formattedValue = formatCardNumber(inputValue);
    formattedValue = maskCardNumber(formattedValue);
    // 19자를 초과하지 않도록 제한 (예: 1234-5678-****-****)
    if (formattedValue.length <= 19) {
      onChange(formattedValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      maxLength="19" // 입력 필드에 대한 최대 길이 제한
    />
  );
};

export default CardNumberInput;