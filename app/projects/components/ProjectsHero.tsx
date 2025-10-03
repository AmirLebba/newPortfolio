"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "@/app/util/ScrollReveal";

export default function ProjectsHero() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      // anime.js scroll animation can be added here
    }
  }, [inView]);

  return (
    <section ref={ref} className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="scroll-reveal">
          <ScrollReveal>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              A collection of web applications, mobile apps, and innovative
              solutions I&apos;ve built. Each project represents a unique
              challenge and learning experience.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-4xl mx-auto scroll-reveal">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
              <input
                type="text"
                id="project-search"
                className="search-box"
                placeholder="Search projects..."
              />
              <div className="flex flex-wrap gap-3">
                <button className="filter-btn active" data-filter="all">
                  All
                </button>
                <button className="filter-btn" data-filter="web">
                  Web Apps
                </button>
                <button className="filter-btn" data-filter="mobile">
                  Mobile
                </button>
                <button className="filter-btn" data-filter="api">
                  APIs
                </button>
                <button className="filter-btn" data-filter="fullstack">
                  Full Stack
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
