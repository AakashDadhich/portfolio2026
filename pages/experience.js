/**
 * PROFESSIONAL EXPERIENCE PAGE
 * ──────────────────────────────
 * Reads experience data from content/experience.js and renders it
 * into #experience-root on professional-experience.html.
 *
 * Animation behaviour:
 *  - Each company card is observed by IntersectionObserver
 *  - When a card enters the viewport, its role blocks animate in sequence:
 *    company header → role title → dates → bullet points (one by one)
 *  - Animations fire only once per page load (observer unobserves after trigger)
 */

import { experience } from '../content/experience.js';

const root = document.getElementById('experience-root');
if (!root) throw new Error('Missing #experience-root element');

// ── Render all company entries ────────────────────────────────────────────
root.innerHTML = experience.map(renderCompany).join('');

// ── Set up sequential animation observer ─────────────────────────────────
setupExperienceObserver();

// ─────────────────────────────────────────────────────────────────────────
// Render helpers
// ─────────────────────────────────────────────────────────────────────────

function renderCompany(company) {
  const rolesHTML = company.roles.map(renderRole).join('');

  return `
    <article class="experience-company" data-company="${company.company}">
      <div class="company-header">
        <div>
          <h2 class="company-name" data-seq>${company.company}</h2>
          <p class="company-location" data-seq>${company.location}</p>
        </div>
        <span class="company-total-tenure${company.tenure.includes('Present') ? ' company-tenure--present' : ' company-tenure--past'}" data-seq>${company.tenure}</span>
      </div>
      <div class="role-list">
        ${rolesHTML}
      </div>
    </article>
  `;
}

function renderRole(role) {
  const bulletsHTML = role.bullets
    .map(bullet => `<li class="role-bullet" data-seq>${bullet}</li>`)
    .join('');

  return `
    <div class="role-item">
      <div class="role-header">
        <h3 class="role-title" data-seq>${role.title}</h3>
        <span class="role-dates${role.end === 'Present' ? ' role-dates--present' : ' role-dates--past'}" data-seq>${role.start} – ${role.end}</span>
      </div>
      <ul class="role-bullets">
        ${bulletsHTML}
      </ul>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────────────────
// Sequential animation system
// ─────────────────────────────────────────────────────────────────────────

/**
 * Observes each company card. When it enters the viewport, all [data-seq]
 * children animate in sequentially (role-by-role, bullet-by-bullet).
 * The observer disconnects after triggering - animations are one-shot per page load.
 */
function setupExperienceObserver() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: immediately show everything
    document.querySelectorAll('[data-seq]').forEach(el => el.classList.add('is-visible'));
    return;
  }

  const cards = document.querySelectorAll('.experience-company');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const card = entry.target;
        animateSequentially(card);
        obs.unobserve(card); // fires once only per page load
      });
    },
    {
      threshold:  0.08,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  cards.forEach(card => observer.observe(card));
}

/**
 * Cascades through all [data-seq] children within a company card,
 * adding .is-visible with a staggered delay between each item.
 *
 * Timing feels like a progressive reveal / AI text appearance:
 *   - Company header items:    60ms apart
 *   - Role titles & dates:     80ms apart
 *   - Bullet points:           55ms apart
 *
 * @param {HTMLElement} card
 */
function animateSequentially(card) {
  const items = Array.from(card.querySelectorAll('[data-seq]'));
  const BASE_DELAY = 60; // ms between each item

  items.forEach((item, index) => {
    // Bullet points get a tighter delay to feel like text streaming
    const isBullet = item.classList.contains('role-bullet');
    const delay = isBullet
      ? (index * 45)       // bullets: 45ms each
      : (index * BASE_DELAY); // headers/titles: 60ms each

    setTimeout(() => {
      item.classList.add('is-visible');
    }, delay);
  });
}
