/**
 * CERTIFICATIONS PAGE
 * ────────────────────
 * Reads certification data from content/certifications.js and renders
 * a grid of cert cards. Expired certs are visually distinct.
 *
 * To add certifications: edit content/certifications.js only.
 */

import { certifications } from '../content/certifications.js';
import { isCertExpired, formatCertDate } from '../utils/dates.js';

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

// ─────────────────────────────────────────────────────────────────────────
// Cert card renderer
// ─────────────────────────────────────────────────────────────────────────

function renderCert(cert, index) {
  const expired  = isCertExpired(cert.expires);
  const dateStr  = formatCertDate(cert.date);
  const expStr   = cert.expires ? formatCertDate(cert.expires) : null;

  return `
    <div class="cert-card${expired ? ' cert-card--expired' : ''}"
         data-animate="fade-up"
         data-animate-delay="${index * 60}">
      <p class="cert-provider">${cert.provider}</p>
      <h3 class="cert-name">${cert.name}</h3>
      <div class="cert-footer">
        <div class="cert-dates">
          <span class="cert-date">Achieved: ${dateStr}</span>
          ${expStr
            ? `<span class="cert-date">Expires: ${expStr}</span>`
            : `<span class="cert-date">Does not expire</span>`
          }
        </div>
        <div class="cert-footer-bottom">
          <span class="cert-status ${expired ? 'cert-status--expired' : 'cert-status--active'}">
            ${expired ? 'Expired' : 'Active'}
          </span>
        </div>
      </div>
    </div>
  `;
}
