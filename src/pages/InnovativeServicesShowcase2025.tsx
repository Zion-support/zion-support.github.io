import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  BarChart3,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Activity,
  Eye,
  Target,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  TrendingUp,
  MessageCircle,
  Settings,
  UserCheck,
  Briefcase,
  GraduationCap,
  Server,
  Cloud,
  Workflow,
  Leaf,
  Gamepad2,
  Coins,
  Satellite
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const featuredServices = [
    {
      icon: Brain,
      title: "AI Enterprise Intelligence Platform",
      description: "Transform your business with AI-powered intelligence, predictive analytics, and automated decision support.",
      href: "/services/ai-enterprise-intelligence-platform",
      color: "from-cyan-500 to-purple-600",
      price: "From $299/month",
      features: ["Real-time BI Dashboard", "Predictive Analytics", "AI Decision Support", "Custom KPI Tracking"],
      category: "AI & Automation"
    },
    {
      icon: Shield,
      title: "Quantum AI Cybersecurity Platform",
      description: "Future-proof your security with quantum-resistant encryption and AI-powered threat detection.",
      href: "/services/quantum-ai-cybersecurity-platform",
      color: "from-red-500 to-purple-600",
      price: "From $499/month",
      features: ["Quantum Encryption", "AI Threat Detection", "Real-time Monitoring", "Zero-Trust Architecture"],
      category: "Cybersecurity"
    },
    {
      icon: Users,
      title: "AI HR Management Platform",
      description: "Streamline HR operations with AI-powered automation, intelligent screening, and performance analytics.",
      href: "/services/ai-hr-management-platform",
      color: "from-green-500 to-purple-600",
      price: "From $199/month",
      features: ["AI Candidate Screening", "Performance Analytics", "Employee Engagement", "Compliance Monitoring"],
      category: "Micro SaaS"
    },
    {
      icon: BarChart3,
      title: "AI Data Analytics Platform",
      description: "Unlock insights from your data with advanced AI analytics and real-time business intelligence.",
      href: "/services/ai-data-analytics-platform",
      color: "from-blue-500 to-purple-600",
      price: "From $399/month",
      features: ["Advanced Analytics", "Real-time Insights", "Custom Dashboards", "Predictive Modeling"],
      category: "AI & Analytics"
    },
    {
      icon: Workflow,
      title: "AI Enterprise Automation Platform",
      description: "Automate complex business processes with intelligent workflows and AI-powered decision making.",
      href: "/services/ai-enterprise-automation-platform",
      color: "from-purple-500 to-pink-600",
      price: "From $599/month",
      features: ["Process Automation", "AI Workflows", "Custom Integrations", "Performance Monitoring"],
      category: "AI & Automation"
    },
    {
      icon: Atom,
      title: "AI Quantum Hybrid Platform",
      description: "Leverage quantum computing and AI for breakthrough performance in complex computational tasks.",
      href: "/services/ai-quantum-hybrid-platform",
      color: "from-indigo-500 to-purple-600",
      price: "From $1,999/month",
      features: ["Quantum Computing", "AI Integration", "Hybrid Algorithms", "Custom Development"],
      category: "Quantum AI"
    }
  ];

  const serviceCategories = [
    {
      title: "AI & Automation",
      description: "Intelligent automation solutions powered by artificial intelligence",
      services: [
        "AI Enterprise Intelligence Platform",
        "AI Enterprise Automation Platform",
        "AI Data Analytics Platform",
        "AI Business Intelligence",
        "AI Project Management Platform"
      ],
      icon: Brain,
      color: "from-cyan-500 to-purple-600"
    },
    {
      title: "Cybersecurity & Quantum",
      description: "Next-generation security with quantum-resistant encryption",
      services: [
        "Quantum AI Cybersecurity Platform",
        "AI Cybersecurity Platform",
        "Zero-Trust Network Architecture",
        "Smart Contract Risk Scanner",
        "Security Headers CSP Manager"
      ],
      icon: Shield,
      color: "from-red-500 to-purple-600"
    },
    {
      title: "Micro SaaS Solutions",
      description: "Specialized software solutions for modern businesses",
      services: [
        "AI HR Management Platform",
        "AI Sales Copilot",
        "AI Compliance Assistant",
        "Cloud FinOps Optimizer",
        "AI Content Optimizer Pro"
      ],
      icon: Zap,
      color: "from-green-500 to-purple-600"
    },
    {
      title: "Healthcare & Life Sciences",
      description: "AI-powered solutions for healthcare transformation",
      services: [
        "AI Healthcare Platform",
        "AI Healthcare Analytics Platform",
        "Healthcare Tech Solutions",
        "Digital Twin Technology",
        "Sustainability Solutions"
      ],
      icon: Activity,
      color: "from-emerald-500 to-purple-600"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Automate 80% of repetitive tasks and boost productivity by 60%"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Quantum-resistant encryption protects against future threats"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get actionable intelligence from your data with machine learning"
    },
    {
      icon: Users,
      title: "Better User Experience",
      description: "Intuitive interfaces designed for maximum productivity"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              2025 Innovative Services Showcase
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary AI & IT Services
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the future of technology with our cutting-edge AI, cybersecurity, and Micro SaaS solutions. 
              Transform your business with intelligent automation and quantum-safe security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our most innovative and transformative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.href} className="block">
                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 h-full hover:border-purple-500/50 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-xs text-gray-400 bg-slate-700 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="text-purple-400 font-semibold mb-4">
                      {service.price}
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-purple-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions across all technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-400 mb-6">{category.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {category.services.slice(0, 4).map((service) => (
                    <li key={service} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/services"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
                >
                  View All {category.title} Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Proven results and measurable business impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 to-cyan-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations already using our innovative services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}