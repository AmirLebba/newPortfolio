import HeroSection from "@/app/components/HeroSection";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import SkillsSection from "@/app/components/SkillsSection";
import CtaSection from "@/app/components/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />

      <CtaSection />
    </>
  );
}
