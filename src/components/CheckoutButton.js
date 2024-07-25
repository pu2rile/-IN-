import React from 'react';

const CheckoutButton = () => {
  const handleCheckout = () => {
    // 결제 처리 로직
    alert('결제가 진행됩니다.');
  };

  return <button onClick={handleCheckout}>결제</button>;
};

export default CheckoutButton;