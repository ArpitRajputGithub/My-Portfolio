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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Animated gradient background */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-400 dark:from-primary-400 dark:via-accent-400 dark:to-secondary-300 opacity-80 blur-xl animate-gradient"></div>
              
              {/* Pulsing circle animations */}
              <motion.div 
                className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-30 blur-2xl z-0"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.2, 0.3] 
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Inner glowing ring */}
              <div className="relative z-10 rounded-full p-1 bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 shadow-xl">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 blur-md opacity-75"></div>
                
                {/* Image container */}
                <div className="relative rounded-full bg-white dark:bg-secondary-900 p-2">
                  <img
                    src={heroImage} 
                    alt="Arpit Rajput"
                    className="rounded-full w-80 h-80 md:w-[28rem] md:h-[28rem] object-cover shadow-2xl"
                  />
                
                  {/* Floating accent elements */}
                  <motion.div 
                    className="absolute top-0 right-0 -mr-6 -mt-6 w-28 h-28 bg-accent-500 rounded-full blur-xl opacity-60 z-0"
                    animate={{ 
                      y: [0, -8, 0],
                      x: [0, 5, 0],
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                  
                  <motion.div 
                    className="absolute bottom-0 left-0 -ml-6 -mb-6 w-24 h-24 bg-primary-500 rounded-full blur-xl opacity-60 z-0"
                    animate={{ 
                      y: [0, 8, 0],
                      x: [0, -5, 0],
                      scale: [1, 1.15, 1] 
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 