import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, Shield, Cloud, Server, BarChart3, Users, ShoppingCart, 
  MessageCircle, HelpCircle, DollarSign, Target, TrendingUp, 
  Atom, Network, Eye, PenTool, Heart, Building, Truck, 
  Lock, Smartphone, Mail, Video, Satellite, Leaf, Code,
  Zap, Star, Rocket, Globe, Cpu, ArrowRight, FileText,
  CheckCircle, Clock, Users as UsersIcon, Zap as ZapIcon,
  Award, TrendingUp as TrendingUpIcon, Globe as GlobeIcon
} from 'lucide-react';

export default function InnovativeServicesLanding2025() {
  const featuredServices = [
    {
      name: "AI-Powered Legal Document Automation",
      description: "Revolutionary legal tech that reduces document creation time by 80% and ensures 99.9% compliance accuracy",
      price: "$299/month",
      category: "Legal Technology",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      benefits: ["80% faster document creation", "99.9% compliance accuracy", "40-60% cost reduction"]
    },
    {
      name: "Quantum-Enhanced Financial Trading",
      description: "Next-generation trading platform leveraging quantum computing for ultra-fast market analysis",
      price: "$2,499/month",
      category: "Financial Technology",
      icon: TrendingUpIcon,
      color: "from-green-500 to-emerald-500",
      benefits: ["35% increased accuracy", "50% risk reduction", "1000x faster computation"]
    },
    {
      name: "AI Autonomous Research Assistant",
      description: "Self-directed AI research platform that accelerates research by 500% across multiple domains",
      price: "$1,999/month",
      category: "Research & Development",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      benefits: ["500% research acceleration", "70% cost reduction", "24/7 research capability"]
    }
  ];

  const innovationHighlights = [
    {
      title: "Cutting-Edge AI",
      description: "Advanced artificial intelligence powered by the latest models including GPT-4, Claude, and custom neural networks",
      icon: Brain,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Quantum Computing",
      description: "Revolutionary quantum-classical hybrid platforms that solve previously impossible computational problems",
      icon: Atom,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Zero-Trust Security",
      description: "Next-generation cybersecurity implementing zero-trust architecture with AI-powered threat detection",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Edge Computing",
      description: "Advanced IoT platforms with edge computing capabilities for real-time data processing",
      icon: Network,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const marketStats = [
    { label: "Total Market Size", value: "$500B+", description: "Combined market opportunity" },
    { label: "Growth Rate", value: "25-35%", description: "Annual market growth" },
    { label: "ROI Potential", value: "200-500%", description: "Average customer ROI" },
    { label: "Global Reach", value: "150+", description: "Countries served" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Innovation Leader 2025
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Revolutionary Technology
              <br />
              <span className="text-white">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Zion Tech Group delivers cutting-edge micro SAAS, IT infrastructure, and AI services that transform businesses and drive unprecedented growth
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                to="/comprehensive-services-showcase-2025"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore All Services
              </Link>
              
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Innovation Consultation"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Innovation Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovation at Every Level
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services represent the cutting edge of technology, combining AI, quantum computing, blockchain, and emerging technologies to deliver unprecedented value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovationHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${highlight.color} flex items-center justify-center mx-auto mb-6`}>
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-400 text-center">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most innovative and impactful services that are transforming industries worldwide
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-center mb-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 rounded-full mb-4">
                    {service.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="text-3xl font-bold text-cyan-400 mb-6">
                    {service.price}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <Link
                  to="/comprehensive-services-showcase-2025"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another technology company - we're your innovation partner for the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Proven Innovation</h3>
              <p className="text-gray-400">
                Our services are built on cutting-edge research and proven technologies, delivering real results for businesses worldwide
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                <TrendingUpIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Measurable Results</h3>
              <p className="text-gray-400">
                Every service delivers quantifiable improvements: increased efficiency, reduced costs, and accelerated growth
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                <GlobeIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Expertise</h3>
              <p className="text-gray-400">
                Serving clients across 150+ countries with localized solutions and 24/7 support in multiple languages
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Lead the Innovation Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the elite group of businesses that are already transforming their operations with Zion Tech Group's revolutionary services
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Innovation Consultation Request"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Schedule Innovation Consultation
              </a>
              
              <Link
                to="/comprehensive-services-showcase-2025"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore All Services
              </Link>
            </div>

            <div className="bg-zion-slate-dark/50 rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-cyan-400 font-semibold">+1 302 464 0950</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-cyan-400 font-semibold">kleber@ziontechgroup.com</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-400 text-sm">Website</p>
                  <p className="text-cyan-400 font-semibold">ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-3">Address</h4>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}