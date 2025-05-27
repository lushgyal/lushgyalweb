import React, { useState } from 'react';

const LeadMagnetForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would connect to an email service provider
    console.log('Form submitted:', { name, email });
    setSubmitted(true);
    // Reset form
    setName('');
    setEmail('');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="p-8">
        {!submitted ? (
          <>
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">Get Your Free Ghana Travel Guide</h3>
            <p className="text-gray-700 mb-6">
              Sign up to receive our "5 Essential Ghana Travel Tips" guide and join our community of soulful travelers.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#1e3a8a] hover:bg-[#152a62] text-white font-bold py-3 px-6 rounded-full transition-colors"
              >
                Get Free Guide
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              By signing up, you agree to receive email updates from LushGyal Travel. 
              We respect your privacy and will never share your information.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">Thank You!</h3>
            <p className="text-gray-700 mb-6">
              Your free guide is on its way to your inbox. Please check your email to download your "5 Essential Ghana Travel Tips" guide.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-[#1e3a8a] hover:text-[#152a62] font-medium"
            >
              Sign up with a different email
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadMagnetForm;
