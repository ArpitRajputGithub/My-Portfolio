import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub, FiInfo } from 'react-icons/fi';
import { motion } from 'framer-motion';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveUrl?: string;
  featured?: boolean;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card group overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
            Featured
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="absolute bottom-3 right-3 flex space-x-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 dark:bg-secondary-800/90 text-secondary-900 dark:text-white rounded-full hover:bg-primary-500 hover:text-white transition-colors"
              aria-label="View GitHub Repository"
            >
              <FiGithub />
            </a>
          )}
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 dark:bg-secondary-800/90 text-secondary-900 dark:text-white rounded-full hover:bg-accent-500 hover:text-white transition-colors"
              aria-label="View Live Project"
            >
              <FiExternalLink />
            </a>
          )}
          
          <Link 
            to={`/projects/${project.id}`}
            className="p-2 bg-white/90 dark:bg-secondary-800/90 text-secondary-900 dark:text-white rounded-full hover:bg-primary-600 hover:text-white transition-colors"
            aria-label="View Project Details"
          >
            <FiInfo />
          </Link>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2 py-1 rounded bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs font-medium px-2 py-1 rounded bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold mb-2 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-secondary-700 dark:text-secondary-300 text-sm line-clamp-2">
          {project.description}
        </p>
        
        {/* View Details Link */}
        <Link 
          to={`/projects/${project.id}`}
          className="inline-block mt-4 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
        >
          View Details
          <span className="ml-1 transition-transform group-hover:translate-x-1 inline-block">→</span>
        </Link>
      </div>
    </motion.div>
  );
}; 