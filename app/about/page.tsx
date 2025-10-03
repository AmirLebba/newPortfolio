import AboutHero from "@/app/about/components/AboutHero";
import SkillsSection from "@/app/about/components/SkillsSection";
import ExperienceTimeline from "@/app/about/components/ExperienceTimeline";
import Certifications from "@/app/about/components/Certifications";
import PersonalInterests from "@/app/about/components/PersonalInterests";
import AboutCta from "@/app/about/components/AboutCta";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SkillsSection />
      <ExperienceTimeline />
      <Certifications />
      <PersonalInterests />
      <AboutCta />
    </>
  );
}
