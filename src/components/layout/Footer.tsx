import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { FiArrowUp } from 'react-icons/fi';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary-100 dark:bg-secondary-900 py-12">
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="mb-8 p-3 rounded-full bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors shadow-md"
          >
            <FiArrowUp size={24} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500 dark:from-primary-400 dark:to-accent-400 font-mono tracking-tight mb-6"
          >
            {"<Arpit Rajput/>"}
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            <Link to="/" className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Projects
            </Link>
            <Link to="/blog" className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-5 mb-8">
            <a
              href="https://github.com/ArpitRajputGithub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
              aria-label="GitHub"
            >
              <AiFillGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/arpit-rajput-831393213"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 transition-colors"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/arpitstwt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
              aria-label="Twitter"
            >
              <AiOutlineTwitter size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-secondary-600 dark:text-secondary-400 text-sm">
            <p className="mb-1">© {new Date().getFullYear()} Arpit Rajput. All rights reserved.</p>
            {/* <p>Built with React, TypeScript and Tailwind CSS</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}; 