import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="cart">
      <h2>장바구니</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <span>{item.price}원</span>
        </div>
      ))}
      <div>총합: {cart.reduce((total, item) => total + item.price, 0)}원</div>
    </div>
  );
};

export default Cart;
