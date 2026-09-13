import { image } from "framer-motion/client";

export const personalInfo = {
  name: "Sadia Afrin",
  phone: "+8801992099240",
  email: "sadiaafrin21@iut-dhaka.edu",
  location: "Gazipur, Bangladesh",
  linkedin: "https://www.linkedin.com/in/sadia-afrin-7229bb2a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  github: "https://github.com/afrin-9",
  portfolio:"https://sadiaafrin.me",
};

export const professionalSummary = `
Software Engineer building full stack web and cross-platform mobile applications end to end, from UI/UX design through REST APIs and authentication to release QA. Tested production applications deployed in Singapore, and builds smart applications with RAG pipelines and n8n agents.
`;

export const education = {
  institution: "Islamic University of Technology",
  location: "Gazipur, Dhaka",
  degree: "Bachelor of Science in Computer Science and Engineering",
  cgpa: "3.35",
  duration: "Aug. 2022 – Sept. 2026",
  coursework: [
    "Artificial Intelligence",
    "Machine Learning",
    "Web Architecture",
    "Data Structures and Algorithms",
    "Object Oriented Programming",
    "Database Management System",
    "System Analysis and Design",
    "Design Pattern",
  ],
};

export const experience = [
  {
    role: "Mobile App Developer",
    company: "New BCIT Systems",
    location: "Remote",
    duration: "Oct. 2025 – Dec. 2025",
    points: [
      "Developed React Native features and translated Figma designs into production-ready mobile screens for an e-commerce app.",
      "Built responsive UI components and collaborated with cross-functional teams.",
    ],
    technologies: ["React Native", "JavaScript", "REST APIs"],
  },
  {
    role: "Software Quality Assurance (SQA)",
    company: "Techzu",
    location: "Remote, Singapore",
    duration: "Apr. 2026 – Aug. 2026",
    points: [
      "Performed manual QA on three production applications used by companies in Singapore: ZuPOS (The Whale Tea), a POS and loyalty platform; LunchAD, an advertisement agency platform; and Prowork, a project management platform.",
      "Tested authentication, role-based access control, transactional flows, and reporting modules; identified, documented, and tracked bugs, verified fixes, and worked with developers on release readiness.",
    ],
    technologies: ["Manual Testing", "Functional Testing", "UI/UX Testing", "Regression Testing", "Bug Tracking"],
  },
  {
    role: "UI/UX Designer Intern",
    company: "Techzu",
    location: "Remote, Singapore",
    duration: "Apr. 2026 – Aug. 2026",
    points: [
      "Designed multi-platform POS interfaces for The Whale Tea including mobile, kiosk, admin panel, and website.",
      "Created reusable design systems, user flows, and interactive Figma prototypes improving design consistency.",
      "Conducted usability testing and collaborated with developers to ensure accurate UI implementation.",
    ],
    technologies: ["Figma", "Design Systems", "Usability Testing"],
  },
];

export const achievements = [
  {
    rank: "2nd Runner Up",
    event: "Robotics and IoT Project League",
    context: "Global Robotics and Innovation Championship (GRIC)",
    year: "2026",
  },
  {
    rank: "27th Position",
    event: "Intra University Competitive Programming",
    context: "Islamic University of Technology (IUT)",
    year: "2023",
  },
  {
    rank: "6th Position",
    event: "Intra College Math Olympiad",
    context: "Rajuk",
    year: "2019",
  },
];


export const projects = [
  {
    title: "Document Q&A Chatbot",
    duration: "2026",
    description:
      "Retrieval-Augmented Generation pipeline: extracted text from PDF documents, split it into overlapping chunks, generated vector embeddings, and indexed them in a vector database for semantic search. Implemented retrieval and context assembly, formatting retrieved documents into a structured prompt so the LLM answers from source material rather than parametric memory. Chained retriever, prompt template, and LLM into a single invocable pipeline; tuned chunk size, overlap, and top-k retrieval to reduce irrelevant context.",
    technologies: ["Python", "LLM API", "Vector DB", "PDF Parsing"],
    github: "#", // TODO: add the GitHub repo URL
    image: "/project-placeholder.svg",
  },
  {
    title: "Conversational Agent Workflow (n8n)",
    duration: "2026",
    description:
      "LLM-backed chatbot agent built in n8n, wiring trigger nodes, an AI agent node, and external API calls into an automated conversational workflow. Configured system prompts, conversation memory, and tool invocation to route queries and return structured responses.",
    technologies: ["n8n", "LLM APIs", "Webhooks", "REST"],
    github: "#", // Personal project — no public repo
    image: "/project-placeholder.svg",
  },
  {
    title: "ZuPOS - The Whale Tea",
    duration: "2026",
    description:
      "POS system for a bubble tea brand spanning mobile app, self-service kiosk, website, and admin panel as part of a team project. Created end-to-end user flows and interactive prototypes for cashier and customer-facing interfaces across multiple form factors, then QA-tested the delivered build.",
    technologies: ["Figma", "Manual Testing"],
    github: "#", // TODO: add the Figma/prototype URL
    image: "/project-placeholder.svg",
  },
  {
    title: "Shondhan UI",
    duration: "Aug 2022",
    description:
      "Designed Shondhan, an AR-based property discovery app, creating interactive UI/UX flows in Figma to enhance real estate search. Prototyped real-time AR visualizations and virtual overlays. Developed AI-powered UI concepts for predictive analytics and natural language interaction. Built complete UI including maps, 3D interiors, and dashboards.",
    technologies: ["Figma"],
    github: "https://www.figma.com/design/BLZjYCeh54Kxi9KmLeWMKl/Project-Prototype?node-id=0-1&p=f&t=PILh3ET43ivFc4Wt-0",
    image: "/A.png",
  },
  {
    title: "MedXam UI",
    duration: "2024",
    description:
      "Designed MedXam, a medical admission prep platform with full mobile UI/UX in Figma. Created flows for login, dashboard, quizzes, flashcards, tests, chatbot, leaderboard, and study resources. Implemented dark mode and bottom navigation for better usability.",
    technologies: ["Figma"],
    github: "https://www.figma.com/design/OE1oiAf40hcamJyj8yvJ6x/MedPrepMaster?node-id=0-1&t=SUxYPDZ8HvDlNhAu-1",
    image: "/B.png",
  },
  {
    title: "POS UI",
    duration: "2025",
    description:
      "Designed a POS system UI focusing on efficient transaction workflows and dashboard usability. Built a clean, modern interface optimized for real-world retail operations.",
    technologies: ["Figma"],
    github:
      "https://www.figma.com/design/hCfvAlUYR6wMZ97O9RfFyc/POS?node-id=0-1&t=t6P2bF8tgwCHrUnB-1",
    image: "/C.png",
  },

  {
    title: "Growth Assist",
    description: `
Autism support mobile application with learning modules, secure authentication, event management, and in-app chat. Implemented personalized dashboards and educational tools with a Firebase backend.
    `,
    technologies: ["React Native", "Firebase", "Tailwind CSS"],
    github: "https://github.com/Noshin-nawar3/Mad_Project",
    image: "/D.jpeg",
  },
  {
    title: "Passion",
    description: `
Fully responsive Shopify store using Digitic theme with Online Store 2.0. Customized product pages, admin panel, secure payment gateways, multilingual & multi-currency support, and optimized store performance.
    `,
    technologies: ["HTML", "CSS", "Bootstrap 5", "React"],
    github: "https://github.com/afrin-9/Passion-backend",
    image: "/F.png",
  },
    {
    title: "Job Spring",
    description:
      "Full-stack job portal platform with a Spring Boot backend: authentication, role-based access control, notifications, and interview scheduling, integrated with REST APIs, a PostgreSQL database, chatbot support, and recruiter/job-seeker workflows.",
    technologies: ["Spring Boot", "Java", "REST API", "PostgreSQL", "React-Vite", "Tailwind CSS", "Maven", "Postman"],
    github: "https://github.com/Siyam-Bhuiyan/JobSpring",
    image: "/G.png",
  },
  {
      title: "Shoporia",
      description:
        "A modern e-commerce platform with a focus on user experience and seamless shopping journeys.",
      technologies: ["React-Native", "Node.js", "MongoDB"],
      github: "https://github.com/afrin-9/Shoporia",
        image: "/H.png",
  
  },
      {
    title: "Shondhan",
    duration: "Aug.2022 ",
    description: `
AR-based property discovery app integrating AR and AI to enhance real estate search experience. Implemented real-time AR visualization, AI-powered search engine with predictive analytics, map navigation, 3D interior views, and dashboard modules for buyers and owners.
    `,
    technologies: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/sakibahmedshanto/shondhan",
    image: "/D.png",
  },
  {
      title:"Cross Lingual Information Retrieval System",
      description:
        "A cross-lingual information retrieval system that enables users to search and retrieve information across multiple languages, breaking down language barriers and enhancing accessibility.",
      technologies: ["Python", "Natural Language Processing", "Machine Learning"],
      github: "https://github.com/afrin-9/Cross-Lingual-Information-Retrieval-System",
        image: "/I.png",
  }
];

export const services = [
  {
    title: "Complete website",
    description:
      "Scalable custom website design in Figma and development in Next.js",
    tools: ["Figma"],
    features: [
      "Figma ",
      "Multi-page",
      "SEO Optimization",
      "CMS setup",
      "Responsive",
      "Design + Development",
    ],
  },
  {
    title: "UI UX Design",
    description: "Looking to design a web or app product?",
    tools: ["Figma"],
    features: [
      "User research",
      "Wireframing & Prototyping",
      "Design system",
      "Visual UI design",
      "Design only",
    ],
  },
  {
    title: "Mobile App Design",
    description: "Clean mobile UI that delivers value on every device",
    tools: ["Figma"],
    features: ["Multi-page", "Design system", "App prototype"],
  },
   {
    title: "Web Development",
    description: "Custom web applications built with the MERN stack",
    tools: ["MongoDB", "Express", "React", "Node.js"],
    features: ["API integration", "Database architecture", "Authentication", "Deployment-ready"],
  },
  
];