import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUser, FaLock, FaCheckCircle } from 'react-icons/fa';
import logo from '/iconapex.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
  },
};

const Login = ({ show, onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsSuccess(false);

    if (username === 'admin' && password === '04123') {
      console.log('Login successful as admin');
      setIsSuccess(true);
      setTimeout(() => {
        onLoginSuccess();
      }, 1500);
    } else {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  const handleClose = () => {
      setUsername('');
      setPassword('');
      setError('');
      setIsSuccess(false);
      onClose();
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: -50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: -50, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="bg-gradient-to-br from-[#2B2D32] to-[#222428] text-white rounded-2xl w-full max-w-md relative shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              aria-label="Close login form"
            >
              <FaTimes size={20} />
            </button>

            <div className="p-8 md:p-10">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col items-center text-center mb-8"
              >
                <motion.img variants={itemVariants} src={logo} alt="Apex Logo" className="w-16 h-16 mb-4 rounded-full" />
                <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white">Admin Login</motion.h2>
                <motion.p variants={itemVariants} className="text-gray-400">เข้าสู่ระบบสำหรับเจ้าหน้าที่</motion.p>
              </motion.div>

              {isSuccess ? (
                <motion.div 
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    className="text-center space-y-4 py-8"
                >
                    <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto animate-pulse" />
                    <p className="text-xl font-semibold text-green-400">เข้าสู่ระบบสำเร็จ</p>
                </motion.div>
              ) : (
                <motion.form
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onSubmit={handleLogin}
                  className="space-y-4"
                >
                    <motion.div variants={itemVariants} className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-500" />
                      </span>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full bg-gray-700/50 text-white rounded-md py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 border border-gray-600 transition-colors"
                        placeholder="Username"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} className="relative">
                       <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                         <FaLock className="h-5 w-5 text-gray-500" />
                       </span>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full bg-gray-700/50 text-white rounded-md py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 border border-gray-600 transition-colors"
                        placeholder="Password"
                      />
                    </motion.div>
                    
                    <AnimatePresence>
                        {error && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0, x: [-3, 3, -3, 3, 0] }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.4, ease: 'easeInOut' }}
                              className="text-center text-sm text-red-400 font-medium"
                            >
                              {error}
                            </motion.p>
                        )}
                    </AnimatePresence>

                    <motion.div variants={itemVariants} className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 transform hover:scale-105"
                        >
                          Login
                        </button>
                    </motion.div>
                </motion.form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Login;
