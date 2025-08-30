import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Globe, 
  Cpu, 
  Database, 
  Workflow,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Grid3X3,
  List
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from "../data/innovativeMicroSaasServices2025";

<<<<<<< HEAD
const InnovativeServicesShowcase2025: React.FC = () => {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'price' | 'innovation' | 'roi'>('innovation');

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3 },
    { id: 'AI & Business Intelligence', name: 'AI & BI', icon: Brain },
    { id: 'AI & Customer Experience', name: 'AI & CX', icon: Users },
    { id: 'AI & Finance', name: 'AI & Finance', icon: TrendingUp },
    { id: 'AI & Logistics', name: 'AI & Logistics', icon: Globe },
    { id: 'AI & Marketing', name: 'AI & Marketing', icon: BarChart3 },
    { id: 'AI & Project Management', name: 'AI & PM', icon: Workflow },
    { id: 'AI & Human Resources', name: 'AI & HR', icon: Users },
    { id: 'AI & Cybersecurity', name: 'AI & Security', icon: Shield },
    { id: 'AI & Data Management', name: 'AI & Data', icon: Database },
    { id: 'AI & Business Process', name: 'AI & Process', icon: Cpu },
=======
export default function InnovativeServicesShowcase2025() {
  const services = [
    {
      id: 'ai-workflow-orchestrator',
      title: 'AI Workflow Orchestrator',
      description: 'Intelligent workflow automation that learns, optimizes, and orchestrates complex business processes with AI-powered decision making.',
      icon: Brain,
      price: 'From $299/month',
      features: [
        'AI-powered workflow automation and orchestration',
        'Intelligent process optimization and decision making',
        'Real-time workflow monitoring and analytics',
        'Multi-platform integration and API management'
      ],
      benefits: [
        'Reduce manual workflow processing by 85%',
        'Improve process efficiency by 60%',
        'Cut operational costs by 40%'
      ],
      path: '/services/ai-workflow-orchestrator',
      category: 'AI & Automation'
    },
    {
      id: 'ai-data-governance-platform',
      title: 'AI Data Governance Platform',
      description: 'Intelligent data governance that automatically discovers, classifies, and protects your data while ensuring full regulatory compliance.',
      icon: Database,
      price: 'From $499/month',
      features: [
        'AI-powered data discovery and classification',
        'Automated data quality assessment and monitoring',
        'Intelligent data lineage tracking and visualization',
        'Advanced data privacy and compliance automation'
      ],
      benefits: [
        'Ensure 100% regulatory compliance (GDPR, CCPA, HIPAA)',
        'Reduce data governance costs by 50%',
        'Improve data quality by 80%'
      ],
      path: '/services/ai-data-governance-platform',
      category: 'AI & Data'
    },
    {
      id: 'ai-customer-experience-analytics',
      title: 'AI Customer Experience Analytics',
      description: 'Transform customer insights into actionable intelligence with AI-powered analytics that predict, optimize, and enhance every customer interaction.',
      icon: Users,
      price: 'From $399/month',
      features: [
        'AI-powered customer journey mapping and analysis',
        'Real-time sentiment analysis and emotion detection',
        'Predictive customer behavior modeling',
        'Automated customer feedback collection and analysis'
      ],
      benefits: [
        'Increase customer satisfaction scores by 45%',
        'Reduce customer churn by 60%',
        'Improve customer lifetime value by 35%'
      ],
      path: '/services/ai-customer-experience-analytics',
      category: 'AI & Analytics'
    },
    {
      id: 'ai-supply-chain-optimization',
      title: 'AI Supply Chain Optimization',
      description: 'Revolutionize your supply chain with AI-powered optimization that predicts demand, optimizes inventory, and streamlines logistics for maximum efficiency.',
      icon: Truck,
      price: 'From $599/month',
      features: [
        'AI-powered demand forecasting and inventory optimization',
        'Real-time supply chain monitoring and risk assessment',
        'Intelligent route optimization and logistics planning',
        'Automated supplier performance analysis and scoring'
      ],
      benefits: [
        'Reduce supply chain costs by 25-40%',
        'Improve inventory accuracy by 90%',
        'Reduce lead times by 30-50%'
      ],
      path: '/services/ai-supply-chain-optimization',
      category: 'AI & Logistics'
    },
    {
      id: 'ai-financial-risk-management',
      title: 'AI Financial Risk Management',
      description: 'Intelligent financial risk management that automatically detects, assesses, and mitigates risks while ensuring regulatory compliance and optimizing returns.',
      icon: Shield,
      price: 'From $799/month',
      features: [
        'AI-powered credit risk assessment and scoring',
        'Real-time market risk monitoring and alerts',
        'Intelligent fraud detection and prevention',
        'Advanced portfolio risk analysis and optimization'
      ],
      benefits: [
        'Reduce credit losses by 40-60%',
        'Improve risk-adjusted returns by 25%',
        'Detect fraud with 99.5% accuracy'
      ],
      path: '/services/ai-financial-risk-management',
      category: 'AI & Finance'
    },
    {
      id: 'ai-hr-talent-acquisition',
      title: 'AI HR Talent Acquisition',
      description: 'Revolutionize your hiring process with AI-powered talent acquisition that finds, screens, and matches the perfect candidates for your organization.',
      icon: Briefcase,
      price: 'From $299/month',
      features: [
        'AI-powered candidate sourcing and matching',
        'Intelligent resume parsing and skill extraction',
        'Automated candidate screening and assessment',
        'Predictive candidate success modeling'
      ],
      benefits: [
        'Reduce time-to-hire by 60%',
        'Improve candidate quality by 45%',
        'Reduce recruitment costs by 40%'
      ],
      path: '/services/ai-hr-talent-acquisition',
      category: 'AI & HR'
    },
    {
      id: 'ai-iot-edge-computing',
      title: 'AI IoT Edge Computing',
      description: 'Transform your IoT infrastructure with AI-powered edge computing that processes data locally, reduces latency, and enables real-time intelligent decision making.',
      icon: Cpu,
      price: 'From $499/month',
      features: [
        'AI-powered edge computing and processing',
        'Real-time IoT device management and monitoring',
        'Intelligent edge analytics and decision making',
        'Advanced device connectivity and protocol support'
      ],
      benefits: [
        'Reduce latency by 80-90%',
        'Lower bandwidth costs by 60%',
        'Improve device reliability by 75%'
      ],
      path: '/services/ai-iot-edge-computing',
      category: 'AI & IoT'
    },
    {
      id: 'ai-predictive-maintenance',
      title: 'AI Predictive Maintenance',
      description: 'Transform your maintenance operations with AI-powered predictive maintenance that prevents failures, reduces downtime, and optimizes equipment performance.',
      icon: Wrench,
      price: 'From $399/month',
      features: [
        'AI-powered equipment health monitoring and analysis',
        'Real-time predictive maintenance scheduling',
        'Intelligent failure prediction and prevention',
        'Advanced sensor data analysis and processing'
      ],
      benefits: [
        'Reduce unplanned downtime by 70-90%',
        'Lower maintenance costs by 25-40%',
        'Extend equipment lifespan by 20-30%'
      ],
      path: '/services/ai-predictive-maintenance',
      category: 'AI & Maintenance'
    },
    {
      id: 'ai-sustainable-technology',
      title: 'AI Sustainable Technology',
      description: 'Transform your organization into a sustainability leader with AI-powered technology that optimizes energy, reduces waste, and minimizes environmental impact.',
      icon: Leaf,
      price: 'From $299/month',
      features: [
        'AI-powered energy consumption optimization',
        'Real-time sustainability monitoring and reporting',
        'Intelligent carbon footprint tracking and reduction',
        'Advanced waste management and recycling optimization'
      ],
      benefits: [
        'Reduce energy consumption by 25-40%',
        'Lower carbon footprint by 30-50%',
        'Improve resource efficiency by 35%'
      ],
      path: '/services/ai-sustainable-technology',
      category: 'AI & Sustainability'
    },
    {
      id: 'ai-quantum-machine-learning',
      title: 'AI Quantum Machine Learning',
      description: 'Revolutionize your computational capabilities with AI-powered quantum machine learning that solves previously impossible problems and accelerates innovation.',
      icon: Atom,
      price: 'From $1,999/month',
      features: [
        'Quantum-enhanced machine learning algorithms',
        'Hybrid quantum-classical computing solutions',
        'Advanced quantum neural network optimization',
        'Real-time quantum algorithm execution'
      ],
      benefits: [
        'Solve complex problems 100x faster than classical computing',
        'Improve machine learning accuracy by 40-60%',;
        'Enable previously impossible computational tasks';
      ],;
      path: '/services/ai-quantum-machine-learning',;
      category: 'AI & Quantum Computing';
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  ];

  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2025
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'innovation':
          return a.innovationLevel === 'Revolutionary' ? -1 : 1;
        case 'roi':
          return parseInt(a.roi.split('-')[0]) - parseInt(b.roi.split('-')[0]);
        default:
          return 0;
      }
    });

  const getInnovationColor = (level: string) => {
    switch (level) {
      case 'Revolutionary':;
        return 'text-purple-600 bg-purple-100';
      case 'Advanced':
        return 'text-blue-600 bg-blue-100';
      case 'Cutting-edge':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getROIColor = (roi: string) => {;
    const minROI = parseInt(roi.split('-')[0]);
    if (minROI >= 500) return 'text-green-600 bg-green-100';
    if (minROI >= 300) return 'text-blue-600 bg-blue-100';
    if (minROI >= 200) return 'text-yellow-600 bg-yellow-100';
    return 'text-gray-600 bg-gray-100';
  };

  return (
<<<<<<< HEAD
    <div className = "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            className="text-center"
=======
    <div className = "min-h-screen bg-white">
      <SEO 
        title="Innovative AI Services Showcase 2025 - Zion Tech Group"
        description="Discover our cutting-edge AI-powered micro SAAS services and solutions. From workflow orchestration to quantum machine learning, transform your business with intelligent technology."
      />
      
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial = {
  { opacity: 0,
  y: 20 





}}
            animate = {
  { opacity: 1,
  y: 0 





}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Innovative Micro SAAS Services 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Discover the future of business technology with our cutting-edge AI-powered micro SAAS solutions. 
              Transform your operations with intelligent automation, predictive analytics, and revolutionary insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Brain className="w-5 h-5 text-blue-400" />
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Enterprise Security</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Contact Us
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
<<<<<<< HEAD
=======
          <motion.h1 
            initial = {
  { opacity: 0,
  y: 20 





}}
            animate = {
  { opacity: 1,
  y: 0 





}}
            transition = {
  { duration: 0.6,
  delay: 0.1 





}}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Innovative AI Services Showcase 2025
          </motion.h1>
          <motion.p 
            initial = {
  { opacity: 0,
  y: 20 





}}
            animate = {
  { opacity: 1,
  y: 0 





}}
            transition = {
  { duration: 0.6,
  delay: 0.2 





}}
            className="text-zion-slate-light text-xl"
          >
            Discover our cutting-edge AI-powered micro SAAS services that are revolutionizing industries and transforming businesses worldwide.
          </motion.p>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
        </div>
      </section>

      {/* Contact Information Banner */}
      <section id="contact" className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-semibold text-gray-900">+1 302 464 0950</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold text-gray-900">kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-semibold text-gray-900">364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Search and Filters */}
      <section className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
=======
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial = {
  { opacity: 0,
  y: 20 





}}
              animate = {
  { opacity: 1,
  y: 0 





}}
              transition = {
  { duration: 0.6,
  delay: index * 0.1 





}}
              className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-zion-cyan/10 rounded-lg">
                  <service.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <div className="ml-3">
                  <span className="text-xs text-zion-slate-light bg-zion-slate-light/10 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'innovation' | 'roi')}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="innovation">Sort by Innovation</option>
                <option value="price">Sort by Price</option>
                <option value="roi">Sort by ROI</option>
              </select>
              
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Discover Our Innovative Services
          </h2>
          <p className="text-lg text-gray-600">
            Found {filteredServices.length} services matching your criteria
          </p>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
<<<<<<< HEAD
                key={service.id}
                initial = {
  { opacity: 0,
  y: 20 
}}
                animate = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 
}}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
=======
                key={item.title}
                initial = {
  { opacity: 0,
  y: 20 





}}
                animate = {
  { opacity: 1,
  y: 0 





}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 





}}
                className="text-center"
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getInnovationColor(service.innovationLevel)}`}>
                        {service.innovationLevel}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getROIColor(service.roi)}`}>
                        ROI: {service.roi}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-semibold text-green-600">${service.price.toLocaleString()}</span>
                      <span>/month</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Delivery: {service.estimatedDelivery}
                    </div>
                    <a
                      href={`https://ziontechgroup.com/contact?service=${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      Get Started
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial = {
  { opacity: 0,
  x: -20 
}}
                animate = {
  { opacity: 1,
  x: 0 
}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 
}}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 5).map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                          <ul className="space-y-1">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-1">
                          ${service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">per month</div>
                      </div>

                      <div className="space-y-2">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium text-center ${getInnovationColor(service.innovationLevel)}`}>
                          {service.innovationLevel}
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium text-center ${getROIColor(service.roi)}`}>
                          ROI: {service.roi}
                        </div>
                      </div>

                      <div className="text-sm text-gray-500 text-center">
                        <div>Delivery: {service.estimatedDelivery}</div>
                        <div>Support: {service.supportLevel}</div>
                      </div>

                      <a
                        href={`https://ziontechgroup.com/contact?service=${encodeURIComponent(service.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                      >
                        Get Started
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already leveraging our innovative AI-powered solutions. 
              Get started today and experience the future of business technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Today
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Call Now: +1 302 464 0950
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
              <p className="text-gray-300 mb-4">
                Leading provider of innovative AI-powered micro SAAS solutions, helping businesses 
                transform their operations with cutting-edge technology and intelligent automation.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4 inline ml-1" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Phone: +1 302 464 0950</p>
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="https://ziontechgroup.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
                <a
                  href="https://ziontechgroup.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
                <a
                  href="https://ziontechgroup.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">;
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
<<<<<<< HEAD
      </footer>
    </div>
=======
        
        <div className="text-sm text-zion-slate-light">;
          Visit us at <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a>;
        </div>;
      </section>;
    </div>;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  );
};

export default InnovativeServicesShowcase2025;