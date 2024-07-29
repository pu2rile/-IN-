import React from 'react';

const ProductImage = ({ src, alt }) => {
  return <img src={`${process.env.PUBLIC_URL}/${src}`} alt={alt} className="product-image" />;
};

export default ProductImage;
