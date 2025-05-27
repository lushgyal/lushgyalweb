import React from 'react';

const BrandStory: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">Welcome to LushGyal Travel</h2>
          <div className="w-20 h-1 bg-[#f8a0a0] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-8">
            Where luxury meets soul-stirring transformation through travel
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image - Replace with actual image when available */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Soulful travel experience" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Our Story</h3>
            <p className="text-gray-700 mb-4">
              I am Lisa, the founder of LushGyal Travel and Soultry Kreationz. As a travel business owner, author, soulful creator, and mentor, I design experiences rooted in legacy, luxury, and personal transformation.
            </p>
            <p className="text-gray-700 mb-6">
              LushGyal Travel curates luxury, family, and soulful group trips that connect you to heritage, healing, and joy. Each itinerary is thoughtfully crafted to balance cultural immersion with luxurious comfort, historical reflection with forward-looking celebration.
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-start">
                <div className="bg-[#f8a0a0] p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a8a]">Luxury Experiences</h4>
                  <p className="text-gray-700">Carefully curated travel that balances comfort with authentic immersion</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#f8a0a0] p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a8a]">Cultural Connection</h4>
                  <p className="text-gray-700">Journeys that reconnect you with heritage, history, and ancestral wisdom</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#f8a0a0] p-2 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a8a]">Personal Transformation</h4>
                  <p className="text-gray-700">Travel as a pathway to healing, growth, and self-discovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
