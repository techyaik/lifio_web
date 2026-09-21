import type { IconName } from '@/components/icons/icon-glyphs';
import type { Tone } from './tones';

export interface Feature {
  readonly id: string;
  readonly icon: IconName;
  readonly tone: Tone;
  readonly title: string;
  readonly body: string;
  readonly details: readonly string[];
}

/** What Lifio 1.0 does. Only shipped behaviour belongs here; planned work goes in roadmap.ts. */
export const features: readonly Feature[] = [
  {
    id: 'today',
    icon: 'today',
    tone: 'sky',
    title: 'Today and the check-in',
    body: 'One calm screen for your day. In the evening, a one-minute check-in: how the day went, a quick log, and anything left to tick.',
    details: ['One-minute check-in', 'Check-in run', 'Quick capture'],
  },
  {
    id: 'habits',
    icon: 'habits',
    tone: 'mint',
    title: 'Habits',
    body: 'Tick a habit in one tap. Choose its days, set a reminder, and take a rest day without losing your streak. Fix a missed day from the calendar.',
    details: ['Streaks and rest days', 'Flexible schedules', 'Archive and undo'],
  },
  {
    id: 'mood',
    icon: 'mood',
    tone: 'amber',
    title: 'Mood',
    body: 'Five faces, one tap, and a line about why if you like. A calendar shows how your month felt.',
    details: ['Mood calendar', 'Optional note', 'Gentle support note'],
  },
  {
    id: 'health',
    icon: 'health',
    tone: 'pink',
    title: 'Health log',
    body: 'Sleep, weight and energy in about thirty seconds, or a detailed log with steps, heart rate and symptoms. History, a weekly chart and goals of your own.',
    details: ['Quick Log', 'History and trends', 'Your goals'],
  },
  {
    id: 'water',
    icon: 'water',
    tone: 'sky',
    title: 'Water',
    body: 'Add a glass from Today or straight from the reminder. Set your goal and glass size; reminders stop once you reach it.',
    details: ['Glasses, ml or fl oz', 'Undo last', 'Stops at your goal'],
  },
  {
    id: 'notes',
    icon: 'notes',
    tone: 'lilac',
    title: 'Notes',
    body: 'Capture a thought, format it, turn it into a checklist. Tags, pins and search find it again. Deleted notes wait in Recently deleted.',
    details: ['Checklists', 'Tags and search', 'Recently deleted'],
  },
  {
    id: 'reminders',
    icon: 'reminders',
    tone: 'amber',
    title: 'Reminders that respect you',
    body: 'Check-in, habits, water and backup. Quiet hours, discreet wording, and Done or +1 glass right from the notification. Never a “we miss you”.',
    details: ['Quiet hours', 'Discreet mode', 'Reliability check'],
  },
  {
    id: 'lock',
    icon: 'lock',
    tone: 'lilac',
    title: 'App lock',
    body: 'Open Lifio with your fingerprint, face or phone PIN. It can also blank the app in the recent-apps view.',
    details: ['Biometric unlock', 'Grace period', 'Hidden preview'],
  },
  {
    id: 'backup',
    icon: 'backup',
    tone: 'mint',
    title: 'Backup and export',
    body: 'One complete backup file, saved wherever you choose. Restore by merging or replacing, with a 7-day undo. Export any area to a spreadsheet.',
    details: ['Merge or replace', '7-day undo', 'CSV export'],
  },
];
