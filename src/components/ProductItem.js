import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-item" style={{ cursor: 'pointer' }}>
      <div onClick={handleCardClick}>
        <img src={`/images/${product.image}`} alt={product.name} className="product-image" />
        <div className="product-name">{product.name}</div>
        <div className="product-description">{product.description}</div>
        <div className="product-price">{product.price}원</div>
      </div>
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductItem;
