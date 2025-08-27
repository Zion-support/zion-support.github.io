import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Shield, Globe, Users, TrendingUp, Star, ArrowRight, Brain, Cloud, Lock, Rocket } from 'lucide-react';
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
import { ServicesShowcase } from "@/components/ServicesShowcase";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="relative">
          <div className="w-32 h-32 border-4 border-cyan-400/20 rounded-full"></div>
          <div className="absolute top-0 left-0 w-32 h-32 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-lg">
            ZION
          </div>
          <div className="mt-4 text-center">
            <div className="text-cyan-400 text-sm animate-pulse">Loading amazing experiences...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI, quantum computing, IoT, and digital transformation solutions. Expert consulting and innovative technology services."
        keywords="AI solutions, quantum computing, IoT, digital transformation, technology consulting, cybersecurity, cloud services"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Quick Access */}
        <QuickAccess />
        
        {/* Feature Highlights */}
        <FeatureHighlights />
        
        {/* AI Services Showcase */}
        <AIServicesShowcase />
        
        {/* Tech Solutions Section */}
        <TechSolutionsSection />
        
        {/* Services Showcase */}
        <ServicesShowcase />
        
        {/* Categories Section */}
        <CategoriesSection />
        
        {/* Benefits Section */}
        <BenefitsSection />
        
        {/* How It Works */}
        <HowItWorksSection />
        
        {/* Case Studies */}
        <CaseStudiesSection />
        
        {/* Team Expertise */}
        <TeamExpertiseSection />
        
        {/* Global Presence */}
        <GlobalPresenceSection />
        
        {/* Innovation Research */}
        <InnovationResearchSection />
        
        {/* Client Success Stories */}
        <ClientSuccessStoriesSection />
        
        {/* Technology Stack */}
        <TechnologyStackSection />
        
        {/* Security & Compliance */}
        <SecurityComplianceSection />
        
        {/* Feature CTAs */}
        <FeatureCTAs />
        
        {/* Pricing Section */}
        <PricingSection />
        
        {/* Featured Listings */}
        <FeaturedListingsSection />
        
        {/* Newsletter */}
        <NewsletterSection />
        
        {/* IT Service Request Hero */}
        <ITServiceRequestHero />
        
        {/* Floating CTA */}
        <FloatingCTA />
      </main>
    </>
  );
}
