
import React from 'react';
import { HeroSection } from "../components/HeroSection";
import { ServicesShowcase } from "../components/ServicesShowcase";
import { FeaturesSection } from "../components/FeaturesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { CTASection } from "../components/CTASection";
import { StatsSection } from "../components/StatsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://app.ziontechgroup.com/"
      />

      <ITServiceRequestHero />

      <HeroSection />
      <StatsSection />
      <ServicesShowcase />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

export default Home;
