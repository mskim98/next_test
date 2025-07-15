import SkillCard from "./SkillCard";

const skillsData = [
	{
		icon: "H",
		title: "HTML",
		description: "웹 문서의 구조를 설계하고 시맨틱 마크업을 통해 접근성을 높입니다."
	},
	{
		icon: "C",
		title: "CSS",
		description: "모던한 디자인과 반응형 레이아웃을 구현하여 사용자 경험을 향상시킵니다."
	},
	{
		icon: "JS",
		title: "JavaScript",
		description: "동적이고 인터랙티브한 웹 애플리케이션을 개발합니다."
	},
	{
		icon: "R",
		title: "React",
		description: "컴포넌트 기반 UI를 구축하여 재사용 가능하고 유지보수가 쉬운 코드를 작성합니다."
	},
	{
		icon: "S",
		title: "Spring Framework",
		description: "엔터프라이즈급 서버 로직을 개발하고 안정적인 백엔드 시스템을 구축합니다."
	},
	{
		icon: "N",
		title: "Node.js",
		description: "고성능 서버 애플리케이션을 개발하고 RESTful API를 구현합니다."
	}
];

export default function SkillsSection() {
	return (
		<section style={{ 
			padding: '64px 16px', 
			backgroundColor: 'var(--bg-primary)' 
		}}>
			<div style={{ 
				maxWidth: '1152px', 
				margin: '0 auto' 
			}}>
				<div style={{ 
					textAlign: 'center', 
					marginBottom: '48px' 
				}}>
					<h2 style={{ 
						fontSize: '30px', 
						fontWeight: 'bold', 
						marginBottom: '16px', 
						color: 'var(--text-primary)' 
					}}>
						사용 기술
					</h2>
					<p style={{ 
						fontSize: '18px', 
						color: 'var(--text-secondary)', 
						maxWidth: '672px', 
						margin: '0 auto' 
					}}>
						웹 개발에 필요한 다양한 기술 스택을 활용하여 최고의 사용자 경험을 제공합니다
					</p>
				</div>
				
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
					{skillsData.map((skill, index) => (
						<SkillCard key={index} {...skill} />
					))}
				</div>
			</div>
		</section>
	);
} 