/**
 * SCROLL ANIMATIONS
 * ──────────────────
 * Uses IntersectionObserver to trigger CSS animations when elements
 * enter the viewport for the first time.
 *
 * HOW IT WORKS:
 *  1. Elements with [data-animate] start with opacity:0 (via animations.css)
 *  2. This module observes all [data-animate] elements on the page
 *  3. When an element enters the viewport, .is-visible is added → CSS transition fires
 *  4. The observer then UNOBSERVES that element - animation never repeats
 *     unless the page is refreshed (matching the specified behaviour)
 *
 * USAGE:
 *  In any HTML element:  <div data-animate="fade-up">...</div>
 *  Supported values:     fade-up | fade-in | fade-left
 *  Optional delay:       <div data-animate="fade-up" data-animate-delay="200">
 *
 *  Batch stagger:        <div data-animate="fade-up" data-animate-stagger>
 *    Delay depends on the element's position among those entering the
 *    viewport together (capped), never on its position in the page.
 *
 * Called by js/init.js on every page load.
 */

import { staggerDelay } from './stagger.js';

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

/**
 * Initialise the scroll animation observer.
 * Safe to call multiple times - re-observes any new [data-animate] elements.
 */
export function initAnimations() {
  // Fallback: if IntersectionObserver isn't available, just show everything
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      const visible = entries.filter(entry => entry.isIntersecting);
      const reduced = prefersReducedMotion();

      visible.forEach((entry, position) => {
        const el = entry.target;
        let delay = parseInt(el.dataset.animateDelay || '0', 10);
        if (el.hasAttribute('data-animate-stagger')) delay = staggerDelay(position);
        if (reduced) delay = 0;

        setTimeout(() => {
          el.classList.add('is-visible');
        }, delay);

        // Disconnect this element - animation fires once only per page load
        obs.unobserve(el);
      });
    },
    {
      threshold:  0.12,   // Trigger when 12% of the element is visible
      rootMargin: '0px 0px -32px 0px',  // Slight offset from the bottom edge
    }
  );

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

/**
 * Re-run the observer for elements added to the DOM after initial page load.
 * Call this after dynamically injecting animated content (e.g. experience entries).
 */
export function observeNewElements() {
  initAnimations();
}
