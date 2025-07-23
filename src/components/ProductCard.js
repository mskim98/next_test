import React, { useState } from 'react';

function ProductCard({ product }) {
  const { name, price, imageUrl, description, category } = product;
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    // 실제 프로젝트에서는 여기에 카트 추가 로직 구현
    setTimeout(() => {
      setIsAddingToCart(false);
      // 성공 메시지나 토스트 표시
    }, 1000);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  // 카테고리별 색상 매핑
  const getCategoryColor = (category) => {
    const colors = {
      '키보드': 'bg-blue-500',
      '마우스': 'bg-purple-500',
      '저장장치': 'bg-green-500',
      '노트북': 'bg-indigo-500',
      '오디오': 'bg-yellow-500',
      '모니터': 'bg-red-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col">
      {/* 이미지 컨테이너 */}
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        
        {/* 이미지 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* 상단 배지들 */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {/* 할인 배지 */}
          <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
            -20%
          </div>
          
          {/* 가격 배지 */}
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-600">
            ₩{price.toLocaleString()}
          </div>
        </div>

        {/* 왼쪽 배지들 */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {/* 재고 상태 */}
          <div className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            재고
          </div>
          
          {/* 카테고리 */}
          {category && (
            <div className={`${getCategoryColor(category)} text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg`}>
              {category}
            </div>
          )}
        </div>

        {/* 찜하기 버튼 */}
        <button 
          onClick={handleLike}
          className={`absolute top-3 left-20 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            isLiked 
              ? 'bg-red-500 text-white' 
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20'
          }`}
        >
          <svg className="w-4 h-4" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>
      </div>
      
      {/* 컨텐츠 영역 */}
      <div className="p-6 flex-1 flex flex-col">
        {/* 제목 */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {name}
        </h3>
        
        {/* 설명 */}
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {description}
          </p>
        )}
        
        {/* 가격 정보 */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ₩{price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
              ₩{(price * 1.2).toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
            </svg>
            무료 배송
          </div>
        </div>

        {/* 수량 선택 */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">수량:</span>
              <div className="flex items-center bg-white dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500">
                <button 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors duration-200 rounded-l-lg disabled:opacity-50 disabled:hover:bg-transparent"
                  disabled={quantity <= 1}
                >
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <span className="px-4 py-2 text-center min-w-[3rem] font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-600">
                  {quantity}
                </span>
                <button 
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors duration-200 rounded-r-lg disabled:opacity-50 disabled:hover:bg-transparent"
                  disabled={quantity >= 99}
                >
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-300">총 금액</p>
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                ₩{(price * quantity).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* 장바구니 버튼 */}
        <button 
          onClick={handleAddToCart}
          disabled={isAddingToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-auto"
        >
          {isAddingToCart ? (
            <>
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              추가 중...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
              </svg>
              장바구니에 추가
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductCard; 