import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { Section } from '../components/ui/Section';
import { ProjectCard } from '../components/ui/ProjectCard';
import { MasonryGrid } from '../components/projects/MasonryGrid';
import { ProjectFilter } from '../components/projects/ProjectFilter';
import { projects, getProjectCategories } from '../data/projects';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Add 'all' category at the beginning
    setCategories(['all', ...getProjectCategories()]);
  }, []);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    
    if (category === 'all') {
      setFilteredProjects(
        projects.filter((project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProjects(
        projects.filter(
          (project) =>
            project.category === category &&
            project.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query) {
      setFilteredProjects(
        projects.filter((project) =>
          project.title.toLowerCase().includes(query.toLowerCase()) && 
          (activeCategory === 'all' || project.category === activeCategory)
        )
      );
    } else {
      if (activeCategory === 'all') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.category === activeCategory));
      }
    }
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Projects | Arpit Rajput</title>
        <meta name="description" content="Explore my portfolio of web development projects, showcasing my skills in React, Node.js, and more." />
        <meta property="og:title" content="Projects | Arpit Rajput" />
        <meta property="og:description" content="Explore my portfolio of web development projects, showcasing my skills in React, Node.js, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com/projects" />
      </Helmet>

      <Layout>
        <Section bgColor="light" paddingY="large">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto"
          >
            <motion.div 
              className="text-center mb-12"
              variants={titleVariants}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
                My Projects
              </h1>
              
              <p className="text-xl text-secondary-700 dark:text-secondary-300 max-w-3xl mx-auto">
                A showcase of my web and mobile application development work, from e-commerce platforms to interactive tools.
              </p>
            </motion.div>

            {/* Search bar */}
            <div className="max-w-lg mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <div className="absolute right-3 top-3 text-secondary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <ProjectFilter 
              categories={categories} 
              activeCategory={activeCategory}
              onChange={handleCategoryChange} 
            />

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="mt-10">
                <MasonryGrid columns={3} gap={30}>
                  {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </MasonryGrid>
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  No projects found
                </h3>
                <p className="text-secondary-700 dark:text-secondary-300">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </motion.div>
        </Section>
      </Layout>
    </>
  );
}; 