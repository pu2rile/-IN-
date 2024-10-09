import React from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  const location = useLocation();
  const { totalItems = 0, totalPrice = 0 } = location.state || {};

  console.log('Received state in PaymentSuccess:', location.state);
  console.log('Total Items:', totalItems);  // 올바른 값이 출력되는지 확인
  console.log('Total Price:', totalPrice);  // 올바른 값이 출력되는지 확인

  return (
    <div className="payment-success-container">
      <div className="payment-success-content">
        <h1 className="payment-success-title">결제 완료!</h1>
        <p className="payment-success-description">
          총 {totalItems}개의 상품을 구매하셨습니다.
        </p>
        <div className="payment-success-amount">
          <span>총 결제 금액</span>
          <strong>{totalPrice.toLocaleString()}원</strong>
        </div>
        <button className="payment-success-button">
          상품 목록 보기
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;