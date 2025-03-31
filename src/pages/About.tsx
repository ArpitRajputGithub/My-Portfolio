import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { Section } from '../components/ui/Section';
import { FiCode, FiServer, FiDatabase, FiTool, FiAward } from 'react-icons/fi';
import mePhoto from '../assets/hero-image.jpg';

export const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Tech stack data
  const techStack = {
    frontend: [
      { name: 'React', proficiency: 90 },
      { name: 'TypeScript', proficiency: 85 },
      { name: 'Next.js', proficiency: 80 },
      { name: 'Tailwind CSS', proficiency: 95 },
      { name: 'Framer Motion', proficiency: 75 },
    ],
    backend: [
      { name: 'Node.js', proficiency: 85 },
      { name: 'Express', proficiency: 80 },
      { name: 'GraphQL', proficiency: 70 },
      { name: 'MongoDB', proficiency: 75 },
      { name: 'PostgreSQL', proficiency: 70 },
    ],
    tools: [
      { name: 'Git', proficiency: 90 },
      { name: 'Docker', proficiency: 75 },
      { name: 'AWS', proficiency: 65 },
      { name: 'CI/CD', proficiency: 70 },
      { name: 'Jest', proficiency: 80 },
    ],
  };

  // Experience data
  const experienceData = [
    // {
    //   title: 'Senior Full Stack Developer',
    //   company: 'Tech Innovations Inc.',
    //   period: 'Jan 2022 - Present',
    //   description: 'Lead development of multiple web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers.',
    // },
    {
      title: 'Full Stack Developer',
      company: 'Plunge',
      period: 'Dec 2024 - Present',
      description: 'Developed and maintained e-commerce platforms and business applications using React, Express, and MongoDB. Implemented responsive designs and optimized application performance.',
    },
    // {
    //   title: 'Frontend Developer',
    //   company: 'Creative Web Studios',
    //   period: 'Jun 2018 - Feb 2020',
    //   description: 'Created responsive and interactive user interfaces for client websites. Worked with HTML5, CSS3, JavaScript, and React to build modern web experiences.',
    // },
  ];

  // Education data
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Guru Gobind Singh Indraprastha University',
      period: '2022 - 2026',
      description: 'Specialized in Web Technologies and Cloud Computing. Graduated with honors.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Me | Arpit Rajput</title>
        <meta name="description" content="Learn more about me, my skills, experience, and background as a full-stack developer." />
        <meta property="og:title" content="About Me | Arpit Rajput" />
        <meta property="og:description" content="Learn more about me, my skills, experience, and background as a full-stack developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com/about" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <Section paddingY="large">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              About Me
            </h1>
            
            <p className="text-xl text-secondary-600 dark:text-secondary-400 mb-8">
              I'm a passionate full-stack developer with over 2 years of experience
              building modern web applications and digital experiences.
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-400">
                <img src={mePhoto} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <p className="text-lg text-secondary-700 dark:text-secondary-300">
              I specialize in building responsive, performant, and accessible web applications
              using modern technologies like React, TypeScript, Node.js, and more. With a keen eye for
              design and a focus on user experience, I create digital products that not only look
              great but also provide exceptional functionality.
            </p>
          </motion.div>
        </Section>

        {/* Tech Stack Section */}
        <Section bgColor="light" paddingY="large">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Tech Stack
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Frontend */}
              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <FiCode className="text-2xl text-primary-600 dark:text-primary-400 mr-2" />
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                    Frontend
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {techStack.frontend.map((tech) => (
                    <div key={tech.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-secondary-700 dark:text-secondary-300">{tech.name}</span>
                        <span className="text-secondary-700 dark:text-secondary-300">{tech.proficiency}%</span>
                      </div>
                      <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                        <div 
                          className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full" 
                          style={{ width: `${tech.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Backend */}
              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <FiServer className="text-2xl text-primary-600 dark:text-primary-400 mr-2" />
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                    Backend
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {techStack.backend.map((tech) => (
                    <div key={tech.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-secondary-700 dark:text-secondary-300">{tech.name}</span>
                        <span className="text-secondary-700 dark:text-secondary-300">{tech.proficiency}%</span>
                      </div>
                      <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                        <div 
                          className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full" 
                          style={{ width: `${tech.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Tools & Deployment */}
              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <FiTool className="text-2xl text-primary-600 dark:text-primary-400 mr-2" />
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                    Tools & Deployment
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {techStack.tools.map((tech) => (
                    <div key={tech.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-secondary-700 dark:text-secondary-300">{tech.name}</span>
                        <span className="text-secondary-700 dark:text-secondary-300">{tech.proficiency}%</span>
                      </div>
                      <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                        <div 
                          className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full" 
                          style={{ width: `${tech.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Section>

        {/* Experience & Education Section */}
        <Section paddingY="large">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Experience */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center mb-8">
                  <FiAward className="text-3xl text-primary-600 dark:text-primary-400 mr-3" />
                  <h2 className="text-3xl font-bold text-secondary-900 dark:text-white">
                    Experience
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {experienceData.map((experience, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="relative pl-8 border-l-2 border-primary-500 dark:border-primary-400"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400"></div>
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {experience.company}
                      </p>
                      <p className="text-secondary-500 dark:text-secondary-400 mb-3">
                        {experience.period}
                      </p>
                      <p className="text-secondary-700 dark:text-secondary-300">
                        {experience.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center mb-8">
                  <FiDatabase className="text-3xl text-primary-600 dark:text-primary-400 mr-3" />
                  <h2 className="text-3xl font-bold text-secondary-900 dark:text-white">
                    Education
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {educationData.map((education, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="relative pl-8 border-l-2 border-primary-500 dark:border-primary-400"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400"></div>
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">
                        {education.degree}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {education.institution}
                      </p>
                      <p className="text-secondary-500 dark:text-secondary-400 mb-3">
                        {education.period}
                      </p>
                      <p className="text-secondary-700 dark:text-secondary-300">
                        {education.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Hobbies & Interests */}
        <Section bgColor="light" paddingY="large">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
              When I'm Not Coding
            </h2>
            
            <p className="text-lg text-secondary-700 dark:text-secondary-300 mb-8">
              I'm a firm believer in maintaining a healthy work-life balance. 
              When I'm not immersed in code, you can find me:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-md">
                <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">🏃‍♂️</div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                  Fitness
                </h3>
                <p className="text-secondary-700 dark:text-secondary-300">
                  Running, hiking, and strength training to stay active and energized.
                </p>
              </div>
              
              <div className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-md">
                <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                  Reading
                </h3>
                <p className="text-secondary-700 dark:text-secondary-300">
                  Science fiction, technology books, and philosophy to expand my mind.
                </p>
              </div>
              
              <div className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-md">
                <div className="text-primary-600 dark:text-primary-400 text-3xl mb-4">✈️</div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                  Traveling
                </h3>
                <p className="text-secondary-700 dark:text-secondary-300">
                  Exploring new cultures, cuisines, and natural wonders around the world.
                </p>
              </div>
            </div>
          </motion.div>
        </Section>
      </Layout>
    </>
  );
}; 