import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import KoraWidget from '@/components/KoraWidget';

export const metadata: Metadata = {
  title: 'Kennis Wiser Consulting | Strategic Advisory for Growth',
  description: 'Strategic advisory for PE funds, VC funds, operating companies, and growth-stage businesses across technology, real estate, and infrastructure.',
  openGraph: {
    title: 'Kennis Wiser Consulting',
    description: 'Strategic advisory for growth capital',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-b from-primary-900 via-dark to-primary-900 text-gray-100">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <KoraWidget
          projectKey="kora_pk_kenniswiser_consulting"
          primaryColor="#7c3aed"
          title="KORA"
          greeting="Hi! I'm KORA. Ask me about Kennis Wiser Consulting — our advisory services, sectors, or how we can help your fund or operating company."
        />
      </body>
    </html>
  );
}
