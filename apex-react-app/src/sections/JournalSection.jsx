import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import JournalBg from '../assets/img/JournalBg.png';
import Journal1 from '../assets/img/Journal Section/Journal1.png';
import Journal2 from '../assets/img/Journal Section/Journal2.png';
import Journal3 from '../assets/img/Journal Section/Journal3.png';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import IconAccount from '../assets/icon/IconAccount.png';

const journalData = [
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
                    
                    <div className="overflow-y-auto">
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

const JournalCard = ({ post, onCardClick }) => (
  <div 
    className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden flex-shrink-0 w-full max-w-sm cursor-pointer group transform hover:-translate-y-2 transition-transform duration-300"
    onClick={() => onCardClick(post)}
    >
    <div className="overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
    </div>
    <div className="p-6 text-white">
      <h3 className="font-bold text-xl mb-2">{post.title}</h3>
      {post.subtitle && <h4 className="font-semibold text-lg mb-2 text-gray-300">{post.subtitle}</h4>}
      <p className="text-gray-400 text-sm mb-6 h-14 overflow-hidden">{post.description}</p>
      <div className="flex items-center">
         <img src={IconAccount} alt="Author" className="w-10 h-10 rounded-full mr-4" />
        <div>
          <p className="font-semibold">{post.author}</p>
          <p className="text-gray-400 text-xs">{`${post.date} · ${post.readTime}`}</p>
        </div>
      </div>
    </div>
  </div>
);

const JournalSection = () => {
    const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
      <div 
        id="blog" 
        className="bg-cover bg-center min-h-screen flex items-center animate-in fade-in slide-in-from-bottom-10 duration-700"
        style={{ backgroundImage: `url(${JournalBg})` }}
      >
        <div className="container mx-auto px-4 md:px-12 py-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-left md:pl-28">Journal</h2>
          
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-8">
            {journalData.map((post, index) => (
              <JournalCard key={index} post={post} onCardClick={setSelectedPost} />
            ))}
          </div>

          <div className="flex justify-end items-center mt-12 gap-6 pr-28">
            <button className="text-white/50 hover:text-white transition-colors">
              <FaArrowLeft size={24} />
            </button>
            <button className="text-white/50 hover:text-white transition-colors">
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
      <JournalPopup post={selectedPost} onClose={() => setSelectedPost(null)} />
    </>
  );
};

export default JournalSection;
