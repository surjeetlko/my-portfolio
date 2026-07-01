import { useState } from 'react';
import { FaDownload, FaEye, FaTimes, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white px-6 md:px-10 pt-24 pb-12">
      
      {/* Container for Text and Image */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 md:gap-8">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-blue-500">Surjeet Singh</span>
          </h1>
          
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium max-w-2xl leading-relaxed">
            Python Developer | AI Deployment Engineer | Docker & Node-RED Automation <br className="hidden lg:block" />
            Production ML Systems @ Criterion Tech | MCA
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            I specialize in developing robust AI pipelines, building scalable Python backend systems, and deploying machine learning models into production. With expertise in Docker and Node-RED, I streamline automation and system administration for high-performance environments.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4 w-full md:w-auto">
            <a 
              href="/resume.pdf" 
              download="Surjeet_Singh_Resume.pdf"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-600/30"
            >
              <FaDownload /> Download CV
            </a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 px-8 py-3 border border-gray-600 hover:border-blue-400 hover:text-blue-400 rounded-lg font-semibold transition-all"
            >
              <FaEye className="text-xl" /> View Resume
            </button>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <div className="relative group">
            {/* Glowing Background Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-gray-800 overflow-hidden shadow-2xl">
              <img 
                src="/surjeet-singh-portfolio.jpg" 
                alt="Surjeet Singh - AI Deployment Engineer and Python Developer" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Agar photo nahi mili, toh ek dummy avatar dikhayega error se bachne ke liye
                  e.target.src = "https://placehold.co/400x400/1f2937/3b82f6?text=Surjeet+Singh";
                }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* --- RESUME MODAL (POPUP) - (Same as before) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl text-left flex flex-col">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 p-6 flex justify-between items-center z-10">
              <h3 className="text-2xl font-bold text-white">Surjeet Singh - <span className="text-blue-500">Resume</span></h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-red-500 transition-colors text-2xl"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-10 space-y-10">
              
              {/* Experience Section */}
              <div>
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-100 border-b border-gray-800 pb-3 mb-6">
                  <FaBriefcase className="text-blue-500" /> Experience
                </h4>
                <div className="space-y-8">
                  <div className="relative pl-6 border-l-2 border-blue-900">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                    <h5 className="text-xl font-bold text-white">Python Developer <span className="text-blue-500 text-sm ml-2">(2 Years)</span></h5>
                    <p className="text-gray-400 text-sm mb-2">Criterion Tech Private Limited, Lucknow | April 2024 - Present</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm md:text-base">
                      <li>Managed Linux servers, deploying Python AI/ML projects and automation pipelines.</li>
                      <li>Configured services for real-time object detection and web-based dashboards.</li>
                      <li>Developed ML solutions like PPG Data Analysis, Urine Measurement via YOLOv5, and ECG Diagnosis.</li>
                    </ul>
                  </div>
                  <div className="relative pl-6 border-l-2 border-blue-900">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                    <h5 className="text-xl font-bold text-white">Computer Faculty <span className="text-blue-500 text-sm ml-2">(1 Year)</span></h5>
                    <p className="text-gray-400 text-sm mb-2">Aptech Private Limited, Lucknow | Nov 2023 - Apr 2024</p>
                    <p className="text-gray-300 text-sm md:text-base">Taught Full Stack Development, Java, and Advanced Excel. Updated curriculum with real-world projects, resulting in 400+ students certified with an 85% distinction rate.</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-blue-900">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
                    <h5 className="text-xl font-bold text-white">Computer Teacher & Branch Manager <span className="text-blue-500 text-sm ml-2">(7 Years)</span></h5>
                    <p className="text-gray-400 text-sm mb-2">Softech Institute of Mgmt. & Tech, Lucknow | Apr 2016 - Nov 2023</p>
                    <p className="text-gray-300 text-sm md:text-base">Taught 500+ students, conducted 25+ faculty interviews, and trained 15+ instructors. Improved teaching efficiency by 30% and student pass rates to over 90%.</p>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-100 border-b border-gray-800 pb-3 mb-6">
                  <FaCode className="text-blue-500" /> Technical Skills
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 text-sm md:text-base">
                  <div><strong className="text-white">Programming:</strong> C, C++, VB.Net, C#, Java, Python</div>
                  <div><strong className="text-white">Libraries/Frameworks:</strong> JavaScript, Node.js, React.js, YOLOv8, YOLO11</div>
                  <div><strong className="text-white">Tools/Platforms:</strong> Git, Docker, Node-RED, Edge Impulse, Jupyter Notebook, VS Code, Cursor</div>
                  <div><strong className="text-white">Databases:</strong> SQL Server, MySQL, SQLite</div>
                </div>
              </div>

              {/* Education Section */}
              <div>
                <h4 className="flex items-center gap-3 text-2xl font-bold text-gray-100 border-b border-gray-800 pb-3 mb-6">
                  <FaGraduationCap className="text-blue-500" /> Education
                </h4>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h5 className="text-lg font-bold text-white">Bachelor of Computer Applications (BCA)</h5>
                  <p className="text-gray-400">Sam Higginbottom University of Agriculture, Technology and Sciences, Prayagraj | 2013 - 2016</p>
                  <p className="text-blue-400 font-semibold mt-1">Percentage: 74.4%</p>
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
