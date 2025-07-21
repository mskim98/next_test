'use client';

import { useRef } from "react";

export default function UseRefExample() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>입력창에 포커스</button>
    </div>
  );
} 