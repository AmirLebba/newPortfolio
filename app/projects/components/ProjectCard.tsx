'use client';
import { openProjectModal } from '@/app/lib/projectModal';

interface Props {
  id: string;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  tech: string[];
}

export default function ProjectCard({ id, title, desc, img, tags, tech }: Props) {
  return (
    <div className="project-card scroll-reveal" data-tags={tags.join(',')} data-project={id}>
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <button onClick={() => openProjectModal(id)} className="text-blue-400 hover:text-blue-300">
            View Details
          </button>
          <a href="#" className="text-gray-400 hover:text-white">
            GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}