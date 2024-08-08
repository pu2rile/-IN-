import React, { useEffect } from 'react';
import AddCardButton from './AddCardButton';
import RegisteredCard from './RegisteredCard';
import Modal from './Modal';
import './CardManagement.css';

const CardManagement = ({ cards, isOpen, onClose, openCardAddPage }) => {
  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  const handleAddCard = () => {
    openCardAddPage();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="card-management">
        <div className="card-header">
          <h2 className="card-title">보유카드</h2>
        </div>
        <div className="cards-list">
          {cards.length === 0 ? (
            <div className="no-cards">
              <p>새로운 카드를 등록해주세요.</p>
            </div>
          ) : (
            cards.map((card, index) => <RegisteredCard key={index} card={card} />)
          )}
          <AddCardButton onClick={handleAddCard} />
        </div>
      </div>
    </Modal>
  );
};

export default CardManagement;