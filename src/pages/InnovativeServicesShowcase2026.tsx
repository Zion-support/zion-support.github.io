import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Activity,
  FileText,
  Heart,
  DollarSign,
  Truck,
  Users,
  Target,
  Lock,
  Globe,
  BarChart3,
  Play,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InnovativeServicesShowcase2026() {
  const services = [
    {
      id: "ai-legal-document-automation",
      title: "AI Legal Document Automation Platform",
      description: "Transform your legal practice with AI-powered document automation, intelligent contract review, and automated compliance management.",
      category: "Legal Technology",
      price: "$399 - $1,999/month",
      features: [
        "AI-powered document analysis",
        "Smart document generation",
        "Intelligent contract review",
        "Compliance & risk management",
        "Workflow automation",
        "Enterprise security"
      ],
      benefits: [
        "Reduce legal document processing time by 80%",
        "Eliminate 95% of manual errors",
        "Ensure 100% regulatory compliance",
        "Save up to $50,000 annually"
      ],
      icon: FileText,
      color: "from-blue-500 to-purple-600",
      link: "/services/ai-legal-document-automation-platform"
    },
    {
      id: "ai-healthcare-analytics",
      title: "AI Healthcare Analytics Platform",
      description: "Transform healthcare delivery with AI-powered analytics, predictive insights, and clinical decision support.",
      category: "Healthcare Technology",
      price: "$599 - $2,999/month",
      features: [
        "AI-powered predictive analytics",
        "Real-time patient monitoring",
        "Clinical decision support",
        "HIPAA-compliant security",
        "Population health analytics",
        "Workflow automation"
      ],
      benefits: [
        "Reduce patient readmissions by 25%",
        "Improve diagnosis accuracy by 30%",
        "Save up to $100,000 annually",
        "Ensure 100% HIPAA compliance"
      ],
      icon: Heart,
      color: "from-green-500 to-blue-600",
      link: "/services/ai-healthcare-analytics-platform"
    },
    {
      id: "ai-financial-risk-management",
      title: "AI Financial Risk Management Platform",
      description: "Transform your financial risk management with AI-powered analytics, real-time monitoring, and predictive insights.",
      category: "Financial Technology",
      price: "$799 - $4,999/month",
      features: [
        "AI-powered risk assessment",
        "Comprehensive risk monitoring",
        "Predictive market analytics",
        "Portfolio optimization",
        "Automated compliance",
        "Enterprise security"
      ],
      benefits: [
        "Reduce portfolio risk by 40%",
        "Improve risk-adjusted returns by 25%",
        "Save up to $200,000 annually",
        "Achieve 100% regulatory compliance"
      ],
      icon: DollarSign,
      color: "from-emerald-500 to-blue-600",
      link: "/services/ai-financial-risk-management-platform"
    },
    {
      id: "ai-supply-chain-optimization",
      title: "AI Supply Chain Optimization Platform",
      description: "Transform your supply chain with AI-powered optimization, intelligent forecasting, and real-time analytics.",
      category: "Supply Chain Technology",
      price: "$599 - $2,999/month",
      features: [
        "AI-powered demand forecasting",
        "Intelligent route optimization",
        "Smart inventory management",
        "Real-time analytics dashboard",
        "Automated procurement",
        "Risk management"
      ],
      benefits: [
        "Reduce inventory costs by 30%",
        "Improve delivery times by 40%",
        "Save up to $150,000 annually",
        "Achieve 99.9% order fulfillment"
      ],
      icon: Truck,
      color: "from-orange-500 to-blue-600",
      link: "/services/ai-supply-chain-optimization-platform"
    }
  ];

  const categories = [
    "Legal Technology",
    "Healthcare Technology", 
    "Financial Technology",
    "Supply Chain Technology",
    "AI & Machine Learning",
    "Enterprise Solutions"
  ];

  const stats = [
    { number: "40%", label: "Average Cost Reduction", icon: TrendingUp },
    { number: "80%", label: "Process Automation", icon: Zap },
    { number: "99.9%", label: "Accuracy Rate", icon: Target },
    { number: "24/7", label: "Real-time Monitoring", icon: Activity }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              Innovative Micro-SaaS Services 2026
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary AI-Powered
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Micro-SaaS Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our cutting-edge micro-SaaS services that leverage artificial intelligence to transform 
              industries and drive unprecedented business growth. From legal automation to healthcare analytics, 
              we're revolutionizing how businesses operate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Watch Demo
                  <Play className="w-5 h-5" />
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary AI-Powered Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive suite of innovative micro-SaaS solutions designed to transform your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.price}</div>
                  <p className="text-gray-400 text-sm">Flexible pricing plans for every business size</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-purple-400 font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-purple-400 font-medium mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <Target className="w-3 h-3 text-purple-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our services span across multiple cutting-edge technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center hover:border-purple-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h3 className="text-sm font-medium text-white">{category}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're not just another technology company - we're your strategic partner in digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center"
            >
              <Brain className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Cutting-Edge AI Technology</h3>
              <p className="text-gray-400">Leverage the latest advances in artificial intelligence and machine learning</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center"
            >
              <Shield className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise-Grade Security</h3>
              <p className="text-gray-400">Bank-level security with SOC 2 compliance and end-to-end encryption</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center"
            >
              <Zap className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Implementation</h3>
              <p className="text-gray-400">Get up and running in weeks, not months, with our streamlined deployment process</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join hundreds of companies that have already revolutionized their operations with our AI-powered solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400/50 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">Call Us</h3>
                <p className="text-gray-300 text-sm">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">Email Us</h3>
                <p className="text-gray-300 text-sm">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-400 mb-2" />
                <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                <p className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
