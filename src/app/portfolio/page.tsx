import Navigation from "@/components/Navigation";
import PortfolioHeader from "@/components/PortfolioHeader";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
	return (
		<div style={{ 
			minHeight: '100vh', 
			backgroundColor: 'var(--bg-primary)' 
		}}>
			<Navigation />
			<PortfolioHeader />
			<ProjectsSection />
			<ContactSection />
			<Footer />
		</div>
	);
} 