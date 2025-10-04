"use client";
import { useInView } from "react-intersection-observer";
import SkillsChart from "@/app/components/SkillsChart";

export default function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const skills = [
    {
      label: "Frontend Development",
      width: "95%",
      color: "text-electric-blue",
    },
    { label: "Backend Development", width: "90%", color: "text-neon-green" },
    { label: "Database Design", width: "85%", color: "text-purple" },
    { label: "DevOps & Cloud", width: "80%", color: "text-soft-orange" },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-b from-gray-900 to-deep-charcoal"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400">
            Proficient in modern web technologies and development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {skills.map((bar, i) => (
              <div
                key={bar.label}
                className="scroll-reveal"
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">
                      {bar.label}
                    </span>
                    <span className={bar.color}>{bar.width}</span>
                  </div>
                  <div className="w-full bg-medium-gray rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-electric-blue to-neon-green h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: inView ? bar.width : "0%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-reveal" style={{ transitionDelay: "400ms" }}>
            <div className="h-80">
              <SkillsChart type="radar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
