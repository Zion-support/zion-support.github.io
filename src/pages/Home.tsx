
import React, { Suspense, useState, useEffect } from 'react';
import React, { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CategoriesSection } from "@/components/CategoriesSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import BenefitsSection from "@/components/BenefitsSection";
import BenefitsSection from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection.jsx";
import { HowItWorksSection } from "@/components/HowItWorksSection.jsx";
import { NewsletterSection } from "@/components/NewsletterSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { HeroSection } from "@/components/HeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { QuickAccess } from "@/components/home/QuickAccess";

import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { FloatingCTA } from "@/components/FloatingCTA";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PricingSection } from "@/components/PricingSection";
import { PricingSection } from "@/components/PricingSection";
import { TechSolutionsSection } from "@/components/TechSolutionsSection";
import { TechSolutionsSection } from "@/components/TechSolutionsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TeamExpertiseSection } from "@/components/TeamExpertiseSection";
import { TeamExpertiseSection } from "@/components/TeamExpertiseSection";
import { GlobalPresenceSection } from "@/components/GlobalPresenceSection";
import { GlobalPresenceSection } from "@/components/GlobalPresenceSection";
import { InnovationResearchSection } from "@/components/InnovationResearchSection";
import { InnovationResearchSection } from "@/components/InnovationResearchSection";
import { ClientSuccessStoriesSection } from "@/components/ClientSuccessStoriesSection";
import { ClientSuccessStoriesSection } from "@/components/ClientSuccessStoriesSection";
import { TechnologyStackSection } from "@/components/TechnologyStackSection";
import { TechnologyStackSection } from "@/components/TechnologyStackSection";
import { SecurityComplianceSection } from "@/components/SecurityComplianceSection";
import { SecurityComplianceSection } from "@/components/SecurityComplianceSection";
import { AIServicesShowcase } from "@/components/AIServicesShowcase";
import { AIServicesShowcase } from "@/components/AIServicesShowcase";
import { InteractiveTestimonials } from "@/components/InteractiveTestimonials";
import { InteractiveTestimonials } from "@/components/InteractiveTestimonials";
import { EnhancedInnovativeServicesShowcase } from "@/components/EnhancedInnovativeServicesShowcase";
import { EnhancedInnovativeServicesShowcase } from "@/components/EnhancedInnovativeServicesShowcase";
import { EnhancedPricingComparison } from "@/components/EnhancedPricingComparison";
import { EnhancedPricingComparison } from "@/components/EnhancedPricingComparison";
import { UltimateServicesShowcase2027 } from "@/components/UltimateServicesShowcase2027";
import { UltimateServicesShowcase2027 } from "@/components/UltimateServicesShowcase2027";

// Enhanced loading component with better UX



import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import NewServicesShowcase2025 from "@/components/NewServicesShowcase2025";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewContentPromotionBanner, FeaturedNewContentSection, SuccessMetricsPromotionBanner } from "@/components/NewContentPromotionBanner";
import { AI2026ContentPromotionBanner, FeaturedAI2026ContentSection } from "@/components/AI2026ContentPromotionBanner";
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Star,
  Users,
  TrendingUp,

export default function Home() {




    return () => observer.disconnect();
  }, []);










              <Link to={category.link} className="block">
              </Link>


export default function Home() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Revolutionary AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, quantum computing, and autonomous solutions. Get 300% ROI within 6 months with our comprehensive technology services."
        keywords="AI services, quantum computing, business automation, technology solutions, digital transformation"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-8">
              <Zap className="h-4 w-4 text-zion-purple" />
              <span className="text-zion-purple text-sm font-medium">AI Revolution 2025</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-zion-purple to-zion-cyan bg-clip-text text-transparent"> Revolutionary AI</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Achieve <span className="text-zion-cyan font-semibold">300% ROI within 6 months</span> with our cutting-edge AI, quantum computing, and autonomous solutions that are reshaping industries worldwide.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">$2.3M</div>
                <div className="text-gray-400 text-sm">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">300%</div>
                <div className="text-gray-400 text-sm">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">90%</div>
                <div className="text-gray-400 text-sm">Faster Operations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
            
              <Link to="/contact">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-4 text-lg">
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
        
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
                  <Link 
                  </Link>

                  <Link 
                  </Link>

                  <Link 
                  </Link>

            <Link 
            </Link>

          
                
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                
                <Link 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
          
              <Link 
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white px-8 py-4 text-lg">
                  View Our Services
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>SOC 2 & ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>24/7 Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>99.9% Uptime Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Latest Insights & Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how businesses are achieving extraordinary results with our AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Blog Post */}
            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-zion-purple" />
                  <Badge variant="outline" className="border-zion-purple text-zion-purple">Latest Blog</Badge>
                </div>
                <CardTitle className="text-white text-lg">
                  The AI Revolution 2025: Transforming Business Operations
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Discover how AI is reshaping industries and learn about the latest trends in business automation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                  <Link to="/blog/ai-revolution-2025-transforming-business-operations">
                    <Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Case Study */}
            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <Badge variant="outline" className="border-green-400 text-green-400">Success Story</Badge>
                </div>
                <CardTitle className="text-white text-lg">
                  GlobalCorp Achieves 300% ROI in 6 Months
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Learn how a Fortune 500 company saved $2.3M annually with our AI solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <DollarSign className="h-4 w-4" />
                    <span>$2.3M saved</span>
                  </div>
                  <Link to="/case-studies/enterprise-ai-transformation-success-story">
                    <Button size="sm" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
                      View Case Study
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Resource Guide */}
            <Card className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-zion-cyan" />
                  <Badge variant="outline" className="border-zion-cyan text-zion-cyan">Free Guide</Badge>
                </div>
                <CardTitle className="text-white text-lg">
                  Complete AI Implementation Guide 2025
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Everything you need to know about implementing AI in your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Users className="h-4 w-4" />
                    <span>50+ pages</span>
                  </div>
                  <Link to="/resources/complete-ai-implementation-guide-2025">
                    <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                      Download Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI 2026 Content Promotion Banner */}
      <AI2026ContentPromotionBanner />

      {/* Featured AI 2026 Content Section */}
      <FeaturedAI2026ContentSection />

      {/* New Content Promotion Banner */}
      <NewContentPromotionBanner />

      {/* Featured New Content Section */}
      <FeaturedNewContentSection />

      {/* Success Metrics Promotion Banner */}
      <div className="container mx-auto px-4 py-8">
        <SuccessMetricsPromotionBanner />
      </div>

      {/* Services Showcase */}
      <ServicesShowcase />

      {/* New Services Showcase 2025 */}
      <NewServicesShowcase2025 />

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another technology company. We're your partners in transformation.
            </p>
          
                <Brain className="h-8 w-8 text-white" />
            
                <Shield className="h-8 w-8 text-white" />
            
                <TrendingUp className="h-8 w-8 text-white" />
            
                <Globe className="h-8 w-8 text-white" />
            <Link 
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-purple-light mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already achieved extraordinary results with our AI solutions. Get your free assessment today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Get Free AI Assessment
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple px-8 py-4 text-lg">
                View All Services
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-zion-purple-light">
            <p className="text-sm">📞 Call us: +1 302 464 0950 | ✉️ Email: kleber@ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </>
  );
