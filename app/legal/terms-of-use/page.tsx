import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';

export const metadata: Metadata = {
  title: 'Terms of Use | Kennis Wiser Consulting',
  description:
    'Terms governing your use of kenniswiserconsulting.com and any related services we make available through the site.',
};

export default function TermsOfUsePage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Use"
        subtitle="Last updated: 26 May 2026. These terms govern your use of kenniswiserconsulting.com and any related services we make available through this site."
      />

      <PageSection>
        <div className="prose prose-lg max-w-none kw-text-body space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. About these terms</h2>
            <p>
              Kennis Wiser Consulting Ltd (&quot;<strong>we</strong>,&quot;
              &quot;<strong>us</strong>,&quot; &quot;<strong>our</strong>&quot;)
              operates the website at <code>kenniswiserconsulting.com</code> (the
              &quot;<strong>Site</strong>&quot;). By accessing or using the Site
              you agree to these Terms of Use. If you do not agree, please do
              not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Who we are</h2>
            <p>
              Kennis Wiser Consulting Ltd is a private limited company that
              provides strategic advisory services to private equity funds,
              venture capital funds, and operating companies. The Site is
              maintained as a marketing and information resource. Engagement
              terms are set out in a separate engagement letter agreed with
              each client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Information on the Site
            </h2>
            <p>
              Content on the Site is provided for general information only. It
              does not constitute legal, financial, tax, investment, or
              regulated advice and should not be relied on as such. Any
              decision to engage us is made under a separate, signed engagement
              letter. Nothing on the Site is an offer to provide investment
              services or to deal in securities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Acceptable use
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Use the Site in any way that is unlawful, fraudulent, or
                infringes the rights of others;
              </li>
              <li>
                Attempt to gain unauthorised access to any part of the Site,
                its servers, or any related systems;
              </li>
              <li>
                Use automated means (scraping, crawling, etc.) to extract
                content from the Site without our prior written consent;
              </li>
              <li>
                Transmit malware, viruses, or any code intended to disrupt the
                Site;
              </li>
              <li>
                Submit material via any contact form or KORA assistant that is
                confidential to a third party without their authority.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Intellectual property
            </h2>
            <p>
              All content on the Site — including text, graphics, logos, the
              KORA brand mark, and software — is owned by Kennis Wiser
              Consulting Ltd or licensed to us, and is protected by UK and
              international copyright and trade-mark law. You may view, share,
              and quote short excerpts with attribution, but no part of the
              Site may be republished, redistributed, or used for commercial
              purposes without our written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Third-party services
            </h2>
            <p>
              The Site uses third-party services for hosting (Vercel), domain
              and DNS (Cloudflare), form intake and scheduling (Septimius), and
              an AI assistant (KORA). Each operates under its own terms and
              privacy policy. We require these providers to handle data in line
              with our own privacy commitments — see our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by law, we exclude liability for
              loss or damage arising from your use of, or inability to use, the
              Site, including indirect or consequential loss, loss of profit,
              business interruption, or loss of data. Nothing in these terms
              excludes liability that cannot lawfully be excluded under English
              law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Governing law
            </h2>
            <p>
              These Terms of Use are governed by the laws of England and Wales.
              Any dispute is subject to the exclusive jurisdiction of the
              English courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes</h2>
            <p>
              We may update these Terms of Use from time to time. The current
              version always lives at this URL with the &quot;last updated&quot;
              date at the top. Material changes are reflected in the date and,
              where appropriate, called out via a banner on the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact</h2>
            <p>
              Questions about these terms can be sent via the form on our{' '}
              <a href="/contact" className="text-accent hover:underline">
                contact page
              </a>
              .
            </p>
          </section>
        </div>
      </PageSection>
    </>
  );
}
