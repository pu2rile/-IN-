import React from 'react';
import { useCart } from '../context/CartContext';

// Header 컴포넌트는 페이지 상단의 헤더를 표시
const Header = () => {
  // useCart 훅을 사용하여 장바구니 상태를 가져옴
  const { cart } = useCart();

  return (
    <header className="header">
      {/* 장바구니 아이콘과 상품 개수 표시 */}
      <div className="cart-icon-container" style={{ cursor: 'default' }}>
        {/* 장바구니 아이콘 이미지 */}
        <img src="/images/bag.png" alt="Cart" className="cart-icon" />
        {/* 장바구니에 담긴 상품 개수 */}
        <span className="cart-count">{cart.length}</span>
      </div>
    </header>
  );
};

export default Header;
