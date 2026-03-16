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
    provider: 'Google Cloud',
    name:     'Associate Cloud Engineer',
    date:     '2023-08',
    expires:  '2026-08',
  },
  {
    provider: '7Safe (PA Consulting)',
    name:     'Certified Cloud Security Analyst (CCSA)',
    date:     '2023-01',
    expires:  '2026-01',   // Expired - renders with muted styling
  },
  {
    provider: 'CREST',
    name:     'Practitioner Security Analyst (CPSA)',
    date:     '2022-10',
    expires:  '2025-10',
  },
  {
    provider: '7Safe (PA Consulting)',
    name:     'Certified Security Testing Associate (CSTA)',
    date:     '2020-10',
    expires:  '2023-10',
  },
  {
    provider: '7Safe (PA Consulting)',
    name:     'Certified Security Testing Professional (CSTP)',
    date:     '2019-11',
    expires:  '2022-11',
  },
];
