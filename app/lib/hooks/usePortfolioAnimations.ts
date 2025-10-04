"use client";
import { useEffect } from "react";
import Typed from "typed.js";
import * as echarts from "echarts";

export function usePortfolioAnimations() {
  useEffect(() => {
    /* 1.  Type-writer  */
    const el = document.getElementById("typed-text");
    if (el) {
      new Typed(el, {
        strings: [
          "Crafting digital experiences...",
          "Building modern web applications...",
          "Solving complex problems...",
          "Creating innovative solutions...",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });
    }

    /* 2.  Scroll-reveal  */
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("revealed")
        ),
      { threshold: 0.1, rootMargin: "-50px" }
    );
    document
      .querySelectorAll(".scroll-reveal")
      .forEach((el) => obs.observe(el));

    /* 3.  Skill-bars  */
    const barObs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLElement;
            const w = bar.dataset.width;
            setTimeout(() => (bar.style.width = w + "%"), 200);
          }
        }),
      { threshold: 0.5 }
    );
    document
      .querySelectorAll(".skill-progress")
      .forEach((bar) => barObs.observe(bar));

    /* 4.  Radar chart  */
    const chartEl = document.getElementById("skills-chart");
    if (chartEl) {
      const chart = echarts.init(chartEl);
      chart.setOption(radarOption);
      window.addEventListener("resize", () => chart.resize());
      return () => window.removeEventListener("resize", () => chart.resize());
    }
  }, []);
}

const radarOption: echarts.EChartsOption = {
  backgroundColor: "transparent",
  radar: {
    indicator: [
      { name: "JavaScript", max: 100 },
      { name: "React", max: 100 },
      { name: "Node.js", max: 100 },
      { name: "Python", max: 100 },
      { name: "Database", max: 100 },
      { name: "DevOps", max: 100 },
    ],
    axisName: { color: "#f8f8f2", fontSize: 12 },
    splitLine: { lineStyle: { color: "#404040" } },
    axisLine: { lineStyle: { color: "#404040" } },
  },
  series: [
    {
      type: "radar",
      data: [
        {
          value: [95, 90, 85, 80, 85, 75],
          name: "Skills",
          areaStyle: { color: "rgba(0, 212, 255, 0.2)" },
          lineStyle: { color: "#00d4ff", width: 2 },
          itemStyle: { color: "#39ff14" },
        },
      ],
    },
  ],
};
