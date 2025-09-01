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
  TrendingDown, 
  Sparkles, 
  Lightbulb, 
  Layers, 
  Palette, 
  Smartphone, 
  Monitor, 
  ServerCog, 
  FileText, 
  PieChart, 
  LineChart, 
  BarChart, 
  ShoppingCart, 
  Building, 
  Factory, 
  Car, 
  Home, 
  Building2, 
  GraduationCap, 
  Hospital, 
  Banknote, 
  CreditCard, 
  PiggyBank, 
  ChartLine, 
  Flag, 
  Trophy, 
  Medal, 
  Crown, 
  Gem, 
  Diamond, 
  Thunder, 
  Lightning, 
  Fire, 
  Flame, 
  Sun, 
  Moon, 
  Planet, 
  Galaxy, 
  Infinity, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ChevronUp, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus, 
  X, 
  Menu, 
  Grid, 
  List, 
  Settings, 
  Cog, 
  Wrench, 
  Tool, 
  Hammer, 
  Screwdriver 
} from 'lucide-react';

const RevolutionaryServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe, color: 'from-blue-500 to-cyan-600' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Atom, color: 'from-cyan-500 to-blue-600' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'IoT & Edge Computing', name: 'IoT & Edge Computing', icon: Cpu, color: 'from-green-500 to-teal-600' },
    { id: 'Blockchain & Web3', name: 'Blockchain & Web3', icon: Code, color: 'from-yellow-500 to-orange-600' },
    { id: 'Marketing & Sales', name: 'Marketing & Sales', icon: TrendingUp, color: 'from-indigo-500 to-purple-600' },
    { id: 'Cloud & DevOps', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-500 to-indigo-600' },
    { id: 'Customer Service', name: 'Customer Service', icon: Users, color: 'from-green-500 to-emerald-600' },
    { id: 'Compliance & Governance', name: 'Compliance & Governance', icon: Lock, color: 'from-gray-500 to-slate-600' },
    { id: 'Business Operations', name: 'Business Operations', icon: Briefcase, color: 'from-amber-500 to-yellow-600' },
    { id: 'Financial Services', name: 'Financial Services', icon: DollarSign, color: 'from-emerald-500 to-green-600' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1,500', range: '< $1,500' },
    { id: 'medium', name: '$1,500 - $3,000', range: '$1,500 - $3,000' },
    { id: 'high', name: 'Over $3,000', range: '> $3,000' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'category', name: 'Category' },
    { id: 'innovation', name: 'Innovation Level' }
  ];

  // Mock data for services
  const services = [
    {
      id: 'ai-research-assistant',
      title: 'AI Research Assistant Pro',
      description: 'Advanced AI-powered research automation with multi-source data integration',
      category: 'AI & Analytics',
      price: 2500,
      innovationLevel: 'Revolutionary',
      tags: ['AI', 'Research', 'Automation', 'Data Integration'],
      features: ['Multi-source data integration', 'Advanced NLP processing', 'Predictive analytics'],
      icon: Brain
    },
    {
      id: 'quantum-ai-platform',
      title: 'Quantum AI Hybrid Platform',
      description: 'Revolutionary quantum-classical computing integration for complex problem solving',
      category: 'Quantum Computing',
      price: 5000,
      innovationLevel: 'Revolutionary',
      tags: ['Quantum Computing', 'AI', 'Hybrid', 'Problem Solving'],
      features: ['Quantum algorithms', 'Hybrid optimization', 'Quantum security'],
      icon: Atom
    },
    {
      id: 'cybersecurity-suite',
      title: 'Next-Gen Cybersecurity Suite',
      description: 'AI-powered threat detection and prevention with zero-trust architecture',
      category: 'Cybersecurity',
      price: 3500,
      innovationLevel: 'Advanced',
      tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Zero Trust'],
      features: ['AI-powered threat analysis', 'Zero-trust architecture', 'Real-time monitoring'],
      icon: Shield
    },
    {
      id: 'iot-orchestration',
      title: 'IoT Orchestration Platform',
      description: 'Comprehensive IoT management with edge computing and AI analytics',
      category: 'IoT & Edge Computing',
      price: 2800,
      innovationLevel: 'Advanced',
      tags: ['IoT', 'Edge Computing', 'AI Analytics', 'Management'],
      features: ['Device management', 'Edge computing', 'AI analytics', 'Real-time monitoring'],
      icon: Cpu
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;

    let matchesPrice = true;
    if (priceRange === 'low') {
      matchesPrice = service.price < 1500;
    } else if (priceRange === 'medium') {
      matchesPrice = service.price >= 1500 && service.price <= 3000;
    } else if (priceRange === 'high') {
      matchesPrice = service.price > 3000;
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'category':
        return a.category.localeCompare(b.category);
      case 'innovation':
        const innovationOrder = { 'Revolutionary': 3, 'Advanced': 2, 'Standard': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) -
               (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      default:
        return 0;
    }
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
    if (price < 1500) return 'low';
    if (price <= 3000) return 'medium';
    return 'high';
  };

  const getPriceColor = (price: number) => {
    const range = getPriceRange(price);
    switch (range) {
      case 'low':
        return 'text-green-600';
      case 'medium':
        return 'text-yellow-600';
      case 'high':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Rocket className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionary Services 2025
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover our cutting-edge micro-SaaS services designed to transform your business with next-generation technology.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priceRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort Options */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <div className="flex gap-2">
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSortBy(option.id)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    sortBy === option.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedServices.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          service.innovationLevel === 'Revolutionary'
                            ? 'bg-purple-100 text-purple-800'
                            : service.innovationLevel === 'Advanced'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {service.innovationLevel}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {service.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="text-2xl font-bold text-gray-900">
                          ${service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">One-time setup</div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={`/services/${service.id}`}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our revolutionary services are designed to give you a competitive edge in the rapidly evolving technology landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RevolutionaryServicesPage;