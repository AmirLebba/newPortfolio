import ProjectsHero from '@/app/projects/components/ProjectsHero';
import ProjectsGrid from '@/app/projects/components/ProjectsGrid';
import ProjectStats from '@/app/projects/components/ProjectStats';
import ProjectModal from '@/app/projects/components/ProjectModal';

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectStats />
      <ProjectModal />
    </>
  );
}