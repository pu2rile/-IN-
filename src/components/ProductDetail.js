import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart();

  // 이 예제에서는 간단히 제품 정보를 하드코딩합니다.
  // 실제로는 API 호출 등을 통해 데이터를 가져올 수 있습니다.
  const products = [
    { id: 1, name: '브랜드A', price: 35000, image: 'product1.jpeg', description: '편안하고 착용감이 좋은 신발' },
    { id: 2, name: '브랜드A', price: 25000, image: 'product2.jpg', description: '힙한 컬러가 매력적인 신발' },
    { id: 3, name: '브랜드B', price: 35000, image: '/images/image3.jpg', description: '편안하고 착용감이 좋은 신발' },
    { id: 4, name: '브랜드B', price: 35000, image: '/images/image4.jpg', description: '힙한 컬러가 매력적인 신발' },
    { id: 5, name: '브랜드C', price: 35000, image: '/images/image5.jpg', description: '편안하고 착용감이 좋은 신발' },
    { id: 6, name: '브랜드C', price: 35000, image: '/images/image6.jpg', description: '힙한 컬러가 매력적인 신발' }
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}원</p>
      <button onClick={() => addToCart(product)}>장바구니에 담기</button>
    </div>
  );
};

export default ProductDetail;