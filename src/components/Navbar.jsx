import { useState } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 py-4 px-6 md:px-10 text-white bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* --- NEW CODE-STYLE LOGO START --- */}
        <a href="#home" className="text-2xl font-bold tracking-wide cursor-pointer flex items-center gap-1 font-mono group">
          <span className="text-blue-500 text-3xl transition-transform duration-300 group-hover:-translate-x-1">&lt;</span>
          <span className="text-white group-hover:text-blue-400 transition-colors duration-300">Surjeet</span>
          <span className="text-blue-500 text-3xl transition-transform duration-300 group-hover:translate-x-1">/&gt;</span>
        </a>
        {/* --- NEW CODE-STYLE LOGO END --- */}
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
          <li><a href="#certificates" className="hover:text-blue-400 transition-colors">Certifications</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <a href="https://linkedin.com/in/surjeet-singh-a13a4ab2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-2xl transition-transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://github.com/surjeetlko" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition-transform hover:scale-110">
            <FaGithub />
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-300 hover:text-white text-2xl focus:outline-none z-50"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-gray-900/95 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-2xl font-semibold text-gray-300">
          <li><a href="#home" onClick={toggleMenu} className="hover:text-blue-500 transition-colors">Home</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="hover:text-blue-500 transition-colors">Projects</a></li>
          <li><a href="#certificates" onClick={toggleMenu} className="hover:text-blue-500 transition-colors">Certifications</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="hover:text-blue-500 transition-colors">Contact</a></li>
        </ul>
        
        <div className="flex space-x-6 pt-4 border-t border-gray-700 w-1/2 justify-center">
          <a href="https://linkedin.com/in/surjeet-singh-a13a4ab2/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-3xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/surjeetlko" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-3xl">
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;