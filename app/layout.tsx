import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import KoraWidget from '@/components/KoraWidget';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  title: 'Kennis Wiser Consulting | Strategic Advisory for Growth',
  description: 'Strategic advisory for PE funds, VC funds, operating companies, and growth-stage businesses across technology, real estate, and infrastructure.',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <link rel="icon" href="/favicon-64x64.png" sizes="64x64" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        {/* Resolve theme before paint to avoid FOUC.
            Choice = 'dark' | 'light' | 'system' (stored). Resolved data-theme is
            always 'dark' or 'light'. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var c=localStorage.getItem('kw-theme')||'dark';var r=c==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):c;document.documentElement.setAttribute('data-theme',r);document.documentElement.setAttribute('data-theme-choice',c);}catch(e){document.documentElement.setAttribute('data-theme','dark');document.documentElement.setAttribute('data-theme-choice','dark');}})()`,
          }}
        />
      </head>
      <body className="text-gray-100">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <KoraWidget
          projectKey={
            process.env.NEXT_PUBLIC_KORA_PROJECT_KEY ??
            'kora_pk_kenniswiser_consulting'
          }
          primaryColor="#7c3aed"
          title="KORA"
          greeting="Hi! I'm KORA. Ask me about Kennis Wiser Consulting — our advisory services, sectors, or how we can help your fund or operating company."
        />
        <CookieConsent />
      </body>
    </html>
  );
}
