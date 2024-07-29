import React from 'react';
import './RegisteredCard.css';

const RegisteredCard = ({ card }) => {
  const { cardNumber, expiry, holderName } = card;

  // 카드 번호에서 숫자만 추출하고, 앞 8자리만 표시하며 4자리마다 공백 추가
  const cleanedCardNumber = cardNumber.replace(/[^0-9]/g, ''); // 숫자만 남김
  const formattedCardNumber = cleanedCardNumber.slice(0, 8).replace(/(\d{4})(?=\d)/g, '$1 '); // 4자리마다 공백 추가
  const maskedCardNumber = `${formattedCardNumber} **** ****`;
  
  return (
    <div className="registered-card">
      <div className="card-chip"></div>
      <div className="card-number">{maskedCardNumber}</div>
      <div className="card-holder-expiry">
        <div className="card-holder">{holderName}</div>
        <div className="expiry-date">{expiry}</div>
      </div>
    </div>
  );
};

export default RegisteredCard;