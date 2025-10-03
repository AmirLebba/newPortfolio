'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ScrollReveal from '@/app/util/ScrollReveal';
import TypedText from '@/app/util/TypedText';

export default function HeroSection() {
  const router = useRouter();
  const [stats, setStats] = useState({ experience: 0, projects: 0, technologies: 0 });

  useEffect(() => {
    const animateCounters = () => {
      [{ target: 2, key: 'experience' }, { target: 10, key: 'projects' }, { target: 9, key: 'technologies' }].forEach(({ target, key }) => {
        let current = 0;
        const inc = target / 50;
        const t = setInterval(() => {
          current += inc;
          if (current >= target) { current = target; clearInterval(t); }
          setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 40);
      });
    };
    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-deep-charcoal via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, #00d4ff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #39ff14 0%, transparent 50%), radial-gradient(circle at 40% 80%, #bd93f9 0%, transparent 50%)'
      }} />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <ScrollReveal>
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">Full Stack</span><br />
              <span className="text-white">Developer</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="text-xl text-gray-300 font-mono">
              <TypedText strings={[
                'Crafting digital experiences...', 'Building modern web applications...',
                'Solving complex problems...', 'Creating innovative solutions...'
              ]} typeSpeed={50} backSpeed={30} backDelay={2000} loop showCursor cursorChar="|" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              I craft digital experiences that blend cutting-edge technology with intuitive design. Specializing in modern web applications, I turn complex problems into elegant solutions.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => router.push('/projects')} className="px-8 py-3 bg-electric-blue hover:bg-blue-700 text-deep-charcoal rounded-lg font-semibold transition-all duration-300 border border-electric-blue hover:shadow-lg hover:shadow-electric-blue/30">View Projects</button>
              <button onClick={() => router.push('/contact')} className="px-8 py-3 border border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-deep-charcoal rounded-lg font-semibold transition-all duration-300">Get In Touch</button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={800}>
            <div className="flex space-x-8 pt-8">
              <div className="text-center"><div className="text-3xl font-bold text-electric-blue">{stats.experience}</div><div className="text-sm text-gray-400">Years Experience</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-neon-green">{stats.projects}</div><div className="text-sm text-gray-400">Projects Completed</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-purple">{stats.technologies}</div><div className="text-sm text-gray-400">Technologies</div></div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-left" delay={1000}>
          <div className="floating-element">
            <div className="code-editor bg-dark-gray rounded-xl p-8 relative overflow-hidden shadow-2xl shadow-electric-blue/10">
              <div className="absolute top-0 left-0 right-0 h-12 bg-medium-gray rounded-t-xl flex items-center px-4">
                <div className="flex space-x-2"><div className="w-3 h-3 bg-red-500 rounded-full"></div><div className="w-3 h-3 bg-yellow-500 rounded-full"></div><div className="w-3 h-3 bg-green-500 rounded-full"></div></div>
              </div>
              <div className="mt-8 space-y-4 font-mono text-sm">
                <div className="text-gray-500">// Welcome to my portfolio</div>
                <div><span className="text-electric-blue">const </span><span className="text-white">developer</span><span className="text-gray-400"> = </span><span className="text-white">{"{"}</span></div>
                <div className="ml-4 space-y-1">
                  <div><span className="text-neon-green">name</span><span className="text-gray-400">: </span><span className="text-orange-400">'Amir Lebba'</span><span className="text-gray-400">,</span></div>
                  <div><span className="text-neon-green">role</span><span className="text-gray-400">: </span><span className="text-orange-400">'Full Stack Developer'</span><span className="text-gray-400">,</span></div>
                  <div><span className="text-neon-green">skills</span><span className="text-gray-400">: [</span><span className="text-orange-400">'React'</span><span className="text-gray-400">, </span><span className="text-orange-400">'Node.js'</span><span className="text-gray-400">, </span><span className="text-orange-400">'Next.js'</span><span className="text-gray-400">],</span></div>
                  <div><span className="text-neon-green">passion</span><span className="text-gray-400">: </span><span className="text-orange-400">'Building amazing apps'</span></div>
                </div>
                <div><span className="text-white">{"}"};</span></div>
                <div><span className="text-purple">console.log</span><span className="text-white">(</span><span className="text-orange-400">'Let's create something incredible together!'</span><span className="text-white">);</span></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}