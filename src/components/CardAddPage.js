import React from 'react';
import CardForm from './CardForm';
import { useNavigate } from 'react-router-dom';

const CardAddPage = () => {
  const navigate = useNavigate();

  const handleAddCard = (card) => {
    navigate('/card-management'); // 카드 등록 후 카드 관리 페이지로 이동
  };

  return (
    <div className="card-add-page">
      <div className="card-header">
        <h2>카드 추가</h2>
        <button className="close-button" onClick={() => navigate('/')}>×</button>
      </div>
      <CardForm onAddCard={handleAddCard} />
    </div>
  );
};

export default CardAddPage;