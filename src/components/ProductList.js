import React from 'react';
import ProductItem from './ProductCard';

// 하드코딩된 상품 데이터 배열
const products = [
  { id: 1, name: '브랜드A', price: 35000, image: 'product1.jpeg', description: '편안하고 착용감이 좋은 신발' },
  { id: 2, name: '브랜드A', price: 25000, image: 'product2.jpg', description: '힙한 컬러가 매력적인 신발' },
  { id: 3, name: '브랜드B', price: 35000, image: 'product3.png', description: '편안하고 착용감이 좋은 신발' },
  { id: 4, name: '브랜드B', price: 35000, image: 'product4.png', description: '힙한 컬러가 매력적인 신발' },
  { id: 5, name: '브랜드C', price: 35000, image: 'product5.jpg', description: '편안하고 착용감이 좋은 신발' },
  { id: 6, name: '브랜드C', price: 35000, image: 'product6.png', description: '힙한 컬러가 매력적인 신발' }
];

// ProductList 컴포넌트는 상품 목록을 렌더링
const ProductList = ({ onProductCount }) => {
  // useEffect 훅을 사용하여 컴포넌트가 마운트될 때 상품 개수를 상위 컴포넌트로 전달
  React.useEffect(() => {
    onProductCount(products.length);
  }, [onProductCount]);

  return (
    <div className="product-list">
      {/* 상품 배열을 반복하여 각 상품에 대해 ProductItem 컴포넌트를 렌더링 */}
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
