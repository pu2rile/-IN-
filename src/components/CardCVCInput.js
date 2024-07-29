import React from 'react';

const CardCVCInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    let inputValue = e.target.value.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거
    if (inputValue.length > 3) inputValue = inputValue.slice(0, 3); // 최대 3자리까지만 허용

    onChange(inputValue); // 부모 컴포넌트에 실제 값을 전달
  };

  return (
    <input
      type="password" // 비밀번호 입력 필드로 설정하여 자동 마스킹 처리
      value={value}
      onChange={handleChange}
      maxLength="3" // 최대 입력 길이 3자리
    />
  );
};

export default CardCVCInput;