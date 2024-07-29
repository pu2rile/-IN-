import React, { useState } from 'react';
import AddCardButton from './AddCardButton'; // 카드 추가 버튼 컴포넌트
import RegisteredCard from './RegisteredCard'; // 등록된 카드 컴포넌트

const CardManagement = () => {
  const [cards, setCards] = useState([]);
  const [addingCard, setAddingCard] = useState(false);

  const handleAddCard = (card) => {
    setCards([...cards, card]);
    setAddingCard(false);
  };

  return (
    <div className="card-management">
      <div className="card-header">
        <h2>보유카드</h2>
        <button className="close-button" onClick={() => {/* 닫기 버튼 동작 */}}>×</button>
      </div>
      {cards.length === 0 ? (
        <div className="no-cards">
          <p>새로운 카드를 등록해주세요.</p>
          <AddCardButton onClick={() => setAddingCard(true)} />
        </div>
      ) : (
        <div className="cards-list">
          {cards.map((card, index) => <RegisteredCard key={index} card={card} />)}
          <AddCardButton onClick={() => setAddingCard(true)} />
        </div>
      )}
    </div>
  );
};

export default CardManagement;