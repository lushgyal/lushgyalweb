import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* About Banner */}
      <div className="bg-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About LushGyal Travel</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Designing experiences rooted in legacy, luxury, and personal transformation
          </p>
        </div>
      </div>
      
      {/* Founder Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" 
                alt="Lisa - Founder of LushGyal Travel" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Founder Story */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Meet Lisa</h2>
              <div className="w-20 h-1 bg-[#f8a0a0] mb-6"></div>
              <p className="text-gray-700 mb-4">
                I am Lisa, the founder of LushGyal Travel and Soultry Kreationz. As a travel business owner, author, soulful creator, and mentor, I design experiences rooted in legacy, luxury, and personal transformation.
              </p>
              <p className="text-gray-700 mb-4">
                My journey began with a deep desire to connect purpose-driven women with transformative travel experiences that blend luxury comfort with authentic cultural immersion. I believe that travel is not just about seeing new places—it's about discovering yourself.
              </p>
              <p className="text-gray-700 mb-6">
                Through LushGyal Travel, I curate luxury, family, and soulful group trips that connect you to heritage, healing, and joy. Each itinerary is thoughtfully crafted to balance cultural immersion with luxurious comfort, historical reflection with forward-looking celebration.
              </p>
              <div className="italic text-[#1e3a8a] border-l-4 border-[#f8a0a0] pl-4 mb-6">
                "Travel Far, Explore More, Discover Yourself."
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Our Mission & Values</h2>
            <div className="w-20 h-1 bg-[#f8a0a0] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              At LushGyal Travel, we're committed to creating transformative travel experiences that honor heritage, celebrate culture, and nurture personal growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#f8a0a0] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 text-center">Legacy & Heritage</h3>
              <p className="text-gray-700 text-center">
                We create experiences that connect travelers with their cultural roots and help build lasting legacies for future generations.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#f8a0a0] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 text-center">Soulful Luxury</h3>
              <p className="text-gray-700 text-center">
                We believe in creating comfortable, luxurious experiences that still maintain authentic connections to places and people.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#f8a0a0] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 text-center">Transformation</h3>
              <p className="text-gray-700 text-center">
                We design journeys that facilitate personal growth, healing, and self-discovery through meaningful travel experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* The LushGyal Difference */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4 text-center">The LushGyal Difference</h2>
            <div className="w-20 h-1 bg-[#f8a0a0] mx-auto mb-12"></div>
            
            <div className="space-y-12">
              {/* Difference 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-20 h-20 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 text-center md:text-left">Curated Experiences</h3>
                  <p className="text-gray-700">
                    Our itineraries go beyond typical tourist attractions to include meaningful cultural exchanges, spiritual moments, and transformative experiences that can't be found in standard travel guides.
                  </p>
                </div>
              </div>
              
              {/* Difference 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-20 h-20 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 text-center md:text-left">Intentional Design</h3>
                  <p className="text-gray-700">
                    Every element of our travel guides is thoughtfully designed to create space for reflection, connection, and joy. From daily affirmations to outfit suggestions, we consider the whole travel experience.
                  </p>
                </div>
              </div>
              
              {/* Difference 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-20 h-20 bg-[#1e3a8a] rounded-full flex items-center justify-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 text-center md:text-left">Community Focus</h3>
                  <p className="text-gray-700">
                    We believe travel is better when shared. Our guides and group trips foster a sense of community among like-minded travelers seeking meaningful connections and shared experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-[#1e3a8a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our digital travel guides or join our community of soulful travelers today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-[#1e3a8a] font-bold py-3 px-8 rounded-full transition-colors">
              Explore Our Guides
            </button>
            <button className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors">
              Join Our Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
