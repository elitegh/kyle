export const site = {
  name: "Kyle Larsen",
  title: "Senior Software Engineer",
  tagline:
    "I build scalable backend systems with Node.js and Python, focusing on reliable APIs, distributed services, performance, and clean system architecture — with React experience for delivering polished user-facing features when needed.",
  /** Replace with your photo: add public/profile.jpg and set to "/profile.jpg" */
  profileImage: "/profile.jpg",
  email: "kylarsen84@gmail.com",
  phone: "(214) 856-0375",
  location: "Conroe, TX",
  social: {
    github: "https://github.com/kylarsen",
    linkedin: "",
    twitter: "",
  },
};

export const about = {
  paragraphs: [
    "I am a a Senior Software Engineer with strong experience building scalable backend platforms, distributed APIs, and event-driven microservices using Node.js, TypeScript, Python, AWS, Kafka, and PostgreSQL.",
    "Over the last decade, I have worked across enterprise platforms in e-commerce, pricing, and internal tools, partnering with cross-functional teams to ship reliable software at scale.",
  ],
  highlights: [
    { label: "Years in software", value: "12+" },
    { label: "Current role", value: "Amazon" },
    { label: "Location", value: "Texas" },
  ],
};

export const experience = [
  {
    company: "Amazon",
    location: "Remote",
    period: "Jul 2023 - Present",
  },
  {
    company: "PROS",
    location: "Houston, TX",
    period: "Mar 2020 - Jun 2023",
  },
  {
    company: "Sysco",
    location: "Houston, TX",
    period: "Sep 2017 - Feb 2020",
  },
  {
    company: "Idera",
    location: "Houston, TX",
    period: "Jun 2015 - Aug 2017",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Sam Houston State University",
  period: "2010 - 2014",
  location: "Huntsville, TX",
};

export const skills = [
  { name: "Node.js", level: 97, color: "from-amber-400 to-orange-500" },
  { name: "Python", level: 95, color: "from-amber-400 to-orange-500" },
  { name: "NestJS", level: 95, color: "from-lime-400 to-emerald-500" },
  { name: "FastAPI", level: 93, color: "from-lime-400 to-emerald-500" },
  { name: "SQL", level: 91, color: "from-pink-400 to-rose-500" },
  { name: "AWS", level: 91, color: "from-pink-400 to-rose-500" },
  { name: "TypeScript", level: 95, color: "from-cyan-400 to-blue-500" },
  { name: "React / Next.js", level: 91, color: "from-cyan-400 to-blue-500" },
];

export const projects = [
  {
    title: "Aurora Workflow Engine",
    description:
      "Backend workflow platform built with Node.js and Python for async job processing, API orchestration, retry logic, and real-time operational metrics.",
    tags: ["Node.js", "Python", "Kafka"],
    gradient: "from-cyan-500 via-violet-500 to-pink-500",
    link: "#",
  },
  {
    title: "Neon API Platform",
    description:
      "Scalable backend API system using Node.js, Python, PostgreSQL, and Redis to handle authentication, payments logic, caching, and service-to-service communication.",
    tags: ["Node.js", "Python", "PostgreSQL"],
    gradient: "from-lime-400 via-cyan-400 to-blue-500",
    link: "#",
  },
  {
    title: "Pulse Data Pipeline",
    description:
      "Event-driven backend pipeline that processes high-volume data streams with Python workers, Node.js APIs, Redis queues, and automated monitoring.",
    tags: ["Python", "Node.js", "Redis"],
    gradient: "from-orange-400 via-pink-500 to-purple-600",
    link: "#",
  },
  {
    title: "Studio Frontend OS",
    description:
      "Modern frontend workspace built with React and Tailwind CSS for managing project boards, user permissions, file previews, audit views, and responsive workflow dashboards.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    gradient: "from-violet-500 via-fuchsia-500 to-rose-400",
    link: "#",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];
