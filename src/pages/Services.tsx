import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe, 
  Zap, 
  Users, 
  ShoppingCart, 
  BookOpen,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  CheckCircle,
  Play,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Services() {
  const serviceCategories = [
    {
      name: "AI & Analytics",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      description: "Intelligent solutions powered by artificial intelligence and machine learning",
      services: [
        {
          name: "AI Business Intelligence",
          href: "/services/ai-business-intelligence",
          description: "Machine Learning & Data Science solutions",
          features: ["Predictive Analytics", "Natural Language Processing", "Real-time Insights"]
        },
        {
          name: "AI Sales Copilot",
          href: "/services/ai-sales-copilot",
          description: "AI-powered sales automation and optimization",
          features: ["Lead Scoring", "Sales Forecasting", "Customer Insights"]
        },
        {
          name: "AI Compliance Assistant",
          href: "/services/ai-compliance-assistant",
          description: "Regulatory compliance automation",
          features: ["Risk Assessment", "Compliance Monitoring", "Audit Trails"]
        },
        {
          name: "LLM Content Studio",
          href: "/services/llm-content-studio",
          description: "AI content generation and management",
          features: ["Content Creation", "Brand Consistency", "SEO Optimization"]
        }
      ]
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      color: "from-blue-600 to-cyan-600",
      description: "Scalable cloud infrastructure and development operations",
      services: [
        {
          name: "Cloud DevOps",
          href: "/services/cloud-devops",
          description: "Infrastructure & Automation",
          features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting"]
        },
        {
          name: "Cloud FinOps Optimizer",
          href: "/services/cloud-finops-optimizer",
          description: "Cloud cost optimization and management",
          features: ["Cost Analysis", "Resource Optimization", "Budget Management"]
        },
        {
          name: "FinOps Advisor",
          href: "/services/finops-advisor",
          description: "Financial operations optimization",
          features: ["Cost Governance", "Performance Metrics", "Strategic Planning"]
        }
      ]
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      color: "from-red-600 to-orange-600",
      description: "Advanced security solutions for modern threats",
      services: [
        {
          name: "AI Compliance Copilot",
          href: "/services/ai-compliance-copilot",
          description: "AI-Powered Security & Compliance",
          features: ["Threat Detection", "Compliance Monitoring", "Incident Response"]
        },
        {
          name: "Zero Trust Architecture",
          href: "/services/zero-trust-network-architecture",
          description: "Advanced security framework",
          features: ["Identity Verification", "Access Control", "Network Segmentation"]
        }
      ]
    },
    {
      name: "Digital Solutions",
      icon: Rocket,
      color: "from-green-600 to-emerald-600",
      description: "Innovative digital transformation solutions",
      services: [
        {
          name: "Digital Twin",
          href: "/services/digital-twin",
          description: "Simulation & Monitoring",
          features: ["Real-time Monitoring", "Predictive Maintenance", "Performance Optimization"]
        },
        {
          name: "Digital Transformation",
          href: "/services/digital-transformation",
          description: "End-to-end digital transformation",
          features: ["Process Automation", "Technology Integration", "Change Management"]
        },
        {
          name: "IT Infrastructure",
          href: "/services/it-infrastructure",
          description: "Enterprise infrastructure solutions",
          features: ["Network Design", "Hardware Management", "Performance Tuning"]
        }
      ]
    },
    {
      name: "Micro SaaS",
      icon: ShoppingCart,
      color: "from-yellow-600 to-orange-600",
      description: "Scalable software solutions for specific business needs",
      services: [
        {
          name: "Micro SaaS Solutions",
          href: "/services/micro-saas-solutions",
          description: "Productized SaaS for niches",
          features: ["Custom Development", "Scalable Architecture", "Maintenance Support"]
        },
        {
          name: "AI Lead Scoring",
          href: "/services/ai-lead-scoring",
          description: "Prioritize deals with ML",
          features: ["Lead Analysis", "Scoring Algorithms", "CRM Integration"]
        },
        {
          name: "Website AI Chatbot",
          href: "/services/website-ai-chatbot",
          description: "24/7 on-site assistant",
          features: ["Natural Language", "24/7 Support", "Lead Generation"]
        }
      ]
    },
    {
      name: "Emerging Tech",
      icon: Star,
      color: "from-indigo-600 to-purple-600",
      description: "Cutting-edge technology solutions",
      services: [
        {
          name: "Quantum Computing",
          href: "/services/quantum-computing",
          description: "Next-generation computing solutions",
          features: ["Quantum Algorithms", "Optimization Problems", "Research Support"]
        },
        {
          name: "IoT Edge Computing",
          href: "/services/iot-edge",
          description: "Smart devices & networks",
          features: ["Device Management", "Edge Processing", "Data Analytics"]
        },
        {
          name: "Blockchain Solutions",
          href: "/services/blockchain-enterprise-solutions",
          description: "DeFi & Smart Contracts",
          features: ["Smart Contracts", "Tokenization", "Supply Chain"]
        }
      ]
    }
  ];

  const featuredServices = [
    {
      name: "AI Business Intelligence",
      href: "/services/ai-business-intelligence",
      description: "Transform your data into actionable insights with our AI-powered business intelligence solutions.",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      features: ["Predictive Analytics", "Real-time Dashboards", "Natural Language Queries", "Automated Reporting"]
    },
    {
      name: "Digital Transformation",
      href: "/services/digital-transformation",
      description: "Accelerate your digital journey with our comprehensive transformation services.",
      icon: Rocket,
      color: "from-green-600 to-emerald-600",
      features: ["Process Automation", "Technology Integration", "Change Management", "Performance Optimization"]
    },
    {
      name: "Cybersecurity Suite",
      href: "/services/ai-compliance-copilot",
      description: "Protect your business with our advanced AI-powered cybersecurity solutions.",
      icon: Shield,
      color: "from-red-600 to-orange-600",
      features: ["Threat Detection", "Compliance Monitoring", "Incident Response", "Security Training"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Users },
    { number: "50+", label: "Expert Team Members", icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive technology services including AI, cloud computing, cybersecurity, digital transformation, and micro SaaS solutions."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Featured Services */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Featured Services</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our most popular and impactful solutions that drive real business results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={service.href}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-slate-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-slate-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Categories */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">All Services</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our comprehensive range of technology services organized by category
          </p>
        </motion.div>

        <div className="space-y-12">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <p className="text-slate-400">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="group"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                      className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105 h-full"
                    >
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-slate-400 text-sm mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-1 mb-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-slate-500 text-xs">
                            <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-cyan-400 text-sm group-hover:text-cyan-300 transition-colors">
                        Learn More
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help you achieve your technology goals and drive business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/request-quote"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Get Quote
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Contact Info */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
            <p className="text-slate-400">+1 (555) 123-4567</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-slate-400">info@ziontechgroup.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
            <p className="text-slate-400">San Francisco, CA</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

