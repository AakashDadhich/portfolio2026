/**
 * CERTIFICATIONS CONTENT
 * ───────────────────────
 * Add your certifications here. The certifications page renders this
 * array automatically - no other file needs editing.
 *
 * To add a new certification:
 *   Append a new object following the schema below.
 *
 * Fields:
 *   provider    - Issuing organisation (e.g. "Offensive Security", "ISC²")
 *   name        - Full certification name (e.g. "OSCP", "CISSP")
 *   date        - Date achieved, ISO format "YYYY-MM" (e.g. "2021-06")
 *   expires     - Expiry date "YYYY-MM", or null if it does not expire
 *
 * The page automatically marks a cert as expired if `expires` is in the past.
 * Expired certs render with reduced opacity and an "Expired" badge.
 *
 * ─── Example entries (replace with your real certifications) ────────────
 */

export const certifications = [
  // ── Add your certifications below ──────────────────────────────────────

  {
    provider: 'Offensive Security',
    name:     'Offensive Security Certified Professional (OSCP)',
    date:     '2021-06',
    expires:  null,        // OSCP does not expire
  },
  {
    provider: 'ISC²',
    name:     'Certified Information Systems Security Professional (CISSP)',
    date:     '2022-09',
    expires:  '2025-09',   // Expired - renders with muted styling
  },
  {
    provider: 'CompTIA',
    name:     'Security+',
    date:     '2023-11',
    expires:  '2026-11',
  },

  // ── End of examples ────────────────────────────────────────────────────
];
