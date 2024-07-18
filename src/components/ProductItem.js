import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

// ProductItem 컴포넌트는 단일 상품의 정보를 표시합니다.
const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  // handleCardClick 함수는 상품 카드를 클릭했을 때 상품 상세 페이지로 이동합니다.
  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  // 가격을 30,000원 형식으로 포맷팅
  const formattedPrice = product.price.toLocaleString('ko-KR');

  return (
    <div className="product-item" style={{ cursor: 'pointer' }}>
      {/* 상품 카드를 클릭하면 handleCardClick 함수가 호출됩니다. */}
      <div onClick={handleCardClick}>
        {/* 상품 이미지를 표시합니다. */}
        <img src={`/images/${product.image}`} alt={product.name} className="product-image" />
        {/* 상품 이름을 표시합니다. */}
        <div className="product-name">{product.name}</div>
        {/* 상품 설명을 표시합니다. */}
        <div className="product-description">{product.description}</div>
        {/* 포맷팅된 가격을 표시합니다. */}
        <div className="product-price">{formattedPrice}원</div>
      </div>
      {/* AddToCartButton 컴포넌트를 사용하여 장바구니에 담기 버튼을 표시합니다. */}
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductItem;
