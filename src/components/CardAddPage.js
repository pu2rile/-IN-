import React, { useState, useEffect } from 'react';
import CardForm from './CardForm';
import Modal from './Modal';
import './CardAddPage.css';

const CardAddPage = ({ addCard, isOpen, onClose }) => {
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiry: '',
    holderName: '',
    cvc: '',
    password: ''
  });

  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  const handleAddCard = (newCard) => {
    addCard(newCard); // 부모 컴포넌트에서 전달된 addCard 함수 호출
    onClose(); // 모달 닫기
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="card-add-page">
        <div className="card-add-header">
          <button className="back-button" onClick={onClose}>
            <img src={`${process.env.PUBLIC_URL}/images/back-icon.png`} alt="뒤로가기" className="back-icon" />
          </button>
          <h2 className="card-title">카드 추가</h2>
        </div>
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
        <div className="form-section">
          <CardForm onAddCard={handleAddCard} cardData={cardData} setCardData={setCardData} />
        </div>
      </div>
    </Modal>
  );
};

export default CardAddPage;