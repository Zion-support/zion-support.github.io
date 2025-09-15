import { HeroSection } from "@/components/HeroSection";
import { SEO } from "@/components/SEO";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { getRecentBlogPosts } from "@/data/blog-posts";
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Atom,
  Brain,
  Building,
  Car,
  CheckCircle,
  Clock,
  Cloud,
  Cpu,
  DollarSign,
  Globe2,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
  Rocket,
  BookOpen,
  HelpCircle,
  Network,
  Lock,
  Gauge,
  BarChart3,
  Mail,
  Play,
  Lightbulb
} from 'lucide-react';
import type { ComponentType, SyntheticEvent } from 'react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewContentPromoBanner } from "@/components/NewContentPromoBanner";

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
  icon: ComponentType<any>;
  color: string;
}

interface AIService {
  title: string;
  description: string;
  icon: ComponentType<any>;
  features: string[];
  href: string;
  color: string;
}

interface ServiceCategory {
  name: string;
  description: string;
  icon: ComponentType<any>;
  href: string;
  count: number;
  color: string;
  services: string[];
}

interface EmergingTech {
  title: string;
  description: string;
  icon: ComponentType<any>;
  href: string;
  price: string;
  category: string;
}

interface MicroSaasService {
  title: string;
  description: string;
  icon: ComponentType<any>;
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
    ,
    {
      title: "AI Content Studio",
      description: "Generate on-brand blogs, landing pages, and social posts with built-in SEO and approvals",
      icon: BookOpen,
      features: ["Programmatic SEO", "Brand Voice Controls", "Multi-channel Publishing"],
      href: "/services/ai-content-creation-studio",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "AI Support Agent",
      description: "Omnichannel support deflection and agent assist with secure retrieval over your docs",
      icon: HelpCircle,
      features: ["RAG over Knowledge Base", "Multilingual", "Analytics & Deflection"],
      href: "/services/ai-customer-support-agent",
      color: "from-blue-400 to-indigo-500"
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
      name: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and infrastructure",
      icon: Shield,
      href: "/services/cybersecurity",
      count: 22,
      color: "from-red-400 to-pink-500",
      services: ["Threat Detection", "Zero Trust Security", "Compliance Management", "Incident Response"]
    },
    {
      name: "Digital Transformation",
      description: "Strategic technology consulting and implementation guidance",
      icon: Zap,
      href: "/services/digital-transformation",
      count: 15,
      color: "from-yellow-400 to-orange-500",
      services: ["Process Automation", "Digital Strategy", "Change Management", "Technology Roadmap"]
    },
    {
      name: "IoT & Edge Computing",
      description: "Smart device networks and edge computing solutions",
      icon: Cpu,
      href: "/services/iot-edge",
      count: 20,
      color: "from-green-400 to-emerald-500",
      services: ["IoT Platforms", "Edge Analytics", "Device Management", "Smart Cities"]
    },
    {
      name: "Quantum Computing",
      description: "Next-generation quantum solutions for complex problem solving",
      icon: Atom,
      href: "/services/quantum-computing",
      count: 12,
      color: "from-purple-400 to-pink-500",
      services: ["Quantum Algorithms", "Quantum Security", "Quantum Simulation", "Quantum ML"]
    }
  ];

  const emergingTech: EmergingTech[] = [
    {
      title: "Metaverse Commerce",
      description: "Create virtual storefronts and immersive shopping experiences",
      icon: Globe2,
      href: "/services/metaverse-commerce-platform",
      price: "$399/month",
      category: "Emerging Tech"
    },
    {
      title: "Quantum AI Trading",
      description: "Revolutionary trading platform using quantum computing principles",
      icon: TrendingUp,
      href: "/services/quantum-ai-trading-platform",
      price: "$2,999/month",
      category: "FinTech"
    },
    {
      title: "Space Technology",
      description: "Satellite operations and space mission optimization",
      icon: Building,
      href: "/services/space-tech-optimization-platform",
      price: "$3,999/month",
      category: "Space Tech"
    },
    {
      title: "Autonomous Vehicles",
      description: "Fleet management for autonomous vehicle operations",
      icon: Car,
      href: "/services/autonomous-vehicle-fleet-management",
      price: "$799/month",
      category: "Transportation"
    }
    ,
    {
      title: "Digital Twins Platform",
      description: "Simulate and optimize complex systems with real-time telemetry and what-if scenarios",
      icon: Network,
      href: "/services/digital-twins-platform",
      price: "$1,999/month",
      category: "Industrial Tech"
    },
    {
      title: "Quantum-Safe Vault",
      description: "Post-quantum key management and hybrid cryptography for long-term data protection",
      icon: Lock,
      href: "/services/quantum-ready-cryptography",
      price: "$3,499/month",
      category: "Cybersecurity"
    }
  ];

  const microSaasServices: MicroSaasService[] = [
    {
      title: "AI Customer Success",
      description: "Predictive churn prevention and automated onboarding",
      icon: Users,
      href: "/services/ai-powered-customer-success",
      price: "$199/month",
      category: "Customer Success"
    },
    {
      title: "AI Marketing Automation",
      description: "Intelligent campaign optimization and audience targeting",
      icon: Target,
      href: "/services/ai-marketing-automation",
      price: "$299/month",
      category: "Marketing"
    },
    {
      title: "AI Financial Advisor",
      description: "Automated financial planning and investment recommendations",
      icon: DollarSign,
      href: "/services/ai-financial-advisor",
      price: "$399/month",
      category: "Finance"
    }
    ,
    {
      title: "SEO Content Optimizer",
      description: "Programmatic landing pages, internal linking, and ongoing on-page audits",
      icon: Gauge,
      href: "/services/seo-content-optimizer",
      price: "$129/month",
      category: "Marketing"
    },
    {
      title: "Cloud Cost Optimizer",
      description: "Rightsizing, scheduling, and anomaly alerts with policy-based savings actions",
      icon: BarChart3,
      href: "/services/cloud-cost-optimizer",
      price: "$600/month",
      category: "FinOps"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <LoadingSpinner />
          <p className="text-lg text-gray-300 mt-4">Preparing amazing experiences...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Zion Tech Group - AI-Powered Business Solutions"
        description="Transform your business with cutting-edge AI solutions, cloud infrastructure, and digital transformation services. Expert IT consulting for the modern enterprise."
        keywords={[
          "AI solutions",
          "cloud computing",
          "digital transformation",
          "IT consulting",
          "cybersecurity",
          "machine learning",
          "business intelligence"
        ]}
      />
      
      <div className="min-h-screen bg-futuristic">
        <NewContentPromoBanner variant="top" />
        {/* Hero Section */}
        <HeroSection />

        {/* Promo: Policy-as-Code in Production */}
        <motion.section 
          className="py-6 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 sm:p-5 text-center">
              <p className="text-sm sm:text-base font-semibold text-emerald-200">
                New: AI 2026 — Policy‑as‑Code in Production
                <Link to="/blog/ai-2026-policy-as-code-in-production" className="underline decoration-emerald-300/60 underline-offset-4 hover:text-white ml-2">read the blueprint</Link>
              </p>
            </div>
          </div>
        </motion.section>

        {/* New Content Showcase Banner */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 via-zion-blue/10 to-zion-cyan/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-4">
                <Rocket className="w-4 h-4 mr-2" />
                NEW CONTENT & SERVICES
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Discover our latest AI-powered services including quantum analytics, autonomous cloud infrastructure, and neural security networks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/new-content-showcase"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Explore New Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/ai-innovation-hub"
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-all duration-300"
                >
                  AI Innovation Hub
                  <Brain className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Featured New Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Quantum Analytics</h3>
                  <p className="text-sm text-gray-300 mb-3">Revolutionary quantum computing meets AI</p>
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">NEW</span>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Autonomous Cloud</h3>
                  <p className="text-sm text-gray-300 mb-3">Self-healing cloud infrastructure</p>
                  <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">HOT</span>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Neural Security</h3>
                  <p className="text-sm text-gray-300 mb-3">AI-powered threat detection</p>
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">TRENDING</span>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Hyper Automation</h3>
                  <p className="text-sm text-gray-300 mb-3">End-to-end process automation</p>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">POPULAR</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Latest from the Blog */}
        <motion.section 
          className="py-14 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Latest from the Blog</h2>
              <Link to="/blog" className="text-zion-cyan hover:text-zion-cyan-light">View all →</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Featured new blog post */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-slate-800/50 rounded-xl overflow-hidden border border-zion-cyan/50 hover:border-zion-cyan transition-all duration-300 md:col-span-1"
              >
                <Link to="/blog/ai-2026-trusted-genai-patterns-regulated-enterprises" className="block">
                  <div className="aspect-[16/9] bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 flex items-center justify-center">
                    <div className="text-center">
                      <Brain className="w-16 h-16 text-zion-cyan mx-auto mb-2" />
                      <span className="text-white font-semibold">Featured Article</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full">AI Innovation</span>
                      <span className="text-xs text-zion-slate-light">Sep 15, 2025 • 8 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">Trusted GenAI Patterns for Regulated Enterprises</h3>
                    <p className="text-zion-slate-light line-clamp-3">Blueprint for compliant GenAI with policy-as-code, evals, audit logs, and cost-aware routing.</p>
                  </div>
                </Link>
              </motion.article>

              {getRecentBlogPosts(2).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="aspect-[16/9] bg-slate-700/50">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
                          const target = e.currentTarget;
                          target.src = "/images/blog-placeholder.svg";
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-zion-cyan bg-zion-blue px-3 py-1 rounded-full">{post.category}</span>
                        <span className="text-xs text-zion-slate-light">{post.publishDate} • {post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-zion-slate-light line-clamp-3">{post.excerpt}</p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-lg font-semibold text-zion-cyan mb-2">{stat.label}</p>
                  <p className="text-gray-300">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* AI Services Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage the power of artificial intelligence to transform your business operations and drive innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Service Categories */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions across all major domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={category.href}>
                    <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 group-hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                      <p className="text-gray-300 mb-6">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-cyan font-semibold">{category.count} Services</span>
                        <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Emerging Technology Solutions */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Emerging Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of the curve with our cutting-edge technology platforms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergingTech.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-4">
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{tech.description}</p>
                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {tech.category}
                      </span>
                      <p className="text-lg font-bold text-white">{tech.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* New Content Showcase */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                  🆕 Fresh Content
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Latest Technology Solutions & Insights
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our newest services, cutting-edge solutions, and expert insights that are shaping the future of technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">⚛️</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing Solutions</h3>
                  <p className="text-gray-300 mb-6">Revolutionary quantum computing solutions with quantum algorithms, machine learning, and cryptography services.</p>
                  <Link to="/services/quantum-computing-solutions">
                    <button className="w-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-400/30 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 px-6 py-3 rounded-lg">
                      Explore Quantum Solutions
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold text-white mb-4">The Future of AI in Business</h3>
                  <p className="text-gray-300 mb-6">Expert insights on how AI is revolutionizing business operations with autonomous decision-making and predictive analytics.</p>
                  <Link to="/blog/the-future-of-ai-in-business-2025">
                    <button className="w-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-400/30 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 px-6 py-3 rounded-lg">
                      Read Article
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ultimate Services Showcase 2025</h3>
                  <p className="text-gray-300 mb-6">Comprehensive overview of our latest technology solutions including AI, quantum computing, and innovative platforms.</p>
                  <Link to="/ultimate-services-showcase-2025">
                    <button className="w-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-400/30 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all duration-300 px-6 py-3 rounded-lg">
                      View Showcase
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Micro-SaaS Solutions */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Micro-SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Affordable, specialized software solutions for growing businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-zion-cyan to-zion-blue mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      <span className="inline-block px-4 py-2 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                        {service.category}
                      </span>
                      <p className="text-2xl font-bold text-white">{service.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Featured Content Showcase */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full">
                  <Lightbulb className="w-5 h-5" />
                  <span className="font-semibold">Featured Content</span>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Explore Our Latest Innovations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover cutting-edge solutions, expert insights, and interactive demos showcasing the future of technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Ultimate Services Showcase */}
              <motion.div
                className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Ultimate Services 2025</h3>
                    <p className="text-purple-100 text-sm">Next-Generation Solutions</p>
                  </div>
                </div>
                <p className="text-purple-100 mb-6">
                  Experience our comprehensive suite of AI, cybersecurity, cloud, and blockchain solutions designed for the digital age.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">50+ Services</span>
                  <Link
                    to="/ultimate-services-showcase-2025"
                    className="flex items-center space-x-2 text-white hover:text-purple-200 transition-colors"
                  >
                    <span>Explore Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Content Showcase */}
              <motion.div
                className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Knowledge Hub</h3>
                    <p className="text-blue-100 text-sm">Expert Insights & Resources</p>
                  </div>
                </div>
                <p className="text-blue-100 mb-6">
                  Access our latest blog posts, case studies, webinars, and white papers from industry experts.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">100+ Articles</span>
                  <Link
                    to="/content-showcase"
                    className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Interactive Demos */}
              <motion.div
                className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                    <Play className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Interactive Demos</h3>
                    <p className="text-green-100 text-sm">Experience Technology</p>
                  </div>
                </div>
                <p className="text-green-100 mb-6">
                  Try our interactive demos to see how our AI, security, and cloud solutions work in real-time.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">Live Demos</span>
                  <Link
                    to="/interactive-demos"
                    className="flex items-center space-x-2 text-white hover:text-green-200 transition-colors"
                  >
                    <span>Try Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Newsletter Signup with Content Promo */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">Stay Updated</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Get Exclusive Access to Our Latest Content
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who receive our weekly insights on AI, cybersecurity, cloud computing, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-sm text-gray-400">
              Get instant access to our latest whitepapers, case studies, and exclusive content. No spam, unsubscribe anytime.
            </p>
          </div>
        </motion.section>

        {/* Lazy Loaded Components */}
        <React.Suspense fallback={<div className="py-20 text-center"><LoadingSpinner /></div>}>
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
        </React.Suspense>
      </div>
    </>
  );
}
