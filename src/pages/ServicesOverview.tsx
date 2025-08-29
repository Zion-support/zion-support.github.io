import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Users, 
  Target, 
  Building,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign,
  Globe,
  Cpu,
  Lock,
  Heart,
  Atom,
  Project,
  MessageCircle,
  BookOpen,
  BarChart3,
  Workflow,
  Bot,
  Server,
  Database,
  Network,
  Eye,
  TrendingUp,
  Sparkles,
  Crown,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity
} from 'lucide-react';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      name: "AI & Analytics Services",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      services: [
        {
          name: "AI Enterprise Architecture",
          href: "/services/ai-enterprise-architecture",
          description: "Transform your enterprise with AI-powered architecture solutions",
          price: "From $15,000/month",
          features: ["AI Decision Engine", "Enterprise Integration", "Process Automation", "Performance Optimization"]
        },
        {
          name: "AI Business Intelligence",
          href: "/services/ai-business-intelligence",
          description: "Machine learning and data science for business insights",
          price: "From $8,000/month",
          features: ["Predictive Analytics", "Data Mining", "Business Insights", "Real-time Reporting"]
        },
        {
          name: "AI Digital Marketing Suite",
          href: "/services/ai-digital-marketing-suite",
          description: "AI-powered marketing automation and optimization",
          price: "From $2,500/month",
          features: ["Content Generation", "Audience Targeting", "Campaign Optimization", "ROI Analytics"]
        },
        {
          name: "AI Workflow Orchestrator",
          href: "/services/ai-workflow-orchestrator",
          description: "Intelligent process automation and workflow management",
          price: "From $12,000/month",
          features: ["Process Automation", "Workflow Optimization", "Intelligent Routing", "Performance Monitoring"]
        },
        {
          name: "AI Data Governance",
          href: "/services/ai-data-governance",
          description: "AI-powered data protection and compliance management",
          price: "From $18,000/month",
          features: ["Data Protection", "Compliance Management", "Privacy Controls", "Audit Trails"]
        },
        {
          name: "AI Customer Success Platform",
          href: "/services/ai-customer-success-platform",
          description: "Proactive customer engagement and success management",
          price: "From $10,000/month",
          features: ["Customer Insights", "Success Metrics", "Proactive Engagement", "Churn Prevention"]
        }
      ]
    },
    {
      name: "Micro SaaS Solutions",
      icon: ShoppingCart,
      color: "from-green-600 to-emerald-600",
      description: "Scalable software-as-a-service solutions for niche markets",
      services: [
        {
          name: "AI Project Management Platform",
          href: "/services/ai-project-management-platform",
          description: "Intelligent project management with AI-powered optimization",
          price: "From $99/month",
          features: ["AI Task Prioritization", "Smart Team Allocation", "Predictive Analytics", "Multiple Views"]
        },
        {
          name: "AI Auto Email Responder",
          href: "/services/ai-auto-email-responder",
          description: "Automated email responses with CRM integration",
          price: "From $500/month",
          features: ["Smart Responses", "CRM Integration", "Sentiment Analysis", "Performance Tracking"]
        },
        {
          name: "Customer Feedback Surveys",
          href: "/services/mobile-feedback-surveys",
          description: "AI-powered feedback collection and analysis",
          price: "From $300/month",
          features: ["Survey Creation", "AI Analysis", "Insight Generation", "Action Planning"]
        },
        {
          name: "LLM Content Studio",
          href: "/services/llm-content-studio",
          description: "AI content generation for brand consistency",
          price: "From $800/month",
          features: ["Content Generation", "Brand Consistency", "SEO Optimization", "Multi-format Output"]
        },
        {
          name: "FinOps Advisor",
          href: "/services/finops-advisor",
          description: "Cloud cost optimization and financial operations",
          price: "From $1,200/month",
          features: ["Cost Optimization", "Resource Management", "Budget Planning", "ROI Analysis"]
        }
      ]
    },
    {
      name: "Cybersecurity & Security",
      icon: Shield,
      color: "from-indigo-600 to-purple-600",
      description: "Next-generation security solutions for modern threats",
      services: [
        {
          name: "Quantum Cybersecurity Solutions",
          href: "/services/quantum-cybersecurity-solutions",
          description: "Quantum-resistant encryption and AI-powered threat detection",
          price: "From $25,000/month",
          features: ["Quantum Encryption", "AI Threat Detection", "Zero-Trust Architecture", "24/7 Monitoring"]
        },
        {
          name: "AI Compliance Copilot",
          href: "/services/ai-compliance-copilot",
          description: "AI-powered regulatory compliance automation",
          price: "From $15,000/month",
          features: ["Compliance Automation", "Risk Assessment", "Policy Management", "Audit Support"]
        },
        {
          name: "Zero Trust Network Architecture",
          href: "/services/zero-trust-network-architecture",
          description: "Advanced security framework for modern networks",
          price: "From $20,000/month",
          features: ["Identity Verification", "Access Control", "Network Segmentation", "Threat Prevention"]
        }
      ]
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      color: "from-blue-600 to-cyan-600",
      description: "Scalable cloud infrastructure and automated deployment",
      services: [
        {
          name: "Cloud DevOps",
          href: "/services/cloud-devops",
          description: "Infrastructure automation and CI/CD pipelines",
          price: "From $12,000/month",
          features: ["CI/CD Automation", "Infrastructure as Code", "Container Orchestration", "Monitoring"]
        },
        {
          name: "Cloud FinOps Optimizer",
          href: "/services/cloud-finops-optimizer",
          description: "Cloud cost optimization and financial management",
          price: "From $8,000/month",
          features: ["Cost Optimization", "Resource Management", "Budget Planning", "ROI Analysis"]
        },
        {
          name: "Edge Computing Platform",
          href: "/services/edge-computing-platform",
          description: "Ultra-low latency edge computing solutions",
          price: "From $25,000/month",
          features: ["Low Latency", "Real-time Processing", "Scalable Architecture", "Global Distribution"]
        }
      ]
    },
    {
      name: "Digital Solutions",
      icon: Rocket,
      color: "from-orange-600 to-red-600",
      description: "Innovative digital transformation and technology solutions",
      services: [
        {
          name: "Digital Twin",
          href: "/services/digital-twin",
          description: "Simulation and monitoring for physical systems",
          price: "From $30,000/month",
          features: ["System Simulation", "Real-time Monitoring", "Predictive Maintenance", "Performance Optimization"]
        },
        {
          name: "IoT & Edge Computing",
          href: "/services/iot-edge",
          description: "Smart devices and edge computing networks",
          price: "From $18,000/month",
          features: ["Device Management", "Edge Processing", "Data Analytics", "Network Security"]
        },
        {
          name: "Blockchain Enterprise Solutions",
          href: "/services/blockchain-enterprise-solutions",
          description: "Enterprise blockchain and DeFi solutions",
          price: "From $35,000/month",
          features: ["Smart Contracts", "DeFi Platforms", "Supply Chain", "Digital Identity"]
        },
        {
          name: "Healthcare Technology",
          href: "/services/healthcare-tech",
          description: "AI-powered healthcare solutions and diagnostics",
          price: "From $40,000/month",
          features: ["Medical AI", "Diagnostic Tools", "Patient Care", "Compliance Management"]
        },
        {
          name: "Sustainability Solutions",
          href: "/services/sustainability",
          description: "Green IT and sustainability technology",
          price: "From $22,000/month",
          features: ["Energy Efficiency", "Carbon Tracking", "Sustainable Practices", "Green Infrastructure"]
        }
      ]
    },
    {
      name: "Quantum & Emerging Tech",
      icon: Atom,
      color: "from-violet-600 to-purple-600",
      description: "Next-generation quantum computing and emerging technologies",
      services: [
        {
          name: "Quantum Computing Solutions",
          href: "/services/quantum-computing-solutions",
          description: "Quantum computing for complex problem solving",
          price: "From $50,000/month",
          features: ["Quantum Algorithms", "Problem Solving", "Research Support", "Custom Solutions"]
        },
        {
          name: "Quantum AI Platform",
          href: "/services/quantum-ai-platform",
          description: "Quantum-enhanced artificial intelligence",
          price: "From $45,000/month",
          features: ["Quantum AI", "Enhanced ML", "Faster Processing", "Advanced Analytics"]
        },
        {
          name: "Space Technology",
          href: "/services/space-tech",
          description: "Space technology and satellite solutions",
          price: "From $60,000/month",
          features: ["Satellite Systems", "Space Analytics", "Orbital Solutions", "Research Support"]
        }
      ]
    }
  ];

  const quickStats = [
    { label: "Total Services", value: "50+", icon: Star },
    { label: "AI-Powered Solutions", value: "25+", icon: Brain },
    { label: "Micro SaaS Products", value: "15+", icon: ShoppingCart },
    { label: "Security Solutions", value: "10+", icon: Shield },
    { label: "Cloud Services", value: "12+", icon: Cloud },
    { label: "Quantum Solutions", value: "5+", icon: Atom }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Comprehensive overview of our AI, IT, and Micro SaaS services. Transform your business with cutting-edge technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
              <Rocket className="w-4 h-4 mr-2" />
              Complete Service Portfolio
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive Technology Services
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our complete portfolio of AI-powered solutions, IT services, and Micro SaaS products. 
              Transform your business with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet every business need.
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-300 text-lg">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-white">{service.name}</h4>
                        <span className="text-blue-400 text-sm font-medium">{service.price}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={service.href}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose from our comprehensive range of services and start your digital transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}