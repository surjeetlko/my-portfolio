import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectData = [
  {
    id: 1,
    title: "Medical Data API & Node-RED Pipeline",
    description: "Automated medical data processing system using Node-RED and Python scripts. It processes CSV data, calculates fluid changes, prevents duplicate entries, and sends it directly to hospital APIs.",
    tech: ["Node-RED", "Python", "API Integration"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=Medical+Data+Pipeline",
    github: "", 
    live: ""
  },
  {
    id: 2,
    title: "Dockerized BMS & IAQ Data System",
    description: "A secure Flask-based backend system that sends BMS, IAQ, and OT sensor data to external APIs. It features password-protected dynamic setup and a Dockerized architecture for Kubernetes migration.",
    tech: ["Flask", "Docker", "Python", "REST APIs"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=BMS+Data+System",
    github: "", 
    live: ""
  },
  {
    id: 3,
    title: "Dockerized PPG & Glucose Watcher",
    description: "This containerized Python service monitors directories for new JSON files (PPG signals), fetches patient details from an external API, and performs glucose estimation using Linear Regression.",
    tech: ["Docker", "Python", "Machine Learning"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=PPG+Data+Analysis",
    github: "", 
    live: ""
  },
  {
    id: 4,
    title: "Conveyor Belt Object Detection",
    description: "A real-time computer vision system that uses YOLOv8 and OpenCV to detect bolts and screws on a moving conveyor belt, and triggers class-based hardware sorting.",
    tech: ["YOLOv8", "OpenCV", "NumPy"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=Conveyor+Object+Detection",
    github: "", 
    live: ""
  },
  {
    id: 5,
    title: "12-Lead ECG AI Diagnosis",
    description: "A machine learning algorithm that detects cardiac diagnosis from 12-lead ECG signals (XML data). It uses CNN, Edge Impulse, and XGBoost to assess signal quality.",
    tech: ["CNN", "Edge Impulse", "XGBoost"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=ECG+AI+Diagnosis",
    github: "", 
    live: ""
  },
  {
    id: 6,
    title: "Reverse Proxy & AI Deployment Server",
    description: "Setup of Nginx reverse proxy and Docker containers in production environments. Through this setup, multiple Python-based AI models and Node-RED pipelines are deployed in a secure and load-balanced manner.",
    tech: ["Linux", "Nginx", "Docker", "DevOps"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=Server+Administration",
    github: "", 
    live: ""
  },
  {
    id: 7,
    title: "Microbiology Bacteria Classification",
    description: "A YOLOv8 and TensorFlow-based AI system deployed on Raspberry Pi 4. It detects bacteria in culture plates through camera input and provides real-time buzzer alerts.",
    tech: ["TensorFlow", "YOLOv8", "Raspberry Pi"],
    image: "https://placehold.co/600x400/1f2937/3b82f6?text=Bacteria+Classification",
    github: "", 
    live: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-10 bg-gray-800 text-white min-h-screen border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-blue-500">Work</span>
        </h2>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col"
            >
              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-100 leading-tight">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow text-sm md:text-base">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-900/30 text-blue-400 text-xs font-semibold rounded-full border border-blue-800/50 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links (GitHub & Live) */}
                <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-800">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
                      <FaGithub className="text-lg" /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors text-sm font-medium">
                      <FaExternalLinkAlt className="text-base" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;