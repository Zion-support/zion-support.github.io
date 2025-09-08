import React from 'react';
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Zion Tech Group - Next-Generation Technology Solutions"
        description="Empowering businesses with cutting-edge AI, robust IT infrastructure, and innovative Micro SaaS solutions. Transform your digital future with our expert team."
        keywords="AI services, IT solutions, Micro SaaS, technology consulting, digital transformation"
      />
      
      <HeroSection />
      
      <CategoriesSection />
    </div>
  );
};

export default Home;