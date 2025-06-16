import { NavLink } from 'react-router-dom';
import logo from '/iconapex.png';

const navLinks = [
    { title: 'หน้าแรก', path: '/' },
    { title: 'บริการของเรา', path: '/#services' },
    { title: 'ผลงานของเรา', path: '/#portfolio' },
    { title: 'บทความ', path: '/#blog' },
    { title: 'ติดต่อเรา', path: '/#contact' },
];

const Footer = () => {
  return (
    <footer className="bg-[#2a2a2e] text-white font-sans">
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-center items-center mb-8">
          <img src={logo} alt="Apex Logo" className="h-12 w-12 mr-4 rounded-full" />
          <span className="text-3xl font-bold">Apex</span>
        </div>

        <nav className="flex justify-center items-center mb-8">
          <ul className="flex flex-wrap justify-center space-x-6 md:space-x-8">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink
                  to={link.path}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <hr className="border-t border-gray-700 my-8" />
        
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AbleNet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
