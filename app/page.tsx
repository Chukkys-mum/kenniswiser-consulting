'use client';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Sectors from '@/components/Sectors';
import Expertise from '@/components/Expertise';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Sectors />
      <Expertise />
      <CTA />
    </>
  );
}
