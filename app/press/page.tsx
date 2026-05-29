import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PageSection from "../../components/PageSection";

export const metadata: Metadata = {
  title: "Press Centre | Kennis Wiser Consulting",
  description:
    "Approved Kennis Wiser Consulting press information, company boilerplate, facts, and media enquiry routes.",
};

const facts = [
  ["Public surface", "kenniswiserconsulting.com/press"],
  ["Category", "Digital transformation, AI, operating model and venture building"],
  ["Primary audience", "Business, technology, transformation and partnership media"],
  ["KORA posture", "Public consulting and service context only"],
];

const materials = [
  ["Company fact sheet", "Email gated"],
  ["Service overview", "Email gated"],
  ["Leadership background", "Email gated"],
  ["Brand assets", "Email gated"],
];

export default function PressPage() {
  return (
    <>
      <PageHero
        label="Press Centre"
        title="Kennis Wiser Consulting Press Centre"
        subtitle="Approved company profile, service facts, media material, and enquiry routing for Kennis Wiser Consulting."
      />

      <PageSection>
        <div className="grid gap-12">
          <section className="max-w-3xl">
            <p className="text-lg leading-8 kw-text-body">
              Kennis Wiser Consulting helps organisations design operating models,
              build digital platforms, use data and AI responsibly, and turn
              transformation work into practical delivery.
            </p>
          </section>

          <section className="grid gap-5">
            <h2 className="text-2xl font-bold kw-text-heading">Approved Boilerplate</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-black/10 p-6">
                <h3 className="text-lg font-bold kw-text-heading">Short boilerplate</h3>
                <p className="mt-3 text-sm leading-7 kw-text-body">
                  Kennis Wiser Consulting is a digital transformation and venture-building
                  consultancy focused on operating model design, AI-enabled delivery,
                  data platforms, and leadership support.
                </p>
              </article>
              <article className="rounded-2xl border border-black/10 p-6">
                <h3 className="text-lg font-bold kw-text-heading">Service summary</h3>
                <p className="mt-3 text-sm leading-7 kw-text-body">
                  The firm works across strategy, platform architecture, AI adoption,
                  transformation delivery, data products, and practical leadership
                  coaching for teams moving from plans to execution.
                </p>
              </article>
            </div>
          </section>

          <section className="grid gap-5">
            <h2 className="text-2xl font-bold kw-text-heading">Facts</h2>
            <dl className="grid gap-3 rounded-2xl border border-black/10 p-6 md:grid-cols-2">
              {facts.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-bold uppercase tracking-widest kw-text-muted">{label}</dt>
                  <dd className="mt-1 text-sm font-medium kw-text-heading">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="grid gap-5">
            <h2 className="text-2xl font-bold kw-text-heading">Press Pack</h2>
            <div className="grid gap-3">
              {materials.map(([title, access]) => (
                <div key={title} className="flex flex-col gap-3 rounded-2xl border border-black/10 p-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-bold kw-text-heading">{title}</h3>
                    <p className="mt-1 text-sm kw-text-muted">{access}</p>
                  </div>
                  <a
                    href="mailto:press@kenniswiserconsulting.com"
                    className="inline-flex rounded-lg bg-primary-700 px-4 py-2 text-sm font-semibold text-white"
                  >
                    Request access
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section id="media-enquiries" className="rounded-2xl border border-black/10 p-6">
            <h2 className="text-xl font-bold kw-text-heading">Media Enquiries</h2>
            <p className="mt-2 text-sm leading-6 kw-text-body">
              For briefings, interviews, service facts, and approved company material.
            </p>
            <a
              href="mailto:press@kenniswiserconsulting.com"
              className="mt-5 inline-flex rounded-lg bg-primary-700 px-4 py-2 text-sm font-semibold text-white"
            >
              press@kenniswiserconsulting.com
            </a>
          </section>
        </div>
      </PageSection>
    </>
  );
}
