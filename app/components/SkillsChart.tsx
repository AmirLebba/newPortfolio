// components/SkillsChart.tsx
"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface SkillsChartProps {
  type?: "radar" | "bar";
  data?: any;
}

const SkillsChart: React.FC<SkillsChartProps> = ({ type = "radar", data }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    chartInstance.current = echarts.init(chartRef.current);

    const option = type === "radar" ? getRadarOption(data) : getBarOption(data);

    chartInstance.current.setOption(option);

    const handleResize = () => {
      chartInstance.current?.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.current?.dispose();
    };
  }, [type, data]);

  const getRadarOption = (customData?: any) => {
    const defaultData = {
      indicator: [
        { name: "Frontend", max: 100 },
        { name: "Backend", max: 100 },
        { name: "Database", max: 100 },
        { name: "DevOps", max: 100 },
        { name: "Mobile", max: 100 },
        { name: "Cloud", max: 100 },
      ],
      values: [95, 90, 85, 80, 75, 85],
    };

    const chartData = customData || defaultData;

    return {
      backgroundColor: "transparent",
      radar: {
        indicator: chartData.indicator,
        axisName: {
          color: "#f8f8f2",
          fontSize: 14,
          fontWeight: "bold",
        },
        splitLine: {
          lineStyle: {
            color: "#404040",
          },
        },
        axisLine: {
          lineStyle: {
            color: "#404040",
          },
        },
        splitArea: {
          show: false,
        },
      },
      series: [
        {
          type: "radar",
          data: [
            {
              value: chartData.values,
              name: "Skills",
              areaStyle: {
                color: "rgba(0, 212, 255, 0.3)",
              },
              lineStyle: {
                color: "#00d4ff",
                width: 3,
              },
              itemStyle: {
                color: "#39ff14",
                borderColor: "#00d4ff",
                borderWidth: 2,
              },
            },
          ],
        },
      ],
    };
  };

  const getBarOption = (customData?: any) => {
    const defaultData = {
      categories: [
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "Database",
        "DevOps",
      ],
      values: [95, 90, 85, 80, 85, 75],
    };

    const chartData = customData || defaultData;

    return {
      backgroundColor: "transparent",
      xAxis: {
        type: "category",
        data: chartData.categories,
        axisLabel: {
          color: "#f8f8f2",
          rotate: 45,
        },
        axisLine: {
          lineStyle: { color: "#404040" },
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "#f8f8f2",
        },
        axisLine: {
          lineStyle: { color: "#404040" },
        },
        splitLine: {
          lineStyle: { color: "#404040" },
        },
      },
      series: [
        {
          data: chartData.values,
          type: "bar",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#00d4ff" },
              { offset: 1, color: "#39ff14" },
            ]),
          },
        },
      ],
    };
  };

  return <div ref={chartRef} className="w-full h-full"></div>;
};

export default SkillsChart;
