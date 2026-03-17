/**
 * PERSONAL PROJECTS PAGE
 * ───────────────────────
 * Reads project data from content/projects.js and renders:
 *  - A responsive 3-column grid of project cards
 *  - A full-screen modal that opens when a card is clicked
 *
 * To add a project: add an entry to content/projects.js only.
 * No changes to this file are needed.
 */

import { projects } from '../content/projects.js';
import { observeNewElements } from '../js/animations.js';

const root = document.getElementById('projects-root');
if (!root) throw new Error('Missing #projects-root element');

// ── Render grid ───────────────────────────────────────────────────────────
root.innerHTML = `
  <div class="projects-grid">
    ${projects.map((p, i) => renderCard(p, i)).join('')}
  </div>
`;

// Trigger animations now that content is in the DOM.
// Called here (not in init.js) to avoid a race condition on live servers
// where the network import takes longer than init.js's 50ms animation delay.
observeNewElements();

// ── Wire up card clicks ───────────────────────────────────────────────────
root.addEventListener('click', e => {
  const card = e.target.closest('[data-project-id]');
  if (!card) return;
  const id = card.dataset.projectId;
  const project = projects.find(p => p.id === id);
  if (project) openModal(project);
});

// ── Keyboard: open modal on Enter/Space for card ──────────────────────────
root.addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('[data-project-id]');
  if (!card) return;
  e.preventDefault();
  const id = card.dataset.projectId;
  const project = projects.find(p => p.id === id);
  if (project) openModal(project);
});

// ─────────────────────────────────────────────────────────────────────────
// Card renderer
// ─────────────────────────────────────────────────────────────────────────

const STATUS_LABELS = {
  'complete':    { label: 'Complete',    class: 'accent' },
  'in-progress': { label: 'In Progress', class: '' },
  'archived':    { label: 'Archived',    class: '' },
};

function renderCard(project, index) {
  const tags = project.tags
    .slice(0, 3)
    .map(t => `<span class="project-tag">${t}</span>`)
    .join('');

  return `
    <div class="project-card"
         data-project-id="${project.id}"
         data-animate="fade-up"
         data-animate-delay="${index * 70}"
         role="button"
         tabindex="0"
         aria-label="View details for ${project.title}">

      <span class="project-card-number mono muted">
        #${String(index + 1).padStart(3, '0')} / ${project.year}
      </span>

      <h3 class="project-card-title">${project.title}</h3>
      <p class="project-card-desc">${project.shortDesc}</p>

      <div class="project-card-tags">${tags}</div>

      <span class="project-card-cta">
        View details &nbsp;→
      </span>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────────────────
// Modal system
// ─────────────────────────────────────────────────────────────────────────

let currentModal = null;

function openModal(project) {
  // Build modal HTML
  const tags = project.tags
    .map(t => `<span class="project-tag">${t}</span>`)
    .join('');

  const paragraphs = project.fullDesc
    .map(p => `<p>${p}</p>`)
    .join('');

  // Render images only if the project has a modalImages array defined
  // Images are intentionally not shown on the card front - only here in the modal
  const imagesHTML = (project.modalImages && project.modalImages.length)
    ? `<div class="modal-images">
        ${project.modalImages.map(img => `
          <img src="${img.src}"
               alt="${img.alt}"
               class="modal-image ${img.className || 'modal-image--full'}"
               loading="lazy" />
        `).join('')}
      </div>`
    : '';

  const statusInfo = STATUS_LABELS[project.status] || STATUS_LABELS['complete'];

  const backdrop = document.createElement('div');
  backdrop.className = 'project-modal-backdrop';
  backdrop.setAttribute('role', 'dialog');
  backdrop.setAttribute('aria-modal', 'true');
  backdrop.setAttribute('aria-labelledby', 'modal-title');

  backdrop.innerHTML = `
    <div class="project-modal">
      <button class="modal-close" aria-label="Close project details">✕</button>
      <div class="modal-body">
        <p class="modal-label">Personal Project · ${project.year}</p>
        <h2 class="modal-title" id="modal-title">${project.title}</h2>
        <div class="modal-tags">${tags}</div>
        <div class="modal-divider"></div>
        <div class="modal-desc">${paragraphs}</div>
        ${imagesHTML}
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);
  document.body.style.overflow = 'hidden';
  currentModal = backdrop;

  // Focus the close button
  const closeBtn = backdrop.querySelector('.modal-close');
  setTimeout(() => closeBtn?.focus(), 50);

  // Close on backdrop click (not modal content click)
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeModal();
  });

  // Close button
  closeBtn.addEventListener('click', closeModal);

  // Close on Escape
  document.addEventListener('keydown', handleModalKeydown);
}

function closeModal() {
  if (!currentModal) return;
  const modal    = currentModal;
  const inner    = modal.querySelector('.project-modal');

  // Animate out
  modal.style.animation  = 'fadeOut 0.2s ease forwards';
  inner.style.animation  = 'modalOut 0.2s ease forwards';

  setTimeout(() => {
    modal.remove();
    document.body.style.overflow = '';
    currentModal = null;
    document.removeEventListener('keydown', handleModalKeydown);
  }, 200);
}

function handleModalKeydown(e) {
  if (e.key === 'Escape') closeModal();

  // Trap focus inside modal
  if (e.key === 'Tab' && currentModal) {
    const focusable = currentModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}
