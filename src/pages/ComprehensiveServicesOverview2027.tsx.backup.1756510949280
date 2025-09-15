
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Zap, 
  Globe, 
  Users, 
  BarChart3, 
  Lock, 
  Eye, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  DollarSign, 
  Target, 
  Lightbulb, 
  Award, 
  ShieldCheck, 
  Server, 
  Smartphone, 
  Monitor, 
  Wifi, 
  Beaker, 
  Syringe, 
  Stethoscope, 
  Heart, 
  Ear, 
  Hand, 
  Footprints, 
  Bone, 
  Tooth, 
  Pill, 
  Thermometer, 
  Scale, 
  Calculator, 
  PieChart, 
  TrendingDown, 
  Minus, 
  Plus, 
  Equal, 
  Divide, 
  Percent, 
  Euro, 
  Bitcoin, 
  CreditCard, 
  Wallet, 
  Banknote, 
  Coins, 
  PiggyBank, 
  Key, 
  Fingerprint, 
  QrCode, 
  Barcode, 
  Scan, 
  Camera, 
  VideoOff, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Rewind, 
  FastForward, 
  Shuffle, 
  Repeat, 
  Repeat1, 
  PlayCircle, 
  PauseCircle,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  Grid,
  List,
  ChevronDown,
  ShoppingCart,
  MessageCircle,
  HelpCircle,
  FileText,
  Video,
  Truck,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Sample data for demonstration
const MICRO_SAAS_SERVICES = [
  {
    id: 'micro-crm',
    title: 'Micro CRM',
    description: 'Lightweight customer relationship management for small businesses',
    category: 'Business Tools',
    subcategory: 'CRM',
    pricingModel: 'monthly',
    price: 29,
    rating: 4.8,
    reviewCount: 156,
    aiScore: 95,
    featured: true,
    createdAt: '2024-01-15',
    href: '/services/micro-crm',
    tags: ['CRM', 'Business', 'Automation'],
    images: ['/images/micro-crm.jpg']
  },
  {
    id: 'helpdesk-platform',
    title: 'Helpdesk Platform',
    description: 'Streamlined customer support and ticket management system',
    category: 'Customer Support',
    subcategory: 'Helpdesk',
    pricingModel: 'monthly',
    price: 39,
    rating: 4.7,
    reviewCount: 89,
    aiScore: 92,
    featured: false,
    createdAt: '2024-02-01',
    href: '/services/helpdesk-platform',
    tags: ['Support', 'Helpdesk', 'Customer Service'],
    images: ['/images/helpdesk.jpg']
  },
  {
    id: 'website-analytics',
    title: 'Website Analytics',
    description: 'Comprehensive website performance and user behavior analytics',
    category: 'Analytics',
    subcategory: 'Web Analytics',
    pricingModel: 'monthly',
    price: 19,
    rating: 4.9,
    reviewCount: 234,
    aiScore: 98,
    featured: true,
    createdAt: '2024-01-10',
    href: '/services/website-analytics',
    tags: ['Analytics', 'Web', 'Performance'],
    images: ['/images/analytics.jpg']
  }
];

const categories = [
  { id: 'all', name: 'All Categories', icon: <Globe className="w-4 h-4" />, count: MICRO_SAAS_SERVICES.length },
  { id: 'Business Tools', name: 'Business Tools', icon: <Briefcase className="w-4 h-4" />, count: 1 },
  { id: 'Customer Support', name: 'Customer Support', icon: <MessageCircle className="w-4 h-4" />, count: 1 },
  { id: 'Analytics', name: 'Analytics', icon: <BarChart3 className="w-4 h-4" />, count: 1 }
];

const pricingModels = [
  { id: 'all', name: 'All Pricing' },
  { id: 'monthly', name: 'Monthly' },
  { id: 'yearly', name: 'Yearly' },
  { id: 'one-time', name: 'One-time' },
  { id: 'usage-based', name: 'Usage-based' }
];

export default function ComprehensiveServicesOverview2027() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState(MICRO_SAAS_SERVICES);
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'aiScore' | 'newest'>('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  useEffect(() => {
    let filtered = MICRO_SAAS_SERVICES;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    if (selectedPricing !== 'all') {
      filtered = filtered.filter(service => service.pricingModel === selectedPricing);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.tags.some(tag => tag.toLowerCase().includes(query)) ||
        service.subcategory?.toLowerCase().includes(query)
      );
    }
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'price':
          return (a.price || 0) - (b.price || 0);
        case 'aiScore':
          return b.aiScore - a.aiScore;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });
    setFilteredServices(filtered);
  }, [selectedCategory, selectedPricing, searchQuery, sortBy]);

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate-dark/50 border border-zion-blue-light/20 rounded-2xl p-6 hover:border-zion-purple/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-zion-purple/20"
    >
      {service.featured && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs font-bold px-3 py-1 rounded-full">
          Featured
        </div>
      )}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-zion-purple/80 text-white">
              {service.category}
            </Badge>
            <div className="flex items-center space-x-1 text-white">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{service.rating}</span>
              <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
            {service.title}
          </h3>
          <p className="text-zion-slate-light text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-zion-cyan border-zion-cyan/30">
              {service.subcategory}
            </Badge>
            <Badge variant="outline" className="text-zion-purple border-zion-purple/30">
              AI Score: {service.aiScore}
            </Badge>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-zion-slate-light text-sm">Pricing:</span>
            <span className="text-white font-semibold">{service.pricingModel}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zion-slate-light text-sm">Created:</span>
            <span className="text-white text-sm">{new Date(service.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light"
        >
          <Link to={service.href}>
            Learn More
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-900 via-zion-slate-800 to-zion-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Comprehensive Services Overview
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
              2027 Edition
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto"
          >
            Discover our complete portfolio of cutting-edge technology solutions, from AI-powered innovations to enterprise-grade infrastructure services.
          </motion.p>
        </div>

        {/* Filters and Controls */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-zion-slate-dark/50 border border-zion-blue-light/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-zion-cyan hover:bg-zion-cyan-light' : 'border-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-dark/30'}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-zion-cyan hover:bg-zion-cyan-light' : 'border-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-dark/30'}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-zion-slate-dark/50 border border-zion-blue-light/20 text-white rounded-lg px-3 py-2"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="aiScore">Sort by AI Score</option>
                <option value="newest">Sort by Newest</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'bg-zion-cyan hover:bg-zion-cyan-light' : 'border-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-dark/30'}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
                <Badge variant="secondary" className="ml-2 bg-zion-purple/80">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {pricingModels.map((pricing) => (
              <Button
                key={pricing.id}
                variant={selectedPricing === pricing.id ? 'default' : 'outline'}
                onClick={() => setSelectedPricing(pricing.id)}
                className={selectedPricing === pricing.id ? 'bg-zion-purple hover:bg-zion-purple-light' : 'border-zion-purple/20 text-zion-slate-light hover:bg-zion-purple/30'}
              >
                {pricing.name}
              </Button>
            ))}
          </div>
        </div>
        {/* Services Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
            <Button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedPricing('all');
                setSearchQuery('');
              }}
              className="bg-zion-cyan hover:bg-zion-cyan-light"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Our team of experts is ready to help you implement the perfect solution for your needs. 
            Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan-light hover:to-zion-blue-light">
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
              <a href="tel:+13024640950">
                Call Now: +1 302 464 0950
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}