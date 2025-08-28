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
import { HeroSection } from "@/components/HeroSection";
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

interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface AIService {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  href: string;
  color: string;
}

interface ServiceCategory {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  count: number;
  color: string;
  services: string[];
}

interface EmergingTech {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  price: string;
  category: string;
}

interface MicroSaasService {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  price: string;
  category: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const stats: StatItem[] = [
    {
      value: "500+",
      label: "Projects Delivered",
      description: "Successfully completed across industries",
      icon: CheckCircle,
      color: "from-green-400 to-emerald-500"
    },
    {
      value: "50+",
      label: "AI Solutions",
      description: "Cutting-edge artificial intelligence services",
      icon: Brain,
      color: "from-cyan-400 to-blue-500"
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance",
      icon: Clock,
      color: "from-blue-400 to-indigo-500"
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable infrastructure and services",
      icon: Shield,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const aiServices: AIService[] = [
    {
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with advanced analytics and machine learning",
      icon: Brain,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models"],
      href: "/services/ai-business-intelligence",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "AI Compliance Assistant",
      description: "Automate regulatory compliance with AI-powered monitoring and reporting",
      icon: Shield,
      features: ["Automated Auditing", "Risk Assessment", "Compliance Reporting"],
      href: "/services/ai-compliance-assistant",
      color: "from-red-400 to-pink-500"
    },
    {
      title: "AI Sales Copilot",
      description: "Boost sales performance with intelligent lead scoring and customer insights",
      icon: Users,
      features: ["Lead Scoring", "Customer Insights", "Sales Forecasting"],
      href: "/services/ai-sales-copilot",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const serviceCategories: ServiceCategory[] = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: Brain,
      href: "/ai-services",
      count: 25,
      color: "from-cyan-400 to-blue-500",
      services: ["AI Business Intelligence", "Machine Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      name: "Cloud & DevOps",
      description: "Enterprise-grade cloud infrastructure and automated deployment solutions",
      icon: Cloud,
      href: "/services/cloud-devops",
      count: 18,
      color: "from-blue-400 to-indigo-500",
      services: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Serverless Architecture"]
    },
    {
      name: "Digital Twin Solutions",
      description: "Create virtual replicas of physical systems for simulation and optimization",
      icon: Eye,
      href: "/services/digital-twin",
      count: 12,
      color: "from-purple-400 to-pink-500",
      services: ["IoT Integration", "Real-time Monitoring", "Predictive Maintenance", "3D Visualization"]
    },
    {
      name: "Data Analytics",
      description: "Turn your data into actionable business intelligence and insights",
      icon: BarChart3,
      href: "/services/data-analytics",
      count: 20,
      color: "from-green-400 to-emerald-500",
      services: ["Big Data Processing", "Business Intelligence", "Data Visualization", "Statistical Analysis"]
    }
  ];

  const emergingTech: EmergingTech[] = [
    {
      title: "Quantum Computing Solutions",
      description: "Next-generation computing power for complex problem solving",
      icon: Atom,
      href: "/services/quantum-computing",
      price: "Custom Pricing",
      category: "Emerging Technology"
    },
    {
      title: "Blockchain Enterprise",
      description: "Secure, transparent, and efficient business process automation",
      icon: Lock,
      href: "/services/blockchain",
      price: "Starting at $50K",
      category: "Blockchain"
    },
    {
      title: "Edge Computing",
      description: "Process data closer to the source for faster response times",
      icon: Network,
      href: "/services/edge-computing",
      price: "Starting at $25K",
      category: "Infrastructure"
    }
  ];

  const microSaasServices: MicroSaasService[] = [
    {
      title: "AI-Powered CRM",
      description: "Intelligent customer relationship management with predictive insights",
      icon: Users,
      href: "/services/micro-saas/crm",
      price: "$99/month",
      category: "Business Software"
    },
    {
      title: "Smart Inventory Management",
      description: "Automated inventory tracking and demand forecasting",
      icon: ShoppingCart,
      href: "/services/micro-saas/inventory",
      price: "$149/month",
      category: "Supply Chain"
    },
    {
      title: "Legal Document Analyzer",
      description: "AI-powered legal document review and compliance checking",
      icon: Scale,
      href: "/services/micro-saas/legal",
      price: "$199/month",
      category: "Legal Tech"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-futuristic flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Zion Tech Group - AI-Powered Business Solutions & Digital Transformation"
        description="Transform your business with cutting-edge AI solutions, cloud infrastructure, and digital twin technology. Expert IT services for modern enterprises."
        keywords={[
          "AI Business Intelligence",
          "Cloud DevOps",
          "Digital Twin Solutions",
          "Data Analytics",
          "IT Infrastructure",
          "Digital Transformation",
          "Machine Learning",
          "Business Technology",
          "Enterprise Solutions",
          "Technology Consulting"
        ]}
        ogType="website"
        twitterCard="summary_large_image"
        preconnect={[
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
          "https://api.ziontechgroup.com"
        ]}
        dnsPrefetch={[
          "//www.google-analytics.com",
          "//fonts.googleapis.com"
        ]}
        preload={[
          { href: "/fonts/orbitron-v19-latin-700.woff2", as: "font", type: "font/woff2" },
          { href: "/fonts/rajdhani-v15-latin-500.woff2", as: "font", type: "font/woff2" }
        ]}
        structuredData={{
          "@type": "WebPage",
          "name": "Zion Tech Group - AI-Powered Business Solutions",
          "description": "Leading provider of AI-powered business solutions, IT services, and digital transformation consulting.",
          "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com"
          },
          "mainEntity": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "description": "AI-powered business solutions and IT services",
            "foundingDate": "2020",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "info@ziontechgroup.com"
            },
            "sameAs": [
              "https://linkedin.com/company/zion-tech-group",
              "https://twitter.com/ziontechgroup",
              "https://facebook.com/ziontechgroup"
            ],
            "offers": {
              "@type": "Offer",
              "description": "AI Business Intelligence, Cloud DevOps, Digital Twin Solutions, Data Analytics, IT Infrastructure",
              "category": "Technology Services"
            }
          }
        }}
      />

      {/* Skip to Main Content Link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section id="hero" aria-labelledby="hero-heading">
          <HeroSection />
        </section>

        {/* Main Content */}
        <main id="main-content" role="main">
          {/* Stats Section */}
          <section 
            id="stats" 
            className="py-16 bg-slate-900/50"
            aria-labelledby="stats-heading"
          >
            <div className="container-responsive">
              <motion.h2
                id="stats-heading"
                className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Trusted by Industry Leaders
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                      <stat.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold text-slate-300 mb-2">{stat.label}</div>
                    <div className="text-sm text-slate-400">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Services Showcase */}
          <section 
            id="ai-services" 
            className="py-16"
            aria-labelledby="ai-services-heading"
          >
            <div className="container-responsive">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 id="ai-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                  AI-Powered Business Solutions
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Leverage the power of artificial intelligence to transform your business operations, 
                  gain competitive advantages, and drive innovation across your organization.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${service.color} mb-4`}>
                      <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section 
            id="service-categories" 
            className="py-16 bg-slate-900/50"
            aria-labelledby="service-categories-heading"
          >
            <div className="container-responsive">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 id="service-categories-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Comprehensive Service Portfolio
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  From AI and machine learning to cloud infrastructure and digital transformation, 
                  we provide end-to-end technology solutions for modern businesses.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {serviceCategories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${category.color}`}>
                        <category.icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <span className="text-sm text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        {category.count} services
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                    <p className="text-slate-300 mb-4">{category.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-slate-400 mb-2">Key Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.services.map((service, serviceIndex) => (
                          <span
                            key={serviceIndex}
                            className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      to={category.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      aria-label={`Explore ${category.name} services`}
                    >
                      Explore Services
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Emerging Technology */}
          <section 
            id="emerging-tech" 
            className="py-16"
            aria-labelledby="emerging-tech-heading"
          >
            <div className="container-responsive">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 id="emerging-tech-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Emerging Technology Solutions
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Stay ahead of the curve with our cutting-edge technology solutions that 
                  prepare your business for the future.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {emergingTech.map((tech, index) => (
                  <motion.div
                    key={tech.title}
                    className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
                      <tech.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                    <p className="text-slate-300 mb-4">{tech.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        {tech.category}
                      </span>
                      <span className="text-sm font-medium text-cyan-400">{tech.price}</span>
                    </div>
                    <Link
                      to={tech.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      aria-label={`Learn more about ${tech.title}`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Micro SaaS Products */}
          <section 
            id="micro-saas" 
            className="py-16 bg-slate-900/50"
            aria-labelledby="micro-saas-heading"
          >
            <div className="container-responsive">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 id="micro-saas-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready-to-Use SaaS Solutions
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Deploy powerful, AI-driven software solutions that integrate seamlessly 
                  with your existing business processes.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {microSaasServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mb-4">
                      <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-300 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-slate-400 bg-slate-700 px-2 py-1 rounded">
                        {service.category}
                      </span>
                      <span className="text-sm font-medium text-green-400">{service.price}</span>
                    </div>
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                      aria-label={`Get started with ${service.title}`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Lazy Loaded Components */}
          <Suspense fallback={<LoadingSpinner />}>
            <CategoriesSection />
            <BenefitsSection />
            <HowItWorksSection />
            <NewsletterSection />
            <FeaturedListingsSection />
            <QuickAccess />
            <FeatureCTAs />
            <FeatureHighlights />
            <ITServiceRequestHero />
            <FloatingCTA />
            <PricingSection />
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
          </Suspense>
        </main>
      </div>
    </>
  );
}
