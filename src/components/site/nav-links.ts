export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export const navLinks: readonly NavLink[] = [
  { label: 'Features', href: '/#features' },
  { label: 'Privacy', href: '/#privacy' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Support', href: '/contact' },
];
