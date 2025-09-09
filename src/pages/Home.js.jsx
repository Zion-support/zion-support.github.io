import React from 'react';
import { AIServicesShowcase } from '@/components / AIServicesShowcase';
import { BenefitsSection } from '@/components / BenefitsSection';
import { CaseStudiesSection } from '@/components / CaseStudiesSection';
import { CategoriesSection } from '@/components / CategoriesSection';
import { ClientSuccessStoriesSection } from '@/components / ClientSuccessStoriesSection';
import { FeatureCTAs } from '@/components / home / FeatureCTAs';
import { FeaturedListingsSection } from '@/components / FeaturedListingsSection';
import { FeatureHighlights } from '@/components / home / FeatureHighlights';
import { FloatingCTA } from '@/components / FloatingCTA';
import { GlobalPresenceSection } from '@/components / GlobalPresenceSection';
import { HeroSection } from '@/components / HeroSection';
import { HowItWorksSection } from '@/components / HowItWorksSection';
import { InnovationResearchSection } from '@/components / InnovationResearchSection';
import { InteractiveTestimonials } from '@/components / InteractiveTestimonials';
import { ITServiceRequestHero } from '@/components / home / ITServiceRequestHero';
import { NewsletterSection } from '@/components / NewsletterSection';
import { PricingSection } from '@/components / PricingSection';
import { QuickAccess } from '@/components / home / QuickAccess';
import { SecurityComplianceSection } from '@/components / SecurityComplianceSection';
import { SEO } from '@/components / SEO';
import { TeamExpertiseSection } from '@/components / TeamExpertiseSection';
import { TechnologyStackSection } from '@/components / TechnologyStackSection';
import { TechSolutionsSection } from '@/components / TechSolutionsSection';
export default function Home () {

  return (<>
      <SEO
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting - edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
            />

      <HeroSection       />
      <QuickAccess       />
      <AIServicesShowcase       />
      <FeatureCTAs       />
      <FeatureHighlights       />
      <CategoriesSection       />
      <BenefitsSection       />
      <HowItWorksSection       />
      <TechSolutionsSection       />
      <CaseStudiesSection       />
      <TeamExpertiseSection       />
      <GlobalPresenceSection       />
      <InnovationResearchSection       />
      <ClientSuccessStoriesSection       />
      <InteractiveTestimonials       />
      <TechnologyStackSection       />
      <SecurityComplianceSection       />
      <PricingSection       />
      <FeaturedListingsSection       />
      <NewsletterSection       />
      <ITServiceRequestHero       />
      <FloatingCTA       />
    </>) ;
}
