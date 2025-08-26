import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Code, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Brain,
  Cpu,
  Database,
  Lock,
  Cloud,
  Zap,
  Rocket,
  Leaf,
  Eye,
  Bot,
  Globe2
} from 'lucide-react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Global Clients",
      description: "Serving businesses worldwide",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global presence",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Code,
      value: "1000+",
      label: "Projects",
      description: "Successfully delivered",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service",
      color: "from-orange-500 to-red-500"
    }
  ];

  const coreServices = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence services",
      icon: Brain,
      link: "/ai-services",
      color: "from-purple-500 to-pink-500",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions",
      icon: Cpu,
      link: "/quantum-tech",
      color: "from-blue-500 to-cyan-500",
      features: ["Quantum Algorithms", "Quantum Security", "Quantum Simulation"]
    },
    {
      title: "Blockchain Solutions",
      description: "Decentralized and secure applications",
      icon: Lock,
      link: "/blockchain",
      color: "from-green-500 to-emerald-500",
      features: ["Smart Contracts", "DeFi Platforms", "NFT Solutions"]
    },
    {
      title: "IoT & Edge Computing",
      description: "Connected world solutions",
      icon: Globe2,
      link: "/iot-solutions",
      color: "from-orange-500 to-red-500",
      features: ["Sensor Networks", "Edge AI", "Industrial IoT"]
    }
  ];

  const innovativeServices = [
    {
      title: "FinTech Solutions",
      description: "Digital banking, payments, and wealth management",
      icon: "💰",
      category: "Financial Technology",
      features: ["Digital Banking", "Payment Processing", "Risk Management"]
    },
    {
      title: "HealthTech Solutions",
      description: "Telemedicine, AI diagnostics, and health monitoring",
      icon: "🏥",
      category: "Healthcare Technology",
      features: ["AI Diagnostics", "Remote Monitoring", "Health Analytics"]
    },
    {
      title: "EdTech Solutions",
      description: "AI-powered learning and virtual classrooms",
      icon: "🎓",
      category: "Educational Technology",
      features: ["Adaptive Learning", "Virtual Reality", "Student Analytics"]
    },
    {
      title: "GreenTech Solutions",
      description: "Sustainability and energy management",
      icon: "🌱",
      category: "Environmental Technology",
      features: ["Energy Optimization", "Carbon Tracking", "Sustainable Tech"]
    },
    {
      title: "SpaceTech Solutions",
      description: "Satellite data and space mission planning",
      icon: "🚀",
      category: "Space Technology",
      features: ["Satellite Analytics", "Mission Planning", "Space Data"]
    },
    {
      title: "Robotics & Automation",
      description: "Industrial and service robotics",
      icon: "🤖",
      category: "Automation Technology",
      features: ["Industrial Robots", "Service Automation", "AI Robotics"]
    }
  ];

  const microSaasServices = [
    {
      title: "AI Content Generator",
      description: "Advanced AI-powered content creation",
      price: "From $79/month",
      features: ["Multi-language support", "SEO optimization", "Brand consistency", "Content analytics"],
      icon: "✍️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Smart Social Media Scheduler",
      description: "AI-powered social media management",
      price: "From $49/month",
      features: ["Multi-platform posting", "Optimal timing", "Analytics dashboard", "Content suggestions"],
      icon: "📱",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Invoice Automation Suite",
      description: "Automated invoice processing",
      price: "From $89/month",
      features: ["OCR scanning", "Approval workflows", "Payment tracking", "Financial reporting"],
      icon: "📄",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Project Management",
      description: "Intelligent project management",
      price: "From $129/month",
      features: ["Task prioritization", "Resource optimization", "Risk prediction", "Team collaboration"],
      icon: "📊",
      color: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Zion Tech Group
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pioneering the future with AI-powered solutions, quantum technology, blockchain, IoT, and innovative IT services
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                to="/services" 
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                aria-label="Explore our comprehensive technology services"
              >
                <span className="flex items-center justify-center">
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/contact" 
                className="group px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                aria-label="Get started with Zion Tech Group"
              >
                <span className="flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-black/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Core Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading-edge technology solutions that drive innovation and transformation
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70 hover:shadow-xl hover:shadow-cyan-500/10"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Innovative Solutions Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Innovative Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized technology solutions for emerging industries and cutting-edge applications
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {innovativeServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70 hover:shadow-xl hover:shadow-cyan-500/10"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-sm text-cyan-400 font-medium mb-4">{service.category}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Micro SaaS Showcase */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-deploy SaaS solutions that scale with your business needs
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {microSaasServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70 hover:shadow-xl hover:shadow-cyan-500/10"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`text-4xl mb-4 ${service.icon}`}></div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/services"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already leveraging our cutting-edge technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                aria-label="Explore all our technology services"
              >
                <span className="flex items-center justify-center">
                  Explore All Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/contact"
                className="group px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                aria-label="Contact us to get started"
              >
                <span className="flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
