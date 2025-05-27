import React from 'react';
import { Link } from 'react-router-dom';
import ShopGrid from '../components/shop/ShopGrid';

const ShopPage: React.FC = () => {
  return (
    <div>
      {/* Shop Banner */}
      <div className="bg-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Digital Shop</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our curated travel guides, journals, and resources designed for soulful explorers
          </p>
        </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-[#1e3a8a]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1e3a8a] font-medium">Shop</span>
          </div>
        </div>
      </div>
      
      {/* Shop Grid Component */}
      <ShopGrid />
      
      {/* Call to Action */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            We're constantly adding new travel guides and resources. Join our mailing list to be the first to know when new products are available.
          </p>
          <Link 
            to="/contact" 
            className="bg-[#1e3a8a] hover:bg-[#152a62] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
          >
            Request a Custom Guide
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
