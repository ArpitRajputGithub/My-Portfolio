import { motion } from 'framer-motion';
import { ProjectCard, Project } from '../ui/ProjectCard';
import { Button } from '../ui/Button';
import { FiArrowRight } from 'react-icons/fi';
import Plunge from '../../assets/Plunge.jpg';

// Sample projects data (in a real app, this would come from an API or CMS)
const sampleProjects: Project[] = [
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
  //   id: '2',
  //   title: 'Task Management App',
  //   description: 'A full-featured task management application with drag-and-drop functionality, labels, due dates, and team collaboration.',
  //   image: 'https://via.placeholder.com/600x400/0c4a6e/FFFFFF?text=Task+Management+App',
  //   tags: ['Next.js', 'MongoDB', 'Framer Motion', 'Tailwind CSS'],
  //   liveUrl: 'https://example.com/demo',
  //   github: 'https://github.com/yourusername/task-management',
  //   featured: true,
  //   category: 'Web App'
  // },
  // {
  //   id: '3',
  //   title: 'Personal Finance Tracker',
  //   description: 'A comprehensive personal finance management tool with expense tracking, budget planning, and visual reports.',
  //   image: 'https://via.placeholder.com/600x400/0f172a/FFFFFF?text=Finance+Tracker',
  //   tags: ['React', 'Node.js', 'Chart.js', 'PostgreSQL'],
  //   liveUrl: 'https://example.com/demo',
  //   github: 'https://github.com/yourusername/finance-tracker',
  //   featured: true,
  //   category: 'Full Stack'
  // },
];

export const FeaturedProjects = () => {
  // Filter to show only featured projects
  const featuredProjects = sampleProjects.filter(project => project.featured);
  
  // Controls for the staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-secondary-50 dark:bg-secondary-900">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-xl text-secondary-700 dark:text-secondary-300">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button
            as="routerLink"
            to="/projects"
            variant="secondary"
            size="lg"
          >
            View All Projects <FiArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}; 