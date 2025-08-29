import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Cpu, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  Settings,
  BarChart3,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  DollarSign,
  Heart,
  Lock,
  Cloud,
  Search,
  Filter,
  Target,
  Palette,
  Truck,
  Play,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  const allServices = [
    // AI & Analytics Services
    {
      name: 'AI Enterprise Orchestrator',
      description: 'Multi-agent AI coordination & workflow automation for enterprise-scale operations',
      category: 'AI & Analytics',
      icon: Brain,
      href: '/services/ai-enterprise-orchestrator',
      color: 'from-purple-600 to-pink-600',
      features: ['Multi-agent coordination', 'Workflow automation', 'Enterprise integration', 'Real-time monitoring'],
      pricing: 'Custom pricing',
      featured: true,
      marketPrice: '$15,000 - $50,000/month',
      roi: '400-800%'
    },
    {
      name: 'AI Business Intelligence Platform',
      description: 'Advanced analytics and business intelligence powered by machine learning',
      category: 'AI & Analytics',
      icon: BarChart3,
      href: '/services/ai-business-intelligence',
      color: 'from-blue-600 to-cyan-600',
      features: ['Predictive analytics', 'Data visualization', 'Business insights', 'Performance tracking'],
      pricing: 'From $2,500/month',
      featured: true,
      marketPrice: '$2,500 - $7,500/month',
      roi: '300-600%'
    },
    {
      name: 'AI Content Generation Platform',
      description: 'AI-powered content creation and optimization for marketing and communications',
      category: 'AI & Analytics',
      icon: BookOpen,
      href: '/services/ai-content-generation-platform',
      color: 'from-green-600 to-emerald-600',
      features: ['Content creation', 'SEO optimization', 'Brand consistency', 'Multi-format support'],
      pricing: 'From $199/month',
      featured: false,
      marketPrice: '$199 - $599/month',
      roi: '250-500%'
    },
    {
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing campaign optimization and customer engagement',
      category: 'AI & Analytics',
      icon: Target,
      href: '/services/ai-marketing-automation',
      color: 'from-orange-600 to-red-600',
      features: ['Campaign optimization', 'Customer segmentation', 'A/B testing', 'ROI tracking'],
      pricing: 'From $399/month',
      featured: false,
      marketPrice: '$399 - $1,299/month',
      roi: '200-400%'
    },
    // Micro SaaS Solutions
    {
      name: 'AI Project Management Platform',
      description: 'AI-powered project management with intelligent task prioritization and resource optimization',
      category: 'Micro SaaS',
      icon: Briefcase,
      href: '/services/ai-project-management-platform',
      color: 'from-indigo-600 to-purple-600',
      features: ['Task prioritization', 'Resource optimization', 'Risk prediction', 'Team collaboration'],
      pricing: 'From $299/month',
      featured: true,
      marketPrice: '$299 - $899/month',
      roi: '350-700%'
    },
    {
      name: 'AI Cybersecurity Threat Detection',
      description: 'Advanced AI-powered cybersecurity with real-time threat detection and automated response',
      category: 'Micro SaaS',
      icon: ShieldCheck,
      href: '/services/ai-cybersecurity-threat-detection',
      color: 'from-red-600 to-orange-600',
      features: ['Real-time threat detection', 'Automated response', 'Advanced analytics', 'Compliance reporting'],
      pricing: 'From $399/month',
      featured: true,
      marketPrice: '$399 - $1,199/month',
      roi: '400-800%'
    },
    {
      name: 'AI Financial Trading Platform',
      description: 'Revolutionary AI-powered trading platform with intelligent market analysis and automation',
      category: 'Micro SaaS',
      icon: TrendingUp,
      href: '/services/ai-financial-trading-platform',
      color: 'from-green-600 to-blue-600',
      features: ['Market analysis', 'Trading automation', 'Portfolio optimization', 'Risk management'],
      pricing: 'From $199/month',
      featured: false,
      marketPrice: '$199 - $799/month',
      roi: '500-1000%'
    },
    {
      name: 'AI Healthcare Analytics Platform',
      description: 'Transform healthcare delivery with AI-powered diagnosis support and predictive analytics',
      category: 'Micro SaaS',
      icon: Heart,
      href: '/services/ai-healthcare-analytics-platform',
      color: 'from-blue-600 to-cyan-600',
      features: ['Diagnosis support', 'Predictive analytics', 'Patient monitoring', 'Clinical insights'],
      pricing: 'From $799/month',
      featured: false,
      marketPrice: '$799 - $2,499/month',
      roi: '300-600%'
    },
    // IT Services
    {
      name: 'Cloud & DevOps Services',
      description: 'Comprehensive cloud infrastructure and DevOps automation solutions',
      category: 'IT Services',
      icon: Cloud,
      href: '/services/cloud-devops',
      color: 'from-blue-500 to-indigo-600',
      features: ['Infrastructure automation', 'CI/CD pipelines', 'Cloud migration', 'Monitoring & alerting'],
      pricing: 'From $1,500/month',
      featured: true,
      marketPrice: '$1,500 - $5,000/month',
      roi: '250-500%'
    },
    {
      name: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation services',
      category: 'IT Services',
      icon: Rocket,
      href: '/services/digital-transformation',
      color: 'from-purple-500 to-pink-600',
      features: ['Process optimization', 'Technology assessment', 'Change management', 'Implementation support'],
      pricing: 'Custom pricing',
      featured: true,
      marketPrice: '$10,000 - $50,000/month',
      roi: '200-400%'
    },
    {
      name: 'AI Supply Chain Optimization',
      description: 'AI-powered supply chain optimization for improved efficiency and cost reduction',
      category: 'IT Services',
      icon: Truck,
      href: '/services/ai-supply-chain-optimization',
      color: 'from-green-500 to-teal-600',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Supplier management'],
      pricing: 'From $999/month',
      featured: false,
      marketPrice: '$999 - $3,999/month',
      roi: '300-600%'
    },
    {
      name: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing applications for complex problem solving',
      category: 'IT Services',
      icon: Atom,
      href: '/services/quantum-computing',
      color: 'from-purple-600 to-violet-600',
      features: ['Quantum algorithms', 'Optimization problems', 'Cryptography', 'Research applications'],
      pricing: 'Custom pricing',
      featured: false,
      marketPrice: '$5,000 - $25,000/month',
      roi: '500-1000%'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: allServices.filter(s => s.category === 'AI & Analytics').length },
    { id: 'Micro SaaS', name: 'Micro SaaS', count: allServices.filter(s => s.category === 'Micro SaaS').length },
    { id: 'IT Services', name: 'IT Services', count: allServices.filter(s => s.category === 'IT Services').length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-white text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <a href={contactInfo.website} className="hover:underline" target="_blank" rel="noopener noreferrer">
                {contactInfo.website.replace('https://', '')}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="text-xs">{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Services & Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge AI, micro SaaS, and IT services. 
              From intelligent automation to advanced analytics, we deliver innovative solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
              >
                Get Pricing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-gray-300">
              Discover cutting-edge solutions designed to transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  {/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      {service.featured && (
                        <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing and ROI */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="text-center p-2 bg-blue-600/20 rounded">
                        <div className="text-blue-300">Our Price</div>
                        <div className="text-white font-semibold">{service.pricing}</div>
                      </div>
                      <div className="text-center p-2 bg-green-600/20 rounded">
                        <div className="text-green-300">ROI</div>
                        <div className="text-white font-semibold">{service.roi}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}&body=Hi, I'm interested in learning more about your ${service.name} service. Please provide more information about pricing, features, and implementation.`}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-center text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="px-4 py-2 border border-white/30 text-white rounded-lg text-sm font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative services can drive growth, 
              efficiency, and competitive advantage for your organization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-3">Speak directly with our experts</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-3">Get detailed information and quotes</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-purple-400 hover:text-purple-300 font-semibold"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Visit Website</h3>
                <p className="text-gray-300 mb-3">Explore our full portfolio</p>
                <a
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-semibold flex items-center justify-center space-x-1"
                >
                  <span>Visit Site</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}