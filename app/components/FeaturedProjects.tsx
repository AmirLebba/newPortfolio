'use client';
import { useRouter } from 'next/navigation';
import ScrollReveal from '@/app/util/ScrollReveal';
import ProjectCard from '@/app/components/ProjectCard';

const projects = [
  { id: 'ecommerce', title: 'E-commerce Platform', description: 'Full-stack shopping platform with payment integration, inventory management, and real-time analytics dashboard.', image: '/project-ecommerce.jpg', technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'] },
  { id: 'social', title: 'Social Analytics Dashboard', description: 'Real-time social media analytics platform with interactive charts, data visualization, and automated reporting features.', image: '/project-social.jpg', technologies: ['Vue.js', 'Python', 'PostgreSQL', 'D3.js'] },
  { id: 'task', title: 'Task Management App', description: 'Collaborative project management tool with real-time updates, team collaboration features, and cross-platform compatibility.', image: '/project-task.jpg', technologies: ['React Native', 'Firebase', 'Redux', 'Socket.io'] },
];

export default function FeaturedProjects() {
  const router = useRouter();
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-deep-charcoal to-gray-900">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">A selection of my recent work, showcasing modern web technologies and innovative solutions.</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 200}>
              <ProjectCard {...p} onViewDetails={() => router.push(`/projects#${p.id}`)} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}