import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const totalItemPrice = cart.reduce((total, item) => total + item.price, 0);
  const shippingCost = totalItemPrice >= 100000 ? 0 : 3000;
  const totalPrice = totalItemPrice + shippingCost;

  const handleBackButton = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleBackButton}>뒤로가기</button>
      <h1>장바구니</h1>
      {cart.length === 0 ? (
        <p>장바구니에 상품이 없습니다.</p>
      ) : (
        cart.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price.toLocaleString()}원</p>
          </div>
        ))
      )}
      <div>
        <p>상품 금액: {totalItemPrice.toLocaleString()}원</p>
        <p>배송비: {shippingCost.toLocaleString()}원</p>
        <p>총 금액: {totalPrice.toLocaleString()}원</p>
      </div>
      <button onClick={() => alert('결제 모듈 연동 예정')}>결제하기</button>
    </div>
  );
};

export default ShoppingCart;