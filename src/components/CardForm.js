import React, { useState } from 'react';
import CardNumberInput from './CardNumberInput';
import CardExpiryInput from './CardExpiryInput';
import CardHolderNameInput from './CardHolderNameInput';
import CardCVCInput from './CardCVCInput';
import CardPasswordInput from './CardPasswordInput';

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
    <form onSubmit={handleSubmit} className="card-form">
      <div className="form-group">
        <label className="input-label" htmlFor="card-number">카드 번호</label>
        <CardNumberInput
          value={cardNumber}
          onChange={setCardNumber}
        />
      </div>
      <div className="form-group">
        <label className="input-label" htmlFor="expiry">만료일</label>
        <CardExpiryInput
          value={expiry}
          onChange={setExpiry}
        />
      </div>
      <div className="form-group">
        <label className="input-label" htmlFor="holder-name">카드 소유자 이름</label>
        <CardHolderNameInput
          value={holderName}
          onChange={setHolderName}
        />
      </div>
      <div className="form-group">
        <label className="input-label" htmlFor="cvc">보안 코드(CVC/CBB)</label>
        <CardCVCInput
          value={cvc}
          onChange={setCVC}
        />
      </div>
      <div className="form-group">
        <label className="input-label" htmlFor="password">카드 비밀번호</label>
        <CardPasswordInput
          value={password}
          onChange={setPassword}
        />
      </div>
      <button className="register-card-button">카드 등록</button>
    </form>
  );
};

export default CardForm;