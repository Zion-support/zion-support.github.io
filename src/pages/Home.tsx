import React, { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Atom, Globe } from 'lucide-react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection.jsx";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";

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
import { EnhancedInnovativeServicesShowcase } from "@/components/EnhancedInnovativeServicesShowcase";
import { EnhancedPricingComparison } from "@/components/EnhancedPricingComparison";
import { UltimateServicesShowcase2027 } from "@/components/UltimateServicesShowcase2027";
import { InnovativeServicesShowcase2027 } from "@/components/InnovativeServicesShowcase2027";

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

// Zion 2026 Services Preview Section
const Zion2026ServicesPreview = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Zion 2026 Innovative Services
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover our revolutionary micro SAAS, IT, and AI services designed for the future
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold text-white mb-3">AI & Automation</h3>
          <p className="text-gray-300 mb-4">Autonomous business operations with AI-driven decision making</p>
          <Link to="/zion-2026-innovative-services" className="text-cyan-400 hover:text-cyan-300">
            Learn More →
          </Link>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity & Quantum</h3>
          <p className="text-gray-300 mb-4">Next-generation security with quantum-resistant encryption</p>
          <Link to="/zion-2026-innovative-services" className="text-cyan-400 hover:text-cyan-300">
            Learn More →
          </Link>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <div className="text-4xl mb-4">🏥</div>
          <h3 className="text-xl font-semibold text-white mb-3">Healthcare & AI</h3>
          <p className="text-gray-300 mb-4">AI-powered healthcare analytics and diagnostics</p>
          <Link to="/zion-2026-innovative-services" className="text-cyan-400 hover:text-cyan-300">
            Learn More →
          </Link>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <div className="text-4xl mb-4">⛓️</div>
          <h3 className="text-xl font-semibold text-white mb-3">Blockchain & Supply Chain</h3>
          <p className="text-gray-300 mb-4">Transparent and secure supply chain solutions</p>
          <Link to="/zion-2026-innovative-services" className="text-cyan-400 hover:text-cyan-300">
            Learn More →
          </Link>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <div className="text-4xl mb-4">💰</div>
          <h3 className="text-xl font-semibold text-white mb-3">Fintech & AI</h3>
          <p className="text-gray-300 mb-4">AI-driven risk management and financial solutions</p>
          <Link to="/zion-2026-innovative-services" className="text-cyan-400 hover:text-cyan-300">
            Learn More →
          </Link>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <div className="text-4xl mb-4">🌐</div>
          <h3 className="text-xl font-semibold text-white mb-3">IoT & Edge Computing</h3>
          <p className="text-gray-300 mb-4">Optimized edge computing and IoT solutions</p>
          <Link to="/zion-2026-innovative-services" className="text-cyan-400 hover:text-cyan-300">
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// Zion 2027 Advanced Services Preview Section
const Zion2027AdvancedServicesPreview = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Zion 2027
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Advanced Services
          </span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Experience the future of technology with our cutting-edge 2027 service portfolio. 
          From quantum AI fusion to autonomous ecosystems, we're redefining what's possible.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/zion-2027-advanced-services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg"
          >
            Explore 2027 Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
        >
          <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 mb-4 inline-block">
            <Atom className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Quantum AI Fusion Platform</h3>
          <p className="text-gray-300 mb-4">Merge quantum computing with AI for unprecedented problem-solving capabilities</p>
          <div className="text-2xl font-bold text-white mb-4">$15,000/month</div>
          <Link to="/zion-2027-advanced-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
            Learn More →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
        >
          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-4 inline-block">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Autonomous AI Ecosystem Manager</h3>
          <p className="text-gray-300 mb-4">Self-managing AI systems that orchestrate your entire digital infrastructure</p>
          <div className="text-2xl font-bold text-white mb-4">$8,500/month</div>
          <Link to="/zion-2027-advanced-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
            Learn More →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
        >
          <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 mb-4 inline-block">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Metaverse Business Platform</h3>
          <p className="text-gray-300 mb-4">Complete business infrastructure for the metaverse economy</p>
          <div className="text-2xl font-bold text-white mb-4">$12,000/month</div>
          <Link to="/zion-2027-advanced-services" className="text-cyan-400 hover:text-cyan-300 font-medium">
            Learn More →
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

// Contact Information Section
const ContactInformation = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to Transform Your Business?
      </h2>
      <p className="text-xl text-gray-300 mb-8">
        Contact us to learn more about our innovative services and how we can help you succeed
      </p>
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-2xl mb-2">📱</div>
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <p className="text-cyan-400">+1 302 464 0950</p>
          </div>
          <div>
            <div className="text-2xl mb-2">✉️</div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-cyan-400">kleber@ziontechgroup.com</p>
          </div>
          <div>
            <div className="text-2xl mb-2">📍</div>
            <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
            <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Pioneering AI & Quantum Technology Solutions"
        description="Zion Tech Group delivers cutting-edge AI solutions, quantum technology, and innovative IT services. Transform your business with intelligent automation and next-generation cybersecurity."
        keywords="AI solutions, quantum technology, cybersecurity, IT services, digital transformation, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Zion 2026 Services Preview */}
        <Zion2026ServicesPreview />
        
        {/* Zion 2027 Advanced Services Preview */}
        <Zion2027AdvancedServicesPreview />
        
        {/* Contact Information */}
        <ContactInformation />
        
        {/* Other sections from the remote version */}
        <StatsSection />
        <FeatureHighlights />
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
        <EnhancedInnovativeServicesShowcase />
        <EnhancedPricingComparison />
        <UltimateServicesShowcase2027 />
        <InnovativeServicesShowcase2027 />
        <CategoriesSection />
        <BenefitsSection />
        <HowItWorksSection />
        <NewsletterSection />
        <FeaturedListingsSection />
        <QuickAccess />
        <ITServiceRequestHero />
        <FloatingCTA />
        <PricingSection />
      </div>
    </>
  );
};

export default Home;
