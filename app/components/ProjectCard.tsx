// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  onViewDetails: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  technologies,
  onViewDetails,
}) => {
  return (
    <div className="project-card bg-dark-gray rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-electric-blue/20">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-electric-blue/10 text-electric-blue border border-electric-blue/30 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <button
            onClick={() => onViewDetails(id)}
            className="text-electric-blue hover:text-blue-300 font-medium transition-colors"
          >
            View Details
          </button>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;