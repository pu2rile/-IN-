import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCardButton from './AddCardButton'; // 카드 추가 버튼 컴포넌트
import RegisteredCard from './RegisteredCard'; // 등록된 카드 컴포넌트

const CardManagement = () => {
  const [cards] = useState([]); // 'setCards' 제거, 'cards'만 사용
  const navigate = useNavigate();

  const handleAddCard = () => {
    navigate('/add-card');
  };

  const handleClose = () => {
    navigate('/'); // 홈 페이지로 이동
  };

  return (
    <div className="card-management">
      <div className="card-header">
        <h2>보유카드</h2>
        <button className="close-button" onClick={handleClose}>×</button>
      </div>
      {cards.length === 0 ? (
        <div className="no-cards">
          <p>새로운 카드를 등록해주세요.</p>
          <AddCardButton onClick={handleAddCard} />
        </div>
      ) : (
        <div className="cards-list">
          {cards.map((card, index) => <RegisteredCard key={index} card={card} />)}
          <AddCardButton onClick={handleAddCard} />
        </div>
      )}
    </div>
  );
};

export default CardManagement;