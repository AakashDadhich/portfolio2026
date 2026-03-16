/**
 * TYPEWRITER ANIMATION
 * ─────────────────────
 * Cycles through an array of job titles with a terminal-style
 * type-and-backspace animation and a blinking cursor.
 *
 * To add or change the titles, edit the TITLES array below.
 * The sequence is randomised — each new title is picked randomly
 * from the remaining options so none repeats consecutively.
 *
 * Timing constants can be tuned at the bottom of this file.
 */

// ── Titles to cycle through ───────────────────────────────────────────────
// Add, remove, or reorder freely. The first title always appears first;
// subsequent picks are random (no consecutive repeats).
const TITLES = [
  'Security Engineer',
  'Penetration Tester',
  'Vulnerability Manager',
  'Cloud Security Engineer',
  'Security Automation Builder',
  'SIEM Architect',
];

// ── Timing (milliseconds) ─────────────────────────────────────────────────
const TYPE_SPEED    = 68;   // delay between each character typed
const DELETE_SPEED  = 38;   // delay between each character deleted (faster feels snappier)
const PAUSE_AFTER   = 2200; // how long the complete title stays visible before backspacing
const PAUSE_BEFORE  = 320;  // pause after fully deleted, before typing the next title

// ─────────────────────────────────────────────────────────────────────────
// Engine — no need to edit below this line
// ─────────────────────────────────────────────────────────────────────────

const el = document.getElementById('typewriter-text');
if (!el) throw new Error('typewriter-text element not found — is this running on me.html?');

let currentIndex = 0;
let lastIndex     = -1;

/**
 * Pick the next title at random, never repeating the previous one.
 */
function pickNext() {
  if (TITLES.length === 1) return 0;
  let next;
  do { next = Math.floor(Math.random() * TITLES.length); }
  while (next === lastIndex);
  return next;
}

/**
 * Type out a string character by character.
 * Returns a promise that resolves when typing is complete.
 */
function typeString(str) {
  return new Promise(resolve => {
    let i = 0;
    function step() {
      if (i > str.length) { resolve(); return; }
      el.textContent = str.slice(0, i);
      i++;
      setTimeout(step, TYPE_SPEED);
    }
    step();
  });
}

/**
 * Delete the current string character by character.
 * Returns a promise that resolves when the element is empty.
 */
function deleteString() {
  return new Promise(resolve => {
    function step() {
      const current = el.textContent;
      if (current.length === 0) { resolve(); return; }
      el.textContent = current.slice(0, -1);
      setTimeout(step, DELETE_SPEED);
    }
    step();
  });
}

/**
 * Simple promise-based delay.
 */
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Main animation loop — runs indefinitely.
 */
async function run() {
  // Start with the first title (not random) so the page always
  // opens on something sensible
  await wait(600); // brief pause before the first type starts
  await typeString(TITLES[currentIndex]);
  lastIndex = currentIndex;

  while (true) {
    await wait(PAUSE_AFTER);
    await deleteString();
    await wait(PAUSE_BEFORE);

    currentIndex = pickNext();
    lastIndex    = currentIndex;
    await typeString(TITLES[currentIndex]);
  }
}

run();
