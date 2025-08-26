
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { StatsSection } from "@/components/StatsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion Tech Group - Leading Technology Solutions" 
        description="Discover innovative AI solutions, quantum computing, cybersecurity, and digital transformation services from Zion Tech Group."
        keywords="AI, technology, quantum computing, cybersecurity, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
      />

      <HeroSection />
      
      <StatsSection />
      
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
    </div>
  );
}
