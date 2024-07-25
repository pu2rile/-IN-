import React, { useState } from 'react';
import CardNumberInput from './CardNumberInput';
import CardExpiryInput from './CardExpiryInput';
import CardHolderNameInput from './CardHolderNameInput';
import CardCVCInput from './CardCVCInput';
import CardPasswordInput from './CardPasswordInput';
import RegisterCardButton from './RegisterCardButton';

const CardForm = ({ onAddCard }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [holderName, setHolderName] = useState('');
  const [cvc, setCVC] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const card = { cardNumber, expiry, holderName, cvc, password };
    onAddCard(card);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardNumberInput value={cardNumber} onChange={setCardNumber} />
      <CardExpiryInput value={expiry} onChange={setExpiry} />
      <CardHolderNameInput value={holderName} onChange={setHolderName} />
      <CardCVCInput value={cvc} onChange={setCVC} />
      <CardPasswordInput value={password} onChange={setPassword} />
      <RegisterCardButton />
    </form>
  );
};

export default CardForm;