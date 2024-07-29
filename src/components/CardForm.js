import React, { useState } from 'react';

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
        <input
          type="text"
          id="card-number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="card-number-input"
        />
      </div>
      <div className="form-group">
        <label className="input-label" htmlFor="expiry">만료일</label>
        <input
          type="text"
          id="expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          className="expiry-input"
          placeholder="MM/YY"
        />
      </div>
      <div className="form-group">
        <label className="input-label" htmlFor="holder-name">카드 소유자 이름</label>
        <input
          type="text"
          id="holder-name"
          value={holderName}
          onChange={(e) => setHolderName(e.target.value)}
          className="holder-name-input"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </div>
      <div className="form-group">
        <label className="input-label" htmlFor="cvc">보안 코드(CVC/CBB)</label>
        <input
          type="password"
          id="cvc"
          value={cvc}
          onChange={(e) => setCVC(e.target.value)}
          className="cvc-input"
        />
      </div>
      <div className="form-group">
        <label className="input-label" htmlFor="password">카드 비밀번호</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password-input"
        />
      </div>
      <button className="register-card-button">카드 등록</button>
    </form>
  );
};

export default CardForm;