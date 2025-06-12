import { Link } from 'react-router-dom';

const navLinks = [
    { title: 'หน้าแรก', path: '/' },
    { title: 'บริการของเรา', path: '/services' },
    { title: 'ผลงานของเรา', path: '/portfolio' },
    { title: 'บทความ', path: '/blog' },
    { title: 'ติดต่อเรา', path: '/contact' },
];

const Navbar = () => {
    return (
        <header className="bg-[#211234] bg-opacity-80 text-white shadow-md sticky top-0 z-50 backdrop-blur-sm">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Placeholder for Logo */}
                    <div className="bg-gray-300 w-10 h-10 rounded-full mr-4"></div>
                    <span className="font-semibold text-xl">Apex</span>
                </div>
                <ul className="flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <Link to={link.path} className="hover:text-purple-400 transition-colors duration-300">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar; 