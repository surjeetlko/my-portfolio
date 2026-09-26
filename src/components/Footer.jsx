import { FaArrowUp, FaHeart, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-6 md:px-10 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-gray-200 flex items-center justify-center md:justify-start gap-1">
            © {new Date().getFullYear()} Surjeet Singh
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            AI Deployment Engineer | MLOps Specialist & Team Lead @ Criterion Tech
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center space-x-6">
          <a 
            href="https://linkedin.com/in/surjeet-singh-a13a4ab2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-400 transition-colors text-lg"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/surjeetlko" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors text-lg"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 hover:border-blue-500 rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2 text-xs font-semibold"
          aria-label="Back to Top"
        >
          <span>Back to top</span>
          <FaArrowUp />
        </button>

      </div>
    </footer>
  );
};

export default Footer;