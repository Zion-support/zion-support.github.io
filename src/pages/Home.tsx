=======

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
import { FloatingCTA } from "@/components/FloatingCTA";
import { PricingSection } from "@/components/PricingSection";
import { TechSolutionsSection } from "@/components/TechSolutionsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TeamExpertiseSection } from "@/components/TeamExpertiseSection";
import { GlobalPresenceSection } from "@/components/GlobalPresenceSection";
import { InnovationResearchSection } from "@/components/InnovationResearchSection";
import { ClientSuccessStoriesSection } from "@/components/ClientSuccessStoriesSection";
import { TechnologyStackSection } from "@/components/TechnologyStackSection";
import { SecurityComplianceSection } from "@/components/SecurityComplianceSection";
import { AIServicesShowcase } from "@/components/AIServicesShowcase";
import { InteractiveTestimonials } from "@/components/InteractiveTestimonials";

export default function Home() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />
      
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
import { FloatingCTA } from "@/components/FloatingCTA";
import { PricingSection } from "@/components/PricingSection";
import { TechSolutionsSection } from "@/components/TechSolutionsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TeamExpertiseSection } from "@/components/TeamExpertiseSection";
import { GlobalPresenceSection } from "@/components/GlobalPresenceSection";
import { InnovationResearchSection } from "@/components/InnovationResearchSection";
import { ClientSuccessStoriesSection } from "@/components/ClientSuccessStoriesSection";
import { TechnologyStackSection } from "@/components/TechnologyStackSection";
import { SecurityComplianceSection } from "@/components/SecurityComplianceSection";
import { AIServicesShowcase } from "@/components/AIServicesShowcase";
import { InteractiveTestimonials } from "@/components/InteractiveTestimonials";

export default function Home() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />
      
      <HeroSection />
      <QuickAccess />
      <AIServicesShowcase />
      <FeatureCTAs />
      <FeatureHighlights />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TechSolutionsSection />
      <CaseStudiesSection />
      <TeamExpertiseSection />
      <GlobalPresenceSection />
      <InnovationResearchSection />
      <ClientSuccessStoriesSection />
      <InteractiveTestimonials />
      <TechnologyStackSection />
      <SecurityComplianceSection />
      <PricingSection />
      <FeaturedListingsSection />
      <NewsletterSection />
      <ITServiceRequestHero />
      <FloatingCTA />
    </>
import { AnimatedBackground, FloatingParticles } from "@/components/ui/AnimatedBackground";

// Lazy load heavy components for better performance
const InteractiveServiceShowcase = React.lazy(() => import('@/components/InteractiveServiceShowcase'));

// Animation variants for smooth performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

  );
}
=======
export default Home;
=======
      <HeroSection />
      <QuickAccess />
      <AIServicesShowcase />
      <FeatureCTAs />
      <FeatureHighlights />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TechSolutionsSection />
      <CaseStudiesSection />
      <TeamExpertiseSection />
      <GlobalPresenceSection />
      <InnovationResearchSection />
      <ClientSuccessStoriesSection />
      <InteractiveTestimonials />
      <TechnologyStackSection />
      <SecurityComplianceSection />
      <PricingSection />
      <FeaturedListingsSection />
      <NewsletterSection />
      <ITServiceRequestHero />
      <FloatingCTA />
    </>
  );
}
