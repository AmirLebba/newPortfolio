'use client';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView && typeof window !== 'undefined' && (window as any).echarts) {
      const chart = (window as any).echarts.init(document.getElementById('skills-radar'));
      chart.setOption(radarOption);
      window.addEventListener('resize', () => chart.resize());
      return () => window.removeEventListener('resize', () => chart.resize());
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">Technical Skills</h2>
          <p className="text-xl text-gray-400">My expertise across the full technology stack</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Frontend */}
          <div className="skill-category scroll-reveal" data-category="frontend">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend</h3>
            <div className="space-y-3">
              <div className="flex justify-between"><span>React / Next.js</span><span className="text-blue-400">95%</span></div>
              <div className="flex justify-between"><span>Vue.js</span><span className="text-blue-400">90%</span></div>
              <div className="flex justify-between"><span>TypeScript</span><span className="text-blue-400">92%</span></div>
              <div className="flex justify-between"><span>Tailwind CSS</span><span className="text-blue-400">88%</span></div>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category scroll-reveal" data-category="backend">
            <h3 className="text-xl font-bold mb-4 text-green-400">Backend</h3>
            <div className="space-y-3">
              <div className="flex justify-between"><span>Node.js</span><span className="text-green-400">93%</span></div>
              <div className="flex justify-between"><span>Python / Django</span><span className="text-green-400">87%</span></div>
              <div className="flex justify-between"><span>Express.js</span><span className="text-green-400">91%</span></div>
              <div className="flex justify-between"><span>GraphQL</span><span className="text-green-400">85%</span></div>
            </div>
          </div>

          {/* Database */}
          <div className="skill-category scroll-reveal" data-category="database">
            <h3 className="text-xl font-bold mb-4 text-purple-400">Database</h3>
            <div className="space-y-3">
              <div className="flex justify-between"><span>PostgreSQL</span><span className="text-purple-400">89%</span></div>
              <div className="flex justify-between"><span>MongoDB</span><span className="text-purple-400">86%</span></div>
              <div className="flex justify-between"><span>Redis</span><span className="text-purple-400">82%</span></div>
              <div className="flex justify-between"><span>MySQL</span><span className="text-purple-400">84%</span></div>
            </div>
          </div>

          {/* DevOps */}
          <div className="skill-category scroll-reveal" data-category="devops">
            <h3 className="text-xl font-bold mb-4 text-orange-400">DevOps</h3>
            <div className="space-y-3">
              <div className="flex justify-between"><span>Docker</span><span className="text-orange-400">83%</span></div>
              <div className="flex justify-between"><span>AWS</span><span className="text-orange-400">80%</span></div>
              <div className="flex justify-between"><span>CI/CD</span><span className="text-orange-400">85%</span></div>
              <div className="flex justify-between"><span>Kubernetes</span><span className="text-orange-400">75%</span></div>
            </div>
          </div>
        </div>

        <div className="scroll-reveal">
          <div id="skills-radar" className="w-full h-[400px]" />
        </div>
      </div>
    </section>
  );
}

const radarOption = {
  backgroundColor: 'transparent',
  radar: {
    indicator: [
      { name: 'Frontend', max: 100 },
      { name: 'Backend', max: 100 },
      { name: 'Database', max: 100 },
      { name: 'DevOps', max: 100 },
      { name: 'Mobile', max: 100 },
      { name: 'Cloud', max: 100 },
    ],
    axisName: { color: '#f8f8f2', fontSize: 14, fontWeight: 'bold' },
    splitLine: { lineStyle: { color: '#404040' } },
    axisLine: { lineStyle: { color: '#404040' } },
    splitArea: { show: false },
  },
  series: [
    {
      type: 'radar',
      data: [
        {
          value: [95, 90, 85, 80, 75, 85],
          name: 'Skills',
          areaStyle: { color: 'rgba(0, 212, 255, 0.3)' },
          lineStyle: { color: '#00d4ff', width: 3 },
          itemStyle: { color: '#39ff14', borderColor: '#00d4ff', borderWidth: 2 },
        },
      ],
    },
  ],
};