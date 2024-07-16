import React from 'react';
import ProductImage from './ProductImage';
import AddToCartButton from './AddToCartButton';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <ProductImage src={product.image} alt={product.name} />
      <div>
        <div>{product.name}</div>
        <div>{product.price}원</div>
      </div>
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductItem;
