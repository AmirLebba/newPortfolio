'use client';
import { useRouter } from 'next/navigation';
import ScrollReveal from '@/app/util/ScrollReveal';

export default function CtaSection() {
  const router = useRouter();
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-deep-charcoal to-black">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-gray-400 mb-8">Let&apos;s collaborate on your next project. From concept to deployment, I&apos;ll help you create exceptional digital experiences.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => router.push('/contact')} className="px-8 py-4 bg-electric-blue hover:bg-blue-700 text-deep-charcoal rounded-lg font-semibold text-lg transition-all duration-300 border border-electric-blue hover:shadow-lg hover:shadow-electric-blue/30">Start a Project</button>
            <button onClick={() => router.push('/about')} className="px-8 py-4 border border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-deep-charcoal rounded-lg font-semibold text-lg transition-all duration-300">Learn More About Me</button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}