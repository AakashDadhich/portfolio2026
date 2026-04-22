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
    id:        'recon-discord-bot',
    title:     'Recon RSS Discord Bot',
    shortDesc: 'A self-hosted Discord bot that monitors RSS feeds across multiple channels and posts new articles as formatted embeds.',
    fullDesc: [
      "I was tired of manually trawling through a dozen news sites to keep up with the topics I care about most - cybersecurity, tech, and world news - so I built Recon RSS to handle it automatically. Using Claude Code as my development environment throughout, the bot lets you subscribe to RSS feeds and route them to channels of your choice within your own Discord server, polling every five minutes and posting new articles as formatted embeds with no manual intervention needed.",
      "Rather than relying on RSS timestamps, which are notoriously inconsistent across feeds, I used a position-based approach to detect new articles: the bot tracks the URL of the last article it posted per feed, and anything sitting above that in the current list is treated as new. The codebase is split into three Discord cogs with clear responsibilities - a background poller, a feed management interface, and an admin/status layer. A few real-world quirks surfaced during testing: some feeds embed raw HTML in their summaries, which Discord renders as literal tags, and Discord fires a separate notification event for file attachments. I was able to identify the cause of both issues and fix them cleanly.",
      "The bot runs as a systemd service on a Hetzner VPS, restarting automatically on failure. The full command set covers adding, removing, and renaming feeds, pausing and resuming channels, triggering manual polls, and pulling a live status summary - no SSH required for day-to-day use. You can view the repo on <u><a href=\"https://github.com/AakashDadhich/recon-discord-bot\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a></u>.",
    ],
    tags:   ['Python', 'Discord.py', 'GenAI'],
    status: 'complete',
    year:   '2026',
    modalImages: [
      { src: './public/images/Recon-1.png', alt: 'Recon RSS Bot - Discord embed showing a live article post', className: 'modal-image--full' },
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
