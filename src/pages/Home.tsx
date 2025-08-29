import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap } from 'lucide-react';
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/comprehensive-services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Services
              </Link>
              <Link 
                to="/revolutionary-services-2030" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Revolutionary 2030
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-6 h-6 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Quick Access Section */}
      <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <QuickAccess />
      </Suspense>

      {/* Feature Highlights */}
      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <FeatureHighlights />
      </Suspense>

      {/* AI Services Showcase */}
      <Suspense fallback={<div className="h-96 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <AIServicesShowcase />
      </Suspense>

      {/* Tech Solutions Section */}
      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <TechSolutionsSection />
      </Suspense>

      {/* Case Studies Section */}
      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <CaseStudiesSection />
      </Suspense>

      {/* Team Expertise Section */}
      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <TeamExpertiseSection />
      </Suspense>

      {/* Global Presence Section */}
      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <GlobalPresenceSection />
      </Suspense>

      {/* Innovation Research Section */}
      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <InnovationResearchSection />
      </Suspense>

      {/* Client Success Stories Section */}
      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <ClientSuccessStoriesSection />
      </Suspense>

      {/* Technology Stack Section */}
      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <TechnologyStackSection />
      </Suspense>

      {/* Security Compliance Section */}
      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <SecurityComplianceSection />
      </Suspense>

      {/* Interactive Testimonials */}
      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <InteractiveTestimonials />
      </Suspense>

      {/* Services Showcase */}
      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <ServicesShowcase />
      </Suspense>

      {/* Feature CTAs */}
      <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <FeatureCTAs />
      </Suspense>

      {/* IT Service Request Hero */}
      <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <ITServiceRequestHero />
      </Suspense>

      {/* Pricing Section */}
      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg"></div>}>
        <PricingSection />
      </Suspense>

      {/* Floating CTA */}
      <FloatingCTA />
    </>
  );
}
