export type Theme = 'light' | 'dark';

const THEME_ATTR = 'data-theme';
const STORAGE_KEY = 'app-theme';

/**
 * Determine the current theme considering:
 * - explicit root attribute
 * - user preference stored locally
 * - system preference as a fallback
 * Returns 'light' by default on the server.
 */
export function getCurrentTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const attr = (document.documentElement.getAttribute(THEME_ATTR) as Theme) || null;
  if (attr === 'light' || attr === 'dark') return attr;
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

/**
 * Initialize theming on client startup. Writes the computed theme to the root
 * and persists it to localStorage.
 */
export function initTheme(): void {
  if (typeof window === 'undefined') return;
  const theme = getCurrentTheme();
  document.documentElement.setAttribute(THEME_ATTR, theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Ignore storage errors (privacy settings, disabled storage, etc.)
  }
}

/**
 * Toggle between light and dark themes. Updates the root attribute and storage.
 * Returns the new theme.
 */
export function toggleTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const current = (document.documentElement.getAttribute(THEME_ATTR) as Theme) || 'light';
  const next: Theme = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute(THEME_ATTR, next);
  localStorage.setItem(STORAGE_KEY, next);
  return next;
}
