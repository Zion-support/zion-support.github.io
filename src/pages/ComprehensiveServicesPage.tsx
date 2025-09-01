import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  BarChart3, 
  Heart, 
  Eye, 
  Atom, 
  Activity, 
  Code, 
  Database, 
  Server, 
  Network, 
  Lock, 
  Cloud, 
  Target, 
  TrendingUp, 
  Briefcase, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  Filter, 
  DollarSign, 
  Clock, 
  Award, 
  TrendingDown 
} from 'lucide-react';

const ComprehensiveServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const stats = [
    { number: '50+', label: 'Services Available', icon: Briefcase },
    { number: '15+', label: 'Categories', icon: Globe },
    { number: '24/7', label: 'Support', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Shield }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, color: 'from-blue-500 to-cyan-600' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-500 to-indigo-600' },
    { id: 'IoT & Edge', name: 'IoT & Edge Computing', icon: Cpu, color: 'from-green-500 to-teal-600' },
    { id: 'Blockchain', name: 'Blockchain & Web3', icon: Code, color: 'from-yellow-500 to-orange-600' },
    { id: 'Marketing', name: 'Marketing & Sales', icon: TrendingUp, color: 'from-indigo-500 to-purple-600' },
    { id: 'Customer Service', name: 'Customer Service', icon: Users, color: 'from-green-500 to-emerald-600' },
    { id: 'Compliance', name: 'Compliance & Governance', icon: Lock, color: 'from-gray-500 to-slate-600' },
    { id: 'Business Ops', name: 'Business Operations', icon: Briefcase, color: 'from-amber-500 to-yellow-600' },
    { id: 'Financial', name: 'Financial Services', icon: DollarSign, color: 'from-emerald-500 to-green-600' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'low', name: 'Under $1,000' },
    { id: 'medium', name: '$1,000 - $3,000' },
    { id: 'high', name: 'Over $3,000' }
  ];

  // Mock services data
  const services = [
    {
      id: 'ai-platform',
      title: 'AI Business Intelligence Platform',
      description: 'Comprehensive AI-powered analytics and business intelligence solution',
      category: 'AI & Analytics',
      price: 2500,
      features: ['Predictive analytics', 'Real-time dashboards', 'Custom reporting'],
      icon: Brain
    },
    {
      id: 'cybersecurity-suite',
      title: 'Enterprise Cybersecurity Suite',
      description: 'Advanced threat detection and prevention for enterprise environments',
      category: 'Cybersecurity',
      price: 3500,
      features: ['Threat intelligence', 'Zero-trust architecture', '24/7 monitoring'],
      icon: Shield
    },
    {
      id: 'cloud-management',
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud management and optimization platform',
      category: 'Cloud & DevOps',
      price: 2000,
      features: ['Multi-cloud support', 'Cost optimization', 'Automated scaling'],
      icon: Cloud
    },
    {
      id: 'iot-platform',
      title: 'IoT Device Management Platform',
      description: 'Centralized IoT device management and analytics',
      category: 'IoT & Edge',
      price: 1800,
      features: ['Device monitoring', 'Edge computing', 'Data analytics'],
      icon: Cpu
    },
    {
      id: 'blockchain-solution',
      title: 'Blockchain Business Solutions',
      description: 'Enterprise blockchain implementation and management',
      category: 'Blockchain',
      price: 4000,
      features: ['Smart contracts', 'Supply chain tracking', 'Digital identity'],
      icon: Code
    },
    {
      id: 'marketing-automation',
      title: 'Marketing Automation Suite',
      description: 'AI-powered marketing automation and optimization',
      category: 'Marketing',
      price: 2200,
      features: ['Campaign management', 'Lead scoring', 'ROI tracking'],
      icon: TrendingUp
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;

    let matchesPrice = true;
    if (priceRange === 'low') {
      matchesPrice = service.price < 1000;
    } else if (priceRange === 'medium') {
      matchesPrice = service.price >= 1000 && service.price <= 3000;
    } else if (priceRange === 'high') {
      matchesPrice = service.price > 3000;
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.color : 'from-gray-500 to-slate-600';
  };

  const getPriceRange = (price: number) => {
    if (price < 1000) return 'low';
    if (price <= 3000) return 'medium';
    return 'high';
  };

  const getPriceColor = (price: number) => {
    const range = getPriceRange(price);
    switch (range) {
      case 'low':
        return 'text-green-400';
      case 'medium':
        return 'text-yellow-400';
      case 'high':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Rocket className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Comprehensive Services Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Discover our complete range of innovative micro SAAS services, IT
            solutions, and AI-powered platforms. From cutting-edge quantum
            computing to practical business automation, we have the solutions
            you need to transform your business.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {priceRanges.map(range => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-800/50 text-white`}>
                        {getPriceRange(service.price) === 'low' ? 'Affordable' : getPriceRange(service.price) === 'medium' ? 'Premium' : 'Enterprise'}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Category and Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">{service.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">${service.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">one-time setup</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex space-x-3">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-2 border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 rounded-lg text-sm font-semibold transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Contact our team of experts to discuss your needs and discover how our comprehensive
              services can transform your business.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesPage;