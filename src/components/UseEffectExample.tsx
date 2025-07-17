'use client';

import { useState, useEffect } from 'react';

export default function UseEffectExample() {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p className="text-lg">⏱️ 현재 시간: <span>{time}</span></p>
    </div>
  );
} 