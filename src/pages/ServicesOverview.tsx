import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Target, 
  Users, 
  Building2, 
  Globe, 
  Rocket, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Cpu,
  Network,
  Database,
  Lock,
  BarChart3,
  Workflow,
  Palette,
  Video,
  Mic,
  Image,
  FileText,
  Atom,
  Satellite,
  Truck,
  Factory,
  Heart,
  DollarSign,
  Coins,
  ShoppingBag,
  GraduationCap,
  Award,
  Handshake,
  Calendar,
  BookOpen,
  Monitor,
  Headphones
} from 'lucide-react';
import { SEO } from '../components/SEO';
import INNOVATIVE_SERVICES_2025 from '../data/innovativeServices2025';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: <Brain className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      services: [
        {
          name: "AI Business Intelligence Dashboard",
          description: "Advanced analytics and insights powered by AI",
          link: "/services/ai-business-intelligence-dashboard",
          price: "$299/month"
        },
        {
          name: "AI Customer Support Automation",
          description: "Intelligent customer service with 24/7 availability",
          link: "/services/ai-customer-support-automation",
          price: "$199/month"
        },
        {
          name: "AI Project Management Platform",
          description: "Smart project planning and resource optimization",
          link: "/services/ai-project-management-platform",
          price: "$399/month"
        },
        {
          name: "AI Marketing Automation Platform",
          description: "Data-driven marketing campaigns and optimization",
          link: "/services/ai-marketing-automation-platform",
          price: "$249/month"
        },
        {
          name: "AI Workflow Orchestrator",
          description: "Intelligent business process automation",
          link: "/services/ai-workflow-orchestrator",
          price: "$349/month"
        },
        {
          name: "AI Predictive Maintenance",
          description: "Preventive maintenance using machine learning",
          link: "/services/ai-predictive-maintenance",
          price: "$599/month"
        }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and enterprise infrastructure management",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "Cloud & DevOps",
          description: "End-to-end cloud infrastructure and deployment",
          link: "/services/cloud-devops",
          price: "$799/month"
        },
        {
          name: "IT Infrastructure Management",
          description: "Comprehensive infrastructure monitoring and optimization",
          link: "/services/it-infrastructure-management",
          price: "$1,299/month"
        },
        {
          name: "Edge Computing Solutions",
          description: "Ultra-low latency edge computing infrastructure",
          link: "/services/edge-computing-solutions",
          price: "$599/month"
        },
        {
          name: "Cloud FinOps Optimizer",
          description: "Cloud cost optimization and financial management",
          link: "/services/cloud-finops-optimizer",
          price: "$449/month"
        }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Advanced security solutions and regulatory compliance",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      services: [
        {
          name: "AI Cybersecurity Platform",
          description: "AI-powered threat detection and response",
          link: "/services/ai-cybersecurity-platform",
          price: "$899/month"
        },
        {
          name: "AI Cybersecurity Threat Intelligence",
          description: "Real-time threat intelligence and analysis",
          link: "/services/ai-cybersecurity-threat-intelligence",
          price: "$699/month"
        },
        {
          name: "Quantum AI Cybersecurity Platform",
          description: "Quantum-resistant security solutions",
          link: "/services/quantum-ai-cybersecurity-platform",
          price: "$1,499/month"
        },
        {
          name: "Zero Trust Network Architecture",
          description: "Modern security framework implementation",
          link: "/services/ZeroTrustNetworkArchitecture",
          price: "$1,199/month"
        }
      ]
    },
    {
      title: "Specialized AI Services",
      description: "Industry-specific AI solutions and specialized platforms",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      services: [
        {
          name: "AI Healthcare Analytics Platform",
          description: "Healthcare data analytics and patient insights",
          link: "/services/ai-healthcare-analytics-platform",
          price: "$1,199/month"
        },
        {
          name: "AI Financial Trading Platform",
          description: "Algorithmic trading and financial analytics",
          link: "/services/ai-financial-trading-platform",
          price: "$1,999/month"
        },
        {
          name: "AI Legal Document Automation",
          description: "Legal document processing and automation",
          link: "/services/ai-legal-document-automation-platform",
          price: "$799/month"
        },
        {
          name: "AI Supply Chain Optimization",
          description: "Supply chain intelligence and optimization",
          link: "/services/ai-supply-chain-optimization-platform",
          price: "$899/month"
        }
      ]
    },
    {
      title: "Emerging Technologies",
      description: "Cutting-edge solutions in quantum computing and space technology",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      services: [
        {
          name: "AI Quantum Computing Solutions",
          description: "Quantum computing integration and optimization",
          link: "/services/ai-quantum-computing-solutions",
          price: "$2,499/month"
        },
        {
          name: "AI Space Technology Platform",
          description: "Space technology applications and satellite data",
          link: "/services/ai-space-technology-platform",
          price: "$1,999/month"
        },
        {
          name: "AI Autonomous Logistics Platform",
          description: "Autonomous logistics and supply chain management",
          link: "/services/ai-autonomous-logistics-platform",
          price: "$1,299/month"
        },
        {
          name: "Quantum Edge Computing Solutions",
          description: "Quantum-enhanced edge computing infrastructure",
          link: "/services/quantum-edge-computing-solutions",
          price: "$1,799/month"
        }
      ]
    },
    {
      title: "Content & Creative AI",
      description: "AI-powered content creation and creative tools",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      services: [
        {
          name: "AI Content Creation Studio",
          description: "AI-powered content generation and optimization",
          link: "/services/ai-content-creation-studio",
          price: "$99/month"
        },
        {
          name: "AI-Powered SEO",
          description: "Search engine optimization with AI insights",
          link: "/services/ai-powered-seo",
          price: "$299/month"
        },
        {
          name: "AI Educational Content Creation",
          description: "Educational content and learning materials",
          link: "/services/ai-educational-content-creation",
          price: "$199/month"
        },
        {
          name: "AI Content Marketing Suite",
          description: "Comprehensive content marketing platform",
          link: "/services/ai-content-marketing-suite",
          price: "$399/month"
        }
      ]
    }
  ];

  const industrySolutions = [
    {
      title: "Healthcare",
      description: "AI-powered healthcare solutions for improved patient care",
      icon: <Heart className="w-8 h-8" />,
      link: "/solutions/healthcare"
    },
    {
      title: "Financial Services",
      description: "Advanced financial technology and risk management",
      icon: <DollarSign className="w-8 h-8" />,
      link: "/solutions/financial"
    },
    {
      title: "Manufacturing",
      description: "Smart manufacturing and industrial automation",
      icon: <Factory className="w-8 h-8" />,
      link: "/solutions/manufacturing"
    },
    {
      title: "Retail & E-commerce",
      description: "Digital transformation for retail businesses",
      icon: <ShoppingBag className="w-8 h-8" />,
      link: "/solutions/retail"
    },
    {
      title: "Government",
      description: "Public sector digital transformation solutions",
      icon: <Building2 className="w-8 h-8" />,
      link: "/solutions/government"
    },
    {
      title: "Education",
      description: "AI-powered educational technology solutions",
      icon: <GraduationCap className="w-8 h-8" />,
      link: "/training"
    }
  ];

  const resources = [
    {
      title: "Blog & Insights",
      description: "Latest industry trends and technology insights",
      icon: <BookOpen className="w-6 h-6" />,
      link: "/blog"
    },
    {
      title: "Case Studies",
      description: "Real-world success stories and implementations",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/case-studies"
    },
    {
      title: "Webinars",
      description: "Educational webinars and expert presentations",
      icon: <Monitor className="w-6 h-6" />,
      link: "/webinars"
    },
    {
      title: "White Papers",
      description: "In-depth research and technical documentation",
      icon: <FileText className="w-6 h-6" />,
      link: "/white-papers"
    },
    {
      title: "Training",
      description: "Professional development and certification programs",
      icon: <GraduationCap className="w-6 h-6" />,
      link: "/training"
    },
    {
      title: "Support",
      description: "24/7 technical support and customer service",
      icon: <Headphones className="w-6 h-6" />,
      link: "/help"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Explore our comprehensive portfolio of AI, IT, and Micro SaaS services. Discover innovative solutions designed to transform your business and drive growth."
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Comprehensive Technology Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI-powered services, cloud solutions, and emerging technology platforms designed to transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet every business need
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-2xl p-8"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-6`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-400 text-lg">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={service.link}
                      className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-gray-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                      <div className="text-cyan-400 font-semibold text-sm">{service.price}</div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored solutions designed for specific industries and business challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={solution.link}
                  className="block bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">
                      {solution.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{solution.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Resources & Support
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Access our knowledge base, training materials, and expert support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={resource.link}
                  className="block bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-purple-400">
                        {resource.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{resource.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let our team of experts help you choose the right solutions and implement them successfully
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}