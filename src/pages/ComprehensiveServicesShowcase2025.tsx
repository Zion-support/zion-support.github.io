import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Heart, 
  Truck, 
  Atom, 
  Cpu, 
  Cloud, 
  ShoppingCart, 
  Zap, 
  Target, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Lightbulb,
  Rocket,
  Sparkles,
  BarChart3,
  FileText,
  MessageCircle,
  Search,
  Settings,
  Palette,
  Clock,
  DollarSign,
  Eye,
  Lock,
  Database,
  Network,
  Package,
  Warehouse,
  Route,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  AreaChart,
  GanttChart,
  Kanban,
  Calendar,
  Timer,
  Stopwatch,
  MapPin,
  Navigation,
  Phone,
  Mail,
  MapPin as MapPinIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ComprehensiveServicesShowcase2025() {
  const aiServices = [
    {
      title: "AI Quantum Hybrid Platform",
      description: "Revolutionary quantum-classical hybrid computing platform combining quantum mechanics with classical computing orchestrated by AI algorithms.",
      icon: Atom,
      href: "/services/ai-quantum-hybrid-platform",
      features: ["Quantum-Classical Hybrid Processing", "AI-Powered Error Correction", "Quantum Machine Learning", "Hybrid Cloud Architecture"],
      pricing: "Starting at $2,500/month",
      category: "AI & Quantum Computing",
      color: "from-cyan-500 to-purple-600"
    },
    {
      title: "AI Cybersecurity Platform",
      description: "Next-generation cybersecurity powered by artificial intelligence providing real-time threat detection and automated response.",
      icon: Shield,
      href: "/services/ai-cybersecurity-platform",
      features: ["AI-Powered Threat Detection", "Intelligent Incident Response", "Advanced Analytics & Reporting", "Zero Trust Architecture"],
      pricing: "Starting at $1,200/month",
      category: "AI & Security",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "AI Healthcare Platform",
      description: "Transform healthcare delivery with AI-powered diagnosis, predictive analytics, and personalized medicine solutions.",
      icon: Heart,
      href: "/services/ai-healthcare-platform",
      features: ["AI-Powered Diagnosis", "Predictive Analytics", "Medical Imaging AI", "Personalized Medicine"],
      pricing: "Starting at $800/month",
      category: "AI & Healthcare",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Intelligent supply chain optimization with AI-powered forecasting, route optimization, and real-time visibility.",
      icon: Truck,
      href: "/services/ai-supply-chain-optimization",
      features: ["AI-Powered Demand Forecasting", "Intelligent Route Optimization", "Real-time Supply Chain Visibility", "Automated Inventory Management"],
      pricing: "Starting at $1,500/month",
      category: "AI & Logistics",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const itServices = [
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment solutions for modern applications.",
      icon: Cloud,
      href: "/services/cloud-devops",
      features: ["Cloud Migration", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting"],
      pricing: "Starting at $2,000/month",
      category: "IT Infrastructure",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive digital transformation services to modernize your business operations.",
      icon: Rocket,
      href: "/services/digital-transformation",
      features: ["Process Automation", "Legacy System Modernization", "Change Management", "Digital Strategy"],
      pricing: "Starting at $5,000/month",
      category: "Business Transformation",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "IT Infrastructure",
      description: "Enterprise-grade IT infrastructure solutions for reliable and scalable operations.",
      icon: Cpu,
      href: "/services/it-infrastructure",
      features: ["Network Design", "Server Management", "Storage Solutions", "Backup & Recovery"],
      pricing: "Starting at $3,500/month",
      category: "IT Infrastructure",
      color: "from-gray-500 to-slate-600"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity services to protect your digital assets and ensure compliance.",
      icon: Lock,
      href: "/services/cybersecurity",
      features: ["Security Assessment", "Penetration Testing", "Compliance Management", "Security Training"],
      pricing: "Starting at $2,500/month",
      category: "Security",
      color: "from-red-500 to-pink-600"
    }
  ];

  const microSaasServices = [
    {
      title: "Micro CRM Platform",
      description: "Lightweight customer relationship management solution for small to medium businesses.",
      icon: Users,
      href: "/services/micro-crm",
      features: ["Contact Management", "Lead Tracking", "Sales Pipeline", "Reporting"],
      pricing: "Starting at $99/month",
      category: "Business Tools",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Employee Scheduling SaaS",
      description: "Intelligent employee scheduling and workforce management platform.",
      icon: Calendar,
      href: "/services/employee-scheduling-saas",
      features: ["Smart Scheduling", "Time Tracking", "Shift Management", "Compliance"],
      pricing: "Starting at $150/month",
      category: "HR & Operations",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Returns Management SaaS",
      description: "Streamlined returns and reverse logistics management solution.",
      icon: Package,
      href: "/services/returns-management-saas",
      features: ["Returns Processing", "Refund Management", "Analytics", "Customer Portal"],
      pricing: "Starting at $200/month",
      category: "E-commerce",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "SEO Auditor Tool",
      description: "Comprehensive SEO analysis and optimization platform for digital marketers.",
      icon: Search,
      href: "/services/seo-auditor",
      features: ["Technical SEO", "Content Analysis", "Competitor Research", "Ranking Tracking"],
      pricing: "Starting at $79/month",
      category: "Digital Marketing",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709"
  };

  const stats = [
    {
      value: "50+",
      label: "AI Solutions",
      description: "Cutting-edge artificial intelligence services"
    },
    {
      value: "25+",
      label: "IT Services",
      description: "Comprehensive technology solutions"
    },
    {
      value: "30+",
      label: "Micro SAAS",
      description: "Scalable software solutions"
    },
    {
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service delivery"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2025 | Zion Tech Group"
        description="Explore our complete portfolio of AI-powered solutions, IT services, and micro SAAS platforms. Transform your business with cutting-edge technology."
        keywords="AI services, IT services, micro SAAS, quantum computing, cybersecurity, healthcare AI, supply chain optimization"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of innovative AI-powered solutions, 
              enterprise IT services, and scalable micro SAAS platforms designed 
              to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 8 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary artificial intelligence services that transform industries and drive innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl mr-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <span className="text-sm text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-cyan-400 font-semibold">{service.pricing}</div>
                  <Link
                    to={service.href}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <Link
                  to={service.href}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 bg-gradient-to-r ${service.color} text-white hover:scale-105`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Enterprise IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions to modernize and optimize your business infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl mr-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <span className="text-sm text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-purple-400 font-semibold">{service.pricing}</div>
                  <Link
                    to={service.href}
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <Link
                  to={service.href}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 bg-gradient-to-r ${service.color} text-white hover:scale-105`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scalable software-as-a-service solutions designed for specific business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl mr-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <span className="text-sm text-green-400 bg-green-500/20 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-green-400 font-semibold">{service.pricing}</div>
                  <Link
                    to={service.href}
                    className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <Link
                  to={service.href}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 bg-gradient-to-r ${service.color} text-white hover:scale-105`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our comprehensive services can help you achieve your goals
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPinIcon className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
