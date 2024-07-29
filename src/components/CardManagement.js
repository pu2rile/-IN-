import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddCardButton from './AddCardButton';
import RegisteredCard from './RegisteredCard';

const CardManagement = ({ cards }) => {
  const navigate = useNavigate();

  const handleAddCard = () => {
    navigate('/add-card');
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="card-management">
      <div className="card-header">
        <h2>보유카드</h2>
        <button className="close-button" onClick={handleClose}>×</button>
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
  );
};

export default CardManagement;