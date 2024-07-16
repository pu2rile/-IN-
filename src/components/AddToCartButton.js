import React from 'react';
import { useCart } from '../context/CartContext';

const AddToCartButton = ({ product }) => {
  const { addToCart, isProductAdded } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const isAdded = isProductAdded(product.id);

  return (
    <div className="button-container">
      <button onClick={handleAddToCart} disabled={isAdded}>
        {isAdded ? '담김!' : '담기'}
      </button>
      <button onClick={() => {}}>구매</button> {/* 빈 함수로 설정 */}
    </div>
  );
};

export default AddToCartButton;
