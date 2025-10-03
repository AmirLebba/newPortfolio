// components/ScrollReveal.tsx
"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  animation = "fade-up",
  delay = 0,
}) => {
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-600 ease-out";

    if (!inView) {
      switch (animation) {
        case "fade-left":
          return `${baseClasses} opacity-0 -translate-x-8`;
        case "fade-right":
          return `${baseClasses} opacity-0 translate-x-8`;
        case "scale":
          return `${baseClasses} opacity-0 scale-95`;
        case "fade-up":
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }

    return `${baseClasses} opacity-100 translate-x-0 translate-y-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
