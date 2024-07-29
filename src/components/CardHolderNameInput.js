import React from 'react';

const CardHolderNameInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    let inputValue = e.target.value;
    
    // 영어 알파벳과 공백만 허용
    inputValue = inputValue.replace(/[^a-zA-Z\s]/g, '');

    // 최대 길이 30자 제한
    if (inputValue.length <= 30) {
      onChange(inputValue);
    }
  };

  return (
    <div className="card-holder-input-container">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        className="card-holder-input"
      />
      <div className="character-count">{value.length} / 30</div>
    </div>
  );
};

export default CardHolderNameInput;