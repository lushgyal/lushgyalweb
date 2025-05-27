import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Replace with actual image when available */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1528277342758-f1d7613953a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="block">Travel Far, Explore More,</span>
          <span className="block">Discover Yourself</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Luxury, soulful travel experiences designed for transformation
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#1e3a8a] hover:bg-[#152a62] text-white font-bold py-3 px-8 rounded-full transition-colors">
            Explore Our Guides
          </button>
          <button className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors">
            Join Our Community
          </button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
