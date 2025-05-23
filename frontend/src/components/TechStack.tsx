
import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'TS', color: 'bg-blue-500', textColor: 'text-white' },
    { name: 'JS', color: 'bg-yellow-400', textColor: 'text-black' },
    { name: 'React', color: 'bg-cyan-400', textColor: 'text-white' },
    { name: 'Next', color: 'bg-black', textColor: 'text-white' },
    { name: 'Node', color: 'bg-green-600', textColor: 'text-white' },
    { name: 'Tailwind', color: 'bg-sky-500', textColor: 'text-white' },
  ];

  return (
    <div className="backdrop-blur-md bg-white/20 dark:bg-black/20 rounded-3xl p-4 shadow-xl border border-white/30 dark:border-white/10 hover:shadow-2xl transition-all duration-300 w-full">
      <div className="flex items-center justify-center mb-3">
        <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
      </div>
      
      <div className="flex justify-center gap-2 mb-3 flex-wrap">
        {technologies.map((tech, index) => (
          <div 
            key={index}
            className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center ${tech.textColor} font-bold text-sm shadow-lg`}
          >
            {tech.name}
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">CURRENTLY USING</div>
        <div className="text-sm font-bold text-gray-800 dark:text-gray-100">TECH I ❤️</div>
      </div>
    </div>
  );
};

export default TechStack;
