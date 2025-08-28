import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Cloud,
  TrendingUp,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  PanelLeft,
  ShoppingCart,
  Settings,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Award,
  Clock,
  DollarSign,
  Search,
  Filter,
  Building,
  Factory,
  Car,
  Home,
  City,
  Leaf,
  Scale,
  Building2,
  Gauge,
  GitFork,
  Atom,
  Eye,
  Server,
  Smartphone,
  Truck
} from 'lucide-react';
import { SEO } from '../components/SEO';

const solutionCategories = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: Brain,
    description: 'Transform your business with intelligent automation and predictive insights',
    color: 'from-purple-500 to-indigo-600',
    solutions: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Systems',
      'Chatbots & Virtual Assistants',
      'Machine Learning Models'
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    description: 'Protect your digital assets with enterprise-grade security solutions',
    color: 'from-red-500 to-pink-600',
    solutions: [
      'Threat Detection & Response',
      'Identity & Access Management',
      'Security Compliance',
      'Penetration Testing',
      'Security Training',
      'Incident Response'
    ]
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    icon: Cloud,
    description: 'Scale your infrastructure with flexible and cost-effective cloud solutions',
    color: 'from-blue-500 to-cyan-600',
    solutions: [
      'Cloud Migration',
      'Infrastructure as Code',
      'Container Orchestration',
      'Serverless Computing',
      'Multi-cloud Strategy',
      'Cloud Security'
    ]
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    icon: TrendingUp,
    description: 'Turn your data into actionable insights for better decision making',
    color: 'from-green-500 to-emerald-600',
    solutions: [
      'Business Intelligence',
      'Data Warehousing',
      'Real-time Analytics',
      'Predictive Modeling',
      'Data Visualization',
      'Big Data Processing'
    ]
  },
  {
    id: 'iot-edge',
    name: 'IoT & Edge Computing',
    icon: Cpu,
    description: 'Connect and manage devices at the edge for real-time processing',
    color: 'from-orange-500 to-red-600',
    solutions: [
      'Device Management',
      'Edge Analytics',
      'Real-time Processing',
      'Sensor Networks',
      'Industrial IoT',
      'Smart Cities'
    ]
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3',
    icon: Lock,
    description: 'Build secure, transparent, and decentralized applications',
    color: 'from-emerald-500 to-teal-600',
    solutions: [
      'Smart Contracts',
      'DeFi Platforms',
      'NFT Marketplaces',
      'Supply Chain Tracking',
      'Identity Management',
      'Decentralized Apps'
    ]
  }
];

const industrySolutions = [
  {
    id: 'healthcare',
    name: 'Healthcare Solutions',
    icon: Heart,
    description: 'Transform healthcare delivery with AI-powered diagnostics and patient care',
    color: 'from-red-500 to-pink-600',
    features: [
      'AI Medical Imaging',
      'Predictive Diagnostics',
      'Patient Data Analytics',
      'Telemedicine Platforms',
      'Drug Discovery AI',
      'Healthcare Compliance'
    ],
    href: '/solutions/healthcare'
  },
  {
    id: 'financial',
    name: 'Financial Services',
    icon: DollarSign,
    description: 'Revolutionize financial operations with intelligent automation and risk management',
    color: 'from-emerald-500 to-green-600',
    features: [
      'AI Trading Platforms',
      'Risk Assessment',
      'Fraud Detection',
      'Customer Analytics',
      'Regulatory Compliance',
      'Process Automation'
    ],
    href: '/solutions/financial'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    description: 'Optimize production with smart manufacturing and predictive maintenance',
    color: 'from-blue-500 to-indigo-600',
    features: [
      'Predictive Maintenance',
      'Quality Control AI',
      'Supply Chain Optimization',
      'Production Analytics',
      'IoT Integration',
      'Energy Management'
    ],
    href: '/solutions/manufacturing'
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    description: 'Enhance customer experience with personalized recommendations and automation',
    color: 'from-purple-500 to-pink-600',
    features: [
      'Personalized Marketing',
      'Inventory Management',
      'Customer Analytics',
      'Chatbot Support',
      'Price Optimization',
      'Omnichannel Integration'
    ],
    href: '/solutions/retail'
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    icon: Building2,
    description: 'Modernize public services with secure, scalable technology solutions',
    color: 'from-slate-500 to-gray-600',
    features: [
      'Digital Transformation',
      'Cybersecurity',
      'Data Analytics',
      'Citizen Services',
      'Compliance Management',
      'Infrastructure Modernization'
    ],
    href: '/solutions/government'
  },
  {
    id: 'energy',
    name: 'Energy & Sustainability',
    icon: Leaf,
    description: 'Drive sustainability with green technology and energy optimization',
    color: 'from-green-500 to-emerald-600',
    features: [
      'Renewable Energy Management',
      'Smart Grid Solutions',
      'Energy Analytics',
      'Carbon Footprint Tracking',
      'Sustainability Reporting',
      'Green Building Tech'
    ],
    href: '/solutions/energy'
  }
];

const Solutions: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSolutions = industrySolutions.filter(solution =>
    selectedCategory === 'all' || solution.id === selectedCategory
  );

  const searchFilteredSolutions = filteredSolutions.filter(solution =>
    solution.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    solution.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Discover comprehensive technology solutions for every industry. From AI and cybersecurity to cloud computing and IoT, we deliver innovative solutions that drive business transformation."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Technology Solutions for
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Every Industry
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered solutions. 
              From healthcare to manufacturing, we deliver innovative technology that drives growth and efficiency.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search solutions by industry or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                All Solutions
              </button>
              {industrySolutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => setSelectedCategory(solution.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === solution.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                  }`}
                >
                  {solution.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed to address the unique challenges and opportunities of your industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchFilteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={solution.href}>
                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-slate-700/50 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/10 group-hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {solution.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Core Technology Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive technology stack covers every aspect of modern digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {category.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <ul className="space-y-2">
                  {category.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let our experts help you identify the perfect technology solutions for your industry and business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;