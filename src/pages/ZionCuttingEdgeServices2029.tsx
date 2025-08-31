import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Rocket, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Database,
  Lock,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock,
  Atom,
  Satellite,
  Leaf,
  DollarSign,
  Target,
  Lightbulb,
  ShieldX,
  Globe2,
  CpuIcon,
  Network2,
  SmartphoneIcon,
  BarChart3Icon,
  CodeIcon,
  ServerIcon,
  ChipIcon,
  WifiIcon,
  ShieldCheckIcon,
  BotIcon,
  GitForkIcon,
  EyeIcon,
  SparklesIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  FileTextIcon,
  SearchIcon,
  ClockIcon,
  AtomIcon,
  SatelliteIcon,
  LeafIcon,
  DollarSignIcon,
  TargetIcon,
  LightbulbIcon,
  ShieldXIcon,
  Globe2Icon
} from 'lucide-react';

const ZionCuttingEdgeServices2029: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'space-tech', name: 'Space Technology', icon: Satellite },
    { id: 'sustainable', name: 'Sustainable Tech', icon: Leaf },
    { id: 'fintech', name: 'Financial Technology', icon: DollarSign },
    { id: 'micro-saas', name: 'Micro-SaaS', icon: Rocket }
  ];

  const cuttingEdgeServices = [
    // AI-Powered Micro SAAS Services
    {
      category: 'ai',
      icon: Brain,
      title: "AI Autonomous Business Operations Platform",
      description: "Complete business automation with AI agents handling customer service, sales, marketing, and operations 24/7.",
      features: [
        "AI Customer Service Agents",
        "Automated Sales Pipeline Management", 
        "Intelligent Marketing Campaigns",
        "Real-time Business Analytics",
        "Multi-language Support",
        "Integration with 100+ Business Tools"
      ],
      pricing: "$2,999 - $12,999/month",
      marketPrice: "$5,000 - $25,000/month",
      benefits: [
        "Reduce operational costs by 60%",
        "24/7 customer support availability",
        "Scalable business operations",
        "Data-driven decision making"
      ],
      color: "from-purple-500 to-pink-500",
      featured: true,
      href: "/services/ai-autonomous-business-operations",
      learnMoreUrl: "https://ziontechgroup.com/services/ai-autonomous-business-operations"
    },
    {
      category: 'ai',
      icon: Brain,
      title: "AI-Powered Content Creation Studio Pro",
      description: "Enterprise-grade content creation platform with AI writing, video production, and multi-channel distribution.",
      features: [
        "GPT-4 & Claude 3.5 Integration",
        "Video Content Generation",
        "Multi-language Content Creation",
        "SEO Optimization Engine",
        "Content Calendar Management",
        "Performance Analytics Dashboard"
      ],
      pricing: "$1,999 - $8,999/month",
      marketPrice: "$3,000 - $15,000/month",
      benefits: [
        "10x faster content production",
        "Multi-language market expansion",
        "SEO-optimized content automatically",
        "ROI tracking and analytics"
      ],
      color: "from-blue-500 to-cyan-500",
      featured: true,
      href: "/services/ai-content-creation-suite",
      learnMoreUrl: "https://ziontechgroup.com/services/ai-content-creation-suite"
    },
    {
      category: 'ai',
      icon: Brain,
      title: "AI Financial Trading & Risk Management Platform",
      description: "Advanced AI-powered trading platform with real-time market analysis, risk assessment, and automated trading strategies.",
      features: [
        "Real-time Market Data Analysis",
        "AI-Powered Trading Signals",
        "Risk Management Algorithms",
        "Portfolio Optimization",
        "Compliance Monitoring",
        "Performance Analytics"
      ],
      pricing: "$4,999 - $19,999/month",
      marketPrice: "$8,000 - $30,000/month",
      benefits: [
        "Automated trading strategies",
        "Real-time risk monitoring",
        "Regulatory compliance",
        "Performance optimization"
      ],
      color: "from-green-500 to-emerald-500",
      featured: true,
      href: "/services/ai-financial-trading",
      learnMoreUrl: "https://ziontechgroup.com/services/ai-financial-trading"
    },

    // Quantum Computing Solutions
    {
      category: 'quantum',
      icon: Atom,
      title: "Quantum AI Hybrid Computing Platform",
      description: "Revolutionary platform combining quantum computing with AI for solving complex optimization problems.",
      features: [
        "1000+ Qubit Quantum Access",
        "AI-Quantum Hybrid Algorithms",
        "Real-time Problem Solving",
        "Cloud-based Quantum Computing",
        "Quantum-Safe Cryptography",
        "Global Quantum Network Access"
      ],
      pricing: "$8,999 - $45,999/month",
      marketPrice: "$15,000 - $75,000/month",
      benefits: [
        "Solve previously impossible problems",
        "Quantum advantage in optimization",
        "Future-proof cryptography",
        "Global quantum network access"
      ],
      color: "from-indigo-500 to-purple-500",
      featured: true,
      href: "/services/ai-quantum-hybrid-platform",
      learnMoreUrl: "https://ziontechgroup.com/services/ai-quantum-hybrid-platform"
    },
    {
      category: 'quantum',
      icon: Atom,
      title: "Quantum Machine Learning Studio",
      description: "Advanced quantum machine learning platform for drug discovery, materials science, and complex simulations.",
      features: [
        "Quantum Neural Networks",
        "Quantum Feature Selection",
        "Hybrid Classical-Quantum Algorithms",
        "Drug Discovery Simulations",
        "Materials Science Modeling",
        "Quantum Chemistry Calculations"
      ],
      pricing: "$6,999 - $29,999/month",
      marketPrice: "$12,000 - $50,000/month",
      benefits: [
        "Accelerate scientific discoveries",
        "Quantum advantage in ML",
        "Advanced simulation capabilities",
        "Research collaboration platform"
      ],
      color: "from-cyan-500 to-blue-500",
      featured: true,
      href: "/services/ai-quantum-machine-learning",
      learnMoreUrl: "https://ziontechgroup.com/services/ai-quantum-machine-learning"
    },

    // Advanced Cybersecurity Services
    {
      category: 'cybersecurity',
      icon: Shield,
      title: "AI-Powered Zero Trust Security Platform",
      description: "Next-generation cybersecurity platform with AI threat detection, zero trust architecture, and automated response.",
      features: [
        "AI Threat Detection & Response",
        "Zero Trust Network Architecture",
        "Behavioral Analytics",
        "Automated Incident Response",
        "Compliance Management",
        "Real-time Security Monitoring"
      ],
      pricing: "$3,999 - $18,999/month",
      marketPrice: "$6,000 - $25,000/month",
      benefits: [
        "99.9% threat detection rate",
        "Automated security response",
        "Zero trust security model",
        "Regulatory compliance"
      ],
      color: "from-red-500 to-orange-500",
      featured: true,
      href: "/services/ai-cybersecurity-platform",
      learnMoreUrl: "https://ziontechgroup.com/services/ai-cybersecurity-platform"
    },
    {
      category: 'cybersecurity',
      icon: Shield,
      title: "Quantum-Safe Cryptography Platform",
      description: "Future-proof cryptography platform preparing for post-quantum computing era with advanced encryption algorithms.",
      features: [
        "Post-Quantum Cryptography",
        "Quantum Key Distribution",
        "Hybrid Encryption Systems",
        "Cryptographic Agility",
        "Compliance Frameworks",
        "Migration Tools"
      ],
      pricing: "$2,999 - $14,999/month",
      marketPrice: "$5,000 - $20,000/month",
      benefits: [
        "Future-proof security",
        "Quantum-resistant encryption",
        "Regulatory compliance",
        "Easy migration path"
      ],
      color: "from-orange-500 to-red-500",
      featured: true,
      href: "/services/quantum-safe-cryptography",
      learnMoreUrl: "https://ziontechgroup.com/services/quantum-safe-cryptography"
    },

    // Space Technology Services
    {
      category: 'space-tech',
      icon: Satellite,
      title: "Space Technology Innovation Platform",
      description: "Cutting-edge platform for space technology development, satellite operations, and space data analytics.",
      features: [
        "Satellite Mission Planning",
        "Space Data Analytics",
        "Orbital Mechanics Calculations",
        "Space Weather Monitoring",
        "Satellite Communication Systems",
        "Space Debris Tracking"
      ],
      pricing: "$5,999 - $24,999/month",
      marketPrice: "$10,000 - $40,000/month",
      benefits: [
        "Access to space technology",
        "Satellite data insights",
        "Space mission support",
        "Innovation collaboration"
      ],
      color: "from-violet-500 to-purple-500",
      featured: true,
      href: "/services/space-tech",
      learnMoreUrl: "https://ziontechgroup.com/services/space-tech"
    },

    // Sustainable Technology Solutions
    {
      category: 'sustainable',
      icon: Leaf,
      title: "AI-Powered Sustainability Analytics Platform",
      description: "Comprehensive sustainability platform with AI-driven environmental impact analysis and optimization recommendations.",
      features: [
        "Carbon Footprint Tracking",
        "Energy Efficiency Optimization",
        "Sustainable Supply Chain Analysis",
        "ESG Compliance Monitoring",
        "Green Technology Recommendations",
        "Sustainability Reporting"
      ],
      pricing: "$2,499 - $11,999/month",
      marketPrice: "$4,000 - $18,000/month",
      benefits: [
        "Reduce environmental impact",
        "Cost savings through efficiency",
        "ESG compliance",
        "Brand reputation enhancement"
      ],
      color: "from-green-500 to-teal-500",
      featured: true,
      href: "/services/ai-sustainable-technology",
      learnMoreUrl: "https://ziontechgroup.com/services/ai-sustainable-technology"
    },

    // Financial Technology Solutions
    {
      category: 'fintech',
      icon: DollarSign,
      title: "AI Financial Operations & Compliance Platform",
      description: "Comprehensive financial platform with AI-powered operations, compliance monitoring, and risk management.",
      features: [
        "AI Financial Analysis",
        "Regulatory Compliance Monitoring",
        "Risk Assessment & Management",
        "Fraud Detection",
        "Financial Reporting",
        "Audit Trail Management"
      ],
      pricing: "$3,499 - $16,999/month",
      marketPrice: "$6,000 - $25,000/month",
      benefits: [
        "Automated compliance",
        "Risk reduction",
        "Operational efficiency",
        "Regulatory compliance"
      ],
      color: "from-emerald-500 to-green-500",
      featured: true,
      href: "/services/ai-financial-analytics",
      learnMoreUrl: "https://ziontechgroup.com/services/ai-financial-analytics"
    },

    // Micro-SaaS Solutions
    {
      category: 'micro-saas',
      icon: Rocket,
      title: "Micro-SaaS Launch & Scale Platform",
      description: "Complete platform for launching, scaling, and monetizing micro-SaaS businesses with proven templates and automation.",
      features: [
        "Rapid SaaS Launch Templates",
        "Built-in Payment Processing",
        "Multi-tenant Architecture",
        "AI-Powered Analytics",
        "Marketing Automation",
        "Customer Success Tools"
      ],
      pricing: "$1,999 - $9,999/month",
      marketPrice: "$3,000 - $15,000/month",
      benefits: [
        "Faster time to market",
        "Proven business models",
        "Scalable architecture",
        "Automated operations"
      ],
      color: "from-yellow-500 to-orange-500",
      featured: true,
      href: "/services/micro-saas-solutions",
      learnMoreUrl: "https://ziontechgroup.com/services/micro-saas-solutions"
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? cuttingEdgeServices 
    : cuttingEdgeServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                2029 Cutting-Edge Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with the most advanced AI, Quantum Computing, and Space Technology solutions. 
              Leading the future of technology innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Today
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                service.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Our Pricing:</span>
                  <span className="text-sm text-gray-400">Market Average:</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-400">{service.pricing}</span>
                  <span className="text-lg font-bold text-blue-400">{service.marketPrice}</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  *Competitive pricing with premium features
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={service.href}
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Learn More
                </a>
                <a
                  href={service.learnMoreUrl}
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 text-sm"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Visit
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contact Zion Tech Group today to discuss how our cutting-edge services can revolutionize your operations, 
            enhance security, and drive innovation in your industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Address</h4>
                  <p className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Globe className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">Website</h4>
                  <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    https://ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg">
              <h4 className="text-white font-semibold mb-3">Why Choose Zion Tech Group?</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Industry-leading AI and Quantum Computing expertise</li>
                <li>• Proven track record of successful implementations</li>
                <li>• 24/7 technical support and maintenance</li>
                <li>• Competitive pricing with premium features</li>
                <li>• Global network of technology partners</li>
                <li>• Future-proof technology solutions</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Request a Consultation</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Service Interest</label>
                <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select a service category</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="quantum">Quantum Computing</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="space-tech">Space Technology</option>
                  <option value="sustainable">Sustainable Technology</option>
                  <option value="fintech">Financial Technology</option>
                  <option value="micro-saas">Micro-SaaS Solutions</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Lead the Future of Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the companies already transforming their operations with Zion Tech Group's cutting-edge solutions. 
              The future is here, and it's powered by AI, Quantum Computing, and Space Technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ZionCuttingEdgeServices2029;