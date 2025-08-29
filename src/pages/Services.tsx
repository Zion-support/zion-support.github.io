import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Globe, 
  Cpu, 
  Zap, 
  Rocket, 
  Heart, 
  Scale, 
  PenTool, 
  Users, 
  Target, 
  TrendingUp, 
  Lock, 
  Server, 
  Smartphone, 
  Atom,
  Leaf,
  Building,
  Car,
  Factory,
  City,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Flame,
  Crown,
  Infinity,
  Gauge,
  GitFork,
  BarChart3,
  Eye,
  Network,
  Clock,
  ShoppingCart,
  FileText,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Building2,
  Home,
  Play
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      icon: Brain,
      description: 'Advanced machine learning and data science solutions',
      features: ['Predictive Analytics', 'Machine Learning Models', 'Data Visualization', 'Business Insights'],
      color: 'from-purple-500 to-cyan-500'
    },
    {
      id: 'ai-healthcare',
      title: 'AI Healthcare Diagnostics',
      icon: Heart,
      description: 'Medical AI and diagnostic solutions',
      features: ['Medical Image Analysis', 'Patient Data Analytics', 'Diagnostic Support', 'Treatment Planning'],
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'ai-legal-tech',
      title: 'AI Legal Tech Platform',
      icon: Scale,
      description: 'Legal document analysis and automation',
      features: ['Document Review', 'Contract Analysis', 'Legal Research', 'Compliance Monitoring'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'ai-research',
      title: 'AI Research & Discovery',
      icon: Atom,
      description: 'Research automation and discovery platforms',
      features: ['Literature Review', 'Data Mining', 'Hypothesis Generation', 'Research Automation'],
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'ai-green-tech',
      title: 'AI Green Technology',
      icon: Leaf,
      description: 'Sustainable technology solutions',
      features: ['Energy Optimization', 'Carbon Footprint Analysis', 'Sustainable Supply Chain', 'Green Infrastructure'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ai-metaverse',
      title: 'AI Metaverse Platform',
      icon: Globe,
      description: 'Virtual reality and metaverse solutions',
      features: ['3D Environment Creation', 'Avatar Management', 'Virtual Events', 'Digital Assets'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-space-tech',
      title: 'AI Space Technology',
      icon: Rocket,
      description: 'Space exploration and satellite technology',
      features: ['Satellite Operations', 'Space Debris Tracking', 'Astronomical Analysis', 'Space Mission Planning'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-fintech',
      title: 'AI FinTech Platform',
      icon: TrendingUp,
      description: 'Financial technology and trading solutions',
      features: ['Algorithmic Trading', 'Risk Assessment', 'Fraud Detection', 'Portfolio Management'],
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'ai-supply-chain',
      title: 'AI Supply Chain',
      icon: Car,
      description: 'Supply chain optimization and management',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai-qa',
      title: 'AI Quality Assurance',
      icon: CheckCircle,
      description: 'Quality control and testing automation',
      features: ['Automated Testing', 'Quality Monitoring', 'Defect Detection', 'Performance Testing'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation',
      icon: Target,
      description: 'Marketing campaign automation and optimization',
      features: ['Campaign Management', 'Customer Segmentation', 'A/B Testing', 'ROI Optimization'],
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support',
      icon: Users,
      description: 'Intelligent customer service solutions',
      features: ['Chatbot Support', 'Ticket Routing', 'Knowledge Base', 'Customer Analytics'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'ai-hr',
      title: 'AI HR & Recruitment',
      icon: Users,
      description: 'Human resources and recruitment automation',
      features: ['Resume Screening', 'Candidate Matching', 'Performance Analytics', 'Employee Engagement'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-content-creation',
      title: 'AI Content Creation',
      icon: PenTool,
      description: 'Content generation and optimization',
      features: ['Text Generation', 'Content Optimization', 'SEO Enhancement', 'Multimedia Creation'],
      color: 'from-blue-500 to-green-500'
    },
    {
      id: 'zero-trust-security',
      title: 'Zero Trust Security',
      icon: Shield,
      description: 'Advanced cybersecurity solutions',
      features: ['Identity Verification', 'Access Control', 'Threat Detection', 'Security Monitoring'],
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'ai-ethics-guardian',
      title: 'AI Ethics & Governance',
      icon: ShieldCheck,
      description: 'AI ethics and compliance solutions',
      features: ['Bias Detection', 'Compliance Monitoring', 'Ethical Guidelines', 'Audit Trails'],
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      icon: Lock,
      description: 'Comprehensive security services',
      features: ['Network Security', 'Endpoint Protection', 'Incident Response', 'Security Training'],
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Cloud infrastructure and DevOps services',
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      icon: BarChart3,
      description: 'Data analysis and business intelligence',
      features: ['Data Processing', 'Statistical Analysis', 'Reporting Dashboards', 'Data Visualization'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      icon: Server,
      description: 'IT infrastructure and management',
      features: ['Network Design', 'Server Management', 'Storage Solutions', 'Backup & Recovery'],
      color: 'from-gray-500 to-blue-500'
    },
    {
      id: 'digital-twin',
      title: 'Digital Twin Solutions',
      icon: Globe2,
      description: 'Digital twin and simulation platforms',
      features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Simulation Analysis'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'iot-edge',
      title: 'IoT & Edge Computing',
      icon: Cpu,
      description: 'Internet of Things and edge computing',
      features: ['Sensor Networks', 'Edge Processing', 'Real-time Analytics', 'Device Management'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'blockchain',
      title: 'Blockchain & Web3',
      icon: GitFork,
      description: 'Blockchain and decentralized solutions',
      features: ['Smart Contracts', 'DeFi Platforms', 'NFT Marketplaces', 'DApp Development'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Atom,
      description: 'Quantum computing and algorithms',
      features: ['Quantum Algorithms', 'Cryptography', 'Optimization Problems', 'Quantum Simulation'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      icon: Settings,
      description: 'Business process automation',
      features: ['Process Mapping', 'Automation Design', 'Integration', 'Monitoring'],
      color: 'from-blue-500 to-green-500'
    },
    {
      id: 'ai-project-management',
      title: 'AI Project Management',
      icon: Target,
      description: 'Intelligent project management',
      features: ['Task Automation', 'Resource Optimization', 'Risk Assessment', 'Progress Tracking'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-sales-intelligence',
      title: 'AI Sales Intelligence',
      icon: TrendingUp,
      description: 'Sales optimization and intelligence',
      features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Performance Analytics'],
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'ai-innovation-management',
      title: 'AI Innovation Management',
      icon: Sparkles,
      description: 'Innovation and R&D management',
      features: ['Idea Management', 'Innovation Tracking', 'Collaboration Tools', 'Success Metrics'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const featuredServices = [
    {
      id: 'quantum-ai-trading',
      title: 'Quantum AI Trading Platform',
      icon: Atom,
      description: 'Revolutionary quantum computing-powered trading platform',
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Platform',
      icon: Brain,
      description: 'Next-generation brain-computer interface technology',
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      id: 'holographic-workspace',
      title: 'Holographic Workspace Platform',
      icon: Eye,
      description: 'Immersive 3D workspace environments',
      color: 'from-green-500 to-emerald-500',
      featured: true
    },
    {
      id: 'biodigital-twin',
      title: 'BioDigital Twin Platform',
      icon: Heart,
      description: 'Digital replicas of biological systems',
      color: 'from-red-500 to-pink-500',
      featured: true
    },
    {
      id: 'space-debris-tracking',
      title: 'Space Debris Tracking System',
      icon: Rocket,
      description: 'Advanced space debris monitoring and analysis',
      color: 'from-indigo-500 to-purple-500',
      featured: true
    },
    {
      id: 'metaverse-builder',
      title: 'Metaverse Builder Platform',
      icon: Globe,
      description: 'Create and manage virtual worlds',
      color: 'from-purple-500 to-pink-500',
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Revolutionary AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions. From quantum computing to neural interfaces, 
              we deliver the future of technology today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the cutting edge of technology with our most advanced AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 border border-${service.color.split('-')[1]}-500/20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium">
                      <Star className="w-4 h-4" />
                      Featured
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive range of AI-powered solutions across all industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {service.features.length} features
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl p-12 border border-slate-600/50">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Our AI solutions are designed to 
                drive innovation, efficiency, and growth across all industries.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/request-quote"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Your Quote
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
                >
                  Contact Our Team
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 font-semibold rounded-xl transition-all duration-300"
                >
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
