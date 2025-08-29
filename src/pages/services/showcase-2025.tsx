import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Rocket, 
  Brain, 
  Heart, 
  Shield, 
  Code, 
  Globe, 
  Leaf, 
  Atom, 
  Cpu,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Zap,
  Users,
  Target
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Showcase2025() {
  const featuredServices = [
    {
      title: "AI Business Intelligence",
      description: "Advanced machine learning and data science solutions",
      href: "/services/ai-business-intelligence",
      icon: Brain,
      color: "from-purple-500 to-cyan-500",
      badge: "Popular"
    },
    {
      title: "AI Healthcare Platform",
      description: "Medical AI and diagnostics solutions",
      href: "/services/ai-healthcare-platform",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      badge: "New"
    },
    {
      title: "AI Content Creation",
      description: "Content generation and optimization",
      href: "/services/ai-content-creation",
      icon: Code,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "AI Cybersecurity",
      description: "AI-powered security solutions",
      href: "/services/ai-cybersecurity",
      icon: Shield,
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Quantum Computing",
      description: "Quantum AI and optimization",
      href: "/services/quantum-computing",
      icon: Atom,
      color: "from-purple-500 to-pink-500",
      badge: "Cutting Edge"
    },
    {
      title: "IoT Edge Computing",
      description: "IoT and real-time processing",
      href: "/services/iot-edge-computing",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const innovativeServices = [
    {
      title: "Digital Twin Platform",
      description: "Digital twin solutions for various industries",
      href: "/services/digital-twin",
      icon: Globe,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Blockchain Web3 Platform",
      description: "Blockchain and Web3 solutions",
      href: "/services/blockchain-web3-platform",
      icon: Globe,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "AI Healthcare Diagnostics",
      description: "AI-powered medical diagnostics",
      href: "/services/ai-healthcare-diagnostics-platform",
      icon: Heart,
      color: "from-pink-500 to-red-500"
    },
    {
      title: "AI Education Platform",
      description: "AI-powered learning solutions",
      href: "/services/ai-education-platform",
      icon: Brain,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "AI Metaverse Platform",
      description: "AI metaverse solutions",
      href: "/services/ai-metaverse-platform",
      icon: Globe,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "AI Space Technology",
      description: "AI space solutions",
      href: "/services/ai-space-technology-platform",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const benefits = [
    "Cutting-edge AI and machine learning solutions",
    "Industry-specific expertise and customization",
    "Scalable and secure cloud infrastructure",
    "24/7 support and maintenance",
    "Proven track record of successful implementations",
    "Competitive pricing and flexible packages"
  ];

  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services & Banking",
    "Manufacturing & Industrial",
    "Retail & E-commerce",
    "Education & Training",
    "Government & Public Sector",
    "Energy & Utilities",
    "Transportation & Logistics"
  ];

  return (
    <>
      <SEO 
        title="2025 Services Showcase | Zion Tech Group"
        description="Explore our complete 2025 portfolio of cutting-edge AI, quantum computing, IoT, and digital transformation services."
        keywords="2025 services, ai services, quantum computing, iot solutions, digital transformation, zion tech group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                2025 Services Portfolio
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Complete
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> 2025</span>
                Portfolio
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive suite of cutting-edge AI, quantum computing, IoT, and digital transformation 
                services designed to propel your business into the future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Schedule Demo
                </Link>
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our most popular and innovative solutions for 2025
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    {service.badge && (
                      <span className="px-2 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-medium rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovative Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Innovative Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge technologies and platforms for tomorrow's challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    Explore Service
                    <ArrowRight className="ml-2 w-4 h-4" />
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
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover the advantages of partnering with us
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {benefits.slice(3).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions across diverse sectors
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 text-center hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{industry}</h3>
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our 2025 services can drive your success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}