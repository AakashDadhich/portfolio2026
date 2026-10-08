/**
 * PERSONAL PROJECTS CONTENT
 * ──────────────────────────
 * Each object represents one project card on the projects page.
 *
 * To add a new project:
 *   1. Append a new object to the array below.
 *   2. The projects page picks it up automatically - no other file needs editing.
 *
 * Fields:
 *   id             - Unique string identifier (used for DOM targeting)
 *   title          - Project name (shown on card front)
 *   shortDesc      - One-line summary (shown on card front)
 *   fullDesc       - Array of paragraph strings (shown in expanded modal)
 *   tags           - Array of technology / topic tags
 *   status         - "complete" | "in-progress" | "archived"
 *   year           - Year the project was built / last updated
 *   modalImages    - Optional array of { src, alt } objects shown in the modal
 *                    after the description. Only visible when a card is expanded.
 *                    Paths are relative to the site root (e.g. ./public/images/x.png)
 */

export const projects = [
  {
    id:        'personal-knowledge-base',
    title:     'Personal Knowledge Base',
    shortDesc: 'A plain-markdown wiki that an AI agent can read and maintain, so I never have to re-explain my own context to an LLM.',
    fullDesc: [
      "My memory is terrible, and I found myself re-explaining the same context to AI assistants every session: my work history, ongoing projects, preferences and decisions I'd already made. I wanted that knowledge written down once and reusable, in a form both I and an AI agent could work with.",
      "The knowledge base is a folder of small markdown cards with YAML frontmatter, loosely based on Google's Open Knowledge Format (OKF). I write and read it in Obsidian, Git tracks every change, and Claude Code is started inside the folder to answer questions from it. The agent starts at a root index, reads one or two topic indexes, searches, and opens only the handful of cards it needs, which keeps answers accurate and cheap.",
      "Trust is the core design problem. Cards I write are the source of truth, and the agent is never allowed to edit their body. Cards the agent drafts from clipped articles are marked unverified until I approve them, and every claim footnotes the original source, which is kept unchanged. When cards conflict, the agent follows a fixed priority order and tells me about the conflict rather than silently picking one. Every answer cites the cards it used along with their trust level.",
      "The agent also handles the chores: processing an inbox of clipped articles into draft cards, keeping indexes and links current, and running a lint pass for broken links, orphaned cards, invalid frontmatter and stale content. I also built a Claude Code plugin that traces which cards are read for each question, so I can see which knowledge is used most and where lookups fail.",
      "This is actively being built out, starting with my professional background so it can feed into CVs and cover letters.",
    ],
    tags:   ['GenAI', 'Claude Code', 'Markdown', 'Obsidian', 'Git'],
    status: 'in-progress',
    year:   '2026',
  },

  {
    id:        'local-ai-server',
    title:     'Local AI Server',
    shortDesc: 'A self-hosted AI server built mostly from spare parts, running a vision-capable coding model and an on-demand reviewer on two GTX 1060s.',
    fullDesc: [
      "I wanted a private AI assistant that runs entirely on my own hardware, so I built a headless Ubuntu server mostly from parts I already had: an i7-4790K, 32GB of DDR3 and two GTX 1060 6GB cards. Each card is dedicated to one role rather than splitting a single model across both.",
      "The first GPU runs Qwen3.5-4B around the clock through llama.cpp, covering coding, general chat and screenshot understanding in one model. The second runs Gemma 4 E4B on demand as a reviewer. I deliberately chose a different model family for the reviewer, since a second opinion is only useful if its mistakes aren't correlated with the first model's. Open WebUI is the front end, and I wrote a filter function that can be toggled per message to send an answer to the reviewer and append its verdict.",
      "Most of the work was fitting everything into 6GB of VRAM on older Pascal GPUs. I built llama.cpp from source against CUDA 12, since newer CUDA releases dropped support for these cards, and planned a VRAM budget for weights, the vision encoder, context and compute buffers. Testing on real hardware changed several of those plans. Uploading a real image crashed the server, which turned out to be a startup warning I had wrongly assumed was harmless, so the vision encoder now runs on the CPU. I also avoided a known flash-attention crash on Pascal for this model architecture, and capped concurrent requests so memory was not reserved for users that would never exist.",
      "The stack runs as systemd and Docker services and recovers automatically after a reboot. Generation runs at around 26 tokens per second. The core build is complete and I'm now fine-tuning it, mainly looking for a stronger reviewer model: live testing showed the current one approving hallucinated APIs it should have caught, a useful reminder that a model reviewing another model is no substitute for tests.",
    ],
    tags:   ['Self-hosting', 'Local AI', 'llama.cpp', 'Linux', 'Docker'],
    status: 'in-progress',
    year:   '2026',
  },

  {
    id:        'wakana',
    title:     'Wakana - Kana Study App',
    shortDesc: 'A native macOS app for learning hiragana and katakana through active recall, where you type every answer instead of picking from options.',
    fullDesc: [
      "Most kana apps test recognition: they show a character and offer multiple-choice answers. Recognising the right answer in a list is much easier than recalling it, so I kept plateauing. Wakana (若菜) forces recall instead. You see a kana and type its reading, or see a reading and type the kana using the real macOS Japanese input method, so practice mirrors how you'd actually type Japanese.",
      "It's built in Swift and SwiftUI with a full reference chart, configurable practice sessions (in order, randomised or endless) and session-only scoring. It's keyboard-first, so a whole session can run without touching the mouse, and answer checking accepts the common alternative spellings such as shi/si and tsu/tu.",
      "Getting the reference chart right took real work. Columns are grouped into the traditional gojūon layout by detecting vowel resets, which keeps irregular readings like shi, chi and tsu in the correct column, and voiced variants line up under their base columns just like a printed chart.",
      "I built it without a full Xcode install, which shaped the project: it's a Swift Package with a Makefile, and because the standard test runner needs Xcode, I wrote a self-check mode that runs the test suite from the command line. That setup also surfaced a subtle bug where the app, launched as a bare executable, never became a foreground app and silently received no keyboard input. You can view the repo on <u><a href=\"https://github.com/AakashDadhich/wakana-study-app\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a></u>.",
    ],
    tags:   ['Swift', 'SwiftUI', 'macOS', 'Japanese'],
    status: 'in-progress',
    year:   '2026',
  },

  {
    id:        'washi-scrapbook-planner',
    title:     'Washi - Scrapbook Layout Planner',
    shortDesc: 'A native macOS app for planning physical scrapbook pages on a true-to-scale canvas before committing scissors to paper.',
    fullDesc: [
      "Washi is a planning tool rather than a photo editor. You arrange photos, text, decorative borders and stickers on a canvas that matches real scrapbook page dimensions, across single pages and two-page spreads, then export a high-resolution PDF to use as a printing and cutting reference.",
      "Elements can be moved, resized, rotated and grouped, with a decorative border system (squiggly, scalloped and zigzag), a built-in sticker library, full undo and redo, and autosave with crash recovery. Projects are saved in a custom self-contained .washi file format, with photos de-duplicated by SHA-256 hash.",
      "The design decision I'm happiest with is that PDF export reuses the same rendering views as the live canvas, so the exported page matches what's on screen exactly. It was built in Swift and SwiftUI over 16 milestones plus a dedicated edge-case hardening pass, and is fully assembled and code-signed. You can view the repo on <u><a href=\"https://github.com/AakashDadhich/washi-scrapbook-planner\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a></u>.",
    ],
    tags:   ['Swift', 'SwiftUI', 'macOS', 'PDFKit'],
    status: 'complete',
    year:   '2026',
  },

  {
    id:        'layout-collage-app',
    title:     'Layout - Photo Collage App',
    shortDesc: "A native macOS photo collage app inspired by Instagram Stories' Layout feature, scaled up for the desktop.",
    fullDesc: [
      "I wanted the simplicity of Instagram's Layout feature on my Mac. Drop in photos, pick from a catalogue of over 24 grid layouts, adjust the crop and zoom of each cell, tune borders, gutters, corner radius and background colour, then export a JPEG.",
      "All editing is non-destructive: source files are never modified, and each photo's crop is preserved as you switch layouts, aspect ratios or rotate the grid. You can drag cell dividers, swap and shuffle photos, and undo anything, since every change goes through a single path that records history.",
      "As with Washi, the on-screen preview and the exported image share one renderer, so what you see is exactly what you get. Building it gave me real experience with SwiftUI and AppKit interop and non-destructive image editing. You can view the repo on <u><a href=\"https://github.com/AakashDadhich/layout-collage-app\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a></u>.",
    ],
    tags:   ['Swift', 'SwiftUI', 'AppKit', 'macOS'],
    status: 'complete',
    year:   '2026',
  },

  {
    id:        'recon-discord-bot',
    title:     'Recon RSS Discord Bot',
    shortDesc: 'A self-hosted Discord bot that monitors RSS feeds across multiple channels and posts new articles as formatted embeds.',
    fullDesc: [
      "It was becoming a chore to remember to check all the various news sites to stay up to date, from the latest in the cybersecurity industry, world affairs, or even the automotive industry - so I built Recon RSS to handle it automatically.",
      "Using Claude Code as my development environment throughout, I created a bot that lets you subscribe to RSS feeds and route them to channels of your choice within a Discord server, polling every five minutes and posting new articles as formatted embeds with no manual intervention needed.",
      "Rather than relying on RSS timestamps, which are notoriously inconsistent across feeds, I used guid-based deduplication to detect new articles, allowing it to handle feeds with unstable ordering or URLs that mutate after posting without producing duplicate entries. The codebase is split into three Discord cogs with clear responsibilities - a background poller, a feed management interface, and an admin/status layer. This worked well as is, but then I wanted to extend the scope.",
      "Since I was already getting notified about new posts, I wanted to get notified about upcoming cybersecurity meetups in London. However, most sites don't offer native RSS feeds - so I'd need to create my own. To solve this, I installed a self-hosted RSS Bridge instance on my server. Claude helped me write two custom bridges: one for DC4420, which parses their iCal feed into a standard RSS feed, and one for IOActive Events, which scrapes their events page since they don't publish a feed at all. This lets me subscribe to both within Recon and get a notification each time a new event is posted, without having to check each site manually.",
      "The bot runs as a systemd service on a Hetzner VPS, restarting automatically on failure. Feeds auto-pause after three consecutive empty polls, with a per-feed opt-out flag for legitimately quiet sources. The full command set covers adding, removing, and renaming feeds, pausing and resuming feeds, triggering manual polls, and pulling a live status summary - no SSH required for day-to-day use. You can view the repo on <u><a href=\"https://github.com/AakashDadhich/recon-discord-bot\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a></u>.",
    ],
    tags:   ['Python', 'Discord.py', 'GenAI'],
    status: 'complete',
    year:   '2026',
    modalImages: [
      { src: './public/images/Recon-1.png', alt: 'Recon RSS Bot - Discord embed showing a live article post', className: 'modal-image--medium' },
    ],
  },

  {
    id:        'portfolio-2026',
    title:     'Portfolio Website',
    shortDesc: 'A modular, file-based portfolio site built through an iterative conversation with Claude, Anthropic\'s AI assistant.',
    fullDesc: [
      'Having built portfolio websites from scratch in the past (you can view an earlier example on <u><a href="https://github.com/AakashDadhich/portfolio2024-frontend" target="_blank" rel="noopener noreferrer">GitHub</a></u>), I wanted to take a different approach this time around.',
      'With generative AI becoming increasingly prevalent, both as a tool and as something security teams need to think carefully about, I felt it was important to develop a hands-on understanding of how these systems work. As a security engineer, building better guardrails and controls around AI tooling in a professional context requires more than a theoretical understanding; I need to understand how my organisation\'s engineers are using it, what their frustrations are, and strike a balance between usability and security.',
      'This site was designed and built entirely through a conversation with Claude (Anthropic\'s AI assistant), from the initial architecture all the way through to the animations and responsive layout. The content itself, the project descriptions, experience entries, and bio, is my own wording, drawn from previous portfolio sites I\'d written from scratch and my CV. It was more iterative than I expected: describe what I wanted, review the output, push back where it missed the mark, repeat. The result is a modular, file-based static site hosted on GitHub Pages. You can view the repo on <u><a href="https://github.com/AakashDadhich/portfolio2026" target="_blank" rel="noopener noreferrer">GitHub</a></u>.',
    ],
    tags:   ['GenAI', 'GitHub Pages', 'Showcase'],
    status: 'complete',
    year:   '2026',
  },

  {
    id:        'cloud-resume-challenge',
    title:     'Cloud Resume Challenge',
    shortDesc: 'A full-stack cloud project hosting a resume website on AWS, complete with a serverless backend, CI/CD pipeline, and infrastructure-as-code.',
    fullDesc: [
      "The Cloud Resume Challenge tasks you with hosting your CV online using a cloud platform, progressively bolting on cloud features until you've worked with the most common services your chosen provider offers. Although I'd reviewed clients' cloud configurations as a penetration tester, I hadn't had much hands-on exposure to deploying cloud services myself. Having achieved the Associate Cloud Engineer certification for Google Cloud in 2023, this felt like the perfect way to upskill in AWS while practising my coding skills.",
      "The frontend was an HTML/CSS/JavaScript website hosted in an Amazon S3 bucket, served over HTTPS via a CloudFront distribution using a custom domain configured in Route 53. An SSL certificate generated through AWS Certificate Manager - issued for both the root domain and a wildcard subdomain - ensures all traffic was forced through HTTPS.",
      "The backend was a Python Lambda function acting as an API, called on page load to retrieve and increment a visitor counter stored in DynamoDB, with the value displayed on the frontend via JavaScript.",
      "For CI/CD I used GitHub Actions: pushing to the repository automatically synced the files to the S3 bucket via the S3 Sync Action from the GitHub Marketplace, updating the live site without any manual intervention.",
      "The final step was transforming the manually configured infrastructure into code using Terraform. This introduced me to the AWS CLI and IAM best practices, and gave me hands-on experience with infrastructure-as-code.",
    ],
    tags:   ['AWS', 'Terraform', 'CI/CD', 'Python', 'JavaScript'],
    status: 'complete',
    year:   '2024',
    modalImages: [
      { src: './public/images/CRC-HLD.png', alt: 'AWS Cloud Resume Challenge - high level architecture diagram', className: 'modal-image--diagram' },
    ],
  },

  {
    id:        'testssl-csv-parser',
    title:     'Testssl CSV Parser - Python',
    shortDesc: 'Python script that parses large testssl.sh CSV output files into a clean, readable text report organised by host and issue.',
    fullDesc: [
      "testssl.sh is a go-to CLI tool for assessing the security posture of a site's SSL/TLS configuration. When assessing a large scope of hosts, the tool produces verbose CSV files that are time-consuming to work through manually. This Python script parses those output files and produces a neatly formatted text report, organising affected hosts by their identified issues rather than the other way around - making triage significantly faster.",
      "This script is a later, more efficient rewrite of an earlier Bash version. It follows a cleaner structure, handles edge cases more robustly, and produces more readable output. You can view the code on <u><a href=\"https://github.com/AakashDadhich/testssl-parser-python\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a></u>.",
    ],
    tags:   ['Python', 'Scripting', 'Pentesting'],
    status: 'complete',
    year:   '2023',
  },

  {
    id:        'nse-library-search',
    title:     'NSE Library Search',
    shortDesc: "Shell script to quickly search Nmap's NSE script library by name or keyword, saving time during reconnaissance.",
    fullDesc: [
      "Nmap has a large repository of Lua scripts (the Nmap Scripting Engine, or NSE) that extend its functionality significantly. Junior pentesters that I mentored would frequently forget where these were stored on disk, or struggle to identify which script they needed for a given task.",
      "I wrote this short Bash script to wrap the search process in a simple interface - pass it a keyword and it returns matching script names, their file paths, and a brief description of what each does. Small in scope but a genuine time-saver during active assessments. You can view it on <u><a href=\"https://github.com/AakashDadhich/nse-lib-search\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a></u>, along with example usage and output.",
    ],
    tags:   ['Bash', 'Tooling', 'Pentesting'],
    status: 'complete',
    year:   '2023',
  },

  {
    id:        'testssl-log-parser-bash',
    title:     'Testssl Log Parser - Bash',
    shortDesc: 'An earlier Bash script for parsing testssl.sh log output - the precursor to the Python version above.',
    fullDesc: [
      "This is an earlier iteration of my testssl.sh parser, written in Bash before I rewrote it in Python. The code never really left the draft state - it was messy, followed no real best practices, and was not particularly efficient - but it did the job and saved considerable time during assessments.",
      "It now serves as a useful personal benchmark: comparing it to the Python rewrite shows how much my scripting approach matured over the same period. You can view it on <u><a href=\"https://github.com/AakashDadhich/testssl-parser-bash\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a></u>.",
    ],
    tags:   ['Bash', 'Tooling', 'Pentesting'],
    status: 'archived',
    year:   '2022',
  },

  {
    id:        'pentest-directory',
    title:     'Pentest Directory Creator',
    shortDesc: 'Bash script that scaffolds a consistent, tool-organised folder structure at the start of each penetration testing engagement.',
    fullDesc: [
      "At the start of each new engagement, I found myself manually creating the same folder structure every time - directories for Burp Suite output, Nmap scans (split by TCP, UDP, and fast scan), testssl.sh results, and screenshots. This was my first foray into scripting, and I managed to automate that task entirely.",
      "I set a shell alias so that running 'pentest [client] [month]' creates the full structure instantly, naming and sorting it by client and date within my Documents folder. A small quality-of-life improvement that eliminated a repetitive task from the start of every assessment. You can view it on <u><a href=\"https://github.com/AakashDadhich/create-pentest-directory\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a></u>.",
    ],
    tags:   ['Bash', 'Tooling', 'Pentesting'],
    status: 'complete',
    year:   '2022',
  },

  {
    id:        'discord-dungeon-crawler',
    title:     'Dungeon Crawler Discord Bot',
    shortDesc: 'A collaborative dungeon crawler Discord bot built at LincolnHack 2018, where server members vote via reactions to control a character on a procedurally generated map.',
    fullDesc: [
      "Created with a partner during LincolnHack 2018, this project was inspired by 'Twitch Plays Pokémon' but built on Discord using the Discord Bot API (Discord.js). A map is procedurally generated with items and enemies rendered using emojis. The bot posts the map and listens for reactions - once the first reaction is received, a 5-second voting window opens and the direction with the most votes is taken.",
      "When the player runs into an enemy, that enemy is frozen and combat begins - the player can fight through it for score, or navigate around the map collecting items instead. There is a full health and score system tracking progress throughout the run.",
      "It was my first time using JavaScript in depth, and Node.js introduced me to server-side programming in a practical context. It was also one of my first collaborative GitHub experiences - we used GitKraken to manage the repo, which made handling merge conflicts much more approachable under the time pressure of a 24-hour hackathon. You can view the project on <u><a href=\"https://github.com/AakashDadhich/Discord-Dungeon-Crawler\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a></u>.",
    ],
    tags:   ['Node.js', 'Discord.js', 'JavaScript', 'Hackathon'],
    status: 'complete',
    year:   '2018',
    modalImages: [
      { src: './public/images/DDC-1.png',         alt: 'Discord Dungeon Crawler - gameplay screenshot 1', className: 'modal-image--full' },
      { src: './public/images/DDC-2.png',         alt: 'Discord Dungeon Crawler - gameplay screenshot 2', className: 'modal-image--full' },
    ],
  },
];
