import { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import logo from '/iconapex.png';
import ConfirmationPopup from '../ui/ConfirmationPopup';

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

const Footer = ({ onLoginClick, isAdmin, onLogoutClick }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLogoutConfirmOpen, setLogoutConfirmOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    if (sectionId === '#top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const navbar = document.querySelector('header');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      
      window.scrollTo({
        top: absoluteElementTop - navbarHeight,
        behavior: 'smooth'
      });
    }
    setIsServicesOpen(false);
  };

  const handleLogoutConfirm = () => {
    onLogoutClick();
    setLogoutConfirmOpen(false);
  };

  return (
    <>
      <footer className="bg-[#2a2a2e] text-white font-sans">
        <div className="container mx-auto py-12 px-4">
          <div className="flex justify-center items-center mb-8">
            <button onClick={() => handleScrollToSection('#top')} className="flex items-center">
              <img src={logo} alt="Apex Logo" className="h-12 w-12 mr-4 rounded-full" />
              <span className="text-3xl font-bold">Apex Capable Tech</span>
            </button>
          </div>

          <nav className="flex justify-center items-center mb-8">
            <ul className="flex flex-wrap justify-center space-x-6 md:space-x-8">
              {navLinks.map((link) => (
                <li key={link.title} className="relative">
                  {link.dropdownItems ? (
                    <div className="relative group">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                      >
                        {link.title}
                      </button>
                      {isServicesOpen && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-60 bg-[#2a2a2e] border border-gray-700 rounded-md shadow-lg animate-fade-up animate-duration-200 animate-ease-in-out">
                          {link.dropdownItems.map((item) => (
                            <button
                              key={item.title}
                              onClick={() => handleScrollToSection(item.path)}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-white"
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
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.title}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="text-center mt-8">
            {isAdmin ? (
              <button 
                onClick={() => setLogoutConfirmOpen(true)} 
                className="inline-flex items-center gap-2 text-sm text-red-500 hover:text-red-400 transition-colors font-semibold"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            ) : (
              <button onClick={onLoginClick} className="text-sm text-gray-500 hover:text-purple-400 transition-colors">
                เข้าสู่ระบบเฉพาะเจ้าหน้าที่
              </button>
            )}
          </div>
          
          <hr className="border-t border-gray-700 my-8" />
          
          <div className="text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} ApexCapableTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <ConfirmationPopup
        show={isLogoutConfirmOpen}
        onClose={() => setLogoutConfirmOpen(false)}
        onConfirm={handleLogoutConfirm}
        title="Confirm Logout"
        message="Are you sure you want to log out?"
        confirmText="Logout"
        confirmButtonClass="bg-red-600 hover:bg-red-700"
      />
    </>
  );
};

export default Footer;
