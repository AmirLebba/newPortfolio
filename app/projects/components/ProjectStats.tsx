"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "@/app/util/ScrollReveal";

export default function ProjectStats() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView && typeof window !== "undefined" && (window as any).echarts) {
      const echarts = (window as any).echarts;

      const typesChart = echarts.init(
        document.getElementById("project-types-chart")
      );
      typesChart.setOption({
        backgroundColor: "transparent",
        tooltip: { trigger: "item" },
        series: [
          {
            type: "pie",
            radius: "70%",
            data: [
              {
                value: 8,
                name: "Web Applications",
                itemStyle: { color: "#00d4ff" },
              },
              {
                value: 4,
                name: "Mobile Apps",
                itemStyle: { color: "#39ff14" },
              },
              { value: 3, name: "APIs", itemStyle: { color: "#bd93f9" } },
              { value: 5, name: "Full Stack", itemStyle: { color: "#ff6b35" } },
            ],
            label: { color: "#f8f8f2" },
          },
        ],
      });

      const usageChart = echarts.init(
        document.getElementById("tech-usage-chart")
      );
      usageChart.setOption({
        backgroundColor: "transparent",
        tooltip: { trigger: "axis" },
        xAxis: {
          type: "category",
          data: [
            "React",
            "Vue.js",
            "Node.js",
            "Python",
            "React Native",
            "MongoDB",
          ],
          axisLabel: { color: "#f8f8f2", rotate: 45 },
          axisLine: { lineStyle: { color: "#404040" } },
        },
        yAxis: {
          type: "value",
          axisLabel: { color: "#f8f8f2" },
          axisLine: { lineStyle: { color: "#404040" } },
          splitLine: { lineStyle: { color: "#404040" } },
        },
        series: [
          {
            data: [12, 8, 10, 6, 4, 7],
            type: "bar",
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#00d4ff" },
                { offset: 1, color: "#39ff14" },
              ]),
            },
          },
        ],
      });

      window.addEventListener("resize", () => {
        typesChart.resize();
        usageChart.resize();
      });
      return () =>
        window.removeEventListener("resize", () => {
          typesChart.resize();
          usageChart.resize();
        });
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
              Project Statistics
            </h2>
            <p className="text-xl text-gray-400">
              Overview of my development work and technology usage
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="stats-chart scroll-reveal">
              <h3 className="text-xl font-bold mb-4 text-white">
                Project Types
              </h3>
              <div id="project-types-chart" className="w-full h-[300px]" />
            </div>

            <div className="stats-chart scroll-reveal">
              <h3 className="text-xl font-bold mb-4 text-white">
                Technology Usage
              </h3>
              <div id="tech-usage-chart" className="w-full h-[300px]" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
