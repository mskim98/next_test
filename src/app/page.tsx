import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div style={{ 
			minHeight: '100vh', 
			backgroundColor: '#f9fafb' 
		}}>
			<Navigation />
			<HeroSection />
			<InfoSection />
			<SkillsSection />
			<ToolsSection />
			<Footer />
		</div>
	);
}
