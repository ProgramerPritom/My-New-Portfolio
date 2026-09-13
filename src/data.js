export const profile = {
  name: 'Badruzzaman Pritom',
  firstName: 'Badruzzaman',
  monogram: 'BP',
  role: 'Full-Stack Developer & AI Systems Engineer',
  statusPill: 'Available for full-time & high-impact contracts',
  availability: 'Immediate',
  timezone: 'UTC+6 (Open to US & EU overlap)',
  location: 'Dhaka, Bangladesh',
  phone: '01767026831',
  email: 'badruzzamanpritom@gmail.com',
  education: 'BSc in Computer Science & Engineering · DIU (2022–2026)',
  avatar: '/Personal-Photo.png',
  cvUrl: 'https://drive.google.com/file/d/1DJAEVj_ditiejengSMRhoIrW62Uik4s9/view?usp=sharing',
  cvDriveUrl: 'https://drive.google.com/file/d/1DJAEVj_ditiejengSMRhoIrW62Uik4s9/view?usp=sharing',
  repoUrl: 'https://github.com/ProgramerPritom/My-New-Portfolio',
  socials: {
    github: 'https://github.com/ProgramerPritom',
    linkedin: 'https://www.linkedin.com/in/badruzzamanpritom',
    portfolio: 'https://coder-pritom.netlify.app',
  },

  // Positioning & Proof Statements (Strategy: Role + Edge, quantified credential)
  eyebrow: '// currently engineering agent workflows & distributed systems @ Glow Radius',
  headlineLead: 'Full-stack engineer who ships production AI features,',
  headlineAccent: 'not demos.',
  proofOneLiner:
    '3+ years production experience • 15+ shipped platforms • Real-time event streaming & RAG systems delivering measurable business ROI.',

  // Bio narratives for the "Short Version" vs "Full Story" toggle
  shortBio:
    'Full-Stack & AI Systems Engineer with 3+ years of production experience building high-throughput web apps, autonomous RAG pipelines, and distributed architectures. Currently architecting intelligent tool-calling agents and event-driven backends at Glow Radius. Passionate about eliminating hundreds of manual operations hours through resilient software engineering.',

  fullStory: [
    {
      step: '01',
      title: 'The Foundation: Systems & Concurrency',
      paragraphs: [
        'My path into engineering didn’t begin with generic UI templates—it started with **computer science fundamentals** at Dhaka International University. I spent countless hours diving into data structures, memory models, database indexing, and the intricacies of the JavaScript event loop.',
        'Early on, I realized that modern applications aren’t just pretty pages: they are **living data pipelines** that demand performance, resilience, and architectural discipline.',
      ],
    },
    {
      step: '02',
      title: 'The Turning Point: High-Throughput Architectures',
      paragraphs: [
        'At Innovation Information System Ltd., I built responsive SaaS frontend modules and tackled state synchronization across complex views. But the real inflection point came when I dug into **Apache Kafka, Redis, and BullMQ**.',
        'Stepping beyond standard REST CRUD into **event-driven streaming** transformed how I reason about software: decoupled microservices, fault-tolerant message topics, and asynchronous processing that never locks the client.',
      ],
    },
    {
      step: '03',
      title: 'The Frontier: Autonomous AI Agents & Real-World RAG',
      paragraphs: [
        'Today at **Glow Radius**, I engineer production systems that integrate generative AI directly into enterprise operations. Not prototype wrappers, but **self-orchestrating agent runtimes** that execute multi-step tools, query Pinecone vector databases with strict grounding, and automate end-to-end sales & CRM pipelines.',
        'Seeing autonomous workflows replace **30+ hours of manual weekly toil** for real clients proved that intelligent engineering has unparalleled leverage.',
      ],
    },
    {
      step: '04',
      title: 'What I’m Moving Toward',
      paragraphs: [
        'I am dedicated to engineering the convergence of **distributed systems and agentic AI**: systems that are self-healing, performant, and capable of executing complex human workflows with rigorous reliability.',
      ],
    },
  ],

  // Credibility markers for the sidebar
  credibilityMarkers: [
    {
      value: '3+ Years',
      label: 'Production Engineering',
      detail: 'React, Next.js, Node.js, Distributed Backends',
    },
    {
      value: '15+',
      label: 'Shipped Systems',
      detail: 'Enterprise SaaS, Microservices, Agent Pipelines',
    },
    {
      value: '30+ hrs/wk',
      label: 'Manual Ops Slashed',
      detail: 'Measured ROI across automated business workflows',
    },
    {
      value: '<200ms',
      label: 'Vector Retrieval Latency',
      detail: 'Optimized RAG embeddings with Pinecone',
    },
  ],
}

export const navLinks = [
  { label: 'Projects', href: '#work' },
  { label: 'Automation', href: '#automation' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Thinking', href: '#thinking' },
  { label: 'Contact', href: '#contact' },
]

export const terminalCommands = {
  whoami: {
    output:
      'Badruzzaman Pritom — Full-Stack & AI Systems Engineer. Building high-throughput microservices, real-time event streams (Kafka), and autonomous AI agents.',
  },
  'git log --oneline -3': {
    output: [
      'a8f1b2c feat(agents): add multi-step tool-calling with deterministic fallback',
      '74d9e01 perf(kafka): batch producer partition streams for high concurrency',
      '31e4590 ship(rag): semantic chunking & metadata filtering on Pinecone index',
    ],
  },
  'cat skills.json': {
    output: JSON.stringify(
      {
        core: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind'],
        distributed: ['Apache Kafka', 'Redis', 'BullMQ', 'PostgreSQL', 'Docker'],
        ai_systems: ['LangChain', 'Pinecone RAG', 'OpenAI/Gemini Tool Calling', 'n8n'],
      },
      null,
      2
    ),
  },
  status: {
    output:
      '🟢 STATUS: Available for full-time engineering roles & high-impact contracts. Remote-friendly (UTC+6, overlapping US & EU hours).',
  },
}

export const skillCategories = [
  {
    id: 'ai-agentic',
    name: 'AI & Agentic Systems',
    accent: 'cyan',
    tagline: 'Autonomous tool-calling agents, vector pipelines & grounded LLM reasoning',
    skills: [
      {
        name: 'LangChain & RAG Pipelines',
        context: 'Engineered retrieval-augmented pipelines with semantic chunking, metadata filters, and vector reranking.',
        proof: 'Shikhsha AI & Glow Radius platforms',
        featured: true,
      },
      {
        name: 'Pinecone Vector DB',
        context: 'Configured high-density vector indexes delivering sub-200ms similarity search for grounded Q&A.',
        proof: 'Production academic & CRM search',
        featured: true,
      },
      {
        name: 'OpenAI GPT & Gemini Tool Calling',
        context: 'Structured multi-step agent reasoning, function calling, schema validation, and fallback loops.',
        proof: 'Enterprise sales intelligence agents',
        featured: true,
      },
      {
        name: 'N8N & Make.com Automation',
        context: 'Built complex webhooks, CRM syncs, and multi-service event chains orchestrating business logic.',
        proof: '30+ hrs/wk automated workflows',
        featured: true,
      },
    ],
  },
  {
    id: 'backend-distributed',
    name: 'Distributed Systems & Backend',
    accent: 'purple',
    tagline: 'Event streaming, queue orchestration, and high-throughput microservices',
    skills: [
      {
        name: 'Apache Kafka',
        context: 'Topic partitioning, event-driven streaming, and consumer group scaling for decoupled architectures.',
        proof: 'High-concurrency order stream study',
        featured: true,
      },
      {
        name: 'Node.js & Express Architecture',
        context: 'Production REST APIs, asynchronous task workers, rate limiting, and secure JWT/OAuth microservices.',
        proof: 'GlowRadius API Broker & custom microservices',
        featured: true,
      },
      {
        name: 'Redis & BullMQ',
        context: 'In-memory caching, message deduplication, distributed locks, and resilient background job queues.',
        proof: 'Asynchronous scraping & email queue workers',
        featured: true,
      },
      {
        name: 'PostgreSQL & MongoDB',
        context: 'Relational data models, indexing, aggregation pipelines, transaction management, and connection pooling.',
        proof: 'Multi-tenant schemas & document stores',
        featured: true,
      },
    ],
  },
  {
    id: 'frontend-ui',
    name: 'Frontend & UI Craft',
    accent: 'emerald',
    tagline: 'High-performance interactive interfaces, design systems & fluid animations',
    skills: [
      {
        name: 'React & Next.js App Router',
        context: 'Server Components, SSR/SSG caching, granular client boundaries, and optimized bundle sizes.',
        proof: 'Multiple production SaaS platforms',
        featured: true,
      },
      {
        name: 'TypeScript & Modern JavaScript',
        context: 'End-to-end type safety, strict API contracts, custom utility types, and modular codebases.',
        proof: 'Universal standard across all builds',
        featured: true,
      },
      {
        name: 'Tailwind CSS & Framer Motion',
        context: 'Accessible custom design tokens, micro-interactions, spring physics, and responsive layouts.',
        proof: 'Fluid design systems & dark mode',
        featured: true,
      },
      {
        name: 'State Architecture (Redux / RTK)',
        context: 'Centralized global caching, normalized entities, asynchronous thunks, and predictable UI state.',
        proof: 'Multi-vendor marketplace clients',
        featured: false,
      },
    ],
  },
  {
    id: 'cloud-infra',
    name: 'Cloud, DevOps & Data Scraping',
    accent: 'amber',
    tagline: 'Continuous delivery, edge networks, containerization & lead intelligence',
    skills: [
      {
        name: 'Docker & Containerization',
        context: 'Multi-stage Dockerfiles, local microservice orchestration, and reproducible runtime environments.',
        proof: 'Containerized Kafka & Node worker clusters',
        featured: true,
      },
      {
        name: 'GCP Cloud Build & Cloudflare',
        context: 'Automated CI/CD deployment pipelines, edge DNS routing, and static asset distribution.',
        proof: 'Production staging deployments',
        featured: true,
      },
      {
        name: 'Cheerio & Headless Scraping',
        context: 'High-volume web scraping with proxy rotation, DOM parsing, and automated data extraction.',
        proof: 'Enterprise lead enrichment engines',
        featured: true,
      },
      {
        name: 'Twilio & VideoSDK Integration',
        context: 'Programmatic SMS, WhatsApp messaging webhooks, and automated audio/video calling pipelines.',
        proof: 'GlowRadius GTM outbound automation',
        featured: false,
      },
    ],
  },
]

export const currentlyLearning = [
  { name: 'Rust for High-Performance Tooling', note: 'Memory-safe system programming & fast CLI binaries' },
  { name: 'LangGraph & Temporal.io', note: 'Durable multi-agent state machines with human-in-the-loop' },
  { name: 'Local LLM Clustering (Ollama + vLLM)', note: 'Self-hosted inference optimization on edge hardware' },
]

// Flagship Case Studies — Following the Strategy:
// Problem -> Constraints -> Process (with Abandoned Approach!) -> Solution -> Outcome (Real Metrics) -> What I'd Do Differently
// All Client & Production Projects (Showcasing all 7 builds with complete details)
export const allProjects = [
  {
    id: 'cruise-os',
    title: 'CruiseOS BD — Enterprise Cruise Operations OS',
    client: 'Maritime Hospitality Platform',
    period: '2024 — 2026',
    category: 'Maritime Operations Platform',
    tagline: 'Cloud-native, multi-role operations platform for river cruise fleets featuring distributed seat locking, multi-deck vessel mapping, kitchen dispatch, and cryptographic boarding.',
    metricsBadge: 'Enterprise Platform',
    outcomeMetric: 'Zero Double-Bookings',
    accent: 'emerald',
    image: '/CruiseOS.png',
    liveUrl: 'https://ferry-kitchen-boarding.vercel.app/',
    githubUrl: 'https://github.com/ProgramerPritom/FerryKitchen-boarding',
    techStack: ['React 19', 'Node.js', 'PostgreSQL', 'Upstash Redis', 'Prisma', 'Gemini RAG', 'Tailwind CSS'],
    problem:
      'River cruise operators were managing high-volume voyages with phone bookings, spreadsheets, paper tickets, and disconnected onboard kitchens, resulting in frequent seat collisions, kitchen chaos, and revenue leakage.',
    constraints: [
      'Sub-100ms distributed seat-locking under concurrent flash booking peaks.',
      'Multi-deck interactive vessel layout rendering smoothly on low-bandwidth river connections.',
      'Cryptographic offline verification for boarding passes and automated live kitchen queues.',
    ],
    process:
      'Initial optimistic client-side locking failed under concurrent checkout attempts; pivoted to Upstash Redis distributed mutex locks with TTL expiration, paired with atomic Prisma transactions in PostgreSQL.',
    solution:
      'Built a comprehensive operations OS with interactive multi-deck cabin selection, distributed mutex seat reservation, real-time kitchen order dispatch, cryptographic QR boarding validation, and Gemini RAG-assisted voyage logs.',
    outcome:
      'Production maritime platform live at ferry-kitchen-boarding.vercel.app, eliminating double-bookings, automating meal distribution, and securing high-throughput booking pipelines.',
    whatIdDoDifferently:
      'Would integrate WebSockets via Socket.io/Ably for live multi-user seat color transitions as tickets are picked across concurrent browsers.',
    architectureFlow: [
      'Vessel Deck Map (React 19)',
      'Distributed Mutex (Upstash Redis)',
      'Booking Engine & Prisma',
      'PostgreSQL Database',
      'Kitchen Dispatch Queue',
      'Cryptographic QR Boarding Pass',
    ],
  },
  {
    id: 'glowradius-agent',
    title: 'B2B GTM Agent & Microservices Engine',
    client: 'Glow Radius',
    period: '2024 — Present',
    category: 'AI & Microservices',
    tagline: 'Autonomous agent runtime replacing 30+ weekly hours of manual prospect enrichment and outreach.',
    metricsBadge: 'Production Enterprise SaaS',
    outcomeMetric: '75% Ops Time Saved',
    accent: 'cyan',
    image: '/glowradius-agent.png',
    liveUrl: 'https://app.staging.glowradius.com',
    githubUrl: null, // Enterprise proprietary
    techStack: ['Node.js', 'React', 'LangChain', 'OpenAI Tool Calling', 'PostgreSQL', 'GCP Cloud Build', 'Redis'],
    problem:
      'Enterprise sales teams were burning over 30 hours weekly manually looking up company prospects, cross-referencing LinkedIn records, updating CRM fields, and scheduling video calls across fragmented tools.',
    constraints: [
      'Zero tolerance for hallucinations in prospect data and email drafting.',
      'Strict API rate limits across external data providers and LinkedIn.',
      'Sub-second API broker responses for client dashboard interactions.',
    ],
    process:
      'Designed an asynchronous event-driven worker architecture. Monolithic prompt chains were abandoned due to edge-case failures; pivoted to decoupled LangChain tool executors orchestrated by Redis queues with deterministic fallback routines.',
    solution:
      'Built a complete GTM platform featuring an API Broker microservice in Node.js/Express, autonomous tool-using agent runtimes, Redis BullMQ background workers, and automated VideoSDK meeting triggers.',
    outcome:
      'Successfully deployed to production staging. Slashed manual CRM enrichment time by 75% for client operations with automated video meeting triggers.',
    whatIdDoDifferently:
      'Would adopt LangGraph or Temporal.io earlier for native distributed state checkpointing instead of custom Redis state transitions.',
    architectureFlow: [
      'Client Dashboard (React)',
      'API Broker (Node/Express)',
      'Redis Task Queue (BullMQ)',
      'Agent Runtime (LangChain)',
      'Tools (Scraper / VideoSDK / CRM)',
      'PostgreSQL Storage',
    ],
  },
  {
    id: 'shikhsha-ai',
    title: 'Shikhsha AI — Context-Grounded RAG Platform',
    client: 'Open Source / EdTech',
    period: '2024',
    category: 'AI & Vector Search',
    tagline: 'RAG platform delivering accurate, hallucination-resistant academic answers from vast study materials.',
    metricsBadge: 'Live Production Platform',
    outcomeMetric: '<200ms Vector Lookups',
    accent: 'emerald',
    image: '/shikhsha-ai.png',
    liveUrl: 'https://ai-powered-learning-platform-iwcm.vercel.app/',
    githubUrl: 'https://github.com/ProgramerPritom/ai-powered-learning-platform',
    techStack: ['Next.js', 'LangChain', 'Pinecone', 'OpenAI GPT-4', 'Tailwind CSS', 'TypeScript'],
    problem:
      'Students and job aspirants face cognitive overload studying from disparate PDFs and notes. Generic LLMs frequently hallucinate formulas, syllabus boundaries, and code snippets.',
    constraints: [
      'Fast query latency (<250ms vector retrieval) on cost-efficient infrastructure.',
      'Must provide exact source citations so students can verify assertions.',
      'Support dynamic ingestion of diverse document formats without memory spikes.',
    ],
    process:
      'Fixed-character chunking broke equations and code mid-expression; replaced with recursive semantic chunking with metadata tagging, indexed into Pinecone vector databases with cosine similarity.',
    solution:
      'Engineered a Next.js educational web platform with streaming LangChain RAG pipeline, Pinecone vector indexing, GPT-4 grounded synthesis, and live markdown code rendering.',
    outcome:
      'Delivers sub-200ms vector lookups with verifiable citations for every response, strictly bounding LLM answers to the retrieved context chunks.',
    whatIdDoDifferently:
      'Would implement hybrid sparse-dense search (BM25 + vector embeddings) to boost exact-match keyword recall for technical jargon.',
    architectureFlow: [
      'Document Upload (PDF/MD)',
      'Recursive Semantic Chunker',
      'OpenAI Text Embeddings',
      'Pinecone Vector Index',
      'Context Synthesis with Citations',
      'Streaming Next.js Response',
    ],
  },
  {
    id: 'edutech-learning',
    title: 'EduTech Learning Platform (EduCast)',
    client: 'EdTech Web Platform',
    period: '2024',
    category: 'Full-Stack Web',
    tagline: 'Modern, high-performance course learning management platform with video streaming and interactive curriculum modules.',
    metricsBadge: 'Live Production Platform',
    outcomeMetric: 'Interactive LMS',
    accent: 'purple',
    image: '/edu-cast.png',
    liveUrl: 'https://edutech-learning-platforms.vercel.app/',
    githubUrl: 'https://github.com/ProgramerPritom',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Video Streaming', 'TypeScript'],
    problem:
      'Educational platforms often suffer from cluttered user interfaces, slow asset loading on mobile devices, and lack of clear progress tracking across course modules.',
    constraints: [
      'High-speed video asset delivery with responsive playback across all screen sizes.',
      'Intuitive dark-mode interface optimized for prolonged study sessions.',
      'Real-time module navigation and state persistence.',
    ],
    process:
      'Designed a component-driven Next.js client with server-rendered pages for fast initial paint. Built responsive course view layouts with collapsible course chapters, active lesson indicators, and clean typography.',
    solution:
      'Shipped an engaging educational web application with comprehensive course catalogs, video lesson players, student dashboards, and responsive layout architecture.',
    outcome:
      'Deployed live on Vercel at edutech-learning-platforms.vercel.app with instant load times and seamless navigation.',
    whatIdDoDifferently:
      'Would add interactive video chapter timestamps and AI-generated study quizzes directly after each lesson.',
    architectureFlow: [
      'Next.js 14 App Router',
      'Course Catalog & Filter API',
      'Video Stream Player Component',
      'Curriculum State Manager',
      'Progress Local Cache',
    ],
  },
  {
    id: 'creative-cube',
    title: 'Creative Cube BD — Interior Architecture Studio',
    client: 'Creative Studio Platform',
    period: '2024',
    category: 'Full-Stack Web',
    tagline: 'Luxury architectural design studio platform featuring dark-mode aesthetic, category filtering, and smooth Framer Motion interactions.',
    metricsBadge: 'Live Client Site',
    outcomeMetric: 'Commercial Studio',
    accent: 'emerald',
    image: '/creative-cube.png',
    liveUrl: 'https://creativecubebd.com/',
    githubUrl: 'https://github.com/ProgramerPritom/creativeCubeNextjs',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Responsive UI'],
    problem:
      'Luxury architectural design studio needed a high-end, animated showcase platform for presenting commercial interior projects to corporate clients.',
    constraints: [
      'Pixel-perfect luxury aesthetic with fluid micro-interactions and zero layout shifts.',
      'High-resolution imagery delivery without compromising initial page load speed.',
      'Simple project category switching and contact conversion points.',
    ],
    process:
      'Crafted an editorial dark-themed UI with custom Tailwind color palettes, dynamic category filtering, full-screen project visual modals, and smooth Framer Motion page transitions.',
    solution:
      'Shipped the official commercial platform for Creative Cube BD with dynamic project showcases, client testimonials, and direct consultation booking.',
    outcome:
      'Live commercial production site deployed at creativecubebd.com serving commercial and residential architecture clientele.',
    whatIdDoDifferently:
      'Would implement next-gen WebP image delivery via Cloudflare Images with responsive blur placeholder hashes.',
    architectureFlow: [
      'Next.js App Router',
      'Framer Motion Grid',
      'Project Categorizer',
      'Contact & Booking Modal',
    ],
  },
  {
    id: 'kafka-event-streaming',
    title: 'Kafka High-Throughput Event Streaming Engine',
    client: 'Distributed Systems R&D',
    period: '2024',
    category: 'Distributed Systems',
    tagline: 'High-concurrency order streaming pipeline sustaining zero message loss under peak simulated traffic.',
    metricsBadge: 'Distributed Architecture',
    outcomeMetric: '10,000+ Events Handled',
    accent: 'purple',
    image: '/kafka-study.png',
    liveUrl: 'https://github.com/ProgramerPritom/kafka_study_project',
    githubUrl: 'https://github.com/ProgramerPritom/kafka_study_project',
    techStack: ['Apache Kafka', 'Node.js', 'Redis', 'Docker', 'Zookeeper', 'Event-Driven Microservices'],
    problem:
      'Traditional synchronous HTTP/REST architectures bottlenecked under high-volume concurrent e-commerce orders, risking database lockups and lost order events.',
    constraints: [
      'Guaranteed at-least-once message delivery without duplicates in stock ledger.',
      'Decouple order submission from inventory calculation and payment processing.',
      'Containerized and deployable in local Docker clusters.',
    ],
    process:
      'Synchronous endpoints degraded to >3500ms latency under 5,000 simulated requests; transitioned to asynchronous Kafka topics with producer dispatch acknowledging in <15ms.',
    solution:
      'Implemented Apache Kafka event streaming system with dedicated topics for order-created, inventory-checked, and payment-settled events with Redis cache.',
    outcome:
      'Sustained 10,000+ concurrent simulated events with zero dropped records, sub-15ms client dispatches, and completely decoupled background workers.',
    whatIdDoDifferently:
      'Would integrate Confluent Schema Registry with Apache Avro schemas for strict contract verification across microservice boundaries.',
    architectureFlow: [
      'Order Ingestion API (Node.js)',
      'Kafka Producer (<15ms)',
      'Kafka Broker Topics',
      'Consumer 1: Inventory & Redis',
      'Consumer 2: Payment Gateway',
      'Consumer 3: Notifications',
    ],
  },
  
  {
    id: 'dream-motors',
    title: 'Dream Motors — Multi-Vendor E-Commerce Engine',
    client: 'E-Commerce Marketplace',
    period: '2023 — 2024',
    category: 'Full-Stack Web',
    tagline: 'Comprehensive multi-vendor automotive marketplace featuring catalog search, inventory state, and order tracking.',
    metricsBadge: 'Full-Stack Engine',
    outcomeMetric: 'Multi-Vendor SaaS',
    accent: 'cyan',
    image: '/dream-motors.png',
    liveUrl: 'https://dream-motor-garage.web.app/',
    githubUrl: 'https://github.com/ProgramerPritom/multi-vendon_E-commerce_nextJs',
    techStack: ['Next.js', 'React', 'Node.js', 'Firebase', 'Redux Toolkit', 'Tailwind CSS'],
    problem:
      'Automotive retail platforms required fast inventory catalog search, cart management, vendor dashboards, and scalable order processing.',
    constraints: [
      'Instant search filtering across thousands of vehicle specs and parts.',
      'Normalized client state across multi-step checkout workflows.',
      'Secure multi-vendor authentication and role-based permissions.',
    ],
    process:
      'Architected a multi-vendor marketplace using Next.js client with Redux Toolkit for centralized client caching, paired with Firebase backend services and REST APIs.',
    solution:
      'Deployed a full-featured e-commerce platform with dynamic filtering, shopping cart, vendor product management, and Firebase cloud hosting.',
    outcome:
      'Live web app providing high-speed vehicle search, vendor listing management, and smooth responsive ordering flows.',
    whatIdDoDifferently:
      'Would migrate backend storage to PostgreSQL with Prisma ORM for relational ACID transactions across multi-vendor payouts.',
    architectureFlow: [
      'Next.js Client UI',
      'Redux State Store',
      'Firebase Auth & DB',
      'Node.js REST Services',
      'Order Checkout Pipeline',
    ],
  },
]

// Automation Solutions (Dedicated Section for Clients & Enterprise Automation)
export const automationSystems = [
  {
    id: 'shop-pilot-ai',
    title: 'ShopPilot.ai — Autonomous Social Commerce AI Sales Agent',
    category: 'Autonomous Social Commerce & Order Engine',
    clientMetric: '24/7 AI Sales • 1-Click Fulfillment • Zero-Form Checkout',
    tagline:
      'Turn Facebook Messenger, Instagram DMs, and WhatsApp conversations into confirmed e-commerce orders 24/7 with RAG AI Catalog, Courier Fraud Detection, and Automated 1-Click Fulfillment.',
    image: '/Shop-ai.png',
    liveUrl: 'https://shop-pilot-smoky.vercel.app',
    accent: 'cyan',
    featured: true,
    tools: [
      'Next.js 14',
      'Gemini 2.5 Flash',
      'Meta Graph API',
      'Baileys WhatsApp',
      'PostgreSQL',
      'Upstash Redis',
      'Steadfast & Pathao APIs',
      'n8n Webhooks',
    ],
    overview:
      'A full-scale autonomous AI sales & operations engine for South Asian F-Commerce and online merchants. It talks fluently in Bengali and Banglish, understands customer voice notes and product photos, auto-detects courier fraud risks, extracts phone/address with zero forms, and places bookings directly into courier APIs.',
    steps: [
      {
        step: '01',
        title: 'Multi-Channel Ingest & Baileys Socket',
        desc: 'Meta Graph Webhooks & QR-based Baileys WhatsApp sockets capture Messenger, Instagram DMs & WhatsApp messages in real time without Meta cloud API fees.',
      },
      {
        step: '02',
        title: 'Multi-Modal Reasoning & Voice AI',
        desc: 'Gemini 2.5 Flash parses customer intent, transcribes Bengali voice notes, and matches incoming customer product photos directly with live catalog stock.',
      },
      {
        step: '03',
        title: 'Fraud Detection & Zero-Form Checkout',
        desc: 'Calculates courier return risk score from past delivery track records, validates 11-digit phone numbers, and auto-records confirmed orders in PostgreSQL.',
      },
      {
        step: '04',
        title: '1-Click Fulfillment & Profit Analytics',
        desc: 'Instantly books parcels into Steadfast & Pathao courier APIs with tracking barcodes, and computes real delivered net profit deducting purchase & shipping fees.',
      },
    ],
  },
  {
    id: 'composite-ai-macro',
    title: 'Composite AI Macro Orchestration Engine',
    category: 'Enterprise Macro Workflow',
    clientMetric: '30+ hrs/wk Manual Work Eliminated',
    tagline: 'Autonomous n8n pipeline orchestrating web scraping, OpenAI data structuring, and Google Cloud Storage sync.',
    image: '/composite-automation.png',
    accent: 'cyan',
    tools: ['N8N', 'Node.js', 'OpenAI GPT-4', 'Google Cloud Storage', 'Webhooks'],
    overview:
      'Eliminated over 30 hours of tedious manual data entry and prospect verification every single week for sales operations.',
    steps: [
      { step: '01', title: 'Trigger', desc: 'Webhook event received from CRM form submission or automated scheduled cron.' },
      { step: '02', title: 'Data Scraping', desc: 'Contabo-hosted Node.js worker with Cheerio extracts live company info and verifies domains.' },
      { step: '03', title: 'AI Reasoning', desc: 'OpenAI GPT parses raw DOM data, identifies decision-makers, and formats clean JSON.' },
      { step: '04', title: 'Cloud Sync', desc: 'Enriched records are automatically synced to Google Cloud Storage and piped to client CRM.' },
    ],
  },
  {
    id: 'whatsapp-merchant-copilot',
    title: 'WhatsApp & CRM Merchant Automation Copilot',
    category: 'Conversational Sales Automation',
    clientMetric: '<5s AI Reply • 24/7 Lead Capture',
    tagline: 'Autonomous 24/7 AI-driven WhatsApp assistant providing product advice, inventory checks, and instant CRM order sync.',
    image: null,
    accent: 'emerald',
    tools: ['WhatsApp Cloud API', 'Twilio', 'Node.js', 'OpenAI Tool Calling', 'PostgreSQL'],
    overview:
      'Converts WhatsApp chats into qualified paying customers by answering inquiries with live catalog knowledge and auto-updating deals.',
    steps: [
      { step: '01', title: 'Chat Ingestion', desc: 'Incoming customer WhatsApp messages received via webhook in real-time.' },
      { step: '02', title: 'Tool Calling', desc: 'OpenAI LLM invokes custom inventory database functions to fetch exact stock & pricing.' },
      { step: '03', title: 'Instant Response', desc: 'Customer receives accurate reply with product photos and checkout link in <5s.' },
      { step: '04', title: 'Deal Creation', desc: 'Order details and customer metadata are automatically recorded in CRM database.' },
    ],
  },
  {
    id: 'lead-scraping-pipeline',
    title: 'Autonomous Web Scraping & Lead Intelligence',
    category: 'Data Extraction & Enrichment',
    clientMetric: '10,000+ Enriched Contacts / Week',
    tagline: 'High-throughput scraping engine extracting unstructured business directories with proxy rotation and deduplication.',
    image: null,
    accent: 'purple',
    tools: ['Cheerio', 'Node.js', 'Redis BullMQ', 'Proxy Rotation', 'PostgreSQL'],
    overview:
      'Continuously extracts, cleanses, and verifies high-value business leads across public web directories without manual effort.',
    steps: [
      { step: '01', title: 'Task Queue', desc: 'Redis BullMQ distributes scraping jobs across containerized worker threads.' },
      { step: '02', title: 'Anti-Block Scraping', desc: 'Proxy rotation and header randomization bypass rate limits and anti-bot checks.' },
      { step: '03', title: 'Validation', desc: 'Email addresses and phone numbers are verified against MX records and syntax rules.' },
      { step: '04', title: 'Pipeline Delivery', desc: 'Clean, verified records are pushed into outreach pipelines and sales spreadsheets.' },
    ],
  },
]

// Career Timeline with Measurable Achievements & ATS Text Output
export const careerTimeline = [
  {
    period: 'Sept 2022 — Present',
    phase: 'Present',
    role: 'Full Stack Software Developer & AI Engineer',
    company: 'Glow Radius',
    location: 'Remote / Dhaka',
    type: 'Full-Time',
    accent: 'cyan',
    achievements: [
      'Architected LangChain & Pinecone RAG pipelines that ground LLM queries against proprietary documents with sub-200ms retrieval.',
      'Designed an API Broker microservice in Node.js/Express, managing authentication, rate limiting, and third-party SaaS integrations.',
      'Built multi-step n8n automation pipelines with custom Node.js scrapers, slashing manual data research by 30+ hours weekly.',
      'Shipped responsive client dashboards in React and Next.js, implementing real-time event streaming and state management.',
    ],
  },
  {
    period: 'Jan 2024 — Feb 2025',
    phase: 'Phase 02',
    role: 'Frontend Developer',
    company: 'Innovation Information System Ltd.',
    location: 'Dhaka, Bangladesh',
    type: 'Full-Time',
    accent: 'purple',
    achievements: [
      'Engineered production SaaS frontend modules using React, Redux Toolkit, and Tailwind CSS with strict accessibility compliance.',
      'Reduced initial client load time by 35% through component code-splitting, memoization, and image asset optimization.',
      'Collaborated in rapid Git-driven sprints with backend teams to integrate REST APIs and WebSocket data feeds.',
    ],
  },
  {
    period: '2022 — 2026',
    phase: 'Phase 01',
    role: 'BSc in Computer Science & Engineering',
    company: 'Dhaka International University',
    location: 'Dhaka, Bangladesh',
    type: 'Degree',
    accent: 'emerald',
    achievements: [
      'Core coursework: Data Structures, Algorithms, Distributed Systems, Database Management Systems, and Object-Oriented Architecture.',
      'Conducted independent research and development in Apache Kafka event streaming, consumer scaling, and concurrency patterns.',
      'Built 15+ practical applications covering full-stack web platforms, AI integrations, and background automation engines.',
    ],
  },
]

// Proof of Thinking: High-Signal Engineering Articles
export const articles = [
  {
    id: 'resilient-rag',
    title: 'Designing Resilient RAG Pipelines: Beyond Simple Vector Search',
    date: 'February 2025',
    readTime: '5 min read',
    category: 'AI Systems',
    summary:
      'Why naive vector search falls short in production: tackling semantic chunk boundaries, metadata filtering, and hallucination guardrails in LangChain.',
    takeaway: 'Vector search is only 20% of RAG; the real battle is deterministic chunking and strict context grounding.',
    relatedProject: 'Shikhsha AI',
    projectHref: '#work',
    href: '#thinking',
  },
  {
    id: 'kafka-vs-queues',
    title: 'Kafka vs. BullMQ: Choosing the Right Message Bus for Distributed Workflows',
    date: 'January 2025',
    readTime: '6 min read',
    category: 'Distributed Backend',
    summary:
      'An architectural comparison of durable log streams versus in-memory task queues when scaling asynchronous Node.js microservices.',
    takeaway: 'Use BullMQ for discrete job lifecycle retries; use Kafka when multiple decoupled consumers must replay continuous event streams.',
    relatedProject: 'Kafka Study Engine',
    projectHref: '#work',
    href: '#thinking',
  },
  {
    id: 'autonomous-agents',
    title: 'Engineering Autonomous GTM Agents: From Scripted Prompts to Tool Execution',
    date: 'November 2024',
    readTime: '7 min read',
    category: 'Agentic Engineering',
    summary:
      'Real-world lessons from replacing manual enterprise outreach with tool-calling LLM agents that recover gracefully from external API failures.',
    takeaway: 'Never trust an LLM to manage state across more than 3 steps without an external deterministic state machine backing it.',
    relatedProject: 'GlowRadius Agent',
    projectHref: '#work',
    href: '#thinking',
  },
]

export const marqueeSkills = [
  'Apache Kafka',
  'React & Next.js',
  'Autonomous AI Agents',
  'LangChain & Pinecone',
  'Node.js & Express',
  'RAG Pipelines',
  'OpenAI GPT & Gemini',
  'Redis & BullMQ',
  'PostgreSQL',
  'MongoDB',
  'Docker Containers',
  'TypeScript',
  'N8N Workflow Engines',
  'GCP Cloud Build',
  'Tailwind CSS',
  'Event-Driven Microservices',
  'Cheerio Scraping',
]
