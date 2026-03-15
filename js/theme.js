/**
 * THEME SYSTEM
 * ─────────────
 * Manages the light/dark theme toggle.
 * - Default theme is dark
 * - User preference is persisted in localStorage
 * - Theme is applied to <html data-theme="dark|light">
 * - CSS custom properties in global.css respond to this attribute
 */

const STORAGE_KEY = 'portfolio-theme';
const DEFAULT_THEME = 'dark';

/**
 * Read the saved theme from localStorage, falling back to the default.
 */
function getSavedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

/**
 * Apply a theme to the document.
 * @param {'dark'|'light'} theme
 */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch { /* storage unavailable */ }
}

/**
 * Initialise the theme system.
 * - Applies the saved (or default) theme immediately
 * - Wires up the theme toggle button (injected by the header component)
 *
 * Called by js/init.js on every page load.
 */
export function initTheme() {
  // Apply theme before first paint to avoid flash
  const saved = getSavedTheme();
  applyTheme(saved);

  // Wire up toggle button (rendered by header component)
  // Use event delegation in case the button isn't in the DOM yet
  document.addEventListener('click', (e) => {
    if (e.target.closest('#theme-toggle')) {
      const current = document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
      applyTheme(current === 'dark' ? 'light' : 'dark');
    }
  });
}
