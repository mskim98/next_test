import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 다크 테마 적용
document.body.classList.add('dark');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 