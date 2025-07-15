import ProjectCard from "./ProjectCard";

const projectsData = [
	{
		title: "프로젝트 A - 웹 애플리케이션",
		description: "React와 Node.js를 활용한 풀스택 웹 애플리케이션 개발",
		technologies: ["React", "Node.js", "MongoDB"],
		role: "프론트엔드 개발 및 API 설계",
		icon: "웹",
		gradientColors: ["#60a5fa", "#a855f7"],
		iconColor: "#2563eb"
	},
	{
		title: "프로젝트 B - 모바일 앱",
		description: "React Native를 사용한 크로스 플랫폼 모바일 애플리케이션",
		technologies: ["React Native", "Firebase", "Redux"],
		role: "UI/UX 디자인 및 개발",
		icon: "📱",
		gradientColors: ["#4ade80", "#3b82f6"],
		iconColor: "#16a34a"
	},
	{
		title: "프로젝트 C - 백엔드 시스템",
		description: "Spring Boot를 활용한 RESTful API 서버 개발",
		technologies: ["Spring Boot", "PostgreSQL", "JWT"],
		role: "백엔드 아키텍처 설계 및 구현",
		icon: "🗄️",
		gradientColors: ["#fb923c", "#ef4444"],
		iconColor: "#ea580c"
	},
	{
		title: "프로젝트 D - 데이터 분석",
		description: "Python을 활용한 데이터 분석 및 시각화 프로젝트",
		technologies: ["Python", "Pandas", "Matplotlib"],
		role: "데이터 전처리 및 분석",
		icon: "📊",
		gradientColors: ["#c084fc", "#ec4899"],
		iconColor: "#9333ea"
	}
];

export default function ProjectsSection() {
	return (
		<section style={{ 
			padding: '64px 32px', 
			backgroundColor: '#f9fafb' 
		}}>
			<div style={{ 
				maxWidth: '1152px', 
				margin: '0 auto' 
			}}>
				<h2 style={{ 
					fontSize: '30px', 
					fontWeight: 'bold', 
					textAlign: 'center', 
					marginBottom: '48px', 
					color: '#1f2937' 
				}}>참여 프로젝트</h2>
				
				<div style={{ 
					display: 'grid', 
					gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
					gap: '32px' 
				}}>
					{projectsData.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</div>
			</div>
		</section>
	);
} 