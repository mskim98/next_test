interface SkillCardProps {
	icon: string;
	title: string;
	description: string;
}

export default function SkillCard({ icon, title, description }: SkillCardProps) {
	return (
		<div style={{ 
			backgroundColor: 'var(--bg-secondary)', 
			padding: '24px', 
			border: '1px solid var(--border-color)', 
			borderRadius: '16px', 
			boxShadow: '0 25px 50px -12px var(--shadow-color)',
			transition: 'all 0.3s ease'
		}}>
			<div style={{ textAlign: 'center' }}>
				<div style={{ 
					width: '64px', 
					height: '64px', 
					margin: '0 auto 16px auto', 
					backgroundColor: '#3b82f6', 
					borderRadius: '50%', 
					display: 'flex', 
					alignItems: 'center', 
					justifyContent: 'center', 
					color: 'white', 
					fontSize: '24px', 
					fontWeight: 'bold' 
				}}>
					{icon}
				</div>
				<h3 style={{ 
					fontSize: '20px', 
					fontWeight: 'bold', 
					color: 'var(--text-primary)', 
					marginBottom: '12px' 
				}}>{title}</h3>
				<p style={{ 
					color: 'var(--text-secondary)', 
					fontSize: '14px', 
					lineHeight: '1.6' 
				}}>{description}</p>
			</div>
		</div>
	);
} 