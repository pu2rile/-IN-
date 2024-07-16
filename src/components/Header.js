import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <header className="header">
      {location.pathname === '/cart' && (
        <button onClick={handleBackClick} className="back-button">
          뒤로가기
        </button>
      )}
      <div className="cart-icon-container" onClick={handleCartClick} style={{ cursor: 'pointer' }}>
        <img src="/cart-icon.png" alt="Cart" className="cart-icon" />
        <span className="cart-count">{cart.length}</span>
      </div>
    </header>
  );
};

export default Header;
