import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { ContactSection } from "@/components/ContactSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="Zion Tech Group - Leading AI & IT Solutions Provider"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, comprehensive IT services, and innovative technology consulting. Expert team delivering results."
        keywords="AI solutions, IT services, technology consulting, digital transformation, cybersecurity, cloud computing"
      />
      
      <QuickAccess />
      <FeatureHighlights />
      <ITServiceRequestHero />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <ContactSection />
      <NewsletterSection />
    </div>
  );
}
