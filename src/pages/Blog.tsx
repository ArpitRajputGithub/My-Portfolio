import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/layout/Layout';
import { Section } from '../components/ui/Section';
import { BlogCard } from '../components/blog/BlogCard';
import { blogPosts } from '../data/blogPosts';

export const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Arpit Rajput</title>
        <meta name="description" content="Read my thoughts and tutorials on web development, design, and technology." />
      </Helmet>

      <Layout>
        <Section paddingY="large">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-8">
              Blog
            </h1>
            
            <div className="grid gap-8">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  date={post.date}
                  readTime={post.readTime}
                  excerpt={post.excerpt}
                  slug={post.slug}
                />
              ))}
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
};