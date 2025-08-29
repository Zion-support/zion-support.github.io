import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Database, 
  Network, 
  Eye, 
  Globe2, 
  Smartphone, 
  Monitor, 
  Server, 
  Atom, 
  Car, 
  Scale, 
  Leaf, 
  Factory, 
  Building, 
  Clock, 
  Phone, 
  Mail, 
  TrendingUp 
} from 'lucide-react';
import { SEO } from "@/components/SEO";
import { EnhancedHeroSection } from "@/components/EnhancedHeroSection";
import { ModernServicesShowcase } from "@/components/ModernServicesShowcase";
import { ModernTestimonials } from "@/components/ModernTestimonials";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

// Lazy load heavy components
const CategoriesSection = React.lazy(() => import("@/components/CategoriesSection"));
const BenefitsSection = React.lazy(() => import("@/components/BenefitsSection"));
const HowItWorksSection = React.lazy(() => import("@/components/HowItWorksSection"));
const NewsletterSection = React.lazy(() => import("@/components/NewsletterSection"));
const FeaturedListingsSection = React.lazy(() => import("@/components/FeaturedListingsSection"));
const QuickAccess = React.lazy(() => import("@/components/home/QuickAccess"));
const FeatureCTAs = React.lazy(() => import("@/components/home/FeatureCTAs"));
const FeatureHighlights = React.lazy(() => import("@/components/home/FeatureHighlights"));
const ITServiceRequestHero = React.lazy(() => import("@/components/home/ITServiceRequestHero"));
const FloatingCTA = React.lazy(() => import("@/components/FloatingCTA"));
const PricingSection = React.lazy(() => import("@/components/PricingSection"));
const TechSolutionsSection = React.lazy(() => import("@/components/TechSolutionsSection"));
const CaseStudiesSection = React.lazy(() => import("@/components/CaseStudiesSection"));
const TeamExpertiseSection = React.lazy(() => import("@/components/TeamExpertiseSection"));
const GlobalPresenceSection = React.lazy(() => import("@/components/GlobalPresenceSection"));
const InnovationResearchSection = React.lazy(() => import("@/components/InnovationResearchSection"));
const ClientSuccessStoriesSection = React.lazy(() => import("@/components/ClientSuccessStoriesSection"));
const TechnologyStackSection = React.lazy(() => import("@/components/TechnologyStackSection"));
const SecurityComplianceSection = React.lazy(() => import("@/components/SecurityComplianceSection"));
const AIServicesShowcase = React.lazy(() => import("@/components/AIServicesShowcase"));
const InteractiveTestimonials = React.lazy(() => import("@/components/InteractiveTestimonials"));
const ServicesShowcase = React.lazy(() => import("@/components/ServicesShowcase"));

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner />
      <p className="text-white mt-4 text-lg">Loading amazing content...</p>
      <div className="mt-2 text-sm text-gray-400">Powered by Zion Tech Group</div>
    </div>
  </div>
);

// Modern CTA section
const ModernCTASection = () => (
  <section className="py-20 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-zion-cyan/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-bl from-zion-purple/10 to-transparent rounded-full blur-3xl" />
    </div>
    
    <div className="container-responsive relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Join hundreds of companies that have already accelerated their digital transformation with Zion Tech Group.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:-translate-y-1 border border-zion-cyan/30"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan/10 transition-all duration-300 backdrop-blur-sm"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

// Enhanced features section
const EnhancedFeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence that learns and adapts to your business needs",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud Excellence",
      description: "Scalable cloud infrastructure designed for performance and reliability",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security protocols to protect your valuable data",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide presence with local expertise in every market",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-futuristic relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-zion-purple/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-zion-cyan/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container-responsive relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - AI-Powered Technology Solutions"
        description="Transform your business with cutting-edge AI solutions, cloud infrastructure, and digital transformation services. Leading technology partner for modern enterprises."
        keywords="AI solutions, cloud computing, digital transformation, technology consulting, Zion Tech Group, machine learning, cybersecurity"
        ogType="website"
      />
      
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />
      
      {/* Enhanced Features Section */}
      <EnhancedFeaturesSection />
      
      {/* Modern Services Showcase */}
      <ModernServicesShowcase />
      
      {/* Modern Testimonials */}
      <ModernTestimonials />
      
      {/* Modern CTA Section */}
      <ModernCTASection />
      
      {/* Lazy loaded sections for better performance */}
      <Suspense fallback={<EnhancedLoadingSpinner />}>
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
        <ServicesShowcase />
        <PricingSection />
        <NewsletterSection />
        <FloatingCTA />
      </Suspense>
    </>
  );
}
