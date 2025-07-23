import './globals.css';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <header className="navbar bg-base-100 shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center w-full">
          <a href="/" className="text-2xl font-bold text-primary">goorm shop</a>
          <div className="flex gap-4">
            <a href="/subpage" className="btn btn-outline btn-sm">서브 페이지로 이동</a>
            <a href="/login" className="btn btn-primary btn-sm">로그인</a>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-6">
        <section className="mb-8">
          <h1 className="text-4xl font-extrabold text-center text-base-content mb-8">인기 상품</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card shadow-lg bg-base-200">
              <figure>
                <img 
                  src="https://via.placeholder.com/400x250/61DAFB/FFFFFF?text=상품+A" 
                  alt="상품 A" 
                  className="h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">고급 키보드</h2>
                <p>최고의 타이핑 경험을 선사합니다.</p>
                <div className="card-actions justify-end">
                  <span className="text-xl font-bold">₩ 85,000</span>
                  <button className="btn btn-primary">장바구니</button>
                </div>
              </div>
            </div>

            <div className="card shadow-lg bg-base-200">
              <figure>
                <img 
                  src="https://via.placeholder.com/400x250/FF6347/FFFFFF?text=상품+B" 
                  alt="상품 B" 
                  className="h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">무선 마우스</h2>
                <p>정확하고 편안한 작업 환경.</p>
                <div className="card-actions justify-end">
                  <span className="text-xl font-bold">₩ 32,000</span>
                  <button className="btn btn-primary">장바구니</button>
                </div>
              </div>
            </div>

            <div className="card shadow-lg bg-base-200">
              <figure>
                <img 
                  src="https://via.placeholder.com/400x250/3CB371/FFFFFF?text=상품+C" 
                  alt="상품 C" 
                  className="h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">초고속 SSD</h2>
                <p>데이터 전송 속도의 혁명.</p>
                <div className="card-actions justify-end">
                  <span className="text-xl font-bold">₩ 120,000</span>
                  <button className="btn btn-primary">장바구니</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center p-8 bg-base-200 rounded-lg shadow-md mt-12">
          <h2 className="text-3xl font-bold mb-4 text-base-content">새로운 소식</h2>
          <p className="text-lg text-gray-600 mb-6">최신 상품과 이벤트를 확인하세요!</p>
          <button className="btn btn-accent btn-lg">더 알아보기</button>
        </section>
      </main>

      <footer className="footer footer-center p-6 bg-base-200 text-base-content mt-auto shadow-inner">
        <div>
          <p>© 2025 Goorm Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}