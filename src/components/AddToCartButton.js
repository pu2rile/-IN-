import React from 'react';
import { useCart } from '../context/CartContext';

// AddToCartButton 컴포넌트는 상품을 장바구니에 추가하는 버튼을 표시
const AddToCartButton = ({ product }) => {
  // useCart 훅을 사용하여 장바구니 상태와 addToCart, isProductAdded 함수를 가져옴
  const { addToCart, isProductAdded } = useCart();

  // handleAddToCart 함수는 상품을 장바구니에 추가
  const handleAddToCart = () => {
    addToCart(product);
  };

  // isProductAdded 함수로 해당 상품이 장바구니에 추가되었는지 확인
  const isAdded = isProductAdded(product.id);

  return (
    // 버튼 클릭 시 handleAddToCart 함수가 호출됩니다. 상품이 이미 추가된 경우 버튼이 비활성화됨
    <button 
      onClick={handleAddToCart} 
      disabled={isAdded} 
      className={isAdded ? 'added' : ''}
    >
      {isAdded ? '담김!' : '담기'}
    </button>
  );
};

export default AddToCartButton;
