export default function ExperienceTimeline() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">Professional Experience</h2>
          <p className="text-xl text-gray-400">My journey through the tech industry</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="timeline-item scroll-reveal">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Senior Full Stack Developer</h3>
                  <p className="text-blue-400 font-semibold">TechCorp Solutions</p>
                </div>
                <span className="text-gray-400">2022 - Present</span>
              </div>
              <p className="text-gray-300 mb-4">
                Leading development of enterprise web applications serving 100K+ users. Architected microservices infrastructure and implemented CI/CD pipelines.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">Docker</span>
              </div>
            </div>
          </div>

          <div className="timeline-item scroll-reveal">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Full Stack Developer</h3>
                  <p className="text-blue-400 font-semibold">StartupXYZ</p>
                </div>
                <span className="text-gray-400">2020 - 2022</span>
              </div>
              <p className="text-gray-300 mb-4">
                Built scalable web applications from ground up. Developed real-time features and integrated third-party APIs. Mentored junior developers and established coding standards.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Redis</span>
              </div>
            </div>
          </div>

          <div className="timeline-item scroll-reveal">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Frontend Developer</h3>
                  <p className="text-blue-400 font-semibold">WebAgency Pro</p>
                </div>
                <span className="text-gray-400">2019 - 2020</span>
              </div>
              <p className="text-gray-300 mb-4">
                Created responsive web interfaces for diverse clients. Optimized performance and accessibility. Collaborated with designers to implement pixel-perfect designs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">Sass</span>
                <span className="tech-tag">jQuery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}