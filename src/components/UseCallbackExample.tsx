'use client';

import { useCallback, useRef } from 'react';

export default function UseCallbackExample() {
  const renderCount = useRef(0);
  renderCount.current++;

  // useCallback 사용: deps가 없으므로 최초 1회만 생성
  const handleClick = useCallback(() => {
    // 함수 인스턴스가 바뀌는지 콘솔에서 확인
    console.log('handleClick 함수 인스턴스:', handleClick);
    alert('클릭! 콘솔을 확인하세요.');
  }, []);

  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">🟤 useCallback 개념: 함수 재사용</h2>
      <p className="text-gray-600 mb-4">
        버튼 클릭 시 동일한 함수를 사용하여 렌더링 성능을 향상시키는 예시를 흉내냅니다.
      </p>
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={handleClick}
        id="cbBtn"
      >
        클릭
      </button>
      <p className="mt-2 text-sm text-gray-500">(콘솔에서 함수 생성 여부 확인)</p>
    </section>
  );
} 