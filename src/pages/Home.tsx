import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { EnhancedServicesOverview } from "@/components/home/EnhancedServicesOverview";
import { EnhancedComprehensiveServicesShowcase } from "@/components/EnhancedComprehensiveServicesShowcase";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Zion Tech Group - AI, SAAS & IT Solutions"
        description="Leading technology company specializing in AI solutions, SAAS platforms, and IT services. Transform your business with our innovative technology solutions."
        keywords="AI solutions, SAAS platforms, IT services, business automation, technology consulting"
      />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Quick Access */}
      <QuickAccess />
      
      {/* Feature Highlights */}
      <FeatureHighlights />
      
      {/* Enhanced Services Overview */}
      <EnhancedServicesOverview />
      
      {/* Comprehensive Services Showcase */}
      <EnhancedComprehensiveServicesShowcase />
      
      {/* Categories Section */}
      <CategoriesSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Featured Listings Section */}
      <FeaturedListingsSection />
      
      {/* Feature CTAs */}
      <FeatureCTAs />
      
      {/* IT Service Request Hero */}
      <ITServiceRequestHero />
      
      {/* Services Showcase */}
      <ServicesShowcase />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}