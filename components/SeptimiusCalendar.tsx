'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  getAvailability,
  createBooking,
  SeptimiusError,
  type AvailabilitySlot,
} from '@/lib/septimius/client';

interface SeptimiusCalendarProps {
  /** Calendar intent (matches the Septimius backend mapping rule). */
  intent: string;
  /** Heading shown at the top of the widget. */
  heading?: string;
  /** Helper line under the heading. */
  description?: string;
  /** How many days forward to load availability for. */
  windowDays?: number;
}

function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function formatSlot(start: string): string {
  const d = new Date(start);
  return d.toLocaleString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

/**
 * Septimius Calendar booking widget. Replaces the Calendly placeholder.
 *
 * UX:
 *   1. On mount, fetches `GET /api/v1/calendar/availability` for the
 *      next `windowDays` (default 14).
 *   2. Shows available slots as a chip grid.
 *   3. Clicking a slot opens an inline name/email form.
 *   4. Submit calls `POST /api/v1/calendar/bookings`. On success, shows
 *      a confirmation message with the meeting URL (if any).
 *
 * The widget is purely client-side — no server-side rendering needed for
 * the dynamic state.
 */
export default function SeptimiusCalendar({
  intent,
  heading = 'Book a scoping call',
  description = "Pick a 30-minute slot — we'll confirm by email.",
  windowDays = 14,
}: SeptimiusCalendarProps) {
  const [slots, setSlots] = useState<AvailabilitySlot[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<AvailabilitySlot | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<{
    bookingId: string;
    meetingUrl?: string;
  } | null>(null);

  const tz =
    typeof window !== 'undefined'
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : 'Europe/London';

  // Load availability
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    const today = new Date();
    const end = new Date(today);
    end.setDate(end.getDate() + windowDays);
    getAvailability({
      intent,
      from: formatDate(today),
      to: formatDate(end),
      timezone: tz,
    })
      .then((s) => {
        if (cancelled) return;
        setSlots(s.filter((slot) => slot.available));
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        // Soft-fail: the Septimius Calendar backend may not be deployed
        // yet for this intent. Surface a friendly fallback rather than a
        // raw error.
        const msg =
          e instanceof SeptimiusError && e.status === 404
            ? 'Booking is not yet enabled for this site. Use the form above and we will reach out within 1 business day.'
            : 'We could not load availability right now. Please use the form above.';
        setError(msg);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [intent, windowDays, tz]);

  const submitBooking = useCallback(
    async (form: FormData) => {
      if (!selected) return;
      setSubmitting(true);
      setError(null);
      try {
        const result = await createBooking({
          intent,
          slot: { start: selected.start, end: selected.end },
          attendee: {
            name: String(form.get('name') ?? ''),
            email: String(form.get('email') ?? ''),
            organisation: String(form.get('organisation') ?? '') || undefined,
            notes: String(form.get('notes') ?? '') || undefined,
          },
          timezone: tz,
        });
        setConfirmation({
          bookingId: result.bookingId,
          meetingUrl: result.meetingUrl,
        });
      } catch (e: unknown) {
        setError(
          e instanceof SeptimiusError
            ? `Booking failed: ${e.message}`
            : 'Booking failed. Please try again or use the form above.'
        );
      } finally {
        setSubmitting(false);
      }
    },
    [selected, intent, tz]
  );

  /* ─── Render ───────────────────────────────────────────────────── */

  if (confirmation) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-primary-700/20 to-accent/10 p-8 md:p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-accent/20 text-accent mx-auto mb-4 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Booking received</h3>
        <p className="text-gray-300 mb-4">
          Confirmation reference: <code className="text-accent">{confirmation.bookingId}</code>
        </p>
        {confirmation.meetingUrl && (
          <a
            href={confirmation.meetingUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex"
          >
            Open meeting link
          </a>
        )}
        <p className="text-sm text-gray-500 mt-6">
          A calendar invite is on its way to your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
      <p className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">
        Septimius Calendar
      </p>
      <h3 className="text-2xl font-bold text-white mb-2">{heading}</h3>
      <p className="text-gray-400 text-sm mb-6">{description}</p>

      {loading && (
        <p className="text-sm text-gray-500">Loading available slots…</p>
      )}

      {error && !loading && (
        <p className="text-sm text-amber-400/90 bg-amber-400/[0.05] border border-amber-400/20 rounded-lg p-4">
          {error}
        </p>
      )}

      {!loading && !error && slots && slots.length === 0 && (
        <p className="text-sm text-gray-500">
          No slots in the next {windowDays} days. Please use the form above —
          we&apos;ll reach out within 1 business day.
        </p>
      )}

      {!loading && !error && slots && slots.length > 0 && !selected && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {slots.slice(0, 12).map((s) => (
            <button
              key={s.start}
              onClick={() => setSelected(s)}
              className="px-4 py-3 rounded-lg border border-white/10 bg-white/[0.03] hover:border-accent hover:bg-accent/10 text-sm text-white text-left transition-colors"
            >
              {formatSlot(s.start)}
            </button>
          ))}
        </div>
      )}

      {selected && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitBooking(new FormData(e.currentTarget));
          }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between bg-white/[0.04] rounded-lg p-4 border border-accent/30">
            <div>
              <p className="text-xs text-accent uppercase tracking-widest mb-1">
                Selected slot
              </p>
              <p className="text-white text-sm font-medium">
                {formatSlot(selected.start)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="text-xs text-gray-400 hover:text-white"
            >
              Change
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors text-sm"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors text-sm"
            />
          </div>
          <input
            name="organisation"
            type="text"
            placeholder="Organisation (optional)"
            className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors text-sm"
          />
          <textarea
            name="notes"
            placeholder="What you'd like to discuss (optional)"
            rows={3}
            className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors text-sm resize-y"
          />
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full justify-center disabled:opacity-50"
          >
            {submitting ? 'Booking…' : 'Confirm booking'}
          </button>
        </form>
      )}
    </div>
  );
}
