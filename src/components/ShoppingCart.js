import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ShoppingCart.css';

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
    <div className="shopping-cart-page">
      <div className="shopping-cart-header">
        <button className="back-button" onClick={handleBackButton}>←</button>
      </div>
      <div className="cart-content">
        <h1 className="cart-title">장바구니</h1>
        {cart.length === 0 ? (
          <p>장바구니에 상품이 없습니다.</p>
        ) : (
          <>
            <p className="cart-item-count">현재 {cart.length}개의 상품이 담겨 있습니다.</p>
            <div className="cart-items">
              {cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.name} />
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <div className="cart-item-price">
                      {item.price.toLocaleString()}원
                    </div>
                    <div className="cart-item-quantity">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <p className="item-price">상품 금액 <span className="price-value">{totalItemPrice.toLocaleString()}원</span></p>
              <p className="shipping-cost">배송비 <span className="price-value">{shippingCost.toLocaleString()}원</span></p>
              <div className="divider"></div>
              <p className="total-price">총 금액 <span className="price-value">{totalPrice.toLocaleString()}원</span></p>
            </div>
            <button className="checkout-button">결제하기</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;