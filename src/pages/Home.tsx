import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import EnhancedContentShowcase from '../components/EnhancedContentShowcase';
import RevolutionaryContentShowcase from '../components/RevolutionaryContentShowcase';
=======
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
  BarChart3
} from 'lucide-react';
import type { ComponentType, SyntheticEvent } from 'react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
const RevolutionaryContentShowcase2027 = React.lazy(() => import("@/components/RevolutionaryContentShowcase2027"));

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
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Revolutionary Technology Solutions</title>
        <meta name="description" content="Leading provider of revolutionary technology solutions including AI, quantum computing, neural interfaces, and advanced biotechnology for 2026." />
        <meta name="keywords" content="AI Technology, Quantum Computing, Neural Interfaces, Biotechnology, Tech Solutions, Innovation" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary Technology Solutions" />
        <meta property="og:description" content="Leading provider of revolutionary technology solutions for 2026." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group" />
        <meta name="twitter:description" content="Revolutionary technology solutions for 2026" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 REVOLUTIONARY TECHNOLOGY • 2026
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Leading the revolution in AI, quantum computing, neural interfaces, and advanced biotechnology. 
                Discover the future of technology today.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Explore Solutions →
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* NEW: Ultimate Tech Showcase Banner */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/50 to-cyan-600/50 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-3xl animate-pulse">🚀</span>
              <h3 className="text-3xl font-bold">ULTIMATE TECH SHOWCASE 2026</h3>
              <span className="text-3xl animate-pulse">🚀</span>
            </div>
            <p className="text-xl opacity-95 mb-6 max-w-5xl mx-auto">
              Discover the most comprehensive collection of cutting-edge technologies including
              Biotech AI, Space Technology, and Advanced Quantum Systems
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              <a href="/pages/UltimateTechShowcase2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30">
                🌟 Ultimate Tech Showcase →
              </a>
              <a href="/pages/AdvancedBiotechAI2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30">
                🧬 Advanced Biotech AI →
              </a>
              <a href="/pages/NextGenSpaceTech2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300 font-semibold border border-white/30">
                🛸 Next-Gen Space Tech →
              </a>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Technology Solutions</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore our comprehensive range of cutting-edge technologies and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI Solutions</h3>
              <p className="text-blue-100 mb-6 text-center">
                Advanced artificial intelligence solutions for enterprise and innovation
              </p>
              <div className="text-center">
                <a href="/pages/AdvancedAITransformation2026" className="text-blue-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Revolutionary quantum computing solutions for complex problem solving
              </p>
              <div className="text-center">
                <a href="/pages/QuantumComputingRevolution2026" className="text-cyan-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Direct brain-computer interface technology for seamless interaction
              </p>
              <div className="text-center">
                <a href="/pages/NeuralInterfaceRevolution2026" className="text-emerald-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
              <p className="text-purple-100 mb-6 text-center">
                Advanced biotechnology solutions for healthcare and human enhancement
              </p>
              <div className="text-center">
                <a href="/pages/AdvancedBiotechAI2026" className="text-purple-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
              <p className="text-orange-100 mb-6 text-center">
                Next-generation space technology for exploration and innovation
              </p>
              <div className="text-center">
                <a href="/pages/NextGenSpaceTech2026" className="text-orange-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">📚</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Tech Insights</h3>
              <p className="text-indigo-100 mb-6 text-center">
                Stay updated with the latest technology trends and insights
              </p>
              <div className="text-center">
                <a href="/pages/RevolutionaryTechBlog2026" className="text-indigo-300 hover:text-white transition-colors font-semibold">
                  Learn More →
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Showcases */}
        <div className="container mx-auto px-4 py-20">
          <EnhancedContentShowcase />
        </div>

        <div className="container mx-auto px-4 py-20">
          <RevolutionaryContentShowcase />
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the revolution and discover how our cutting-edge technologies can transform your business and unlock unprecedented possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey →
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </div>
=======
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
          <RevolutionaryContentShowcase2027 />
        </React.Suspense>
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
      </div>
    </>
  );
};

export default Home;