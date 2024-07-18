import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Header 컴포넌트는 페이지 상단의 헤더를 표시
const Header = () => {
  // useCart 훅을 사용하여 장바구니 상태를 가져옴
  const { cart } = useCart();
  // useNavigate 훅을 사용하여 네비게이션 기능 사용
  const navigate = useNavigate();
  // useLocation 훅을 사용하여 현재 경로를 가져옴
  const location = useLocation();

  // handleCartClick 함수는 장바구니 페이지로 이동
  const handleCartClick = () => {
    navigate('/cart');
  };

  // handleBackClick 함수는 이전 페이지로 이동
  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <header className="header">
      {/* 장바구니 페이지인 경우 뒤로가기 버튼을 표시 */}
      {location.pathname === '/cart' && (
        <button onClick={handleBackClick} className="back-button">
          뒤로가기
        </button>
      )}
      {/* 장바구니 페이지가 아닌 경우 장바구니 아이콘과 상품 개수를 표시 */}
      {location.pathname !== '/cart' && (
        <div className="cart-icon-container" onClick={handleCartClick} style={{ cursor: 'pointer' }}>
          {/* 장바구니 아이콘 이미지 */}
          <img src="/cart-icon.png" alt="Cart" className="cart-icon" />
          {/* 장바구니에 담긴 상품 개수 */}
          <span className="cart-count">{cart.length}</span>
          {/* 장바구니 텍스트 */}
          <div className="cart-text">Cart</div>
        </div>
      )}
    </header>
  );
};

export default Header;
