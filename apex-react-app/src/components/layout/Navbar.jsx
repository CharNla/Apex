import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/iconapex.png';

const navLinks = [
    { title: 'หน้าแรก', path: '/' },
    { title: 'บริการของเรา', path: '/#services' },
    { title: 'ผลงานของเรา', path: '/#portfolio' },
    { title: 'บทความ', path: '/#blog' },
    { title: 'ติดต่อเรา', path: '/contact' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const activeLinkStyle = {
        color: '#B356C1',
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks
                .map(link => link.path.split('#')[1])
                .filter(Boolean);

            let currentSectionId = '';
            for (const id of sections) {
                const section = document.getElementById(id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - 150) {
                        currentSectionId = id;
                    }
                }
            }
            
            if (currentSectionId) {
                setActiveLink(`/#${currentSectionId}`);
            } else {
                setActiveLink('/');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="font-sans bg-[#2a2a2e] text-gray-300 shadow-sm sticky top-0 z-50 border-b border-gray-700">
            <nav className="container mx-auto px-10 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} alt="Apex Logo" className="h-10 w-10 rounded-full" />
                    </NavLink>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden md:flex items-center space-x-8 ml-8">
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <NavLink
                                    to={link.path}
                                    style={activeLink === link.path ? activeLinkStyle : undefined}
                                    className="hover:text-purple-400 transition-colors duration-300 text-lg"
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-[#2a2a2e] border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <ul className="flex flex-col items-center space-y-4 py-4">
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <NavLink
                                to={link.path}
                                style={activeLink === link.path ? activeLinkStyle : undefined}
                                className="hover:text-purple-400 transition-colors duration-300 text-lg"
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;