import React from 'react';
import ProductCard from '../components/ProductCard';

function HomePage() {
  // 실제 상품 데이터
  const productsData = [
    {
      id: 'prod1',
      name: '로지텍 MX Keys S 무선 키보드',
      price: 189000,
      category: '키보드',
      description: '정밀한 타이핑과 편안한 사용감을 제공하는 프리미엄 무선 키보드',
      imageUrl: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'prod2',
      name: '로지텍 MX Master 3S 무선 마우스',
      price: 129000,
      category: '마우스',
      description: '8000 DPI 센서와 마그네틱 휠로 정밀한 작업을 지원하는 무선 마우스',
      imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'prod3',
      name: '삼성 970 EVO Plus 1TB NVMe SSD',
      price: 89000,
      category: '저장장치',
      description: '3500MB/s 읽기 속도로 빠른 시스템 부팅과 파일 전송을 경험하세요',
      imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'prod4',
      name: '애플 MacBook Pro 14인치 M3',
      price: 2890000,
      category: '노트북',
      description: 'M3 칩으로 구동되는 최신 MacBook Pro, 전문가급 성능을 제공합니다',
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'prod5',
      name: '소니 WH-1000XM5 노이즈 캔슬링 헤드폰',
      price: 399000,
      category: '오디오',
      description: '업계 최고 수준의 노이즈 캔슬링과 30시간 배터리 수명을 자랑합니다',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'prod6',
      name: 'LG 27GP850-B 게이밍 모니터',
      price: 599000,
      category: '모니터',
      description: '165Hz 주사율과 1ms 응답시간으로 부드러운 게이밍 경험을 제공합니다',
      imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="container mx-auto p-6">
      {/* 히어로 섹션 */}
      <section className="text-center mb-12">
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 mb-8 border border-base-300/50">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            인기 상품
          </h1>
          <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
            최고의 품질과 합리적인 가격으로 제공되는 프리미엄 제품들을 만나보세요
          </p>
        </div>
      </section>

      {/* 상품 그리드 */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((product, index) => (
            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* 새로운 소식 섹션 */}
      <section className="text-center p-12 bg-gradient-to-br from-base-200 via-base-300 to-base-200 rounded-3xl shadow-2xl border border-base-300/50 hover:shadow-3xl transition-all duration-500">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            새로운 소식
          </h2>
          <p className="text-xl text-base-content/80 mb-8 leading-relaxed">
            최신 상품과 특별한 이벤트 소식을 가장 먼저 받아보세요!
          </p>
          <button className="btn btn-accent btn-lg hover:btn-primary transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group">
            <span className="group-hover:translate-x-1 transition-transform duration-300">더 알아보기</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage; 