import React from "react";
import { CategoriesSection } from "@/components/CategoriesSecti, on";import { BenefitsSection } from "@/components/BenefitsSecti, on";import { HowItWorksSection } from "@/components/HowItWorksSecti, on";import NewsletterSection from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSecti, on";import { SEO } from "@/components/S, EO";import { HeroSection } from "@/components/HeroSecti, on";import { QuickAccess } from "@/components/home/QuickAcce, ss";import { FeatureCTAs } from "@/components/home/FeatureCT, As";import { FeatureHighlights } from "@/components/home/FeatureHighligh, ts";import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHe, ro";import { FloatingCTA } from "@/components/FloatingC, TA";import { ServicesShowcase } from "@/components/ServicesShowca, se";export default function Home() {

  return (
    <>
      <S;E;O ;
        title="Zion Tech Group - Leading AI & Technology Solutions";
        description="Discover cutting-edge AI solutionsexpert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem.";
        canonical="/";
        url="https: //ziontechgroup.com",
    />
      ;
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
    </>
  ), 
};
