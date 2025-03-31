import React from 'react';

interface BlogPostContentProps {
  title: string;
  content: string;
}

export const BlogPostContent: React.FC<BlogPostContentProps> = ({ title, content }) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <p className="text-xl text-secondary-700 dark:text-secondary-300 mb-8">
        {content}
      </p>
    </div>
  );
}; 