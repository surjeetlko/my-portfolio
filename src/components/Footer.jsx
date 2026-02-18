const Footer = () => {
    return (
      <footer className="py-6 bg-gray-950 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Surjeet. Built with <span className="text-blue-500">React</span> & <span className="text-blue-500">Vite</span>.
        </p>
      </footer>
    );
  };
  
  export default Footer;