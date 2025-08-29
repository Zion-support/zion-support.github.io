import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap, Sparkles, Star, TrendingUp, Users, Award } from 'lucide-react';
import { SEO } from "@/components/SEO";
import { EnhancedHeroSection } from "@/components/EnhancedHeroSection";
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: "Happy Clients", value: "500+", icon: Users, color: "from-zion-cyan to-zion-blue" },
    { label: "Projects Completed", value: "1000+", icon: Award, color: "from-zion-blue to-zion-purple" },
    { label: "Success Rate", value: "98%", icon: TrendingUp, color: "from-zion-purple to-zion-cyan" },
    { label: "Years Experience", value: "15+", icon: Star, color: "from-zion-cyan to-zion-blue" }
  ];

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />
      
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-zion-slate/50 to-zion-slate-dark/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our track record speaks for itself. Join hundreds of satisfied clients who have transformed their businesses with our technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} bg-opacity-20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black">
          <div className="container-responsive">
            <div className="h-32 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <QuickAccess />
      </Suspense>

      {/* Feature Highlights */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate-dark to-black">
          <div className="container-responsive">
            <div className="h-64 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <FeatureHighlights />
      </Suspense>

      {/* AI Services Showcase */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate to-zion-slate-dark">
          <div className="container-responsive">
            <div className="h-96 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <AIServicesShowcase />
      </Suspense>

      {/* Tech Solutions Section */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate-dark to-black">
          <div className="container-responsive">
            <div className="h-64 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <TechSolutionsSection />
      </Suspense>

      {/* Case Studies Section */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate to-zion-slate-dark">
          <div className="container-responsive">
            <div className="h-64 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <CaseStudiesSection />
      </Suspense>

      {/* Team Expertise Section */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate-dark to-black">
          <div className="container-responsive">
            <div className="h-64 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <TeamExpertiseSection />
      </Suspense>

      {/* Global Presence Section */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate to-zion-slate-dark">
          <div className="container-responsive">
            <div className="h-64 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <GlobalPresenceSection />
      </Suspense>

      {/* Innovation Research Section */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate-dark to-black">
          <div className="container-responsive">
            <div className="h-64 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <InnovationResearchSection />
      </Suspense>

      {/* Client Success Stories Section */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate to-zion-slate-dark">
          <div className="container-responsive">
            <div className="h-64 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <ClientSuccessStoriesSection />
      </Suspense>

      {/* Technology Stack Section */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate-dark to-black">
          <div className="container-responsive">
            <div className="h-64 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <TechnologyStackSection />
      </Suspense>

      {/* Security Compliance Section */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate to-zion-slate-dark">
          <div className="container-responsive">
            <div className="h-64 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <SecurityComplianceSection />
      </Suspense>

      {/* Interactive Testimonials */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate-dark to-black">
          <div className="container-responsive">
            <div className="h-64 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <InteractiveTestimonials />
      </Suspense>

      {/* Services Showcase */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate to-zion-slate-dark">
          <div className="container-responsive">
            <div className="h-64 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <ServicesShowcase />
      </Suspense>

      {/* Feature CTAs */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate-dark to-black">
          <div className="container-responsive">
            <div className="h-32 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <FeatureCTAs />
      </Suspense>

      {/* IT Service Request Hero */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate to-zion-slate-dark">
          <div className="container-responsive">
            <div className="h-32 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <ITServiceRequestHero />
      </Suspense>

      {/* Pricing Section */}
      <Suspense fallback={
        <div className="py-20 bg-gradient-to-br from-zion-slate-dark to-black">
          <div className="container-responsive">
            <div className="h-64 bg-zion-slate/50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      }>
        <PricingSection />
      </Suspense>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-zion-cyan/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Ready to Get Started?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Business Today
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the hundreds of companies that have already revolutionized their operations with Zion Tech Group's cutting-edge solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-slate transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingCTA />
    </>
  );
}
