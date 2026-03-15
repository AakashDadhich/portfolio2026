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
 */

export const projects = [
  {
    id:        'vuln-pipeline',
    title:     'Automated Vulnerability Pipeline',
    shortDesc: 'End-to-end scanner orchestration that aggregates findings across tools into a single prioritised backlog.',
    fullDesc: [
      'Built a Python-based orchestration layer that schedules and coordinates multiple vulnerability scanners (Nessus, Trivy, OWASP ZAP) and consolidates their output into a normalised finding schema.',
      'Findings are scored using a custom risk model that weighs CVSS base score against real-time exploit availability (sourced from EPSS and CISA KEV), asset criticality, and network exposure - moving teams beyond raw CVSS triage.',
      'A lightweight Flask dashboard surfaces the prioritised backlog with filtering, assignment, and SLA tracking. Integrated with Jira via REST API to automatically create and update remediation tickets.',
      'Deployed as a set of Docker containers on an internal server, with a scheduled GitHub Actions workflow for daily scans and Slack alerting for newly discovered critical findings.',
    ],
    tags:   ['Python', 'Docker', 'Flask', 'OWASP ZAP', 'Nessus', 'Jira API'],
    status: 'complete',
    year:   '2024',
  },
  {
    id:        'aws-security-posture',
    title:     'AWS Security Posture Manager',
    shortDesc: 'Lambda-powered toolkit that continuously audits and auto-remediates dangerous AWS configurations.',
    fullDesc: [
      'A collection of AWS Lambda functions triggered by AWS Config rules to detect and optionally auto-remediate dangerous cloud misconfigurations in real time.',
      'Monitors for overly permissive security group rules (0.0.0.0/0 ingress on sensitive ports), public S3 buckets, IAM policies with wildcard actions, and unencrypted EBS volumes. Findings are published to a centralised SNS topic for team alerting.',
      'Auto-remediation workflows are gated by severity: critical findings (e.g. SSH open to the internet) are remediated immediately with an audit log entry; lower severity findings trigger a Slack notification for human review.',
      'Infrastructure defined entirely in Terraform, enabling reproducible deployment across multiple AWS accounts and easy extension with new Config rules by adding a single module block.',
    ],
    tags:   ['AWS Lambda', 'AWS Config', 'Terraform', 'Python', 'SNS'],
    status: 'complete',
    year:   '2024',
  },
  {
    id:        'siem-dashboard',
    title:     'SIEM Visibility Dashboard',
    shortDesc: 'Custom Kibana dashboards and detection rules for a cloud-native ELK-based SIEM deployment.',
    fullDesc: [
      'Designed and deployed an ELK Stack (Elasticsearch, Logstash, Kibana) SIEM ingesting logs from Windows endpoints (via Winlogbeat), Linux servers (Filebeat), AWS CloudTrail, and network flow data.',
      'Authored a library of Kibana detection rules based on MITRE ATT&CK techniques, covering credential access (T1003), lateral movement (T1021), and defence evasion (T1562). Each rule includes contextual triage guidance and mapped MITRE references.',
      'Built executive and analyst-facing dashboards: the analyst dashboard surfaces raw alert timelines and entity enrichment; the executive dashboard aggregates daily threat summaries, top attacked assets, and mean time to detect/respond metrics.',
      'Documented the full deployment runbook and onboarding guide so the security team can add new log sources and detection rules without deep ELK expertise.',
    ],
    tags:   ['ELK Stack', 'Kibana', 'MITRE ATT&CK', 'Python', 'Winlogbeat'],
    status: 'complete',
    year:   '2023',
  },
  {
    id:        'pentest-toolkit',
    title:     'Penetration Testing Toolkit',
    shortDesc: 'Curated collection of custom Bash and Python scripts that accelerate common pentest workflows.',
    fullDesc: [
      'A personal toolkit developed and refined across five years of penetration testing engagements, covering reconnaissance, enumeration, exploitation assistance, and report generation.',
      'Key modules include: a subdomain and DNS enumeration harness that chains Amass, subfinder, and MassDNS with automatic live-host validation; a web application reconnaissance script that extracts endpoints from JavaScript bundles; and a credential spraying wrapper with rate-limiting and lockout-awareness built in.',
      'A Python-based report template engine takes structured JSON finding data and generates a formatted HTML/PDF report skeleton, reducing reporting time per engagement by approximately 40%.',
      'All tools are containerised with Docker for a clean, reproducible pentest environment that can be spun up on any Linux host in under two minutes.',
    ],
    tags:   ['Python', 'Bash', 'Kali Linux', 'Burp Suite', 'Docker'],
    status: 'in-progress',
    year:   '2023',
  },
  {
    id:        'ctf-lab',
    title:     'Vulnerable Lab Environment',
    shortDesc: 'Docker Compose-based home lab with intentionally vulnerable applications for practice and training.',
    fullDesc: [
      'A self-contained Docker Compose environment that provisions a suite of intentionally vulnerable applications for hands-on security practice and team training exercises.',
      'Includes DVWA, Juice Shop, Metasploitable 3, and several custom mini-challenges targeting specific OWASP Top 10 vulnerabilities (SQL injection, IDOR, XXE, SSRF). Each challenge includes a difficulty rating and optional hint system.',
      'A separate "attack" container provides a pre-configured Kali Linux environment with all common tools installed, isolated on an internal bridge network so the lab cannot accidentally reach the internet.',
      'Used internally to run a series of lunchtime CTF competitions for junior engineers, with a lightweight scoreboard tracking completion per team.',
    ],
    tags:   ['Docker Compose', 'Kali Linux', 'DVWA', 'OWASP', 'CTF'],
    status: 'complete',
    year:   '2022',
  },
  {
    id:        'cicd-dast',
    title:     'CI/CD DAST Integration',
    shortDesc: 'GitHub Actions workflow embedding OWASP ZAP dynamic scanning directly into pull request pipelines.',
    fullDesc: [
      'A reusable GitHub Actions workflow that spins up OWASP ZAP in daemon mode, runs an authenticated spider and active scan against a staging deployment, and parses the findings into structured output.',
      'Findings are bucketed by severity: highs and criticals cause the pipeline to fail with a detailed annotation; mediums post a warning comment on the pull request; lows are logged but non-blocking. This ensures new high-severity vulnerabilities cannot be merged without explicit security sign-off.',
      'A custom Python script normalises ZAP\'s XML output against an ignore-list file maintained in the repository, preventing known false positives or accepted risks from blocking CI indefinitely.',
      'The workflow is published as a composite action, making it trivially reusable across multiple repositories with a single `uses:` reference and a handful of input parameters.',
    ],
    tags:   ['GitHub Actions', 'OWASP ZAP', 'Python', 'DevSecOps', 'YAML'],
    status: 'complete',
    year:   '2024',
  },
  {
    id:        'ir-playbooks',
    title:     'Incident Response Playbook Generator',
    shortDesc: 'Template-driven tool that produces tailored IR playbooks from structured threat scenario data.',
    fullDesc: [
      'A Python CLI tool and Jinja2 template engine that generates incident response playbooks from a library of threat scenario YAML definitions, producing consistent, role-specific response documents in Markdown and PDF formats.',
      'Scenario definitions specify the threat type (ransomware, credential stuffing, supply chain compromise, etc.), affected asset classes, relevant detection signals, and containment/eradication/recovery steps. The tool assembles these into a playbook with appropriate escalation paths, stakeholder contact sections, and post-incident review checklists.',
      'Integrates with Confluence via REST API to automatically publish generated playbooks to the security team\'s knowledge base, keeping documentation in sync with the YAML source of truth.',
      'Used to bootstrap an IR playbook library from scratch, producing 12 scenario playbooks in a single sprint that previously did not exist in the organisation.',
    ],
    tags:   ['Python', 'Jinja2', 'Confluence API', 'YAML', 'Markdown'],
    status: 'complete',
    year:   '2023',
  },
  {
    id:        'network-anomaly',
    title:     'Network Anomaly Detector',
    shortDesc: 'Machine-learning prototype that flags statistically unusual traffic patterns in network flow data.',
    fullDesc: [
      'A research prototype exploring the use of unsupervised machine learning (Isolation Forest, DBSCAN) to detect anomalous patterns in network flow (NetFlow/IPFIX) data without relying on known attack signatures.',
      'Features are engineered from raw flow records: bytes-per-packet ratios, port entropy per source IP, connection duration distributions, and rare destination port combinations. These feed into a sliding-window anomaly scoring pipeline.',
      'Evaluated against publicly available labelled datasets (CICIDS2018) achieving a 91% precision on known attack categories, with a particular strength in detecting beaconing behaviour and port scanning.',
      'Built as a learning project to deepen understanding of ML-based detection approaches and their practical limitations - notably high false-positive rates in environments with unusual but legitimate traffic patterns.',
    ],
    tags:   ['Python', 'scikit-learn', 'Pandas', 'NetFlow', 'Jupyter'],
    status: 'archived',
    year:   '2022',
  },
  {
    id:        'sec-awareness',
    title:     'Security Awareness Platform',
    shortDesc: 'Lightweight internal web app delivering bite-sized security training modules with progress tracking.',
    fullDesc: [
      'A lightweight Flask web application providing short, scenario-based security awareness modules targeted at non-technical staff. Each module presents a realistic situation (phishing email, suspicious USB device, social engineering call) and asks the user to choose the correct response.',
      'The content engine reads module definitions from YAML files, making it straightforward to add or update training content without touching application code. Modules are versioned so staff see updated content when scenarios are refreshed.',
      'A simple admin dashboard shows per-user and per-department completion rates, average scores, and identifies the topics with the most incorrect responses - enabling targeted follow-up training.',
      'Deployed internally via Docker and integrated with Active Directory for single sign-on, removing friction from the training experience and improving completion rates compared to the previous third-party platform.',
    ],
    tags:   ['Python', 'Flask', 'SQLite', 'Docker', 'Active Directory'],
    status: 'complete',
    year:   '2023',
  },
];
