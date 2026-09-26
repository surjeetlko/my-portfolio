import { FaUserCheck, FaCogs, FaProjectDiagram, FaChalkboardTeacher, FaUsers, FaCheckCircle, FaServer } from 'react-icons/fa';

const AboutLeadership = () => {
  const highlights = [
    {
      icon: <FaServer className="text-2xl text-blue-400" />,
      title: "Zero-Downtime Microservices Architect",
      desc: "Lead the migration of 28+ legacy PHP/Apache applications and raw hardware APIs into containerized, self-healing Dockerized microservices with reverse proxy Nginx gateways."
    },
    {
      icon: <FaProjectDiagram className="text-2xl text-cyan-400" />,
      title: "End-to-End AI & IoT Pipeline Engineer",
      desc: "Designed computer vision models (YOLOv8/11) and multi-threaded WebSocket servers capable of processing real-time ICU medical data without loss during peak loads."
    },
    {
      icon: <FaUsers className="text-2xl text-emerald-400" />,
      title: "Team Lead & Deployment Strategist",
      desc: "Supervising system administration, automated edge deployments on Raspberry Pi, and cross-functional hardware integration for hospital biomedical systems."
    },
    {
      icon: <FaChalkboardTeacher className="text-2xl text-amber-400" />,
      title: "Technical Mentor & Educator (8+ Years)",
      desc: "Trained 500+ students & 15+ instructors in Python, Web Architecture, and Linux Systems with 90%+ pass rates and distinction certifications."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-10 bg-gray-950 text-white relative border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            About & <span className="text-gradient-cyan">Leadership Impact</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Combining deep technical expertise in AI/ML deployment with team leadership, system architecture, and production infrastructure management.
          </p>
        </div>

        {/* 2 Grid Layout: Story Left, Highlights Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-6 space-y-6 bg-gray-900/60 p-8 rounded-2xl border border-gray-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-950/80 rounded-lg text-blue-400 border border-blue-800/60">
                <FaUserCheck className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Engineering Leadership @ Criterion Tech</h3>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              As an <strong className="text-blue-400">AI Deployment Engineer & Team Lead</strong>, I bridge the gap between complex Machine Learning models and mission-critical production environments. In healthcare, downtime is not an option. My focus is on creating fault-tolerant architectures that keep medical microservices running 24/7/365.
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Over the past two years, I have spearheaded the containerization of <strong className="text-cyan-400">28+ hospital microservices</strong>—ranging from real-time 12-lead ECG ingestion pipelines (GE MAC 2000, Philips TC35) to AI camera vision systems and continuous ICU telemetry dashboards.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-400 text-lg mt-0.5 shrink-0" />
                <p className="text-sm text-gray-300"><strong className="text-white">Centralized Docker Infrastructure:</strong> Zero packet loss for high-volume IoT data feeds.</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-400 text-lg mt-0.5 shrink-0" />
                <p className="text-sm text-gray-300"><strong className="text-white">Generative AI & Multimodal Integration:</strong> Combining YOLO computer vision with Gemini Pro API for medical report automation.</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-400 text-lg mt-0.5 shrink-0" />
                <p className="text-sm text-gray-300"><strong className="text-white">Thought Leadership:</strong> Recognized contributor on Google for Developers and Dev.to.</p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="bg-gray-900/40 p-6 rounded-xl border border-gray-800/80 hover:border-blue-500/40 transition-all hover:-translate-y-1 glass-card"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutLeadership;
