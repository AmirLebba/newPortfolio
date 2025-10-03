import ProjectsHero from '@/app/components/ProjectsHero';
import ProjectsGrid from '@/app/components/ProjectsGrid';
import ProjectStats from '@/app/components/ProjectStats';
import ProjectModal from '@/app/components/ProjectModal';

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