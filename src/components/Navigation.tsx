'use client';

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

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
			<div style={{ 
				fontSize: '24px', 
				fontWeight: 'bold', 
				color: 'white' 
			}}>
				Portfolio
			</div>
			<div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
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
				<ThemeToggle />
			</div>
		</nav>
	);
} 