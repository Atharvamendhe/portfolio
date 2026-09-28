export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
];

export const PROFILE = {
  name: 'Atharva Mendhe',
  firstName: 'Atharva',
  lastName: 'Mendhe',
  phone: '7058247305',
  phoneHref: 'tel:+917058247305',
  email: 'atharvamendhe1307@gmail.com', 
  location: 'Greater Noida, India',
  linkedin: 'https://www.linkedin.com/in/atharva-mendhe/',
  github: 'https://github.com/atharvamendhe',
};

export const ROLES = [
  'Full-Stack Developer',
  'AI / ML Enthusiast',
  'Competitive Programmer',
  'Linux Power User',
];

export const HERO_META = [
  { label: 'Based in', value: 'Greater Noida, India' },
  { label: 'Focus', value: 'Full-Stack & AI/ML' },
  { label: 'Stack', value: 'React · Node · Flask' },
  { label: 'Status', value: 'Available', status: true },
];

export const MARQUEE_ITEMS = [
  'Python', 'React.js', 'Node.js', 'TensorFlow', 'Flask',
  'MongoDB', 'REST APIs', 'Arch Linux', 'C++', 'JavaScript',
];

/* Use **bold** markers — the About component renders them as <strong> */
export const ABOUT_PARAGRAPHS = [
  "I'm a Computer Science undergraduate at **Delhi Technical Campus** (affiliated to GGSIPU), Greater Noida, with a strong foundation in data structures, algorithms and modern web development.",
  "My work sits at the intersection of **full-stack engineering** and **applied machine learning** — I've built an AI interview coach that evaluates candidate responses, shipped REST-driven web apps, and trained neural networks end to end.",
  "Outside of coursework, I'm a **Tech Associate at THEAce**, the AI/ML & AR/VR club, where I contribute to technical initiatives, hackathons and community workshops. I also run Arch Linux as my daily driver — which taught me more about systems than any lecture could.",
];

export const EDUCATION = {
  degree: 'B.Tech, Computer Science & Engineering',
  school: 'Delhi Technical Campus',
  location: 'Greater Noida · Affiliated to GGSIPU',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Web Development',
  ],
};

export const STATS = [
  { value: '04+', label: 'Shipped Projects' },
  { value: '02', label: 'Hackathons' },
  { value: '15+', label: 'Technologies' },
  { value: '01', label: 'Internship' },
];

export const EXPERIENCE = [
  {
    tag: 'Internship',
    when: 'Web Associate',
    role: 'Web Associate Intern',
    org: 'Second-Hand Bike Dealership',
    points: [
      "Managed and maintained the company's digital presence across online platforms.",
      'Updated product listings and inventory information to ensure real-time accuracy.',
      'Improved content organization and customer-facing web pages to enhance user engagement.',
      'Collaborated with business stakeholders to align digital content with organizational goals.',
    ],
  },
];

export const SKILL_GROUPS = [
  { label: 'Programming', items: ['C', 'C++', 'Python', 'JavaScript'] },
  { label: 'Frameworks & Libraries', items: ['React.js', 'Node.js', 'Express.js', 'Flask'] },
  { label: 'Databases', items: ['MongoDB', 'MySQL'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Linux (Arch)', 'VS Code', 'Postman'] },
  { label: 'Other Technologies', items: ['HTML5', 'CSS3', 'REST APIs', 'API Integration'] },
  { label: 'Soft Skills', items: ['Communication', 'Leadership', 'Problem Solving', 'Team Collaboration', 'Adaptability'] },
];

export const PROJECTS = [
  {
    id: 'ai-interview',
    num: '01',
    category: 'AI',
    title: 'hirepilotAI — AI-Powered Mock Interview Platform',
    featured: true,
    latest: true,
    link: 'https://github.com/Atharvamendhe/hirepilotai', 
    description:
      'An AI-powered mock interview platform that generates role-specific questions and evaluates candidate responses in real time. Gives instant feedback on answer quality, structure and delivery, then scores the full session so users can track improvement over time.',
    stack: ['Python', 'Flask', 'React.js', 'REST APIs'],
  },
  {
    id: 'nutrition',
    num: '02',
    category: 'WEB',
    title: 'Nutrition Scanner & Diet Tracker',
    link: 'https://github.com/Atharvamendhe/Fitscan',
    description:
      'A nutrition tracking app that retrieves detailed nutritional information from scanned food products. Enables precise calorie and nutrient monitoring, with external REST APIs handling real-time data retrieval behind an intuitive meal-tracking interface.',
    stack: ['Python', 'Flask', 'REST APIs'],
  },
  {
    id: 'weather',
    num: '03',
    category: 'WEB',
    title: 'Weather Application',
    link: 'https://github.com/Atharvamendhe/WeatherApp',
    description:
      'A responsive weather web app built on modern JavaScript standards. Integrates third-party weather APIs to fetch and display dynamic real-time metrics, with asynchronous calls driving smooth UI updates for a better user experience.',
    stack: ['HTML', 'CSS', 'JavaScript', 'REST APIs'],
  },
  {
    id: 'mini-games',
    num: '04',
    category: 'WEB',
    title: 'Mini Games Collection',
    link: 'https://github.com/Atharvamendhe/tic-tac-toe',
    description:
      'A set of browser-based interactive games including Tic-Tac-Toe and Stone-Paper-Scissors. Implements full game logic, persistent score tracking, and fluid UI interactions — all in vanilla JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
];

export const ACHIEVEMENTS = [
  { title: 'Manthan Kriti Hackathon', text: 'secured 5th position for an Arduino-based Smart Dustbin project.', badge: 'Hackathon' },
  { title: 'Smart India Hackathon (SIH)', text: 'official participant in the national-level competition.', badge: 'National' },
  { title: 'Tech Associate at THEAce', text: 'AI/ML & AR/VR technical club; contributing to workshops, hackathons and club projects.', badge: 'Leadership' },
  { title: 'Data Structures & Algorithms', text: 'active competitive programmer, problem-solving primarily in C++.', badge: 'Problem Solving' },
  { title: 'Linux Systems', text: 'experienced Linux user with hands-on exposure to Arch Linux, GNOME, Git and development tooling.', badge: 'Systems' },
];