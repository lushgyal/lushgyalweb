import React from 'react';
import { Link } from 'react-router-dom';

// Blog post type definition
type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  tags: string[];
};

const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '5 Ways to Immerse Yourself in Ghanaian Culture',
      excerpt: 'Discover authentic ways to connect with the heart of Ghana...',
      content: 'Full blog post content goes here...',
      author: 'Alicia V',
      date: 'May 15, 2025',
      category: 'Cultural Travel',
      imageUrl: '/images/ghana.jpg',
      tags: ['Ghana', 'Culture', 'Africa'],
    },
  ];

  return (
    <div>
      <h1>Our Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link to={`/blog/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
