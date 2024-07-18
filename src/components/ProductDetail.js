import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// ProductDetail 컴포넌트는 단일 상품의 상세 정보를 표시
const ProductDetail = () => {
  // useParams 훅을 사용하여 URL에서 상품 ID를 가져옴
  const { id } = useParams();
  // useCart 훅을 사용하여 장바구니 상태와 addToCart 함수를 가져옴
  const { cart, addToCart } = useCart();

  // 하드코딩된 상품 데이터 배열
  const products = [
    { id: 1, name: '브랜드A', price: 35000, image: 'product1.jpeg', description: '편안하고 착용감이 좋은 신발' },
    { id: 2, name: '브랜드A', price: 25000, image: 'product2.jpg', description: '힙한 컬러가 매력적인 신발' },
    { id: 3, name: '브랜드B', price: 35000, image: 'product3.png', description: '편안하고 착용감이 좋은 신발' },
    { id: 4, name: '브랜드B', price: 35000, image: 'product4.png', description: '힙한 컬러가 매력적인 신발' },
    { id: 5, name: '브랜드C', price: 35000, image: 'product5.jpg', description: '편안하고 착용감이 좋은 신발' },
    { id: 6, name: '브랜드C', price: 35000, image: 'product6.png', description: '힙한 컬러가 매력적인 신발' }
  ];

  // URL에서 가져온 ID와 일치하는 상품을 찾아 변수에 저장
  const product = products.find(p => p.id === parseInt(id));

  // 만약 일치하는 상품이 없다면 "상품을 찾을 수 없습니다." 메시지 표시
  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      {/* 상품 이름 표시 */}
      <h1>{product.name}</h1>
      {/* 상품 이미지 표시 */}
      <img src={product.image} alt={product.name} />
      {/* 상품 설명 표시 */}
      <p>{product.description}</p>
      {/* 상품 가격 표시 */}
      <p>{product.price.toLocaleString('ko-KR')}원</p>
      {/* "장바구니에 담기" 버튼을 표시하고, 클릭 시 addToCart 함수를 호출하여 상품을 장바구니에 추가 */}
      <button onClick={() => addToCart(product)}>장바구니에 담기</button>
    </div>
  );
};

export default ProductDetail;
