'use client';

import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
	return (
		<nav style={{ 
			display: 'flex', 
			alignItems: 'center', 
			justifyContent: 'space-between', 
			padding: '16px', 
			backgroundColor: '#1f2937', 
			color: 'white', 
			boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
		}}>
			<Image 
				src="https://api.dicebear.com/7.x/initials/svg?seed=Dev&backgroundColor=1e40af&textColor=ffffff&size=100" 
				alt="로고" 
				width={100} 
				height={50} 
				style={{ borderRadius: '8px' }}
			/>
			<ul style={{ display: 'flex', gap: '24px' }}>
				<li><Link href="/" style={{ 
					color: 'white', 
					textDecoration: 'none', 
					fontWeight: '500',
					transition: 'color 0.2s ease'
				}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#60a5fa'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>Home</Link></li>
				<li><Link href="/portfolio" style={{ 
					color: 'white', 
					textDecoration: 'none', 
					fontWeight: '500',
					transition: 'color 0.2s ease'
				}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#60a5fa'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>Portfolio</Link></li>
				<li><a href="#tools" style={{ 
					color: 'white', 
					textDecoration: 'none', 
					fontWeight: '500',
					transition: 'color 0.2s ease'
				}} onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#60a5fa'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'white'}>Tools</a></li>
			</ul>
		</nav>
	);
} 