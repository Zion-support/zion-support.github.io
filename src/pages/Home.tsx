import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Cloud, 
  Server, 
  Rocket, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Target,
  Lightbulb,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { EnhancedServicesShowcase } from '../components/EnhancedServicesShowcase';
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
import { EnhancedServiceShowcase } from "@/components/EnhancedServiceShowcase";
import { CategoriesSection } from "@/components/CategoriesSection";

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

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Expert Team', icon: Award },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '24/7', label: 'Support', icon: Phone }
  ];

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-zion-cyan" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-zion-cyan text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <EnhancedLoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ITServiceRequestHero />

      {/* Enhanced Service Showcase */}
      <EnhancedServiceShowcase />

      {/* Enhanced Categories Section */}
      <CategoriesSection />

      {/* Enhanced Innovative Services Showcase */}
      <EnhancedInnovativeServicesShowcase />

      {/* Stats Section */}
      <StatsSection />

      {/* Feature Highlights */}
      <FeatureHighlights />

      {/* AI Services Showcase */}
      <AIServicesShowcase />

      {/* Tech Solutions Section */}
      <TechSolutionsSection />

      {/* Enhanced Pricing Comparison */}
      <EnhancedPricingComparison />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Team Expertise Section */}
      <TeamExpertiseSection />

      {/* Global Presence Section */}
      <GlobalPresenceSection />

      {/* Innovation & Research Section */}
      <InnovationResearchSection />

      {/* Client Success Stories */}
      <ClientSuccessStoriesSection />

      {/* Technology Stack */}
      <TechnologyStackSection />

      {/* Security & Compliance */}
      <SecurityComplianceSection />

      {/* Interactive Testimonials */}
      <InteractiveTestimonials />

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
};

export default Home;
