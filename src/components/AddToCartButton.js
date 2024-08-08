import React from 'react';
import { useCart } from '../context/CartContext';

const AddToCartButton = ({ product }) => {
  const { addToCart, isProductAdded } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const isAdded = isProductAdded(product.id);

  return (
    <button 
      onClick={handleAddToCart} 
      disabled={isAdded} 
      className={`add-button ${isAdded ? 'added' : ''}`}
    >
      {isAdded ? '담김!' : '담기'}
    </button>
  );
};

export default AddToCartButton;