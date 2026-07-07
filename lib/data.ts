export const profile = {
  name: "Naragam Gnana Deepika",
  shortName: "Deepika",
  tagline: "I build systems that are secure by design, and easy to trust because you can actually verify them.",
  location: "Avanigadda, Andhra Pradesh, India",
  email: "naragamgnanadeepika@gmail.com",
  github: "https://github.com/GnanadeepikaNaragam",
  linkedin: "https://www.linkedin.com/in/gnana-deepika-naragam-3b2439255/",
  status: "B.Tech CSE Graduate, 2026 \u00b7 Open to full-time SWE / Security roles",
};

export const heroLog = [
  "[SFTS] file watcher initialized \u2713",
  "[SFTS] SHA-256 checksum verified \u2713",
  "[SFTS] AES-128 (Fernet) encryption applied \u2713",
  "[WSMPA] process monitor attached \u2713",
  "[WSMPA] service registry synced \u2713",
  "[VSIR] image index built \u2713",
  "[SYSTEM] integrity check passed \u2713",
  "[SYSTEM] status: open to work \u2713",
];

export const about = {
  paragraphs: [
    "I'm a Computer Science Engineering graduate (Class of 2026) from KL University, specializing in Cybersecurity and Blockchain, with a 9.4 CGPA alongside a concurrent BBA degree.",
    "Most of my project work sits at the intersection of full-stack engineering and applied security. SFTS encrypts and hashes files in transit so you can tell if anything changed along the way; WSMPA watches Windows processes in real time and flags anything that looks off.",
    "I like building the kind of tools where you don't have to just take the system's word for it \u2014 where the state is visible enough that you can check it yourself. That's shown up in my projects so far, and it's the kind of engineering I want to keep doing.",
  ],
  stats: [
    { label: "CGPA", value: "9.4/10" },
    { label: "Rank, NEOCODETHON (DSA)", value: "Top 19" },
    { label: "Certifications", value: "7" },
    { label: "Core stack", value: "Python \u00b7 Flask \u00b7 SQL" },
  ],
};

export const skills = [
  {
    category: "Security",
    items: [
      "AES-128 (Fernet) & SHA-256 cryptography",
      "Secure coding practices",
      "Kali Linux & Burp Suite",
      "File-integrity monitoring",
      "Vulnerability analysis",
    ],
  },
  {
    category: "Full-Stack Engineering",
    items: ["Python, C, DSA", "Flask, Django", "HTML, CSS, JavaScript", "MySQL, PostgreSQL, SQLite", "Git / GitHub"],
  },
  {
    category: "Systems & Networking",
    items: ["Windows internals & APIs", "TCP/IP & Cisco Packet Tracer", "Linux administration", "Watchdog / event-driven monitoring"],
  },
  {
    category: "Cloud & Applied ML",
    items: ["AWS fundamentals", "TensorFlow & Keras", "CNN-based image retrieval", "Blockchain & DeFi fundamentals"],
  },
];

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  problem: string;
  approach: string[];
  challenges: string;
  outcome: string;
  github?: string;
  demo?: string;
  featured: boolean;
};

export const projects: CaseStudy[] = [
  {
    slug: "sfts",
    name: "SFTS \u2014 Secure File Transfer Monitoring System",
    tagline: "Real-time file integrity and encryption, watched end to end.",
    stack: ["Python", "Flask", "SQLite", "Watchdog", "Fernet AES-128", "SHA-256"],
    problem:
      "File transfers are usually a black box: once a file leaves a folder, there's no record of whether it arrived unmodified, or whether it was ever exposed in transit. SFTS was built to close that gap for a monitored directory.",
    approach: [
      "Used Watchdog to observe file-system events in real time and trigger the pipeline the moment a file changes.",
      "Applied SHA-256 hashing before and after transfer, so any modification in transit is provably detectable rather than assumed.",
      "Encrypted file contents with Fernet (AES-128) before storage or transfer, keeping data unreadable outside the intended endpoint.",
      "Layered in rule-based threat detection \u2014 flagging suspicious extensions, double extensions, hidden files, sensitive filenames, and integrity violations \u2014 on top of the core Flask server, filesystem watcher, encryption module, and database layer.",
      "Built a Flask dashboard so the monitoring state, not just raw logs, is something a person can actually look at.",
    ],
    challenges:
      "The hardest part wasn't the cryptography itself \u2014 it was keeping the monitoring layer honest under load: making sure a burst of file events couldn't cause a checksum to be computed on a partially-written file, which would have produced a false integrity failure.",
    outcome:
      "A working full-stack system with a documented, reproducible integrity guarantee: any file that reaches the destination has a verifiable checksum trail, was encrypted for the entire transfer, and passes through a live threat-detection layer.",
    github: "https://github.com/GnanadeepikaNaragam/SFTS",
    featured: true,
  },
  {
    slug: "wsmpa",
    name: "WSMPA \u2014 Windows Service & Process Monitoring Agent",
    tagline: "A lightweight agent that tells you what Windows is actually doing.",
    stack: ["Python", "psutil", "wmi", "win32service", "SQLite"],
    problem:
      "Windows exposes process and service state through APIs that are verbose and hard to act on directly. WSMPA turns that raw state into a structured, queryable log without adding meaningful overhead to the host.",
    approach: [
      "Enumerated processes and services in real time, mapping parent-child process trees and auditing startup services.",
      "Built a severity-scored detection engine that flags suspicious parent-child spawns, blacklisted processes, and unknown services.",
      "Exported structured JSON and plaintext reports, and validated the pipeline end-to-end through a live web-based scan interface.",
      "Structured the codebase specifically for readability, since a monitoring tool that's hard to audit defeats its own purpose.",
    ],
    challenges:
      "Balancing polling frequency against system overhead: too aggressive, and the monitor becomes part of the performance problem it's supposed to catch.",
    outcome:
      "A stable local agent for tracking service/process activity and flagging anomalous behavior, version-controlled and structured for future extension (alerting, remote logging).",
    github: "https://github.com/GnanadeepikaNaragam/WSMPA",
    featured: true,
  },
  {
    slug: "vsir",
    name: "VSIR \u2014 Visual Search & Image Recognition",
    tagline: "Comparing deep learning architectures for image retrieval.",
    stack: ["Python", "TensorFlow", "Keras", "Matplotlib"],
    problem:
      "Given a query image, return visually similar images from a dataset \u2014 and figure out which model architecture is actually worth deploying for that job.",
    approach: [
      "Trained and compared multiple deep learning architectures, including a CNN, on an image classification dataset.",
      "Analyzed accuracy and loss curves across training epochs to evaluate each architecture on its merits rather than assumptions.",
      "Identified the CNN-based model as the strongest performer for this retrieval task.",
      "Used Matplotlib to visualize retrieval quality during iteration, catching failure cases early.",
    ],
    challenges: "Tuning the model and preprocessing pipeline to generalize past the training set rather than overfitting to it.",
    outcome: "A working image-retrieval system, backed by a documented architecture comparison rather than a single untested guess.",
    github: "https://github.com/GnanadeepikaNaragam/VSIR",
    featured: true,
  },
  {
    slug: "js-crawler",
    name: "JS Crawler \u2014 JavaScript Security Analyser",
    tagline: "Scraping and static analysis to catch vulnerable JS before it ships.",
    stack: ["Python", "BeautifulSoup", "TCP/IP"],
    problem: "Manually auditing JavaScript files for known vulnerability patterns doesn't scale.",
    approach: [
      "Used web scraping to crawl and pull JS files for analysis.",
      "Flagged vulnerability patterns against known-risk signatures over TCP/IP-level traffic context.",
    ],
    challenges: "Keeping false positives low enough that the output was actually actionable.",
    outcome: "A working security-scanning tool for identifying vulnerabilities in JavaScript files.",
    github: "https://github.com/GnanadeepikaNaragam/JS-CRAWLER",
    featured: false,
  },
  {
    slug: "online-job-portal",
    name: "Online Job Portal",
    tagline: "A full-stack platform connecting applicants and recruiters.",
    stack: ["Python", "Django/Flask", "SQL"],
    problem: "Give applicants and recruiters a structured, searchable place to post and find roles.",
    approach: ["Modeled job postings, applicants, and applications relationally.", "Built out posting, search, and application flows end to end."],
    challenges: "Keeping the data model flexible enough for different job types without over-engineering it.",
    outcome: "A functional full-stack job portal covering the core recruiter/applicant workflow.",
    github: "https://github.com/GnanadeepikaNaragam/online-job-portal",
    featured: false,
  },
  {
    slug: "hospital-management-system",
    name: "Hospital Management System",
    tagline: "Core patient, appointment, and records workflow, digitized.",
    stack: ["Python", "SQL"],
    problem: "Replace manual patient/appointment record-keeping with a structured system.",
    approach: ["Modeled patients, doctors, and appointments relationally.", "Built CRUD workflows for the core hospital operations."],
    challenges: "Designing a schema that stayed simple while still covering real hospital workflows.",
    outcome: "A working management system covering patient records and appointment scheduling.",
    github: "https://github.com/GnanadeepikaNaragam/HOSPITAL-MANAGEMENT-SYSTEM",
    featured: false,
  },
  {
    slug: "music-streaming-api",
    name: "Music Streaming API",
    tagline: "A backend API for a full-stack music streaming experience.",
    stack: ["Python", "Django", "MySQL"],
    problem: "Build a persistent, structured backend to serve a music streaming/playback client.",
    approach: ["Modeled the media library in MySQL.", "Exposed endpoints for library access and playback state."],
    challenges: "Keeping playback state in sync with the underlying data model.",
    outcome: "A functional backend API supporting a full-stack music streaming application.",
    github: "https://github.com/GnanadeepikaNaragam/Music-streaming-API",
    featured: false,
  },
];

export const experience = [
  {
    role: "Cybersecurity Intern",
    org: "Prodigy InfoTech",
    period: "",
    points: ["Applied cybersecurity fundamentals and practical defensive techniques across multiple hands-on domains."],
  },
  {
    role: "Cloud Virtual Intern",
    org: "AICTE",
    period: "",
    points: ["Developed and implemented cloud-based solutions to improve infrastructure scalability and performance."],
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science Engineering",
    detail: "Specialization: Cybersecurity & Blockchain Technology \u00b7 KL University \u00b7 CGPA 9.4/10",
    period: "Jul 2022 \u2014 May 2026",
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    detail: "Concurrent degree, core business & management strategy",
    period: "Jan 2023 \u2014 Mar 2026",
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner (CLF-C01)",
  "Red Hat Certified Enterprise Application Developer",
  "Juniper Networks Certified Associate (JNCIA-Junos)",
  "Salesforce AI Associate",
  "FinTech Professional Certificate \u2013 4 (Blockchain, DeFi & FinTech)",
  "Automation Anywhere \u2013 RPA Certification",
  "Wipro TalentNext Java Full Stack Certificate",
];

export const achievements = [
  {
    title: "Flipkart GRID 6.0 \u2014 Software Development Track",
    detail: "Led the team through the competition, applying core computer-science fundamentals under time pressure.",
  },
  {
    title: "NEOCODETHON \u2014 Top 19 nationally",
    detail: "Competitive DSA contest in C, ranked nationally for algorithmic problem-solving under constraints.",
  },
  {
    title: "Generative AI Bootcamp \u2014 Outskill",
    detail: "Completed a 3-day Generative AI Bootcamp with Outskill (Skill India recognized).",
  },
  {
    title: "Full Stack Development Workshop \u2014 HCL GUVI",
    detail: "Completed HCL GUVI's Full Stack Development workshop.",
  },
];
