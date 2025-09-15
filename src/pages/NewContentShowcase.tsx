import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Star, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Globe,
  Cpu,
  Heart,
  Leaf,
  Car,
  Building,
  Scale,
  Factory,
  Atom,
  Target,
  BarChart3,
  Eye,
  Lock,
  Code,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  DollarSign,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  FileText,
  Video,
  Download,
  ExternalLink
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  href: string;
  price: string;
  category: string;
  color: string;
  featured?: boolean;
  new?: boolean;
}

interface ContentSection {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  color: string;
}

export default function NewContentShowcase() {
  const newServices: ServiceCard[] = [
    {
      title: "AI-Powered Legal Document Generator",
      description: "Automatically generate legal documents, contracts, and agreements with AI-powered templates and compliance checking",
      icon: Scale,
      features: ["Contract Generation", "Legal Compliance", "Template Library", "Risk Assessment"],
      href: "/services/ai-legal-document-generator",
      price: "$299/month",
      category: "Legal Tech",
      color: "from-blue-500 to-indigo-600",
      featured: true,
      new: true
    },
    {
      title: "AI Healthcare Diagnostics Platform",
      description: "Advanced medical AI that assists doctors with diagnostic imaging, patient analysis, and treatment recommendations",
      icon: Heart,
      features: ["Medical Imaging AI", "Diagnostic Support", "Patient Analysis", "Treatment Planning"],
      href: "/services/ai-healthcare-diagnostics",
      price: "$1,999/month",
      category: "Healthcare",
      color: "from-red-500 to-pink-600",
      featured: true,
      new: true
    },
    {
      title: "Blockchain Supply Chain Transparency",
      description: "End-to-end supply chain tracking and verification using blockchain technology for complete transparency",
      icon: Network,
      features: ["Supply Tracking", "Quality Verification", "Transparency Reports", "Smart Contracts"],
      href: "/services/blockchain-supply-chain-transparency",
      price: "$799/month",
      category: "Blockchain",
      color: "from-green-500 to-emerald-600",
      new: true
    },
    {
      title: "AI Financial Trading Platform",
      description: "Advanced algorithmic trading platform with AI-powered market analysis and automated trading strategies",
      icon: TrendingUp,
      features: ["Algorithmic Trading", "Market Analysis", "Risk Management", "Portfolio Optimization"],
      href: "/services/ai-financial-trading",
      price: "$2,499/month",
      category: "FinTech",
      color: "from-yellow-500 to-orange-600",
      featured: true,
      new: true
    },
    {
      title: "Quantum AI Cybersecurity Suite",
      description: "Next-generation cybersecurity powered by quantum computing and AI for ultra-secure protection",
      icon: Shield,
      features: ["Quantum Encryption", "AI Threat Detection", "Zero Trust Security", "Compliance Monitoring"],
      href: "/services/quantum-ai-cybersecurity",
      price: "$3,999/month",
      category: "Cybersecurity",
      color: "from-purple-500 to-violet-600",
      featured: true,
      new: true
    },
    {
      title: "Autonomous Vehicle Fleet Management",
      description: "Complete fleet management system for autonomous vehicles with AI-powered routing and optimization",
      icon: Car,
      features: ["Fleet Optimization", "Route Planning", "Vehicle Monitoring", "Predictive Maintenance"],
      href: "/services/autonomous-vehicle-fleet-management",
      price: "$1,299/month",
      category: "Transportation",
      color: "from-cyan-500 to-blue-600",
      new: true
    },
    {
      title: "Space Technology Optimization",
      description: "AI-powered satellite operations and space mission optimization for space agencies and private companies",
      icon: Rocket,
      features: ["Satellite Operations", "Mission Planning", "Space Analytics", "Orbital Mechanics"],
      href: "/services/space-technology-optimization",
      price: "$4,999/month",
      category: "Space Tech",
      color: "from-indigo-500 to-purple-600",
      featured: true,
      new: true
    },
    {
      title: "AI Green Technology Platform",
      description: "Sustainable technology solutions powered by AI for environmental monitoring and green energy optimization",
      icon: Leaf,
      features: ["Environmental Monitoring", "Energy Optimization", "Carbon Tracking", "Sustainability Reports"],
      href: "/services/ai-green-technology",
      price: "$899/month",
      category: "Green Tech",
      color: "from-green-400 to-teal-600",
      new: true
    }
  ];

  const contentSections: ContentSection[] = [
    {
      title: "AI Innovation Hub",
      description: "Explore our cutting-edge AI solutions and research",
      icon: Brain,
      href: "/ai-innovation-hub",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Blockchain Solutions",
      description: "Decentralized applications and Web3 technologies",
      icon: Network,
      href: "/blockchain-solutions",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions for complex problems",
      icon: Atom,
      href: "/quantum-computing",
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Metaverse Platform",
      description: "Build immersive virtual worlds and experiences",
      icon: Globe,
      href: "/metaverse-platform",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "IoT & Edge Computing",
      description: "Smart device networks and edge computing solutions",
      icon: Cpu,
      href: "/iot-edge-computing",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Digital Twin Technology",
      description: "Create digital replicas of physical systems",
      icon: Eye,
      href: "/digital-twin-technology",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  const stats = [
    { value: "50+", label: "New Services", icon: Rocket },
    { value: "99.9%", label: "Uptime", icon: Shield },
    { value: "24/7", label: "Support", icon: Users },
    { value: "500+", label: "Happy Clients", icon: Star }
  ];

  return (
    <>
      <SEO 
        title="New Content Showcase - Zion Tech Group"
        description="Discover our latest AI-powered solutions, cutting-edge technology platforms, and innovative services designed to transform your business."
        keywords="new AI services, cutting-edge technology, innovation, AI solutions, blockchain, quantum computing, metaverse"
      />
      
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4" />
                New Content Available
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
                Discover Our
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Latest Innovations
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
                Explore cutting-edge AI solutions, revolutionary technology platforms, and innovative services 
                designed to transform your business and drive unprecedented growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Explore All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  Get Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-lg font-semibold text-cyan-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Brand New AI Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover our latest AI-powered solutions that are revolutionizing industries 
                  and transforming business operations worldwide.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {newServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    {service.new && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        NEW
                      </div>
                    )}
                    {service.featured && (
                      <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        FEATURED
                      </div>
                    )}
                    
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-sm">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {service.category}
                      </span>
                      <p className="text-lg font-bold text-white">{service.price}</p>
                    </div>
                    
                    <Link
                      to={service.href}
                      className="inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Explore Our Content Hub
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Dive deep into our comprehensive technology solutions and innovative platforms 
                  across multiple domains.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={section.href}>
                    <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${section.color} mb-6`}>
                        <section.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {section.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6">
                        {section.description}
                      </p>
                      
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <span className="font-semibold">Explore Now</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
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
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies already using our AI-powered solutions to drive innovation and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us Today
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}