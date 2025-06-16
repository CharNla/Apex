import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import ProjectSection from "../sections/ProjectSection";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <ProjectSection />
            {/* Other sections of the home page can be added here */}
        </div>
    );
};

export default HomePage; 