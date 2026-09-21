/**
 * Facts about Lifio that several pages repeat. Change them here, never in a page.
 */
export const site = {
  name: 'Lifio',
  url: 'https://lifio.app',
  oneLiner: 'Your private daily check-in.',
  tagline: 'Small daily victories, kept on your phone.',
  description:
    'Lifio is a calm, private daily check-in for Android: habits, mood, health, water and notes in one place. No account, no ads, no cloud. Everything stays on your phone.',
  /** Where people reach a person. Also the privacy and legal contact. */
  supportEmail: 'imran@idexa.app',
  developer: 'Imran / Idexa',
  /** The Google Play listing. `null` until the listing is public; pages then say "Coming soon". */
  playStoreUrl: null as string | null,
  /** Android application id, as on Google Play. */
  androidPackage: 'com.lifio.app',
  /** Date the privacy policy and terms last changed (YYYY-MM-DD). */
  legalUpdatedOn: '2026-09-22',
} as const;

/** "22 September 2026". */
export const formatLongDate = (value: string): string =>
  new Date(`${value}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
