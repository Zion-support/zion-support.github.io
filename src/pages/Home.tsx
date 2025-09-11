import React from 'react';
// Note: These components need to be created or imported from the correct paths
// import { CategoriesSection } from "@/components/CategoriesSection";
// import { BenefitsSection } from "@/components/BenefitsSection";
// import { HowItWorksSection } from "@/components/HowItWorksSection";
// import { NewsletterSection } from "@/components/NewsletterSection";
// import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
// import { SEO } from "@/components/SEO";
// import { HeroSection } from "@/components/HeroSection";
// import { QuickAccess } from "@/components/home/QuickAccess";
// import { FeatureCTAs } from "@/components/home/FeatureCTAs";
// import { FeatureHighlights } from "@/components/home/FeatureHighlights";
// import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
// import { ServicesShowcase } from "@/components/ServicesShowcase";
// import { EnhancedServicesOverview } from "@/components/home/EnhancedServicesOverview";
import { EnhancedComprehensiveServicesShowcase } from "@/components/EnhancedComprehensiveServicesShowcase";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Zion Tech Group
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Innovative Technology Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Leading technology company specializing in AI solutions, SAAS platforms, and IT services. 
            Transform your business with our innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      {/* Enhanced Services Overview */}
      <EnhancedComprehensiveServicesShowcase />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}