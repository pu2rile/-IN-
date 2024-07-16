import React from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, name: '브랜드A', price: 35000, image: '/images/image1.jpg' },
  { id: 2, name: '브랜드A', price: 25000, image: '/images/image2.jpg' },
  { id: 3, name: '브랜드B', price: 35000, image: '/images/image3.jpg' },
  { id: 4, name: '브랜드B', price: 35000, image: '/images/image4.jpg' },
  { id: 5, name: '브랜드C', price: 35000, image: '/images/image5.jpg' },
  { id: 6, name: '브랜드C', price: 35000, image: '/images/image6.jpg' },
  // 필요한 만큼의 상품 추가
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
