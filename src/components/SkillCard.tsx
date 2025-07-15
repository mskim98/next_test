interface SkillCardProps {
	icon: string;
	title: string;
	description: string;
}

export default function SkillCard({ icon, title, description }: SkillCardProps) {
	return (
		<div style={{ 
			backgroundColor: 'white', 
			padding: '24px', 
			border: '1px solid #e5e7eb', 
			borderRadius: '16px', 
			boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
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
					color: '#1f2937', 
					marginBottom: '12px' 
				}}>{title}</h3>
				<p style={{ 
					color: '#4b5563', 
					fontSize: '14px', 
					lineHeight: '1.6' 
				}}>{description}</p>
			</div>
		</div>
	);
} 