import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Cpu, 
  Lock, 
  Heart, 
  Globe, 
  Rocket, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  DollarSign, 
  TrendingUp, 
  Settings, 
  Workflow,
  Database,
  Smartphone,
  Monitor,
  Activity,
  BarChart3,
  Target,
  Award,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "AI Business Intelligence",
          description: "Machine learning-powered analytics and insights",
          href: "/services/ai-business-intelligence",
          price: "From $2,999/month",
          features: ["Predictive Analytics", "ML Models", "Real-time Insights"]
        },
        {
          name: "AI Workflow Orchestrator",
          description: "Intelligent process automation and workflow management",
          href: "/services/ai-workflow-orchestrator",
          price: "From $299/month",
          features: ["Process Automation", "AI Decision Making", "Workflow Analytics"]
        },
        {
          name: "AI Data Governance",
          description: "Secure data management with AI-powered compliance",
          href: "/services/ai-data-governance",
          price: "From $1,299/month",
          features: ["Data Classification", "Compliance Automation", "Security Monitoring"]
        },
        {
          name: "AI Customer Success Platform",
          description: "Automated customer success and retention management",
          href: "/services/ai-customer-success-platform",
          price: "From $799/month",
          features: ["Churn Prevention", "Proactive Engagement", "Success Metrics"]
        },
        {
          name: "AI Sales Copilot",
          description: "AI-powered sales automation and lead management",
          href: "/services/ai-sales-copilot",
          price: "From $499/month",
          features: ["Lead Scoring", "Sales Automation", "Performance Analytics"]
        },
        {
          name: "AI Compliance Assistant",
          description: "Automated regulatory compliance and risk management",
          href: "/services/ai-compliance-assistant",
          price: "From $899/month",
          features: ["Compliance Monitoring", "Risk Assessment", "Audit Automation"]
        }
      ]
    },
    {
      name: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and modern infrastructure management",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Cloud DevOps",
          description: "Infrastructure automation and deployment optimization",
          href: "/services/cloud-devops",
          price: "From $1,999/month",
          features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring"]
        },
        {
          name: "Edge Computing Platform",
          description: "Global edge infrastructure for low-latency applications",
          href: "/services/edge-computing-platform",
          price: "From $499/month",
          features: ["Global Edge Nodes", "Ultra-low Latency", "Auto-scaling"]
        },
        {
          name: "Cloud FinOps Optimizer",
          description: "Cloud cost optimization and financial management",
          href: "/services/cloud-finops-optimizer",
          price: "From $799/month",
          features: ["Cost Optimization", "Resource Management", "Budget Control"]
        },
        {
          name: "FinOps Advisor",
          description: "Financial operations optimization for cloud environments",
          href: "/services/finops-advisor",
          price: "From $599/month",
          features: ["Cost Analysis", "Optimization Strategies", "ROI Tracking"]
        }
      ]
    },
    {
      name: "Micro SaaS Solutions",
      description: "Specialized software solutions for niche business needs",
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "AI Lead Scoring",
          description: "Machine learning-powered lead prioritization",
          href: "/services/ai-lead-scoring",
          price: "From $399/month",
          features: ["ML Scoring", "Lead Prioritization", "Conversion Analytics"]
        },
        {
          name: "Website AI Chatbot",
          description: "Intelligent customer support and engagement",
          href: "/services/website-ai-chatbot",
          price: "From $199/month",
          features: ["24/7 Support", "Natural Language", "Integration APIs"]
        },
        {
          name: "RAG Search",
          description: "AI-powered search with citation and context",
          href: "/services/rag-search",
          price: "From $299/month",
          features: ["Contextual Search", "Citation Tracking", "Knowledge Base"]
        },
        {
          name: "MLOps Pipeline",
          description: "Machine learning operations and deployment",
          href: "/services/mlops-pipeline",
          price: "From $599/month",
          features: ["Model Training", "Deployment", "Monitoring"]
        },
        {
          name: "eCommerce Personalization",
          description: "AI-driven product recommendations and search",
          href: "/services/ecommerce-personalization",
          price: "From $399/month",
          features: ["Product Recommendations", "Search Optimization", "A/B Testing"]
        },
        {
          name: "Customer Feedback Surveys",
          description: "Automated feedback collection and analysis",
          href: "/services/mobile-feedback-surveys",
          price: "From $199/month",
          features: ["Survey Automation", "AI Insights", "Response Analytics"]
        }
      ]
    },
    {
      name: "Digital Transformation",
      description: "Modern technology solutions for business evolution",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      services: [
        {
          name: "Digital Twin",
          description: "Virtual simulation and monitoring systems",
          href: "/services/digital-twin",
          price: "From $3,999/month",
          features: ["3D Modeling", "Real-time Monitoring", "Predictive Analytics"]
        },
        {
          name: "IoT & Edge Computing",
          description: "Smart device networks and edge processing",
          href: "/services/iot-edge",
          price: "From $2,499/month",
          features: ["Device Management", "Edge Processing", "Data Analytics"]
        },
        {
          name: "Blockchain Solutions",
          description: "Distributed ledger and smart contract platforms",
          href: "/services/blockchain-enterprise-solutions",
          price: "From $4,999/month",
          features: ["Smart Contracts", "DeFi Platforms", "Supply Chain"]
        },
        {
          name: "Healthcare Technology",
          description: "AI-powered healthcare solutions and diagnostics",
          href: "/services/healthcare-tech",
          price: "From $5,999/month",
          features: ["Medical AI", "Patient Monitoring", "Diagnostic Tools"]
        }
      ]
    },
    {
      name: "Specialized Solutions",
      description: "Industry-specific and specialized technology services",
      icon: Target,
      color: "from-indigo-500 to-purple-500",
      services: [
        {
          name: "Sustainability Solutions",
          description: "Green IT and environmental technology",
          href: "/services/sustainability",
          price: "From $1,999/month",
          features: ["Carbon Tracking", "Energy Optimization", "Green Computing"]
        },
        {
          name: "Quantum Computing",
          description: "Next-generation quantum technology solutions",
          href: "/services/quantum-computing",
          price: "From $9,999/month",
          features: ["Quantum Algorithms", "Simulation", "Research Support"]
        },
        {
          name: "Space Technology",
          description: "Space industry technology and satellite solutions",
          href: "/services/space-tech",
          price: "From $7,999/month",
          features: ["Satellite Systems", "Space Analytics", "Ground Control"]
        },
        {
          name: "Zero Trust Security",
          description: "Advanced cybersecurity architecture",
          href: "/services/zero-trust-network-architecture",
          price: "From $3,999/month",
          features: ["Identity Verification", "Access Control", "Threat Detection"]
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Deploy solutions in weeks, not months"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security and compliance"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Grow with your business needs"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 technical support and guidance"
    }
  ];

  return (
    <>
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Explore our comprehensive portfolio of AI, IT, and micro SaaS services. From machine learning to edge computing, we have solutions for every business need."
        canonical="/services-overview"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Comprehensive Technology Solutions
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Services
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Overview
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
            >
              Discover our comprehensive portfolio of AI-powered solutions, cloud infrastructure, and specialized micro SaaS services designed to transform your business.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with proven results and exceptional support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Service Categories</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions organized by category
            </p>
          </div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                    <p className="text-slate-300 text-lg">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: serviceIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-slate-700/50 p-6 rounded-lg border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-semibold">{service.name}</h4>
                        <Link
                          to={service.href}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                      
                      <p className="text-slate-300 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-blue-400 font-semibold">{service.price}</span>
                      </div>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let our experts help you choose the right solutions for your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Quote
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}