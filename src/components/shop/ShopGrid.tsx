import React, { useState } from 'react';
import ProductCard from './ProductCard';

// Product type definition
type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  status: 'available' | 'coming_soon';
  category: string;
};

const ShopGrid: React.FC = () => {
  // Sample products data
  const products: Product[] = [
    {
      id: 'ghana-itinerary',
      title: 'Ghana Cultural & Legacy Tour',
      description: 'A 10-day luxury and cultural travel itinerary designed for soulful travelers seeking connection, heritage, and healing.',
      price: '$47.00',
      imageUrl: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      status: 'available',
      category: 'itinerary'
    },
    {
      id: 'jamaica-retreat',
      title: 'Jamaica Retreat Guide',
      description: 'A rejuvenating escape to Jamaica\'s most serene locations, combining beach relaxation with cultural immersion.',
      price: '$47.00',
      imageUrl: 'https://images.unsplash.com/photo-1580102056045-276abbd0c6e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      status: 'coming_soon',
      category: 'itinerary'
    },
    {
      id: 'south-africa-explorer',
      title: 'South Africa Explorer',
      description: 'Experience the diverse beauty of South Africa, from vibrant cities to stunning wildlife and rich cultural heritage.',
      price: '$47.00',
      imageUrl: 'https://images.unsplash.com/photo-1576485375217-d6a95e34d043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      status: 'coming_soon',
      category: 'itinerary'
    },
    {
      id: 'travel-journal',
      title: 'Soultry Travel Journal',
      description: 'A beautifully designed journal with prompts to capture your travel memories, reflections, and transformations.',
      price: '$27.00',
      imageUrl: 'https://images.unsplash.com/photo-1527168027773-0cc890c4f42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      status: 'available',
      category: 'merchandise'
    },
    {
      id: 'affirmation-cards',
      title: 'Travel Affirmation Deck',
      description: 'A deck of 30 affirmation cards designed to inspire mindfulness and intention during your travels.',
      price: '$19.00',
      imageUrl: 'https://images.unsplash.com/photo-1627163439134-7a8c47e08208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      status: 'coming_soon',
      category: 'merchandise'
    },
    {
      id: 'thailand-guide',
      title: 'Thailand Wellness Journey',
      description: 'Discover Thailand\'s most serene and healing destinations with this comprehensive wellness-focused guide.',
      price: '$47.00',
      imageUrl: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1439&q=80',
      status: 'coming_soon',
      category: 'itinerary'
    },
  ];

  // State for category filter
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">Digital Shop</h1>
          <div className="w-20 h-1 bg-[#f8a0a0] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 mb-8">
            Discover our curated travel guides, journals, and resources designed for soulful explorers
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-[#1e3a8a] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Products
            </button>
            <button 
              onClick={() => setActiveCategory('itinerary')}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                activeCategory === 'itinerary' 
                  ? 'bg-[#1e3a8a] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Travel Guides
            </button>
            <button 
              onClick={() => setActiveCategory('merchandise')}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                activeCategory === 'merchandise' 
                  ? 'bg-[#1e3a8a] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Merchandise
            </button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              status={product.status}
            />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopGrid;
