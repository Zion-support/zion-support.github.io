
import React, { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CategoriesSection } from "@/components/CategoriesSection";
import BenefitsSection from "@/components/BenefitsSection";
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

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 quantum-particles">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-cyan-400/20 rounded-full holographic"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin neon-glow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-lg text-gradient">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-cyan-400 text-sm animate-pulse neon-glow">Loading amazing experiences...</div>
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
    <section id="stats-section" className="py-20 bg-black/50 quantum-particles">
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 holographic neon-glow">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 text-gradient">{stat.value}</div>
              <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Enhanced Hero Section
const EnhancedHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Transform Your Business with AI",
      subtitle: "Cutting-edge artificial intelligence solutions that drive innovation and growth",
      description: "Leverage the power of AI to automate processes, gain insights, and stay ahead of the competition.",
      cta: "Explore AI Services",
      href: "/ai-services",
      bgGradient: "from-purple-600 via-blue-600 to-cyan-600"
    },
    {
      title: "Quantum Computing Solutions",
      subtitle: "Next-generation computing power for complex problem solving",
      description: "Access quantum computing capabilities that solve previously impossible problems in finance, logistics, and research.",
      cta: "Discover Quantum",
      href: "/quantum-services",
      bgGradient: "from-indigo-600 via-purple-600 to-pink-600"
    },
    {
      title: "Advanced Cybersecurity",
      subtitle: "Protect your digital assets with AI-powered security",
      description: "Comprehensive cybersecurity solutions with real-time threat detection and automated response systems.",
      cta: "Secure Your Business",
      href: "/cybersecurity",
      bgGradient: "from-red-600 via-orange-600 to-yellow-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              Leading Technology Solutions Provider
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {heroSlides[currentSlide].title}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-cyan-300 font-medium max-w-3xl mx-auto"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              {heroSlides[currentSlide].description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to={heroSlides[currentSlide].href}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                {heroSlides[currentSlide].cta}
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-cyan-400 w-8'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Enhanced Services Preview Section
const EnhancedServicesPreview = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with intelligent automation and insights",
      icon: "🤖",
      href: "/ai-services",
      gradient: "from-purple-500 to-pink-500",
      features: ["Business Intelligence", "Process Automation", "Predictive Analytics"]
    },
    {
      title: "Quantum Computing",
      description: "Access next-generation computing power for complex problems",
      icon: "⚛️",
      href: "/quantum-services",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Financial Modeling", "Drug Discovery", "Optimization"]
    },
    {
      title: "Cybersecurity",
      description: "Advanced threat protection with AI-powered detection",
      icon: "🛡️",
      href: "/cybersecurity",
      gradient: "from-red-500 to-orange-500",
      features: ["Threat Detection", "Compliance", "Incident Response"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses",
      icon: "☁️",
      href: "/cloud-services",
      gradient: "from-indigo-500 to-blue-500",
      features: ["Migration", "Optimization", "Management"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive technology solutions designed to drive innovation and growth
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={service.href} className="block">
                <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 h-full hover:border-cyan-500/40 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Why Choose Us Section
const EnhancedWhyChooseUs = () => {
  const reasons = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🎯",
      title: "Results Driven",
      description: "Every solution is designed to deliver measurable business outcomes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🤝",
      title: "Partnership Approach",
      description: "We work as an extension of your team, not just a vendor",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "⚡",
      title: "Rapid Deployment",
      description: "Quick implementation with minimal disruption to your business",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We combine cutting-edge technology with proven expertise to deliver exceptional results
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${reason.color} rounded-full flex items-center justify-center text-4xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Home Component
const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI, Quantum Computing & Cybersecurity Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI, quantum computing, cybersecurity, and digital transformation services. Expert technology solutions for modern enterprises."
        keywords="AI services, quantum computing, cybersecurity, cloud infrastructure, digital transformation, IT consulting, machine learning, blockchain, Web3"
      />
      
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Enhanced Services Preview */}
      <EnhancedServicesPreview />
      
      {/* Enhanced Why Choose Us */}
      <EnhancedWhyChooseUs />
      
      {/* Existing Sections */}
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
      <PricingSection />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <NewsletterSection />
      <FeaturedListingsSection />
      <QuickAccess />
      <ITServiceRequestHero />
      <FloatingCTA />
    </>
  );
};

export default Home;
