import React from 'react';
import { motion } from 'framer-motion';
import {

  Brain, 
  Scale, 
  Heart, 
  TrendingUp, 
  Truck, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Globe,
  Lock,
  BarChart3,
  Target,
  Zap,
  Phone,
  Mail,
  MapPin,
  FileText,
  Activity,
  Database,
  Eye,
  Settings
} from 'lucide-react';

const ServicesShowcase2025 = () => {

  const featuredServices = [
    {

      icon: <Scale className="w-12 h-12" />,
      title: "AI Legal Document Automation Platform",
      description: "Transform your legal practice with AI-powered document automation. Generate, analyze, and manage legal documents with unprecedented speed and accuracy.",
      features: ["Smart Document Analysis", "Compliance Automation", "Contract Generation", "Risk Assessment"],
      pricing: "Starting at $299/month",
      color: "from-blue-500 to-blue-600",
      link: "/services/ai-legal-document-automation-platform"
    },
    {

      icon: <Heart className="w-12 h-12" />,
      title: "AI Healthcare Analytics Platform",
      description: "Revolutionize healthcare delivery with AI-powered analytics. Monitor patients in real-time, predict health outcomes, and deliver personalized care.",
      features: ["Real-time Patient Monitoring", "Predictive Diagnostics", "HIPAA Compliant Security", "Care Team Collaboration"],
      pricing: "Starting at $499/month",
      color: "from-red-500 to-red-600",
      link: "/services/ai-healthcare-analytics-platform"
    },
    {

      icon: <TrendingUp className="w-12 h-12" />,
      title: "AI Financial Trading Platform",
      description: "Revolutionize your trading with AI-powered market analysis, predictive signals, and automated portfolio management.",
      features: ["AI-Powered Market Analysis", "Predictive Trading Signals", "Risk Management", "Portfolio Optimization"],
      pricing: "Starting at $99/month",
      color: "from-green-500 to-green-600",
      link: "/services/ai-financial-trading-platform"
    },
    {

      icon: <Truck className="w-12 h-12" />,
      title: "AI Supply Chain Optimization Platform",
      description: "Transform your supply chain with AI-powered optimization. Predict demand, optimize routes, and manage inventory with precision.",
      features: ["AI-Powered Demand Forecasting", "Route Optimization", "Risk Management", "Inventory Optimization"],
      pricing: "Starting at $399/month",
      color: "from-blue-500 to-blue-600",
      link: "/services/ai-supply-chain-optimization-platform"
    },
    {

      icon: <Home className="w-12 h-12" />,
      title: "AI Real Estate Analytics Platform",
      description: "Transform your real estate investments with AI-powered market analysis, predictive valuations, and portfolio optimization.",
      features: ["AI-Powered Market Analysis", "Predictive Property Valuation", "Portfolio Optimization", "Geographic Intelligence"],
      pricing: "Starting at $199/month",
      color: "from-green-500 to-green-600",
      link: "/services/ai-real-estate-analytics-platform"
    }
  ];

  const allServices = [
    {

      category: "AI & Machine Learning",
      services: [
        "AI Content Creation Studio Pro",
        "AI Customer Experience Analytics",
        "AI Cybersecurity Suite",
        "AI HR Platform",
        "AI IoT Edge Computing Platform",
        "AI Marketing Automation",
        "AI Predictive Maintenance",
        "AI Project Management Platform",
        "AI Workflow Automation",
        "AI Business Intelligence Platform"
      ]
    },
    {

      category: "Financial Technology",
      services: [
        "AI Financial Trading Platform",
        "AI Financial Risk Management",
        "AI Financial Analytics",
        "FinOps Advisor",
        "Cloud FinOps Optimizer",
        "Blockchain Enterprise Solutions"
      ]
    },
    {

      category: "Healthcare Technology",
      services: [
        "AI Healthcare Analytics Platform",
        "AI Healthcare Diagnostics",
        "AI Healthcare Predictive Analytics",
        "Healthcare Tech Solutions"
      ]
    },
    {

      category: "Legal Technology",
      services: [
        "AI Legal Document Automation Platform",
        "AI Legal Research Assistant",
        "AI Compliance Assistant"
      ]
    },
    {

      category: "Supply Chain & Logistics",
      services: [
        "AI Supply Chain Optimization Platform",
        "AI Supply Chain Risk Management",
        "IoT Edge Computing Solutions",
        "Edge Computing Platform"
      ]
    },
    {

      category: "Real Estate Technology",
      services: [
        "AI Real Estate Analytics Platform",
        "AI Property Valuation",
        "AI Market Intelligence",
        "AI Portfolio Optimization"
      ]
    },
    {

      category: "Security & Compliance",
      services: [
        "AI Cybersecurity Platform",
        "AI Cyber Threat Intelligence",
        "Security Headers CSP Manager",
        "Zero Trust Network Access",
        "SOC2 Compliance Tracker"
      ]
    }
  ];

  const benefits = [
    {

      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms deliver insights and automation that transform business operations"
    },
    {

      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with compliance certifications including SOC2, HIPAA, and industry-specific standards"
    },
    {

      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times and 99.9% uptime guarantees"
    },
    {

      icon: <Globe className="w-8 h-8" />,
      title: "Global Scale",
      description: "Deploy anywhere with multi-region support and automatic scaling capabilities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-12 h-12 text-purple-500 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Zion Tech Group
                <span className="text-purple-500 block">Services Showcase 2025</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of AI-powered micro SAAS services designed to transform 
              your business operations and drive innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-purple-500 transition-colors"
              >
                Call +1 302 464 0950
              </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our flagship AI-powered solutions that are transforming industries and driving business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-purple-500 transition-colors"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <span className="text-2xl font-bold text-purple-400">{service.pricing}</span>
                </div>
                
                <a
                  href={service.link}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive range of AI-powered solutions across all major business domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700"
              >
                <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-600 pb-2">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-purple-500 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-700">
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
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of businesses that have already improved efficiency and reduced costs with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Phone className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesShowcase2025;