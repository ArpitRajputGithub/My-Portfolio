import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import heroImage from '../../assets/hero-image.jpg';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-secondary-50 dark:from-secondary-900 dark:to-secondary-800"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-secondary-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500 dark:from-primary-400 dark:to-accent-400">
                Arpit Rajput
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary-800 dark:text-secondary-100">
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'React.js Expert',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-primary-600 dark:text-primary-400"
              />
            </h2>
            
            <p className="text-lg mb-8 text-secondary-700 dark:text-secondary-200 max-w-xl leading-relaxed">
              I create responsive and performant web applications with modern technologies. 
              Passionate about building user-friendly interfaces and delivering exceptional digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://arpitresume2025.tiiny.site"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full sm:w-auto text-center"
              >
                Download My Resume
              </a>
              <Link to="/contact" className="btn btn-outline w-full sm:w-auto text-center">
                Contact Me
              </Link>
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/ArpitRajputGithub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="GitHub"
              >
                <AiFillGithub size={24} />
              </a>
              <a
                href="http://www.linkedin.com/in/arpit-rajput-831393213"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/arpitstwt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Twitter"
              >
                <AiOutlineTwitter size={24} />
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 dark:from-primary-400 dark:to-accent-400 opacity-75 blur-md"></div>
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Arpit Rajput"
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white dark:border-secondary-800 shadow-xl"
                />
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-accent-500 rounded-full blur-xl opacity-80 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-20 h-20 bg-primary-500 rounded-full blur-xl opacity-80 animate-pulse delay-700"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 