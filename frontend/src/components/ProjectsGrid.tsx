
import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectsGridProps {
  projects: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    company: string;
  }[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <div className="mt-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
