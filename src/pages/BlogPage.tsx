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
  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 'ghana-cultural-immersion',
      title: '5 Ways to Immerse Yourself in Ghanaian Culture',
      excerpt: 'Discover authentic ways to connect with Ghana's rich cultural heritage beyond the typical tourist experiences.',
      content: 'Full blog post content would go here...',
      author: 'Lisa',
      date: 'May 15, 2025',
      category: 'Cultural Travel',
      imageUrl: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['Ghana', 'Culture', 'Heritage Travel']
    },
    {
      id: 'travel-journaling-tips',
      title: 'How to Create a Meaningful Travel Journal',
      excerpt: 'Learn how to document your travel experiences in a way that captures not just places, but transformations.',
      content: 'Full blog post content would go here...',
      author: 'Lisa',
      date: 'April 28, 2025',
      category: 'Travel Tips',
      imageUrl: 'https://images.unsplash.com/photo-1527168027773-0cc890c4f42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['Journaling', 'Self-Discovery', 'Travel Tips']
    },
    {
      id: 'diaspora-return-journey',
      title: 'The Emotional Journey of Diaspora Return Travel',
      excerpt: 'Exploring the complex emotions and healing that can come from returning to ancestral homelands.',
      content: 'Full blog post content would go here...',
      author: 'Lisa',
      date: 'April 10, 2025',
      category: 'Heritage Travel',
      imageUrl: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      tags: ['Diaspora', 'Heritage', 'Healing']
    },
    {
      id: 'luxury-travel-with-purpose',
      title: 'Luxury Travel with Purpose: Finding Balance',
      excerpt: 'How to enjoy luxurious travel experiences while maintaining authentic connections and purpose.',
      content: 'Full blog post content would go here...',
      author: 'Lisa',
      date: 'March 22, 2025',
      category: 'Luxury Travel',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['Luxury', 'Mindful Travel', 'Authenticity']
    },
    {
      id: 'building-travel-business',
      title: 'Building a Soulful Travel Business: My Journey',
      excerpt: 'Lessons learned and insights gained from creating a purpose-driven travel business.',
      content: 'Full blog post content would go here...',
      author: 'Lisa',
      date: 'March 5, 2025',
      category: 'Entrepreneurship',
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['Business', 'Entrepreneurship', 'Travel Industry']
    },
    {
      id: 'family-heritage-travel',
      title: 'Creating Meaningful Heritage Travel Experiences for Families',
      excerpt: 'How to plan family trips that connect children with their cultural roots in engaging ways.',
      content: 'Full blog post content would go here...',
      author: 'Lisa',
      date: 'February 18, 2025',
      category: 'Family Travel',
      imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['Family', 'Heritage', 'Children']
    },
  ];

  // State for category filter (would be implemented with useState in a real component)
  const activeCategory = 'all';
  
  // All unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  return (
    <div>
      {/* Blog Banner */}
      <div className="bg-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Soulful Travel Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Insights, inspiration, and guidance for transformative travel experiences
          </p>
        </div>
      </div>
      
      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((category, index) => (
                  <button 
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                      activeCategory === (index === 0 ? 'all' : category.toLowerCase()) 
                        ? 'bg-[#1e3a8a] text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map(post => (
                  <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.category}</span>
                      </div>
                      <h2 className="text-xl font-bold text-[#1e3a8a] mb-2">
                        <Link to={`/blog/${post.id}`} className="hover:text-[#f8a0a0] transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-700 mb-4">
                        {post.excerpt}
                      </p>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-[#1e3a8a] hover:text-[#f8a0a0] font-bold flex items-center"
                      >
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1e3a8a] text-white">1</button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-gray-200">2</button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-gray-200">3</button>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* About Author */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" 
                      alt="Lisa - Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e3a8a]">Lisa</h3>
                    <p className="text-gray-600 text-sm">Founder, LushGyal Travel</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Travel business owner, author, soulful creator, and mentor designing experiences rooted in legacy, luxury, and personal transformation.
                </p>
                <Link 
                  to="/about" 
                  className="text-[#1e3a8a] hover:text-[#f8a0a0] font-bold flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              {/* Popular Posts */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => (
                    <div key={post.id} className="flex items-center">
                      <div className="w-16 h-16 rounded overflow-hidden mr-4">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 hover:text-[#1e3a8a] transition-colors">
                          <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </h4>
                        <p className="text-gray-500 text-sm">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.slice(1).map((category, index) => (
                    <li key={index}>
                      <Link 
                        to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex justify-between items-center text-gray-700 hover:text-[#1e3a8a] transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {blogPosts.filter(post => post.category === category).length}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag, index) => (
                    <Link 
                      key={index}
                      to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-gray-100 text-gray-700 hover:bg-[#1e3a8a] hover:text-white px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-[#1e3a8a] rounded-lg shadow-md p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Join Our Newsletter</h3>
                <p className="mb-4">
                  Get the latest travel tips, destination insights, and exclusive offers delivered to your inbox.
                </p>
                <form>
                  <div className="mb-4">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f8a0a0]"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[#f8a0a0] hover:bg-[#e58a8a] text-white font-bold py-2 px-4 rounded-lg transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
