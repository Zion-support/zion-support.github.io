import React from 'react';
import { BenefitsSection } from '@/components / BenefitsSection';
import { CategoriesSection } from '@/components / CategoriesSection';
import { FeatureCTAs } from '@/components / home / FeatureCTAs';
import { FeaturedListingsSection } from '@/components / FeaturedListingsSection';
import { FeatureHighlights } from '@/components / home / FeatureHighlights';
import { FloatingCTA } from '@/components / FloatingCTA';
import { HeroSection } from '@/components / HeroSection';
import { HowItWorksSection } from '@/components / HowItWorksSection';
import { ITServiceRequestHero } from '@/components / home / ITServiceRequestHero';
import { NewsletterSection } from '@/components / NewsletterSection';
import { QuickAccess } from '@/components / home / QuickAccess';
import { SEO } from '@/components / SEO';
import { ServicesShowcase } from '@/components / ServicesShowcase';
export default function Home () {

  return (<>
      <SEO
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting - edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />

      <HeroSection />
      <QuickAccess />
      <FeatureCTAs />
      <FeatureHighlights />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturedListingsSection />
      <ServicesShowcase />
      <NewsletterSection />
      <ITServiceRequestHero />
      <FloatingCTA />
    </>) ;
}
