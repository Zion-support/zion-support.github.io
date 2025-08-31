import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  BarChart3,
  Code,
  Server,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  TrendingUp,
  Scale,
  Gauge,
  PenTool
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business transformation",
      icon: Brain,
      href: "/ai-services",
      count: 25,
      color: "from-cyan-400 to-blue-500",
      services: ["AI Business Intelligence", "Machine Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      name: "Cloud & DevOps",
      description: "Enterprise-grade cloud infrastructure and automated deployment solutions",
      icon: Cloud,
      href: "/services/cloud-devops",
      count: 18,
      color: "from-blue-400 to-indigo-500",
      services: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Serverless Architecture"]
    },
    {
      name: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and infrastructure",
      icon: Shield,
      href: "/services/cybersecurity",
      count: 22,
      color: "from-red-400 to-pink-500",
      services: ["Threat Detection", "Zero Trust Security", "Compliance Management", "Incident Response"]
    },
    {
      name: "Digital Transformation",
      description: "Strategic technology consulting and implementation guidance",
      icon: Zap,
      href: "/services/digital-transformation",
      count: 15,
      color: "from-yellow-400 to-orange-500",
      services: ["Process Automation", "Digital Strategy", "Change Management", "Technology Roadmap"]
    },
    {
      name: "IoT & Edge Computing",
      description: "Smart device networks and edge computing solutions",
      icon: Cpu,
      href: "/services/iot-edge",
      count: 20,
      color: "from-green-400 to-emerald-500",
      services: ["IoT Platforms", "Edge Analytics", "Device Management", "Smart Cities"]
    },
    {
      name: "Quantum Computing",
      description: "Next-generation quantum solutions for complex problem solving",
      icon: Atom,
      href: "/services/quantum-computing",
      count: 12,
      color: "from-purple-400 to-pink-500",
      services: ["Quantum Algorithms", "Quantum Security", "Quantum Simulation", "Quantum ML"]
    },
    {
      name: "AI Marketing & Content",
      description: "AI-powered content creation, marketing automation, and customer experience optimization",
      icon: PenTool,
      href: "/services/ai-content-marketing-studio",
      count: 15,
      color: "from-pink-400 to-rose-500",
      services: ["Content Generation", "Marketing Automation", "Customer Analytics", "SEO Optimization"]
    },
    {
      name: "DevOps & Automation",
      description: "Intelligent DevOps automation with AI-powered optimization and security",
      icon: Code,
      href: "/services/ai-devops-automation-platform",
      count: 18,
      color: "from-green-400 to-emerald-500",
      services: ["CI/CD Automation", "Infrastructure Management", "Security Scanning", "Performance Optimization"]
    },
    {
      name: "E-commerce Optimization",
      description: "AI-powered e-commerce optimization for maximum conversions and revenue",
      icon: ShoppingCart,
      href: "/services/ai-ecommerce-optimization-platform",
      count: 20,
      color: "from-orange-400 to-red-500",
      services: ["Product Recommendations", "Dynamic Pricing", "Inventory Management", "Customer Analytics"]
    }
  ];

  const featuredServices = [
    {
      title: "AI Autonomous Legal Research Platform",
      description: "Revolutionize legal research with AI-powered intelligence and 90% time savings",
      price: "From $199/month",
      features: ["AI-Powered Research", "Case Law Search", "Legal Analysis"],
      href: "/services/ai-autonomous-legal-research-platform",
      color: "from-blue-400 to-purple-500",
      popular: true
    },
    {
      title: "AI Autonomous Logistics Platform",
      description: "Transform logistics operations with 30% faster delivery and 25% cost reduction",
      price: "From $599/month",
      features: ["Route Optimization", "Fleet Management", "Supply Chain Visibility"],
      href: "/services/ai-autonomous-logistics-platform",
      color: "from-green-400 to-blue-500"
    },
    {
      title: "AI Autonomous Manufacturing Platform",
      description: "Revolutionize manufacturing with 40% faster production and 35% cost reduction",
      price: "From $799/month",
      features: ["Production Planning", "Quality Control", "Predictive Maintenance"],
      href: "/services/ai-autonomous-manufacturing-platform",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "AI Autonomous Research Assistant",
      description: "Accelerate research with 80% time savings and 95% accuracy rate",
      price: "From $99/month",
      features: ["Literature Review", "Data Analysis", "Report Generation"],
      href: "/services/ai-autonomous-research-assistant",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const aiServices = [
    {
      name: "AI-Cybersecurity-Platform",
      title: "AI Cybersecurity Platform",
      description: "Advanced AI-powered security solutions for enterprise protection",
      icon: Shield,
      href: "/services/AI-Cybersecurity-Platform",
      features: ["Threat Detection", "Zero Trust", "Compliance", "Incident Response"]
    },
    {
      name: "AI-Healthcare-Platform",
      title: "AI Healthcare Platform",
      description: "Revolutionary healthcare solutions powered by artificial intelligence",
      icon: Activity,
      href: "/services/AI-Healthcare-Platform",
      features: ["Diagnostics", "Patient Care", "Drug Discovery", "Medical Imaging"]
    },
    {
      name: "AI-Quantum-Hybrid-Platform",
      title: "AI Quantum Hybrid Platform",
      description: "Next-generation computing combining AI and quantum technologies",
      icon: Atom,
      href: "/services/AI-Quantum-Hybrid-Platform",
      features: ["Quantum ML", "Hybrid Algorithms", "Quantum Security", "Optimization"]
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and current technology landscape",
      icon: Search
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Our experts design a customized solution architecture",
      icon: Palette
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build and thoroughly test your solution",
      icon: Code
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Smooth deployment with ongoing support and maintenance",
      icon: Rocket
    }
  ];

  const benefits = [
    "Increase efficiency by 60%",
    "Reduce operational costs by 40%",
    "Improve customer satisfaction by 50%",
    "Accelerate time-to-market by 70%",
    "Enhance security posture by 80%",
    "Boost team productivity by 45%"
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", description: "AI-powered diagnostics and patient care" },
    { name: "Finance", icon: "💳", description: "Risk management and fraud detection" },
    { name: "Manufacturing", icon: "🏭", description: "Predictive maintenance and quality control" },
    { name: "Retail", icon: "🛍️", description: "Customer analytics and inventory optimization" },
    { name: "Technology", icon: "💻", description: "Software development and cloud solutions" },
    { name: "Government", icon: "🏛️", description: "Digital transformation and security" }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, Cloud & Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of AI, cloud, cybersecurity, and digital transformation services designed to accelerate your business growth." />
        <meta name="keywords" content="AI services, cloud solutions, cybersecurity, digital transformation, technology consulting, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                Comprehensive Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to transform your business and drive innovation 
                across every aspect of your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  View All Services
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology services designed to meet your every need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400">Services</span>
                      <span className="text-blue-400 font-semibold">{category.count}</span>
                    </div>
                    <div className="space-y-2">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={category.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Featured Services
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Our most popular solutions that are transforming businesses across industries.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border hover:border-blue-400/50 transition-all duration-300 ${
                    service.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-white/5 to-cyan-900/20' 
                      : 'border-white/10'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-center mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={service.href}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-zinc-700 text-white hover:bg-zinc-600'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Platforms</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our specialized AI platforms designed for specific industry needs and use cases.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Capabilities:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Explore Platform
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New Services 2026 Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4">
                <Rocket className="w-4 h-4 mr-2" />
                New in 2026
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Innovations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience our newest AI-powered solutions designed to revolutionize industries and drive unprecedented business growth.
              </p>
            </motion.div>

            <div className="text-center mb-12">
              <Link
                to="/innovative-services-showcase-2026"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Explore All New Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-zinc-800/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Proven results and measurable impact across all our service offerings.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-zinc-300 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Specialized solutions tailored to the unique challenges of your industry.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-sm text-zinc-400">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and maximum value for your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <div className="flex justify-center mb-4">
                    <step.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Guide Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Transparent</span> Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Get complete pricing information for all our revolutionary services. 
                Real market prices, proven ROI, and detailed comparisons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/comprehensive-pricing-guide-2033"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  View Complete Pricing Guide
                </Link>
                <Link
                  to="/innovative-services-showcase-2033"
                  className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how our innovative technology solutions can drive your success and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
