'use client';

interface ContactCardProps {
	icon: string;
	title: string;
	content: string;
	bgColor: string;
}

function ContactCard({ icon, title, content, bgColor }: ContactCardProps) {
	return (
		<div style={{ 
			padding: '32px', 
			border: '1px solid #e5e7eb', 
			borderRadius: '12px',
			transition: 'box-shadow 0.3s ease'
		}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
			<div style={{ 
				width: '64px', 
				height: '64px', 
				margin: '0 auto 16px auto', 
				backgroundColor: bgColor, 
				borderRadius: '50%', 
				display: 'flex', 
				alignItems: 'center', 
				justifyContent: 'center', 
				color: 'white', 
				fontSize: '24px' 
			}}>
				{icon}
			</div>
			<h3 style={{ 
				fontSize: '20px', 
				fontWeight: '600', 
				marginBottom: '12px', 
				color: '#1f2937' 
			}}>{title}</h3>
			<p style={{ 
				color: '#4b5563' 
			}}>{content}</p>
		</div>
	);
}

export default function ContactSection() {
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
				<h2 style={{ 
					fontSize: '30px', 
					fontWeight: 'bold', 
					marginBottom: '48px', 
					color: '#1f2937' 
				}}>연락처</h2>
				<div style={{ 
					display: 'grid', 
					gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
					gap: '32px' 
				}}>
					<ContactCard 
						icon="📧" 
						title="이메일" 
						content="me@example.com" 
						bgColor="#3b82f6" 
					/>
					<ContactCard 
						icon="🐙" 
						title="GitHub" 
						content="github.com/myusername" 
						bgColor="#1f2937" 
					/>
					<ContactCard 
						icon="💼" 
						title="LinkedIn" 
						content="linkedin.com/in/myusername" 
						bgColor="#2563eb" 
					/>
				</div>
			</div>
		</section>
	);
} 