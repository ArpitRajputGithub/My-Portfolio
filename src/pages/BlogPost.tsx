import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Section } from '../components/ui/Section';
import { BlogPost as BlogPostComponent } from '../components/blog/BlogPost';
import { blogPosts } from '../data/blogPosts';

export const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <Layout>
        <Section paddingY="large">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Post Not Found
            </h1>
            <p className="text-secondary-700 dark:text-secondary-300">
              The blog post you're looking for doesn't exist.
            </p>
          </div>
        </Section>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Arpit Rajput</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <Layout>
        <Section paddingY="large">
          <div className="max-w-4xl mx-auto">
            <BlogPostComponent
              title={post.title}
              date={post.date}
              readTime={post.readTime}
              content={post.content}
              slug={post.slug}
            />
          </div>
        </Section>
      </Layout>
    </>
  );
}; 