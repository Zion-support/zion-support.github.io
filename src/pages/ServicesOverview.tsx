import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe, 
  Zap, 
  Users, 
  ShoppingCart, 
  BookOpen,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  CheckCircle,
  Play,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Search,
  Filter,
  Grid,
  List,
  Eye,
  Clock,
  DollarSign
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function ServicesOverview() {
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const allServices = [
    // AI & Analytics
    {
      name: "AI Business Intelligence",
      category: "AI & Analytics",
      href: "/services/ai-business-intelligence",
      description: "Transform your data into actionable insights with AI-powered analytics",
      features: ["Predictive Analytics", "Real-time Dashboards", "Natural Language Queries"],
      price: "From $5,000",
      rating: 4.9,
      reviewCount: 127,
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      popular: true
    },
    {
      name: "AI Sales Copilot",
      category: "AI & Analytics",
      href: "/services/ai-sales-copilot",
      description: "AI-powered sales automation and optimization",
      features: ["Lead Scoring", "Sales Forecasting", "Customer Insights"],
      price: "From $3,500",
      rating: 4.8,
      reviewCount: 89,
      icon: Brain,
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "AI Compliance Assistant",
      category: "AI & Analytics",
      href: "/services/ai-compliance-assistant",
      description: "Regulatory compliance automation",
      features: ["Risk Assessment", "Compliance Monitoring", "Audit Trails"],
      price: "From $7,500",
      rating: 4.9,
      reviewCount: 156,
      icon: Brain,
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "LLM Content Studio",
      category: "AI & Analytics",
      href: "/services/llm-content-studio",
      description: "AI content generation and management",
      features: ["Content Creation", "Brand Consistency", "SEO Optimization"],
      price: "From $2,500",
      rating: 4.7,
      reviewCount: 203,
      icon: Brain,
      color: "from-purple-600 to-pink-600"
    },

    // Cloud & DevOps
    {
      name: "Cloud DevOps",
      category: "Cloud & DevOps",
      href: "/services/cloud-devops",
      description: "Infrastructure & Automation",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting"],
      price: "From $8,000",
      rating: 4.9,
      reviewCount: 234,
      icon: Cloud,
      color: "from-blue-600 to-cyan-600",
      popular: true
    },
    {
      name: "Cloud FinOps Optimizer",
      category: "Cloud & DevOps",
      href: "/services/cloud-finops-optimizer",
      description: "Cloud cost optimization and management",
      features: ["Cost Analysis", "Resource Optimization", "Budget Management"],
      price: "From $4,500",
      rating: 4.8,
      reviewCount: 167,
      icon: Cloud,
      color: "from-blue-600 to-cyan-600"
    },
    {
      name: "FinOps Advisor",
      category: "Cloud & DevOps",
      href: "/services/finops-advisor",
      description: "Financial operations optimization",
      features: ["Cost Governance", "Performance Metrics", "Strategic Planning"],
      price: "From $6,000",
      rating: 4.9,
      reviewCount: 98,
      icon: Cloud,
      color: "from-blue-600 to-cyan-600"
    },

    // Cybersecurity
    {
      name: "AI Compliance Copilot",
      category: "Cybersecurity",
      href: "/services/ai-compliance-copilot",
      description: "AI-Powered Security & Compliance",
      features: ["Threat Detection", "Compliance Monitoring", "Incident Response"],
      price: "From $9,500",
      rating: 4.9,
      reviewCount: 267,
      icon: Shield,
      color: "from-red-600 to-orange-600",
      popular: true
    },
    {
      name: "Zero Trust Architecture",
      category: "Cybersecurity",
      href: "/services/zero-trust-network-architecture",
      description: "Advanced security framework",
      features: ["Identity Verification", "Access Control", "Network Segmentation"],
      price: "From $18,000",
      rating: 4.9,
      reviewCount: 134,
      icon: Shield,
      color: "from-red-600 to-orange-600"
    },

    // Digital Solutions
    {
      name: "Digital Twin",
      category: "Digital Solutions",
      href: "/services/digital-twin",
      description: "Simulation & Monitoring",
      features: ["Real-time Monitoring", "Predictive Maintenance", "Performance Optimization"],
      price: "From $15,000",
      rating: 4.9,
      reviewCount: 78,
      icon: Rocket,
      color: "from-green-600 to-emerald-600"
    },
    {
      name: "Digital Transformation",
      category: "Digital Solutions",
      href: "/services/digital-transformation",
      description: "End-to-end digital transformation",
      features: ["Process Automation", "Technology Integration", "Change Management"],
      price: "From $25,000",
      rating: 4.8,
      reviewCount: 189,
      icon: Rocket,
      color: "from-green-600 to-emerald-600",
      popular: true
    },
    {
      name: "IT Infrastructure",
      category: "Digital Solutions",
      href: "/services/it-infrastructure",
      description: "Enterprise infrastructure solutions",
      features: ["Network Design", "Hardware Management", "Performance Tuning"],
      price: "From $12,000",
      rating: 4.8,
      reviewCount: 145,
      icon: Rocket,
      color: "from-green-600 to-emerald-600"
    },

    // Micro SaaS
    {
      name: "Micro SaaS Solutions",
      category: "Micro SaaS",
      href: "/services/micro-saas-solutions",
      description: "Productized SaaS for niches",
      features: ["Custom Development", "Scalable Architecture", "Maintenance Support"],
      price: "From $10,000",
      rating: 4.8,
      reviewCount: 112,
      icon: ShoppingCart,
      color: "from-yellow-600 to-orange-600"
    },
    {
      name: "AI Lead Scoring",
      category: "Micro SaaS",
      href: "/services/ai-lead-scoring",
      description: "Prioritize deals with ML",
      features: ["Lead Analysis", "Scoring Algorithms", "CRM Integration"],
      price: "From $2,500",
      rating: 4.7,
      reviewCount: 89,
      icon: ShoppingCart,
      color: "from-yellow-600 to-orange-600"
    },
    {
      name: "Website AI Chatbot",
      category: "Micro SaaS",
      href: "/services/website-ai-chatbot",
      description: "24/7 on-site assistant",
      features: ["Natural Language", "24/7 Support", "Lead Generation"],
      price: "From $1,500",
      rating: 4.6,
      reviewCount: 156,
      icon: ShoppingCart,
      color: "from-yellow-600 to-orange-600"
    },

    // Emerging Tech
    {
      name: "Quantum Computing",
      category: "Emerging Tech",
      href: "/services/quantum-computing",
      description: "Next-generation computing solutions",
      features: ["Quantum Algorithms", "Optimization Problems", "Research Support"],
      price: "From $50,000",
      rating: 4.9,
      reviewCount: 45,
      icon: Star,
      color: "from-indigo-600 to-purple-600"
    },
    {
      name: "IoT Edge Computing",
      category: "Emerging Tech",
      href: "/services/iot-edge",
      description: "Smart devices & networks",
      features: ["Device Management", "Edge Processing", "Data Analytics"],
      price: "From $8,500",
      rating: 4.8,
      reviewCount: 76,
      icon: Star,
      color: "from-indigo-600 to-purple-600"
    },
    {
      name: "Blockchain Solutions",
      category: "Emerging Tech",
      href: "/services/blockchain-enterprise-solutions",
      description: "DeFi & Smart Contracts",
      features: ["Smart Contracts", "Tokenization", "Supply Chain"],
      price: "From $20,000",
      rating: 4.7,
      reviewCount: 67,
      icon: Star,
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', count: allServices.filter(s => s.category === 'Cloud & DevOps').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Digital Solutions', name: 'Digital Solutions', count: allServices.filter(s => s.category === 'Digital Solutions').length },
    { id: 'Micro SaaS', name: 'Micro SaaS', count: allServices.filter(s => s.category === 'Micro SaaS').length },
    { id: 'Emerging Tech', name: 'Emerging Tech', count: allServices.filter(s => s.category === 'Emerging Tech').length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularServices = allServices.filter(service => service.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Comprehensive overview of all our technology services including AI, cloud computing, cybersecurity, digital transformation, and more."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Services
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Overview
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Explore our comprehensive portfolio of technology services designed to accelerate your digital transformation
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, categories, or features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popular Services */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Popular Services</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our most requested and highly-rated services that drive real business results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={service.href}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full relative">
                  {service.popular && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                      Popular
                    </div>
                  )}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-slate-300 mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} />
                      ))}
                      <span className="text-sm text-slate-400">({service.reviewCount})</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-slate-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="text-white">
            Showing {filteredServices.length} of {allServices.length} services
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* All Services */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">All Services</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Browse our complete service portfolio organized by category and functionality
          </p>
        </motion.div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <Link to={service.href}>
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-cyan-400 font-semibold">{service.price}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-slate-400">{service.rating}</span>
                        <span className="text-xs text-slate-500">({service.reviewCount})</span>
                      </div>
                      <span className="text-xs text-slate-500 bg-slate-700 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <div className="flex items-center text-cyan-400 text-sm group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <Link to={service.href}>
                  <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="md:col-span-1">
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-slate-300 mb-3">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            {service.rating} ({service.reviewCount})
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {service.category}
                          </span>
                        </div>
                      </div>
                      <div className="md:col-span-1 text-right">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Need Help Choosing?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Our expert team is here to help you select the right services for your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/request-quote"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Get Custom Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}