import React from 'react';

function Footer() {
  return (
    <footer className="footer footer-center p-8 bg-gradient-to-r from-base-200 via-base-300 to-base-200 text-base-content mt-auto shadow-2xl border-t border-base-300/50">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-primary-content font-bold text-lg">G</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Goorm Shop
            </span>
          </div>
          <p className="text-base-content/80 text-center text-lg">
            최고의 품질과 서비스로 여러분의 디지털 라이프를 더욱 풍요롭게 만들어드립니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-6">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-3 text-base-content">고객 지원</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-300">
                고객센터
              </a>
              <a href="#" className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-300">
                배송 조회
              </a>
              <a href="#" className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-300">
                반품/교환
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="font-bold text-lg mb-3 text-base-content">회사 정보</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-300">
                이용약관
              </a>
              <a href="#" className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-300">
                개인정보처리방침
              </a>
              <a href="#" className="link link-hover text-base-content/70 hover:text-primary transition-colors duration-300">
                회사 소개
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="font-bold text-lg mb-3 text-base-content">연락처</h3>
            <div className="flex flex-col gap-2">
              <p className="text-base-content/70">전화: 1588-1234</p>
              <p className="text-base-content/70">이메일: support@goormshop.com</p>
              <p className="text-base-content/70">운영시간: 평일 09:00-18:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-base-300/50 pt-6 text-center">
          <p className="text-base-content/60">
            © 2025 Goorm Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 