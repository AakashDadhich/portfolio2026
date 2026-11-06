/**
 * CERTIFICATIONS PAGE
 * ────────────────────
 * Reads certification data from content/certifications.js and renders
 * a grid of cert cards. Expired certs are visually distinct.
 *
 * To add certifications: edit content/certifications.js only.
 */

import { certifications } from '../content/certifications.js';
import { isCertExpired } from '../utils/dates.js';
import { renderCert } from '../utils/cert-card.js';
import { observeNewElements } from '../js/animations.js';

const root = document.getElementById('certs-root');
if (!root) throw new Error('Missing #certs-root element');

if (certifications.length === 0) {
  root.innerHTML = `
    <div class="certs-empty">
      <p>Certifications coming soon.</p>
      <p style="margin-top:8px; font-size:0.75rem;">
        Add entries to <code>content/certifications.js</code> to populate this page.
      </p>
    </div>
  `;
} else {
  // Sort: active first, expired last
  const sorted = [...certifications].sort((a, b) => {
    const aExp = isCertExpired(a.expires);
    const bExp = isCertExpired(b.expires);
    if (aExp === bExp) return 0;
    return aExp ? 1 : -1;
  });

  root.innerHTML = `
    <div class="certs-grid">
      ${sorted.map((cert, i) => renderCert(cert, i)).join('')}
    </div>
  `;
}

// Trigger animations now that content is in the DOM
observeNewElements();
