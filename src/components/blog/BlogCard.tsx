import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  slug: string;
}

export const BlogCard = ({ title, date, readTime, excerpt, slug }: BlogCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-secondary-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div className="p-6">
      <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
        <Link to={`/blog/${slug}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          {title}
        </Link>
      </h2>
      <div className="flex items-center gap-4 mb-4 text-secondary-600 dark:text-secondary-400 text-sm">
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
      <p className="text-secondary-700 dark:text-secondary-300 mb-4">
        {excerpt}
      </p>
      <Link 
        to={`/blog/${slug}`}
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
      >
        Read more
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </motion.div>
); 