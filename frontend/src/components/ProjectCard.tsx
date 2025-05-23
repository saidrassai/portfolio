
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  company: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, image, company }) => {
  return (
    <div className="backdrop-blur-md bg-white/20 dark:bg-black/20 rounded-3xl overflow-hidden shadow-xl border border-white/30 dark:border-white/10 hover:shadow-2xl transition-all duration-300 group">
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white text-sm opacity-80 mb-1">PROJECT AT {company}</div>
          <h3 className="text-white font-bold text-lg leading-tight">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-white/30 dark:bg-white/10 rounded-full text-xs text-gray-700 dark:text-gray-200 border border-white/40 dark:border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
