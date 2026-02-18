import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects"; // Yeh nayi line hai
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;