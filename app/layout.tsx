import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import KoraWidget from '@/components/KoraWidget';
import CookieConsent from '@/components/CookieConsent';
import PlausibleAnalytics from '@/components/PlausibleAnalytics';

const SITE_URL = 'https://kenniswiserconsulting.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Kennis Wiser Consulting',
    default: 'Kennis Wiser Consulting | Strategic Advisory for Growth',
  },
  description:
    'Strategic advisory for PE funds, VC funds, operating companies, and growth-stage businesses across technology, real estate, and infrastructure.',
  alternates: { canonical: '/' },
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
    siteName: 'Kennis Wiser Consulting',
    title: 'Kennis Wiser Consulting',
    description:
      'Strategic counsel for growth capital — PE / VC funds and operating companies.',
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/api/og`,
        width: 1200,
        height: 630,
        alt: 'Kennis Wiser Consulting — Strategy Over Noise.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kennis Wiser Consulting',
    description: 'Strategic counsel for growth capital.',
    images: [`${SITE_URL}/api/og`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        {/* Resolve theme + language pre-paint to avoid FOUC / FORC.
            theme choice: 'dark' | 'light' | 'system'  → resolves to data-theme dark|light
            lang choice:  'en' | 'ar' | 'he'           → applies lang + dir attrs */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var c=localStorage.getItem('kw-theme')||'dark';var r=c==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):c;document.documentElement.setAttribute('data-theme',r);document.documentElement.setAttribute('data-theme-choice',c);var l=localStorage.getItem('kw-lang')||'en';var d=(l==='ar'||l==='he')?'rtl':'ltr';document.documentElement.setAttribute('lang',l);document.documentElement.setAttribute('dir',d);document.documentElement.setAttribute('data-lang',l);}catch(e){document.documentElement.setAttribute('data-theme','dark');document.documentElement.setAttribute('data-theme-choice','dark');document.documentElement.setAttribute('lang','en');document.documentElement.setAttribute('dir','ltr');}})()`,
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
        <PlausibleAnalytics />
      </body>
    </html>
  );
}
