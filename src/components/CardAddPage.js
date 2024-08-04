import React, { useState } from 'react';
import CardForm from './CardForm';
import { useNavigate } from 'react-router-dom';
import './CardAddPage.css';

const CardAddPage = ({ addCard }) => {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiry: '',
    holderName: '',
    cvc: '',
    password: ''
  });

  const handleAddCard = (newCard) => {
    addCard(newCard);
    navigate('/card-management');
  };

  return (
    <div className="card-add-page">
      <div className="card-add-header">
        <button className="back-button" onClick={() => navigate('/card-management')}>
          <img src={`${process.env.PUBLIC_URL}/images/back-icon.png`} alt="뒤로가기" className="back-icon" />
        </button>
        <h2>카드 추가</h2>
        <button className="close-button" onClick={() => navigate('/')}>×</button>
      </div>

      {/* 카드 미리보기 섹션 */}
      <div className="preview-section">
        <div className="live-preview-card">
          <div className="live-preview-card-chip"></div>
          <div className="card-content">
            <div className="card-number">
              {cardData.cardNumber || ''}
            </div>
            <div className="card-holder-expiry">
              <div className="card-holder">
                {cardData.holderName || 'NAME'}
              </div>
              <div className="expiry-date">
                {cardData.expiry || 'MM/YY'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 카드 입력 폼 섹션 */}
      <div className="form-section">
        <CardForm onAddCard={handleAddCard} cardData={cardData} setCardData={setCardData} />
      </div>
    </div>
  );
};

export default CardAddPage;