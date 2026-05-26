import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';
import SeptimiusContactForm from '@/components/SeptimiusContactForm';
import SeptimiusCalendar from '@/components/SeptimiusCalendar';

export const metadata: Metadata = {
  title: 'Contact | Kennis Wiser Consulting',
  description:
    'Get in touch with Kennis Wiser Consulting. Schedule a conversation, request a scoping call, or send your story directly.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Let's Talk"
        subtitle="Whether you're sizing up an acquisition, restructuring a fund mandate, or translating boardroom strategy into measurable execution — start the conversation here."
      />

      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Engagement-paths panel */}
          <div>
            <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
              Three ways to start
            </p>
            <h2 className="text-3xl font-bold text-white mb-8">
              Which best describes you?
            </h2>
            <div className="space-y-6">
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-accent/30 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">
                  PE / VC investor
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Sizing a deal, refreshing a fund mandate, or running a portfolio
                  diagnostic. We work with the GP and the operating partners.
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-accent/30 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Operating company
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Growth-stage business considering a raise, M&A, or operational scaling.
                  We work with the CEO, the board, and the senior team.
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-accent/30 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Joining the team
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Senior operator, sector specialist, or analyst-track candidate. See
                  the careers page first, then send your story here.
                </p>
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div>
            <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
              Get in touch
            </p>
            <h2 className="text-3xl font-bold text-white mb-8">
              Send a message
            </h2>
            <SeptimiusContactForm />
          </div>
        </div>
      </PageSection>

      <PageSection variant="darker">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
              Prefer a call?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book a 30-minute scoping call
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              For partners and senior executives. No commitment — we will tell
              you honestly if we are the right firm for the problem you are
              solving.
            </p>
          </div>
          <SeptimiusCalendar
            intent="kwc-scoping"
            heading="Available slots"
            description="Times shown in your local timezone. Pick one, leave your details, get an instant confirmation."
            windowDays={14}
          />
        </div>
      </PageSection>
    </>
  );
}
