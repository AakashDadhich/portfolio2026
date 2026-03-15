/**
 * FOOTER COMPONENT
 * ─────────────────
 * Renders the site footer. Reads metadata from config/site.js.
 *
 * Usage (called by js/init.js):
 *   import { renderFooter } from '../components/footer.js';
 *   document.getElementById('site-footer').innerHTML = renderFooter();
 */

import { siteConfig } from '../config/site.js';

export function renderFooter() {
  const year = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="footer-links">
        <a href="${siteConfig.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        &nbsp;·&nbsp;
        <a href="mailto:${siteConfig.email}">Email</a>
      </div>
      <div class="footer-copy">© ${year} ${siteConfig.name}</div>
    </footer>
  `;
}
