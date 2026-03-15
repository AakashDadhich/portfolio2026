/**
 * HEADER COMPONENT
 * ─────────────────
 * Renders the full site header including navigation, theme toggle,
 * and mobile drawer. Reads nav items from config/navigation.js.
 *
 * The active nav link is determined by the `data-page` attribute
 * set on the <body> tag of each HTML page.
 *
 * Usage (called by js/init.js):
 *   import { renderHeader } from '../components/header.js';
 *   document.getElementById('site-nav').innerHTML = renderHeader();
 */

import { navItems } from '../config/navigation.js';
import { siteConfig } from '../config/site.js';

/**
 * Returns the HTML string for the full site header.
 * Active page detection reads document.body.dataset.page.
 */
export function renderHeader() {
  const currentPage = document.body.dataset.page || '';

  // ── Desktop nav links ─────────────────────────────────────────────────
  const desktopLinks = navItems.map(item => {
    const isActive = item.page === currentPage;
    return `
      <a href="${item.href}"
         class="nav-link${isActive ? ' nav-link--active' : ''}"
         ${isActive ? 'aria-current="page"' : ''}>
        ${item.label}
      </a>`;
  }).join('');

  // ── Mobile drawer links ───────────────────────────────────────────────
  const drawerLinks = navItems.map(item => {
    const isActive = item.page === currentPage;
    return `
      <a href="${item.href}"
         class="nav-drawer-link${isActive ? ' nav-drawer-link--active' : ''}"
         ${isActive ? 'aria-current="page"' : ''}>
        ${item.label}
      </a>`;
  }).join('');

  return `
    <nav class="site-nav" role="navigation" aria-label="Main navigation">
      <div class="nav-inner">

        <a href="./me.html" class="nav-brand" aria-label="${siteConfig.name} - home">
          <span class="nav-brand-mono">${siteConfig.initials}</span>
          <span class="nav-brand-name">${siteConfig.name}</span>
        </a>

        <div class="nav-links" role="list">
          ${desktopLinks}
        </div>

        <div class="nav-actions">
          <button class="theme-toggle" id="theme-toggle" aria-label="Toggle light/dark theme" title="Toggle theme">
            <span class="theme-icon-moon" aria-hidden="true">◐</span>
            <span class="theme-icon-sun"  aria-hidden="true">◑</span>
          </button>
          <button class="nav-hamburger" id="nav-hamburger" aria-label="Open navigation menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </nav>

    <!-- Mobile drawer (slides in from right) -->
    <div class="nav-drawer" id="nav-drawer" role="dialog" aria-label="Mobile navigation" aria-hidden="true">
      <button class="nav-drawer-close" id="nav-drawer-close" aria-label="Close navigation menu">✕</button>
      <nav role="list">
        ${drawerLinks}
      </nav>
    </div>

    <!-- Overlay behind open drawer -->
    <div class="nav-overlay" id="nav-overlay" aria-hidden="true"></div>
  `;
}
