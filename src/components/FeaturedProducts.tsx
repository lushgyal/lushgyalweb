import React from 'react';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">Featured Travel Guides</h2>
          <div className="w-20 h-1 bg-[#f8a0a0] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Discover our carefully crafted travel experiences and digital guides
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Product 1 - Ghana */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Ghana Cultural & Legacy Tour" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#f8a0a0] text-white text-sm font-bold px-3 py-1 rounded-full">
                Featured
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Ghana Cultural & Legacy Tour</h3>
              <p className="text-gray-700 mb-4">
                A 10-day luxury and cultural travel itinerary designed for soulful travelers seeking connection, heritage, and healing.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#1e3a8a] font-bold">$47.00</span>
                <button className="bg-[#1e3a8a] hover:bg-[#152a62] text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          {/* Featured Product 2 - Jamaica */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1580102056045-276abbd0c6e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Jamaica Retreat Guide" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#1e3a8a] text-white text-sm font-bold px-3 py-1 rounded-full">
                Coming Soon
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Jamaica Retreat Guide</h3>
              <p className="text-gray-700 mb-4">
                A rejuvenating escape to Jamaica's most serene locations, combining beach relaxation with cultural immersion.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-bold">Join Waitlist</span>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full text-sm transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
          
          {/* Featured Product 3 - South Africa */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1576485375217-d6a95e34d043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="South Africa Explorer" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#1e3a8a] text-white text-sm font-bold px-3 py-1 rounded-full">
                Coming Soon
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">South Africa Explorer</h3>
              <p className="text-gray-700 mb-4">
                Experience the diverse beauty of South Africa, from vibrant cities to stunning wildlife and rich cultural heritage.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-bold">Join Waitlist</span>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full text-sm transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-transparent hover:bg-[#1e3a8a] text-[#1e3a8a] hover:text-white border-2 border-[#1e3a8a] font-bold py-3 px-8 rounded-full transition-colors">
            View All Travel Guides
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
