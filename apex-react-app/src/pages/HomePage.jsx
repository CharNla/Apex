import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import ProjectSection from "../sections/ProjectSection";
import JournalSection from "../sections/JournalSection";
import ContactSection from "../sections/ContactSection";

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <ProjectSection />
            <JournalSection />
            <ContactSection />
            {/* Other sections of the home page can be added here */}
        </div>
    );
};

export default HomePage; 