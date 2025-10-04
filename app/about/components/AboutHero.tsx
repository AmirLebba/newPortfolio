import ScrollReveal from "@/app/util/ScrollReveal";
import Image from "next/image";
export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <ScrollReveal>
              <h1 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                I&apos;m a passionate full-stack developer with 2+ years of
                experience creating digital solutions that make a difference. I
                believe in the power of technology to solve real-world problems
                and enhance people&apos;s lives.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                My journey began with a curiosity about how things work on the
                internet, and it has evolved into a career focused on building
                scalable, user-friendly applications. I specialize in modern
                JavaScript frameworks, cloud technologies, and creating seamless
                user experiences.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="flex flex-wrap gap-4">
                <span className="tech-tag">Problem Solver</span>
                <span className="tech-tag">Innovation Driven</span>
                <span className="tech-tag">Team Player</span>
                <span className="tech-tag">Continuous Learner</span>
              </div>
            </ScrollReveal>
          </ScrollReveal>
          <div className="scroll-reveal">
            <ScrollReveal>
              <Image
                src="/profile.jpg"
                alt="Alex Chen"
                width={400} 
                height={400} 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
