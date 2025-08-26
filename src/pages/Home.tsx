
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { StatsSection } from "@/components/StatsSection";
import { SEO } from "@/components/SEO";
import { ITServiceRequestHero } from "@/components/ITServiceRequestHero";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion Tech Group - Leading Technology Solutions & AI Innovation" 
        description="Discover cutting-edge AI, cybersecurity, cloud solutions, and technology consulting services. Transform your business with Zion Tech Group's innovative solutions."
        keywords="AI, technology, cybersecurity, cloud computing, machine learning, digital transformation, enterprise solutions, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
      />

      {/* Enhanced Hero Section */}
      <ITServiceRequestHero />

      {/* Enhanced Services Showcase */}
      <ServicesShowcase />

      {/* Enhanced About Section */}
      <AboutSection />

      {/* Stats Section */}
      <StatsSection />
      
      {/* Categories Section */}
      <CategoriesSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Featured Listings Section */}
      <FeaturedListingsSection />
      
      {/* Enhanced Contact Section */}
      <ContactSection />
      
      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
