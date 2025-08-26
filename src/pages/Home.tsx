
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { StatsSection } from "@/components/StatsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { ITServiceRequestHero } from "@/components/ITServiceRequestHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion Tech Group - Comprehensive Technology Solutions" 
        description="Discover cutting-edge AI, blockchain, quantum computing, and IT solutions. Transform your business with Zion Tech Group's innovative technology services."
        keywords="AI, blockchain, quantum computing, IT services, technology solutions, digital transformation"
        canonical="https://ziontechgroup.com/"
      />

      <ITServiceRequestHero />

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
