import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar bg-gradient-to-r from-base-200 via-base-300 to-base-200 shadow-2xl border-b border-base-300/50 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex justify-between items-center w-full">
        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          goorm shop
        </Link>
        <div className="flex gap-4">
          <Link to="/subpage" className="btn btn-outline btn-sm hover:btn-secondary transition-all duration-300 hover:scale-105 shadow-lg">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            서브 페이지
          </Link>
          <Link to="/login" className="btn btn-primary btn-sm hover:btn-accent transition-all duration-300 hover:scale-105 shadow-lg">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header; 