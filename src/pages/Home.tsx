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

// Performance-optimized service categories
const EnhancedServiceCategories = React.memo(() => {
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

    const element = document.getElementById('service-categories');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
      link: "/services/ai"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automation",
      icon: "☁️",
      color: "from-purple-500 to-blue-500",
      link: "/services/cloud"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      icon: "🛡️",
      color: "from-red-500 to-orange-500",
      link: "/services/cybersecurity"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end business transformation",
      icon: "🚀",
      color: "from-green-500 to-emerald-500",
      link: "/services/digital-transformation"
    }
  ];

  return (
    <section id="service-categories" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={category.link} className="block">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {category.description}
                  </p>
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
        title="Zion Tech Group - Leading Technology Solutions & Innovation"
        description="Transform your business with Zion Tech Group's cutting-edge technology solutions. AI, Cloud, Cybersecurity, and Digital Transformation services."
        keywords="technology solutions, AI, cloud computing, cybersecurity, digital transformation, IT services"
      />
      
      <Suspense fallback={<EnhancedLoadingSpinner />}>
        <HeroSection />
        <StatsSection />
        <EnhancedServiceCategories />
        <TechSolutionsSection />
        <CaseStudiesSection />
        <TeamExpertiseSection />
        <GlobalPresenceSection />
        <InnovationResearchSection />
        <ClientSuccessStoriesSection />
        <TechnologyStackSection />
        <SecurityComplianceSection />
        <AIServicesShowcase />
        <InteractiveTestimonials />
        <PricingSection />
        <FeaturedListingsSection />
        <NewsletterSection />
        <ITServiceRequestHero />
        <FloatingCTA />
      </Suspense>

      {/* Enhanced Featured Services Section */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-zion-slate-dark to-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most popular and innovative technology solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* AI-Powered Solutions */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="group">
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 backdrop-blur-md p-8 rounded-3xl border border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI-Powered Solutions</h3>
                    <p className="text-zion-cyan text-sm font-medium">Most Popular</p>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  Leverage cutting-edge artificial intelligence to automate processes, gain insights, and transform your business operations with our comprehensive AI solutions.
                </p>
                <Link 
                  to="/ai-solutions" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 group-hover:scale-105"
                >
                  Explore AI Solutions
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Cloud & DevOps */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="group">
              <div className="bg-gradient-to-br from-zion-blue/20 to-zion-purple/20 backdrop-blur-md p-8 rounded-3xl border border-zion-blue/30 hover:border-zion-blue/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-blue/25">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Cloud & DevOps</h3>
                    <p className="text-zion-blue text-sm font-medium">Enterprise Ready</p>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  Build, deploy, and scale your applications with our enterprise-grade cloud infrastructure and automated DevOps practices.
                </p>
                <Link 
                  to="/services/cloud" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-blue to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-blue/25 transition-all duration-300 group-hover:scale-105"
                >
                  Explore Cloud Services
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Innovative Services 2027 Section */}
      <motion.section 
        className="py-20 bg-zion-slate-dark"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Innovative Services 2027</span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Next-generation technology solutions powered by AI and cutting-edge innovation
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Quantum Computing Platform */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="group">
              <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-6 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-xl">⚛️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Quantum Platform</h3>
                    <p className="text-zion-cyan text-xs font-medium">AI Score: 96</p>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
                  Revolutionary quantum computing solutions for complex problem-solving.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-zion-cyan">$999</span>
                  <Link 
                    to="/innovative-services-2027" 
                    className="text-zion-cyan hover:text-white transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Blockchain as a Service */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="group">
              <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-6 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-xl">⛓️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Blockchain Platform</h3>
                    <p className="text-zion-cyan text-xs font-medium">AI Score: 94</p>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
                  Multi-blockchain support with smart contracts and DeFi integration tools.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-zion-cyan">$599</span>
                  <Link 
                    to="/innovative-services-2027" 
                    className="text-zion-cyan hover:text-white transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* AI Content Creation */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="group">
              <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-6 rounded-2xl border border-zion-slate-light hover:border-zion-cyan/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-xl">✍️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">AI Content Creation</h3>
                    <p className="text-zion-cyan text-xs font-medium">AI Score: 95</p>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
                  Generate text, images, videos, and audio content with AI-powered creativity.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-zion-cyan">$199</span>
                  <Link 
                    to="/innovative-services-2027" 
                    className="text-zion-cyan hover:text-white transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Link 
              to="/all-services-2027" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              View All Services 2027
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Feature Highlights */}
      <FeatureHighlights />

      {/* Enhanced Quick Access Section */}
      <QuickAccess />

      {/* Enhanced Feature CTAs */}
      <FeatureCTAs />

      {/* Enhanced Categories Section */}
      <CategoriesSection />

      {/* Enhanced Benefits Section */}
      <BenefitsSection />

      {/* Enhanced How It Works Section */}
      <HowItWorksSection />

      {/* Enhanced Featured Listings Section */}
      <FeaturedListingsSection />

      {/* Enhanced Newsletter Section */}
      <NewsletterSection />
    </>
  );
}