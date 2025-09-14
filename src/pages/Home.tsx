
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { StatsSection } from "@/components/StatsSection";
import { SEO } from "@/components/SEO";
import { ITServiceRequestHero } from "@/components/ITServiceRequestHero";
import InnovativeServicesShowcase from "@/components/InnovativeServicesShowcase";
import { TrustIndicators } from "@/components/TrustIndicators";
import { MicroSaasShowcase } from "@/components/MicroSaasShowcase";
import { InteractiveServiceShowcase } from "@/components/InteractiveServiceShowcase";
import { EnhancedServicesShowcase } from "@/components/EnhancedServicesShowcase";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion Tech Group - AI-Powered Technology Solutions & Digital Transformation"
        description="Transform your business with cutting-edge AI solutions, expert talent, and innovative services. Leading provider of technology solutions for startups to enterprises. Get started today!"
        keywords="AI solutions, technology services, digital transformation, AI consulting, cloud services, cybersecurity, enterprise solutions, micro SAAS, startup technology"
        canonical="https://ziontechgroup.com/"
        type="website"
        tags={["AI", "Technology", "Digital Transformation", "Cloud Services", "Cybersecurity"]}
      />

      {/* Hero Section */}
      <ITServiceRequestHero />

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Stats Section */}
      <StatsSection />

      {/* Enhanced Services Showcase */}
      <EnhancedServicesShowcase />

      {/* Micro SAAS Showcase */}
      <MicroSaasShowcase />

      {/* Interactive Service Showcase */}
      <InteractiveServiceShowcase />

      {/* Innovative Services Showcase */}
      <InnovativeServicesShowcase />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Featured Listings Section */}
      <FeaturedListingsSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
}
