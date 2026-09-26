import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes, FaDownload, FaMicrochip } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About & Leadership", href: "#about" },
    { name: "Skills & Stack", href: "#skills" },
    { name: "Microservices (30+)", href: "#microservices" },
    { name: "Certifications", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-gray-950/90 backdrop-blur-md border-b border-gray-800 shadow-2xl' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="text-xl md:text-2xl font-bold tracking-wider cursor-pointer flex items-center gap-1 font-mono group">
          <span className="text-blue-500 text-2xl md:text-3xl transition-transform duration-300 group-hover:-translate-x-1">&lt;</span>
          <span className="text-white group-hover:text-blue-400 transition-colors duration-300">Surjeet</span>
          <span className="text-blue-400 font-normal text-xs md:text-sm px-2 py-0.5 bg-blue-950/60 rounded border border-blue-800/60 font-sans hidden sm:inline-block">AI & MLOps</span>
          <span className="text-blue-500 text-2xl md:text-3xl transition-transform duration-300 group-hover:translate-x-1">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-7 text-gray-300 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="hover:text-blue-400 transition-colors py-1 border-b-2 border-transparent hover:border-blue-500 flex items-center gap-1.5"
              >
                {link.name === "Microservices (30+)" && <FaMicrochip className="text-xs text-blue-400 animate-pulse" />}
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="/resume.pdf" 
            download="Surjeet_Singh_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600/90 hover:bg-blue-600 text-white rounded-lg text-xs font-semibold transition-all shadow-md shadow-blue-900/30 hover:shadow-blue-600/40"
          >
            <FaDownload className="text-xs" /> Resume
          </a>
          <a 
            href="https://linkedin.com/in/surjeet-singh-a13a4ab2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-400 text-xl transition-all hover:scale-110"
            title="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/surjeetlko" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white text-xl transition-all hover:scale-110"
            title="GitHub Profile"
          >
            <FaGithub />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu} 
          className="lg:hidden text-gray-300 hover:text-white text-2xl focus:outline-none z-50 p-2"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden fixed inset-0 bg-gray-950/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-7 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-xl font-semibold text-gray-200">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={toggleMenu} 
                className="hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-6 pt-6 border-t border-gray-800 w-2/3 justify-center">
          <a 
            href="/resume.pdf" 
            download="Surjeet_Singh_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm"
          >
            <FaDownload /> Download Resume
          </a>
          <a 
            href="https://linkedin.com/in/surjeet-singh-a13a4ab2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-blue-400 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/surjeetlko" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-white text-2xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;