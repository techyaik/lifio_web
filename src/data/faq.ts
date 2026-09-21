export interface FaqItem {
  readonly question: string;
  readonly answer: string;
  readonly link?: { readonly label: string; readonly href: string };
}

export const faq: readonly FaqItem[] = [
  {
    question: 'Do I need an account?',
    answer: 'No. There is no sign-up, no email and no password. Open the app and start.',
  },
  {
    question: 'Where is my data stored?',
    answer:
      'Only on your phone, in the app’s private storage. Lifio has no servers. A backup or export leaves your phone only when you choose where to save or send it.',
  },
  {
    question: 'What if I lose or change my phone?',
    answer:
      'Make a backup in Settings → Backup & restore and keep the file somewhere safe, such as your own cloud drive. Restore it on the new phone. Lifio can remind you when a backup is due. Because nothing is stored online, we can’t recover data for you.',
  },
  {
    question: 'Does Lifio read my steps from Health Connect?',
    answer: 'Not yet. In version 1.0 you log health yourself, which takes seconds. Health Connect import is planned for version 1.2.',
    link: { label: 'See the roadmap', href: '/roadmap' },
  },
  {
    question: 'Is Lifio free?',
    answer: 'Yes, and it has no ads.',
  },
  {
    question: 'Is there an iPhone version?',
    answer: 'Lifio starts on Android. iPhone is planned once the Android version has proven itself.',
    link: { label: 'See the roadmap', href: '/roadmap' },
  },
  {
    question: 'Why didn’t a reminder arrive?',
    answer:
      'Some phones delay reminders to save battery. In Lifio, open Settings → Notifications → “Are my reminders reliable?” to check permissions, get battery tips for your phone, and send a test reminder.',
  },
  {
    question: 'Is Lifio a medical app?',
    answer: 'No. Lifio is a personal journal for habits and wellbeing. It never diagnoses anything. Talk to a doctor about any health concern.',
  },
];
