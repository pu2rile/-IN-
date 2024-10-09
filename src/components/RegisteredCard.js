import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisteredCard.css';

const RegisteredCard = ({ card = {}, totalItems = 0, totalPrice = 0 }) => {
  const navigate = useNavigate();
  const { cardNumber = '', expiry = '', holderName = '' } = card;

  console.log('RegisteredCard Props:', { totalItems, totalPrice, card });

  const handlePaymentClick = () => {
    console.log(`Card ending in ${cardNumber.slice(-4)} selected for payment.`);
    console.log('Total Items:', totalItems);
    console.log('Total Price:', totalPrice);

    navigate('/payment-success', { state: { totalItems, totalPrice } });
  };

  return (
    <>
      <div className="registered-card">
        <div className="card-chip"></div>
        <div className="card-number">{`${cardNumber.slice(0, 4)} **** **** ****`}</div>
        <div className="card-holder-expiry">
          <div className="card-holder">{holderName}</div>
          <div className="expiry-date">{expiry}</div>
        </div>
      </div>
      <div className="payment-button-container">
        <button className="payment-button" onClick={handlePaymentClick}>
          이 카드로 결제하기
        </button>
      </div>
    </>
  );
};

export default RegisteredCard;