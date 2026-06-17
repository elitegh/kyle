export const site = {
  name: "Kyle Larsen",
  title: "Senior Software Engineer",
  tagline:
    "I build high-impact frontend experiences with modern React and Next.js, blending performance, product thinking, and polished interaction design.",
  /** Replace with your photo: add public/profile.jpg and set to "/profile.jpg" */
  profileImage: "/profile.jpg",
  email: "kylarsen84@gmail.com",
  phone: "(214) 856-0375",
  location: "Conroe, TX",
  social: {
    github: "https://github.com/kylarsen",
    linkedin: "https://www.linkedin.com/in/kyle-larsen-1ba584411",
    twitter: "",
  },
};

export const about = {
  paragraphs: [
    "I am a software engineer focused on frontend architecture and product delivery. I enjoy turning complex requirements into clean, scalable user experiences.",
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
    period: "Mar 2024 - Present",
  },
  {
    company: "PROS",
    location: "Hybrid",
    period: "Aug 2020 - Feb 2024",
  },
  {
    company: "Sysco",
    location: "Houston, TX",
    period: "May 2017 - Jul 2020",
  },
  {
    company: "Idera",
    location: "Houston, TX",
    period: "Jun 2014 - Apr 2017",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Sam Houston State University",
  period: "2010 - 2014",
  location: "Huntsville, TX",
};

export const skills = [
  { name: "React / Next.js", level: 95, color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", level: 90, color: "from-violet-400 to-purple-600" },
  { name: "Tailwind CSS", level: 92, color: "from-pink-400 to-rose-500" },
  { name: "Framer Motion", level: 88, color: "from-lime-400 to-emerald-500" },
  { name: "Node.js", level: 80, color: "from-amber-400 to-orange-500" },
  { name: "UI / UX Design", level: 85, color: "from-fuchsia-400 to-violet-600" },
];

export const projects = [
  {
    title: "Aurora Dashboard",
    description:
      "Real-time analytics with glassmorphic panels, animated charts, and a living gradient theme that shifts with data.",
    tags: ["Next.js", "D3", "WebSockets"],
    gradient: "from-cyan-500 via-violet-500 to-pink-500",
    link: "#",
  },
  {
    title: "Neon Commerce",
    description:
      "E-commerce rebuilt for speed — micro-interactions on every cart action, 3D product previews, and checkout in under 60 seconds.",
    tags: ["React", "Stripe", "Three.js"],
    gradient: "from-lime-400 via-cyan-400 to-blue-500",
    link: "#",
  },
  {
    title: "Pulse Social",
    description:
      "A social platform where feeds breathe — staggered reveals, reaction bursts, and a dark-mode-first design system.",
    tags: ["Next.js", "GraphQL", "Redis"],
    gradient: "from-orange-400 via-pink-500 to-purple-600",
    link: "#",
  },
  {
    title: "Studio OS",
    description:
      "Creative agency toolkit: project boards, client portals, and brand asset libraries in one cohesive workspace.",
    tags: ["TypeScript", "Prisma", "Figma API"],
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
