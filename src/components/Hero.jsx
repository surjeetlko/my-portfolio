import { useState } from 'react';
import { FaDownload, FaEye, FaTimes, FaBriefcase, FaGraduationCap, FaCode, FaRocket, FaShieldAlt, FaServer, FaBrain } from 'react-icons/fa';
import { statsData } from '../data/projectsData';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-10 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Background Decorative Glow Spheres */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Side Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs md:text-sm font-medium shadow-inner animate-pulse-subtle">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
              <span>AI Deployment Engineer & MLOps Specialist | Team Lead</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Hi, I'm <br className="hidden sm:block" />
              <span className="text-gradient-cyan">Surjeet Singh</span>
            </h1>

            {/* Role & Bio */}
            <h2 className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Architecting <span className="text-blue-400 font-semibold">Self-Healing AI Pipelines</span> & <span className="text-cyan-400 font-semibold">Zero-Downtime Microservices</span> for Smart Healthcare & Industrial IoT.
            </h2>

            <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
              Managing the end-to-end containerized migration of <strong className="text-white">28+ critical hospital microservices</strong> (ECG APIs, IoT monitors, Audio & Computer Vision engines). Expert in Docker, MicroK8s, Edge AI (YOLO/Raspberry Pi), Node-RED automation, and Generative AI workflows.
            </p>

            {/* Quick Tech Pill Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start max-w-2xl pt-2">
              <span className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-md text-xs text-blue-300 font-mono flex items-center gap-1.5">
                <FaServer className="text-blue-400" /> Docker & MicroK8s
              </span>
              <span className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-md text-xs text-cyan-300 font-mono flex items-center gap-1.5">
                <FaBrain className="text-cyan-400" /> YOLOv8 & Gemini API
              </span>
              <span className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-md text-xs text-emerald-300 font-mono flex items-center gap-1.5">
                <FaRocket className="text-emerald-400" /> Edge AI (Raspberry Pi)
              </span>
              <span className="px-3 py-1 bg-gray-800/80 border border-gray-700 rounded-md text-xs text-amber-300 font-mono flex items-center gap-1.5">
                <FaShieldAlt className="text-amber-400" /> Node-RED & REST APIs
              </span>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <a 
                href="#microservices" 
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <FaRocket /> Explore 30+ Microservices
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-700 hover:border-blue-400 rounded-xl font-semibold transition-all hover:text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaEye className="text-blue-400" /> View & Download CV
              </button>
            </div>

          </div>

          {/* Right Side: Profile Image & Tech Ring */}
          <div className="flex-1 flex justify-center lg:justify-end w-full z-10">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-full blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-300 animate-pulse-subtle"></div>
              
              {/* Image Frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-gray-800/90 overflow-hidden shadow-2xl bg-gray-900">
                <img 
                  src="/profile.jpg" 
                  alt="Surjeet Singh" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/400x400/0f172a/38bdf8?text=Surjeet+Singh";
                  }}
                />
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-4 right-4 bg-gray-950/90 backdrop-blur-md border border-blue-500/40 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                <div>
                  <p className="text-xs font-bold text-gray-200">Criterion Tech</p>
                  <p className="text-[10px] text-blue-400">Team Lead & AI Specialist</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24 pt-10 border-t border-gray-800/80 z-10 relative">
          {statsData.map((stat, idx) => (
            <div key={idx} className="bg-gray-900/50 backdrop-blur-md p-5 rounded-2xl border border-gray-800/80 hover:border-blue-500/50 transition-all text-center group">
              <p className="text-3xl sm:text-4xl font-extrabold text-gradient-cyan group-hover:scale-105 transition-transform">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- RESUME MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="bg-gray-950 border border-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            
            {/* Modal Header */}
            <div className="bg-gray-900/90 border-b border-gray-800 p-5 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-white">Surjeet Singh - <span className="text-blue-400">Curriculum Vitae</span></h3>
                <p className="text-xs text-gray-400">AI Deployment Engineer | MLOps Specialist | Team Lead</p>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="/resume.pdf" 
                  download="Surjeet_Singh_Resume.pdf"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-all"
                >
                  <FaDownload /> Download PDF
                </a>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-red-400 transition-colors p-2 text-xl"
                  aria-label="Close Resume Modal"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-8 overflow-y-auto max-h-[75vh]">
              
              {/* Summary */}
              <div className="bg-blue-950/30 p-4 rounded-xl border border-blue-900/50">
                <h4 className="text-lg font-bold text-blue-300 mb-1">Professional Overview</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Mid-level AI Deployment Engineer & MLOps Specialist with extensive experience in leading microservice containerization,Edge AI deployments, and zero-downtime medical infrastructure. Recognized thought leader on Google for Developers and Dev.to.
                </p>
              </div>

              {/* Experience Section */}
              <div>
                <h4 className="flex items-center gap-3 text-xl font-bold text-white border-b border-gray-800 pb-3 mb-6">
                  <FaBriefcase className="text-blue-400" /> Work Experience
                </h4>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-blue-500/60">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5"></div>
                    <h5 className="text-lg font-bold text-white">AI Deployment Engineer & Python Developer (Team Lead)</h5>
                    <p className="text-blue-400 text-xs font-mono mb-2">Criterion Tech, Lucknow | April 2024 - Present</p>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1.5">
                      <li>Architected and managed the migration of 28+ critical hospital microservices (ECG APIs, IoT monitors) to a centralized, self-healing Dockerized infrastructure.</li>
                      <li>Designed end-to-end AI Computer Vision pipelines (YOLOv8/11) integrated with multimodal Generative AI (Gemini API).</li>
                      <li>Developed robust REST APIs (Flask) and multi-threaded WebSocket servers to handle concurrent IoT data without packet loss.</li>
                      <li>Managed Edge AI deployments on Raspberry Pi for resource-constrained medical environments.</li>
                      <li>Engineered automated data pipelines using Node-RED for real-time sensor processing and HIS API integration.</li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l-2 border-gray-700">
                    <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[7px] top-1.5"></div>
                    <h5 className="text-lg font-bold text-white">Senior Technical Trainer & System Administrator</h5>
                    <p className="text-blue-400 text-xs font-mono mb-2">Softech / Aptech Computer Education | April 2016 - April 2024</p>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1.5">
                      <li>Delivered advanced technical training on Python, Database Management, and System Architecture.</li>
                      <li>Managed Linux lab infrastructure, maintaining 99% uptime for practical sessions.</li>
                      <li>Mentored 500+ students and instructors in building real-world automation and web applications.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="flex items-center gap-3 text-xl font-bold text-white border-b border-gray-800 pb-3 mb-6">
                  <FaCode className="text-blue-400" /> Core Skills
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm text-gray-300">
                  <div className="bg-gray-900 p-3 rounded-lg border border-gray-800"><strong className="text-blue-400">Languages:</strong> Python, JavaScript, SQL, C, C++, Bash</div>
                  <div className="bg-gray-900 p-3 rounded-lg border border-gray-800"><strong className="text-blue-400">AI / Vision:</strong> YOLOv8/11, EasyOCR, Gemini API, OpenCV, TensorFlow</div>
                  <div className="bg-gray-900 p-3 rounded-lg border border-gray-800"><strong className="text-blue-400">AIOps & Infra:</strong> Docker, MicroK8s, Systemd, Nginx, Linux, Grafana</div>
                  <div className="bg-gray-900 p-3 rounded-lg border border-gray-800"><strong className="text-blue-400">Protocols & Tools:</strong> Flask, FastAPI, Node-RED, WebSockets, MQTT, Git</div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="flex items-center gap-3 text-xl font-bold text-white border-b border-gray-800 pb-3 mb-6">
                  <FaGraduationCap className="text-blue-400" /> Education
                </h4>
                <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
                  <h5 className="text-base font-bold text-white">Bachelor of Computer Applications (BCA)</h5>
                  <p className="text-xs text-gray-400 mt-0.5">Sam Higginbottom University of A.T.S, Prayagraj | 2013 - 2016</p>
                  <p className="text-xs text-emerald-400 font-semibold mt-1">First Class Distinction (74.4%)</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;