import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import ProductImage from './ProductImage';

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-item" style={{ cursor: 'pointer' }}>
      <div onClick={handleCardClick}>
        <ProductImage src={`/images/${product.image}`} alt={product.name} />
        <div>{product.name}</div>
        <div>{product.description}</div>
        <div>{product.price}원</div>
      </div>
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductItem;
