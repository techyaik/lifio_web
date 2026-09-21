/**
 * The visitor's appearance choice, like the app's Settings → Appearance. `system` follows the
 * device. The choice is kept in this browser only (localStorage), never sent anywhere.
 */
export const THEMES = ['light', 'dark', 'system'] as const;
export type Theme = (typeof THEMES)[number];

export const THEME_STORAGE_KEY = 'lifio-theme';

/** The page colour of each side, for the browser's `theme-color` (the address bar on phones). */
export const THEME_COLORS = { light: '#FFFFFF', dark: '#0A0A0B' } as const;

export const isTheme = (value: unknown): value is Theme => THEMES.includes(value as Theme);

export const readTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(stored) ? stored : 'system';
  } catch {
    return 'system';
  }
};

/** Sets `data-theme` on the root (the CSS reads it) and saves the choice. */
export const applyTheme = (theme: Theme): void => {
  const root = document.documentElement;
  if (theme === 'system') delete root.dataset['theme'];
  else root.dataset['theme'] = theme;

  document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach((meta) => {
    const side = meta.media.includes('dark') ? 'dark' : 'light';
    meta.content = THEME_COLORS[theme === 'system' ? side : theme];
  });

  try {
    if (theme === 'system') localStorage.removeItem(THEME_STORAGE_KEY);
    else localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be blocked (private windows); the choice then lasts for this page only.
  }
};
