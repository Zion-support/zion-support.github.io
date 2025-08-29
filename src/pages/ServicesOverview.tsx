import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Target, 
  Zap, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Heart, 
  Globe, 
  Lock, 
  ShoppingCart, 
  MessageCircle, 
  Users, 
  BookOpen, 
  DollarSign, 
  Bot, 
  Atom, 
  Calendar,
  TrendingUp,
  Truck,
  Factory,
  BarChart3,
  Server,
  Database,
  Workflow,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';
import { SEO } from '../components/SEO';

const ServicesOverview: React.FC = () => {
  const serviceCategories = [
    {
      name: "AI & Analytics Services",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      description: "Cutting-edge artificial intelligence and data analytics solutions",
      services: [
        {
          name: "AI Business Intelligence",
          href: "/services/ai-business-intelligence",
          description: "Machine Learning & Data Science for business insights",
          price: "$299/month",
          features: ["Predictive Analytics", "Real-time Dashboards", "Intelligent Forecasting"]
        },
        {
          name: "AI Workflow Orchestrator",
          href: "/services/ai-workflow-orchestrator",
          description: "Intelligent Process Automation & Workflow Management",
          price: "$199/month",
          features: ["Process Automation", "Smart Routing", "Performance Analytics"]
        },
        {
          name: "AI Data Governance",
          href: "/services/ai-data-governance",
          description: "AI-Powered Data Protection & Compliance Management",
          price: "$399/month",
          features: ["Data Classification", "Compliance Monitoring", "Privacy Protection"]
        },
        {
          name: "AI Customer Success Platform",
          href: "/services/ai-customer-success-platform",
          description: "Proactive Customer Engagement & Retention",
          price: "$249/month",
          features: ["Customer Insights", "Predictive Churn", "Automated Engagement"]
        }
      ]
    },
    {
      name: "AI Business Solutions",
      icon: Target,
      color: "from-indigo-600 to-purple-600",
      description: "Specialized AI solutions for specific business domains",
      services: [
        {
          name: "AI Project Management Suite",
          href: "/services/ai-project-management-suite",
          description: "Intelligent Project Planning & Execution",
          price: "$99/month",
          features: ["AI-Powered Planning", "Smart Team Management", "Predictive Scheduling"]
        },
        {
          name: "AI Financial Trading Platform",
          href: "/services/ai-financial-trading-platform",
          description: "Automated Trading & Portfolio Optimization",
          price: "$199/month",
          features: ["AI-Powered Analysis", "Predictive Trading", "Risk Management"]
        },
        {
          name: "AI Healthcare Analytics Platform",
          href: "/services/ai-healthcare-analytics-platform",
          description: "Medical AI & Predictive Healthcare",
          price: "$299/month",
          features: ["AI-Powered Diagnosis", "Predictive Analytics", "HIPAA Compliance"]
        },
        {
          name: "AI Supply Chain Optimization Platform",
          href: "/services/ai-supply-chain-optimization-platform",
          description: "Smart Supply Chain Optimization",
          price: "$399/month",
          features: ["AI-Powered Forecasting", "Route Optimization", "Inventory Management"]
        }
      ]
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      color: "from-green-600 to-emerald-600",
      description: "Scalable cloud infrastructure and automated deployment solutions",
      services: [
        {
          name: "Cloud DevOps",
          href: "/services/cloud-devops",
          description: "Infrastructure & Automation",
          price: "$199/month",
          features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting"]
        },
        {
          name: "Cloud FinOps Optimizer",
          href: "/services/cloud-finops-optimizer",
          description: "Cloud Cost Optimization & Management",
          price: "$149/month",
          features: ["Cost Analysis", "Resource Optimization", "Budget Management"]
        },
        {
          name: "FinOps Advisor",
          href: "/services/finops-advisor",
          description: "Financial Operations & Cloud Economics",
          price: "$299/month",
          features: ["Financial Planning", "ROI Analysis", "Cost Forecasting"]
        }
      ]
    },
    {
      name: "Edge & IoT Services",
      icon: Cpu,
      color: "from-blue-600 to-cyan-600",
      description: "Ultra-low latency edge computing and IoT platform solutions",
      services: [
        {
          name: "IoT & Edge Computing",
          href: "/services/iot-edge",
          description: "Smart Devices & Networks",
          price: "$199/month",
          features: ["Device Management", "Real-time Processing", "Edge Analytics"]
        },
        {
          name: "Edge Computing Platform",
          href: "/services/edge-computing-platform",
          description: "Ultra-Low Latency Processing",
          price: "$399/month",
          features: ["Edge Nodes", "Load Balancing", "Performance Optimization"]
        },
        {
          name: "Digital Twin",
          href: "/services/digital-twin",
          description: "Simulation & Monitoring",
          price: "$299/month",
          features: ["3D Modeling", "Real-time Monitoring", "Predictive Maintenance"]
        }
      ]
    },
    {
      name: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-red-600 to-orange-600",
      description: "Advanced security protocols and threat protection systems",
      services: [
        {
          name: "AI Compliance Copilot",
          href: "/services/ai-compliance-copilot",
          description: "AI-Powered Security & Compliance",
          price: "$199/month",
          features: ["Automated Compliance", "Risk Assessment", "Policy Management"]
        },
        {
          name: "Zero Trust Architecture",
          href: "/services/zero-trust-network-architecture",
          description: "Advanced Security Framework",
          price: "$399/month",
          features: ["Identity Verification", "Access Control", "Threat Detection"]
        }
      ]
    },
    {
      name: "Micro SaaS Solutions",
      icon: ShoppingCart,
      color: "from-yellow-600 to-orange-600",
      description: "Productized SaaS solutions for specific business niches",
      services: [
        {
          name: "AI Auto Email Responder",
          href: "/services/ai-auto-email-responder",
          description: "Faster replies, CRM logging",
          price: "$49/month",
          features: ["Smart Responses", "CRM Integration", "Analytics"]
        },
        {
          name: "Customer Feedback Surveys",
          href: "/services/mobile-feedback-surveys",
          description: "NPS/CSAT with AI insights",
          price: "$79/month",
          features: ["Survey Templates", "AI Analysis", "Actionable Insights"]
        },
        {
          name: "LLM Content Studio",
          href: "/services/llm-content-studio",
          description: "On-brand AI content generation",
          price: "$99/month",
          features: ["Content Creation", "Brand Consistency", "SEO Optimization"]
        }
      ]
    }
  ];

  const featuredServices = [
    {
      name: "AI Project Management Suite",
      href: "/services/ai-project-management-suite",
      description: "Transform your project management with AI-powered planning and intelligent resource allocation",
      icon: Calendar,
      color: "from-blue-600 to-purple-600",
      price: "$99/month",
      popular: true
    },
    {
      name: "AI Financial Trading Platform",
      href: "/services/ai-financial-trading-platform",
      description: "Revolutionize your trading with AI-powered algorithms that analyze markets 24/7",
      icon: TrendingUp,
      color: "from-green-600 to-emerald-600",
      price: "$199/month",
      popular: false
    },
    {
      name: "AI Healthcare Analytics Platform",
      href: "/services/ai-healthcare-analytics-platform",
      description: "Transform healthcare delivery with AI-powered analytics that improve diagnosis accuracy",
      icon: Heart,
      color: "from-red-600 to-pink-600",
      price: "$299/month",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Comprehensive overview of our AI, IT, and micro-SaaS services. Transform your business with cutting-edge technology solutions and expert consulting."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Comprehensive Service Portfolio
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Complete Service Portfolio
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of AI-powered services, IT solutions, and innovative micro SaaS platforms 
              designed to transform your business operations and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our most popular and innovative services that are transforming businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  service.popular 
                    ? 'border-blue-500/50 bg-blue-500/5' 
                    : 'border-gray-700'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                </div>

                <Link
                  to={service.href}
                  className="block w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Complete Service Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of services organized by category to find the perfect solution for your needs.
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-xl text-gray-400">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-700/50 rounded-lg p-6 hover:bg-gray-700/70 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-white">{service.name}</h4>
                        <span className="text-blue-400 font-semibold">{service.price}</span>
                      </div>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Choose from our comprehensive portfolio of AI-powered services and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;