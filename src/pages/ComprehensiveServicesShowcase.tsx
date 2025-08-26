import { Link } from 'react-router-dom';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Cpu,
  Brain,
  Blockchain,
  Wifi,
  Eye,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Clock,
  Users,
  Target,
  BarChart3
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { EMERGING_TECH_INNOVATIVE_SERVICES } from '../data/emergingTechInnovativeServices';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    pricingModel: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  Video,
  Palette,
  Car,
  Plane,
  Leaf,
  Atom,
  Satellite,
  Microscope,
  Beaker,
  Lightbulb,
  ShieldCheck,
  UserCheck,
  FileText,
  Home,
  Stethoscope,
  Droplets,
  Sparkles
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES, NEW_INNOVATIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES, NEW_INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { EMERGING_TECHNOLOGY_SERVICES } from '../data/emergingTechnologyServices';
=======
  Lightbulb,
  Rocket,
  Phone,
  Mail,
  Globe,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
  Atom,
  Satellite,
  Dna,
  Leaf,
  Flame,
  Eye
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { ENHANCED_MICRO_SAAS_SERVICES } from '../data/enhancedMicroSaasServices';
import { ADVANCED_ENTERPRISE_SOLUTIONS } from '../data/advancedEnterpriseSolutions';
import { INNOVATIVE_MICRO_SAAS_2025 } from '../data/innovativeMicroSaas2025';
import { SPECIALIZED_AI_SERVICES_2025 } from '../data/specializedAIServices2025';
import { EMERGING_TECH_SERVICES_2025 } from '../data/emergingTechServices2025';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technology?: string[];
  integrations?: string[];
  compliance?: string[];
  roi?: string;
  competitors?: string[];
  innovationLevel?: string;
  marketTrend?: string;
  aiCapabilities?: string[];
  technologyReadiness?: string;
  futurePotential?: string;
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('name');

import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Database,
  Network,
  Zap,
  Target,
  Users,
  Globe,
  Lock,
  BarChart3,
  Rocket,
  Microchip,
  Code,
  Server,
  ShieldCheck,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { EMERGING_TECHNOLOGY_SERVICES } from '../data/emergingTechnologyServices';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';
=======
  Star as StarIcon,
  Award,
  Users as UsersIcon,
  Globe as GlobeIcon,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';
import { ADVANCED_AI_SERVICES } from '../data/advancedAIServices';
import { CYBERSECURITY_SERVICES } from '../data/cybersecurityServices';
import { DEVOPS_CLOUD_SERVICES } from '../data/devopsCloudServices';
import { DATA_ANALYTICS_SERVICES } from '../data/dataAnalyticsServices';
import { INDUSTRY_SOLUTIONS } from '../data/industrySolutions';

export default function ComprehensiveServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // Combine all services
  const allServices: Service[] = [
    ...COMPREHENSIVE_SERVICES,
    ...ENHANCED_MICRO_SAAS_SERVICES,
    ...ADVANCED_ENTERPRISE_SOLUTIONS,
    ...INNOVATIVE_MICRO_SAAS_2025,
    ...SPECIALIZED_AI_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
=======
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
  marketTrend: string;
  innovationLevel: string;
  launchDate: string;
  status: 'Active' | 'Beta' | 'Coming Soon';
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...NEW_INNOVATIVE_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...NEW_INNOVATIVE_MICRO_SAAS_SERVICES,
    ...EMERGING_TECHNOLOGY_SERVICES
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      
      let matchesPrice = true;
      if (selectedPriceRange === 'low') matchesPrice = service.price <= 500;
      else if (selectedPriceRange === 'medium') matchesPrice = service.price > 500 && service.price <= 2000;
      else if (selectedPriceRange === 'high') matchesPrice = service.price > 2000;
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
  // Price ranges
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'budget', label: 'Under $500/month' },
    { value: 'mid', label: '$500 - $1,500/month' },
    { value: 'premium', label: '$1,500 - $3,000/month' },
    { value: 'enterprise', label: 'Over $3,000/month' }
  ];

  // Filter services based on search, category, and price
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange === 'budget') matchesPrice = service.price < 500;
    else if (selectedPriceRange === 'mid') matchesPrice = service.price >= 500 && service.price < 1500;
    else if (selectedPriceRange === 'premium') matchesPrice = service.price >= 1500 && service.price < 3000;
    else if (selectedPriceRange === 'enterprise') matchesPrice = service.price >= 3000;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Get service count by category
  const getServiceCountByCategory = (category: string) => {
    if (category === 'all') return allServices.length;
    return allServices.filter(service => service.category === category).length;
  };

    switch (category.toLowerCase()) {
      case 'ai & machine learning':
      case 'ai platforms':
      case 'ai content creation':
      case 'ai healthcare':
      case 'ai finance':
      case 'ai environment':
      case 'ai legal':
      case 'ai creative':
        return Brain;
      case 'quantum technology':
      case 'quantum computing':
      case 'quantum enterprise':
        return Atom;
      case 'cybersecurity':
        return Shield;
      case 'cloud & infrastructure':
      case 'it infrastructure':
        return Cloud;
      case 'business operations':
      case 'business process automation':
        return Target;
      case 'space technology':
        return Satellite;
      case 'biotechnology':
        return Dna;
      case 'neuromorphic computing':
        return Cpu;
      case 'fusion energy':
        return Flame;
      case 'brain-computer interface':
        return Eye;
      default:
        return Lightbulb;
    }
=======
    const iconMap: { [key: string]: any } = {
      'AI & Machine Learning': Brain,
      'AI & Financial Technology': Brain,
      'AI & Healthcare': Brain,
      'AI & Legal Technology': Brain,
      'AI & Manufacturing': Brain,
      'AI & Retail Technology': Brain,
      'AI & Real Estate': Brain,
      'AI & Education Technology': Brain,
      'AI & Logistics': Brain,
      'AI & Energy Technology': Brain,
      'AI & Marketing Technology': Brain,
      'Quantum Computing': Microchip,
      'Edge Computing': Server,
      'Neuromorphic Computing': Brain,
      '6G Networks': Network,
      'Space Technology': Rocket,
      'Brain-Computer Interface': Brain,
      'Synthetic Biology': Code,
      'Quantum Internet': Lock,
      'Fusion Energy': Zap,
      'Metaverse': Globe,
      'Cybersecurity': Shield,
      'Cloud Computing': Cloud,
      'IT Operations': Cpu,
      'Data Management': Database,
      'Network Management': Network,
      'DevOps': Code,
      'Application Management': Server,
      'IT Service Management': ShieldCheck,
      'Cloud Services': Cloud,
      'Business Continuity': ShieldCheck
    };
    return iconMap[category] || Target;
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & machine learning':
      case 'ai platforms':
      case 'ai content creation':
      case 'ai healthcare':
      case 'ai finance':
      case 'ai environment':
      case 'ai legal':
      case 'ai creative':
        return 'from-purple-500 to-pink-500';
      case 'quantum technology':
      case 'quantum computing':
      case 'quantum enterprise':
        return 'from-blue-500 to-cyan-500';
      case 'cybersecurity':
        return 'from-red-500 to-pink-500';
      case 'cloud & infrastructure':
      case 'it infrastructure':
        return 'from-blue-500 to-indigo-500';
      case 'business operations':
      case 'business process automation':
        return 'from-green-500 to-emerald-500';
      case 'space technology':
        return 'from-indigo-500 to-purple-500';
      case 'biotechnology':
        return 'from-green-500 to-blue-500';
      case 'neuromorphic computing':
        return 'from-orange-500 to-red-500';
      case 'fusion energy':
        return 'from-yellow-500 to-orange-500';
      case 'brain-computer interface':
        return 'from-pink-500 to-purple-500';
      default:
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { ADVANCED_AI_SERVICES } from '../data/advancedAIServices';
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES } from '../data/innovativeITInfrastructureServices';
import { EMERGING_TECHNOLOGY_SERVICES } from '../data/emergingTechnologyServices';
import { SPECIALIZED_BUSINESS_SOLUTIONS } from '../data/specializedBusinessSolutions';

export default function ComprehensiveServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Combine all services
  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...ADVANCED_AI_SERVICES,
    ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES,
    ...EMERGING_TECHNOLOGY_SERVICES,
    ...SPECIALIZED_BUSINESS_SOLUTIONS
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
=======
        return 'from-gray-500 to-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of cutting-edge AI, IT, and micro SAAS services designed to transform your business and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-lg font-semibold">{allServices.length}+ Services</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-lg font-semibold">AI-Powered Solutions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-lg font-semibold">Enterprise Grade</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

      if (sortBy === 'name') return a.title.localeCompare(b.title);
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      return 0;
    });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Machine Learning': Brain,
      'Cybersecurity': Shield,
      'Cloud & Infrastructure': Cloud,
      'Blockchain & Web3': Network,
      'Internet of Things': Cpu,
      'Customer Experience': Users,
      'Supply Chain Management': ShoppingCart,
      'Human Resources': Users,
      'Financial Technology': DollarSign,
      'Legal Technology': FileText,
      'Real Estate Technology': Home,
      'Healthcare Technology': Stethoscope,
      'Energy Management': Zap,
      'Creative Design': Palette,
      'AI & Creative Technology': Video,
      'Autonomous Systems': Car,
      'AI & Education': BookOpen,
      'AI & Healthcare': Heart,
      'Quantum Computing': Atom,
      'Emerging Computing': Cpu,
      'Molecular Computing': Microscope,
      'Quantum Technology': Atom,
      'Biotechnology': Beaker,
      'Energy Technology': Zap,
      'Neurotechnology': Brain,
      'Space Technology': Satellite,
      'Materials Science': Microscope,
      'Climate Technology': Leaf,
      'Digital Technology': Sparkles
    };
    return iconMap[category] || Target;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-pink-500',
      'Cloud & Infrastructure': 'from-blue-500 to-indigo-500',
      'Blockchain & Web3': 'from-green-500 to-emerald-500',
      'Internet of Things': 'from-cyan-500 to-blue-500',
      'Customer Experience': 'from-orange-500 to-yellow-500',
      'Supply Chain Management': 'from-indigo-500 to-purple-500',
      'Human Resources': 'from-pink-500 to-rose-500',
      'Financial Technology': 'from-emerald-500 to-green-500',
      'Legal Technology': 'from-slate-500 to-gray-500',
      'Real Estate Technology': 'from-amber-500 to-orange-500',
      'Healthcare Technology': 'from-red-500 to-pink-500',
      'Energy Management': 'from-yellow-500 to-orange-500',
      'Creative Design': 'from-purple-500 to-indigo-500',
      'AI & Creative Technology': 'from-pink-500 to-purple-500',
      'Autonomous Systems': 'from-blue-500 to-cyan-500',
      'AI & Education': 'from-green-500 to-emerald-500',
      'AI & Healthcare': 'from-red-500 to-rose-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'Emerging Computing': 'from-violet-500 to-purple-500',
      'Molecular Computing': 'from-emerald-500 to-teal-500',
      'Quantum Technology': 'from-blue-500 to-indigo-500',
      'Biotechnology': 'from-green-500 to-emerald-500',
      'Energy Technology': 'from-yellow-500 to-orange-500',
      'Neurotechnology': 'from-purple-500 to-pink-500',
      'Space Technology': 'from-slate-500 to-gray-500',
      'Materials Science': 'from-amber-500 to-yellow-500',
      'Climate Technology': 'from-emerald-500 to-green-500',
      'Digital Technology': 'from-cyan-500 to-blue-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover our extensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business and drive digital innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">{allServices.length}+</div>
                <div className="text-sm">Services Available</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm">Uptime Guarantee</div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center mr-4`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-cyan-400 font-medium">{service.currency}{service.price.toLocaleString()}/{service.pricingModel}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="text-xs text-gray-400">• {benefit}</div>
=======
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-purple-500 to-pink-500',
      'AI & Financial Technology': 'from-green-500 to-emerald-500',
      'AI & Healthcare': 'from-red-500 to-pink-500',
      'AI & Legal Technology': 'from-blue-500 to-indigo-500',
      'AI & Manufacturing': 'from-orange-500 to-yellow-500',
      'AI & Retail Technology': 'from-purple-500 to-pink-500',
      'AI & Real Estate': 'from-teal-500 to-cyan-500',
      'AI & Education Technology': 'from-indigo-500 to-purple-500',
      'AI & Logistics': 'from-blue-500 to-cyan-500',
      'AI & Energy Technology': 'from-yellow-500 to-orange-500',
      'AI & Marketing Technology': 'from-pink-500 to-red-500',
      'Quantum Computing': 'from-blue-500 to-cyan-500',
      'Edge Computing': 'from-green-500 to-teal-500',
      'Neuromorphic Computing': 'from-purple-500 to-indigo-500',
      '6G Networks': 'from-cyan-500 to-blue-500',
      'Space Technology': 'from-indigo-500 to-purple-500',
      'Brain-Computer Interface': 'from-pink-500 to-red-500',
      'Synthetic Biology': 'from-green-500 to-emerald-500',
      'Quantum Internet': 'from-blue-500 to-indigo-500',
      'Fusion Energy': 'from-yellow-500 to-orange-500',
      'Metaverse': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-pink-500',
      'Cloud Computing': 'from-blue-500 to-indigo-500',
      'IT Operations': 'from-gray-500 to-slate-500',
      'Data Management': 'from-teal-500 to-cyan-500',
      'Network Management': 'from-indigo-500 to-purple-500',
      'DevOps': 'from-orange-500 to-yellow-500',
      'Application Management': 'from-green-500 to-emerald-500',
      'IT Service Management': 'from-blue-500 to-cyan-500',
      'Cloud Services': 'from-cyan-500 to-blue-500',
      'Business Continuity': 'from-emerald-500 to-teal-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <SEOHead 
        title="Comprehensive Services Showcase - Zion Tech Group"
        description="Explore our complete portfolio of AI-powered solutions, emerging technologies, and specialized IT services designed to transform your business."
        keywords="AI services, emerging technology, IT solutions, micro SAAS, quantum computing, cybersecurity, cloud services"
        type="website"
        url="https://ziontechgroup.com/comprehensive-services-showcase"
      />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span> Showcase
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our complete portfolio of cutting-edge AI solutions, emerging technologies, and specialized IT services. 
            From micro SAAS applications to quantum computing platforms, we provide the tools you need to stay ahead of the competition.
=======
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Beta':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Coming Soon':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'enterprise':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'premium':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'standard':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
=======
  const allServices = [
    ...ADVANCED_AI_SERVICES,
    ...CYBERSECURITY_SERVICES,
    ...DEVOPS_CLOUD_SERVICES,
    ...DATA_ANALYTICS_SERVICES,
    ...INDUSTRY_SOLUTIONS
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Financial Services', name: 'AI & Financial Services', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'AI & Legal Services', name: 'AI & Legal Services', icon: Brain, color: 'from-indigo-500 to-purple-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'AI & Supply Chain', name: 'AI & Supply Chain', icon: Network, color: 'from-green-500 to-blue-500' },
    { id: 'AI & Energy', name: 'AI & Energy', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'DevOps & Cloud', name: 'DevOps & Cloud', icon: Cloud, color: 'from-blue-500 to-indigo-500' },
    { id: 'Data Analytics', name: 'Data Analytics', icon: BarChart3, color: 'from-green-500 to-teal-500' },
    { id: 'Healthcare', name: 'Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'Financial Services', name: 'Financial Services', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
    { id: 'Manufacturing', name: 'Manufacturing', icon: Building, color: 'from-gray-500 to-blue-500' },
    { id: 'Retail', name: 'Retail', icon: ShoppingCart, color: 'from-blue-500 to-purple-500' },
    { id: 'Education', name: 'Education', icon: Users, color: 'from-indigo-500 to-purple-500' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $2,000', range: 'Under $2,000/month' },
    { id: 'medium', name: '$2,000 - $3,000', range: '$2,000 - $3,000/month' },
    { id: 'high', name: 'Over $3,000', range: 'Over $3,000/month' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'low' && service.price < 2000) ||
                        (selectedPriceRange === 'medium' && service.price >= 2000 && service.price <= 3000) ||
                        (selectedPriceRange === 'high' && service.price > 3000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    const foundCategory = categories.find(cat => cat.id === category);
    return foundCategory ? foundCategory.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const foundCategory = categories.find(cat => cat.id === category);
    return foundCategory ? foundCategory.color : 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Services Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-blue-400/50"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getCategoryIcon(service.category)}
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSupportLevelColor(service.supportLevel)}`}>
                      {service.supportLevel}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                {/* Price */}
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-blue-400">
                        {service.price.currency}{service.price.monthly}
                        <span className="text-sm text-gray-400">/month</span>
                      </p>
                      <p className="text-sm text-gray-400">
                        {service.price.currency}{service.price.yearly}/year (save 17%)
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Market Price</p>
                      <p className="text-sm text-green-400">{service.marketPrice}</p>
                    </div>
                  </div>
                </div>

                {/* ROI */}
                <div className="bg-green-500/20 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">ROI: {service.roi}</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <p className="text-xs text-gray-500">+{service.features.length - 3} more features</p>
                    )}
                  </ul>
                </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
=======
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Bot, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Factory, Store, Car, Plane, Ship, Home, Hospital, Building2, GraduationCap, Calendar, FileText, BarChart3, Users as UsersIcon, CreditCard as CreditCardIcon, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Zap as ZapIcon2, Rocket, Award, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { ADVANCED_AI_SERVICES } from '../data/advancedAIServices';
import { ADVANCED_IT_SERVICES } from '../data/advancedITServices';
import { EMERGING_TECH_SERVICES } from '../data/emergingTechServices';
import { INDUSTRY_SPECIFIC_SOLUTIONS } from '../data/industrySpecificSolutions';

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');

  // Combine all services
  const allServices = [
    ...ADVANCED_AI_SERVICES.map(service => ({ ...service, type: 'AI Services', category: service.category })),
    ...ADVANCED_IT_SERVICES.map(service => ({ ...service, type: 'IT Services', category: service.category })),
    ...EMERGING_TECH_SERVICES.map(service => ({ ...service, type: 'Emerging Tech', category: service.category })),
    ...INDUSTRY_SPECIFIC_SOLUTIONS.map(service => ({ ...service, type: 'Industry Solutions', category: service.category, industry: service.industry }))
  ];

  const categories = ['all', 'AI Services', 'IT Services', 'Emerging Tech', 'Industry Solutions'];
  const industries = ['all', 'Healthcare', 'Manufacturing', 'Financial Services', 'Retail & E-commerce', 'Energy & Utilities', 'Transportation & Logistics'];
  const pricingModels = ['all', 'monthly', 'yearly', 'one-time', 'per-user', 'per-project', 'usage-based'];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.type === selectedCategory;
    const matchesIndustry = selectedIndustry === 'all' || !service.industry || service.industry === selectedIndustry;
    const matchesPricing = selectedPricing === 'all' || service.pricingModel === selectedPricing;
    
    return matchesSearch && matchesCategory && matchesIndustry && matchesPricing;
  });

  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'monthly':
        return `$${price.toLocaleString()}/month`;
      case 'yearly':
        return `$${(price * 12).toLocaleString()}/year`;
      case 'one-time':
        return `$${price.toLocaleString()}`;
      case 'per-user':
        return `$${price}/user/month`;
      case 'per-project':
        return `$${price.toLocaleString()}`;
      case 'usage-based':
        return `$${price}/usage`;
      default:
        return `$${price.toLocaleString()}`;
    }
  };

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'AI Services': return <Brain className="w-6 h-6" />;
      case 'IT Services': return <Cpu className="w-6 h-6" />;
      case 'Emerging Tech': return <Rocket className="w-6 h-6" />;
      case 'Industry Solutions': return <Building className="w-6 h-6" />;
      default: return <ZapIcon2 className="w-6 h-6" />;
    }
  };

  const getServiceColor = (type: string) => {
    switch (type) {
      case 'AI Services': return 'from-purple-500 to-blue-500';
      case 'IT Services': return 'from-blue-500 to-cyan-500';
      case 'Emerging Tech': return 'from-green-500 to-emerald-500';
      case 'Industry Solutions': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 90) return 'text-yellow-400';
    if (score >= 85) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
            Comprehensive Services Showcase
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our complete portfolio of cutting-edge AI, IT, and emerging technology solutions designed to transform businesses across all industries
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search comprehensive services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800 text-white">
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {industries.map(industry => (
                <option key={industry} value={industry} className="bg-gray-800 text-white">
                  {industry === 'all' ? 'All Industries' : industry}
                </option>
              ))}
            </select>
            
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {pricingModels.map(pricing => (
                <option key={pricing} value={pricing} className="bg-gray-800 text-white">
                  {pricing === 'all' ? 'All Pricing Models' : pricing}
                </option>
              ))}
            </select>
=======

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                <option value="price-low" className="bg-gray-800 text-white">Price: Low to High</option>
                <option value="price-high" className="bg-gray-800 text-white">Price: High to Low</option>
                <option value="category" className="bg-gray-800 text-white">Sort by Category</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedServices.map((service) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${categoryColor} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <CategoryIcon className="w-8 h-8 text-white" />
                    {service.innovationLevel && (
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                        {service.innovationLevel}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Price and Delivery */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-blue-400">
                      {service.currency}{service.price.toLocaleString()}
                      <span className="text-sm text-gray-400">/{service.pricingModel}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Delivery</div>
                      <div className="text-sm font-semibold">{service.estimatedDelivery}</div>
                    </div>
                  </div>

                  {/* Market Price */}
                  <div className="mb-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="text-sm text-gray-400 mb-1">Market Price Range</div>
                    <div className="text-sm font-semibold text-blue-400">{service.marketPrice}</div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features</div>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-blue-400 cursor-pointer hover:underline">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Benefits</div>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Comprehensive Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our complete portfolio of cutting-edge technology solutions, AI services, and innovative business solutions designed to transform your organization
          </p>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg p-6 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-zion-cyan mb-4">Ready to Transform Your Business?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-zion-slate-light text-sm">Phone</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div>
                <p className="text-zion-slate-light text-sm">Email</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="text-zion-slate-light text-sm">Website</p>
                <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light font-semibold">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-light/20 text-zion-slate-light hover:bg-zion-blue-light/30 border border-zion-cyan/30'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-light/10 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:bg-zion-blue-light/20 transition-all duration-300 backdrop-blur-sm group"
            >
              {/* Service Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm mb-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-zion-cyan font-bold text-lg">
                    ${service.price.toLocaleString()}/{service.pricingModel}
                  </span>
                  <span className="text-zion-slate-light text-sm">
                    {service.estimatedDelivery}
                  </span>
=======
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`bg-gradient-to-r ${getServiceColor(service.type)} p-2 rounded-lg`}>
                    {getServiceIcon(service.type)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 text-xs font-medium rounded-full text-blue-400 bg-blue-400 bg-opacity-20">
                        {service.type}
                      </span>
                      {service.industry && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full text-green-400 bg-green-400 bg-opacity-20">
                          {service.industry}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
              
              {/* Pricing and Rating */}
              <div className="mb-4">
                <div className="text-2xl font-bold text-white mb-2">
                  {formatPrice(service.price, service.pricingModel)}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  {service.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      {service.rating}
                    </div>
                  )}
                  {service.reviewCount && (
                    <span>({service.reviewCount} reviews)</span>
                  )}
                  {service.aiScore && (
                    <div className={`flex items-center gap-1 ${getScoreColor(service.aiScore)}`}>
                      <Brain className="w-4 h-4" />
                      {service.aiScore}%
                    </div>
                  )}
                  {service.industryExpertise && (
                    <div className={`flex items-center gap-1 ${getScoreColor(service.industryExpertise)}`}>
                      <Award className="w-4 h-4" />
                      {service.industryExpertise}%
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-gray-500/20 text-gray-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Service Details */}
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{service.supportLevel}</span>
=======
                  {/* Delivery & Support */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.estimatedDelivery}
=======
                  </div>

                  {/* ROI */}
                  {service.roi && (
                    <div className="mb-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="text-sm text-gray-400 mb-1">Expected ROI</div>
                      <div className="text-sm font-semibold text-green-400">{service.roi}</div>
                    </div>
                  )}

                  {/* Technology Stack */}
                  {service.technology && (
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Technology Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {service.technology.slice(0, 4).map((tech, index) => (
                          <span key={index} className="bg-white/10 text-xs px-2 py-1 rounded-full border border-white/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expandable Details */}
                  <div className="border-t border-white/20 pt-4">
                    <button
                      onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                      className="w-full flex items-center justify-between text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span className="text-sm font-semibold">
                        {expandedService === service.id ? 'Hide Details' : 'View Details'}
                      </span>
                      {expandedService === service.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-4"
                      >
                        {/* Use Cases */}
                        <div>
                          <div className="text-sm text-gray-400 mb-2">Use Cases</div>
                          <div className="space-y-1">
                            {service.useCases.map((useCase, index) => (
                              <div key={index} className="text-sm text-gray-300">• {useCase}</div>
                            ))}
                          </div>
                        </div>

                        {/* Target Audience */}
                        <div>
                          <div className="text-sm text-gray-400 mb-2">Target Audience</div>
                          <div className="space-y-1">
                            {service.targetAudience.map((audience, index) => (
                              <div key={index} className="text-sm text-gray-300">• {audience}</div>
                            ))}
                          </div>
                        </div>

                        {/* Tags */}
                        <div>
                          <div className="text-sm text-gray-400 mb-2">Tags</div>
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag, index) => (
                              <span key={index} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-500/30">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* AI Capabilities */}
                        {service.aiCapabilities && (
                          <div>
                            <div className="text-sm text-gray-400 mb-2">AI Capabilities</div>
                            <div className="space-y-1">
                              {service.aiCapabilities.map((capability, index) => (
                                <div key={index} className="text-sm text-gray-300">• {capability}</div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Technology Readiness */}
                        {service.technologyReadiness && (
                          <div>
                            <div className="text-sm text-gray-400 mb-2">Technology Readiness</div>
                            <div className="text-sm font-semibold text-green-400">{service.technologyReadiness}</div>
                          </div>
                        )}

                        {/* Future Potential */}
                        {service.futurePotential && (
                          <div>
                            <div className="text-sm text-gray-400 mb-2">Future Potential</div>
                            <div className="text-sm font-semibold text-purple-400">{service.futurePotential}</div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Contact Information */}
                  <div className="mt-6 pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Phone className="w-4 h-4" />
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Mail className="w-4 h-4" />
                        <span>{service.contactInfo.email}</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-center">
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Visit Website
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                    className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-center block transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
                {/* Market Price */}
                <div className="mb-4 p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>Market Price: {service.marketPrice}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the right technology solutions. 
              Get in touch to discuss your needs and discover how we can accelerate your digital transformation.
            </p>
            
            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white font-medium">+1 302 464 0950</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-medium">kleber@ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Address</div>
                  <div className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Contact Us Today
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                View All Services
              </Link>
=======
          </div>
        ) : (
          <div className="space-y-4">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Service Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getCategoryIcon(service.category)}
                        <div>
                          <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                          <p className="text-gray-400">{service.category} • {service.subcategory}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSupportLevelColor(service.supportLevel)}`}>
                          {service.supportLevel}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{service.description}</p>

                    {/* Features and Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-blue-400" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 4).map((benefit, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Contact */}
                  <div className="space-y-4">
                    {/* Price */}
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-400">
                          {service.price.currency}{service.price.monthly}
                          <span className="text-sm text-gray-400">/month</span>
                        </p>
                        <p className="text-sm text-gray-400">
                          {service.price.currency}{service.price.yearly}/year
                        </p>
                        <p className="text-xs text-green-400 mt-1">Save 17% annually</p>
                      </div>
                    </div>

                    {/* ROI */}
                    <div className="bg-green-500/20 rounded-lg p-3">
                      <div className="flex items-center justify-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-semibold">ROI: {service.roi}</span>
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-400">Market Price</p>
                      <p className="text-sm text-green-400 font-semibold">{service.marketPrice}</p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-center block transition-colors duration-200 font-semibold"
                      >
                        Contact Sales
                      </a>
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg text-center block transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
=======
        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedPriceRange('All');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-gray-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Our team of experts is ready to help you implement the perfect technology solution for your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">ziontechgroup.com</p>
=======
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of innovative AI, cybersecurity, DevOps, and industry-specific solutions designed to transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
=======
              </div>

              {/* Contact and Actions */}
              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {service.estimatedDelivery}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={service.demoUrl}
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a 
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors flex items-center gap-1"
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Categories Overview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Service Categories Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI Services",
                description: "Advanced artificial intelligence solutions for business transformation",
                count: ADVANCED_AI_SERVICES.length,
                icon: <Brain className="w-8 h-8" />,
                color: "from-purple-500 to-blue-500",
                link: "/ai-services"
              },
              {
                title: "IT Services",
                description: "Comprehensive IT infrastructure and managed services",
                count: ADVANCED_IT_SERVICES.length,
                icon: <Cpu className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
                link: "/it-services"
              },
              {
                title: "Emerging Tech",
                description: "Cutting-edge technology solutions for future-ready businesses",
                count: EMERGING_TECH_SERVICES.length,
                icon: <Rocket className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                link: "/emerging-tech"
              },
              {
                title: "Industry Solutions",
                description: "Tailored solutions for specific industry verticals",
                count: INDUSTRY_SPECIFIC_SOLUTIONS.length,
                icon: <Building className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
                link: "/industry-solutions"
              }
            ].map((category, index) => (
              <div key={category.title} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg inline-block mb-4 text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                <div className="text-2xl font-bold text-blue-400 mb-4">{category.count} Services</div>
                <a 
                  href={category.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Our comprehensive suite of services is designed to meet your specific business needs and drive innovation
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="https://ziontechgroup.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Website <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs. 
              Get in touch today to start your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Phone className="h-12 w-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400">+1 302 464 0950</p>
              <p className="text-gray-400">Available 24/7</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Mail className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
              <p className="text-gray-400">Response within 2 hours</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="h-12 w-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400">364 E Main St STE 1008</p>
              <p className="text-gray-400">Middletown DE 19709</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Brain className="h-12 w-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI-First Approach</h3>
              <p className="text-gray-400">
                Leverage the latest artificial intelligence and machine learning technologies to gain competitive advantages.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-400">
                Bank-grade security and compliance built into every solution to protect your business and data.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Rocket className="h-12 w-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
              <p className="text-gray-400">
                Get up and running quickly with our proven implementation methodologies and expert support.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-gray-400">
                24/7 technical support and dedicated success managers to ensure your success.
              </p>
            </div>
          </div>

          <div className="space-x-4">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Consultation Request"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
            >
              Get Free Consultation
            </a>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Missing icon components
const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 19 7.5 19s3.332-.523 4.5-1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 19 16.5 19c-1.746 0-3.332-.523-4.5-1.253" />
  </svg>
);

const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
=======
              </div>

              {/* Market Price & Contact */}
              <div className="border-t border-zion-cyan/20 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-zion-slate-light text-sm">Market Price:</span>
                  <span className="text-white font-semibold">{service.marketPrice}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-slate-light text-sm">Support:</span>
                  <span className="text-zion-cyan font-medium capitalize">{service.supportLevel}</span>
                </div>
                
                {/* Contact Buttons */}
                <div className="flex gap-2">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-semibold py-2 px-4 rounded-lg text-center transition-colors"
                  >
                    Get Quote
                  </a>
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="bg-zion-blue-light/30 hover:bg-zion-blue-light/50 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your business needs. 
              Get in touch today for a personalized consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Digital Transformation Consultation"
                className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-3 px-8 rounded-lg text-lg transition-colors"
              >
                Start Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-zion-blue-light/30 hover:bg-zion-blue-light/50 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors border border-zion-cyan/30"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
=======
    </div>
  );
};

export default ComprehensiveServicesShowcase;
=======
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 text-center border border-white/20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our comprehensive suite of AI, IT, and micro SAAS services is designed to drive innovation, 
            increase efficiency, and provide competitive advantages. Contact us today to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-white transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-6 text-gray-400">
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://ziontechgroup.com</a></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesShowcase;
