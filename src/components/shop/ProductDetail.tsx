import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedOption, setSelectedOption] = useState<string>('essential');
  
  // This would normally come from an API or database
  // For now, we'll just hardcode the Ghana itinerary details
  const product = {
    id: 'ghana-itinerary',
    title: 'Ghana Cultural & Legacy Tour',
    description: 'A 10-day luxury and cultural travel itinerary designed for soulful travelers seeking connection, heritage, and healing. This comprehensive guide combines practical trip details with spiritual reflection and high-vibe energy.',
    longDescription: `Experience Ghana like never before with our meticulously crafted 10-day itinerary that balances luxury accommodations with deep cultural immersion. This isn't just travel—it's a transformative journey home to your roots.

    Our Ghana Cultural & Legacy Tour guide takes you through the bustling streets of Accra, the historical Cape Coast Castle, the lush canopies of Kakum National Park, and the royal heritage of Kumasi. Each day is thoughtfully designed to create moments of connection, reflection, and joy.

    What makes this itinerary special is the attention to both practical details and soulful experiences. You'll find daily outfit inspirations, packing tips, journal prompts, and affirmations that enhance your journey and create space for personal transformation.`,
    imageUrl: 'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1596423816883-2828bd9c63ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1580746738099-75b3c2b5b6e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    ],
    status: 'available',
    category: 'itinerary',
    features: [
      '10-day comprehensive itinerary',
      'Daily themed activities and experiences',
      'Outfit inspirations for each day',
      'Packing and travel tips',
      'Daily affirmations and journal prompts',
      'Recommended accommodations',
      'Cultural insights and historical context',
      'Practical travel information'
    ],
    pricingOptions: [
      {
        id: 'essential',
        name: 'Essential Experience',
        price: '$47',
        features: [
          'Complete 10-day Ghana itinerary PDF',
          'Daily affirmations and journal prompts',
          'Basic packing checklist'
        ]
      },
      {
        id: 'soultry',
        name: 'Soultry Journey',
        price: '$97',
        features: [
          'Everything in Essential Experience',
          'Ghana cultural guide with language basics',
          'Detailed outfit inspiration lookbook',
          'Restaurant and shopping recommendations',
          'Spotify playlist with Ghanaian artists'
        ]
      },
      {
        id: 'legacy',
        name: 'Legacy Transformation',
        price: '$197',
        features: [
          'Everything in Soultry Journey',
          '30-minute personalized consultation call',
          'Customizable itinerary templates',
          'Pre-trip ancestral connection meditation audio',
          'Post-trip integration workbook',
          'VIP access to Ghana travel Facebook community'
        ]
      }
    ]
  };

  // Find the selected pricing option
  const selectedPricingOption = product.pricingOptions.find(option => option.id === selectedOption);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Product Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={product.imageUrl} 
              alt={product.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">{product.title}</h1>
            <div className="w-20 h-1 bg-[#f8a0a0] mb-6"></div>
            <p className="text-lg text-gray-700 mb-6">
              {product.description}
            </p>
            
            {/* Pricing Options */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Choose Your Experience</h3>
              <div className="flex flex-col space-y-4">
                {product.pricingOptions.map(option => (
                  <div 
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedOption === option.id 
                        ? 'border-[#1e3a8a] bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-[#1e3a8a]">{option.name}</h4>
                      <span className="font-bold text-[#1e3a8a]">{option.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {option.features[0]}
                      {option.features.length > 1 && ` and ${option.features.length - 1} more features`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button className="w-full bg-[#1e3a8a] hover:bg-[#152a62] text-white font-bold py-3 px-8 rounded-full transition-colors mb-6">
              Add to Cart - {selectedPricingOption?.price}
            </button>
            
            {/* Guarantee */}
            <div className="flex items-center text-gray-700 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#f8a0a0]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-day satisfaction guarantee</span>
            </div>
          </div>
        </div>
        
        {/* Product Details */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">About This Guide</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">{product.longDescription}</p>
            </div>
            
            {/* Features */}
            <h3 className="text-xl font-bold text-[#1e3a8a] mt-8 mb-4">What's Included</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-[#f8a0a0] p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Selected Package Details */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">{selectedPricingOption?.name}</h3>
            <div className="w-12 h-1 bg-[#f8a0a0] mb-6"></div>
            <p className="font-bold text-2xl text-[#1e3a8a] mb-6">{selectedPricingOption?.price}</p>
            <h4 className="font-bold text-gray-700 mb-2">This package includes:</h4>
            <ul className="space-y-2 mb-6">
              {selectedPricingOption?.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f8a0a0] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#1e3a8a] hover:bg-[#152a62] text-white font-bold py-3 px-8 rounded-full transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
        
        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {product.gallery.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={image} 
                  alt={`${product.title} - Image ${index + 1}`} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
