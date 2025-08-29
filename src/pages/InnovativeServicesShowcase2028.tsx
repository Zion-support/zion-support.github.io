import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Heart, 
  Users, 
  Target, 
  Workflow,
  BarChart3,
  MessageCircle,
  DollarSign,
  Settings,
  Globe,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Award,
  Cpu,
  Lock,
  Eye,
  Activity,
  Clock,
  Database,
  Cloud,
  Smartphone,
  FileText,
  PenTool,
  ShoppingCart,
  Truck,
  Building,
  Leaf,
  Atom,
  Satellite
} from 'lucide-react';

export default function InnovativeServicesShowcase2028() {
  const featuredServices = [
    {
      icon: Workflow,
      title: "AI Workflow Automation",
      description: "Transform business processes with intelligent automation that learns and optimizes workflows in real-time",
      href: "/services/ai-workflow-automation",
      color: "from-purple-500 to-pink-500",
      features: ["AI-powered process discovery", "Visual workflow builder", "Predictive analytics", "Real-time monitoring"],
      pricing: "From $299/month",
      benefits: ["80% reduction in manual tasks", "Real-time optimization", "Scalable automation"]
    },
    {
      icon: Heart,
      title: "AI Customer Success Platform",
      description: "Proactively manage customer relationships and drive expansion revenue with AI-powered insights",
      href: "/services/ai-customer-success-platform",
      color: "from-blue-500 to-cyan-500",
      features: ["AI-powered customer insights", "360° customer view", "Predictive analytics", "Success playbooks"],
      pricing: "From $399/month",
      benefits: ["40% reduction in churn", "Improved NPS scores", "Data-driven decisions"]
    },
    {
      icon: Shield,
      title: "AI Financial Fraud Detection",
      description: "Stop financial fraud with 99.9% accuracy using advanced AI algorithms and real-time monitoring",
      href: "/services/ai-financial-fraud-detection",
      color: "from-red-500 to-orange-500",
      features: ["Real-time protection", "Behavioral analysis", "Multi-layered security", "Compliance ready"],
      pricing: "From $499/month",
      benefits: ["Prevent fraud losses", "24/7 protection", "Reduce false positives"]
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence", description: "Machine Learning & Data Science" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot", description: "AI-powered sales automation" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant", description: "Regulatory compliance automation" },
        { name: "LLM Content Studio", href: "/services/llm-content-studio", description: "AI content generation" }
      ]
    },
    {
      name: "Cybersecurity & Fraud",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        { name: "AI Financial Fraud Detection", href: "/services/ai-financial-fraud-detection", description: "99.9% fraud detection accuracy" },
        { name: "AI Cybersecurity Suite", href: "/services/ai-cybersecurity-suite", description: "AI-Powered Threat Detection" },
        { name: "Zero Trust Architecture", href: "/services/zero-trust-network-architecture", description: "Advanced security framework" }
      ]
    },
    {
      name: "Business Process Automation",
      icon: Workflow,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: "AI Workflow Automation", href: "/services/ai-workflow-automation", description: "Intelligent process automation" },
        { name: "AI Project Management Platform", href: "/services/ai-project-management-platform", description: "AI-powered project optimization" },
        { name: "AI HR Platform", href: "/services/ai-hr-platform", description: "HR automation & analytics" }
      ]
    },
    {
      name: "Customer Experience",
      icon: Heart,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: "AI Customer Success Platform", href: "/services/ai-customer-success-platform", description: "Proactive customer success" },
        { name: "AI Customer Support Platform", href: "/innovative-services-showcase-2025", description: "Intelligent support system" },
        { name: "Website AI Chatbot", href: "/services/website-ai-chatbot", description: "24/7 on-site assistant" }
      ]
    },
    {
      name: "Financial Technology",
      icon: DollarSign,
      color: "from-yellow-500 to-orange-500",
      services: [
        { name: "AI Financial Trading Platform", href: "/services/ai-financial-trading-platform", description: "AI-powered trading systems" },
        { name: "FinOps Advisor", href: "/services/finops-advisor", description: "Cloud cost optimization" },
        { name: "AI Financial Analytics", href: "/innovative-services-showcase-2025", description: "Advanced financial insights" }
      ]
    },
    {
      name: "Emerging Technologies",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      services: [
        { name: "Quantum AI Platform", href: "/services/quantum-ai-platform", description: "Next-Generation Quantum Computing" },
        { name: "Edge Computing Platform", href: "/services/edge-computing-platform", description: "Distributed computing at the edge" },
        { name: "Space Tech Solutions", href: "/services/space-tech", description: "Satellite and space technology" }
      ]
    }
  ];

  const microSaaSServices = [
    {
      icon: TrendingUp,
      title: "AI Lead Scoring",
      href: "/services/ai-lead-scoring",
      description: "Prioritize deals with ML-powered lead scoring",
      pricing: "From $199/month"
    },
    {
      icon: MessageCircle,
      title: "Website AI Chatbot",
      href: "/services/website-ai-chatbot",
      description: "24/7 intelligent customer support",
      pricing: "From $149/month"
    },
    {
      icon: BookOpen,
      title: "RAG Search",
      href: "/services/rag-search",
      description: "AI-powered search with citations",
      pricing: "From $179/month"
    },
    {
      icon: Settings,
      title: "MLOps Pipeline",
      href: "/services/mlops-pipeline",
      description: "Train, deploy, and monitor ML models",
      pricing: "From $299/month"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Personalization",
      href: "/services/ecommerce-personalization",
      description: "AI-powered product recommendations",
      pricing: "From $249/month"
    },
    {
      icon: Truck,
      title: "Returns Management SaaS",
      href: "/services/returns-management",
      description: "Streamlined returns processing",
      pricing: "From $199/month"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Efficiency",
      description: "Automate repetitive tasks and focus on strategic initiatives"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Protect your business with AI-powered security solutions"
    },
    {
      icon: Users,
      title: "Better Customer Experience",
      description: "Deliver personalized experiences that drive customer satisfaction"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics and AI insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Innovative Services Showcase 2028
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover the Future of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}AI-Powered Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive suite of cutting-edge AI services, micro SaaS solutions, and innovative 
              technology platforms designed to transform your business in 2028 and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                <Play className="w-5 h-5 inline mr-2" />
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Innovative Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most advanced and transformative AI-powered solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.pricing}</div>
                  <p className="text-gray-400 text-sm">14-day free trial included</p>
                </div>
                
                <Link
                  to={service.href}
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold text-center hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our organized collection of AI-powered solutions by category
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{category.name}</h3>
                
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={service.href}
                      className="block p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="font-medium text-white mb-1">{service.name}</div>
                      <div className="text-sm text-gray-400">{service.description}</div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Scalable, focused solutions for specific business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaaSServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="text-purple-400 font-semibold mb-4">{service.pricing}</div>
                
                <Link
                  to={service.href}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your business with intelligent, scalable solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have revolutionized their operations with our AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}