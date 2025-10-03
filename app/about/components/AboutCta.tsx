import Link from "next/link";
import ScrollReveal from "@/app/util/ScrollReveal";

export default function AboutCta() {
  return (
    <section className="py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto scroll-reveal">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            I&apos;m always interested in new opportunities and challenging
            projects. Whether you&apos;re looking for a developer or just want
            to chat about technology, I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View My Work
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
