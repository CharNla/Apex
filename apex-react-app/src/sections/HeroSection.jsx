import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import banner1 from '../assets/img/Banner/banner1.png';
import banner2 from '../assets/img/Banner/banner2.png';
import banner3 from '../assets/img/Banner/banner3.png';
import bg1 from '../assets/img/พื้นหลังพญานาค.png';
import ApexCircle from '../components/ui/Apexcircle';

const ITInfrastructureSection = lazy(() => import('./ITInfrastructureSection'));
const MonitoringSection = lazy(() => import('./MonitoringSection'));

const banners = [banner1, banner2, banner3];

const LoadingFallback = () => (
  <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="text-gray-800 text-xl font-sans">Loading Section...</div>
  </div>
);

const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#1E1B3C] font-sans">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto flex flex-col"
      >
        <div className="relative w-full h-[45vh] md:h-[calc(100vh-48px)]">
          <AnimatePresence>
            {banners.map((banner, index) =>
              currentBanner === index ? (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-full h-full flex items-start justify-center relative">
                    <img
                      src={banner}
                      alt={`Banner ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
          <div className="absolute bottom-[200px] w-full hidden md:flex justify-center items-center z-20">
            <motion.div
              className="flex space-x-4 px-4 py-2 rounded-full bg-black/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {banners.map((_, dotIndex) => (
                <motion.button
                  key={dotIndex}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentBanner === dotIndex ? 'bg-[#B05AE7]' : 'bg-white/60'
                  } hover:bg-[#B05AE7]`}
                  onClick={() => setCurrentBanner(dotIndex)}
                />
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="w-full -mt-72 md:-mt-48 relative flex justify-center items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.img
            src={bg1}
            alt="พญานาค"
            className="w-full h-auto object-contain"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            loading="lazy"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ApexCircle className="w-[180px] h-[180px] md:w-[500px] md:h-[500px]" />
          </motion.div>
        </motion.div>
      </motion.div>
      <Suspense fallback={<LoadingFallback />}>
        <ITInfrastructureSection />
        <MonitoringSection />
      </Suspense>
    </div>
  );
};

export default HeroSection;