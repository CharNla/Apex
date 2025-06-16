import React, { Suspense } from 'react';
import HeroSection from "../sections/HeroSection";

const ServicesSection = React.lazy(() => import('../sections/ServicesSection'));
const ProjectSection = React.lazy(() => import('../sections/ProjectSection'));
const JournalSection = React.lazy(() => import('../sections/JournalSection'));
const ContactSection = React.lazy(() => import('../sections/ContactSection'));

const LoadingFallback = () => (
    <div className="h-screen w-full flex items-center justify-center bg-white">
        <div className="text-gray-800 text-xl font-sans">Loading...</div>
    </div>
);

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <Suspense fallback={<LoadingFallback />}>
                <div className="animate-fade-in-up">
                    <ServicesSection />
                </div>
                <div className="animate-fade-in-up">
                    <ProjectSection />
                </div>
                <div className="animate-fade-in-up">
                    <JournalSection />
                </div>
                <div className="animate-fade-in-up">
                    <ContactSection />
                </div>
            </Suspense>
            {/* Other sections of the home page can be added here */}
        </div>
    );
};

export default HomePage; 