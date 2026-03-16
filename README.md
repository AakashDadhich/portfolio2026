# Aakash Dadhich — Cybersecurity Portfolio

A modular, file-based portfolio website for a cybersecurity professional. Built with vanilla ES modules + Tailwind-style CSS variables — no build step, no framework dependencies. Deploy anywhere static files can be served.

---

## Table of Contents

1. [Project Architecture](#project-architecture)
2. [How the modular system works](#how-the-modular-system-works)
3. [How to add a new page](#how-to-add-a-new-page)
4. [How to add a new project](#how-to-add-a-new-project)
5. [How to add a certification](#how-to-add-a-certification)
6. [How to add a new component](#how-to-add-a-new-component)
7. [How to update navigation](#how-to-update-navigation)
8. [How to replace the downloadable CV](#how-to-replace-the-downloadable-cv)
9. [How to add a real headshot](#how-to-add-a-real-headshot)
10. [Theme system](#theme-system)
11. [Animation system](#animation-system)
12. [Deployment](#deployment)
13. [Directory reference](#directory-reference)

---

## Project Architecture

```
/
├── index.html                    ← Redirects to /me.html
├── me.html                       ← Landing page (/me)
├── professional-experience.html  ← Experience page
├── personal-projects.html        ← Projects grid page
├── certifications.html           ← Certifications page
├── contact.html                  ← Contact page
│
├── styles/
│   ├── global.css                ← Design tokens, all component styles
│   └── animations.css            ← Keyframes and animation utilities
│
├── config/
│   ├── navigation.js             ← ★ Nav items array (EDIT THIS to add pages to nav)
│   └── site.js                   ← Site-wide metadata, email, CV path, headshot path
│
├── content/
│   ├── experience.js             ← ★ Professional experience data
│   ├── projects.js               ← ★ Personal projects data
│   └── certifications.js         ← ★ Certifications data
│
├── components/
│   ├── header.js                 ← Renders the nav bar + mobile drawer
│   └── footer.js                 ← Renders the site footer
│
├── pages/
│   ├── experience.js             ← Reads experience.js, renders + animates entries
│   ├── projects.js               ← Reads projects.js, renders cards + modal
│   ├── certifications.js         ← Reads certifications.js, renders cert cards
│   └── contact.js                ← Reads site.js, renders contact buttons
│
├── js/
│   ├── init.js                   ← Shared bootstrap (header, footer, theme, animations)
│   ├── theme.js                  ← Light/dark theme toggle + localStorage persistence
│   └── animations.js             ← IntersectionObserver scroll animation system
│
├── utils/
│   └── dates.js                  ← Date formatting helpers
│
└── public/
    ├── cv.pdf                    ← ★ Replace this file to update the downloadable CV
    └── headshot.jpg              ← ★ Drop your photo here (see instructions below)
```

**★ marks files you'll edit most frequently to add content.**

---

## How the modular system works

The architecture separates concerns across four layers:

| Layer | Location | Purpose |
|---|---|---|
| **Content** | `content/` | Pure data — arrays of objects. No HTML. |
| **Page logic** | `pages/` | Reads content, builds HTML strings, wires interactions |
| **Components** | `components/` | Reusable UI fragments (header, footer) |
| **Shared systems** | `js/` | Theme, animations, init — run on every page |

Every HTML page does three things:
1. Loads `js/init.js` (injects header/footer, sets up theme and animations)
2. Loads its page-specific module from `pages/` (renders content into a mount point)
3. Sets `data-page="<pagename>"` on `<body>` so the active nav link is highlighted

---

## How to add a new page

**Step 1 — Create the HTML file**

Copy an existing page (e.g. `contact.html`) and update:
- `<title>` tag
- `data-page` attribute on `<body>` (choose a unique key, e.g. `"tools"`)
- The `<h1>` and page description
- The mount point `id` (e.g. `id="tools-root"`)
- The `<script>` tag pointing to your new page module

```html
<!-- tools.html -->
<body data-page="tools">
  <div id="site-nav"></div>
  <main id="main-content" class="page-content">
    <div class="container">
      <div id="tools-root"></div>
    </div>
  </main>
  <div id="site-footer"></div>
  <script type="module" src="./js/init.js"></script>
  <script type="module" src="./pages/tools.js"></script>
</body>
```

**Step 2 — Create the page module** (optional, only if you have dynamic content)

```js
// pages/tools.js
const root = document.getElementById('tools-root');
root.innerHTML = '<p>Your content here</p>';
```

**Step 3 — Add to navigation** (optional)

See [How to update navigation](#how-to-update-navigation).

That's it. No other files need editing.

---

## How to add a new project

Open `content/projects.js` and append a new object to the `projects` array:

```js
{
  id:        'my-new-project',          // unique string, no spaces
  title:     'My New Project',
  shortDesc: 'One sentence shown on the card.',
  fullDesc: [
    'First paragraph of the detailed description.',
    'Second paragraph — appears in the expanded modal.',
  ],
  tags:   ['Python', 'AWS', 'Docker'],  // first 3 shown on card, all shown in modal
  status: 'complete',                   // 'complete' | 'in-progress' | 'archived'
  year:   '2025',
},
```

The projects page picks up the new entry automatically. No other file needs editing.

---

## How to add a certification

Open `content/certifications.js` and append to the `certifications` array:

```js
{
  provider: 'Offensive Security',
  name:     'Offensive Security Certified Professional (OSCP)',
  date:     '2021-06',    // ISO format: YYYY-MM
  expires:  null,         // null = does not expire
},
{
  provider: 'CompTIA',
  name:     'Security+',
  date:     '2019-09',
  expires:  '2022-09',    // Past date = renders with "Expired" badge + muted styling
},
```

Active certs appear first (sorted automatically). Expired certs appear dimmed at the bottom.

---

## How to add a new component

1. Create a new file in `components/`, e.g. `components/skill-bar.js`
2. Export a function that returns an HTML string:

```js
// components/skill-bar.js
export function renderSkillBar(skill, percent) {
  return `
    <div class="skill-bar">
      <span class="skill-name">${skill}</span>
      <div class="skill-track">
        <div class="skill-fill" style="width:${percent}%"></div>
      </div>
    </div>
  `;
}
```

3. Import and use it in any page module:

```js
import { renderSkillBar } from '../components/skill-bar.js';
root.innerHTML = renderSkillBar('Penetration Testing', 90);
```

4. Add styles to `styles/global.css`.

---

## How to update navigation

Open `config/navigation.js`. The `navItems` array is the single source of truth for the nav bar.

```js
export const navItems = [
  { label: '/me',           href: './me.html',                      page: 'me'             },
  { label: 'Experience',    href: './professional-experience.html',  page: 'experience'     },
  { label: 'Projects',      href: './personal-projects.html',        page: 'projects'       },
  { label: 'Certifications',href: './certifications.html',           page: 'certifications' },
  { label: 'Contact',       href: './contact.html',                  page: 'contact'        },
  // Add new pages here ↓
  { label: 'Tools',         href: './tools.html',                    page: 'tools'          },
];
```

- `label` — text shown in the nav bar
- `href`  — relative path to the HTML file
- `page`  — must match the `data-page` attribute on that page's `<body>` tag

The header component (`components/header.js`) reads this array at runtime. No other file needs editing.

---

## How to replace the downloadable CV

1. Replace the file at `public/cv.pdf` with your updated CV, keeping the same filename.

**To change the filename:**
1. Place the new file at `public/my-new-cv.pdf`
2. Open `config/site.js` and update the `cvPath`:
   ```js
   cvPath: './public/my-new-cv.pdf',
   ```

The contact page reads `cvPath` from `site.js` — no other edits needed.

---

## How to add a real headshot

1. Place your photo at `public/headshot.jpg`
   - Recommended: square image, minimum 320×320px, face centred
   - CSS applies a circular crop automatically

2. Open `me.html` and replace the placeholder element:

```html
<!-- Replace this: -->
<div class="me-headshot-placeholder" aria-label="Aakash Dadhich">AD</div>

<!-- With this: -->
<img src="./public/headshot.jpg" alt="Aakash Dadhich" class="me-headshot" />
```

---

## Theme system

The site ships with dark mode by default. The user's preference is saved in `localStorage`.

Themes are implemented entirely via CSS custom properties on `:root` (dark defaults) and `[data-theme="light"]` overrides. Every colour reference in the CSS uses a variable — switching theme is instantaneous.

To change the accent colour, update `--accent` in `styles/global.css`:
```css
:root {
  --accent: #3ddc84;  /* change this */
}
```

---

## Animation system

**Scroll animations** (`js/animations.js`):
- Add `data-animate="fade-up"` (or `fade-in`, `fade-left`) to any element
- Optional delay: `data-animate-delay="200"` (milliseconds)
- The IntersectionObserver adds `.is-visible` when the element enters the viewport
- The observer then **disconnects** — animations fire **once only per page load**

**Experience sequential animation** (`pages/experience.js`):
- Each company card observes the viewport
- When a card enters view, its `[data-seq]` children animate in sequence
- Timing: company header → role titles → bullet points (cascading, one by one)
- Mimics progressive text reveal

**Typewriter animation** (`js/typewriter.js`):
- Runs only on `me.html` — loaded via a separate `<script>` tag on that page
- Cycles through the `TITLES` array in that file, typing and backspacing each title with a blinking cursor
- To add, remove, or reorder titles: edit the `TITLES` array at the top of `js/typewriter.js`
- Timing constants (`TYPE_SPEED`, `DELETE_SPEED`, `PAUSE_AFTER`, `PAUSE_BEFORE`) are all defined at the top of the same file for easy tuning

**Modal animation** (`styles/animations.css`):
- `@keyframes modalIn` — scale + translate spring entrance
- `@keyframes modalOut` — fast fade-out on close
- Both driven by CSS classes, no JS animation library needed

---

## Deployment

The site is plain static HTML + ES modules. It works with any static host:

**Local development** (requires a local server for ES modules to work):
```bash
# Python
python3 -m http.server 3000

# Node
npx serve .
```

**Production** — upload the entire directory to:
- Netlify / Vercel — drag and drop or connect a Git repo
- GitHub Pages — push to a `gh-pages` branch
- AWS S3 + CloudFront — upload files, set `index.html` as default
- Any web server (Nginx, Apache) — serve the directory as static files

> **Note on ES modules:** Browsers require files to be served over HTTP (not `file://`) for `import` statements to work. Always use a local server during development.

---

## Directory reference

| Path | What to edit | When |
|---|---|---|
| `config/navigation.js` | Add/remove/reorder nav items | Adding a page to the nav |
| `config/site.js` | Name, email, CV path, headshot | Updating contact info |
| `content/experience.js` | Add/edit companies and roles | Updating work history |
| `content/projects.js` | Add/edit projects | New personal project |
| `content/certifications.js` | Add/edit certifications | New cert achieved |
| `public/cv.pdf` | Replace the file | Updated CV |
| `public/headshot.jpg` | Replace the file | New profile photo |
| `styles/global.css` | Design tokens, component styles | Restyling the site |
| `me.html` | Bio text, stats | Updating the about page |
| `js/typewriter.js` | `TITLES` array and timing constants | Changing the typewriter job titles or speed |
| `components/footer.js` | Footer links and copyright text | Updating footer content |

### Font stack

The heading font is **Outfit** (Google Fonts), loaded via `@import` in `styles/global.css`. Body text uses **Karla** and code/labels use **IBM Plex Mono**. To change any of these, update both the `@import` URL and the corresponding `--font-*` custom property in `:root`.
