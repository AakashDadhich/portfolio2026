/**
 * NAVIGATION CONFIG
 * ─────────────────
 * This is the single source of truth for the site navigation.
 *
 * To add a new page to the nav:
 *  1. Add an entry to the navItems array below
 *  2. Create the corresponding HTML file in the root (e.g. my-page.html)
 *  3. That's it - the header component reads this file automatically
 *
 * Fields:
 *   label  - Text shown in the nav bar
 *   href   - Relative path to the HTML file
 *   page   - Unique key that matches the data-page attribute on the <body> tag
 *             of the corresponding HTML file (used to highlight the active link)
 */

export const navItems = [
  {
    label: '/me',
    href:  './me.html',
    page:  'me',
  },
  {
    label: 'Experience',
    href:  './professional-experience.html',
    page:  'experience',
  },
  {
    label: 'Projects',
    href:  './personal-projects.html',
    page:  'projects',
  },
  {
    label: 'Certifications',
    href:  './certifications.html',
    page:  'certifications',
  },
  {
    label: 'Contact',
    href:  './contact.html',
    page:  'contact',
  },
];
