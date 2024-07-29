import React from 'react';
import AddCardButton from './AddCardButton';
import RegisteredCard from './RegisteredCard';

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.length === 0 ? (
        <div className="no-cards-message">
          <p>등록된 카드가 없습니다.</p>
          <AddCardButton />
        </div>
      ) : (
        cards.map((card, index) => (
          <RegisteredCard key={index} card={card} />
        ))
      )}
    </div>
  );
};

export default CardList;