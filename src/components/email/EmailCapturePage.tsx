import React from 'react';
import LeadMagnetForm from './LeadMagnetForm';

const EmailCapturePage: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
                Start Your Soulful Travel Journey
              </h1>
              <div className="w-20 h-1 bg-[#f8a0a0] mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                Join our community of purpose-driven travelers seeking freedom, healing, and legacy through transformative experiences.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">What You'll Receive:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-[#f8a0a0] p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Our "5 Essential Ghana Travel Tips" guide</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#f8a0a0] p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Exclusive travel insights and destination recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#f8a0a0] p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Early access to new travel guides and resources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#f8a0a0] p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Special offers and discounts on our digital products</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-200 mb-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f8a0a0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Privacy Promise:</span> We respect your inbox and will never share your information. You can unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div>
              <LeadMagnetForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCapturePage;
