const HeroSection = () => {
    return (
        <section className="bg-[#1a0b2e] text-white min-h-screen flex items-center">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side: Text Content */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        บริการครบวงจร Apex
                    </h1>
                    <p className="text-2xl md:text-3xl font-light text-purple-300">
                        IT INFRASTRUCTURE
                    </p>
                    <p className="text-lg">
                        รับออกแบบและวางระบบ SERVER, NETWORK, COULD รวมถึงการใช้บริการ COULD หรืออุปกรณ์ IT ต่างๆ
                    </p>
                     <div className="flex space-x-2 mt-4">
                        <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-white rounded-full"></span>
                        <span className="w-3 h-3 bg-white rounded-full"></span>
                    </div>
                </div>

                {/* Right Side: Image/Graphic */}
                <div className="relative flex justify-center items-center">
                    {/* Placeholder for the brain/chip graphic */}
                     <div className="w-64 h-64 border-4 border-purple-500 rounded-full flex items-center justify-center opacity-20">
                        <p className="text-purple-400">Graphic</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 