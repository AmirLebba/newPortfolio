'use client'; 
import { useParticleBackground } from '@/app/lib/hooks/useParticleBackground';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useParticleBackground(); 
  return <>{children}</>;
}