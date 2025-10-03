"use client";
import { copyToClipboard } from "@/app/lib/contactUtils";
import ScrollReveal from "@/app/util/ScrollReveal";

export default function ContactMethods() {
  return (
    <section className="pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal>
            <div className="contact-card scroll-reveal">
              <div className="contact-icon">📧</div>
              <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
              <p className="text-gray-400 mb-4">alex.chen@example.com</p>
              <button
                onClick={() => copyToClipboard("alex.chen@example.com")}
                className="text-blue-400 hover:text-blue-300"
              >
                Copy Email
              </button>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="contact-card scroll-reveal">
              <div className="contact-icon">💬</div>
              <h3 className="text-xl font-bold mb-2 text-white">Phone</h3>
              <p className="text-gray-400 mb-4">+1 (555) 123-4567</p>
              <button
                onClick={() => copyToClipboard("+1 (555) 123-4567")}
                className="text-blue-400 hover:text-blue-300"
              >
                Copy Number
              </button>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="contact-card scroll-reveal">
              <div className="contact-icon">🕒</div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Response Time
              </h3>
              <p className="text-gray-400 mb-4">Usually within 24 hours</p>
              <p className="text-green-400">Currently Available</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
