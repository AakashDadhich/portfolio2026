/**
 * PROFESSIONAL EXPERIENCE CONTENT
 * ─────────────────────────────────
 * Each entry represents one company. Multiple roles at the same
 * company are grouped under the same entry's `roles` array.
 *
 * To add a new company:  append a new object to the array.
 * To add a new role:     append to an existing company's `roles` array.
 *
 * The page (pages/experience.js) reads this file and renders it automatically.
 * You do not need to touch any layout or component files.
 *
 * Fields:
 *   company       - Company display name
 *   location      - Office location
 *   tenure        - Optional human-readable total tenure at the company
 *   roles[]       - Array of role objects
 *     .title      - Job title
 *     .start      - Start date string, e.g. "Sept 2019"
 *     .end        - End date string, e.g. "Jan 2023" or "Present"
 *     .bullets[]  - Array of responsibility strings
 */

export const experience = [
  {
    company:  'TradingHub',
    location: 'London, UK',
    tenure:   'Oct 2024 – Present',
    roles: [
      {
        title:  'Cyber Security Engineer (SecOps, Vuln Mgmt, AI Sec)',
        start:  'Oct 2024',
        end:    'Present',
        bullets: [
          'As the organisation\'s first dedicated security engineer, extended and scaled a comprehensive security operations programme across hybrid cloud environments, encompassing vulnerability management, threat detection and response, with a core focus on automation.',
          'Championing AI security across the organisation, implementing controls and guardrails for safe AI adoption aligned to ISO 42001.',
          'Designing secure cloud environments for AI agents and defining security frameworks for the creation of generative AI products covering data handling, input sanitisation and output context grounding.',
          'Building AI-assisted automation workflows for alert enrichment and triage, accelerating incident response times and enabling a lean team to handle higher alert volumes with less manual overhead.',
          'Implemented a centralised SIEM and owned vulnerability scanning tooling across hybrid cloud environments (on-prem, AWS, Entra ID), driving a 173% improvement in scanning coverage and significantly enhancing visibility across endpoints, servers, and cloud platforms.',
          'Deployed Conditional Access Policies in Entra ID enforcing adaptive MFA tiers, restricting corporate device access, and automating responses to risky sign-ins, extending out-of-hours coverage for a lean team.',
          'Designed enhanced email security workflows to detect and prevent misdirected emails and inadvertent data loss, ensuring outbound controls correctly aligned with the organisation\'s data classification and reducing the risk of sensitive information leakage.',
          'Led large-scale remediation initiatives following vulnerability scanner and penetration test findings, coordinating engineering and infrastructure teams and validating remediation through retesting.',
          'Contextualised vulnerability findings beyond CVSS by incorporating exploitability, exposure, asset criticality, and compensating controls to enable risk-based remediation decisions.',
          'Centralised vulnerability management within the organisation\'s ticketing system to disseminate remediation tasks to relevant engineering and infrastructure teams, establishing regular cadence meetings to track progress, surface blockers, and maintain accountability against InfoSec SLAs.',
          'Managed vulnerability exception workflows and tracked remediation against SOC 2/ISO 27001 SLAs.',
          'Actively engaged with the wider security community through industry tech talks, conferences, and threat intelligence sharing, applying emerging research and attacker techniques to proactively harden the organisation\'s defences.',
        ],
      },
    ],
  },

  {
    company:  'PA Consulting',
    location: 'London, UK',
    tenure:   'Sept 2019 – Oct 2024',
    roles: [
      {
        title:  'Cyber Security Consultant & Penetration Tester',
        start:  'Jan 2023',
        end:    'Oct 2024',
        bullets: [
          'Managed complex stakeholder relationships across government, client, and third-party organisations, communicating risk posture to C-suite and non-technical senior stakeholders, translating technical findings into business impact, and driving alignment on remediation priorities under competing organisational pressures.',
          'Conducted NIST Cybersecurity Framework gap analyses spanning IT and OT environments across seven critical national infrastructure business units, produced prioritised remediation roadmaps and presented findings to senior leadership.',
          'Led a team of 7 DevSecOps engineers across agile sprints, delivering five major cybersecurity epics for a UK government AWS platform and significantly reducing its risk posture.',
          'Mentored two digital apprentices transitioning into professional roles.',
        ],
      },
      {
        title:  'Penetration Tester',
        start:  'Sept 2019',
        end:    'Jan 2023',
        bullets: [
          'Conducted infrastructure, web application, and cloud penetration tests across a range of client environments, covering internal and external attack surfaces for clients spanning financial services, government, and the energy sector.',
          'Aligned testing methodology against industry frameworks including MITRE ATT&CK, OWASP Top 10, and CHECK/CREST standards, leveraging tooling such as Burp Suite, Nmap, Kali Linux, and custom Bash and Python automation scripts.',
          'Presented technical findings and executive briefings to senior stakeholders across client organisations, translating complex vulnerabilities into business risk; adjusted severity ratings and remediation priority based on contextual factors such as compensating controls, exploitability, and asset criticality rather than raw CVSS scores alone.',
          'Mentored three junior graduates through training, certifications, and their initial security assessments.',
        ],
      },
    ],
  },
];
