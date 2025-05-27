import React from 'react';
import Hero from '../components/Hero';
import BrandStory from '../components/BrandStory';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import EmailSignup from '../components/EmailSignup';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <BrandStory />
      <FeaturedProducts />
      <Testimonials />
      <EmailSignup />
    </div>
  );
};

export default HomePage;
