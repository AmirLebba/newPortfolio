import ScrollReveal from '@/app/util/ScrollReveal';
import SkillsChart from '@/app/components/SkillsChart';

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-deep-charcoal">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">Technical Skills</h2>
            <p className="text-xl text-gray-400">Proficient in modern web technologies and development practices</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { label: 'Frontend Development', width: '95%', color: 'text-electric-blue' },
              { label: 'Backend Development', width: '90%', color: 'text-neon-green' },
              { label: 'Database Design', width: '85%', color: 'text-purple' },
              { label: 'DevOps & Cloud', width: '80%', color: 'text-soft-orange' },
            ].map((bar, i) => (
              <ScrollReveal animation="fade-right" delay={i * 200} key={bar.label}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">{bar.label}</span>
                    <span className={bar.color}>{bar.width}</span>
                  </div>
                  <div className="w-full bg-medium-gray rounded-full h-2">
                    <div className="bg-gradient-to-r from-electric-blue to-neon-green h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: bar.width }}></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal animation="fade-left" delay={400}>
            <div className="h-80"><SkillsChart type="radar" /></div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}