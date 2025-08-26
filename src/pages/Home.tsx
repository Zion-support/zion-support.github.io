
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { StatsSection } from "@/components/StatsSection";
import { SEO } from "@/components/SEO";

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

      <StatsSection />
      
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <NewsletterSection />
    </div>
  );
}
