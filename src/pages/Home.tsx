import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap, Star, CheckCircle, Rocket, Target, TrendingUp, Activity, Calendar, MessageCircle, PenTool } from 'lucide-react';
import { EnhancedSEO } from "@/components/EnhancedSEO";
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
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Cybersecurity",
    description: "Advanced security protocols and threat protection systems",
    icon: "🔒",
    href: "/services/ai-cybersecurity",
    count: 15,
    color: "from-red-500 to-orange-600"
  },
  {
    name: "Digital Twin",
    description: "Real-time digital simulation and monitoring solutions",
    icon: "🔄",
    href: "/services/digital-twin",
    count: 6,
    color: "from-green-500 to-teal-600"
  },
  {
    name: "Micro SaaS",
    description: "Specialized software-as-a-service solutions for specific business needs",
    icon: "💼",
    href: "/services/micro-saas",
    count: 25,
    color: "from-yellow-500 to-orange-600"
  }
];

// Key benefits data
const keyBenefits = [
  {
    icon: Brain,
    title: "AI-Powered Innovation",
    description: "Cutting-edge artificial intelligence solutions that transform business operations and drive growth",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced cybersecurity with zero-trust architecture and AI-powered threat detection",
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Optimized solutions that deliver exceptional speed and reliability for your business needs",
    color: "from-green-600 to-emerald-600"
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Flexible solutions that grow with your business and adapt to changing requirements",
    color: "from-orange-600 to-red-600"
  }
];

// Featured services data
const featuredServices = [
  {
    name: "AI Enterprise Orchestrator",
    description: "Multi-agent AI coordination and workflow automation for enterprise transformation",
    href: "/services/ai-enterprise-orchestrator",
    icon: Brain,
    featured: true
  },
  {
    name: "Quantum AI Platform",
    description: "Next-generation quantum computing with AI capabilities for complex problem solving",
    href: "/services/quantum-ai-platform",
    icon: Rocket,
    featured: true
  },
  {
    name: "Zero Trust Security",
    description: "Advanced zero-trust security implementation and management",
    href: "/services/zero-trust-network-architecture",
    icon: Shield,
    featured: true
  },
  {
    name: "Edge Computing Platform",
    description: "Next-generation edge computing infrastructure for IoT and real-time applications",
    href: "/services/edge-computing-platform",
    icon: Zap,
    featured: true
  }
];

export default function Home() {
  return (
    <>
      <EnhancedSEO
        title="Zion Tech Group - Revolutionary AI & Technology Solutions"
        description="Transform your business with cutting-edge AI, quantum computing, and innovative technology solutions. Leading the future of enterprise technology."
        keywords="AI services, technology solutions, quantum computing, cybersecurity, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <Suspense fallback={<LoadingFallback message="Loading hero section..." />}>
          <HeroSection />
        </Suspense>

        {/* Quick Access Section */}
        <Suspense fallback={<LoadingFallback message="Loading quick access..." />}>
          <QuickAccess />
        </Suspense>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services designed to meet your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={category.href}
                    className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                        <span>{category.count} services</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine deep technical expertise with innovative thinking to deliver solutions that transform businesses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} mb-4`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and transformative technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={service.href}
                    className="block bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h3>
                          {service.featured && (
                            <span className="text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-2 py-1 rounded-full">
                              FEATURED
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                        <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                          Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <Suspense fallback={<LoadingFallback message="Loading additional sections..." />}>
          <FeatureHighlights />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading tech solutions..." />}>
          <TechSolutionsSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading case studies..." />}>
          <CaseStudiesSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading team expertise..." />}>
          <TeamExpertiseSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading global presence..." />}>
          <GlobalPresenceSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading innovation research..." />}>
          <InnovationResearchSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading client success stories..." />}>
          <ClientSuccessStoriesSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading technology stack..." />}>
          <TechnologyStackSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading security compliance..." />}>
          <SecurityComplianceSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading AI services showcase..." />}>
          <AIServicesShowcase />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading interactive testimonials..." />}>
          <InteractiveTestimonials />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading services showcase..." />}>
          <ServicesShowcase />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading pricing section..." />}>
          <PricingSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading newsletter section..." />}>
          <NewsletterSection />
        </Suspense>

        <Suspense fallback={<LoadingFallback message="Loading floating CTA..." />}>
          <FloatingCTA />
        </Suspense>
      </div>
    </>
  );
}
