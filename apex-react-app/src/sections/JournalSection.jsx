import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import JournalBg from '../assets/img/JournalBg.png';
import Journal1 from '../assets/img/Journal Section/Journal1.png';
import Journal2 from '../assets/img/Journal Section/Journal2.png';
import Journal3 from '../assets/img/Journal Section/Journal3.png';
import { FaArrowLeft, FaArrowRight, FaTimes, FaPlus } from 'react-icons/fa';
import IconAccount from '../assets/icon/IconAccount.png';
import ConfirmationPopup from '../components/ui/ConfirmationPopup';

const initialJournalData = [
  {
    image: Journal1,
    title: 'เปิดตัว Dyson Supersonic Nural',
    subtitle: 'เครื่องเป่าผมดูแลสุขภาพเส้นผมและหนังศีรษะ',
    description: 'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, l...',
    author: 'Anurat Klaikrom',
    date: 'Oct 18',
    readTime: '5 min read',
  },
  {
    image: Journal2,
    title: 'New Dragon Slayer Reveal: Ignarok',
    subtitle: '',
    description: 'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, l...',
    author: 'Anurat Klaikrom',
    date: 'Oct 18',
    readTime: '5 min read',
  },
  {
    image: Journal3,
    title: 'Spider Tanks Showcase: Movement Abilities',
    subtitle: '',
    description: 'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, l...',
    author: 'Anurat Klaikrom',
    date: 'Oct 18',
    readTime: '5 min read',
  },
];

const AddJournalPopup = ({ show, onClose, onAddJournal }) => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
            setImageFile(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600' style='background-color:%23E5E7EB'%3E%3C/svg%3E";
        
        const newJournal = {
            image: imageUrl || placeholderImage,
            title,
            subtitle,
            description,
            author: 'Anurat Klaikrom', // Or get from admin context
            date: new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date()),
            readTime: '5 min read',
        };
        onAddJournal(newJournal);
        
        // Reset form and close
        setTitle('');
        setSubtitle('');
        setDescription('');
        setImageUrl('');
        setImageFile(null);
        onClose();
    };
    
    return (
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
                        className="bg-gradient-to-br from-[#2B2D32] to-[#222428] text-white rounded-2xl w-full max-w-2xl relative shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10">
                            <FaTimes size={20} />
                        </button>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-6 text-center">Add New Journal</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full bg-gray-700/50 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                <input type="text" placeholder="Subtitle (Optional)" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="w-full bg-gray-700/50 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required className="w-full bg-gray-700/50 rounded p-2 h-24 custom-scrollbar focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                                <input type="url" placeholder="Image URL (Optional)" value={imageFile ? '' : imageUrl} onChange={(e) => setImageUrl(e.target.value)} disabled={!!imageFile} className="w-full bg-gray-700/50 rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-800" />
                                <div>
                                    <label htmlFor="file-upload" className="w-full block text-center cursor-pointer bg-[#3aa856] hover:bg-[#34974d] text-white font-semibold rounded p-2 transition-colors">
                                        {imageFile ? `Selected: ${imageFile.name}` : 'Upload Image'}
                                    </label>
                                    <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                                </div>
                                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 font-bold py-2 px-4 rounded transition-colors">Add Journal</button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const JournalPopup = ({ post, onClose }) => (
    <AnimatePresence>
        {post && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, y: 50, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.95, y: 50, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                    className="bg-[#2a2a2e] text-white rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] relative flex flex-col shadow-2xl border border-white/10"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button 
                        onClick={onClose} 
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20 p-2 bg-black/20 rounded-full"
                        aria-label="Close journal details"
                    >
                        <FaTimes size={20} />
                    </button>
                    
                    <div className="overflow-y-auto custom-scrollbar">
                        <div className="relative">
                            <img src={post.image} alt={post.title} className="w-full h-72 md:h-96 object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        </div>
                        <div className="p-8 md:p-10">
                            <h2 className="font-bold text-3xl md:text-4xl mb-3">{post.title}</h2>
                            {post.subtitle && <h3 className="font-semibold text-xl mb-6 text-gray-300">{post.subtitle}</h3>}
                            
                            <div className="flex items-center mb-8 border-b border-white/10 pb-6">
                                <img src={IconAccount} alt={post.author} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="font-semibold text-lg">{post.author}</p>
                                    <p className="text-gray-400 text-sm">{`${post.date} · ${post.readTime}`}</p>
                                </div>
                            </div>

                            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                                <p>{post.description}</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);

const JournalCard = ({ post, onCardClick, isAdmin, onDelete }) => (
  <div 
    className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden w-full max-w-sm cursor-pointer group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
    onClick={() => onCardClick(post)}
    >
    {isAdmin && (
        <button
            onClick={(e) => {
                e.stopPropagation(); // Prevent card click
                onDelete();
            }}
            className="absolute top-3 right-3 z-10 p-2 bg-black/40 rounded-full text-white/70 hover:bg-red-600 hover:text-white hover:scale-110 transform transition-all duration-200"
            aria-label="Delete journal"
        >
            <FaTimes size={14} />
        </button>
    )}
    <div className="overflow-hidden h-48 flex-shrink-0">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
    </div>
    <div className="p-6 text-white flex flex-col flex-grow">
      <h3 className="font-bold text-xl mb-2">{post.title}</h3>
      {post.subtitle && <h4 className="font-semibold text-lg mb-2 text-gray-300">{post.subtitle}</h4>}
      <p className="text-gray-400 text-sm h-24 overflow-hidden mt-auto">{post.description}</p>
    </div>
  </div>
);

const JournalSection = ({ isAdmin }) => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [isAddPopupOpen, setAddPopupOpen] = useState(false);
    const [journalData, setJournalData] = useState(initialJournalData);
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isConfirmOpen, setConfirmOpen] = useState(false);
    const [journalToDelete, setJournalToDelete] = useState(null);

    const handleAddJournal = (newJournal) => {
        setJournalData(prevData => [newJournal, ...prevData]);
        setCurrentPage(0); // Go to the first page to show the new journal
    };

    // Pagination logic
    const itemsPerPage = 3;

    const handleDeleteJournal = (journalIndexToDelete) => {
        const newData = journalData.filter((_, index) => index !== journalIndexToDelete);
        setJournalData(newData);
    
        const newTotalPages = Math.ceil(newData.length / itemsPerPage);
        if (currentPage >= newTotalPages && currentPage > 0) {
            setCurrentPage(newTotalPages - 1);
        }
    };

    const openConfirmPopup = (index) => {
        setJournalToDelete(index);
        setConfirmOpen(true);
    };

    const executeDelete = () => {
        if (journalToDelete !== null) {
            handleDeleteJournal(journalToDelete);
        }
        setConfirmOpen(false);
        setJournalToDelete(null);
    };

    const totalPages = Math.ceil(journalData.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const currentJournalItems = journalData.slice(startIndex, startIndex + itemsPerPage);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 35 },
                opacity: { duration: 0.2 },
            },
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 35 },
                opacity: { duration: 0.2 },
            },
        }),
    };

    const handleNextPage = () => {
        setDirection(1);
        setCurrentPage(prev => (prev + 1) % totalPages);
    };

    const handlePrevPage = () => {
        setDirection(-1);
        setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
    };

  return (
    <>
    <div 
      id="blog" 
      className="bg-cover bg-center min-h-screen flex items-center animate-in fade-in slide-in-from-bottom-10 duration-700"
      style={{ backgroundImage: `url(${JournalBg})` }}
    >
      <div className="container mx-auto px-4 md:px-12 py-16">
          <div className="flex justify-between items-center mb-12 md:pl-28 md:pr-28">
            <h2 className="text-4xl font-bold text-white">Journal</h2>
            {isAdmin && (
                <button 
                    onClick={() => setAddPopupOpen(true)}
                    className="group relative w-[150px] h-10 cursor-pointer flex items-center border border-[#34974d] bg-[#3aa856] hover:bg-[#34974d] active:border-[#2e8644] transition-all duration-300 overflow-hidden rounded-md"
                >
                    <span className="text-white font-semibold transform translate-x-[25px] transition-all duration-300 group-hover:text-transparent">
                        Add
                    </span>
                    <span 
                        className="absolute h-full flex items-center justify-center bg-[#34974d] w-[39px] right-0 group-hover:w-full group-active:bg-[#2e8644] transition-all duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 24 24" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height={24} fill="none" className="w-[30px] stroke-white">
                            <line y2={19} y1={5} x2={12} x1={12} />
                            <line y2={12} y1={12} x2={19} x1={5} />
                        </svg>
                    </span>
                </button>
            )}
          </div>
          
          {/* Mobile view: stacked cards */}
          <div className="md:hidden flex flex-col items-center gap-8">
            {journalData.map((post, index) => (
                <JournalCard 
                    key={index} 
                    post={post} 
                    onCardClick={setSelectedPost}
                    isAdmin={isAdmin}
                    onDelete={() => openConfirmPopup(index)}
                />
            ))}
          </div>

          {/* Desktop view: slider */}
          <div className="hidden md:relative md:flex md:justify-center md:min-h-[500px] md:overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentPage}
                    className="absolute flex flex-wrap md:flex-nowrap justify-center gap-8 w-full items-stretch"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                >
                    {currentJournalItems.map((post, index) => {
                      const absoluteIndex = startIndex + index;
                      return (
                        <JournalCard 
                            key={absoluteIndex} 
                            post={post} 
                            onCardClick={setSelectedPost}
                            isAdmin={isAdmin}
                            onDelete={() => openConfirmPopup(absoluteIndex)}
                        />
                      )
                    })}
                </motion.div>
            </AnimatePresence>
        </div>

          {totalPages > 1 && (
        <div className="hidden md:flex justify-end items-center mt-12 gap-6 pr-28">
              <button 
                  onClick={handlePrevPage}
                  className="text-white/50 hover:text-white transition-colors"
              >
            <FaArrowLeft size={24} />
          </button>
              <button 
                  onClick={handleNextPage}
                  className="text-white/50 hover:text-white transition-colors"
              >
            <FaArrowRight size={24} />
          </button>
            </div>
          )}
        </div>
      </div>
      <JournalPopup post={selectedPost} onClose={() => setSelectedPost(null)} />
      <AddJournalPopup 
        show={isAddPopupOpen} 
        onClose={() => setAddPopupOpen(false)}
        onAddJournal={handleAddJournal}
      />
      <ConfirmationPopup
        show={isConfirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={executeDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this journal entry? This action cannot be undone."
        confirmText="Delete"
        confirmButtonClass="bg-red-600 hover:bg-red-700"
      />
    </>
  );
};

export default JournalSection;
