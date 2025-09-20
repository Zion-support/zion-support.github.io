import React, { Suspense, useState, useEffect, useMemo, useCallback } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { 
  CheckCircle
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
} from "lucide-react"
import { SEO } from "@/components/SEO"
import { HeroSection } from "@/components/HeroSection"
import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
import { ErrorBoundary } from "@/components/ui/ErrorBoundary"
// Lazy load heavy components
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

interface StatItem {
  val,
  u: e: string,lab,
  e: l: string,descripti,
  o: n: string,ic,
  o: n: React.ComponentType<any>,col,
  o: r: string
}

interface AIService {
  tit,
  l: e: string,descripti,
  o: n: string,ic,
  o: n: React.ComponentType<any>,featur,
  e: s: string[],hr,
  e: f: string,col,
  o: r: string
}

interface ServiceCategory {
  na,
  m: e: string,descripti,
  o: n: string,ic,
  o: n: React.ComponentType<any>,hr,
  e: f: string,cou,
  n: t: number,col,
  o: r: string,servic,
  e: s: string[[];]
}

interface EmergingTech {
  tit,
  l: e: string,descripti,
  o: n: string,ic,
  o: n: React.ComponentType<any>,hr,
  e: f: string,pri,
  c: e: string,catego,
  r: y: string
}

interface MicroSaasService {
  tit,
  l: e: string,descripti,
  o: n: string,ic,
  o: n: React.ComponentType<any>,hr,
  e: f: string,pri,
  c: e: string,catego,
  r: y: string
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() () => {
    // Simulate loading time for better UX
    const timer = setTimeout(() () => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleError = useCallback((err,
  o: r: Error) () => {
    console.error('Home component erro,
  r:', error)
    setError(error.message)
  }, [])
  const,
  stat: s: StatItem[] = useMemo(() => [
    {
      valu,
  e: "500+",lab,
  e: l: "Projects Delivered",descripti,
  o: n: "Successfully completed across industries",ic,
  o: n: CheckCircle,col,
  o: r: "from-green-400 to-emerald-500"
    }, {
      val,
  u: e: "50+",lab,
  e: l: "AI Solutions",descripti,
  o: n: "Cutting-edge artificial intelligence services",ic,
  o: n: Brain,col,
  o: r: "from-cyan-400 to-blue-500"
    }, {
      val,
  u: e: "24/7",lab,
  e: l: "Support Available",descripti,
  o: n: "Round-the-clock technical assistance",ic,
  o: n: Clock,col,
  o: r: "from-blue-400 to-indigo-500"
    }, {
      val,
  u: e: "99.9%",lab,
  e: l: "Uptime Guarantee",descripti,
  o: n: "Reliable infrastructure and services",ic,
  o: n: Shield,col,
  o: r: "from-purple-400 to-pink-500"
    }
  ], [])

  const,
  aiService: s: AIService[] = useMemo(() => [
    {
      titl,
  e: "AI Business Intelligence",descripti,
  o: n: "Transform your data into actionable insights with advanced analytics and machine learning",ic,
  o: n: Brain,featur,
  e: s: ["Predictive Analytics", "Real-time Dashboards", "Custom ML Models"]
      hr,
  e: f: "/services/ai-business-intelligence",col,
  o: r: "from-cyan-400 to-blue-500"
    }, {
      tit,
  l: e: "AI Compliance Assistant",descripti,
  o: n: "Automate regulatory compliance with AI-powered monitoring and reporting",ic,
  o: n: Shield,featur,
  e: s: ["Automated Auditing", "Risk Assessment", "Compliance Reporting"]
      hr,
  e: f: "/services/ai-compliance-assistant",col,
  o: r: "from-red-400 to-pink-500"
    }, {
      tit,
  l: e: "AI Sales Copilot",descripti,
  o: n: "Boost sales performance with intelligent lead scoring and customer insights",ic,
  o: n: Users,featur,
  e: s: ["Lead Scoring", "Customer Insights", "Sales Forecasting"]
      hr,
  e: f: "/services/ai-sales-copilot",col,
  o: r: "from-green-400 to-emerald-500"
    }
  ], [])

  const,
  serviceCategorie: s: ServiceCategory[] = [
    {
      nam,
  e: "AI & Machine Learning",descripti,
  o: n: "Cutting-edge artificial intelligence solutions for business transformation",ic,
  o: n: Brain,hr,
  e: f: "/ai-services",cou,
  n: t: 25,col,
  o: r: "from-cyan-400 to-blue-500",servic,
  e: s: [["AI Business Intelligence", "Machine Learning", "Natural Language Processing", "Computer Vision"];]
    }, {
      na,
  m: e: "Cloud & DevOps",descripti,
  o: n: "Enterprise-grade cloud infrastructure and automated deployment solutions",ic,
  o: n: Cloud,hr,
  e: f: "/services/cloud-devops",cou,
  n: t: 18,col,
  o: r: "from-blue-400 to-indigo-500",servic,
  e: s: [["Cloud Migration", "DevOps Automation", "Container Orchestration", "Serverless Architecture"];]
    }, {
      na,
  m: e: "Cybersecurity",descripti,
  o: n: "Advanced security solutions to protect your digital assets and infrastructure",ic,
  o: n: Shield,hr,
  e: f: "/services/cybersecurity",cou,
  n: t: 22,col,
  o: r: "from-red-400 to-pink-500",servic,
  e: s: [["Threat Detection", "Zero Trust Security", "Compliance Management", "Incident Response"];]
    }, {
      na,
  m: e: "Digital Transformation",descripti,
  o: n: "Strategic technology consulting and implementation guidance",ic,
  o: n: Zap,hr,
  e: f: "/services/digital-transformation",cou,
  n: t: 15,col,
  o: r: "from-yellow-400 to-orange-500",servic,
  e: s: [["Process Automation", "Digital Strategy", "Change Management", "Technology Roadmap"];]
    }, {
      na,
  m: e: "IoT & Edge Computing",descripti,
  o: n: "Smart device networks and edge computing solutions",ic,
  o: n: Cpu,hr,
  e: f: "/services/iot-edge",cou,
  n: t: 20,col,
  o: r: "from-green-400 to-emerald-500",servic,
  e: s: [["IoT Platforms", "Edge Analytics", "Device Management", "Smart Cities"];]
    }, {
      na,
  m: e: "Quantum Computing",descripti,
  o: n: "Next-generation quantum solutions for complex problem solving",ic,
  o: n: Atom,hr,
  e: f: "/services/quantum-computing",cou,
  n: t: 12,col,
  o: r: "from-purple-400 to-pink-500",servic,
  e: s: [["Quantum Algorithms", "Quantum Security", "Quantum Simulation", "Quantum ML"];]
    }
  ]

  const,
  emergingTec: h: EmergingTech[] = [
    {
      titl,
  e: "Metaverse Commerce",descripti,
  o: n: "Create virtual storefronts and immersive shopping experiences",ic,
  o: n: Globe2,hr,
  e: f: "/services/metaverse-commerce-platform",pri,
  c: e: "$399/month",catego,
  r: y: "Emerging Tech"
    }, {
      tit,
  l: e: "Quantum AI Trading",descripti,
  o: n: "Revolutionary trading platform using quantum computing principles",ic,
  o: n: TrendingUp,hr,
  e: f: "/services/quantum-ai-trading-platform",pri,
  c: e: "$2,999/month"
      catego,
  r: y: "FinTech"
    }, {
      tit,
  l: e: "Space Technology",descripti,
  o: n: "Satellite operations and space mission optimization",ic,
  o: n: Building,hr,
  e: f: "/services/space-tech-optimization-platform",pri,
  c: e: "$3,999/month"
      catego,
  r: y: "Space Tech"
    }, {
      tit,
  l: e: "Autonomous Vehicles",descripti,
  o: n: "Fleet management for autonomous vehicle operations",ic,
  o: n: Car,hr,
  e: f: "/services/autonomous-vehicle-fleet-management",pri,
  c: e: "$799/month",catego,
  r: y: "Transportation"
    }
  ]
  const,
  microSaasService: s: MicroSaasService[] = [
    {
      titl,
  e: "AI Customer Success",descripti,
  o: n: "Predictive churn prevention and automated onboarding",ic,
  o: n: Users,hr,
  e: f: "/services/ai-powered-customer-success",pri,
  c: e: "$199/month",catego,
  r: y: "Customer Success"
    }, {
      tit,
  l: e: "AI Marketing Automation",descripti,
  o: n: "Intelligent campaign optimization and audience targeting",ic,
  o: n: Target,hr,
  e: f: "/services/ai-marketing-automation",pri,
  c: e: "$299/month",catego,
  r: y: "Marketing"
    }, {
      tit,
  l: e: "AI Financial Advisor",descripti,
  o: n: "Automated financial planning and investment recommendations",ic,
  o: n: DollarSign,hr,
  e: f: "/services/ai-financial-advisor",pri,
  c: e: "$399/month",catego,
  r: y: "Finance"
    }
  ]
  if (if (isLoading) {) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <LoadingSpinner />
          <p className="text-lg text-gray-300 mt-4">Preparing amazing experiences...</p>
        </div>
      </div>
    )
  }

  if (if (error) {) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-red-500 text-xl mb-4">Something went wrong</div>
          <p className="text-gray-300">{error}</p>
          <button 
            onClick={onClick={() => setError(null)}
            className="className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg,
  hove: r: bg-blue-700 transition-colors";"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary onError={handleError}>
      <SEO 
        title="Zion Tech Group - AI-Powered Business Solutions"
        description="Transform your business with cutting-edge AI solutions, cloud infrastructure, and digital transformation services. Expert IT consulting for the modern enterprise."
        keywords="AI solutions, cloud computing, digital transformation, IT consulting, cybersecurity, machine learning, business intelligence"
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <motion.section 
          className="className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/30";"
          initial={ opacit,
  y: 0, y: 50 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6 }
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="className="text-center";"
                  initial={ opaci,
  t: y: 0, y: 20 }
                  whileInView={ opaci,
  t: y: 1, y: 0 }
                  viewport={ on,
  c: e: true }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
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
          className="className="py-20 px-4,
  s: m: px-6,
  l: g:px-8";"
          initial={ opacit,
  y: 0, y: 50 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6 }
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
            
            <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50,
  hove: r: border-zion-cyan/50 transition-all duration-300,
  hove: r:transform,
  hove: r:scale-105";"
                  initial={ opacit,
  y: 0, y: 20 }
                  whileInView={ opaci,
  t: y: 1, y: 0 }
                  viewport={ on,
  c: e: true }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
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
                    className="className="inline-flex items-center text-zion-cyan,
  hove: r:text-zion-cyan-light transition-colors duration-200";"
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
          className="className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/30";"
          initial={ opacit,
  y: 0, y: 50 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6 }
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
            
            <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="className="group cursor-pointer";"
                  initial={ opaci,
  t: y: 0, y: 20 }
                  whileInView={ opaci,
  t: y: 1, y: 0 }
                  viewport={ on,
  c: e: true }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                >
                  <Link to={category.href}>
                    <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 group-hov,
  e: r: border-zion-cyan/50 transition-all duration-300,
  hove: r:transform hove,
  r:scale-105">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                      <p className="text-gray-300 mb-6">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-cyan font-semibold">{category.count} Services</span>
                        <ArrowRight className="w-5 h-5 text-zion-cyan group-hov,
  e: r:translate-x-1 transition-transform duration-200" />
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
          className="className="py-20 px-4,
  s: m: px-6,
  l: g:px-8";"
          initial={ opacit,
  y: 0, y: 50 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6 }
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
            
            <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-6">
              {emergingTech.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  className="className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50,
  hove: r: border-zion-cyan/50 transition-all duration-300,
  hove: r:transform,
  hove: r:scale-105";"
                  initial={ opacit,
  y: 0, y: 20 }
                  whileInView={ opaci,
  t: y: 1, y: 0 }
                  viewport={ on,
  c: e: true }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
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

        {/* Micro-SaaS Solutions */}
        <motion.section 
          className="className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/30";"
          initial={ opacit,
  y: 0, y: 50 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6 }
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
            
            <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50,
  hove: r: border-zion-cyan/50 transition-all duration-300,
  hove: r:transform,
  hove: r:scale-105";"
                  initial={ opacit,
  y: 0, y: 20 }
                  whileInView={ opaci,
  t: y: 1, y: 0 }
                  viewport={ on,
  c: e: true }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
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

        {/* Lazy Loaded Components */}
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
