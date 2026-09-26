import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaLock } from 'react-icons/fa';

const featuredSystems = [
  {
    title: "12-Lead ECG Data Ingestion Pipeline",
    repo: "Enterprise Medical Telemetry",
    url: "https://github.com/surjeetlko",
    description: "Automated real-time pipeline converting 12-Lead ECG XML files to JSON payloads and transmitting to healthcare APIs with zero data loss.",
    tech: ["Python", "Flask", "Docker", "XML/JSON"]
  },
  {
    title: "ECG Paper Image Digitization API",
    repo: "Computer Vision Signal Extraction",
    url: "https://github.com/surjeetlko",
    description: "Computer vision API extracting signal contours and lead features from paper ECG scans for historical cardiac progress tracking.",
    tech: ["OpenCV", "Python", "Flask", "Computer Vision"]
  },
  {
    title: "Acoustic Speech & Audio Analysis API",
    repo: "Acoustic DSP Microservice",
    url: "https://github.com/surjeetlko",
    description: "Reverse proxy API microservice handling speech and acoustic analysis, generating diagnostic PDF reports.",
    tech: ["Docker", "Python", "Audio DSP", "Flask"]
  },
  {
    title: "ICU Building Management System (BMS)",
    repo: "IoT & Hardware Automation",
    url: "https://github.com/surjeetlko",
    description: "Real-time IoT BMS monitoring system with Flask/WebSockets backend and ESP32 ICU microcontrollers.",
    tech: ["Flask", "WebSockets", "ESP32", "Docker"]
  },
  {
    title: "Baby Cry Acoustic Classification Engine",
    repo: "Deep Learning Sound AI",
    url: "https://github.com/surjeetlko",
    description: "Deep learning classification system analyzing acoustic spectrograms to predict infant distress triggers.",
    tech: ["Deep Learning", "FastAPI", "Docker", "PyTorch"]
  },
  {
    title: "Contactless rPPG Vital Sign Estimator",
    repo: "Computer Vision Vital Signs",
    url: "https://github.com/surjeetlko",
    description: "Contactless Remote Photoplethysmography estimating heart rate via camera video chrominance signal processing.",
    tech: ["OpenCV", "MediaPipe", "Python", "rPPG"]
  }
];

const Projects = () => {
  return (
    <section id="github-projects" className="py-20 px-6 md:px-10 bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Production <span className="text-gradient-cyan">Systems & Repositories</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Highlighted architectures across computer vision pipelines, real-time IoT automation, and containerized microservices.
          </p>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSystems.map((repo, idx) => (
            <div 
              key={idx}
              className="bg-gray-950 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between glass-card group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <FaFolderOpen className="text-blue-400 text-xl" />
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-gray-900 text-gray-400 rounded border border-gray-800 flex items-center gap-1">
                    <FaLock className="text-[9px] text-amber-400" /> Enterprise Private
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-100 group-hover:text-blue-400 transition-colors mb-2">
                  {repo.title}
                </h3>
                <p className="text-xs font-mono text-gray-500 mb-3">{repo.repo}</p>
                <p className="text-gray-400 text-xs md:text-sm mb-5 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 bg-blue-950/60 text-blue-300 rounded border border-blue-900/50">
                      {t}
                    </span>
                  ))}
                </div>

                <a 
                  href="https://github.com/surjeetlko" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors pt-2 border-t border-gray-800 w-full"
                >
                  View Developer Profile @surjeetlko <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Repos Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/surjeetlko"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-950 hover:bg-gray-800 text-white border border-gray-700 hover:border-blue-400 rounded-xl font-semibold text-sm transition-all shadow-lg"
          >
            <FaGithub className="text-lg" /> Explore GitHub Profile @surjeetlko
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;