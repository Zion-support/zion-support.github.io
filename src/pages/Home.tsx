import React, { Suspense, useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
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
import { EnhancedHeroSection as HeroSection } from "@/components/EnhancedHeroSection";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

// Lazy load heavy components with preloading hints
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

// Enhanced interfaces with better typing
interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  delay?: number;
}

interface AIService {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  href: string;
  color: string;
  priority?: 'high' | 'medium' | 'low';
}

interface ServiceCategory {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  count: number;
  color: string;
  services: string[];
  featured?: boolean;
}

interface EmergingTech {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  price: string;
  category: string;
  trending?: boolean;
}

interface MicroSaasService {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  price: string;
  category: string;
  popular?: boolean;
}

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner size="lg" />
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-white mt-6 text-xl font-medium"
      >
        Loading amazing content...
      </motion.p>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-sm text-gray-400"
      >
        Powered by Zion Tech Group
      </motion.div>
    </div>
  </div>
);

// Performance-optimized stats section
const StatsSection = React.memo(({ stats }: { stats: StatItem[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. See why companies choose Zion Tech Group for their digital transformation.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: (index * 0.1) + (stat.delay || 0) 
              }}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  // Performance optimization: Use useCallback for event handlers
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        setCurrentSection(index);
      }
    });
  }, []);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 800);

    // Add scroll listener for section tracking
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Enhanced stats with better performance metrics
  const stats: StatItem[] = [
    {
      value: "500+",
      label: "Projects Delivered",
      description: "Successfully completed across industries",
      icon: CheckCircle,
      color: "from-green-400 to-emerald-500",
      delay: 0.1
    },
    {
      value: "50+",
      label: "AI Solutions",
      description: "Cutting-edge artificial intelligence services",
      icon: Brain,
      color: "from-cyan-400 to-blue-500",
      delay: 0.2
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance",
      icon: Clock,
      color: "from-blue-400 to-indigo-500",
      delay: 0.3
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure and services",
      icon: Shield,
      color: "from-purple-400 to-pink-500",
      delay: 0.4
    }
  ];

  // Enhanced AI services with priority levels
  const aiServices: AIService[] = [
    {
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with advanced analytics and machine learning",
      icon: Brain,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models"],
      href: "/services/ai-business-intelligence",
      color: "from-cyan-400 to-blue-500",
      priority: "high"
    },
    {
      title: "AI Compliance Assistant",
      description: "Automate regulatory compliance with AI-powered monitoring and reporting",
      icon: Shield,
      features: ["Automated Auditing", "Risk Assessment", "Compliance Reporting"],
      href: "/services/ai-compliance-assistant",
      color: "from-red-400 to-pink-500",
      priority: "high"
    },
    {
      title: "AI Sales Copilot",
      description: "Boost sales performance with intelligent lead scoring and customer insights",
      icon: Users,
      features: ["Lead Scoring", "Customer Insights", "Sales Forecasting"],
      href: "/services/ai-sales-copilot",
      color: "from-green-400 to-emerald-500",
      priority: "medium"
    }
  ];

  // Enhanced service categories with featured flags
  const serviceCategories: ServiceCategory[] = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: Brain,
      href: "/ai-services",
      count: 25,
      color: "from-cyan-400 to-blue-500",
      services: ["AI Business Intelligence", "Machine Learning", "Natural Language Processing", "Computer Vision"],
      featured: true
    },
    {
      name: "Cloud & DevOps",
      description: "Enterprise-grade cloud infrastructure and automated deployment solutions",
      icon: Cloud,
      href: "/cloud-devops",
      count: 18,
      color: "from-blue-400 to-indigo-500",
      services: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Infrastructure as Code"],
      featured: true
    },
    {
      name: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      icon: Shield,
      href: "/cybersecurity",
      count: 22,
      color: "from-red-400 to-pink-500",
      services: ["Threat Detection", "Vulnerability Assessment", "Security Auditing", "Incident Response"],
      featured: true
    },
    {
      name: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation",
      icon: Rocket,
      href: "/digital-transformation",
      count: 15,
      color: "from-purple-400 to-pink-500",
      services: ["Strategy Consulting", "Process Optimization", "Technology Integration", "Change Management"],
      featured: false
    }
  ];

  if (isLoading) {
    return <EnhancedLoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Transform your business with cutting-edge AI solutions, cloud infrastructure, and digital transformation services. Trusted by industry leaders worldwide."
        keywords="AI solutions, technology consulting, cloud services, digital transformation, machine learning, cybersecurity, Zion Tech Group"
        ogType="website"
        ogImage="/images/zion-tech-group-og.jpg"
        canonical="https://ziontechgroup.com"
      />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Enhanced Stats Section */}
      <StatsSection stats={stats} />

      {/* Quick Access Section */}
      <Suspense fallback={<div className="h-32 bg-slate-800 animate-pulse" />}>
        <QuickAccess />
      </Suspense>

      {/* AI Services Showcase */}
      <Suspense fallback={<div className="h-96 bg-slate-800 animate-pulse" />}>
        <AIServicesShowcase />
      </Suspense>

      {/* Feature Highlights */}
      <Suspense fallback={<div className="h-64 bg-slate-800 animate-pulse" />}>
        <FeatureHighlights />
      </Suspense>

      {/* Services Showcase */}
      <Suspense fallback={<div className="h-80 bg-slate-800 animate-pulse" />}>
        <ServicesShowcase />
      </Suspense>

      {/* Feature CTAs */}
      <Suspense fallback={<div className="h-48 bg-slate-800 animate-pulse" />}>
        <FeatureCTAs />
      </Suspense>

      {/* IT Service Request Hero */}
      <Suspense fallback={<div className="h-72 bg-slate-800 animate-pulse" />}>
        <ITServiceRequestHero />
      </Suspense>

      {/* Technology Stack Section */}
      <Suspense fallback={<div className="h-64 bg-slate-800 animate-pulse" />}>
        <TechnologyStackSection />
      </Suspense>

      {/* Case Studies Section */}
      <Suspense fallback={<div className="h-80 bg-slate-800 animate-pulse" />}>
        <CaseStudiesSection />
      </Suspense>

      {/* Team Expertise Section */}
      <Suspense fallback={<div className="h-64 bg-slate-800 animate-pulse" />}>
        <TeamExpertiseSection />
      </Suspense>

      {/* Global Presence Section */}
      <Suspense fallback={<div className="h-48 bg-slate-800 animate-pulse" />}>
        <GlobalPresenceSection />
      </Suspense>

      {/* Innovation Research Section */}
      <Suspense fallback={<div className="h-64 bg-slate-800 animate-pulse" />}>
        <InnovationResearchSection />
      </Suspense>

      {/* Client Success Stories */}
      <Suspense fallback={<div className="h-80 bg-slate-800 animate-pulse" />}>
        <ClientSuccessStoriesSection />
      </Suspense>

      {/* Security & Compliance */}
      <Suspense fallback={<div className="h-64 bg-slate-800 animate-pulse" />}>
        <SecurityComplianceSection />
      </Suspense>

      {/* Interactive Testimonials */}
      <Suspense fallback={<div className="h-64 bg-slate-800 animate-pulse" />}>
        <InteractiveTestimonials />
      </Suspense>

      {/* Newsletter Section */}
      <Suspense fallback={<div className="h-48 bg-slate-800 animate-pulse" />}>
        <NewsletterSection />
      </Suspense>

      {/* Floating CTA */}
      <Suspense fallback={null}>
        <FloatingCTA />
      </Suspense>
    </div>
  );
}
