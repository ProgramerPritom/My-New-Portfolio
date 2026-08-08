export const profile = {
  name: 'Badruzzaman Pritom',
  firstName: 'Badruzzaman',
  role: 'Full Stack Developer & AI Engineer',
  tagline: 'Engineering Scalable Web Apps, Distributed Systems & Agentic AI',
  headline:
    'I build high-throughput microservices, real-time event streams, and autonomous AI agents.',
  bio: 'Full Stack Developer & AI Engineer with 3+ years of production experience across React, Next.js, Node.js, and Distributed Architectures. Currently engineering scalable web platforms, RAG pipelines, and automated agent workflows at Glow Radius.',
  email: 'badruzzamanpritom@gmail.com',
  location: 'Dhaka, Bangladesh',
  phone: '01767026831',
  education: 'BSc in Computer Science & Engineering · DIU (2022–2026)',
  cvUrl: 'https://drive.google.com/uc?export=download&id=1PnHEYsV7LeFLyqDr3aGtU2lZyd3wnx4u',
  cvDriveUrl: 'https://drive.google.com/file/d/1PnHEYsV7LeFLyqDr3aGtU2lZyd3wnx4u/view?usp=drive_link',
  socials: {
    github: 'https://github.com/ProgramerPritom',
    linkedin: 'https://www.linkedin.com/in/badruzzamanpritom',
    portfolio: 'https://protfolio-badruzzamanpritom.netlify.app',
  },
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { value: '3+', label: 'Years Experience' },
  { value: '2', label: 'Companies' },
  { value: '20+', label: 'AI & Automations' },
]

export const profileHighlights = [
  {
    title: 'Full-Stack & Microservices',
    text: 'Production React, Next.js, Node.js & distributed event-driven systems (Kafka, Redis, BullMQ).',
  },
  {
    title: 'Agentic AI & RAG Engineering',
    text: 'Self-orchestrating AI agents, LangChain pipelines, Pinecone vector search & custom LLM tools.',
  },
  {
    title: 'Automation & Workflow Architect',
    text: 'Enterprise scraping (Cheerio), N8N / Make.com pipelines, GCP Cloud Build & Chrome Extensions.',
  },
]

export const journey = [
  {
    phase: 'Present',
    period: 'Sept 2022 — Present',
    title: 'Full Stack Software Developer & AI Engineer',
    company: 'Glow Radius',
    focus: 'Full-Stack & AI Systems',
    accent: 'emerald',
    icon: 'brain',
    description:
      'Engineered scalable web applications, RAG pipelines, and automated business workflows. Built REST APIs with Node.js/Express, integrated OpenAI GPT & Gemini, and automated lead & CRM flows.',
    highlights: [
      'Built LangChain & Pinecone RAG pipelines for context-aware AI',
      'Automated marketing & sales workflows with N8N, webhooks & microservices',
      'Shipped full-stack React & Next.js production platforms',
    ],
  },
  {
    phase: 'Phase 02',
    period: 'Jan 2024 — Feb 2025',
    title: 'Frontend Developer',
    company: 'Innovation Information System Ltd.',
    focus: 'Frontend & SaaS',
    accent: 'cyan',
    icon: 'palette',
    description:
      'Crafted responsive, high-performance user interfaces for production SaaS platforms using React and JavaScript. Collaborated in Git-driven agile sprints to ship client-facing features.',
    highlights: [
      'Built SaaS frontend modules with pixel-perfect responsive layouts',
      'Optimized component rendering performance & UI accessibility',
      'Integrated real-time state management using Redux & RTK',
    ],
  },
  {
    phase: 'Phase 01',
    period: '2022 — 2026',
    title: 'BSc in Computer Science & Engineering',
    company: 'Dhaka International University',
    focus: 'Computer Science',
    accent: 'purple',
    icon: 'server',
    description:
      'Mastered core computer science fundamentals, data structures, algorithms, database systems, software design patterns, and high-throughput event streaming systems (Apache Kafka).',
    highlights: [
      'Deep focus on Distributed Systems & Software Engineering',
      'Hands-on experience with Kafka streaming & DB query optimization',
      'Built 15+ full-stack and AI automation practice applications',
    ],
  },
]

export const skillGroups = [
  {
    label: 'Event Streaming & Microservices',
    accent: 'purple',
    icon: 'server',
    tagline: 'High-throughput real-time architecture & data pipelines',
    skills: [
      {
        name: 'Apache Kafka',
        level: 88,
        mastery: 'Specialist',
        description: 'Event-driven streaming, pub/sub topics, message queuing & microservice event orchestration.',
      },
      {
        name: 'Node.js & Express',
        level: 94,
        mastery: 'Expert',
        description: 'High-performance REST APIs, event loops, middleware design & server architecture.',
      },
      {
        name: 'PostgreSQL & MongoDB',
        level: 88,
        mastery: 'Specialist',
        description: 'Relational & document databases, window functions, indexing & aggregation pipelines.',
      },
      {
        name: 'Redis & BullMQ',
        level: 85,
        mastery: 'Specialist',
        description: 'In-memory caching, message queues, rate limiting & asynchronous background jobs.',
      },
      {
        name: 'Microservices Architecture',
        level: 90,
        mastery: 'Expert',
        description: 'Decoupled services, API Brokers, IAM controllers & event-driven inter-service communication.',
      },
    ],
  },
  {
    label: 'AI & Agentic Automation',
    accent: 'emerald',
    icon: 'brain',
    tagline: 'Autonomous agents, RAG, and workflow engines',
    skills: [
      {
        name: 'LangChain & RAG',
        level: 90,
        mastery: 'Expert',
        description: 'Retrieval-Augmented Generation with Pinecone vector DBs for context-grounded AI.',
      },
      {
        name: 'OpenAI GPT & Gemini',
        level: 95,
        mastery: 'Expert',
        description: 'LLM API integration, prompt engineering, few-shot reasoning & tool calling.',
      },
      {
        name: 'N8N & Make.com',
        level: 92,
        mastery: 'Expert',
        description: 'Complex multi-step workflow automation, webhooks & CRM/Email integration.',
      },
      {
        name: 'Cheerio Scraping',
        level: 88,
        mastery: 'Specialist',
        description: 'Automated data scraping, business enrichment servers & lead intelligence pipelines.',
      },
    ],
  },
  {
    label: 'Frontend & UI Craft',
    accent: 'cyan',
    icon: 'sparkle',
    tagline: 'Modern responsive web applications & design systems',
    skills: [
      {
        name: 'React & Next.js',
        level: 95,
        mastery: 'Expert',
        description: 'Full-stack React, Server Components, SSR/SSG, state management & App Router.',
      },
      {
        name: 'TypeScript & JavaScript',
        level: 92,
        mastery: 'Expert',
        description: 'End-to-end type safety, modern ESNext features & modular code design.',
      },
      {
        name: 'Redux & RTK',
        level: 88,
        mastery: 'Specialist',
        description: 'Global state management, async thunks & centralized client cache handling.',
      },
    ],
  },
  {
    label: 'Cloud, Infrastructure & Integrations',
    accent: 'purple',
    icon: 'server',
    tagline: 'Cloud deployment, edge networks, messaging APIs & analytics',
    skills: [
      {
        name: 'Cloudflare & Azure',
        level: 86,
        mastery: 'Specialist',
        description: 'Edge workers, DNS, CDN performance optimization & Azure cloud service management.',
      },
      {
        name: 'Twilio & Messaging APIs',
        level: 88,
        mastery: 'Specialist',
        description: 'Automated SMS, WhatsApp messaging, webhook alerts & multi-channel notifications.',
      },
      {
        name: 'Firebase & BigQuery',
        level: 85,
        mastery: 'Specialist',
        description: 'Realtime database, Firebase Auth, storage & large-scale BigQuery data analytics.',
      },
      {
        name: 'Cold Emailing & N8N Webhooks',
        level: 90,
        mastery: 'Expert',
        description: 'Automated lead outreach sequences, webhooks & CRM sync engines.',
      },
      {
        name: 'GCP Cloud Build & Docker',
        level: 82,
        mastery: 'Proficient',
        description: 'CI/CD pipeline automation, containerization & Google Cloud infrastructure.',
      },
    ],
  },
]

export const marqueeSkills = [
  'Apache Kafka',
  'React',
  'Next.js',
  'Node.js',
  'LangChain',
  'RAG Pipelines',
  'OpenAI GPT',
  'TypeScript',
  'Express.js',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'BullMQ',
  'N8N',
  'Make.com',
  'Cloudflare',
  'Azure',
  'Twilio',
  'Firebase',
  'BigQuery',
  'Cheerio',
  'Tailwind CSS',
  'Docker',
]

export const projects = [
  {
    title: 'B2B GTM Agent & Microservices Engine',
    category: 'AI & Microservices',
    problem: 'Enterprise clients needed automated AI agents to enrich CRM accounts, run LinkedIn prospecting, and trigger VideoSDK calling.',
    solution: 'Designed GlowRadius GTM platform with autonomous tool-using agent runtimes, API broker, and microservice controllers.',
    tags: ['React', 'Node.js', 'Microservices', 'LangChain', 'GCP'],
    accent: 'cyan',
    span: 'lg',
    metrics: 'Production SaaS',
    image: '/glowradius-agent.png',
    liveUrl: 'https://app.staging.glowradius.com',
    github: null, // Proprietary enterprise app
  },
  {
    title: 'Shikhsha AI — Learning Platform',
    category: 'EdTech / AI (RAG)',
    problem: 'Students & job seekers struggled to navigate vast study materials and get contextual, instant answers.',
    solution: 'Built a RAG educational platform combining LangChain, OpenAI GPT, and Pinecone vector database for grounded academic Q&A.',
    tags: ['Next.js', 'LangChain', 'Pinecone', 'OpenAI', 'Tailwind'],
    accent: 'emerald',
    span: 'lg',
    metrics: 'Featured Platform',
    image: '/shikhsha-ai.png',
    liveUrl: 'https://github.com/ProgramerPritom/ai-powered-learning-platform',
    github: 'https://github.com/ProgramerPritom/ai-powered-learning-platform',
  },
  {
    title: 'Composite AI Automation Architecture',
    category: 'Workflow Automation',
    problem: 'Manual prospect data extraction and multi-app data pipelines swallowed 30+ hours weekly for sales operations.',
    solution: 'Engineered an n8n macro orchestration engine with OpenAI GPT, Node.js scraping servers (Contabo + Queue), and GCS storage.',
    tags: ['N8N', 'Node.js', 'OpenAI', 'Google Cloud', 'Webhooks'],
    accent: 'purple',
    span: 'md',
    metrics: 'Macro System',
    image: '/composite-automation.png',
    liveUrl: '#contact',
    github: null, // Enterprise automation pipeline
  },
  {
    title: 'Dream Motors — E-Commerce Engine',
    category: 'E-Commerce Marketplace',
    problem: 'Automotive retail platforms required fast inventory catalog search, cart management, and scalable order processing.',
    solution: 'Developed a full-stack multi-vendor marketplace with React/Next.js client, REST server implementation, and Firebase hosting.',
    tags: ['Next.js', 'React', 'Node.js', 'Firebase', 'Redux'],
    accent: 'cyan',
    span: 'md',
    metrics: 'Full-Stack Engine',
    image: '/dream-motors.png',
    liveUrl: 'https://dream-motor-garage.web.app/',
    github: 'https://github.com/ProgramerPritom/multi-vendon_E-commerce_nextJs',
  },
  {
    title: 'Creative Cube BD — Interior Studio',
    category: 'Creative Studio Platform',
    problem: 'Luxury architectural design studio needed a high-end, animated showcase platform for commercial interior projects.',
    solution: 'Built Creative Cube BD platform with Next.js, dark mode aesthetic, category filtering, and smooth Framer Motion interactions.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    accent: 'purple',
    span: 'md',
    metrics: 'Production Site',
    image: '/creative-cube.png',
    liveUrl: 'https://creativecubebd.com/',
    github: 'https://github.com/ProgramerPritom/creativeCubeNextjs',
  },
  {
    title: 'Kafka Event Streaming Architecture',
    category: 'Distributed Systems',
    problem: 'High concurrency e-commerce order placement & inventory sync required non-blocking, event-driven streaming.',
    solution: 'Implemented Apache Kafka event streaming pipeline with producer-consumer topics and Redis cache for order processing.',
    tags: ['Apache Kafka', 'Node.js', 'Redis', 'Docker', 'Event-Driven'],
    accent: 'emerald',
    span: 'md',
    metrics: 'Study & R&D',
    image: '/kafka-study.png',
    liveUrl: 'https://github.com/ProgramerPritom/kafka_study_project',
    github: 'https://github.com/ProgramerPritom/kafka_study_project',
  },
]

export const testimonials = [
  {
    quote:
      'Badruzzaman turned our slow internal tooling into an AI-driven pipeline that practically runs itself. Delivery speed is genuinely otherworldly.',
    name: 'Sarah Mitchell',
    title: 'Product Lead, Nova Labs',
    rating: 5,
    accent: 'cyan',
  },
  {
    quote:
      'Rare blend — he speaks design, backend and prompt engineering fluently. Our agentic workflows went from demo to production in weeks.',
    name: 'David Okafor',
    title: 'CTO, Automata Systems',
    rating: 5,
    accent: 'purple',
  },
  {
    quote:
      'The most dependable engineer I\u2019ve hired. Complex systems, calm delivery, and interfaces that feel premium down to the last micro-interaction.',
    name: 'Elena Rodriguez',
    title: 'Founder, Pulse Commerce',
    rating: 5,
    accent: 'emerald',
  },
  {
    quote:
      'He automated a 40-hour weekly process end-to-end. The ROI landed in the first month and it keeps compounding.',
    name: 'Marcus Chen',
    title: 'Operations Director, FlowDesk',
    rating: 5,
    accent: 'cyan',
  },
]

export const formFields = [
  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Doe' },
  { name: 'email', label: 'Your Email', type: 'email', placeholder: 'jane@company.com' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Let’s build something great' },
]
