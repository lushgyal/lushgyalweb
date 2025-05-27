import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductDetail from '../components/shop/ProductDetail';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  
  return (
    <div>
      {/* Product Banner */}
      <div className="bg-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Product Details</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore the features and benefits of our soulful travel resources
          </p>
        </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-[#1e3a8a]">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-[#1e3a8a]">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-[#1e3a8a] font-medium">Product Details</span>
          </div>
        </div>
      </div>
      
      {/* Product Detail Component */}
      <ProductDetail />
      
      {/* Related Products */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-8 text-center">
            You May Also Like
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Related Product 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1527168027773-0cc890c4f42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Soultry Travel Journal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Soultry Travel Journal</h3>
                <p className="text-gray-700 mb-4">
                  A beautifully designed journal with prompts to capture your travel memories.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#1e3a8a] font-bold">$27.00</span>
                  <button className="bg-[#1e3a8a] hover:bg-[#152a62] text-white font-bold py-2 px-4 rounded-full text-sm transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            
            {/* Related Product 2 */}
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
                  A rejuvenating escape to Jamaica's most serene locations.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold">Join Waitlist</span>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full text-sm transition-colors">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
            
            {/* Related Product 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1627163439134-7a8c47e08208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                  alt="Travel Affirmation Deck" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#1e3a8a] text-white text-sm font-bold px-3 py-1 rounded-full">
                  Coming Soon
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Travel Affirmation Deck</h3>
                <p className="text-gray-700 mb-4">
                  A deck of 30 affirmation cards designed to inspire mindfulness during travel.
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
