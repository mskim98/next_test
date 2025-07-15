import Image from "next/image";

export default function InfoSection() {
	return (
		<section style={{ 
			padding: '64px 32px', 
			backgroundColor: 'white' 
		}}>
			<div style={{ 
				maxWidth: '896px', 
				margin: '0 auto', 
				textAlign: 'center' 
			}}>
				<Image 
					src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop&crop=center" 
					alt="코드 이미지" 
					width={200} 
					height={200} 
					style={{ 
						borderRadius: '16px', 
						margin: '0 auto 32px auto', 
						boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
						border: '4px solid white' 
					}}
				/>
				<p style={{ 
					fontSize: '18px', 
					color: '#374151', 
					maxWidth: '672px', 
					margin: '0 auto', 
					lineHeight: '1.7' 
				}}>
					저는 웹 개발자입니다. 사용자 경험과 퍼포먼스를 중요하게 생각합니다.
				</p>
			</div>
		</section>
	);
} 