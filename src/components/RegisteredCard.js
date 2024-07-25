import React from 'react';

const RegisteredCard = ({ card }) => {
  return (
    <div className="registered-card">
      <p>{card.number}</p>
      <p>{card.holderName}</p>
    </div>
  );
};

export default RegisteredCard;