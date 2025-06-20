import { motion, AnimatePresence } from 'framer-motion';

const ConfirmationPopup = ({ 
    show, 
    onClose, 
    onConfirm, 
    title, 
    message, 
    confirmText = 'Confirm', 
    cancelText = 'Cancel',
    confirmButtonClass = 'bg-blue-600 hover:bg-blue-700' 
}) => (
    <AnimatePresence>
        {show && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-gradient-to-br from-[#2B2D32] to-[#222428] text-white rounded-2xl w-full max-w-md relative shadow-2xl border border-white/10"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">{title}</h2>
                        <p className="text-gray-300 mb-8">{message}</p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={onClose}
                                className="px-6 py-2 font-semibold rounded-md bg-gray-600 hover:bg-gray-700 transition-colors"
                            >
                                {cancelText}
                            </button>
                            <button
                                onClick={onConfirm}
                                className={`px-6 py-2 font-semibold rounded-md transition-colors ${confirmButtonClass}`}
                            >
                                {confirmText}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);

export default ConfirmationPopup; 