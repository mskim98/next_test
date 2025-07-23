import React from 'react';
import { Link } from 'react-router-dom';

function SubPage() {
  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="card w-full max-w-4xl bg-gradient-to-br from-base-200 via-base-300 to-base-200 shadow-2xl border border-base-300/50 p-8 text-center rounded-3xl">
        {/* 히어로 섹션 */}
        <div className="mb-8">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-6">
            🚀 서브 페이지입니다!
          </h1>
          <p className="text-xl text-base-content/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            이 페이지는 Goorm Shop의 서브 콘텐츠를 제공합니다. 메인 페이지와 별도로 구성되어 있으며,
            여기서 더 자세한 정보나 특정 기능을 탐색할 수 있습니다.
            <br />
            아래 버튼을 클릭하여 다시 메인 페이지로 돌아갈 수 있습니다.
          </p>
        </div>

        {/* 액션 버튼 */}
        <div className="flex justify-center gap-6 mb-12">
          <Link to="/" className="btn btn-lg btn-primary hover:btn-secondary transition-all duration-300 hover:scale-105 shadow-xl group">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            메인 페이지로 돌아가기
          </Link>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-secondary hover:btn-accent transition-all duration-300 hover:scale-105 shadow-xl group">
            <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            Google 방문하기
          </a>
        </div>

        {/* 통계 섹션 */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-2xl bg-gradient-to-br from-base-300 to-base-400 border border-base-400/50 w-full rounded-2xl overflow-hidden">
          <div className="stat bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title text-base-content/70 font-semibold">다운로드</div>
            <div className="stat-value text-primary text-3xl">2.6M</div>
            <div className="stat-desc text-base-content/60">21% 더 많음</div>
          </div>
          <div className="stat bg-gradient-to-br from-secondary/10 to-secondary/5">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title text-base-content/70 font-semibold">페이지 뷰</div>
            <div className="stat-value text-secondary text-3xl">2.6M</div>
            <div className="stat-desc text-base-content/60">21% 더 많음</div>
          </div>
          <div className="stat bg-gradient-to-br from-accent/10 to-accent/5">
            <div className="stat-figure text-accent">
              <div className="avatar online">
                <div className="w-16 rounded-full ring-4 ring-accent/30 shadow-lg">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="아바타" />
                </div>
              </div>
            </div>
            <div className="stat-value text-base-content text-3xl">86%</div>
            <div className="stat-title text-base-content/70 font-semibold">과제 완료</div>
            <div className="stat-desc text-accent">31% 진행률</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubPage; 