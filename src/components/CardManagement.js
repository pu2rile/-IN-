import React, { useState } from 'react';
import AddCardButton from './AddCardButton'; // 카드 추가 버튼 컴포넌트
import CardForm from './CardForm'; // 카드 입력 폼 컴포넌트
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
      <h2>보유카드</h2>
      {cards.length === 0 ? (
        <AddCardButton onClick={() => setAddingCard(true)} />
      ) : (
        <div>
          {cards.map((card, index) => <RegisteredCard key={index} card={card} />)}
          <AddCardButton onClick={() => setAddingCard(true)} />
        </div>
      )}
      {addingCard && <CardForm onAddCard={handleAddCard} />}
    </div>
  );
};

export default CardManagement;