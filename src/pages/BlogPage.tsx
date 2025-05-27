import React from 'react';
import { Link } from 'react-router-dom';

// Blog post type definition
type BlogPost = {
  id: number;
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
      id: 1,
      title: "5 Ways to Immerse Yourself in Ghanaian Culture",
      excerpt: "Discover authentic experiences in Ghana...",
      content: "Full blog post content here...",
      author: "Alicia",
      date: "May 15, 2025",
      category: "Ghana",
      imageUrl: "/images/ghana.jpg",
      tags: ["Ghana", "Culture", "Travel"]
    }
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      {blogPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p><em>by {post.author} on {post.date}</em></p>
          <p>{post.excerpt}</p>
          <Link to={`/blog/${post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
