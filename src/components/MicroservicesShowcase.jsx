import { useState, useMemo } from 'react';
import { projectsData, projectCategories } from '../data/projectsData';
import { FaSearch, FaGithub, FaExternalLinkAlt, FaTimes, FaServer, FaCheckCircle, FaMicrochip, FaNetworkWired, FaCopy, FaCheck } from 'react-icons/fa';

const MicroservicesShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Filtered projects computation
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = activeCategory === "all" || project.category === activeCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.packageId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="microservices" className="py-24 px-6 md:px-10 bg-gray-950 text-white border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/80 rounded-full border border-blue-800 text-blue-300 text-xs font-mono mb-3">
            <FaMicrochip className="animate-spin text-blue-400" /> 30+ Enterprise Microservices & AI Pipelines
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Production Healthcare & <span className="text-gradient-cyan">IoT Systems</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Centralized Docker containerization, edge AI models, real-time audio/ECG parsers, and zero-downtime telemetry pipelines engineered and managed by Surjeet.
          </p>
        </div>

        {/* Search & Category Filter Control Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-gray-900/60 p-4 rounded-2xl border border-gray-800 backdrop-blur-md">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Instant Search Bar */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3.5 top-3 text-gray-500 text-sm" />
            <input
              type="text"
              placeholder="Search by ECG, YOLO, Docker..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-950 border border-gray-700/80 rounded-xl pl-9 pr-4 py-2 text-xs md:text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="absolute right-3 top-2.5 text-gray-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Results Count Indicator */}
        <div className="flex justify-between items-center mb-6 px-1">
          <p className="text-xs text-gray-400">
            Showing <strong className="text-blue-400">{filteredProjects.length}</strong> of {projectsData.length} production microservices
          </p>
          {searchQuery && (
            <span className="text-xs text-gray-500">Filtered by "{searchQuery}"</span>
          )}
        </div>

        {/* Grid of Microservice Cards */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-900/50 rounded-2xl border border-gray-800/80 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl p-6 flex flex-col justify-between glass-card group"
              >
                <div>
                  {/* Top Bar: Package ID & Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 bg-blue-950/90 text-blue-300 border border-blue-800/60 rounded-md">
                      {project.packageId}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-100 group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs md:text-sm mb-5 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 bg-gray-800/80 text-gray-300 rounded border border-gray-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/80 text-xs">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <FaNetworkWired /> Architecture & Spec
                    </button>

                    {project.github ? (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors font-mono"
                      >
                        <FaGithub className="text-sm" /> Code Repo
                      </a>
                    ) : (
                      <span className="text-[10px] text-gray-500 font-mono">Enterprise Internal</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-900/30 rounded-2xl border border-gray-800">
            <p className="text-gray-400 text-lg mb-2">No microservices found matching your query</p>
            <p className="text-xs text-gray-500">Try searching for keywords like "ECG", "YOLO", "Docker", "Node-RED", or "BMS"</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* --- ARCHITECTURE DETAIL MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-gray-950 border border-gray-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            
            {/* Header */}
            <div className="bg-gray-900 p-6 border-b border-gray-800 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 bg-blue-950 text-blue-300 border border-blue-800 rounded">
                    {selectedProject.packageId}
                  </span>
                  {selectedProject.projectId && (
                    <span className="text-xs font-mono px-2 py-0.5 bg-gray-800 text-gray-400 rounded">
                      ID: {selectedProject.projectId}
                    </span>
                  )}
                  <span className="text-xs font-semibold px-2.5 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full">
                    {selectedProject.status}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{selectedProject.title}</h3>
              </div>

              <button 
                onClick={() => setSelectedProject(null)} 
                className="text-gray-400 hover:text-red-400 transition-colors text-2xl p-1"
                aria-label="Close Modal"
              >
                <FaTimes />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              
              {/* Architecture Pipeline Banner */}
              <div>
                <h4 className="text-xs font-mono uppercase text-gray-400 mb-2">Data Flow & Architecture Spec</h4>
                <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 font-mono text-xs md:text-sm text-blue-300 break-words leading-relaxed">
                  {selectedProject.architecture}
                </div>
              </div>

              {/* System Overview */}
              <div>
                <h4 className="text-xs font-mono uppercase text-gray-400 mb-2">System Overview</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Highlights */}
              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase text-gray-400 mb-3">Key Engineering Highlights</h4>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 bg-gray-900/50 p-3 rounded-lg border border-gray-800/60">
                        <FaCheckCircle className="text-emerald-400 text-sm mt-0.5 shrink-0" />
                        <p className="text-xs md:text-sm text-gray-300">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack List */}
              <div>
                <h4 className="text-xs font-mono uppercase text-gray-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-mono rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-lg"
                  >
                    <FaGithub className="text-base" /> View GitHub Repository
                  </a>
                ) : (
                  <span className="text-xs text-gray-500 font-mono">Enterprise Confidential Microservice</span>
                )}

                <button
                  onClick={() => copyToClipboard(selectedProject.github || selectedProject.title, selectedProject.id)}
                  className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-700 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  {copiedId === selectedProject.id ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  {copiedId === selectedProject.id ? 'Copied!' : 'Copy Reference'}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default MicroservicesShowcase;
