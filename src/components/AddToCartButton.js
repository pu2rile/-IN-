import React from 'react';
import { useCart } from '../context/CartContext';

// AddToCartButton 컴포넌트는 단일 상품을 장바구니에 추가하는 버튼 제공
const AddToCartButton = ({ product }) => {
  // useCart 훅을 사용하여 addToCart 함수와 isProductAdded 함수를 가져옴
  const { addToCart, isProductAdded } = useCart();

  // handleAddToCart 함수는 상품을 장바구니에 추가
  const handleAddToCart = () => {
    addToCart(product);
  };

  // isAdded 변수는 해당 상품이 장바구니에 추가되었는지 여부 확인
  const isAdded = isProductAdded(product.id);

  return (
    <button 
      onClick={handleAddToCart} 
      disabled={isAdded} 
      className={isAdded ? 'added' : ''}
    >
      {/* 버튼 텍스트는 상품이 장바구니에 추가되었는지 여부에 따라 다르게 표시됨 */}
      {isAdded ? '담김!' : '담기'}
    </button>
  );
};

export default AddToCartButton;
