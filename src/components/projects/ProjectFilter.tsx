import { useState } from 'react';
import { motion } from 'framer-motion';

type ProjectFilterProps = {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
};

export const ProjectFilter = ({ categories, activeCategory, onChange }: ProjectFilterProps) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap gap-3 mb-10 justify-center">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        const isHovered = category === hoveredCategory;
        
        return (
          <motion.button
            key={category}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative 
              ${isActive 
                ? 'text-white' 
                : 'text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            onClick={() => onChange(category)}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background */}
            {isActive && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg -z-10"
                layoutId="activeCategory"
                initial={false}
              />
            )}
            
            {/* Hover indicator */}
            {!isActive && isHovered && (
              <motion.div
                className="absolute inset-0 bg-secondary-100 dark:bg-secondary-800 rounded-lg -z-10"
                layoutId="hoverCategory"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
            
            {category}
          </motion.button>
        );
      })}
    </div>
  );
}; 