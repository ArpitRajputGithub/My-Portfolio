import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  content: string;
  slug: string;
}

export const BlogPost = ({ title, date, readTime, content}: BlogPostProps) => {
  // Split content into sections based on numbered headings
  const sections = content.split(/(?=\d+\.)/).map(section => section.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-secondary-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <Link
          to="/blog"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors mb-6"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
          {title}
        </h1>

        <div className="flex items-center gap-4 mb-8 text-secondary-600 dark:text-secondary-400 text-sm">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {sections.map((section, index) => {
            // Check if section starts with a number and dot
            if (/^\d+\./.test(section)) {
              // Split into title and content
              const [title, ...contentParts] = section.split('\n');
              const content = contentParts.join('\n');
              
              return (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    {title}
                  </h2>
                  <div className="text-secondary-700 dark:text-secondary-300">
                    {content.split('\n').map((line, i) => {
                      if (line.startsWith('-')) {
                        return (
                          <ul key={i} className="list-disc pl-6 mb-4">
                            <li>{line.substring(1).trim()}</li>
                          </ul>
                        );
                      }
                      return <p key={i} className="mb-4">{line}</p>;
                    })}
                  </div>
                </div>
              );
            }
            return <p key={index} className="mb-4">{section}</p>;
          })}
        </div>
      </div>
    </motion.div>
  );
}; 