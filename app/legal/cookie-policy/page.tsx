import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';
import CookiePreferencesButton from '@/components/CookiePreferencesButton';

export const metadata: Metadata = {
  title: 'Cookie Policy | Kennis Wiser Consulting',
  description:
    'Which cookies kenniswiserconsulting.com sets, why, and how to manage your consent.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Cookie Policy"
        subtitle="Last updated: 26 May 2026. Which cookies kenniswiserconsulting.com sets and why."
      />

      <PageSection>
        <div className="prose prose-lg max-w-none kw-text-body space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. What we set
            </h2>
            <ul className="list-disc pl-6 space-y-3 mt-3">
              <li>
                <strong>Strictly necessary</strong> — a single
                <code> kw-cookie-consent </code>
                preference stored in your browser&apos;s localStorage to
                remember the choices you made on the consent banner. Also the{' '}
                <code>kw-theme</code> preference to remember your light / dark
                / system selection. No opt-out — the site won&apos;t function
                without these.
              </li>
              <li>
                <strong>Analytics</strong> — aggregated, anonymised page-view
                data. Set only after you opt in via the consent banner.
                Retention: 90 days.
              </li>
              <li>
                <strong>KORA session</strong> — when you open the KORA
                assistant, a session identifier is stored to maintain the
                conversation across page loads. Cleared on browser close.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. What we don&apos;t set
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>No third-party advertising cookies.</li>
              <li>No cross-site tracking pixels.</li>
              <li>No social-media embed cookies (we link out instead of embedding).</li>
              <li>No A/B-testing or personalisation cookies on the marketing site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Managing your preferences
            </h2>
            <p>
              The cookie banner appears on your first visit. You can choose
              &quot;Accept all,&quot; &quot;Reject optional,&quot; or
              &quot;Manage preferences&quot; to fine-tune. Your choice is
              remembered until you clear your browser storage or use the
              button below to reopen the dialog.
            </p>
            <div className="mt-6">
              <CookiePreferencesButton />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Third-party services
            </h2>
            <p>
              When you book a call via Septimius Calendar or chat with KORA,
              those services set their own session cookies necessary for the
              feature to work. They do not track you across other sites.
              Vercel (our host) and Cloudflare (our edge network) set
              short-lived operational cookies in some cases — these are
              covered as &quot;strictly necessary&quot; under UK and EU law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Browser controls
            </h2>
            <p>
              You can also block or clear cookies directly in your browser
              settings. Doing so may break parts of the Site (e.g. the
              consent banner will reappear on every visit).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. More information
            </h2>
            <p>
              For more on what personal data we collect and how we use it, see
              our{' '}
              <a href="/legal/privacy-policy" className="text-accent hover:underline">
                Privacy Policy
              </a>
              . For terms governing your use of the Site, see our{' '}
              <a href="/legal/terms-of-use" className="text-accent hover:underline">
                Terms of Use
              </a>
              .
            </p>
          </section>
        </div>
      </PageSection>
    </>
  );
}
