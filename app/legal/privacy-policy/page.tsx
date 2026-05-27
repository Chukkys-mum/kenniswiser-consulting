import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';

export const metadata: Metadata = {
  title: 'Privacy Policy | Kennis Wiser Consulting',
  description:
    'How Kennis Wiser Consulting handles personal data — what we collect, why, who we share it with, and your rights under UK GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="Last updated: 26 May 2026. How we handle personal data on kenniswiserconsulting.com and through our advisory engagements."
      />

      <PageSection>
        <div className="prose prose-lg max-w-none kw-text-body space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Who is the controller
            </h2>
            <p>
              Kennis Wiser Consulting Ltd (&quot;<strong>we</strong>,&quot;
              &quot;<strong>us</strong>,&quot; &quot;<strong>our</strong>&quot;)
              is the controller for personal data collected through this site
              and through our advisory engagements. We are registered in
              England.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. What we collect and why
            </h2>
            <p>We collect three categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-3 mt-3">
              <li>
                <strong>Contact-form submissions.</strong> When you use the
                form on our contact page, we collect your name, email,
                organisation (optional), and the message you send. We use this
                to respond to your enquiry. Lawful basis: legitimate interest
                in responding to people who contact us.
              </li>
              <li>
                <strong>Calendar bookings.</strong> When you book a scoping
                call, we collect your name, email, organisation, and any notes
                you provide. We use this to schedule and run the call. Lawful
                basis: steps taken to enter into a contract at your request.
              </li>
              <li>
                <strong>KORA AI assistant interactions.</strong> If you chat
                with KORA, the conversation transcript is processed by the
                Kennis OS Kora runtime. We use this only to respond to your
                questions in the moment; transcripts are retained for service
                operation and quality review, not for advertising or profiling.
                Lawful basis: legitimate interest in providing the assistant.
              </li>
            </ul>
            <p className="mt-4">
              We also use anonymised analytics on this site once you opt in via
              the cookie consent banner — see our{' '}
              <a href="/legal/cookie-policy" className="text-accent hover:underline">
                Cookie Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Who we share data with
            </h2>
            <p>We share personal data only with service providers we engage to operate the Site:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Vercel</strong> — site hosting (United States, with EU
                data processing where available).
              </li>
              <li>
                <strong>Cloudflare</strong> — DNS, edge networking, domain
                registration.
              </li>
              <li>
                <strong>Septimius</strong> — form intake, scheduling, CRM
                (UK/EU processing).
              </li>
              <li>
                <strong>KORA / Kennis OS</strong> — AI assistant runtime, which
                may forward queries to a model provider (currently Anthropic or
                OpenAI) under strict data-processing terms.
              </li>
            </ul>
            <p className="mt-4">
              We do not sell personal data, and we do not share it with
              advertising networks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. How long we keep it
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Contact-form messages and calendar bookings: 24 months from
                last interaction, then deleted or anonymised.
              </li>
              <li>
                KORA transcripts: 90 days for quality review, then anonymised.
              </li>
              <li>
                If we enter into a client engagement with you, your contact
                data is kept for the duration of the engagement plus 6 years
                (UK statutory retention).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Your rights (UK GDPR)
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Access the personal data we hold about you;</li>
              <li>
                Ask us to correct it if it is inaccurate or incomplete;
              </li>
              <li>
                Ask us to delete it (subject to overriding legal obligations);
              </li>
              <li>Object to processing based on legitimate interest;</li>
              <li>
                Withdraw consent at any time (where consent is the lawful
                basis — e.g. analytics cookies);
              </li>
              <li>Lodge a complaint with the UK Information Commissioner&apos;s Office (ICO).</li>
            </ul>
            <p className="mt-4">
              To exercise any of these, use our{' '}
              <a href="/contact" className="text-accent hover:underline">
                contact form
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. International transfers
            </h2>
            <p>
              Some service providers (notably Vercel and AI model providers)
              process data in the United States. Where this happens, the
              transfer is covered by the EU Standard Contractual Clauses (with
              the UK addendum) and a supplementary risk assessment as required
              under the UK GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Security</h2>
            <p>
              We use TLS for all data in transit, scoped access tokens for our
              service-provider integrations, and least-privilege access
              internally. We notify affected individuals and the ICO of
              qualifying data breaches within 72 hours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Changes</h2>
            <p>
              We update this policy when our processing changes. The version
              currently in force always lives at this URL with the
              &quot;last updated&quot; date at the top.
            </p>
          </section>
        </div>
      </PageSection>
    </>
  );
}
