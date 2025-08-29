import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap, Star, CheckCircle, Rocket, Target, TrendingUp } from 'lucide-react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { EnhancedSEO } from "@/components/EnhancedSEO";
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
import { EnhancedServicesShowcase } from "@/components/EnhancedServicesShowcase";

// Loading fallback component
const LoadingFallback = ({ message }: { message: string }) => (
  <div className="flex items-center justify-center py-20">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">{message}</p>
    </div>
  </div>
);

// Stats data
const stats = [
  {
    value: "500+",
    label: "Global Clients",
    description: "Trusted by businesses worldwide",
    icon: Target
  },
  {
    value: "99.9%",
    label: "Uptime",
    description: "Reliable infrastructure",
    icon: Shield
  },
  {
    value: "24/7",
    label: "Support",
    description: "Always here to help",
    icon: Star
  },
  {
    value: "50+",
    label: "Services",
    description: "Comprehensive solutions",
    icon: Rocket
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <EnhancedSEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
        keywords={[
          'AI solutions',
          'technology services',
          'quantum computing',
          'cybersecurity',
          'IT infrastructure',
          'digital transformation',
          'Zion Tech Group'
        ]}
        type="website"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services that transform businesses and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/comprehensive-services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Explore All Services
              </Link>
              <Link 
                to="/revolutionary-services-2030" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
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
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 animate-float"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
        </motion.div>
        <motion.div 
          className="absolute top-40 right-20 animate-float-delayed"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-20 animate-float"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        </motion.div>
      </section>

      {/* Revolutionary Services Preview */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionary Services
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                2030
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Experience the future of technology with our cutting-edge AI, quantum computing, and innovative solutions 
              designed to transform industries and drive unprecedented growth.
            </p>
            <Link 
              to="/revolutionary-services-2030" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Explore Revolutionary Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quantum AI Hybrid Platform",
                description: "Revolutionary platform combining quantum computing with advanced AI",
                icon: Brain,
                color: "from-cyan-500 to-blue-600",
                price: "$25,000/month"
              },
              {
                title: "AI Cybersecurity Platform",
                description: "Next-generation cybersecurity using AI and machine learning",
                icon: Shield,
                color: "from-red-500 to-orange-600",
                price: "$8,999/month"
              },
              {
                title: "Autonomous AI Operations",
                description: "Platform that autonomously manages business operations",
                icon: Zap,
                color: "from-green-500 to-emerald-600",
                price: "$15,999/month"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/60 backdrop-blur border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-400/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  {service.price}
                </div>
                <div className="text-sm text-slate-400">
                  Starting price • Enterprise support included
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions designed for the modern enterprise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI-Powered Solutions */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md p-8 rounded-3xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI-Powered Solutions</h3>
                    <p className="text-cyan-400 text-sm font-medium">Most Popular</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Leverage cutting-edge artificial intelligence to automate processes, gain insights, and transform your business operations with our comprehensive AI solutions.
                </p>
                <Link 
                  to="/ai-solutions" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105"
                >
                  Explore AI Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>

            {/* Cloud & DevOps */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Cloud & DevOps</h3>
                    <p className="text-blue-400 text-sm font-medium">Enterprise Ready</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Build, deploy, and scale your applications with our enterprise-grade cloud infrastructure and automated DevOps practices.
                </p>
                <Link 
                  to="/services/cloud" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105"
                >
                  Explore Cloud Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Quick Access Section */}
      <QuickAccess />

      {/* Enhanced Feature Highlights */}
      <FeatureHighlights />

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

      {/* Enhanced Services Showcase */}
      <EnhancedServicesShowcase />

      {/* Enhanced Newsletter Section */}
      <NewsletterSection />

      {/* Additional Sections */}
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
      <AIServicesShowcase />
      <ITServiceRequestHero />
=======
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
>>>>>>> c92696b231688724fd5f78a980fd40151038cf2b
      <FloatingCTA />
    </>
  );
}
