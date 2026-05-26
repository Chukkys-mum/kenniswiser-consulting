import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Kennis Wiser Consulting | Strategic Advisory for Growth',
  description: 'Strategic advisory for PE funds, VC funds, operating companies, and growth-stage businesses across technology, real estate, and infrastructure.',
  icons: {
    icon: '/favicon.png',
  },
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
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="bg-gradient-to-b from-primary-900 via-dark to-primary-900 text-gray-100">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
