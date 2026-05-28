import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';

export const metadata: Metadata = {
  title: 'Who We Are',
  description:
    'Kennis Wiser Consulting is an enterprise transformation, agile-delivery, and data/AI consultancy — and the team that built the Kennis and Septimius group from the ground up.',
};

const principles = [
  {
    name: 'We build, then we advise',
    description:
      'Most consultancies have never run the thing they advise on. We have. We structured a Jersey fund platform, stood up a UK operating company, and architected an AI-native technology ecosystem of our own. When we advise, it is from the operator’s chair, not the seminar room.',
  },
  {
    name: 'Transformation that ships',
    description:
      'Agile is a means, not a deliverable. Our background is enterprise transformation at the largest organisations — but the measure of the work is working software, a faster operating cadence, and a team that keeps moving after we leave.',
  },
  {
    name: 'Data and AI as a first principle',
    description:
      'We do not bolt AI on at the end. The platforms we build are AI-native from the schema up. We bring that same discipline to client work: data foundations first, then machine learning, then the agent layer on top.',
  },
  {
    name: 'Conviction over consensus',
    description:
      'We tell clients what they need to hear, including when an initiative should be killed. Our recommendations are designed to survive a sceptical board, not to flatter the room that commissioned them.',
  },
  {
    name: 'Outcomes, not time sheets',
    description:
      'We price on the outcome and end the engagement when the outcome lands — not when the retainer expires. We do not engineer dependency.',
  },
];

const whoWeServe = [
  {
    name: 'Enterprises & corporates',
    description:
      'Large organisations navigating digital, agile, and AI transformation. Our founder has led enterprise transformation at BP, Vodafone, ING, and BNP Paribas.',
  },
  {
    name: 'Funds & their portfolios',
    description:
      'PE and VC funds that need a portfolio company transformed, a platform built, or an operating model fixed — delivered by people who have built a fund themselves.',
  },
  {
    name: 'Founders & ventures',
    description:
      'Start-ups and scale-ups building their first real platform, data foundation, or operating cadence. We have been founders too.',
  },
];

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        label="About"
        title="Who We Are"
        subtitle="An enterprise transformation, agile-delivery, and data / AI consultancy — and the team that built the Kennis and Septimius group from the ground up."
      />

      <PageSection>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Our origin
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          We built our own group. That is the proof.
        </h2>
        <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
          <p>
            Kennis Wiser Consulting is the advisory practice at the centre of
            the Kennis and Septimius group. We are not a firm that writes about
            transformation — we are the firm that executed one on itself.
          </p>
          <p>
            We structured the fund platform — a Jersey-domiciled GP and its
            debut real-asset income fund. We stood up the operating company that
            delivers the underlying assets. And we architected the technology
            that runs all of it: the Septimius ecosystem, a multi-vertical
            platform on Kennis OS spanning 24 modules and 600+ services, with an
            AI assistant layer and an event-driven automation backbone built in
            from day one.
          </p>
          <p>
            That experience — fund to operating company to AI-native platform —
            is what we bring to clients. We have sat in every seat: the founder,
            the operator, the allocator, the engineer, the board.
          </p>
        </div>
      </PageSection>

      <PageSection variant="darker">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Our founder
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Dean Bryan
        </h2>
        <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
          <p>
            Dean is an Enterprise Digital Transformation Advisor and Lean-Agile
            Coach. He has served as Lead Enterprise Agile Executive Coach at
            <strong className="text-white"> BP</strong>, and held similar roles
            at <strong className="text-white">Vodafone</strong>,{' '}
            <strong className="text-white">ING</strong>, and{' '}
            <strong className="text-white">BNP Paribas</strong> — leading
            transformation at the scale where it is hardest to make stick.
          </p>
          <p>
            He is the founder and CEO of{' '}
            <strong className="text-white">Comurce</strong>, a business-
            intelligence platform that visualises the weaknesses in an operating
            model and uses data to find the optimal remedy — so that strategic
            objectives are realised efficiently, not just declared.
          </p>
          <p>
            Dean also serves as a Strategic Board Advisor to{' '}
            <strong className="text-white">The Brandon Trust</strong>, a charity
            enabling children, young people, and adults with learning
            disabilities and autism to live life on their own terms. He is
            passionate about start-ups and transformation across start-ups,
            not-for-profits, the public sector, and multinationals alike.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          How we think
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Operating principles
        </h2>
        <div className="space-y-8">
          {principles.map((p) => (
            <div key={p.name} className="border-l-2 border-accent pl-6">
              <h3 className="text-xl font-semibold text-white mb-2">{p.name}</h3>
              <p className="text-gray-400 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection variant="darker">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
          Who we work with
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Where we engage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whoWeServe.map((w) => (
            <div
              key={w.name}
              className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-accent/30 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{w.name}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{w.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
            Strategy Over Noise.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s talk
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Whether you&apos;re transforming an enterprise, building a platform,
            or standing up a venture — we&apos;ve done it, and we can help you do
            it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="/contact" className="btn-primary">
              Schedule a Conversation
            </a>
            <a href="/about/our-approach" className="btn-secondary">
              How We Work
            </a>
          </div>
        </div>
      </PageSection>
    </>
  );
}
