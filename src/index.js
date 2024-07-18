import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// React 애플리케이션의 진입점
// ReactDOM.createRoot를 사용하여 React 애플리케이션을 렌더링할 루트를 만듦
const root = ReactDOM.createRoot(document.getElementById('root'));

// React 애플리케이션을 렌더링
root.render(
  // React.StrictMode는 애플리케이션의 잠재적인 문제를 감지하는 데 도움
  <React.StrictMode>
    {/* BrowserRouter는 애플리케이션에서 라우팅을 처리함 */}
    <BrowserRouter>
      {/* App 컴포넌트를 렌더링하여 애플리케이션의 주요 구조 정의 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
