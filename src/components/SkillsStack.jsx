import { useState } from 'react';
import { skillsCategories } from '../data/skillsData';
import { FaTerminal, FaCheck, FaLayerGroup } from 'react-icons/fa';

const SkillsStack = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 px-6 md:px-10 bg-gray-900 text-white relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Technical Arsenal & <span className="text-gradient-cyan">MLOps Stack</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Enterprise tools, frameworks, and infrastructure protocols utilized daily to build scalable production systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillsCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs md:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === idx
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105 border border-blue-400'
                  : 'bg-gray-800/80 text-gray-400 border border-gray-700/80 hover:border-gray-600 hover:text-white'
              }`}
            >
              <FaLayerGroup className={activeCategory === idx ? "text-white" : "text-gray-500"} />
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="bg-gray-950/80 p-8 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-md max-w-5xl mx-auto">
          <div className="mb-6 border-b border-gray-800 pb-4">
            <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
              <FaTerminal className="text-blue-400" />
              {skillsCategories[activeCategory].title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1">
              {skillsCategories[activeCategory].description}
            </p>
          </div>

          {/* Grid of Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsCategories[activeCategory].skills.map((skill, sIdx) => (
              <div 
                key={sIdx}
                className="bg-gray-900/60 p-4 rounded-xl border border-gray-800 hover:border-blue-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-150 transition-transform"></div>
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">{skill.name}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800/60 text-blue-300 font-medium">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsStack;
