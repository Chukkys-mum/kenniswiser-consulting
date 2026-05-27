import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageSection from '@/components/PageSection';
import { getInsightBySlug } from '@/lib/insights';

const SLUG = 'vertical-ai-not-horizontal';
const post = getInsightBySlug(SLUG)!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
};

export default function VerticalAIPost() {
  return (
    <>
      <PageHero label="Insights" title={post.title} subtitle={post.description} />

      <PageSection>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8 text-xs uppercase tracking-widest text-gray-500">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>

          <article className="prose prose-lg max-w-none kw-text-body space-y-6 text-lg leading-relaxed">
            <p>
              Two years into the generative-AI investment cycle, the returns
              picture is starting to sharpen. The horizontal foundation-model
              arms race has been brutal on capital and gentle on returns; the
              picks-and-shovels infrastructure layer has produced respectable
              outcomes for the survivors; and a quieter, faster-compounding
              category has emerged in the middle:{' '}
              <strong className="text-white">vertical AI</strong>.
            </p>

            <p>
              By vertical AI we mean: software that owns a specific industry
              workflow (clinical letters, legal contracts, freight invoices,
              underwriting memos) and uses AI to compress the cost of doing it.
              These businesses look unremarkable on first read — modest TAMs,
              boring categories, line-item budgets. But they have the four
              characteristics that compound:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-white">Defensible distribution.</strong>{' '}
                They sit inside a workflow with high switching cost and aren&apos;t
                competing with a horizontal model for attention.
              </li>
              <li>
                <strong className="text-white">Proprietary data flywheel.</strong>{' '}
                Every customer interaction produces labelled training data the
                model improves on — a durable moat that horizontal players can&apos;t
                replicate without buying the workflow.
              </li>
              <li>
                <strong className="text-white">Sticky workflows.</strong> The
                customer doesn&apos;t evaluate the AI model; they evaluate the
                completed work product. That changes the diligence question
                entirely.
              </li>
              <li>
                <strong className="text-white">Predictable unit economics.</strong>{' '}
                Most vertical AI businesses have ARR multiples and gross margins
                that look like vertical SaaS — because they essentially are.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The diligence framework we use
            </h2>

            <p>
              When we underwrite a vertical AI business for a client, the
              framework starts with one question: <em>what does the workflow
              look like if the AI disappears tomorrow?</em> If the business is
              still operating — selling the workflow, the data, the integration
              layer, the customer relationship — then the AI is a margin
              expander, not the product. That&apos;s the position you want to be
              in.
            </p>

            <p>
              If the business collapses without the AI — if the only value
              proposition is the model — then we are diligencing a horizontal
              model with extra steps. Those businesses are sometimes good
              investments, but they need a different framework, different
              comparables, and a different IC posture.
            </p>

            <p>
              From there, the second-look questions are about <strong className="text-white">
              data moat depth</strong>, <strong className="text-white">workflow
              switching cost</strong>, and <strong className="text-white">regulatory
              durability</strong>. The third is about commoditisation: which
              layer of the stack — the model, the orchestration layer, the
              workflow application — will be commoditised next, and is the
              business positioned to capture the margin that flows away?
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What we look for in primary research
            </h2>

            <p>
              In customer interviews we ask three things. <em>Would you switch
              to a free alternative if one launched tomorrow?</em> The honest
              answer is the moat. <em>What would have to be true for you to
              cancel?</em> That&apos;s the kill-criterion. <em>What does the
              alternative buying journey look like — internal build, horizontal
              vendor, status quo?</em> That&apos;s the competitive set as the
              customer sees it, which is usually not the comparable set the
              seller&apos;s deck shows.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The mid-market opportunity
            </h2>

            <p>
              The underappreciated thesis for the next decade of mid-market
              software returns: take a $50M ARR vertical SaaS company with 60%
              gross margins and AI-native its operations down to 80%. The
              multiple rerating on that EBITDA shift is enormous, and the
              integration risk is manageable because the workflow already exists.
            </p>

            <p>
              That&apos;s the work we&apos;re doing for several mid-market PE
              funds right now — and it&apos;s the cleanest application of the
              vertical AI investment thesis we&apos;ve seen.
            </p>
          </article>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500 mb-4">
              Want our take on a specific sector or deal?
            </p>
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
