import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/layout/Layout';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { FiArrowLeft } from 'react-icons/fi';

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Arpit Rajput</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <Layout>
        <Section paddingY="large">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              404
            </h1>
            
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
              Page Not Found
            </h2>
            
            <p className="text-xl text-secondary-600 dark:text-secondary-400 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            
            <Button
              as="routerLink"
              to="/"
              variant="primary"
              size="lg"
            >
              <FiArrowLeft className="mr-2" /> Back to Home
            </Button>
          </div>
        </Section>
      </Layout>
    </>
  );
}; 