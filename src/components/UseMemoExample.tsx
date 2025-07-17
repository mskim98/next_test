'use client';

import { useState, useMemo } from 'react';

function heavyComputation(num: number) {
  // 일부러 느리게 (예: 1억번 루프)
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += num * num;
  }
  return result;
}

export default function UseMemoExample() {
  const [input, setInput] = useState('');
  const num = Number(input) || 0;

  const computed = useMemo(() => {
    if (!input) return '-';
    return heavyComputation(num);
  }, [num, input]);

  return (
    <section className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">🔶 useMemo 개념: 계산 결과 캐싱</h2>
      <p className="text-gray-600 mb-4">
        입력 값이 바뀔 때만 복잡한 연산을 실행하고, 그렇지 않으면 캐싱된 값을 재사용합니다.
      </p>
      <input
        type="number"
        placeholder="숫자 입력"
        className="border px-3 py-2 rounded"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <p className="mt-4">결과: <span>{computed}</span></p>
    </section>
  );
} 