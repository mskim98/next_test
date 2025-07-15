'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		// 로컬 스토리지에서 테마 설정 불러오기
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		
		if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
			setIsDark(true);
			document.documentElement.classList.add('dark');
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = !isDark;
		setIsDark(newTheme);
		
		if (newTheme) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	};

	return (
		<button
			onClick={toggleTheme}
			style={{
				width: '40px',
				height: '40px',
				borderRadius: '50%',
				border: 'none',
				backgroundColor: 'transparent',
				color: 'white',
				fontSize: '20px',
				cursor: 'pointer',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				transition: 'all 0.3s ease'
			}}
			onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
			onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
		>
			{isDark ? '☀️' : '🌙'}
		</button>
	);
} 