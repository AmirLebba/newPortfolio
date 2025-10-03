import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'Amir Lebba Portfolio', template: '%s – Amir Lebba' },
  description: 'Amir Lebba Portfolio skill showcase and projects overview, and god help him find a job in this times of AI and automation.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen bg-deep-charcoal text-warm-white font-geist-sans tracking-tight">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}