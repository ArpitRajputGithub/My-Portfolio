import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/home/Hero';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { FiArrowRight, FiCode, FiServer, FiLayers, FiSmartphone } from 'react-icons/fi';

export const Home = () => {
  // Skills data
  const skills = [
    {
      title: 'Front-End Development',
      icon: <FiCode className="text-3xl text-primary-600 dark:text-primary-400" />,
      description: 'Creating responsive and intuitive user interfaces with React, TypeScript, and modern CSS.',
    },
    {
      title: 'Back-End Development',
      icon: <FiServer className="text-3xl text-primary-600 dark:text-primary-400" />,
      description: 'Building robust APIs and services using Node.js, Express, and SQL/NoSQL databases.',
    },
    {
      title: 'Full-Stack Solutions',
      icon: <FiLayers className="text-3xl text-primary-600 dark:text-primary-400" />,
      description: 'Developing end-to-end solutions and deploying applications on AWS, Vercel, and Netlify.',
    },
    {
      title: 'Mobile Development',
      icon: <FiSmartphone className="text-3xl text-primary-600 dark:text-primary-400" />,
      description: 'Creating cross-platform mobile applications with React Native and Expo.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Arpit Rajput | Full-Stack Developer</title>
        <meta name="description" content="Full-stack developer specializing in modern web technologies, creating beautiful and performant user experiences." />
        <meta property="og:title" content="Arpit Rajput | Full-Stack Developer" />
        <meta property="og:description" content="Full-stack developer specializing in modern web technologies, creating beautiful and performant user experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com" />
        <meta property="og:image" content="https://yourportfolio.com/og-image.jpg" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <Hero />

        {/* Skills Section */}
        <Section bgColor="light" paddingY="large">
          <div className="text-center mb-16">
            <h2 className="section-heading">My Services</h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              I offer a range of services to help you build modern, performant, and user-friendly applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-secondary-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Featured Projects */}
        <FeaturedProjects />

        {/* CTA Section */}
        <Section paddingY="large">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading">Ready to start your project?</h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 mb-10">
              I'm currently available for freelance projects. Let's discuss how I can help bring your ideas to life.
            </p>
            <Button
              as="routerLink"
              to="/contact"
              variant="primary"
              size="lg"
            >
              Get in Touch <FiArrowRight className="ml-2" />
            </Button>
          </div>
        </Section>
      </Layout>
    </>
  );
}; 