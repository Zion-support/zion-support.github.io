import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesOverview from '../components/ServicesOverview';
import TestimonialsSection from '../components/TestimonialsSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
    </div>
  );
};

export default Home;