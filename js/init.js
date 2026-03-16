/**
 * INIT - Runs on every page
 * ──────────────────────────
 * This is the shared entry point loaded by every HTML page.
 * It:
 *   1. Injects the header (nav) and footer
 *   2. Initialises the theme system
 *   3. Initialises scroll animations
 *   4. Wires up the mobile navigation drawer
 *   5. Handles smooth page-leave transitions on link clicks
 *
 * Each HTML page also loads its own page-specific module (e.g. pages/experience.js)
 * for content rendering and page-specific interactions.
 */

import { renderHeader } from '../components/header.js';
import { renderFooter }  from '../components/footer.js';
import { initTheme }     from './theme.js';
import { initAnimations } from './animations.js';

// ── 1. Inject shared layout ──────────────────────────────────────────────
const navMount    = document.getElementById('site-nav');
const footerMount = document.getElementById('site-footer');

if (navMount)    navMount.innerHTML    = renderHeader();
if (footerMount) footerMount.innerHTML = renderFooter();

// ── 2. Theme ─────────────────────────────────────────────────────────────
initTheme();

// ── 3. Scroll animations (run after header injected) ─────────────────────
// Small defer to allow page-specific scripts to inject their content first
requestAnimationFrame(() => {
  setTimeout(initAnimations, 50);
});

// ── 4. Mobile navigation drawer ──────────────────────────────────────────
function openDrawer() {
  const drawer  = document.getElementById('nav-drawer');
  const overlay = document.getElementById('nav-overlay');
  const burger  = document.getElementById('nav-hamburger');
  if (!drawer) return;
  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  overlay.classList.add('is-visible');
  burger?.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  const drawer  = document.getElementById('nav-drawer');
  const overlay = document.getElementById('nav-overlay');
  const burger  = document.getElementById('nav-hamburger');
  if (!drawer) return;
  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  overlay.classList.remove('is-visible');
  burger?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// Use delegation so it works after header is injected
document.addEventListener('click', (e) => {
  if (e.target.closest('#nav-hamburger'))   openDrawer();
  if (e.target.closest('#nav-drawer-close')) closeDrawer();
  if (e.target.closest('#nav-overlay'))      closeDrawer();
  // Close drawer when a drawer link is clicked
  if (e.target.closest('.nav-drawer-link'))  closeDrawer();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDrawer();
});

// ── 5. Smooth page-leave transition ──────────────────────────────────────
// Fades out the page content before navigating to another internal page.
// Combined with the pageEnter animation on each page, this creates a
// smooth cross-page transition without a SPA router.
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href]');
  if (!link) return;

  const href = link.getAttribute('href');
  // Only intercept internal .html links (skip mailto:, external, anchors)
  if (!href || href.startsWith('mailto:') || href.startsWith('http') || href.startsWith('#')) return;

  e.preventDefault();
  const main = document.getElementById('main-content');
  if (main) {
    main.style.transition = 'opacity 0.18s ease, transform 0.18s ease';
    main.style.opacity    = '0';
    main.style.transform  = 'translateY(-6px)';
  }
  setTimeout(() => { window.location.href = href; }, 190);
});
