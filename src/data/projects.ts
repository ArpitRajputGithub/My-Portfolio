import { Project } from '../components/ui/ProjectCard';
import Plunge from '../assets/Plunge.jpg';

export const projects: Project[] = [
  {
    id: "1",
    title: "Social Media platform website",
    description: "A comprehensive dashboard for e-commerce store owners to track sales, inventory, and customer metrics in real-time.",
    image: Plunge,
    tags: ["React", "TypeScript", "Tailwind CSS",],
    github: "https://github.com/ArpitRajputGithub/Plunge",
    liveUrl: "https://plunge.one",
    featured: true,
    category: "Web App"
  },
  // {
  //   id: "task-management",
  //   title: "Task Management App",
  //   description: "A Kanban-style task management application that helps teams organize workflow and track project progress.",
  //   image: 'https://via.placeholder.com/600x400/0c4a6e/FFFFFF?text=Task+Management+App',
  //   tags: ["React", "Firebase", "Tailwind CSS", "DnD", "Authentication"],
  //   github: "https://github.com/yourusername/task-management",
  //   liveUrl: "https://task-app.example.com",
  //   featured: true,
  //   category: "Web App"
  // },
  // {
  //   id: "finance-tracker",
  //   title: "Finance Tracker",
  //   description: "Personal finance application that helps users track expenses, create budgets, and visualize spending patterns.",
  //   image: 'https://via.placeholder.com/600x400/0f172a/FFFFFF?text=Finance+Tracker',
  //   tags: ["React", "Node.js", "Express", "MongoDB", "D3.js"],
  //   github: "https://github.com/yourusername/finance-tracker",
  //   liveUrl: "https://finance-tracker.example.com",
  //   featured: true,
  //   category: "Full Stack"
  // },
  // {
  //   id: "weather-app",
  //   title: "Weather App",
  //   description: "A weather application providing real-time forecasts, radar maps, and weather alerts for locations worldwide.",
  //   image: 'https://via.placeholder.com/600x400/0284c7/FFFFFF?text=Weather+App',
  //   tags: ["React", "OpenWeather API", "GeoLocation", "PWA"],
  //   github: "https://github.com/yourusername/weather-app",
  //   liveUrl: "https://weather-app.example.com",
  //   category: "Web App"
  // },
  // {
  //   id: "recipe-finder",
  //   title: "Recipe Finder",
  //   description: "A culinary companion app that helps users discover recipes based on ingredients they already have in their kitchen.",
  //   image: 'https://via.placeholder.com/600x400/4d7c0f/FFFFFF?text=Recipe+Finder',
  //   tags: ["React", "Spoonacular API", "Styled Components", "PWA"],
  //   github: "https://github.com/yourusername/recipe-finder",
  //   liveUrl: "https://recipe-finder.example.com",
  //   category: "Web App"
  // },
  // {
  //   id: "fitness-app",
  //   title: "Fitness Tracker",
  //   description: "A fitness companion app that allows users to track workouts, set goals, and monitor progress over time.",
  //   image: 'https://via.placeholder.com/600x400/7e22ce/FFFFFF?text=Fitness+App',
  //   tags: ["React Native", "Expo", "Firebase", "Health APIs"],
  //   github: "https://github.com/yourusername/fitness-app",
  //   category: "Mobile App"
  // },
  // {
  //   id: "real-estate",
  //   title: "Real Estate Platform",
  //   description: "A real estate listing platform with advanced search, neighborhood insights, and mortgage calculators.",
  //   image: 'https://via.placeholder.com/600x400/b91c1c/FFFFFF?text=Real+Estate+Platform',
  //   tags: ["Next.js", "MongoDB", "Google Maps API", "Authentication"],
  //   github: "https://github.com/yourusername/real-estate",
  //   liveUrl: "https://realestate.example.com",
  //   category: "Full Stack"
  // },
  // {
  //   id: "social-network",
  //   title: "Social Network",
  //   description: "A niche social networking platform for connecting professionals in the tech industry.",
  //   image: 'https://via.placeholder.com/600x400/db2777/FFFFFF?text=Social+Network',
  //   tags: ["React", "Node.js", "Socket.io", "MongoDB", "AWS"],
  //   github: "https://github.com/yourusername/social-network",
  //   category: "Full Stack"
  // },
  // {
  //   id: "e-learning",
  //   title: "E-Learning Platform",
  //   description: "An educational platform offering interactive courses, quizzes, and progress tracking for students.",
  //   image: 'https://via.placeholder.com/600x400/9333ea/FFFFFF?text=E-Learning+Platform',
  //   tags: ["React", "Firebase", "Video Streaming", "Payment Integration"],
  //   github: "https://github.com/yourusername/e-learning",
  //   liveUrl: "https://elearning.example.com",
  //   category: "Web App"
  // },
  // {
  //   id: "music-streaming",
  //   title: "Music Streaming App",
  //   description: "A music streaming application with playlist creation, artist discovery, and personalized recommendations.",
  //   image: 'https://via.placeholder.com/600x400/0f766e/FFFFFF?text=Music+Streaming',
  //   tags: ["React", "Node.js", "MongoDB", "Web Audio API"],
  //   github: "https://github.com/yourusername/music-app",
  //   category: "Full Stack"
  // }
];

export const getProjectCategories = (): string[] => {
  const categories = projects.map(project => project.category);
  return Array.from(new Set(categories));
}; 