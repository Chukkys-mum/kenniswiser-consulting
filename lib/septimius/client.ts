/**
 * Septimius public-API client (anonymous / unauthenticated surfaces only).
 *
 * The full `@septimius/api-client` package (in
 * `septimius-ecosystem/packages/api-client/`) covers the authenticated
 * workspace surfaces — chat, RAG, channels, presence — and requires a
 * `getToken()` for Supabase JWTs. That package is private until the
 * publish-decision criteria are met (see
 * `septimius-ecosystem/packages/api-client/docs/publish-decision.md`).
 *
 * This file is the thin equivalent for PUBLIC marketing surfaces — anyone
 * on kenniswiserconsulting.com hits these endpoints without auth:
 *
 *   - Forms intake (lead capture, contact requests)
 *   - Calendar availability / booking
 *   - Public Documents reads (eventual)
 *
 * Base URL comes from `NEXT_PUBLIC_SEPTIMIUS_API_BASE` (set on Vercel).
 * The site identifies itself via `NEXT_PUBLIC_SEPTIMIUS_SITE_KEY`.
 *
 * When the full SDK eventually publishes to GitHub Packages and this site
 * migrates into the kennis-web monorepo, this file goes away in favour of
 * `import { createSeptimiusClient } from "@septimius/api-client"`.
 */

const API_BASE =
  process.env.NEXT_PUBLIC_SEPTIMIUS_API_BASE ?? 'https://api.septimius.app';

const SITE_KEY =
  process.env.NEXT_PUBLIC_SEPTIMIUS_SITE_KEY ?? 'kwc-site';

/** Backend-shaped error surfaced as a typed object so callers can branch. */
export class SeptimiusError extends Error {
  readonly status: number;
  readonly code?: string;
  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = 'SeptimiusError';
    this.status = status;
    this.code = code;
  }
}

async function request<T>(
  path: string,
  init?: RequestInit & { json?: unknown }
): Promise<T> {
  const headers: Record<string, string> = {
    'X-Septimius-Site': SITE_KEY,
    ...(init?.json !== undefined ? { 'Content-Type': 'application/json' } : {}),
    ...((init?.headers as Record<string, string>) ?? {}),
  };
  const res = await fetch(`${API_BASE}${path}`, {
    method: init?.method ?? (init?.json !== undefined ? 'POST' : 'GET'),
    ...init,
    headers,
    body: init?.json !== undefined ? JSON.stringify(init.json) : init?.body,
  });
  if (!res.ok) {
    let code: string | undefined;
    let detail: string | undefined;
    try {
      const body = await res.json();
      code = body?.code;
      detail = body?.detail ?? body?.message;
    } catch {
      /* ignore */
    }
    throw new SeptimiusError(
      detail ?? `Septimius ${res.status} on ${path}`,
      res.status,
      code
    );
  }
  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

/* ─── Forms ───────────────────────────────────────────────────────────── */

export interface FormSubmission {
  /** Stable form identifier — corresponds to the `formKey` set up in the Septimius admin. */
  formKey: string;
  /** Form payload — schema is per-form. */
  data: Record<string, unknown>;
  /** Optional metadata for routing / tagging in CRM. */
  meta?: { source?: string; campaign?: string };
}

export interface FormSubmissionResult {
  submissionId: string;
  status: 'received' | 'queued';
}

/**
 * Submit a form to Septimius Forms. Lands in CRM via the form-workflow service.
 * Endpoint: POST /api/v1/forms/{formKey}/submit
 */
export async function submitForm(
  input: FormSubmission
): Promise<FormSubmissionResult> {
  return request<FormSubmissionResult>(
    `/api/v1/forms/${encodeURIComponent(input.formKey)}/submit`,
    { json: { data: input.data, meta: input.meta } }
  );
}

/* ─── Calendar ────────────────────────────────────────────────────────── */

export interface AvailabilitySlot {
  start: string; // ISO 8601
  end: string;
  available: boolean;
}

export interface AvailabilityRequest {
  /** Calendar intent — e.g. "kwc-scoping", "kencap-investor-intro". */
  intent: string;
  /** ISO date range to look up. */
  from: string; // YYYY-MM-DD
  to: string; // YYYY-MM-DD
  /** Visitor timezone, e.g. "Europe/London". */
  timezone?: string;
}

export interface BookingRequest {
  intent: string;
  slot: { start: string; end: string };
  attendee: {
    name: string;
    email: string;
    organisation?: string;
    notes?: string;
  };
  timezone?: string;
}

export interface BookingResult {
  bookingId: string;
  status: 'confirmed' | 'pending_review';
  meetingUrl?: string;
}

/** Endpoint: GET /api/v1/calendar/availability */
export async function getAvailability(
  input: AvailabilityRequest
): Promise<AvailabilitySlot[]> {
  const qs = new URLSearchParams({
    intent: input.intent,
    from: input.from,
    to: input.to,
    ...(input.timezone ? { timezone: input.timezone } : {}),
  });
  return request<AvailabilitySlot[]>(`/api/v1/calendar/availability?${qs}`);
}

/** Endpoint: POST /api/v1/calendar/bookings */
export async function createBooking(input: BookingRequest): Promise<BookingResult> {
  return request<BookingResult>('/api/v1/calendar/bookings', { json: input });
}

/* ─── KORA ────────────────────────────────────────────────────────────── */

const KORA_BASE =
  process.env.NEXT_PUBLIC_KORA_API_BASE ?? 'https://kora-api-gamma.vercel.app';

export interface KoraChatRequest {
  projectKey: string;
  message: string;
}

/** Endpoint: POST {KORA_BASE}/api/kora/embed/chat */
export async function koraChat(input: KoraChatRequest): Promise<{
  response?: string;
  content?: string;
}> {
  const res = await fetch(`${KORA_BASE}/api/kora/embed/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Kora-Key': input.projectKey,
    },
    body: JSON.stringify({ message: input.message }),
  });
  if (!res.ok) {
    throw new SeptimiusError(`KORA ${res.status}`, res.status);
  }
  return res.json();
}

/* ─── Re-exports for convenience ─────────────────────────────────────── */

export const SEPTIMIUS_API_BASE = API_BASE;
export const SEPTIMIUS_SITE_KEY = SITE_KEY;
