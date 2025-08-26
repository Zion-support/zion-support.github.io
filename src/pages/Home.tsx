
import React, { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
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

// Performance-optimized stats section
const StatsSection = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "500+", label: "Projects Delivered", description: "Successful implementations", icon: "🚀" },
    { value: "50+", label: "Expert Team", description: "Certified professionals", icon: "👥" },
    { value: "99.9%", label: "Uptime", description: "Reliable infrastructure", icon: "⚡" },
    { value: "24/7", label: "Support", description: "Always available", icon: "🛡️" }
  ];

  return (
    <section id="stats-section" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

// Enhanced service categories with better descriptions and animations
const EnhancedServiceCategories = React.memo(() => {
  const serviceCategories = [
    {
      name: "AI Solutions",
      description: "Cutting-edge artificial intelligence services for business transformation",
      icon: "🤖",
      href: "/ai-solutions",
      count: 15,
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment solutions",
      icon: "☁️",
      href: "/services/cloud-devops",
      count: 12,
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Cybersecurity",
      description: "Advanced security protocols and threat protection systems",
      icon: "🔒",
      href: "/services/cybersecurity",
      count: 8,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Digital Transformation",
      description: "End-to-end business process modernization and optimization",
      icon: "🚀",
      href: "/services/digital-transformation",
      count: 10,
      color: "from-green-500 to-cyan-500"
    },
    {
      name: "Infrastructure",
      description: "Robust IT infrastructure and network management solutions",
      icon: "🏗️",
      href: "/services/it-infrastructure",
      count: 6,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Consulting",
      description: "Strategic technology consulting and implementation guidance",
      icon: "💡",
      href: "/services/consulting",
      count: 9,
      color: "from-orange-500 to-green-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Service Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link to={category.href}>
                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium">
                      {category.count} Services
                    </span>
                    <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

EnhancedServiceCategories.displayName = 'EnhancedServiceCategories';

export default function Home() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Enhanced Stats Section */}
      <StatsSection />
      
      {/* Enhanced Service Categories */}
      <EnhancedServiceCategories />
      
      {/* Other Sections with Suspense for better performance */}
      <Suspense fallback={<EnhancedLoadingSpinner />}>
        <CategoriesSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TechSolutionsSection />
        <AIServicesShowcase />
        <CaseStudiesSection />
        <TeamExpertiseSection />
        <GlobalPresenceSection />
        <InnovationResearchSection />
        <ClientSuccessStoriesSection />
        <TechnologyStackSection />
        <SecurityComplianceSection />
        <InteractiveTestimonials />
        <PricingSection />
        <FeaturedListingsSection />
        <NewsletterSection />
        <ITServiceRequestHero />
        <FloatingCTA />
      </Suspense>
    </>
  );
}
