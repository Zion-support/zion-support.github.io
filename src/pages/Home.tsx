import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap, TrendingUp, Activity, Calendar, MessageCircle, PenTool } from 'lucide-react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import SEO from "@/components/SEO";
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
import { ServicesShowcase } from "@/components/ServicesShowcase.tsx";

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
      <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Hero Section">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10" aria-hidden="true"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/comprehensive-services" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Explore all our comprehensive services"
              >
                Explore All Services
              </Link>
              <Link 
                to="/revolutionary-services-2030" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                aria-label="Discover our revolutionary 2030 services"
              >
                Revolutionary 2030
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Get started with our services"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float" aria-hidden="true">
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed" aria-hidden="true">
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" aria-hidden="true">
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Revolutionary Services Preview */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" aria-labelledby="revolutionary-services-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="revolutionary-services-heading" className="text-4xl md:text-5xl font-bold mb-6">
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
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              aria-label="Explore our revolutionary services for 2030"
            >
              Explore Revolutionary Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

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
                className="group bg-slate-800/60 backdrop-blur border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-400/10"
                role="article"
                aria-labelledby={`service-${index}-title`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 id={`service-${index}-title`} className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors">
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

      {/* AI-Powered Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900" aria-labelledby="ai-solutions-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="ai-solutions-heading" className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence to transform your business operations and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Lead Scoring */}
            <motion.div 
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              whileHover={{ y: -5 }}
              role="article"
              aria-labelledby="ai-lead-scoring-title"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 id="ai-lead-scoring-title" className="text-xl font-semibold mb-3 text-white">AI Lead Scoring</h3>
              <p className="text-gray-300 mb-4">Intelligent lead qualification using machine learning algorithms.</p>
              <Link 
                to="/services/ai-lead-scoring"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
                aria-label="Learn more about AI Lead Scoring"
              >
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            {/* Website AI Chatbot */}
            <motion.div 
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300"
              whileHover={{ y: -5 }}
              role="article"
              aria-labelledby="ai-chatbot-title"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 id="ai-chatbot-title" className="text-xl font-semibold mb-3 text-white">Website AI Chatbot</h3>
              <p className="text-gray-300 mb-4">Smart conversational AI for enhanced customer engagement.</p>
              <Link 
                to="/services/website-ai-chatbot"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500/50 rounded"
                aria-label="Learn more about Website AI Chatbot"
              >
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            {/* RAG Search */}
            <motion.div 
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
              whileHover={{ y: -5 }}
              role="article"
              aria-labelledby="rag-search-title"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 id="rag-search-title" className="text-xl font-semibold mb-3 text-white">RAG Search</h3>
              <p className="text-gray-300 mb-4">Advanced retrieval-augmented generation for intelligent search.</p>
              <Link 
                to="/services/rag-search"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded"
                aria-label="Learn more about RAG Search"
              >
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            {/* MLOps Pipeline */}
            <motion.div 
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-indigo-500 transition-all duration-300"
              whileHover={{ y: -5 }}
              role="article"
              aria-labelledby="mlops-title"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 id="mlops-title" className="text-xl font-semibold mb-3 text-white">MLOps Pipeline</h3>
              <p className="text-gray-300 mb-4">Streamlined machine learning operations and deployment.</p>
              <Link 
                to="/services/mlops-pipeline"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded"
                aria-label="Learn more about MLOps Pipeline"
              >
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            {/* E-commerce Personalization */}
            <motion.div 
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500 transition-all duration-300"
              whileHover={{ y: -5 }}
              role="article"
              aria-labelledby="ecommerce-title"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 id="ecommerce-title" className="text-xl font-semibold mb-3 text-white">E-commerce Personalization</h3>
              <p className="text-gray-300 mb-4">AI-driven personalization for enhanced shopping experiences.</p>
              <Link 
                to="/services/ecommerce-personalization"
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 rounded"
                aria-label="Learn more about E-commerce Personalization"
              >
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            {/* Returns Management SaaS */}
            <motion.div 
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-red-500 transition-all duration-300"
              whileHover={{ y: -5 }}
              role="article"
              aria-labelledby="returns-management-title"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 id="returns-management-title" className="text-xl font-semibold mb-3 text-white">Returns Management SaaS</h3>
              <p className="text-gray-300 mb-4">Streamlined returns processing with AI-powered insights.</p>
              <Link 
                to="/services/returns-management"
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded"
                aria-label="Learn more about Returns Management SaaS"
              >
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            {/* Employee Scheduling SaaS */}
            <motion.div 
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-orange-500 transition-all duration-300"
              whileHover={{ y: -5 }}
              role="article"
              aria-labelledby="employee-scheduling-title"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 id="employee-scheduling-title" className="text-xl font-semibold mb-3 text-white">Employee Scheduling SaaS</h3>
              <p className="text-gray-300 mb-4">AI-powered workforce management with smart scheduling and time tracking.</p>
              <Link 
                to="/services/employee-scheduling-saas"
                className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded"
                aria-label="Learn more about Employee Scheduling SaaS"
              >
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            {/* AI Support Helpdesk */}
            <motion.div 
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-teal-500 transition-all duration-300"
              whileHover={{ y: -5 }}
              role="article"
              aria-labelledby="ai-helpdesk-title"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 id="ai-helpdesk-title" className="text-xl font-semibold mb-3 text-white">AI Support Helpdesk</h3>
              <p className="text-gray-300 mb-4">Intelligent customer support with AI chatbots and multi-channel assistance.</p>
              <Link 
                to="/services/ai-support-helpdesk"
                className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 rounded"
                aria-label="Learn more about AI Support Helpdesk"
              >
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            {/* AI Content Generator */}
            <motion.div 
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-pink-500 transition-all duration-300"
              whileHover={{ y: -5 }}
              role="article"
              aria-labelledby="ai-content-title"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <PenTool className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 id="ai-content-title" className="text-xl font-semibold mb-3 text-white">AI Content Generator</h3>
              <p className="text-gray-300 mb-4">Create engaging content with AI-powered writing tools and templates.</p>
              <Link 
                to="/services/ai-content-generator"
                className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500/50 rounded"
                aria-label="Learn more about AI Content Generator"
              >
                Learn More
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
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

      {/* Comprehensive Services Showcase */}
      <ServicesShowcase />

      {/* Enhanced Newsletter Section */}
      <NewsletterSection />
    </>
  );
}
