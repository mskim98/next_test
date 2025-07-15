import Image from "next/image";

export default function HeroSection() {
	return (
		<section style={{ 
			position: 'relative', 
			background: 'linear-gradient(to right, #2563eb, #9333ea, #1d4ed8)', 
			color: 'white', 
			padding: '128px 32px', 
			overflow: 'hidden' 
		}}>
			{/* Background Image */}
			<div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
				<Image 
					src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop&crop=center" 
					alt="코드 배경" 
					fill 
					style={{ objectFit: 'cover', opacity: 0.2 }}
				/>
			</div>
			{/* Overlay */}
			<div style={{ 
				position: 'absolute', 
				top: 0, 
				left: 0, 
				right: 0, 
				bottom: 0, 
				background: 'linear-gradient(to right, rgba(30, 58, 138, 0.7), rgba(88, 28, 135, 0.7), rgba(30, 58, 138, 0.7))', 
				zIndex: 10 
			}}></div>
			{/* Content */}
			<div style={{ 
				position: 'relative', 
				zIndex: 20, 
				maxWidth: '896px', 
				margin: '0 auto', 
				textAlign: 'center' 
			}}>
				<h1 style={{ 
					fontSize: '60px', 
					fontWeight: 'bold', 
					marginBottom: '24px', 
					background: 'linear-gradient(to right, white, #dbeafe)', 
					WebkitBackgroundClip: 'text', 
					WebkitTextFillColor: 'transparent',
					backgroundClip: 'text'
				}}>
					안녕하세요!
				</h1>
				<p style={{ 
					fontSize: '24px', 
					color: '#dbeafe', 
					fontWeight: '300' 
				}}>저의 페이지에 방문해주셔서 감사합니다.</p>
			</div>
		</section>
	);
} 