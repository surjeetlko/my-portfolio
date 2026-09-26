import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutLeadership from "./components/AboutLeadership";
import SkillsStack from "./components/SkillsStack";
import MicroservicesShowcase from "./components/MicroservicesShowcase";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutLeadership />
        <SkillsStack />
        <MicroservicesShowcase />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;