import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import RegisteredCard from './RegisteredCard';
import CardManagement from './CardManagement';
import CardAddPage from './CardAddPage';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [quantities, setQuantities] = useState(cart.map(item => ({ id: item.id, quantity: 1 })));
  const [isCardManagementOpen, setIsCardManagementOpen] = useState(false);
  const [isCardAddOpen, setIsCardAddOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [totalItems, setTotalItems] = useState(cart.length);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);

  const calculateTotals = useCallback(() => {
    const newTotalItemPrice = cart.reduce((total, item, index) => total + item.price * quantities[index].quantity, 0);
    const newShippingCost = newTotalItemPrice >= 100000 ? 0 : 3000;
    const newTotalPrice = newTotalItemPrice + newShippingCost;

    setTotalItems(cart.length);
    setTotalPrice(newTotalPrice);
    setShippingCost(newShippingCost);
  }, [cart, quantities]);

  useEffect(() => {
    calculateTotals();
  }, [cart, quantities, cards]);

  useEffect(() => {
    if (isCardManagementOpen) {
      const timer = setTimeout(() => {
        calculateTotals();
      }, 100); // 지연 추가
      return () => clearTimeout(timer);
    }
  }, [isCardManagementOpen, calculateTotals]);

  const handleBackButton = () => {
    navigate('/');
  };

  const handleCheckout = () => {
    setIsCardManagementOpen(true);
  };

  const handleQuantityChange = (id, delta) => {
    setQuantities(prevQuantities =>
      prevQuantities.map(q =>
        q.id === id
          ? { ...q, quantity: Math.max(1, q.quantity + delta) }
          : q
      )
    );
  };

  const openCardAddPage = () => setIsCardAddOpen(true);
  const closeCardAddPage = () => setIsCardAddOpen(false);

  const addCard = (newCard) => {
    setCards(prevCards => [...prevCards, newCard]);
    setIsCardAddOpen(false);
    setIsCardManagementOpen(true);
  };

  return (
    <div className="shopping-cart-page">
      <div className="shopping-cart-header">
        <button className="back-button" onClick={handleBackButton}>
          <img src={`${process.env.PUBLIC_URL}/images/cart-back-icon.png`} alt="뒤로가기" className="back-icon" />
        </button>
      </div>
      <div className="cart-content">
        <h1 className="cart-title">장바구니</h1>
        {cart.length === 0 ? (
          <p>장바구니에 상품이 없습니다.</p>
        ) : (
          <>
            <p className="cart-item-count">현재 {totalItems}개의 상품이 담겨 있습니다.</p>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div className="cart-item" key={item.id}>
                  <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.name} />
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <div className="cart-item-price">
                      {item.price.toLocaleString()}원
                    </div>
                    <div className="cart-item-quantity">
                      <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                      <span>{quantities.find(q => q.id === item.id).quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <p className="item-price">상품 금액 <span className="price-value">{(totalPrice - shippingCost).toLocaleString()}원</span></p>
              <p className="shipping-cost">배송비 <span className="price-value">{shippingCost.toLocaleString()}원</span></p>
              <div className="divider"></div>
              <p className="total-price">총 금액 <span className="price-value">{totalPrice.toLocaleString()}원</span></p>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>결제하기</button>
          </>
        )}
      </div>
      {isCardManagementOpen && totalItems > 0 && totalPrice > 0 && (
        <RegisteredCard
          totalItems={totalItems}
          totalPrice={totalPrice}
          card={cards[0] || { cardNumber: '', expiry: '', holderName: '' }}
        />
      )}
      <CardManagement 
        cards={cards}
        isOpen={isCardManagementOpen} 
        onClose={() => setIsCardManagementOpen(false)} 
        openCardAddPage={openCardAddPage}
      />
      <CardAddPage 
        addCard={addCard}
        isOpen={isCardAddOpen} 
        onClose={closeCardAddPage} 
      />
    </div>
  );
};

export default ShoppingCart;