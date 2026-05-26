'use client';

import { useState } from 'react';
import { submitForm, SeptimiusError } from '@/lib/septimius/client';

/**
 * Contact form wired into Septimius Forms intake.
 * Submissions land in the CRM via the form-workflow service.
 *
 * The previous version used a plain `<form action="https://...">` POST,
 * which gave no client-side feedback and let the browser navigate away
 * to the JSON response. This version uses fetch() so we can show a
 * proper confirmation in place.
 */
export default function SeptimiusContactForm() {
  const [state, setState] = useState<'idle' | 'submitting' | 'sent' | 'error'>(
    'idle'
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    setErrorMsg(null);
    const fd = new FormData(e.currentTarget);
    try {
      await submitForm({
        formKey: 'kwc-contact',
        data: {
          name: String(fd.get('name') ?? ''),
          email: String(fd.get('email') ?? ''),
          organisation: String(fd.get('organisation') ?? ''),
          message: String(fd.get('message') ?? ''),
        },
        meta: { source: 'kenniswiserconsulting.com/contact' },
      });
      setState('sent');
    } catch (err) {
      setState('error');
      setErrorMsg(
        err instanceof SeptimiusError
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    }
  }

  if (state === 'sent') {
    return (
      <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-primary-700/20 to-accent/10 p-8 md:p-10">
        <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message received</h3>
        <p className="text-gray-300 leading-relaxed">
          Thanks — we read every message and reply within 2 business days.
          You&apos;ll hear back from us soon.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
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
          autoComplete="name"
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
          autoComplete="email"
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
          autoComplete="organization"
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

      {errorMsg && state === 'error' && (
        <p className="text-sm text-red-400 bg-red-400/[0.05] border border-red-400/20 rounded-lg p-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="btn-primary w-full justify-center disabled:opacity-50"
      >
        {state === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
      <p className="text-xs text-gray-500">
        Submissions land in our Septimius CRM via the Forms intake. We reply
        within 2 business days. We do not share your details with third parties.
      </p>
    </form>
  );
}
