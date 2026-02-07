/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  StatsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  Github,
  FileText,
  Home,
  Instagram,
  Mail,
  Linkedin,
  User,
  Youtube,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  { label: 'Resume', link: '#resume', icon: FileText },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Github,
    label: 'GitHub',
    link: 'https://github.com/ikhsanasagaf',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: 'https://www.instagram.com/icunasagap?igsh=MWhpa2UwM2E4a2Y5dg==',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ikhsan-asagaf/',
  },
  {
    icon: Youtube,
    label: 'Youtube',
    link: 'https://www.youtube.com/@ikhsanasagaf12',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/project-ph-1.png',
    title: 'Air Moedal Company Profile Website with Chatbot',
    tags: ['Company Profile', 'Chatbot', 'React'],
    projectLink: 'https://amdk-moedal.netlify.app/',
  },
  {
    imgSrc: '/images/project-ph-2.png',
    title: 'Fake News Detector',
    tags: ['Machine Learning', 'NLP', 'Flask'],
    projectLink: 'https://github.com/ikhsanasagaf/FakeNewsDetector',
  },
  {
    imgSrc: '/images/project-ph-3.png',
    title: 'Deppredict - Depression Prediction App',
    tags: ['Fullstack','Machine Learning','Bootstrap'],
    projectLink: 'https://deppredict.netlify.app/',
  },
  {
    imgSrc: '/images/project-ph-4.png',
    title: 'Mie Kirin Website App',
    tags: ['Multi Level', 'Vanilla CSS'],
    projectLink: 'https://github.com/ikhsanasagaf/WEBMiekirin',
  },
  {
    imgSrc: '/images/project-ph-5.png',
    title: 'Kaarten - TCG Pack Opening Simulator',
    tags: ['Web Based Game', 'Phaser.js', 'Simulator'],
    projectLink: 'https://kaarten.netlify.app/',
  },
  {
    imgSrc: '/images/project-ph-6.png',
    title: 'Churn Prediction App',
    tags: ['Machine Learning', 'Streamlit', 'Data Analysis'],
    projectLink: 'https://capstone-churn-prediction-by-ikhsan.streamlit.app/',
  },
];

const education: ExperienceType[] = [
  {
  year: '2022 – Present',
  title: 'Bachelor of Computer Science',
  institute: 'Dian Nuswantoro University',
  desc: 'Focusing on programming fundamentals, web development, and machine learning with a current GPA of 3.89/4.00.',
},
{
  year: '2019 – 2022',
  title: 'Software Engineering',
  institute: 'Telkom Purwokerto Vocational High School',
  desc: 'Deepened software engineering competencies and obtained a Level 2 National Professional Certification (KKNI) from BNSP.',
},
];

const experience: ExperienceType[] = [
  {
  year: 'Sept 2025 – Oct 2025',
  title: 'Administration & Technical Intern',
  institute: 'Perumda Tirta Moedal Semarang',
  desc: 'Developed "Moebot," an AI-powered chatbot integrated with React.js and LLM, while managing customer data and performing technical field surveys.',
},
{
  year: 'Dec 2020 – Feb 2021',
  title: 'Internet Marketer Intern',
  institute: 'SL Corp Indonesia',
  desc: 'Built a product sales website using HTML, CSS, and JavaScript, and implemented basic SEO strategies to improve online visibility.',
},
];

const tools: ToolsType[] = [
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'Mongodb',
    imgSrc: '/images/tools/mongodb.svg',
  },
  {
    label: 'Python',
    imgSrc: '/images/tools/python.svg',
  },
  {
    label: 'Github',
    imgSrc: '/images/tools/github.svg',
  },
  {
    label: 'VS Code',
    imgSrc: '/images/tools/vscode.svg',
  },
  {
    label: 'Colab',
    imgSrc: '/images/tools/colab.svg',
  },
  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },
];


const statsData: StatsType[] = [
  {
    number: '07+',
    label: 'Years Of Experience',
  },
  {
    number: '20+',
    label: 'Projects Done',
  },
];


export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  navLinks,
  statsData,
};
