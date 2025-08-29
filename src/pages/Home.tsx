
import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { HomePageSEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

// Lazy load components for better performance
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

// Loading fallback component
const LoadingFallback = ({ message }: { message: string }) => (
  <div className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-12 bg-slate-700 rounded-lg mb-4 max-w-md mx-auto"></div>
          <div className="h-6 bg-slate-700 rounded-lg max-w-2xl mx-auto"></div>
        </div>
        <p className="text-slate-400 mt-4">{message}</p>
      </div>
    </div>
  </div>
);

// Service categories data
const serviceCategories = [
  {
    name: "AI Solutions",
    description: "Cutting-edge artificial intelligence services for business transformation",
    icon: "🤖",
    href: "/ai-services",
    count: 15,
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions",
    icon: "☁️",
    href: "/services/cloud-devops",
    count: 12,
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Cybersecurity",
    description: "Advanced security protocols and threat protection systems",
    icon: "🔒",
    href: "/services/ai-compliance-copilot",
    count: 8,
    color: "from-red-500 to-orange-600"
  },
  {
    name: "Digital Transformation",
    description: "End-to-end business process modernization and optimization",
    icon: "🚀",
    href: "/services/digital-transformation",
    count: 10,
    color: "from-green-500 to-cyan-600"
  },
  {
    name: "Infrastructure",
    description: "Robust IT infrastructure and network management solutions",
    icon: "🏗️",
    href: "/services/it-infrastructure",
    count: 6,
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Consulting",
    description: "Strategic technology consulting and implementation guidance",
    icon: "💡",
    href: "/services/it-consulting",
    count: 9,
    color: "from-orange-500 to-green-600"
  }
];

// Animation variants for smooth performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Stats data
const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Global Clients",
    description: "Trusted worldwide"
  },
  {
    icon: Rocket,
    value: "1000+",
    label: "Projects Delivered",
    description: "Successfully completed"
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime SLA",
    description: "Enterprise reliability"
  },
  {
    icon: Star,
    value: "24/7",
    label: "Expert Support",
    description: "Always available"
  }
];

// AI Services data
const aiServices = [
  {
    icon: Brain,
    title: "AI Business Intelligence",
    description: "Transform your data into actionable insights with our advanced AI analytics platform.",
    path: "/services/ai-business-intelligence",
    features: [
      "Predictive Analytics",
      "Real-time Dashboards",
      "Automated Reporting",
      "Custom ML Models"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud DevOps",
    description: "Streamline your development pipeline with automated cloud infrastructure.",
    path: "/services/cloud-devops",
    features: [
      "CI/CD Automation",
      "Infrastructure as Code",
      "Container Orchestration",
      "Security Integration"
    ]
  },
  {
    icon: Shield,
    title: "AI Cybersecurity",
    description: "Protect your business with intelligent threat detection and response systems.",
    path: "/services/ai-cybersecurity-suite",
    features: [
      "Threat Intelligence",
      "Automated Response",
      "Zero Trust Architecture",
      "Compliance Monitoring"
    ]
  }
];

// Why Choose Us data
const whyChooseUs = [
  {
    icon: Award,
    title: "Industry Expertise",
    description: "15+ years of proven technology leadership and innovation"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across 50+ countries with 24/7 support"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security and compliance standards"
  },
  {
    icon: Heart,
    title: "Customer Success",
    description: "98% customer satisfaction with dedicated success managers"
  }
];

// Trust Signals data
const trustSignals = [
  {
    icon: Award,
    label: "ISO 27001 Certified",
    description: "Information security management"
  },
  {
    icon: Shield,
    label: "SOC 2 Compliant",
    description: "Security, availability, and confidentiality"
  },
  {
    icon: Globe,
    label: "GDPR Ready",
    description: "Data protection compliance"
  },
  {
    icon: Star,
    label: "99.9% Uptime",
    description: "Enterprise-grade reliability"
  }
];

export default function Home() {
  return (
    <>
      <HomePageSEO />
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Service Categories Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading services..." />}>
          <CategoriesSection />
        </Suspense>
        
        {/* Benefits Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading benefits..." />}>
          <BenefitsSection />
        </Suspense>
        
        {/* How It Works Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading process..." />}>
          <HowItWorksSection />
        </Suspense>
        
        {/* Newsletter Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading newsletter..." />}>
          <NewsletterSection />
        </Suspense>
        
        {/* Featured Listings Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading featured listings..." />}>
          <FeaturedListingsSection />
        </Suspense>
        
        {/* Quick Access Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading quick access..." />}>
          <QuickAccess />
        </Suspense>
        
        {/* Feature CTAs Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading features..." />}>
          <FeatureCTAs />
        </Suspense>
        
        {/* Feature Highlights Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading highlights..." />}>
          <FeatureHighlights />
        </Suspense>
        
        {/* IT Service Request Hero Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading IT services..." />}>
          <ITServiceRequestHero />
        </Suspense>
        
        {/* Floating CTA Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading CTA..." />}>
          <FloatingCTA />
        </Suspense>
        
        {/* Pricing Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading pricing..." />}>
          <PricingSection />
        </Suspense>
        
        {/* Tech Solutions Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading tech solutions..." />}>
          <TechSolutionsSection />
        </Suspense>
        
        {/* Case Studies Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading case studies..." />}>
          <CaseStudiesSection />
        </Suspense>
        
        {/* Team Expertise Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading team expertise..." />}>
          <TeamExpertiseSection />
        </Suspense>
        
        {/* Global Presence Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading global presence..." />}>
          <GlobalPresenceSection />
        </Suspense>
        
        {/* Innovation Research Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading innovation..." />}>
          <InnovationResearchSection />
        </Suspense>
        
        {/* Client Success Stories Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading success stories..." />}>
          <ClientSuccessStoriesSection />
        </Suspense>
        
        {/* Technology Stack Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading tech stack..." />}>
          <TechnologyStackSection />
        </Suspense>
        
        {/* Security Compliance Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading security..." />}>
          <SecurityComplianceSection />
        </Suspense>
        
        {/* AI Services Showcase Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading AI services..." />}>
          <AIServicesShowcase />
        </Suspense>
        
        {/* Interactive Testimonials Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading testimonials..." />}>
          <InteractiveTestimonials />
        </Suspense>
        
        {/* Services Showcase Section */}
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading services showcase..." />}>
          <ServicesShowcase />
        </Suspense>
      </div>
    </>
  );
}
