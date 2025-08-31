import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign,
  ArrowRight,
  BarChart3,
  Database,
  Lock,
  Globe,
  Lightbulb,
  Target,
  Rocket,
  Award,
  Star,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Network,
  Server,
  Cloud,
  Workflow,
  Code,
  Monitor,
  Activity,
  Eye,
  Settings,
  Palette,
  Atom,
  Leaf,
  Scale,
  Truck,
  Factory,
  HeartHandshake,
  ShoppingCart,
  Building2,
  Cpu,
  Recycle,
  Droplets,
  TreePine,
  Heart,
  FileText,
  Search,
  MessageSquare,
  Gauge,
  TrendingDown,
  CheckCircle
} from 'lucide-react';

export default function InnovativeServicesShowcase2026() {
  const services = [
    {
      category: "AI & Automation",
      services: [
        {
          title: "AI Autonomous Legal Research Platform",
          description: "Revolutionary AI-powered legal research platform that autonomously analyzes case law, statutes, and legal documents with advanced machine learning.",
          icon: Scale,
          path: "/services/ai-autonomous-legal-research-platform",
          price: "From $299/month",
          features: ["Autonomous Research", "Real-time Analysis", "Predictive Insights", "Multi-jurisdiction Support"]
        },
        {
          title: "AI Quantum Computing Enterprise Platform",
          description: "Harness the power of quantum computing combined with artificial intelligence to solve enterprise-scale problems that were previously impossible.",
          icon: Atom,
          path: "/services/ai-quantum-computing-enterprise-platform",
          price: "From $2,999/month",
          features: ["Quantum AI Optimization", "Quantum Machine Learning", "Quantum Cryptography", "Hybrid Quantum-Classical"]
        },
        {
          title: "AI Sustainability Management Platform",
          description: "Comprehensive AI-powered sustainability platform for ESG compliance, carbon footprint tracking, and environmental impact optimization.",
          icon: Leaf,
          path: "/services/ai-sustainability-management-platform",
          price: "From $399/month",
          features: ["ESG Tracking", "Carbon Footprint Analysis", "Energy Optimization", "Waste Management"]
        },
        {
          title: "AI Autonomous Business Operations Platform",
          description: "End-to-end automation of business processes with AI-driven decision making and autonomous execution capabilities.",
          icon: Brain,
          path: "/services/ai-autonomous-business-operations-platform",
          price: "From $1,999/month",
          features: ["Process Automation", "AI Decision Making", "Autonomous Execution", "Performance Optimization"]
        },
        {
          title: "AI Enterprise Intelligence Platform",
          description: "Comprehensive business intelligence platform powered by AI for data-driven decision making and strategic insights.",
          icon: BarChart3,
          path: "/services/ai-enterprise-intelligence-platform",
          price: "From $899/month",
          features: ["Data Analytics", "Predictive Insights", "Business Intelligence", "Strategic Planning"]
        }
      ]
    },
    {
      category: "IT & Infrastructure",
      services: [
        {
          title: "Quantum Edge Computing Solutions",
          description: "Next-generation edge computing solutions combining quantum computing capabilities with edge infrastructure for ultra-fast processing.",
          icon: Cpu,
          path: "/services/quantum-edge-computing-solutions",
          price: "From $1,499/month",
          features: ["Quantum Processing", "Edge Computing", "Ultra-fast Processing", "Distributed Intelligence"]
        },
        {
          title: "Cloud DevOps & Infrastructure",
          description: "Comprehensive cloud infrastructure and DevOps solutions for scalable, secure, and efficient application deployment.",
          icon: Cloud,
          path: "/services/cloud-devops",
          price: "From $599/month",
          features: ["Cloud Infrastructure", "DevOps Automation", "Security & Compliance", "Scalability"]
        },
        {
          title: "Cybersecurity & Threat Intelligence",
          description: "Advanced cybersecurity solutions with AI-powered threat detection and automated response capabilities.",
          icon: Shield,
          path: "/services/cybersecurity",
          price: "From $799/month",
          features: ["Threat Detection", "AI Security", "Automated Response", "Compliance"]
        }
      ]
    },
    {
      category: "Micro SaaS Solutions",
      services: [
        {
          title: "AI Sales Copilot",
          description: "Intelligent sales automation platform that acts as a virtual sales assistant, optimizing sales processes and increasing conversion rates.",
          icon: MessageSquare,
          path: "/services/ai-sales-copilot",
          price: "From $199/month",
          features: ["Sales Automation", "Lead Scoring", "Pipeline Management", "Performance Analytics"]
        },
        {
          title: "AI Project Management Platform",
          description: "AI-powered project management solution that automates task allocation, tracks progress, and optimizes resource utilization.",
          icon: Workflow,
          path: "/services/ai-project-management-platform",
          price: "From $299/month",
          features: ["Task Automation", "Resource Optimization", "Progress Tracking", "Team Collaboration"]
        },
        {
          title: "AI Marketing Automation Platform",
          description: "Comprehensive marketing automation platform with AI-driven content optimization and campaign management.",
          icon: Target,
          path: "/services/ai-marketing-automation-platform",
          price: "From $399/month",
          features: ["Content Optimization", "Campaign Management", "Customer Segmentation", "ROI Analytics"]
        },
        {
          title: "AI Customer Support Automation",
          description: "Intelligent customer support platform that provides instant responses and escalates complex issues to human agents.",
          icon: MessageCircle,
          path: "/services/ai-customer-support-automation",
          price: "From $199/month",
          features: ["Instant Responses", "Smart Escalation", "Knowledge Base", "Customer Analytics"]
        }
      ]
    },
    {
      category: "Industry Solutions",
      services: [
        {
          title: "AI Healthcare Analytics Platform",
          description: "Advanced healthcare analytics platform using AI to improve patient outcomes and optimize healthcare operations.",
          icon: Heart,
          path: "/services/ai-healthcare-analytics-platform",
          price: "From $1,299/month",
          features: ["Patient Analytics", "Operational Optimization", "Predictive Medicine", "Compliance"]
        },
        {
          title: "AI Financial Trading Platform",
          description: "AI-powered financial trading platform with real-time market analysis and automated trading strategies.",
          icon: TrendingUp,
          path: "/services/ai-financial-trading-platform",
          price: "From $2,999/month",
          features: ["Market Analysis", "Automated Trading", "Risk Management", "Performance Analytics"]
        },
        {
          title: "AI Supply Chain Optimization",
          description: "Intelligent supply chain optimization platform that predicts demand, optimizes inventory, and reduces costs.",
          icon: Truck,
          path: "/services/ai-supply-chain-optimization",
          price: "From $899/month",
          features: ["Demand Prediction", "Inventory Optimization", "Cost Reduction", "Real-time Tracking"]
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Innovative Services Showcase 2026 | Zion Tech Group</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive portfolio of innovative AI, IT, and Micro SaaS services. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, IT solutions, Micro SaaS, quantum computing, sustainability, legal AI, healthcare AI, financial AI, supply chain AI" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2026" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Innovative Services Showcase 2026 | Zion Tech Group" />
        <meta property="og:description" content="Discover Zion Tech Group's comprehensive portfolio of innovative AI, IT, and Micro SaaS services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-services-showcase-2026" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Innovative Services Showcase 2026 | Zion Tech Group" />
        <meta name="twitter:description" content="Discover Zion Tech Group's comprehensive portfolio of innovative services." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8">
                <Lightbulb className="w-4 h-4 mr-2" />
                Innovation Showcase 2026
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Innovative Services
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Showcase 2026</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover Zion Tech Group's comprehensive portfolio of cutting-edge AI, IT, and Micro SaaS services. 
                Transform your business with innovative technology solutions designed for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#services" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Service Portfolio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI-powered automation to quantum computing and sustainability solutions, 
                we offer the most innovative services to drive your business transformation
              </p>
            </div>
            
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-4">{category.category}</h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-4">{service.title}</h4>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-purple-400 mb-2">{service.price}</div>
                        <div className="text-sm text-gray-400">Starting price</div>
                      </div>
                      
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-white mb-3">Key Features:</h5>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link 
                        to={service.path}
                        className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 group-hover:scale-105"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver 
                solutions that drive real business value
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI-First Approach</h3>
                <p className="text-gray-300">
                  All our solutions are built with AI at the core, ensuring maximum efficiency and intelligence
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Proven Expertise</h3>
                <p className="text-gray-300">
                  Years of experience in delivering enterprise-grade solutions across multiple industries
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Innovation Leader</h3>
                <p className="text-gray-300">
                  Constantly pushing the boundaries of what's possible with emerging technologies
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Customer Success</h3>
                <p className="text-gray-300">
                  Dedicated support and success teams ensuring your implementation achieves maximum ROI
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-12">
                Let's discuss how our innovative services can drive your business transformation 
                and competitive advantage
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <a 
                    href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Middletown, DE
                  </a>
                </div>
              </div>
              
              <div className="bg-slate-700/50 rounded-xl p-8 border border-slate-600/30">
                <h3 className="text-2xl font-bold text-white mb-6">Start Your Innovation Journey</h3>
                <p className="text-gray-300 mb-8">
                  Schedule a personalized consultation to discover how our innovative services 
                  can transform your business operations and drive competitive advantage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:kleber@ziontechgroup.com?subject=Innovative Services Consultation Request" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Request Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a 
                    href="tel:+13024640950" 
                    className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
