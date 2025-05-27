import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostPage: React.FC = () => {
  // Sample blog post data (in a real implementation, this would be fetched based on the URL parameter)
  const post = {
    id: 'ghana-cultural-immersion',
    title: '5 Ways to Immerse Yourself in Ghanaian Culture',
    excerpt: 'Discover authentic ways to connect with Ghana's rich cultural heritage beyond the typical tourist experiences.',
    content: `
      <p>When traveling to Ghana, there's so much more to experience than just visiting tourist attractions. True cultural immersion allows you to connect with the heart and soul of this vibrant West African nation. Here are five meaningful ways to deeply immerse yourself in Ghanaian culture during your visit.</p>
      
      <h2>1. Learn Basic Twi Phrases</h2>
      <p>Language is the gateway to culture. While English is widely spoken in Ghana, making an effort to learn a few phrases in Twi (one of the major local languages) shows respect and opens doors to more authentic interactions. Start with simple greetings like "Akwaaba" (welcome), "Me da wo ase" (thank you), and "Ɛte sɛn?" (how are you?). Ghanaians deeply appreciate visitors who make this effort, and you'll find it creates instant connections.</p>
      
      <h2>2. Participate in a Traditional Naming Ceremony</h2>
      <p>One of the most profound cultural experiences available to visitors is participating in a traditional naming ceremony. Many communities offer the opportunity for visitors to receive a Ghanaian name based on the day of the week you were born, your personality traits, or family lineage. This ceremony, often accompanied by drumming and dancing, creates a meaningful connection to Ghanaian heritage and gives you a personal souvenir that goes beyond physical objects.</p>
      
      <h2>3. Learn Traditional Drumming and Dancing</h2>
      <p>Rhythm is at the heart of Ghanaian culture. Taking a drumming or dancing workshop allows you to understand the complex patterns and movements that tell stories and preserve history. The Dagomba in the north, the Ewe in the east, and the Akan in central and southern regions all have distinct drumming traditions. Many cultural centers in Accra and Kumasi offer workshops where you can learn the basics and understand the cultural significance behind each beat and movement.</p>
      
      <h2>4. Stay in a Community Homestay</h2>
      <p>While luxury accommodations have their place, spending at least a few nights in a community homestay provides unparalleled cultural insights. Living with a Ghanaian family allows you to observe and participate in daily routines, from food preparation to evening storytelling. You'll gain perspectives on family dynamics, values, and traditions that remain invisible to those who only interact with Ghana through commercial establishments.</p>
      
      <h2>5. Attend a Traditional Festival</h2>
      <p>Ghana's calendar is filled with vibrant traditional festivals that showcase the country's rich cultural heritage. From the Homowo festival of the Ga people to the Akwasidae celebrations of the Ashanti, these events feature colorful processions, traditional music, dance performances, and rituals that have been preserved for generations. Planning your trip around one of these festivals provides a window into Ghana's living cultural traditions and spiritual practices.</p>
      
      <p>Cultural immersion isn't just about observing—it's about participating with an open heart and mind. By engaging in these experiences, you'll return home with more than photographs; you'll carry with you a deeper understanding of Ghana's cultural wealth and perhaps even new perspectives on your own identity and heritage.</p>
    `,
    author: 'Lisa',
    date: 'May 15, 2025',
    category: 'Cultural Travel',
    imageUrl: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['Ghana', 'Culture', 'Heritage Travel'],
    relatedPosts: [
      {
        id: 'diaspora-return-journey',
        title: 'The Emotional Journey of Diaspora Return Travel',
        excerpt: 'Exploring the complex emotions and healing that can come from returning to ancestral homelands.',
        imageUrl: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        date: 'April 10, 2025'
      },
      {
        id: 'family-heritage-travel',
        title: 'Creating Meaningful Heritage Travel Experiences for Families',
        excerpt: 'How to plan family trips that connect children with their cultural roots in engaging ways.',
        imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        date: 'February 18, 2025'
      }
    ]
  };

  return (
    <div>
      {/* Blog Post Banner */}
      <div 
        className="relative h-[50vh] flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${post.imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="mb-4">
              <span className="bg-[#f8a0a0] text-white px-3 py-1 rounded-full text-sm font-bold">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center text-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" 
                    alt={post.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>{post.author}</span>
              </div>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-[#1e3a8a]">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-[#1e3a8a]">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1e3a8a] font-medium">{post.title}</span>
          </div>
        </div>
      </div>
      
      {/* Blog Post Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                
                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
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
                
                {/* Author Bio */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" 
                        alt={post.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1e3a8a]">{post.author}</h3>
                      <p className="text-gray-600 text-sm">Founder, LushGyal Travel</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4">
                    Travel business owner, author, soulful creator, and mentor designing experiences rooted in legacy, luxury, and personal transformation.
                  </p>
                </div>
                
                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-bold text-gray-700 mb-4">Share This Post</h3>
                  <div className="flex space-x-4">
                    <button className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#E60023] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Related Posts */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">Related Posts</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {post.relatedPosts.map(relatedPost => (
                    <div key={relatedPost.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={relatedPost.imageUrl} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-gray-500 mb-2">{relatedPost.date}</div>
                        <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                          <Link to={`/blog/${relatedPost.id}`} className="hover:text-[#f8a0a0] transition-colors">
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-gray-700 mb-4">
                          {relatedPost.excerpt}
                        </p>
                        <Link 
                          to={`/blog/${relatedPost.id}`}
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
              
              {/* Featured Product */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Featured Guide</h3>
                <div className="rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Ghana Cultural & Legacy Tour" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <h4 className="font-bold text-[#1e3a8a] mb-2">Ghana Cultural & Legacy Tour</h4>
                <p className="text-gray-700 mb-4">
                  A 10-day luxury and cultural travel itinerary designed for soulful travelers seeking connection, heritage, and healing.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#1e3a8a] font-bold">$47.00</span>
                  <Link 
                    to="/shop/ghana-itinerary" 
                    className="bg-[#1e3a8a] hover:bg-[#152a62] text-white font-bold py-2 px-4 rounded-full text-sm transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              
              {/* Tags */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Ghana', 'Culture', 'Heritage', 'Diaspora', 'Family Travel', 'Luxury', 'Transformation'].map((tag, index) => (
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

export default BlogPostPage;
