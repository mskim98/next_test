import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SubPage from './pages/SubPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-base-100 dark">
        <Header /> {/* Header 컴포넌트는 모든 페이지에 공통 */}

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subpage" element={<SubPage />} />
            {/* 404 Not Found 페이지 (선택 사항) */}
            <Route path="*" element={
              <div className="flex-1 flex items-center justify-center p-6">
                <div className="card bg-error text-error-content shadow-xl text-center p-8">
                  <h2 className="text-4xl font-bold mb-4">⚠️ 404 Not Found</h2>
                  <p className="text-lg">페이지를 찾을 수 없습니다.</p>
                </div>
              </div>
            } />
          </Routes>
        </main>

        <Footer /> {/* Footer 컴포넌트는 모든 페이지에 공통 */}
      </div>
    </Router>
  );
}

export default App; 