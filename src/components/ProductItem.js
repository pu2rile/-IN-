import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

// ProductItem 컴포넌트는 단일 상품의 정보를 표시
const ProductItem = ({ product }) => {
  // useNavigate 훅을 사용하여 네비게이션 기능 사용
  const navigate = useNavigate();

  // handleCardClick 함수는 상품 카드를 클릭했을 때 상품 상세 페이지로 이동
  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  // 가격을 30,000원 형식으로 포맷팅
  const formattedPrice = product.price.toLocaleString('ko-KR');

  return (
    <div className="product-item" style={{ cursor: 'pointer' }}>
      {/* 상품 카드를 클릭하면 handleCardClick 함수가 호출됨 */}
      <div onClick={handleCardClick}>
        {/* 상품 이미지 표시 */}
        <img src={`/images/${product.image}`} alt={product.name} className="product-image" />
        {/* 상품 이름 표시 */}
        <div className="product-name">{product.name}</div>
        {/* 상품 설명 표시 */}
        <div className="product-description">{product.description}</div>
        {/* 포맷팅된 가격 표시 */}
        <div className="product-price">{formattedPrice}원</div>
      </div>
      {/* AddToCartButton 컴포넌트를 사용하여 장바구니에 담기 버튼 표시 */}
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductItem;
