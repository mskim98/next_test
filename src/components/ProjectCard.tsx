'use client';

interface ProjectCardProps {
	title: string;
	description: string;
	technologies: string[];
	role: string;
	icon: string;
	gradientColors: string[];
	iconColor: string;
}

export default function ProjectCard({ 
	title, 
	description, 
	technologies, 
	role, 
	icon, 
	gradientColors, 
	iconColor 
}: ProjectCardProps) {
	return (
		<article style={{ 
			backgroundColor: 'white', 
			borderRadius: '12px', 
			boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
			overflow: 'hidden',
			transition: 'box-shadow 0.3s ease'
		}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}>
			<div style={{ 
				height: '192px', 
				background: `linear-gradient(to bottom right, ${gradientColors[0]}, ${gradientColors[1]})`, 
				display: 'flex', 
				alignItems: 'center', 
				justifyContent: 'center' 
			}}>
				<div style={{ 
					width: '80px', 
					height: '80px', 
					backgroundColor: 'white', 
					borderRadius: '50%', 
					display: 'flex', 
					alignItems: 'center', 
					justifyContent: 'center' 
				}}>
					<span style={{ 
						fontSize: '24px', 
						fontWeight: 'bold', 
						color: iconColor 
					}}>{icon}</span>
				</div>
			</div>
			<div style={{ padding: '32px' }}>
				<h3 style={{ 
					fontSize: '20px', 
					fontWeight: 'bold', 
					marginBottom: '16px', 
					color: '#1f2937' 
				}}>{title}</h3>
				<p style={{ 
					color: '#4b5563', 
					marginBottom: '24px' 
				}}>{description}</p>
				<div style={{ 
					display: 'flex', 
					flexWrap: 'wrap', 
					gap: '8px', 
					marginBottom: '16px' 
				}}>
					{technologies.map((tech, index) => (
						<span key={index} style={{ 
							padding: '4px 12px', 
							backgroundColor: '#dbeafe', 
							color: '#1e40af', 
							borderRadius: '16px', 
							fontSize: '14px', 
							fontWeight: '500' 
						}}>{tech}</span>
					))}
				</div>
				<p style={{ 
					fontSize: '14px', 
					color: '#6b7280' 
				}}><strong>역할:</strong> {role}</p>
			</div>
		</article>
	);
} 