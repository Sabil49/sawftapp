export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  results: string[];
  color: string;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: "justsecurity",
    name: "JustSecurity",
    tagline: "Mobile Security, Reimagined",
    description: "A next-generation antivirus app that provides real-time malware protection without compromising device performance.",
    problem: "Mobile users face increasing security threats but existing antivirus apps drain battery, slow devices, and provide poor UX.",
    solution: "Built a lightweight, intelligent security engine with background scanning that uses minimal resources while providing enterprise-grade protection.",
    features: [
      "Real-time malware detection",
      "Smart background scanning",
      "Battery-optimized engine",
      "Threat intelligence updates",
      "Privacy audit tools",
      "Secure browsing shield"
    ],
    techStack: ["React Native", "Expo", "Firebase", "TensorFlow Lite", "Node.js"],
    results: [
      "50K+ downloads in first month",
      "4.8★ average rating",
      "99.7% threat detection rate",
      "60% less battery usage than competitors"
    ],
    color: "from-emerald-500 to-teal-600",
    accentColor: "emerald"
  },
  {
    id: "substracker",
    name: "Substracker",
    tagline: "Never Forget a Subscription Again",
    description: "An intelligent subscription management app that tracks renewals, analyzes spending, and helps users save money.",
    problem: "The average person wastes $200+/year on forgotten subscriptions. Existing trackers are clunky and lack smart insights.",
    solution: "Created an intuitive app with smart notifications, spending analytics, and AI-powered recommendations to optimize subscription costs.",
    features: [
      "Smart renewal reminders",
      "Expense analytics dashboard",
      "Spending predictions",
      "Family plan sharing",
      "Bank sync integration",
      "Cancellation assistance"
    ],
    techStack: ["React Native", "Expo", "PostgreSQL", "Prisma", "Next.js API"],
    results: [
      "100K+ active users",
      "$2.5M saved for users",
      "Featured in App Store",
      "4.9★ rating with 10K reviews"
    ],
    color: "from-violet-500 to-purple-600",
    accentColor: "violet"
  },
  {
    id: "myzo",
    name: "Myzo",
    tagline: "Luxury Handbags, Delivered",
    description: "A premium e-commerce platform for women's handbags featuring curated collections and a seamless shopping experience.",
    problem: "Online handbag shopping lacks the premium feel of in-store experiences. Product discovery is poor and checkout is cumbersome.",
    solution: "Designed a luxury-first mobile shopping experience with immersive product views, personalized recommendations, and streamlined checkout.",
    features: [
      "AR product preview",
      "Curated collections",
      "One-tap checkout",
      "Admin dashboard",
      "Inventory management",
      "Customer analytics"
    ],
    techStack: ["React Native", "Expo", "Firebase", "Stripe", "Next.js Admin"],
    results: [
      "15K+ orders processed",
      "35% conversion rate increase",
      "$500K+ GMV in 6 months",
      "92% customer satisfaction"
    ],
    color: "from-rose-500 to-pink-600",
    accentColor: "rose"
  }
];

export const techStack = [
  { name: "React Native", icon: "Smartphone" },
  { name: "Expo", icon: "Zap" },
  { name: "Next.js", icon: "Globe" },
  { name: "Firebase", icon: "Flame" },
  { name: "PostgreSQL", icon: "Database" },
  { name: "Prisma", icon: "Layers" },
  { name: "Tailwind CSS", icon: "Palette" },
  { name: "Framer Motion", icon: "Play" }
];

export const processSteps = [
  {
    step: 1,
    title: "Research & Strategy",
    description: "Deep dive into user needs, market analysis, and competitive research to define the product vision.",
    icon: "Search"
  },
  {
    step: 2,
    title: "UX & Design",
    description: "Wireframes, user flows, and high-fidelity designs that prioritize usability and aesthetics.",
    icon: "Figma"
  },
  {
    step: 3,
    title: "Development",
    description: "Clean, scalable code using modern frameworks. Agile sprints with regular demos.",
    icon: "Code"
  },
  {
    step: 4,
    title: "Testing & QA",
    description: "Rigorous testing across devices and platforms. Performance optimization and bug fixes.",
    icon: "CheckCircle"
  },
  {
    step: 5,
    title: "Launch & Support",
    description: "App store deployment, monitoring, and ongoing maintenance with feature updates.",
    icon: "Rocket"
  }
];

export const stats = [
  { value: "10+", label: "Apps Shipped" },
  { value: "500K+", label: "Users Reached" },
  { value: "4.8★", label: "Avg Rating" },
  { value: "3", label: "Years Experience" }
];
