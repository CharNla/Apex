import JournalBg from '../assets/img/JournalBg.png';
import Journal1 from '../assets/img/Journal Section/Journal1.png';
import Journal2 from '../assets/img/Journal Section/Journal2.png';
import Journal3 from '../assets/img/Journal Section/Journal3.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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

const JournalCard = ({ post }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden flex-shrink-0 w-full max-w-sm">
    <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
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
  return (
    <div 
      id="blog" 
      className="bg-cover bg-center min-h-screen flex items-center animate-in fade-in slide-in-from-bottom-10 duration-700"
      style={{ backgroundImage: `url(${JournalBg})` }}
    >
      <div className="container mx-auto px-4 md:px-12 py-16">
        <h2 className="text-4xl font-bold text-white mb-12 text-left md:pl-28">Journal</h2>
        
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-8">
          {journalData.map((post, index) => (
            <JournalCard key={index} post={post} />
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
  );
};

export default JournalSection;
