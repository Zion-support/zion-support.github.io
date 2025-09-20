import React, { Suspense, useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  CheckCircle;
  ArrowRight, ;
  Star, ;
  Zap, ;
  Brain, ;
  Shield, ;
  Cloud, ;
  Rocket, ;
  Globe, ;
  Cpu, ;
  Lock, ;
  Heart, ;
  Users, ;
  ShoppingCart, ;
  BookOpen, ;
  MessageCircle, ;
  HelpCircle, ;
  DollarSign, ;
  Gauge, ;
  BarChart3, ;
  Target, ;
  Lightbulb, ;
  Database, ;
  Network, ;
  Eye, ;
  Globe2, ;
  Smartphone, ;
  Monitor, ;
  Server, ;
  Atom, ;
  Car, ;
  Scale, ;
  Leaf, ;
  Factory, ;
  Building, ;
  Clock, ;
  Phone, ;
  Mail, ;
  TrendingUp ;
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
// Lazy load heavy components;
const CategoriesSection = React.lazy(() => import("@/components/CategoriesSection"))
const BenefitsSection = React.lazy(() => import("@/components/BenefitsSection"))
const HowItWorksSection = React.lazy(() => import("@/components/HowItWorksSection"))
const NewsletterSection = React.lazy(() => import("@/components/NewsletterSection"))
const FeaturedListingsSection = React.lazy(() => import("@/components/FeaturedListingsSection"))
const QuickAccess = React.lazy(() => import("@/components/home/QuickAccess"))
const FeatureCTAs = React.lazy(() => import("@/components/home/FeatureCTAs"))
const FeatureHighlights = React.lazy(() => import("@/components/home/FeatureHighlights"))
const ITServiceRequestHero = React.lazy(() => import("@/components/home/ITServiceRequestHero"))
const FloatingCTA = React.lazy(() => import("@/components/FloatingCTA"))
const PricingSection = React.lazy(() => import("@/components/PricingSection"))
const TechSolutionsSection = React.lazy(() => import("@/components/TechSolutionsSection"))
const CaseStudiesSection = React.lazy(() => import("@/components/CaseStudiesSection"))
const TeamExpertiseSection = React.lazy(() => import("@/components/TeamExpertiseSection"))
const GlobalPresenceSection = React.lazy(() => import("@/components/GlobalPresenceSection"))
const InnovationResearchSection = React.lazy(() => import("@/components/InnovationResearchSection"))
const ClientSuccessStoriesSection = React.lazy(() => import("@/components/ClientSuccessStoriesSection"))
const TechnologyStackSection = React.lazy(() => import("@/components/TechnologyStackSection"))
const SecurityComplianceSection = React.lazy(() => import("@/components/SecurityComplianceSection"))
const AIServicesShowcase = React.lazy(() => import("@/components/AIServicesShowcase"))
const InteractiveTestimonials = React.lazy(() => import("@/components/InteractiveTestimonials"))
const ServicesShowcase = React.lazy(() => import("@/components/ServicesShowcase"))

interface StatItem {;
  value: string,label: string,description: string,icon: React.ComponentType<any>,color: string;
}

interface AIService {;
  title: string,description: string,icon: React.ComponentType<any>,features: string[],href: string,color: string;
}

interface ServiceCategory {;
  name: string,description: string,icon: React.ComponentType<any>,href: string,count: number,color: string,services: string[[];]
}

interface EmergingTech {;
  title: string,description: string,icon: React.ComponentType<any>,href: string,price: string,category: string;
}

interface MicroSaasService {;
  title: string,description: string,icon: React.ComponentType<any>,href: string,price: string,category: string;
}

export default function Home() {;
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate loading time for better UX;
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleError = useCallback((error: Error) => {;
    console.error('Home component error:', error)
    setError(error.message)
  }, [])
  const stats: StatItem[] = useMemo(() => [;
    {;
      value: "500+",label: "Projects Delivered",description: "Successfully completed across industries",icon: CheckCircle,color: "from-green-400 to-emerald-500";
    }
    {;
      value: "50+",label: "AI Solutions",description: "Cutting-edge artificial intelligence services",icon: Brain,color: "from-cyan-400 to-blue-500";
    }
    {;
      value: "24/7",label: "Support Available",description: "Round-the-clock technical assistance",icon: Clock,color: "from-blue-400 to-indigo-500";
    }
    {;
      value: "99.9%",label: "Uptime Guarantee",description: "Reliable infrastructure and services",icon: Shield,color: "from-purple-400 to-pink-500";
    }
  ], [])

  const aiServices: AIService[] = useMemo(() => [;
    {;
      title: "AI Business Intelligence",description: "Transform your data into actionable insights with advanced analytics and machine learning",icon: Brain,features: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models"]
      href: "/services/ai-business-intelligence",color: "from-cyan-400 to-blue-500";
    }
    {;
      title: "AI Compliance Assistant",description: "Automate regulatory compliance with AI-powered monitoring and reporting",icon: Shield,features: ["Automated Auditing", "Risk Assessment", "Compliance Reporting"]
      href: "/services/ai-compliance-assistant",color: "from-red-400 to-pink-500";
    }
    {;
      title: "AI Sales Copilot",description: "Boost sales performance with intelligent lead scoring and customer insights",icon: Users,features: ["Lead Scoring", "Customer Insights", "Sales Forecasting"]
      href: "/services/ai-sales-copilot",color: "from-green-400 to-emerald-500";
    }
  ], [])

  const serviceCategories: ServiceCategory[] = [;
    {;
      name: "AI & Machine Learning",description: "Cutting-edge artificial intelligence solutions for business transformation",icon: Brain,href: "/ai-services",count: 25,color: "from-cyan-400 to-blue-500",services: [["AI Business Intelligence", "Machine Learning", "Natural Language Processing", "Computer Vision"];]
    }
    {;
      name: "Cloud & DevOps",description: "Enterprise-grade cloud infrastructure and automated deployment solutions",icon: Cloud,href: "/services/cloud-devops",count: 18,color: "from-blue-400 to-indigo-500",services: [["Cloud Migration", "DevOps Automation", "Container Orchestration", "Serverless Architecture"];]
    }
    {;
      name: "Cybersecurity",description: "Advanced security solutions to protect your digital assets and infrastructure",icon: Shield,href: "/services/cybersecurity",count: 22,color: "from-red-400 to-pink-500",services: [["Threat Detection", "Zero Trust Security", "Compliance Management", "Incident Response"];]
    }
    {;
      name: "Digital Transformation",description: "Strategic technology consulting and implementation guidance",icon: Zap,href: "/services/digital-transformation",count: 15,color: "from-yellow-400 to-orange-500",services: [["Process Automation", "Digital Strategy", "Change Management", "Technology Roadmap"];]
    }
    {;
      name: "IoT & Edge Computing",description: "Smart device networks and edge computing solutions",icon: Cpu,href: "/services/iot-edge",count: 20,color: "from-green-400 to-emerald-500",services: [["IoT Platforms", "Edge Analytics", "Device Management", "Smart Cities"];]
    }
    {;
      name: "Quantum Computing",description: "Next-generation quantum solutions for complex problem solving",icon: Atom,href: "/services/quantum-computing",count: 12,color: "from-purple-400 to-pink-500",services: [["Quantum Algorithms", "Quantum Security", "Quantum Simulation", "Quantum ML"];]
    }
  ]

  const emergingTech: EmergingTech[] = [;
    {;
      title: "Metaverse Commerce",description: "Create virtual storefronts and immersive shopping experiences",icon: Globe2,href: "/services/metaverse-commerce-platform",price: "$399/month",category: "Emerging Tech";
    }
    {;
      title: "Quantum AI Trading",description: "Revolutionary trading platform using quantum computing principles",icon: TrendingUp,href: "/services/quantum-ai-trading-platform",price: "$2,999/month";
      category: "FinTech";
    }
    {;
      title: "Space Technology",description: "Satellite operations and space mission optimization",icon: Building,href: "/services/space-tech-optimization-platform",price: "$3,999/month";
      category: "Space Tech";
    }
    {;
      title: "Autonomous Vehicles",description: "Fleet management for autonomous vehicle operations",icon: Car,href: "/services/autonomous-vehicle-fleet-management",price: "$799/month",category: "Transportation";
    }
  ]
  const microSaasServices: MicroSaasService[] = [;
    {;
      title: "AI Customer Success",description: "Predictive churn prevention and automated onboarding",icon: Users,href: "/services/ai-powered-customer-success",price: "$199/month",category: "Customer Success";
    }
    {;
      title: "AI Marketing Automation",description: "Intelligent campaign optimization and audience targeting",icon: Target,href: "/services/ai-marketing-automation",price: "$299/month",category: "Marketing";
    }
    {;
      title: "AI Financial Advisor",description: "Automated financial planning and investment recommendations",icon: DollarSign,href: "/services/ai-financial-advisor",price: "$399/month",category: "Finance";
    }
  ]
  if (if (isLoading) {;) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <LoadingSpinner />
          <p className="text-lg text-gray-300 mt-4">Preparing amazing experiences...</p>
        </div>
      </div>
    )
  }

  if (if (error) {;) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-red-500 text-xl mb-4">Something went wrong</div>
          <p className="text-gray-300">{error}</p>
          <button ;
            onClick={{onClick={() => setError(null)}}}
            className="className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors";"
          >
            Try Again;
          </button>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary onError={handleError}>
      <SEO ;
        title="Zion Tech Group - AI-Powered Business Solutions";
        description="Transform your business with cutting-edge AI solutions, cloud infrastructure, and digital transformation services. Expert IT consulting for the modern enterprise.";
        keywords="AI solutions, cloud computing, digital transformation, IT consulting, cybersecurity, machine learning, business intelligence";
      />
      ;
      <div className="min-h-screen bg-futuristic">
        {{/* Hero Section */}}
        <HeroSection />

        {{/* Stats Section */}}
        <motion.section ;
          className="className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30";"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (;
                <motion.div;
                  key={{stat.label}}
                  className="className="text-center";"
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

        {{/* AI Services Section */}}
        <motion.section ;
          className="className="py-20 px-4 sm:px-6 lg:px-8";"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                AI-Powered Solutions;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage the power of artificial intelligence to transform your business operations and drive innovation;
              </p>
            </div>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (;
                <motion.div;
                  key={{service.title}}
                  className="className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105";"
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
                    {service.features.map((feature) => (;
                      <li key={feature} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {{feature}}
                      </li>
                    ))}
                  </ul>
                  <Link;
                    to={{service.href}}
                    className="className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-200";"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {{/* Service Categories */}}
        <motion.section ;
          className="className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30";"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Service Categories;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions across all major domains;
              </p>
            </div>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (;
                <motion.div;
                  key={{category.name}}
                  className="className="group cursor-pointer";"
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

        {{/* Emerging Technology Solutions */}}
        <motion.section ;
          className="className="py-20 px-4 sm:px-6 lg:px-8";"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Emerging Technology Solutions;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay ahead of the curve with our cutting-edge technology platforms;
              </p>
            </div>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergingTech.map((tech, index) => (;
                <motion.div;
                  key={{tech.title}}
                  className="className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105";"
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
                        {{tech.category}}
                      </span>
                      <p className="text-lg font-bold text-white">{tech.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {{/* Micro-SaaS Solutions */}}
        <motion.section ;
          className="className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30";"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Micro-SaaS Solutions;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Affordable, specialized software solutions for growing businesses;
              </p>
            </div>
            ;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (;
                <motion.div;
                  key={{service.title}}
                  className="className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105";"
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
                        {{service.category}}
                      </span>
                      <p className="text-2xl font-bold text-white">{service.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {{/* Lazy Loaded Components */}}
        <Suspense fallback={<div className="py-20 text-center"><LoadingSpinner /></div>}>
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
      </div>
    </ErrorBoundary>
  )
}
