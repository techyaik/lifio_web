import type { IconName } from '@/components/icons/icon-glyphs';
import type { Tone } from './tones';

/**
 * - `current`: the version people can use (or are testing) now.
 * - `next`: being built next.
 * - `planned`: decided, after `next`.
 * - `exploring`: only if people ask for it and it keeps the promises.
 */
export type RoadmapStatus = 'current' | 'next' | 'planned' | 'exploring';

export interface RoadmapItem {
  readonly icon: IconName;
  readonly tone: Tone;
  readonly title: string;
  readonly body: string;
}

export interface RoadmapRelease {
  readonly id: string;
  readonly status: RoadmapStatus;
  /** "1.1"; `null` for the open-ended "Later" list. */
  readonly version: string | null;
  readonly name: string;
  readonly summary: string;
  readonly items: readonly RoadmapItem[];
}

export const statusLabels: Record<RoadmapStatus, string> = {
  current: 'Now',
  next: 'Next',
  planned: 'Planned',
  exploring: 'Exploring',
};

/**
 * Lifio's release plan (lifio-app/requirements.md §6). No dates: each release ships when it is
 * ready and has kept every promise. Order can change with what beta testers tell us.
 */
export const roadmap: readonly RoadmapRelease[] = [
  {
    id: 'ritual',
    status: 'current',
    version: '1.0',
    name: 'Ritual',
    summary: 'The daily loop: check in, tick habits, log how you feel, keep it all private. Android, in beta testing now.',
    items: [
      { icon: 'today', tone: 'sky', title: 'Today and the one-minute check-in', body: 'Your day on one screen, and an evening check-in that takes about a minute.' },
      { icon: 'habits', tone: 'mint', title: 'Habits, streaks and rest days', body: 'Schedules, reminders and forgiving streaks.' },
      { icon: 'health', tone: 'pink', title: 'Mood, health log and water', body: 'Mood calendar, Quick Log, history and goals, typed by you.' },
      { icon: 'notes', tone: 'lilac', title: 'Notes', body: 'Formatting, checklists, tags, pins and search.' },
      { icon: 'reminders', tone: 'amber', title: 'Calm reminders', body: 'Quiet hours, discreet mode and a reliability check.' },
      { icon: 'lock', tone: 'lilac', title: 'App lock, backup and export', body: 'Biometric lock, full backup and restore, CSV export.' },
    ],
  },
  {
    id: 'money-and-meds',
    status: 'next',
    version: '1.1',
    name: 'Money & Meds',
    summary: 'Money and medicine join Lifio, plus a look back at your week. Each area can stay switched off.',
    items: [
      { icon: 'wallet', tone: 'mint', title: 'Wallet', body: 'Accounts, a ten-second spend entry, month totals and your own categories. Amounts can be hidden. No bank logins, ever.' },
      { icon: 'medicine', tone: 'pink', title: 'Medicine', body: 'Reminders with Taken and Snooze, and a clear record of taken and missed doses.' },
      { icon: 'insights', tone: 'sky', title: 'Weekly Review', body: 'Every Sunday: habits done, best streak, sleep and steps, mood, and spending against last week.' },
      { icon: 'idea', tone: 'amber', title: 'Observations', body: 'Soft patterns from your own data, like “you tend to tick more habits after 7 hours of sleep”. Worked out on your phone.' },
      { icon: 'search', tone: 'lilac', title: 'Search everything', body: 'One search across notes, habits, spending and health notes.' },
      { icon: 'sleep', tone: 'sky', title: '“My day ends at”', body: 'For night owls: a day that ends at 2 a.m. still counts as today.' },
    ],
  },
  {
    id: 'body',
    status: 'planned',
    version: '1.2',
    name: 'Body',
    summary: 'Less typing: bring in what your phone already knows, and go deeper on your health.',
    items: [
      { icon: 'health', tone: 'pink', title: 'Health Connect import', body: 'Steps, sleep, heart rate, weight and more, read from Health Connect on Android. What you type always wins over an import.' },
      { icon: 'chart', tone: 'sky', title: 'Health report', body: 'Last 7 days, 30 days or all time, as a readable summary or a spreadsheet to share with whoever you choose.' },
      { icon: 'cycle', tone: 'pink', title: 'Cycle tracking', body: 'Predictions that learn your own cycle length, and discreet reminders.' },
      { icon: 'recurring', tone: 'mint', title: 'Recurring spends and budgets', body: 'Bills that repeat by themselves, and a monthly limit per category.' },
      { icon: 'checklist', tone: 'amber', title: 'Count habits and templates', body: 'Habits with a number (“8 glasses”, “20 pages”), and a browser of ready-made habits.' },
      { icon: 'lock', tone: 'lilac', title: 'Encrypted backup', body: 'Protect a backup file with a password of your own.' },
    ],
  },
  {
    id: 'later',
    status: 'exploring',
    version: null,
    name: 'Later',
    summary: 'Ideas we will build only if enough people need them, and only if they keep every promise.',
    items: [
      { icon: 'phone', tone: 'sky', title: 'Lifio for iPhone', body: 'Once the Android version has proven itself, with Apple Health import to follow.' },
      { icon: 'lock', tone: 'lilac', title: 'Lock a single note', body: 'An extra lock for the notes that need it.' },
      { icon: 'wallet', tone: 'mint', title: 'More than one currency', body: 'For people who live or travel across currencies.' },
      { icon: 'languages', tone: 'amber', title: 'More languages', body: 'Lifio in languages beyond English.' },
      { icon: 'refresh', tone: 'pink', title: 'Phone-to-phone transfer', body: 'Move everything to a new phone directly, without a file in between.' },
      { icon: 'today', tone: 'sky', title: 'Home-screen widgets', body: 'Today at a glance without opening the app.' },
    ],
  },
];
