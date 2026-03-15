/**
 * DATE UTILITIES
 * ──────────────
 * Helper functions for formatting dates across the site.
 */

/**
 * Format a date string like "Oct 2024" into a display-friendly string.
 * Handles the special "Present" token.
 *
 * @param {string} date  e.g. "Oct 2024" or "Present"
 * @returns {string}
 */
export function formatDate(date) {
  if (!date || date === 'Present') return 'Present';
  return date;
}

/**
 * Build a human-readable tenure string from start and end dates.
 * e.g. "Jan 2023 – Oct 2024"
 *
 * @param {string} start
 * @param {string} end
 * @returns {string}
 */
export function formatTenure(start, end) {
  return `${formatDate(start)} – ${formatDate(end)}`;
}

/**
 * Check whether a certification is expired based on its expiry date.
 *
 * @param {string|null} expiresDate  ISO date string (e.g. "2023-06") or null for non-expiring
 * @returns {boolean}
 */
export function isCertExpired(expiresDate) {
  if (!expiresDate) return false;
  const expiry = new Date(expiresDate);
  return expiry < new Date();
}

/**
 * Format an ISO date string (e.g. "2021-06") to "June 2021".
 *
 * @param {string} isoDate
 * @returns {string}
 */
export function formatCertDate(isoDate) {
  if (!isoDate) return '';
  const [year, month] = isoDate.split('-');
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}
