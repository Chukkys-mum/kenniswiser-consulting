'use client';

/**
 * Trigger button used inside the cookie-policy page so visitors can
 * reopen the consent dialog after their initial choice.
 *
 * The actual dialog state lives in <CookieConsent /> mounted in the
 * root layout. This button just calls the global helper that component
 * exposes (`window.kw.openCookieSettings()`).
 */
export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== 'undefined' && window.kw?.openCookieSettings) {
          window.kw.openCookieSettings();
        }
      }}
      className="btn-secondary"
    >
      Open cookie preferences
    </button>
  );
}
