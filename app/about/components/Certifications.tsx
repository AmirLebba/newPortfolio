import ScrollReveal from "@/app/util/ScrollReveal";
export default function Certifications() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="text-xl text-gray-400">
              Continuous learning and professional development
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              abbr: "AWS",
              title: "AWS Certified Developer",
              org: "Amazon Web Services",
            },
            {
              abbr: "GCP",
              title: "Google Cloud Professional",
              org: "Google Cloud Platform",
            },
            {
              abbr: "CKA",
              title: "Certified Kubernetes",
              org: "Cloud Native Computing",
            },
            {
              abbr: "PSM",
              title: "Professional Scrum Master",
              org: "Scrum.org",
            },
          ].map((c) => (
            <div key={c.abbr} className="text-center scroll-reveal">
              <ScrollReveal>
                <div className="certification-badge mx-auto mb-4">{c.abbr}</div>
                <h3 className="font-bold text-white mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm">{c.org}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
