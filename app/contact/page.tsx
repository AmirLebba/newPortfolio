import ContactHero from "@/app/contact/components/ContactHero";
import ContactMethods from "@/app/contact/components/ContactMethods";
import ContactForm from "@/app/contact/components/ContactForm";
import CalendarWidget from "@/app/contact/components/CalendarWidget";
import SocialSection from "@/app/contact/components/SocialSection";

export default function ContactPage() {
  return (
    <main
      style={{
        backgroundImage:
          " radial-gradient(circle at 20% 50%, #00d5ff41 0%, transparent 50%), radial-gradient(circle at 20% 50%, #00d5ff49 0%, transparent 50%), radial-gradient(circle at 80% 20%, #37ff144f 0%, transparent 50%), radial-gradient(circle at 40% 80%, #bd93f954 0%, transparent 50%) ",
      }}
      className="min-h-screen bg-gradient-to-br from-deep-charcoal via-gray-900 to-black text-gray-200"
    >
      <ContactHero />
      <ContactMethods />
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <CalendarWidget />
        </div>
      </section>
      <SocialSection />
    </main>
  );
}
