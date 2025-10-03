"use client";
import { useEffect } from "react";
import ProjectCard from "@/app/projects/components/ProjectCard";

import ScrollReveal from "@/app/util/ScrollReveal";

const projects = [
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    desc: "Full-stack shopping platform with payment integration, inventory management, and real-time analytics dashboard.",
    img: "/project-ecommerce.jpg",
    tags: ["web", "fullstack", "react", "nodejs"],
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: "social",
    title: "Social Analytics Dashboard",
    desc: "Real-time social media analytics platform with interactive charts, data visualization, and automated reporting features.",
    img: "/project-social.jpg",
    tags: ["web", "fullstack", "vue", "python"],
    tech: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
  },
  {
    id: "task",
    title: "Task Management App",
    desc: "Collaborative project management tool with real-time updates, team collaboration features, and cross-platform compatibility.",
    img: "/project-task.jpg",
    tags: ["mobile", "fullstack", "react-native"],
    tech: ["React Native", "Firebase", "Redux", "Socket.io"],
  },
  {
    id: "weather",
    title: "Weather Application",
    desc: "Modern weather app with location-based forecasts, interactive maps, and severe weather alerts for iOS and Android.",
    img: "/project-weather.jpg",
    tags: ["mobile", "react-native", "api"],
    tech: ["React Native", "Weather API", "Maps", "Geolocation"],
  },
  {
    id: "fitness",
    title: "Fitness Tracking Dashboard",
    desc: "Health and fitness platform with workout tracking, nutrition monitoring, and personalized fitness recommendations.",
    img: "/project-fitness.jpg",
    tags: ["web", "fullstack", "react", "nodejs"],
    tech: ["React", "Node.js", "Chart.js", "MongoDB"],
  },
  {
    id: "realestate",
    title: "Real Estate Platform",
    desc: "Property listing platform with advanced search, virtual tours, and integrated mapping for buyers and sellers.",
    img: "/project-realestate.jpg",
    tags: ["web", "fullstack", "vue", "python"],
    tech: ["Vue.js", "Python", "PostgreSQL", "Google Maps"],
  },
  {
    id: "api-docs",
    title: "API Documentation Portal",
    desc: "Interactive API documentation with live testing, code generation, and comprehensive developer resources.",
    img: "https://kimi-web-img.moonshot.cn/img/blog.dreamfactory.com/650016f055276c945d3b5865e827b9fed40f9e97.png",
    tags: ["api", "nodejs", "documentation"],
    tech: ["Node.js", "Swagger", "React", "Markdown"],
  },
  {
    id: "vue-dashboard",
    title: "Vue.js Admin Dashboard",
    desc: "Comprehensive admin dashboard with data visualization, user management, and real-time analytics for business intelligence.",
    img: "https://kimi-web-img.moonshot.cn/img/img2020.cnblogs.com/9b779c010cddfc1b6199f53a095d0fcf7d9ea64b.png",
    tags: ["web", "vue", "dashboard"],
    tech: ["Vue.js", "Vuex", "ECharts", "Element UI"],
  },
  {
    id: "react-native-app",
    title: "Social Networking App",
    desc: "Cross-platform social networking application with real-time messaging, photo sharing, and location-based features.",
    img: "https://kimi-web-img.moonshot.cn/img/user-images.githubusercontent.com/e0bad072ed376896b7e94e2c52cc9fe70aa46102.png",
    tags: ["mobile", "react-native", "social"],
    tech: ["React Native", "Firebase", "Redux", "Camera"],
  },
];

export default function ProjectsGrid() {
  useEffect(() => {
    // attach filter + search handlers
    import("@/app/lib/projectFilter").then(({ initFilters }) => initFilters());
  }, []);

  return (
    <section className="pb-20 px-6">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto">
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            id="projects-grid"
          >
            {projects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
