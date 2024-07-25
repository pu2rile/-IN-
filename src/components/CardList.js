import React from 'react';
import AddCardButton from './AddCardButton';
import RegisteredCard from './RegisteredCard';

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.length === 0 ? (
        <AddCardButton />
      ) : (
        cards.map((card, index) => (
          <RegisteredCard key={index} card={card} />
        ))
      )}
    </div>
  );
};

export default CardList;