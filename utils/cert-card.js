import { isCertExpired, formatCertDate } from './dates.js';

export function safeCredentialUrl(url) {
  if (typeof url !== 'string') return null;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' ? parsed.href : null;
  } catch {
    return null;
  }
}

function escapeAttr(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function renderCert(cert) {
  const expired = isCertExpired(cert.expires);
  const dateStr = formatCertDate(cert.date);
  const expStr  = cert.expires ? formatCertDate(cert.expires) : null;
  const url     = safeCredentialUrl(cert.url);

  const classes = ['cert-card'];
  if (url) classes.push('cert-card--link');
  if (expired) classes.push('cert-card--expired');

  const tag   = url ? 'a' : 'div';
  const attrs = url
    ? ` href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer"`
    : '';

  return `
    <${tag} class="${classes.join(' ')}"${attrs}
         data-animate="fade-up"
         data-animate-stagger>
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
    </${tag}>
  `;
}
