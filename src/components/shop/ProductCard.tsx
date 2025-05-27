import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard: React.FC<{
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  status: 'available' | 'coming_soon';
}> = ({ id, title, description, price, imageUrl, status }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-64">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-4 right-4 ${status === 'available' ? 'bg-[#f8a0a0]' : 'bg-[#1e3a8a]'} text-white text-sm font-bold px-3 py-1 rounded-full`}>
          {status === 'available' ? 'Available Now' : 'Coming Soon'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className={`${status === 'available' ? 'text-[#1e3a8a]' : 'text-gray-500'} font-bold`}>
            {status === 'available' ? price : 'Join Waitlist'}
          </span>
          {status === 'available' ? (
            <Link 
              to={`/shop/${id}`}
              className="bg-[#1e3a8a] hover:bg-[#152a62] text-white font-bold py-2 px-4 rounded-full text-sm transition-colors"
            >
              View Details
            </Link>
          ) : (
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full text-sm transition-colors">
              Notify Me
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
