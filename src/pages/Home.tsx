
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
// import { ServicesShowcase } from "@/components/ServicesShowcase";
// import { EnhancedServicesOverview } from "@/components/home/EnhancedServicesOverview";
import { EnhancedComprehensiveServicesShowcase } from "@/components/EnhancedComprehensiveServicesShowcase";
import { ContactSection } from "@/components/ContactSection";
import { PromoBanner } from "@/components/home/PromoBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion Tech Group - Comprehensive Tech Services & AI Solutions" 
        description="Transform your business with Zion Tech Group's comprehensive technology solutions. AI, SAAS, IT services with enterprise-grade quality and startup pricing. Contact us at +1 302 464 0950."
        keywords="AI services, SAAS solutions, IT services, technology consulting, digital transformation, AI strategy, cloud migration, cybersecurity, Zion Tech Group, kleber@ziontechgroup.com"
        canonical="https://ziontechgroup.com/"
      />

      <PromoBanner />
      <ITServiceRequestHero />
      <HeroSection />
      <FeatureHighlights />
      
      {/* <ServicesShowcase /> */}
      
      {/* Enhanced Comprehensive Services Showcase */}
      <EnhancedComprehensiveServicesShowcase />
      
      {/* <EnhancedServicesOverview /> */}
      
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <NewsletterSection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
