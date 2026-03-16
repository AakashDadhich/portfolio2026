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
        title:  'Security Operations & Vulnerability Management',
        start:  'Oct 2024',
        end:    'Present',
        bullets: [
          'As the organisation\'s first dedicated security engineer, built and scaled a comprehensive security operations programme across hybrid cloud environments, encompassing vulnerability management, threat detection and response, with a core focus on automation.',
          'Owned and maintained vulnerability scanning tooling for infrastructure and applications, improving coverage by 173% cumulatively across hybrid cloud environments (on-prem, AWS, Azure).',
          'Led large-scale remediation initiatives following penetration tests, coordinating engineering and infrastructure teams and validating remediation through retesting.',
          'Contextualised vulnerability findings beyond CVSS by incorporating exploitability, exposure, asset criticality, and compensating controls to enable risk-based remediation decisions.',
          'Designed and implemented enterprise-grade security controls for generative AI tooling across the organisation.',
          'Implemented a centralised SIEM solution improving visibility across endpoints, servers, and cloud platforms.',
          'Developed an automated AWS AMI patching pipeline reducing exposure window by 66%.',
          'Implemented automated AWS Config and Lambda monitoring to detect and remediate dangerous security group rules.',
          'Drove shift-left security initiatives including DAST integration into CI/CD pipelines and secure-by-design development practices.',
          'Managed vulnerability exception workflows and tracked remediation against SOC2/ISO27001 SLAs.',
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
          'Delivered five major cybersecurity epics for a UK government AWS platform, significantly reducing risk posture.',
          'Managed a team of 7 DevSecOps engineers in agile sprints.',
          'Maintained strong stakeholder relationships across organisations.',
          'Conducted NIST Cybersecurity Framework gap analyses across seven national infrastructure business units.',
          'Mentored two digital apprentices transitioning into professional roles.',
        ],
      },
      {
        title:  'Penetration Tester',
        start:  'Sept 2019',
        end:    'Jan 2023',
        bullets: [
          'Conducted internal and external network penetration tests and web application security assessments.',
          'Utilised OWASP Top 10 methodologies and tools including Kali Linux, Burp Suite, Nmap, Bash and Python automation.',
          'Produced technical reports and executive briefings for senior stakeholders.',
          'Mentored three junior graduates through certifications and security assessments.',
        ],
      },
    ],
  },
];
