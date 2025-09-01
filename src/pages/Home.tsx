import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap, Star, CheckCircle, Rocket, Target, TrendingUp } from 'lucide-react';
import EnhancedSEO from "@/components/EnhancedSEO";
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

// Service categories data with new 2026 services
const serviceCategories = [
  {
    name: "New 2026 AI Services",
    description: "Cutting-edge AI-powered solutions for 2026 and beyond",
    icon: "🚀",
    href: "/comprehensive-services-showcase-2026",
    count: 11,
    color: "from-purple-500 to-pink-600",
    featured: true
  },
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
    href: "/services/ai-cybersecurity-suite",
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
    icon: "💝",
    href: "/services/ai-customer-success-platform",
    count: 5,
    color: "from-yellow-500 to-orange-600"
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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

  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity Excellence",
      description: "Advanced security solutions protecting your digital assets",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and efficient development operations",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services for modern businesses",
      icon: Rocket,
      color: "from-green-500 to-emerald-500"
    }
  ];

  if (isLoading) {
    return <LoadingFallback message="Loading Zion Tech Group..." />;
  }

  return (
    <>
      <EnhancedSEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
        type="website"
        tags={['AI Solutions', 'Technology Services', 'Digital Transformation', 'IT Consulting', 'Cloud Services', 'Cybersecurity']}
        services={[
          {
            name: 'AI Business Intelligence',
            description: 'Transform your business with AI-powered insights and analytics',
            url: '/services/ai-business-intelligence',
            category: 'Artificial Intelligence'
          },
          {
            name: 'Cloud DevOps',
            description: 'Streamline your development and operations with cloud-native solutions',
            url: '/services/cloud-devops',
            category: 'Cloud Services'
          },
          {
            name: 'Digital Transformation',
            description: 'Modernize your business processes and technology infrastructure',
            url: '/services/digital-transformation',
            category: 'Consulting'
          }
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <HeroSection />

        {/* Quick Access Section */}
        <Suspense fallback={<LoadingFallback message="Loading quick access..." />}>
          <QuickAccess />
        </Suspense>

        {/* Service Categories */}
        <Suspense fallback={<LoadingFallback message="Loading services..." />}>
          <CategoriesSection 
            categories={serviceCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </Suspense>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
                  <div className="text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New 2026 Services Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                New 2026 AI Services
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Discover our latest AI-powered solutions designed to transform your business in 2026 and beyond
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Cybersecurity Threat Intelligence",
                  description: "Advanced threat detection and intelligence platform",
                  icon: "🛡️",
                  href: "/comprehensive-services-showcase-2026#ai-cybersecurity-threat-intelligence",
                  color: "from-red-500 to-orange-500"
                },
                {
                  title: "AI Financial Trading Risk Management",
                  description: "Intelligent risk assessment and trading optimization",
                  icon: "💰",
                  href: "/comprehensive-services-showcase-2026#ai-financial-trading-risk-management",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "AI Healthcare Predictive Analytics",
                  description: "Predictive healthcare insights and patient care optimization",
                  icon: "🏥",
                  href: "/comprehensive-services-showcase-2026#ai-healthcare-predictive-analytics",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "AI Legal Document Automation",
                  description: "Automated legal document processing and analysis",
                  icon: "⚖️",
                  href: "/comprehensive-services-showcase-2026#ai-legal-document-automation",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "AI Customer Experience Analytics",
                  description: "Deep insights into customer behavior and preferences",
                  icon: "👥",
                  href: "/comprehensive-services-showcase-2026#ai-customer-experience-analytics",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  title: "AI Content Generation Platform",
                  description: "AI-powered content creation and optimization",
                  icon: "✍️",
                  href: "/comprehensive-services-showcase-2026#ai-content-generation-platform",
                  color: "from-yellow-500 to-orange-500"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={service.href} className="block">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="mr-2">Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  to="/comprehensive-services-showcase-2026"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <span>View All 2026 Services</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Why Choose Zion Tech Group?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                We combine cutting-edge technology with deep industry expertise to deliver exceptional results
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Get started with our comprehensive AI solutions and take your business to the next level
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/comprehensive-services-showcase-2026"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>Explore 2026 Services</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <span>Contact Us</span>
                <MessageCircle className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Additional Sections */}
        <Suspense fallback={<LoadingFallback message="Loading additional sections..." />}>
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
          <BenefitsSection />
          <HowItWorksSection />
          <NewsletterSection />
          <FeaturedListingsSection />
          <FeatureHighlights />
          <FeatureCTAs />
          <ITServiceRequestHero />
          <FloatingCTA />
          <PricingSection />
        </Suspense>
      </div>
    </>
  );
}
