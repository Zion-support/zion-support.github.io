import React from 'react';
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { EnhancedQuickAccess } from "@/components/home/EnhancedQuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { NewContentBanner } from "@/components/NewContentBanner";
import NewsletterSignup from "@/components/NewsletterSignup";
import EnhancedPromoBanner from "@/components/EnhancedPromoBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion Tech Group - The Future of Tech Services" 
        description="Discover top AI and tech talent, services, and equipment in one place. Connect with verified professionals worldwide for 24/7 IT support and innovative solutions." 
        keywords="AI, technology, marketplace, services, talent, IT support, global services, tech professionals" 
        canonical="https://ziontechgroup.com/" 
      />
      <EnhancedPromoBanner />
      <ITServiceRequestHero />
      <HeroSection />
      <EnhancedQuickAccess />
      <FeatureCTAs />
      <FeatureHighlights />
      <TestimonialsSection />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup 
            title="Stay Ahead with AI Innovation"
            description="Get weekly insights on the latest AI trends, enterprise implementations, and technical breakthroughs."
          />
        </div>
      </section>
    </div>
  );
}