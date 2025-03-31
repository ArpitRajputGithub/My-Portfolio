import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/layout/Layout';
import { Section } from '../components/ui/Section';
import { ContactForm } from '../components/contact/ContactForm';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

export const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMapPin className="text-2xl text-primary-600 dark:text-primary-400" />,
      title: 'Location',
      details: 'New Delhi, Delhi, India',
    },
    {
      icon: <FiMail className="text-2xl text-primary-600 dark:text-primary-400" />,
      title: 'Email',
      details: 'work.arpitrajput@gmail.com',
      link: 'mailto:work.arpitrajput@gmail.com',
    },
    {
      icon: <FiPhone className="text-2xl text-primary-600 dark:text-primary-400" />,
      title: 'Phone',
      details: '+91 8279437447',
      link: 'tel:+918279437447',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Me | Arpit Rajput</title>
        <meta name="description" content="Get in touch with me for freelance opportunities, project inquiries, or just to say hello." />
        <meta property="og:title" content="Contact Me | Arpit Rajput" />
        <meta property="og:description" content="Get in touch with me for freelance opportunities, project inquiries, or just to say hello." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com/contact" />
      </Helmet>

      <Layout>
        <Section paddingY="large">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
                Get In Touch
              </h1>
              <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-secondary-800 rounded-xl shadow-md p-6 text-center transition-all hover:shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-secondary-600 dark:text-secondary-400">{item.details}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                  Let's Work Together
                </h2>
                <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                  Whether you need a new website, a custom web application, or
                  consultation on your existing project, I'm here to help turn
                  your ideas into reality.
                </p>
                <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                  Fill out the form with details about your project, and I'll
                  get back to you as soon as possible to discuss how we can
                  collaborate.
                </p>
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 border-l-4 border-primary-500">
                  <p className="text-secondary-800 dark:text-secondary-200">
                    Currently available for freelance projects and collaborations.
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
}; 