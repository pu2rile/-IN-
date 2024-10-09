const handlePayment = () => {
    const totalItems = cart.length;
    const totalPrice = totalItemPrice + shippingCost;

    // navigate로 페이지를 이동하기 전에, 전달할 state 값을 로그로 출력
    console.log('Navigating with state:', { totalItems, totalPrice });

    navigate('/payment-success', { state: { totalItems, totalPrice } });
};