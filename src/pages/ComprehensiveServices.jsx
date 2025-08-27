import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  MapPin,
  Award,
  Target,
  BarChart3,
  Cpu,
  Brain,
  Database,
  Lock,
  MessageSquare,
  BookOpen,
  Truck,
  Home,
  DollarSign
} from 'lucide-react';
import { ENHANCED_MICRO_SAAS_SERVICES_2025, SERVICE_CATEGORIES, ZION_TECH_GROUP_CONTACT } from '../data/enhancedMicroSaasServices2025.js';
export default function ComprehensiveServices() {
  const [services, setServices] = useState(ENHANCED_MICRO_SAAS_SERVICES_2025);
  const [filteredServices, setFilteredServices] = useState(ENHANCED_MICRO_SAAS_SERVICES_2025);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  useEffect(() => {
    let filtered = services;
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'name':
        default:
          return a.title.localeCompare(b.title);
      }
    });
    setFilteredServices(filtered);
  }, [services, searchTerm, selectedCategory, sortBy]);
  const getCategoryIcon = (category) => {
    const iconMap = {
      'AI & Development': <Cpu className="w-5 h-5" />,
      'AI & Marketing': <TrendingUp className="w-5 h-5" />,
      'AI & Customer Service': <MessageSquare className="w-5 h-5" />,
      'AI & Finance': <DollarSign className="w-5 h-5" />,
      'AI & Healthcare': <Brain className="w-5 h-5" />,
      'AI & Legal': <BookOpen className="w-5 h-5" />,
      'AI & Education': <BookOpen className="w-5 h-5" />,
      'AI & Supply Chain': <Truck className="w-5 h-5" />,
      'AI & Cybersecurity': <Shield className="w-5 h-5" />,
      'AI & Real Estate': <Home className="w-5 h-5" />
    };
    return iconMap[category] || <Zap className="w-5 h-5" />;
  };
  const getCategoryColor = (category) => {
    const colorMap = {
      'AI & Development': 'from-blue-500 to-cyan-500',
      'AI & Marketing': 'from-purple-500 to-pink-500',
      'AI & Customer Service': 'from-green-500 to-emerald-500',
      'AI & Finance': 'from-yellow-500 to-orange-500',
      'AI & Healthcare': 'from-red-500 to-pink-500',
      'AI & Legal': 'from-indigo-500 to-blue-500',
      'AI & Education': 'from-teal-500 to-green-500',
      'AI & Supply Chain': 'from-orange-500 to-red-500',
      'AI & Cybersecurity': 'from-gray-500 to-slate-500',
      'AI & Real Estate': 'from-emerald-500 to-teal-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Micro SAAS Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our extensive portfolio of innovative micro SAAS, IT, and AI services designed to transform your business operations and drive growth
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                <Phone className="w-5 h-5 mr-2"/>
                Get Started Today
              </Button>
            </Link>
            <Link to="/services-pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <DollarSign className="w-5 h-5 mr-2"/>
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Contact Information Banner */}
      <section className="py-6 bg-zion-blue-dark border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span className="text-white font-medium">{ZION_TECH_GROUP_CONTACT.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-zion-cyan"/>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-zion-cyan"/>
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan"/>
              <a href="https://ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Search and Filter Section */}
      <section className="py-8 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-zion-cyan" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {SERVICE_CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            {/* Sort */}
            <div className="flex items-center gap-4">
              <span className="text-zinc-300">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 bg-zion-blue border-zion-blue-light text-white">
                <SelectValue placeholder="Category"/>
              </SelectTrigger>
              <SelectContent className="bg-zion-blue border-zion-blue-light">
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (<SelectItem key={category} value={category}>{category}</SelectItem>))}
              </SelectContent>
            </Select>
            <Select value={selectedPricingTier} onValueChange={setSelectedPricingTier}>
              <SelectTrigger className="w-full md:w-48 bg-zion-blue border-zion-blue-light text-white">
                <SelectValue placeholder="Pricing Tier"/>
              </SelectTrigger>
              <SelectContent className="bg-zion-blue border-zion-blue-light">
                <SelectItem value="all">All Tiers</SelectItem>
                {Object.keys(PRICING_TIERS).map(tier => (<SelectItem key={tier} value={tier}>{tier}</SelectItem>))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${getCategoryColor(service.category)} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-3">
                    {getCategoryIcon(service.category)}
                    <span className="text-sm font-medium opacity-90">{service.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90 line-clamp-2">{service.description}</p>
                </div>
                {/* Service Content */}
                <div className="p-6">
                  {/* Price and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-zion-purple">
                      ${service.price?.toLocaleString()}
                      <span className="text-sm text-zinc-500 font-normal">/month</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-medium">4.9</span>
                      <span className="text-zinc-500 text-sm">(150+)</span>
                    </div>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                      {service.category}
                    </Badge>
                  </div>
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-zinc-800 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-zinc-800 mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zinc-600">
                          <TrendingUp className="w-4 h-4 text-blue-500" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (<Badge key={tag} variant="secondary" className="bg-zion-blue-light text-zion-cyan">
                        {tag}
                      </Badge>))}
                  </div>
                  {/* Service Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Clock className="w-4 h-4"/>
                      <span className="text-sm">{service.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Globe className="w-4 h-4"/>
                      <span>{service.location}</span>
                    </div>
                  </div>
                  {/* Market Information */}
                  <div className="mb-6 p-3 bg-zinc-50 rounded-lg">
                    <div className="text-sm">
                      <div className="flex justify-between mb-1">
                        <span className="text-zinc-600">Market Price:</span>
                        <span className="font-medium">{service.marketPrice}</span>
                      </div>
                      {service.marketSize && (
                        <div className="flex justify-between">
                          <span className="text-zinc-600">Market Size:</span>
                          <span className="font-medium">{service.marketSize}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Link to="/contact">
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-lg font-semibold hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 flex items-center justify-center gap-2">
                        Get Quote
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                    <button className="w-full px-6 py-3 border border-zion-purple text-zion-purple rounded-lg font-semibold hover:bg-zion-purple hover:text-white transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zinc-400 mb-6">Try adjusting your search criteria or browse all categories</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
              >
                Clear Filters
              </Button>
            </div>)}
        </div>
      </section>
      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with industry expertise to deliver 
              solutions that drive real business value and competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
                icon: <Zap className="w-8 h-8"/>,
                title: "Innovation First",
                description: "Cutting-edge AI and technology solutions that keep you ahead of the competition"
            },
            {
                icon: <Shield className="w-8 h-8"/>,
                title: "Enterprise Security",
                description: "Bank-level security and compliance for all our solutions and services"
            },
            {
                icon: <Building className="w-8 h-8"/>,
                title: "Proven Results",
                description: "Track record of successful implementations and measurable business outcomes"
            },
            {
                icon: <Users className="w-8 h-8"/>,
                title: "Expert Support",
                description: "24/7 technical support and dedicated account management for enterprise clients"
            }
        ].map((feature, index) => (<div key={index} className="text-center p-6 rounded-lg border border-zion-blue-light">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4 text-zion-cyan">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light text-sm">{feature.description}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* Pricing Tiers */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Flexible Pricing Options</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and scale as you grow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic",
                price: "$19",
                period: "/month",
                features: [
                  "Core functionality",
                  "Basic support",
                  "Standard integrations",
                  "Community forum",
                  "Email support"
                ],
                buttonText: "Get Started",
                buttonVariant: "outline"
              },
              {
                name: "Professional",
                price: "$99",
                period: "/month",
                features: [
                  "Advanced features",
                  "Priority support",
                  "Custom integrations",
                  "API access",
                  "Analytics dashboard",
                  "Phone support"
                ],
                buttonText: "Start Free Trial",
                buttonVariant: "primary",
                popular: true
              },
              {
                name: "Enterprise",
                price: "$399",
                period: "/month",
                features: [
                  "Full feature set",
                  "24/7 dedicated support",
                  "Custom development",
                  "White-label options",
                  "SLA guarantees",
                  "On-premise deployment"
                ],
                buttonText: "Contact Sales",
                buttonVariant: "outline"
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-xl p-8 ${
                  plan.popular ? 'ring-2 ring-zion-cyan scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zinc-800 mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-zion-purple">{plan.price}</span>
                    <span className="text-zinc-500 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-zinc-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.buttonVariant === 'primary'
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-light hover:to-zion-purple-light'
                      : 'border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}>
                    {plan.buttonText}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 mb-8 text-xl max-w-3xl mx-auto">
              Let's discuss how our AI-powered solutions can drive growth, 
              improve efficiency, and give you a competitive edge in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
                  Get Started Today
                </button>
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
