import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Shield, Zap, Star, CheckCircle, Rocket, Target, TrendingUp } from 'lucide-react';
import EnhancedSEO from "@/components/EnhancedSEO";
import { HeroSection } from "@/components/HeroSection";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Link } from 'react-router-dom';

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
    count: 20,
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Edge & IoT",
    description: "Ultra-low latency edge computing and IoT platform solutions",
    icon: "⚡",
    href: "/services/edge-computing-platform",
    count: 8,
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions",
    icon: "☁️",
    href: "/services/cloud-devops",
    count: 12,
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Cybersecurity",
    description: "Advanced security protocols and threat protection systems",
    icon: "🔒",
    href: "/services/ai-compliance-copilot",
    count: 10,
    color: "from-red-500 to-orange-600"
  },
  {
    name: "Data Governance",
    description: "AI-powered data protection and compliance management",
    icon: "🛡️",
    href: "/services/ai-data-governance",
    count: 6,
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Customer Success",
    description: "AI-driven customer engagement and retention platforms",
    icon: "🎯",
    href: "/services/ai-customer-success-platform",
    count: 15,
    color: "from-orange-500 to-red-600"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <EnhancedSEO 
        title="Zion Tech Group - Leading AI & Technology Solutions" 
        description="Transform your business with Zion's cutting-edge AI solutions, cloud services, cybersecurity, and digital transformation expertise. Join the future of technology."
        keywords="AI solutions, cloud services, cybersecurity, digital transformation, technology consulting, Zion Tech Group"
        canonical="https://ziontechgroup.com/"
      />
      
      {/* IT Service Request Hero - Enhanced */}
      <Suspense fallback={<LoadingFallback message="Loading IT Services..." />}>
        <ITServiceRequestHero />
      </Suspense>
      
      {/* Main Hero Section */}
      <Suspense fallback={<LoadingFallback message="Loading Hero Section..." />}>
        <HeroSection />
      </Suspense>
      
      {/* Enhanced Service Categories Overview */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered insights to robust infrastructure, we deliver end-to-end solutions 
              that drive innovation and growth across all industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{category.count} services</span>
                    <Link 
                      to={category.href}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center group-hover:translate-x-1"
                    >
                      Explore <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quick Access Section */}
      <Suspense fallback={<LoadingFallback message="Loading Quick Access..." />}>
        <QuickAccess />
      </Suspense>

      {/* Feature Highlights */}
      <Suspense fallback={<LoadingFallback message="Loading Features..." />}>
        <FeatureHighlights />
      </Suspense>

      {/* Tech Solutions Section */}
      <Suspense fallback={<LoadingFallback message="Loading Tech Solutions..." />}>
        <TechSolutionsSection />
      </Suspense>

      {/* Case Studies Section */}
      <Suspense fallback={<LoadingFallback message="Loading Case Studies..." />}>
        <CaseStudiesSection />
      </Suspense>

      {/* Team Expertise Section */}
      <Suspense fallback={<LoadingFallback message="Loading Team Expertise..." />}>
        <TeamExpertiseSection />
      </Suspense>

      {/* Technology Stack Section */}
      <Suspense fallback={<LoadingFallback message="Loading Technology Stack..." />}>
        <TechnologyStackSection />
      </Suspense>

      {/* Security & Compliance Section */}
      <Suspense fallback={<LoadingFallback message="Loading Security & Compliance..." />}>
        <SecurityComplianceSection />
      </Suspense>

      {/* AI Services Showcase */}
      <Suspense fallback={<LoadingFallback message="Loading AI Services..." />}>
        <AIServicesShowcase />
      </Suspense>

      {/* Interactive Testimonials */}
      <Suspense fallback={<LoadingFallback message="Loading Testimonials..." />}>
        <InteractiveTestimonials />
      </Suspense>

      {/* Services Showcase */}
      <Suspense fallback={<LoadingFallback message="Loading Services..." />}>
        <ServicesShowcase />
      </Suspense>

      {/* Feature CTAs */}
      <Suspense fallback={<LoadingFallback message="Loading Features..." />}>
        <FeatureCTAs />
      </Suspense>

      {/* Pricing Section */}
      <Suspense fallback={<LoadingFallback message="Loading Pricing..." />}>
        <PricingSection />
      </Suspense>

      {/* Global Presence Section */}
      <Suspense fallback={<LoadingFallback message="Loading Global Presence..." />}>
        <GlobalPresenceSection />
      </Suspense>

      {/* Innovation & Research Section */}
      <Suspense fallback={<LoadingFallback message="Loading Innovation..." />}>
        <InnovationResearchSection />
      </Suspense>

      {/* Client Success Stories */}
      <Suspense fallback={<LoadingFallback message="Loading Success Stories..." />}>
        <ClientSuccessStoriesSection />
      </Suspense>

      {/* Categories Section */}
      <Suspense fallback={<LoadingFallback message="Loading Categories..." />}>
        <CategoriesSection />
      </Suspense>

      {/* Benefits Section */}
      <Suspense fallback={<LoadingFallback message="Loading Benefits..." />}>
        <BenefitsSection />
      </Suspense>

      {/* How It Works Section */}
      <Suspense fallback={<LoadingFallback message="Loading How It Works..." />}>
        <HowItWorksSection />
      </Suspense>

      {/* Featured Listings Section */}
      <Suspense fallback={<LoadingFallback message="Loading Featured Listings..." />}>
        <FeaturedListingsSection />
      </Suspense>

      {/* Newsletter Section */}
      <Suspense fallback={<LoadingFallback message="Loading Newsletter..." />}>
        <NewsletterSection />
      </Suspense>

      {/* Floating CTA */}
      <Suspense fallback={null}>
        <FloatingCTA />
      </Suspense>
    </div>
  );
}
