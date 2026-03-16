/**
 * CONTACT PAGE
 * ─────────────
 * Renders the contact action buttons from config/site.js.
 * To update contact details, edit config/site.js only.
 */

import { siteConfig } from '../config/site.js';
import { observeNewElements } from '../js/animations.js';

const root = document.getElementById('contact-root');
if (!root) throw new Error('Missing #contact-root element');

const buttons = [
  {
    label:    'Email',
    value:    siteConfig.email,
    href:     `mailto:${siteConfig.email}`,
    icon:     '✉',
    delay:    0,
    external: false,
  },
  {
    label:    'LinkedIn',
    value:    'linkedin.com/in/aakashdadhich',
    href:     siteConfig.linkedin,
    icon:     'in',
    delay:    80,
    external: true,
  },
  {
    label:    'Download CV',
    value:    'Available upon request.',
    href:     siteConfig.cvPath,
    icon:     '↓',
    delay:    160,
    external: false,
  },
];

root.innerHTML = `
  <div class="contact-grid">
    ${buttons.map(renderButton).join('')}
  </div>
`;

// Trigger animations now that content is in the DOM
observeNewElements();

function renderButton(btn) {
  const extras = btn.external
    ? 'target="_blank" rel="noopener noreferrer"'
    : '';

  return `
    <a href="${btn.href}"
       class="contact-btn"
       data-animate="fade-left"
       data-animate-delay="${btn.delay}"
       ${extras}>
      <span class="contact-btn-icon" aria-hidden="true">${btn.icon}</span>
      <span class="contact-btn-content">
        <span class="contact-btn-label">${btn.label}</span>
        <span class="contact-btn-value">${btn.value}</span>
      </span>
      <span class="contact-btn-arrow" aria-hidden="true">→</span>
    </a>
  `;
}
