/** The app's five tile tones (BrandBadge): a soft tile behind a deeper icon colour. */
export type Tone = 'mint' | 'sky' | 'lilac' | 'amber' | 'pink';

/** Full class names, so Tailwind finds them when it scans the source. */
export const toneClasses: Record<Tone, string> = {
  mint: 'bg-tile-mint text-icon-mint',
  sky: 'bg-tile-sky text-icon-sky',
  lilac: 'bg-tile-lilac text-icon-lilac',
  amber: 'bg-tile-amber text-icon-amber',
  pink: 'bg-tile-pink text-icon-pink',
};
