'use client';

import { useRef } from 'react';

export default function UseRefExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="flex gap-2">
      <input
        ref={inputRef}
        type="text"
        placeholder="여기에 포커스됩니다"
        className="border rounded px-3 py-2"
      />
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleFocus}
      >
        포커스 이동
      </button>
    </div>
  );
} 