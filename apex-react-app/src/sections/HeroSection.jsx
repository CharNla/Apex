import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import banner1 from '../assets/img/banner1.png';
import banner2 from '../assets/img/banner2.png';
import banner3 from '../assets/img/banner3.png';
import bg1 from '../assets/img/พื้นหลังพญานาค.png';
import bg2 from '../assets/img/bg2.png';
import apex from '../assets/img/ปีศาจมาร.png';

const banners = [banner1, banner2, banner3];

const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (    <div className="relative w-full overflow-hidden bg-[#1E1B3C] font-sans">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto flex flex-col"
      >
        <div className="relative w-full h-[45vh] md:h-[calc(100vh-48px)]">
          <AnimatePresence mode="wait">
            {banners.map((banner, index) =>
              currentBanner === index ? (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-full h-full flex items-start justify-center relative">
                    <motion.img
                      src={banner}
                      alt={`Banner ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </motion.div>
              ) : null
            )}          </AnimatePresence>
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
          className="w-full -mt-40 md:-mt-48 relative flex justify-center items-center"
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
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.img
              src={apex}
              alt="Apex"
              className="w-[250px] md:w-[800px] h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="w-full relative">
            <img
              src={bg2}
              alt="bg2"
              className="w-full h-auto object-contain"
            />            {/* IT Infrastructure Section */}            <div className="absolute top-[14%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 md:px-0 w-full">
              <h1 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-6">IT Infrastructure</h1>
              <div>
                <p className="text-xs md:text-base text-gray-300 max-w-7xl mx-auto leading-relaxed">
                  ที่ปรึกษาด้าน IT Infrastructure: ทีมผู้เชี่ยวชาญพร้อมให้คำปรึกษา วิเคราะห์ความต้องการ และวางแผนเพื่อสร้างระบบ IT มุ่งเน้นการออกแบบและพัฒนา
                </p>
                <p className="text-xs md:text-base text-gray-300 max-w-7xl mx-auto leading-relaxed">
                  ทั้งในส่วนของHardware Software และระบบ Network ให้สามารถรองรับการขยายตัวในอนาคตหรือการปรับตัวให้เข้ากับเทคโนโลยีใหม่ ๆ
                </p>
              </div>
            </div>
          </div>
    </div>
  );
};

export default HeroSection;