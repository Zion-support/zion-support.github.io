import React, { useState, useEffect } from 'react';
import { motion  } from 'framer-motion';
import { Link  } from 'react-router-dom';
import { Brain, 
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
  Flask, 
  TestTube, 
  Syringe, 
  Stethoscope, 
  HeartPulse, 
  BrainCircuit, 
  Ear, 
  Hand, 
  Foot, 
  Bone, 
  Tooth, 
  Pill, 
  Bandage, 
  Thermometer, 
  Scale, 
  Calculator, 
  ChartBar, 
  PieChart, 
  LineChart, 
  Activity, 
  TrendingDown, 
  Minus, 
  Plus, 
  Equal, 
  Divide, 
  Percent, 
  Euro, 
  Pound, 
  Yen, 
  Bitcoin, 
  Ethereum, 
  CreditCard, 
  Wallet, 
  Banknote, 
  Coins, 
  PiggyBank, 
  Safe, 
  Vault, 
  LockKeyhole, 
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
  Stop, 
  SkipBack, 
  SkipForward, 
  Rewind, 
  FastForward, 
  Shuffle, 
  Repeat, 
  Repeat1, 
  Shuffle2, 
  SkipBack2, 
  SkipForward2, 
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
  ChevronUp
 } from 'lucide-react';
import { MICRO_SAAS_SERVICES  } from '@/data/microSaasServices';
import { SEO  } from '@/components/SEO';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Badge  } from '@/components/ui/badge';
const categories = [
  { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, count: MICRO_SAAS_SERVICES.length },
  { id: 'AI Services', name: 'AI Services', icon: <Brain className="w-5 h-5" />, count: anyMICRO_SAAS_SERVICES.filter(s  => s.category === 'AI Services').length },
  { id: 'IT Services', name: 'IT Services', icon: <Server className="w-5 h-5" />, count: anyMICRO_SAAS_SERVICES.filter(s  => s.category === 'IT Services').length },
  { id: 'Business Solutions', name: 'Business Solutions', icon: <TrendingUp className="w-5 h-5" />, count: anyMICRO_SAAS_SERVICES.filter(s  => s.category === 'Business Solutions').length }
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
export default function ComprehensiveServicesOverview2027(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState(MICRO_SAAS_SERVICES);
  const [sortBy, setSortBy] = useState<any>('rating');
  const [viewMode, setViewMode] = useState<any>('grid');
  const [expandedService, setExpandedService] = useState<any>(null);
  useEffect(() => {
    let filtered = MICRO_SAAS_SERVICES;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof allServices>);

  // Get unique categories
  const categories = Object.keys(servicesByCategory);

  // Category icons and descriptions
  const categoryInfo = {
    'AI Services': {
      icon: Brain,
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/20',
      textColor: 'text-purple-400'
    },
    'IT Infrastructure': {
      icon: Server,
      description: 'Robust and scalable infrastructure solutions for modern businesses',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/20',
      textColor: 'text-blue-400'
    },
    'Cybersecurity': {
      icon: Shield,
      description: 'Advanced security solutions protecting your digital assets',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/20',
      textColor: 'text-red-400'
    },
    'Emerging Technology': {
      icon: Zap,
      description: 'Next-generation technologies shaping the future of business',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/20',
      textColor: 'text-green-400'
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    });
    setFilteredServices(filtered);
  }, [selectedCategory, selectedPricing, searchQuery, sortBy]);
  const ServiceCard = ({ service }: { service: any })  => (
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
            <span className="text-zion-slate-light text-sm">Market Price:</span>
            <span className="text-zion-purple font-semibold">{service.marketPrice}</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-zion-slate-light text-sm">Key Benefits:</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
              className="text-zion-cyan hover:text-zion-cyan-light"
            >
              {expandedService === service.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
          {expandedService === service.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-2"
            >
              {service.benefits.map((benefit: string, index: number)  => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-zion-slate-light text-sm">{benefit}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
        <div className="pt-4 border-t border-zion-blue-light/20">
          <div className="flex items-center justify-between">
            <Link
              to={service.website}
              className="inline-flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors"
            >
              <span className="text-sm font-medium">Learn More</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link
              to={`mailto:${service.contactEmail}`}
              className="inline-flex items-center space-x-2 text-zion-purple hover:text-zion-purple-light transition-colors"
            >
              <span className="text-sm font-medium">Contact</span>
              <Mail className="w-4 h-4" />
            </Link>
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
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Comprehensive Services Overview 2027
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Discover our complete portfolio of innovative AI, IT infrastructure, cybersecurity, and emerging technology services 
            designed to accelerate your business transformation.
          </motion.p>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Get Expert Consultation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as )}
                className="bg-zion-slate-dark/50 border border-zion-blue-light/20 text-white rounded-lg px-3 py-2"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="aiScore">Sort by AI Score</option>
                <option value="newest">Sort by Newest</option>
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === 'All'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-black/20 text-gray-300 hover:bg-black/40'
              }`}
            >
              All Services ({allServices.length})
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-black/20 text-gray-300 hover:bg-black/40'
                }`}
              >
                {category} ({servicesByCategory[category]?.length || 0})
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}