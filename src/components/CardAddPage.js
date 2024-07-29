import React from 'react';
import CardForm from './CardForm';
import { useNavigate } from 'react-router-dom';

const CardAddPage = () => {
  const navigate = useNavigate();

  const handleAddCard = (card) => {
    console.log('카드 정보:', card);
    // 카드 정보를 서버에 전송하거나 다른 처리를 수행합니다.
    navigate('/card-management'); // 카드 등록 후 카드 관리 페이지로 이동
  };

  return (
    <div className="card-add-page">
      <div className="card-header">
        <button className="close-button" onClick={() => navigate('/card-management')}>×</button>
        <h2>카드 추가</h2>
      </div>
      <CardForm onAddCard={handleAddCard} />
    </div>
  );
};

export default CardAddPage;