import type { IconName } from '@/components/icons/icon-glyphs';

export interface LifioPromise {
  readonly icon: IconName;
  readonly title: string;
  readonly body: string;
}

/** Lifio's six promises, as the app's About screen states them. */
export const promises: readonly LifioPromise[] = [
  { icon: 'phone', title: 'Private by design', body: 'No account, no login, no cloud. Your data lives on your phone.' },
  { icon: 'hidden', title: 'No ads. Ever.', body: 'No tracking and no analytics.' },
  { icon: 'export', title: 'Your data is yours', body: 'Full backup, restore and export in readable formats.' },
  { icon: 'sleep', title: 'Calm', body: 'Never shames, never spams, never nags beyond what you set.' },
  { icon: 'check-circle', title: 'Honest', body: 'No fake features, no pretend settings, no dark patterns.' },
  { icon: 'offline', title: 'Works offline', body: 'Every core feature works without the internet.' },
];
