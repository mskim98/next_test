export default function PortfolioHeader() {
	return (
		<section style={{ 
			background: 'linear-gradient(to right, #2563eb, #9333ea)', 
			color: 'white', 
			padding: '80px 32px' 
		}}>
			<div style={{ 
				maxWidth: '896px', 
				margin: '0 auto', 
				textAlign: 'center' 
			}}>
				<h1 style={{ 
					fontSize: '48px', 
					fontWeight: 'bold', 
					marginBottom: '24px' 
				}}>포트폴리오</h1>
				<p style={{ 
					fontSize: '20px', 
					color: '#dbeafe' 
				}}>제가 참여한 프로젝트들을 소개합니다.</p>
			</div>
		</section>
	);
} 