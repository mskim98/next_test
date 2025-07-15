'use client';

export default function ToolsSection() {
	return (
		<section id="tools" style={{ 
			padding: '64px 32px', 
			backgroundColor: 'white' 
		}}>
			<div style={{ 
				maxWidth: '896px', 
				margin: '0 auto' 
			}}>
				<h2 style={{ 
					fontSize: '30px', 
					fontWeight: 'bold', 
					textAlign: 'center', 
					marginBottom: '48px', 
					color: '#1f2937' 
				}}>사용 툴</h2>
				<div style={{ 
					backgroundColor: 'white', 
					borderRadius: '12px', 
					boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
					overflow: 'hidden' 
				}}>
					<table style={{ width: '100%' }}>
						<thead>
							<tr style={{ backgroundColor: '#f3f4f6' }}>
								<th style={{ 
									padding: '16px 32px', 
									textAlign: 'left', 
									fontWeight: '600', 
									color: '#1f2937' 
								}}>툴 이름</th>
								<th style={{ 
									padding: '16px 32px', 
									textAlign: 'left', 
									fontWeight: '600', 
									color: '#1f2937' 
								}}>설명</th>
							</tr>
						</thead>
						<tbody>
							<tr style={{ 
								borderBottom: '1px solid #e5e7eb',
								transition: 'background-color 0.2s ease'
							}} onMouseEnter={(e) => (e.target as HTMLElement).parentElement!.style.backgroundColor = '#f9fafb'} onMouseLeave={(e) => (e.target as HTMLElement).parentElement!.style.backgroundColor = 'transparent'}>
								<td style={{ 
									padding: '16px 32px', 
									fontWeight: '500', 
									color: '#1f2937' 
								}}>VSCode</td>
								<td style={{ 
									padding: '16px 32px', 
									color: '#4b5563' 
								}}>마이크로소프트의 코드 에디터</td>
							</tr>
							<tr style={{ 
								borderBottom: '1px solid #e5e7eb',
								transition: 'background-color 0.2s ease'
							}} onMouseEnter={(e) => (e.target as HTMLElement).parentElement!.style.backgroundColor = '#f9fafb'} onMouseLeave={(e) => (e.target as HTMLElement).parentElement!.style.backgroundColor = 'transparent'}>
								<td style={{ 
									padding: '16px 32px', 
									fontWeight: '500', 
									color: '#1f2937' 
								}}>Git & GitHub</td>
								<td style={{ 
									padding: '16px 32px', 
									color: '#4b5563' 
								}}>버전관리 및 코드 저장소</td>
							</tr>
							<tr style={{ 
								borderBottom: '1px solid #e5e7eb',
								transition: 'background-color 0.2s ease'
							}} onMouseEnter={(e) => (e.target as HTMLElement).parentElement!.style.backgroundColor = '#f9fafb'} onMouseLeave={(e) => (e.target as HTMLElement).parentElement!.style.backgroundColor = 'transparent'}>
								<td style={{ 
									padding: '16px 32px', 
									fontWeight: '500', 
									color: '#1f2937' 
								}}>Figma</td>
								<td style={{ 
									padding: '16px 32px', 
									color: '#4b5563' 
								}}>디자인 및 UI/UX 협업 도구</td>
							</tr>
							<tr style={{ 
								transition: 'background-color 0.2s ease'
							}} onMouseEnter={(e) => (e.target as HTMLElement).parentElement!.style.backgroundColor = '#f9fafb'} onMouseLeave={(e) => (e.target as HTMLElement).parentElement!.style.backgroundColor = 'transparent'}>
								<td style={{ 
									padding: '16px 32px', 
									fontWeight: '500', 
									color: '#1f2937' 
								}}>Postman</td>
								<td style={{ 
									padding: '16px 32px', 
									color: '#4b5563' 
								}}>API 테스트 및 개발 도구</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
} 