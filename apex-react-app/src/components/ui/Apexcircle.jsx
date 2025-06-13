import { motion } from 'framer-motion';
import './wave.css';

const Bubble = ({ children }) => (
  <motion.div
    className={`w-full h-full flex items-center justify-center text-center p-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg`}
    whileHover={{ scale: 1.1 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    {children}
  </motion.div>
);

const ApexCircle = ({ className }) => {
  return (
    <motion.div
      className={`relative w-full h-full flex items-center justify-center font-sans ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Main "Apex" Circle */}
      <motion.div className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden playing bg-purple-300">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <h1 className="text-6xl md:text-8xl font-bold text-white z-10">Apex</h1>
      </motion.div>

      {/* Small Bubbles */}
      <motion.div
        className="absolute top-[-10%] left-[5%] w-32 h-32 md:w-40 md:h-40"
        initial={{ scale: 0, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        <Bubble>
          <span className="text-sm md:text-base font-semibold">Software<br/>House</span>
        </Bubble>
      </motion.div>

      <motion.div
        className="absolute top-[5%] right-[-15%] w-32 h-32 md:w-40 md:h-40"
        initial={{ scale: 0, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.4, type: 'spring' }}
      >
        <Bubble>
          <span className="text-sm md:text-base font-semibold">IT<br/>Infrastructure</span>
        </Bubble>
      </motion.div>

      <motion.div
        className="absolute bottom-[-5%] right-[15%] w-32 h-32 md:w-40 md:h-40"
        initial={{ scale: 0, y: -50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.6, type: 'spring' }}
      >
        <Bubble>
          <span className="text-sm md:text-base font-semibold">Monitoring</span>
        </Bubble>
      </motion.div>
    </motion.div>
  );
};

export default ApexCircle;
