'use client';

import { useState } from 'react';

export default function UseStateExample() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
      클릭 수: <span>{counter}</span>
    </button>
  );
} 