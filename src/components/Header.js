import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Header 컴포넌트는 페이지 상단의 헤더를 표시
const Header = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  // 장바구니 아이콘 클릭 핸들러
  const handleCartClick = () => {
    navigate('/shopping-cart');
  };

  return (
    <header className="header">
      {/* 장바구니 아이콘과 상품 개수 표시 */}
      <div className="cart-icon-container" onClick={handleCartClick} style={{ cursor: 'pointer' }}>
        {/* 장바구니 아이콘 이미지 */}
        <img src={`${process.env.PUBLIC_URL}/images/bag.png`} alt="Cart" className="cart-icon" />
        {/* 장바구니에 상품이 있는 경우에만 상품 개수 표시 */}
        {cart.length > 0 && (
          <span className="cart-count">{cart.length}</span>
        )}
      </div>
    </header>
  );
};

export default Header;