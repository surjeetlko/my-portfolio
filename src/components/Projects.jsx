import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaMicrochip } from 'react-icons/fa';

const openSourceRepos = [
  {
    title: "SPR-139 GE ECG Dual API Integration",
    repo: "CriterionWorks/SPR-139-XML-JSON-GE-ECG-Integration",
    url: "https://github.com/CriterionWorks/SPR-139-XML-JSON-GE-ECG-Integration",
    description: "Automated real-time pipeline converting GE MAC 2000 ECG XML files to JSON payloads and transmitting to medical endpoints.",
    tech: ["Python", "Flask", "Docker", "XML/JSON"]
  },
  {
    title: "SPR-148 ECG Image Digitization API",
    repo: "CriterionWorks/SPR-148-ECG-Image-Digitization-API",
    url: "https://github.com/CriterionWorks/SPR-148-ECG-Image-Digitization-API",
    description: "Computer vision API extracting waveform features from paper ECG scans for historical cardiac progress tracking.",
    tech: ["OpenCV", "Python", "Flask", "Computer Vision"]
  },
  {
    title: "SPR-147 Audio Processing API",
    repo: "CriterionWorks/SPR-147-Audio-Processing-API",
    url: "https://github.com/CriterionWorks/SPR-147-Audio-Processing-API",
    description: "Reverse proxy API microservice handling acoustic speech analysis and generating diagnostic PDF reports.",
    tech: ["Docker", "Python", "Audio DSP", "Flask"]
  },
  {
    title: "SPR-104 BMS Shelly ICU Monitoring",
    repo: "CriterionWorks/SPR-104-BMS-Shelly",
    url: "https://github.com/CriterionWorks/SPR-104-BMS-Shelly",
    description: "Real-time IoT BMS monitoring system with Flask/WebSockets backend and ESP32 ICU microcontrollers.",
    tech: ["Flask", "WebSockets", "ESP32", "Docker"]
  },
  {
    title: "SPR-106 Baby Cry Acoustic Analysis",
    repo: "CriterionWorks/SPR-106-BabyCryAnalysisSystem",
    url: "https://github.com/CriterionWorks/SPR-106-BabyCryAnalysisSystem",
    description: "Deep learning classification system predicting infant cry distress triggers with OpenAPI endpoints.",
    tech: ["Deep Learning", "FastAPI", "Docker", "PyTorch"]
  },
  {
    title: "SPR-107 PhysioSight rPPG Vitals",
    repo: "CriterionWorks/SPR-107-PhysioSight-rPPG",
    url: "https://github.com/CriterionWorks/SPR-107-PhysioSight-rPPG",
    description: "Contactless Remote Photoplethysmography estimating heart rate via camera video chrominance filtering.",
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
            Featured <span className="text-gradient-cyan">GitHub Repositories</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Open-source and enterprise repositories highlighting microservice architectures, computer vision pipelines, and IoT automation.
          </p>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openSourceRepos.map((repo, idx) => (
            <div 
              key={idx}
              className="bg-gray-950 p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between glass-card group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <FaFolderOpen className="text-blue-400 text-xl" />
                  <a 
                    href={repo.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="text-lg" />
                  </a>
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
                  href={repo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors pt-2 border-t border-gray-800 w-full"
                >
                  View Code Repository <FaExternalLinkAlt className="text-[10px]" />
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
            <FaGithub className="text-lg" /> View All GitHub Work @surjeetlko
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;