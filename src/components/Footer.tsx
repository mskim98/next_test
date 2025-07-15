export default function Footer() {
	return (
		<footer style={{ 
			backgroundColor: '#111827', 
			color: 'white', 
			padding: '48px 32px' 
		}}>
			<div style={{ 
				maxWidth: '896px', 
				margin: '0 auto', 
				textAlign: 'center' 
			}}>
				<p style={{ 
					marginBottom: '8px', 
					color: '#d1d5db' 
				}}>이메일: me@example.com</p>
				<small style={{ 
					color: '#9ca3af' 
				}}>© 2025 나의 포트폴리오</small>
			</div>
		</footer>
	);
} 