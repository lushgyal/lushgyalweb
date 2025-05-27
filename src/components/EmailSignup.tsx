import React from 'react';

const EmailSignup: React.FC = () => {
  return (
    <section className="py-16 bg-[#1e3a8a] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Soulful Travel Community</h2>
          <div className="w-20 h-1 bg-[#f8a0a0] mx-auto mb-6"></div>
          <p className="text-lg mb-8">
            Subscribe to receive exclusive travel tips, early access to new guides, and special offers.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f8a0a0]"
              />
              <button className="bg-[#f8a0a0] hover:bg-[#e58a8a] text-white font-bold py-3 px-6 rounded-full transition-colors whitespace-nowrap">
                Get Free Guide
              </button>
            </div>
            <p className="text-sm mt-4 text-gray-300">
              Join now and receive our "5 Essential Ghana Travel Tips" guide for free!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
