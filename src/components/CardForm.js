import React from 'react';
import CardNumberInput from './CardNumberInput';
import CardExpiryInput from './CardExpiryInput';
import CardHolderNameInput from './CardHolderNameInput';
import CardCVCInput from './CardCVCInput';
import CardPasswordInput from './CardPasswordInput';

const CardForm = ({ onAddCard, cardData, setCardData }) => {
  const handleInputChange = (field, value) => {
    setCardData({ ...cardData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 필드 검증 로직
    if (!cardData.cardNumber || !cardData.expiry || !cardData.holderName || !cardData.cvc || !cardData.password) {
      alert('모든 필드를 입력해야 합니다.');
      return;
    }

    // 유효성 검사
    if (!/^\d{2}\/\d{2}$/.test(cardData.expiry)) {
      alert('유효한 만료일을 MM/YY 형식으로 입력하세요.');
      return;
    }

    if (cardData.holderName.length < 2) {
      alert('유효한 카드 소유자 이름을 입력하세요.');
      return;
    }

    if (!/^\d{3,4}$/.test(cardData.cvc)) {
      alert('유효한 보안 코드(CVC)를 입력하세요.');
      return;
    }

    if (!/^\d{4}$/.test(cardData.password)) {
      alert('유효한 4자리 카드 비밀번호를 입력하세요.');
      return;
    }

    // 카드 등록 처리
    onAddCard(cardData);

    // 폼 리셋
    setCardData({
      cardNumber: '',
      expiry: '',
      holderName: '',
      cvc: '',
      password: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <div className="form-group">
        <label className="input-label" htmlFor="card-number">카드 번호</label>
        <CardNumberInput
          value={cardData.cardNumber}
          onChange={(value) => handleInputChange('cardNumber', value)}
        />
      </div>
      <div className="form-group">
        <label className="input-label" htmlFor="expiry">만료일</label>
        <CardExpiryInput
          value={cardData.expiry}
          onChange={(value) => handleInputChange('expiry', value)}
          placeholder="MM/YY"
        />
      </div>
      <div className="form-group">
        <label className="input-label" htmlFor="holder-name">카드 소유자 이름</label>
        <CardHolderNameInput
          value={cardData.holderName}
          onChange={(value) => handleInputChange('holderName', value)}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </div>
      <div className="form-group">
        <label className="input-label" htmlFor="cvc">보안 코드(CVC/CVV)</label>
        <CardCVCInput
          value={cardData.cvc}
          onChange={(value) => handleInputChange('cvc', value)}
        />
      </div>
      <div className="form-group">
        <label className="input-label" htmlFor="password">카드 비밀번호</label>
        <CardPasswordInput
          value={cardData.password}
          onChange={(value) => handleInputChange('password', value)}
        />
      </div>
      <button type="submit" className="register-card-button">카드 등록</button>
    </form>
  );
};

export default CardForm;