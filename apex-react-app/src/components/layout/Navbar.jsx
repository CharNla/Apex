import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/iconapex.png';

const navLinks = [
    { title: 'หน้าแรก', path: '#top' },
    {
        title: 'บริการของเรา',
        path: '#services',
        dropdownItems: [
            { title: 'IT Infrastructure', path: '#it-infrastructure' },
            { title: 'Monitoring', path: '#monitoring' },
            { title: 'Software House Detail', path: '#software-house' }
        ]
    },
    { title: 'ผลงานของเรา', path: '#portfolio' },
    { title: 'บทความ', path: '#blog' },
    { title: 'ติดต่อเรา', path: '#contact' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const activeLinkStyle = {
        color: '#B356C1',
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setActiveLink('#top');
        setIsMenuOpen(false);
    };

    const handleScrollToSection = (sectionId) => {
        if (sectionId === '#top') {
            scrollToTop();
            return;
        }

        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
            const navbar = document.querySelector('header');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            
            // Get element's position relative to the viewport
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            
            // Scroll to the element
            window.scrollTo({
                top: absoluteElementTop - navbarHeight,
                behavior: 'smooth'
            });

            // Update active link
            setActiveLink(sectionId);
        }
        setIsDropdownOpen(false);
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks
                .flatMap(link => link.dropdownItems ? link.dropdownItems.map(item => item.path) : link.path)
                .filter(path => path.startsWith('#') && path !== '#top')
                .map(path => path.substring(1));

            const navbar = document.querySelector('header');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            // Find the current section
            let current = '';
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= navbarHeight + 10 && rect.bottom >= navbarHeight + 10) {
                        current = sectionId;
                        break;
                    }
                }
            }

            // Update active link
            if (current) {
                setActiveLink(`#${current}`);
            } else if (window.pageYOffset === 0) {
                setActiveLink('#top');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDropdownClick = (e) => {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="font-sans bg-[#2a2a2e] text-gray-300 shadow-sm sticky top-0 z-50 border-b border-gray-700">
            <nav className="container mx-auto px-10 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Logo */}
                    <button onClick={scrollToTop} className="flex items-center">
                        <img src={logo} alt="Apex Logo" className="h-10 w-10 rounded-full" />
                    </button>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden md:flex items-center space-x-8 ml-8">
                        {navLinks.map((link) => (
                            <li key={link.title} className="relative">
                                {link.dropdownItems ? (
                                    <>
                                        <button
                                            onClick={handleDropdownClick}
                                            className={`flex items-center hover:text-purple-400 transition-colors duration-300 text-lg ${
                                                link.dropdownItems.some(item => item.path === activeLink) ? 'text-[#B356C1]' : ''
                                            }`}
                                        >
                                            {link.title}
                                        </button>
                                        {isDropdownOpen && (
                                            <div className="absolute left-0 mt-2 w-60 bg-[#2a2a2e] border border-gray-700 rounded-md shadow-lg animate-fade-down animate-duration-200 animate-ease-in-out">
                                                {link.dropdownItems.map((item) => (
                                                    <button
                                                        key={item.title}
                                                        onClick={() => handleScrollToSection(item.path)}
                                                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 hover:text-purple-400 ${
                                                            activeLink === item.path ? 'text-[#B356C1]' : 'text-gray-300'
                                                        }`}
                                                    >
                                                        {item.title}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <button
                                        onClick={() => handleScrollToSection(link.path)}
                                        className={`hover:text-purple-400 transition-colors duration-300 text-lg ${
                                            activeLink === link.path ? 'text-[#B356C1]' : ''
                                        }`}
                                    >
                                        {link.title}
                                    </button>
                                )}
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
            <div className={`md:hidden bg-[#2a2a2e] border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <ul className="flex flex-col items-center space-y-4 py-4">
                    {navLinks.map((link) => (
                        <li key={link.title} className="w-full text-center">
                            {link.dropdownItems ? (
                                <div className="flex flex-col items-center">
                                    <button
                                        onClick={handleDropdownClick}
                                        className={`flex items-center justify-center hover:text-purple-400 transition-colors duration-300 text-lg ${
                                            link.dropdownItems.some(item => item.path === activeLink) ? 'text-[#B356C1]' : ''
                                        }`}
                                    >
                                        {link.title}
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="mt-2 w-full bg-[#2a2a2e] border-t border-b border-gray-700 animate-fade-down animate-duration-200 animate-ease-in-out">
                                            {link.dropdownItems.map((item) => (
                                                <button
                                                    key={item.title}
                                                    onClick={() => handleScrollToSection(item.path)}
                                                    className={`block w-full py-2 text-sm hover:bg-gray-700 hover:text-purple-400 ${
                                                        activeLink === item.path ? 'text-[#B356C1]' : 'text-gray-300'
                                                    }`}
                                                >
                                                    {item.title}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button
                                    onClick={() => handleScrollToSection(link.path)}
                                    className={`block w-full hover:text-purple-400 transition-colors duration-300 text-lg ${
                                        activeLink === link.path ? 'text-[#B356C1]' : ''
                                    }`}
                                >
                                    {link.title}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;