import ContactHero from '@/app/contact/components/ContactHero';
import ContactMethods from '@/app/contact/components/ContactMethods';
import ContactForm from '@/app/contact/components/ContactForm';
import CalendarWidget from '@/app/contact/components/CalendarWidget';
import SocialSection from '@/app/contact/components/SocialSection';
import './globals.css';
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <CalendarWidget />
        </div>
      </section>
      <SocialSection />
    </>
  );
}