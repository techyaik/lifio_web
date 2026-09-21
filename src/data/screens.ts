import type { ImageMetadata } from 'astro';

import habits from '@/assets/screens/habits.png';
import health from '@/assets/screens/health.png';
import notes from '@/assets/screens/notes.png';
import today from '@/assets/screens/today.png';

export interface Screen {
  readonly id: string;
  readonly image: ImageMetadata;
  readonly title: string;
  readonly caption: string;
  /** What a screen reader hears instead of the image. */
  readonly alt: string;
}

/**
 * Real screenshots of Lifio 1.0 on an Android phone (1080 × 1944: the phone's status bar and
 * navigation buttons are cropped off). Retake them when the screens change.
 */
export const screens: readonly Screen[] = [
  {
    id: 'today',
    image: today,
    title: 'Today',
    caption: 'Your day at a glance: habits, water, mood and the check-in.',
    alt: 'Lifio’s Today screen: a greeting, today’s habits with a 2 of 8 progress ring, and the tab bar.',
  },
  {
    id: 'habits',
    image: habits,
    title: 'Habits',
    caption: 'Tick in one tap, and see your last seven days and best streak.',
    alt: 'Lifio’s Habits screen: 2 of 8 done, best streak 4 days, the last seven days, and the habit list.',
  },
  {
    id: 'health',
    image: health,
    title: 'Health',
    caption: 'Steps, sleep, water, weight and mood, logged in seconds.',
    alt: 'Lifio’s Health screen: a steps gauge and tiles for sleep, water, weight and mood.',
  },
  {
    id: 'notes',
    image: notes,
    title: 'Notes',
    caption: 'Quick notes with tags, search and checklists.',
    alt: 'Lifio’s Notes screen: search, tag filters and a list of notes.',
  },
];
