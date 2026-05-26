import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';

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
            <form
              className="space-y-5"
              action="https://api.septimius.app/v1/forms/kwc-contact"
              method="post"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                  placeholder="jane@fund.com"
                />
              </div>
              <div>
                <label
                  htmlFor="organisation"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Organisation
                </label>
                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Acme Capital Partners"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors resize-y"
                  placeholder="A few sentences on what you're looking at and what success would look like."
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send message
              </button>
              <p className="text-xs text-gray-500">
                Submissions land in our Septimius CRM. We read every message and reply
                within 2 business days. We do not share your details with third parties.
              </p>
            </form>
          </div>
        </div>
      </PageSection>

      <PageSection variant="darker">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
            Prefer a call?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Book a 30-minute scoping call
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            For partners and senior executives. No commitment — we will tell you
            honestly if we are the right firm for the problem you are solving.
          </p>
          {/*
            TODO(septimius-calendar): wire this up to the Septimius Calendar
            availability widget (replaces the old Calendly-style flow). The
            target API is `septimius/calendar/v1/slots` with `intent=kwc-scoping`.
            Until then, this CTA links to the contact form above.
          */}
          <a href="#" className="btn-primary inline-flex">
            Schedule a call — coming soon
          </a>
          <p className="text-xs text-gray-500 mt-4">
            Scheduling will go live alongside our Septimius Calendar rollout. In the
            meantime, please use the form above.
          </p>
        </div>
      </PageSection>
    </>
  );
}
