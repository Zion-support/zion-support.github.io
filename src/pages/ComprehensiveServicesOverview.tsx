<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
<<<<<<< HEAD
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5c5f
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Users, 
<<<<<<< HEAD
  Globe, 
  Target,
=======
  TrendingUp, 
  Zap, 
  Target, 
  Sparkles,
  Globe,
  Lock,
=======
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Zap,
  Brain,
  Shield,
  Cpu,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
  Database,
  Network,
  Code,
  BarChart3,
<<<<<<< HEAD
  Microchip,
  Atom,
  Satellite,
  Leaf,
  Battery,
  Eye,
  Heart,
  Star,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5c5f
  ArrowRight,
  Phone,
  Mail,
  MapPin,
<<<<<<< HEAD
  ExternalLink,
  CheckCircle,
  Clock,
  DollarSign,
  Award,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

// Import service data
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_NEW_SERVICES } from '../data/innovativeNewServices';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { EMERGING_TECH_SERVICES } from '../data/emergingTechServices';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES } from '../data/specializedITInfrastructureServices';

const ComprehensiveServicesOverview: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('innovation');

  // Combine all services
  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...INNOVATIVE_NEW_SERVICES,
    ...ADVANCED_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_SERVICES,
    ...SPECIALIZED_IT_INFRASTRUCTURE_SERVICES
  ];

  // Get unique categories
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  // Price ranges
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-500', label: '$0 - $500/month' },
    { value: '500-1000', label: '$500 - $1,000/month' },
    { value: '1000-2000', label: '$1,000 - $2,000/month' },
    { value: '2000+', label: '$2,000+/month' }
  ];

  // Helper function to get service price
  const getServicePrice = (service: any) => {
    if (typeof service.price === 'number') {
      return service.price;
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

export default function ComprehensiveServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });

  const categories = ['all', ...Array.from(new Set(COMPREHENSIVE_SERVICES.map(service => service.category)))];
  
  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = service.price >= priceRange.min && service.price <= priceRange.max;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8dd6
    }
    if (service.price && typeof service.price === 'object' && service.price.monthly) {
      return service.price.monthly;
    }
    return 0;
  };

<<<<<<< HEAD
  // Helper function to get service tags
  const getServiceTags = (service: any) => {
    if (service.tags && Array.isArray(service.tags)) {
      return service.tags;
    }
    return [];
  };

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const serviceTitle = 'title' in service ? service.title : 'name' in service ? service.name : '';
      const matchesSearch = serviceTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           getServiceTags(service).some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      const servicePrice = getServicePrice(service);
      const matchesPrice = selectedPriceRange === 'all' || 
        (selectedPriceRange === '0-500' && servicePrice <= 500) ||
        (selectedPriceRange === '500-1000' && servicePrice > 500 && servicePrice <= 1000) ||
        (selectedPriceRange === '1000-2000' && servicePrice > 1000 && servicePrice <= 2000) ||
        (selectedPriceRange === '2000+' && servicePrice > 2000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return getServicePrice(a) - getServicePrice(b);
        case 'price-high':
          return getServicePrice(b) - getServicePrice(a);
        case 'innovation':
          const aTags = getServiceTags(a);
          const bTags = getServiceTags(b);
          return bTags.filter(tag => ['AI', 'Quantum', 'Autonomous', 'Innovation'].includes(tag)).length - 
                 aTags.filter(tag => ['AI', 'Quantum', 'Autonomous', 'Innovation'].includes(tag)).length;
        case 'name':
          const aTitle = 'title' in a ? a.title : 'name' in a ? a.name : '';
          const bTitle = 'title' in b ? b.title : 'name' in b ? b.name : '';
          return aTitle.localeCompare(bTitle);
        default:
          return 0;
      }
    });

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Digital Marketing':
      case 'AI & Customer Service':
      case 'AI & Legal Tech':
      case 'AI & Supply Chain':
      case 'AI & Human Resources':
      case 'AI & Financial Services':
      case 'AI & Healthcare':
      case 'AI & Consciousness':
        return Brain;
      case 'Quantum Computing':
        return Zap;
      case 'Cybersecurity':
        return Shield;
      case 'IT Infrastructure':
        return Cpu;
      case 'Space Technology':
        return Rocket;
      case 'Neurotechnology':
        return Target;
      case 'Autonomous Systems':
        return Users;
      case 'Blockchain & Web3':
        return Globe;
      case 'Internet of Things':
        return Cpu;
      default:
        return Lightbulb;
=======
  Target,
  Lightbulb,
  Rocket,
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  Building,
  Globe2,
  Lock,
  Cloud,
  Server,
  Eye,
  Heart,
  Sparkles,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { ADDITIONAL_INNOVATIVE_SERVICES } from '../data/additionalInnovativeServices';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';

export default function ComprehensiveServicesOverview() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combine all services
  const allServices = [...ADDITIONAL_INNOVATIVE_SERVICES, ...SPECIALIZED_IT_SERVICES];

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter services based on search and filters
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Group services by category
  const servicesByCategory = filteredServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Blockchain, 
  Wifi, 
  Cpu, 
  Eye, 
  Zap, 
  TrendingUp, 
  Star, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink,
  ArrowRight,
  Shield,
  Globe,
  Target,
  Users,
  BarChart3,
  Rocket
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { EMERGING_TECH_INNOVATIVE_SERVICES } from '../data/emergingTechInnovativeServices';

const ComprehensiveServicesOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Combine all services
  const allServices = [
    ...ADVANCED_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_INNOVATIVE_SERVICES
  ];

  // Get unique categories
  const categories = Array.from(new Set(allServices.map(service => service.category)));

  // Filter services by category
  const getServicesByCategory = (category: string) => {
    if (category === 'all') return allServices;
    return allServices.filter(service => service.category === category);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Business Intelligence':
      case 'AI & Customer Service':
      case 'AI & Project Management':
      case 'AI & Financial Services':
      case 'AI & Human Resources':
      case 'Artificial Intelligence':
        return <Brain className="w-8 h-8" />;
      case 'Blockchain & Web3':
        return <Blockchain className="w-8 h-8" />;
      case 'Internet of Things':
        return <Wifi className="w-8 h-8" />;
      case 'Quantum Computing':
        return <Cpu className="w-8 h-8" />;
      case 'Extended Reality':
        return <Eye className="w-8 h-8" />;
      default:
        return <Zap className="w-8 h-8" />;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-177b
    }
    acc[service.category].push(service);
    return acc;
  }, {} as { [key: string]: typeof allServices });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Marketing': TrendingUp,
      'AI & Customer Service': Users,
      'AI & Financial Services': DollarSign,
      'AI & Supply Chain': Network,
      'AI & Healthcare': Heart,
      'AI & Legal Tech': Shield,
      'AI & Education': Lightbulb,
      'AI & Energy': Zap,
      'AI & Manufacturing': Building,
      'Cloud & DevOps': Cloud,
      'Cybersecurity': Lock,
      'Data & Analytics': Database,
      'Edge Computing & IoT': Cpu,
      'Integration & APIs': Code,
      'Digital Twin & Simulation': Eye,
      'Blockchain & Web3': Globe2,
      'Quantum Computing': Sparkles
    };
    return iconMap[category] || Target;
  };

<<<<<<< HEAD
<<<<<<< HEAD
  const getServiceColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Digital Marketing':
      case 'AI & Customer Service':
      case 'AI & Legal Tech':
      case 'AI & Supply Chain':
      case 'AI & Human Resources':
      case 'AI & Financial Services':
      case 'AI & Healthcare':
      case 'AI & Consciousness':
        return 'from-blue-500 to-purple-600';
      case 'Quantum Computing':
        return 'from-purple-500 to-pink-600';
      case 'Cybersecurity':
        return 'from-red-500 to-orange-600';
      case 'IT Infrastructure':
        return 'from-green-500 to-emerald-600';
      case 'Space Technology':
        return 'from-indigo-500 to-blue-600';
      case 'Neurotechnology':
        return 'from-pink-500 to-red-600';
      case 'Autonomous Systems':
        return 'from-yellow-500 to-orange-600';
      case 'Blockchain & Web3':
        return 'from-cyan-500 to-blue-600';
      case 'Internet of Things':
        return 'from-emerald-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
=======
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Code, 
  BarChart3,
  Bot,
  Globe,
  Building,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Brain,
  Database,
  Cloud,
  Smartphone,
  FileText,
  Lock,
  Settings,
  DollarSign,
  Clock,
  Target,
  Award,
  Globe2,
  Cpu,
  Heart,
  Eye,
  ExternalLink,
  Play,
  BookOpen,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { ENHANCED_INNOVATIVE_SERVICES } from '@/data/enhancedInnovativeServices';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '@/data/innovativeMicroSaasServices';
import { motion } from 'framer-motion';
import EnhancedSEO from '@/components/EnhancedSEO';

// Combine all services
const ALL_SERVICES = [
  ...ENHANCED_INNOVATIVE_SERVICES,
  ...COMPREHENSIVE_SERVICES,
  ...INNOVATIVE_MICRO_SAAS_SERVICES
] as any[];

const categoryIcons = {
  'AI & Legal Tech': FileText,
  'AI & FinTech': DollarSign,
  'AI & Healthcare': Heart,
  'Cybersecurity & Quantum': Shield,
  'AI & Supply Chain': Building,
  'AI & Energy': Zap,
  'AI & Customer Experience': Users,
  'Quantum & AI': Cpu,
  'AI & Data Governance': Database,
  'AI & HR Tech': Users,
  'AI & Machine Learning': Brain,
  'AI & Business Intelligence': BarChart3,
  'AI & Marketing Automation': Target,
  'AI & CRM': Users,
  'AI & ERP': Building,
  'AI & Project Management': Code,
  'AI & Autonomous Systems': Bot,
  'AI & Research': Brain,
  'AI & Content Generation': FileText,
  'AI & Voice Technology': Smartphone,
  'AI & Video Generation': Eye,
  'AI & Threat Intelligence': Shield,
  'AI & Cloud Management': Cloud,
  'AI & DevOps': Code
};

const categoryColors = {
  'AI & Legal Tech': 'from-blue-500 to-indigo-500',
  'AI & FinTech': 'from-green-500 to-emerald-500',
  'AI & Healthcare': 'from-red-500 to-pink-500',
  'Cybersecurity & Quantum': 'from-purple-500 to-violet-500',
  'AI & Supply Chain': 'from-orange-500 to-red-500',
  'AI & Energy': 'from-yellow-500 to-orange-500',
  'AI & Customer Experience': 'from-pink-500 to-rose-500',
  'Quantum & AI': 'from-cyan-500 to-blue-500',
  'AI & Data Governance': 'from-indigo-500 to-purple-500',
  'AI & HR Tech': 'from-teal-500 to-green-500',
  'AI & Machine Learning': 'from-purple-500 to-pink-500',
  'AI & Business Intelligence': 'from-indigo-500 to-purple-500',
  'AI & Marketing Automation': 'from-pink-500 to-rose-500',
  'AI & CRM': 'from-blue-500 to-cyan-500',
  'AI & ERP': 'from-green-500 to-emerald-500',
  'AI & Project Management': 'from-orange-500 to-red-500',
  'AI & Autonomous Systems': 'from-purple-500 to-violet-500',
  'AI & Research': 'from-cyan-500 to-blue-500',
  'AI & Content Generation': 'from-indigo-500 to-purple-500',
  'AI & Voice Technology': 'from-teal-500 to-green-500',
  'AI & Video Generation': 'from-pink-500 to-rose-500',
  'AI & Threat Intelligence': 'from-red-500 to-pink-500',
  'AI & Cloud Management': 'from-blue-500 to-cyan-500',
  'AI & DevOps': 'from-orange-500 to-red-500'
};

const supportLevelColors = {
  'premium': 'bg-gradient-to-r from-blue-500 to-cyan-500',
  'enterprise': 'bg-gradient-to-r from-purple-500 to-pink-500',
  'basic': 'bg-gradient-to-r from-green-500 to-emerald-500'
};

export default function ComprehensiveServicesOverview() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');

  const filteredServices = useMemo(() => {
    let filtered = ALL_SERVICES;

    // Search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        (service.tags && service.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Price range filter
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'low':
          filtered = filtered.filter(service => {
            const price = typeof service.price === 'number' ? service.price : service.price?.monthly || 0;
            return price <= 1000;
          });
          break;
        case 'medium':
          filtered = filtered.filter(service => {
            const price = typeof service.price === 'number' ? service.price : service.price?.monthly || 0;
            return price > 1000 && price <= 3000;
          });
          break;
        case 'high':
          filtered = filtered.filter(service => {
            const price = typeof service.price === 'number' ? service.price : service.price?.monthly || 0;
            return price > 3000;
          });
          break;
      }
=======
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Business Intelligence':
      case 'AI & Customer Service':
      case 'AI & Project Management':
      case 'AI & Financial Services':
      case 'AI & Human Resources':
      case 'Artificial Intelligence':
        return 'from-purple-500 to-pink-500';
      case 'Blockchain & Web3':
        return 'from-yellow-500 to-orange-500';
      case 'Internet of Things':
        return 'from-indigo-500 to-purple-500';
      case 'Quantum Computing':
        return 'from-cyan-500 to-blue-500';
      case 'Extended Reality':
        return 'from-pink-500 to-purple-500';
      default:
        return 'from-gray-500 to-blue-500';
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Business Intelligence':
      case 'AI & Customer Service':
      case 'AI & Project Management':
      case 'AI & Financial Services':
      case 'AI & Human Resources':
      case 'Artificial Intelligence':
        return 'Transform your business with cutting-edge AI solutions that automate processes, provide insights, and drive innovation.';
      case 'Blockchain & Web3':
        return 'Build secure, transparent, and decentralized applications with enterprise-grade blockchain technology.';
      case 'Internet of Things':
        return 'Connect and optimize your devices with intelligent IoT solutions that provide real-time data and automation.';
      case 'Quantum Computing':
        return 'Access the future of computing with quantum solutions that solve complex problems exponentially faster.';
      case 'Extended Reality':
        return 'Create immersive experiences with VR, AR, and MR technologies for training, collaboration, and customer engagement.';
      default:
        return 'Innovative technology solutions designed to drive your business forward.';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-177b
=======
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Scale, 
  Leaf, 
  Heart, 
  Cpu, 
  TrendingUp, 
  Atom, 
  Truck, 
  Globe,
  Star,
  Zap,
  Users,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Grid,
  List,
  DollarSign,
  Clock,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';
import { INNOVATIVE_NEW_SERVICES } from '../data/innovativeNewServices';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';

export default function ComprehensiveServicesOverview() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Combine all services
  const allServices = [...INNOVATIVE_NEW_SERVICES, ...COMPREHENSIVE_SERVICES];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Price ranges
  const priceRanges = [
    'All',
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    'Over $5,000'
  ];

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Creative Services':
      case 'AI & Legal Tech':
      case 'AI & Healthcare':
      case 'AI & FinTech':
      case 'AI & Supply Chain':
        return Brain;
      case 'Cybersecurity':
        return Shield;
      case 'Blockchain & Web3':
        return Scale;
      case 'Sustainability & Tech':
        return Leaf;
      case 'Internet of Things':
        return Heart;
      case 'Edge Computing':
        return Cpu;
      case 'Quantum Computing':
        return Atom;
      case 'Metaverse & VR':
        return Globe;
      default:
        return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Creative Services':
      case 'AI & Legal Tech':
      case 'AI & Healthcare':
      case 'AI & FinTech':
      case 'AI & Supply Chain':
        return 'from-purple-500 to-pink-500';
      case 'Cybersecurity':
        return 'from-red-500 to-orange-500';
      case 'Blockchain & Web3':
        return 'from-blue-500 to-indigo-500';
      case 'Sustainability & Tech':
        return 'from-green-500 to-emerald-500';
      case 'Internet of Things':
        return 'from-pink-500 to-red-500';
      case 'Edge Computing':
        return 'from-cyan-500 to-blue-500';
      case 'Quantum Computing':
        return 'from-violet-500 to-purple-500';
      case 'Metaverse & VR':
        return 'from-indigo-500 to-purple-500';
      default:
        return 'from-gray-500 to-gray-700';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-069c
    }

    // Support level filter
    if (selectedSupportLevel !== 'all') {
      filtered = filtered.filter(service => service.supportLevel === selectedSupportLevel);
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, selectedSupportLevel]);

  const categories = Array.from(new Set(ALL_SERVICES.map(service => service.category))).sort();

  const formatPrice = (price: any) => {
    if (typeof price === 'number') {
      if (price >= 1000) {
        return `$${(price / 1000).toFixed(1)}k`;
      }
      return `$${price}`;
    }
    if (price?.monthly) {
      if (price.monthly >= 1000) {
        return `$${(price.monthly / 1000).toFixed(1)}k`;
      }
      return `$${price.monthly}`;
    }
    return 'Contact Us';
  };

<<<<<<< HEAD
  const getServicePrice = (service: any) => {
    if (typeof service.price === 'number') {
      return service.price;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
=======
  const isInPriceRange = (price: number, range: string) => {
    switch (range) {
      case 'Under $500':
        return price < 500;
      case '$500 - $1,000':
        return price >= 500 && price < 1000;
      case '$1,000 - $2,500':
        return price >= 1000 && price < 2500;
      case '$2,500 - $5,000':
        return price >= 2500 && price < 5000;
      case 'Over $5,000':
        return price >= 5000;
      default:
        return true;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-069c
    }
    return service.price?.monthly || 0;
  };

<<<<<<< HEAD
  const getServiceCurrency = (service: any) => {
    if (typeof service.price === 'number') {
      return service.currency || '$';
    }
    return service.price?.currency || '$';
  };

  const getServicePricingModel = (service: any) => {
    if (typeof service.price === 'number') {
      return service.pricingModel || 'monthly';
    }
    return service.price?.pricingModel || 'monthly';
  };

  return (
<<<<<<< HEAD
    <>
<<<<<<< HEAD
      <SEOHead 
        title="Comprehensive Technology Services - Zion Tech Group"
        description="Explore our comprehensive portfolio of cutting-edge technology services including AI, Quantum Computing, Cybersecurity, IT Infrastructure, and more. Transform your business with innovative solutions."
        keywords="technology services, AI services, quantum computing, cybersecurity, IT infrastructure, micro SaaS, autonomous systems, space technology, neurotechnology"
        image="/images/services-overview-og.jpg"
        canonical="https://ziontechgroup.com/comprehensive-services-overview"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Cutting-Edge Technology Solutions
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Technology
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Services Portfolio
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our extensive range of innovative technology services designed to accelerate your business growth, 
              enhance security, and drive digital transformation. From AI-powered solutions to quantum computing, 
              we deliver cutting-edge technology that gives you a competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>500+ Services Available</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                <span>Industry Leading Innovation</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="w-5 h-5 text-blue-400 mr-2" />
                <span>Global Support</span>
=======
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesPrice = isInPriceRange(service.price, selectedPriceRange);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const totalServices = allServices.length;
  const filteredCount = filteredServices.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group" 
        description="Explore our complete portfolio of micro SAAS services, IT solutions, and AI platforms. Find the perfect solution for your business needs with detailed pricing and features."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete Services Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-zion-blue-light mb-8 max-w-4xl mx-auto">
              Discover our comprehensive range of innovative solutions designed to transform your business and drive growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">{totalServices}+ Services</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">AI-Powered Solutions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">Competitive Pricing</span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-069c
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, features, or technologies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Options */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setSortBy('innovation')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === 'innovation'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                <Lightbulb className="w-4 h-4 inline mr-2" />
                Most Innovative
              </button>
              <button
                onClick={() => setSortBy('price-low')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === 'price-low'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                <DollarSign className="w-4 h-4 inline mr-2" />
                Price: Low to High
              </button>
              <button
                onClick={() => setSortBy('price-high')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === 'price-high'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                <DollarSign className="w-4 h-4 inline mr-2" />
                Price: High to Low
              </button>
              <button
                onClick={() => setSortBy('name')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === 'name'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                A-Z
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-gray-400">
                Discover innovative solutions tailored to your business needs
              </p>
=======
  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Marketing': 'from-pink-500 to-rose-600',
      'AI & Customer Service': 'from-blue-500 to-indigo-600',
      'AI & Financial Services': 'from-green-500 to-emerald-600',
      'AI & Supply Chain': 'from-purple-500 to-violet-600',
      'AI & Healthcare': 'from-red-500 to-pink-600',
      'AI & Legal Tech': 'from-yellow-500 to-orange-600',
      'AI & Education': 'from-cyan-500 to-blue-600',
      'AI & Energy': 'from-orange-500 to-red-600',
      'AI & Manufacturing': 'from-indigo-500 to-purple-600',
      'Cloud & DevOps': 'from-blue-500 to-cyan-600',
      'Cybersecurity': 'from-red-500 to-orange-600',
      'Data & Analytics': 'from-green-500 to-teal-600',
      'Edge Computing & IoT': 'from-purple-500 to-pink-600',
      'Integration & APIs': 'from-yellow-500 to-green-600',
      'Digital Twin & Simulation': 'from-indigo-500 to-blue-600',
      'Blockchain & Web3': 'from-emerald-500 to-green-600',
      'Quantum Computing': 'from-violet-500 to-purple-600'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  const getCategoryDescription = (category: string) => {
    const descriptions: { [key: string]: string } = {
      'AI & Marketing': 'AI-powered marketing solutions that optimize campaigns, personalize content, and drive conversions',
      'AI & Customer Service': 'Intelligent customer experience platforms that deliver personalized, omnichannel support',
      'AI & Financial Services': 'Advanced financial analytics and risk management solutions powered by AI',
      'AI & Supply Chain': 'Intelligent supply chain optimization platforms that reduce costs and improve efficiency',
      'AI & Healthcare': 'AI-powered healthcare analytics and clinical decision support systems',
      'AI & Legal Tech': 'Intelligent legal research and compliance automation platforms',
      'AI & Education': 'Personalized learning platforms that adapt to individual student needs',
      'AI & Energy': 'Smart energy management solutions that optimize consumption and reduce costs',
      'AI & Manufacturing': 'Intelligent manufacturing platforms that optimize production and quality control',
      'Cloud & DevOps': 'Enterprise-grade cloud-native development and DevOps automation platforms',
      'Cybersecurity': 'Advanced security frameworks including zero-trust architecture and threat detection',
      'Data & Analytics': 'Comprehensive data lake and analytics platforms for enterprise insights',
      'Edge Computing & IoT': 'Edge computing and IoT management platforms for real-time processing',
      'Integration & APIs': 'Enterprise API management and system integration platforms',
      'Digital Twin & Simulation': 'Digital twin platforms for industrial applications and simulation',
      'Blockchain & Web3': 'Enterprise blockchain platforms for secure, transparent business processes',
      'Quantum Computing': 'Quantum computing services for research and enterprise applications'
    };
    return descriptions[category] || 'Innovative technology solutions for modern businesses';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group" 
        description="Explore our complete portfolio of AI-powered services, specialized IT solutions, and innovative technology platforms designed to transform your business."
        keywords="comprehensive services, AI solutions, IT services, technology platforms, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/comprehensive-services-overview"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Complete Portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Comprehensive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
              Services Overview
            </span>
            <span className="block text-3xl md:text-4xl text-zion-slate-light mt-4">
              Your Complete Technology Solution Partner
            </span>
          </h1>
          
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our extensive portfolio of {allServices.length}+ innovative services and solutions 
            designed to accelerate your digital transformation and drive business innovation across all industries.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-zion-slate-light">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2 text-zion-cyan" />
              <span>https://ziontechgroup.com</span>
=======
              <EnhancedSEO
          title="Comprehensive Services Overview | Zion Tech Group"
          description="Explore our complete portfolio of AI-powered services, IT solutions, and innovative micro SAAS platforms. From legal tech to quantum computing, discover how we can transform your business."
          keywords="AI services, IT solutions, micro SAAS, cybersecurity, quantum computing, legal tech, fintech, healthcare AI, supply chain, energy management, comprehensive services"
          image="/images/comprehensive-services-overview-og.jpg"
          url="https://ziontechgroup.com/comprehensive-services-overview"
        />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-blue/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

<<<<<<< HEAD
        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="h-5 w-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Complete Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent leading-tight">
              Comprehensive Services Overview
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-10 leading-relaxed">
              Discover our complete portfolio of AI-powered services, IT solutions, and innovative micro SAAS platforms designed to transform your business operations and drive innovation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full px-4 py-2">
                <CheckCircle className="h-4 w-4 text-zion-purple" />
                <span className="text-zion-purple text-sm font-medium">{ALL_SERVICES.length}+ Services</span>
              </div>
              <div className="flex items-center gap-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-zion-cyan" />
                <span className="text-zion-cyan text-sm font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 bg-zion-blue/20 border border-zion-blue/30 rounded-full px-4 py-2">
                <Shield className="h-4 w-4 text-zion-blue" />
                <span className="text-zion-blue text-sm font-medium">Enterprise Ready</span>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-zion-slate-light"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Price Range Filter */}
              <Select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under $1k/month</SelectItem>
                  <SelectItem value="high">Over $3k/month</SelectItem>
                </SelectContent>
              </Select>

              {/* Support Level Filter */}
              <Select value={selectedSupportLevel} onChange={(e) => setSelectedSupportLevel(e.target.value)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="All Support Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Support Levels</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Services Count */}
          <div className="text-center mb-12">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Services Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">{ALL_SERVICES.length}</div>
                  <div className="text-zion-slate-light">Total Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-purple mb-2">{categories.length}</div>
                  <div className="text-zion-slate-light">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-blue mb-2">{filteredServices.length}</div>
                  <div className="text-zion-slate-light">Filtered Results</div>
                </div>
              </div>
            </div>
          </div>

          {/* All Services */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">All Services</h2>
              <span className="text-zion-slate-light">
                {filteredServices.length} of {ALL_SERVICES.length} services
              </span>
            </div>
            
            {filteredServices.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-zion-slate-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light">Try adjusting your search criteria or filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 group">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-xl ${categoryColors[service.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600'}`}>
                            {React.createElement(categoryIcons[service.category as keyof typeof categoryIcons] || Settings, { 
                              className: "h-6 w-6 text-white" 
                            })}
                          </div>
                          <div className="text-right">
                            {service.supportLevel && (
                              <Badge className={`${supportLevelColors[service.supportLevel as keyof typeof supportLevelColors] || 'bg-gray-500'} text-white mb-2`}>
                                {service.supportLevel}
                              </Badge>
                            )}
                            <div className="text-2xl font-bold text-zion-cyan">
                              {formatPrice(service.price)}/{getServicePricingModel(service)}
                            </div>
                          </div>
                        </div>
                        
                        <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          {service.estimatedDelivery && (
                            <div className="flex items-center gap-2 text-zion-slate-light">
                              <Clock className="h-4 w-4" />
                              <span>{service.estimatedDelivery}</span>
                            </div>
                          )}
                          {service.marketPrice && (
                            <div className="flex items-center gap-2 text-zion-slate-light">
                              <Target className="h-4 w-4" />
                              <span>{service.marketPrice}</span>
                            </div>
                          )}
                        </div>
                        
                        {service.features && service.features.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="font-semibold text-white text-sm">Key Features:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <Badge key={idx} variant="secondary" className="bg-white/10 text-zion-slate-light border-white/20">
                                  {feature}
                                </Badge>
                              ))}
                              {service.features.length > 3 && (
                                <Badge variant="secondary" className="bg-white/10 text-zion-slate-light border-white/20">
                                  +{service.features.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {'technologyStack' in service && service.technologyStack && service.technologyStack.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="font-semibold text-white text-sm">Technology Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologyStack.slice(0, 4).map((tech, idx) => (
                                <Badge key={idx} variant="outline" className="border-zion-cyan/30 text-zion-cyan">
                                  {tech}
                                </Badge>
                              ))}
                              {service.technologyStack.length > 4 && (
                                <Badge variant="outline" className="border-zion-cyan/30 text-zion-cyan">
                                  +{service.technologyStack.length - 4}
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                      </CardContent>
                      
                      <CardFooter className="pt-0">
                        <div className="w-full space-y-3">
                          <Button 
                            className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/80 hover:to-zion-cyan/80 text-white"
                            asChild
                          >
                            <a href={'websiteUrl' in service ? service.websiteUrl : service.contactInfo?.website || 'https://ziontechgroup.com'} target="_blank" rel="noopener noreferrer">
                              Learn More
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                          
                          <div className="flex gap-2">
                            {'demoUrl' in service && service.demoUrl && (
                              <Button variant="outline" size="sm" className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                                <a href={service.demoUrl} target="_blank" rel="noopener noreferrer">
                                  <Play className="mr-2 h-4 w-4" />
                                  Demo
                                </a>
                              </Button>
                            )}
                            {'documentationUrl' in service && service.documentationUrl && (
                              <Button variant="outline" size="sm" className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                                <a href={service.documentationUrl} target="_blank" rel="noopener noreferrer">
                                  <BookOpen className="mr-2 h-4 w-4" />
                                  Docs
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Contact our team to learn more about these innovative services and how they can drive your business forward.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="h-8 w-8 text-zion-cyan mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Phone</h4>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-zion-purple mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Email</h4>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-zion-blue mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Address</h4>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/80 hover:to-zion-cyan/80 text-white" asChild>
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/20" asChild>
                <a href="tel:+13024640950">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </a>
              </Button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Comprehensive Technology Services Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our complete portfolio of AI-powered solutions, emerging technologies, and innovative micro SAAS platforms designed to transform your business operations and drive exponential growth.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Ready to Get Started?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
=======
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'AI & Machine Learning': '🤖',
      'Cybersecurity': '🔒',
      'Blockchain & Web3': '⛓️',
      'Internet of Things': '🌐',
      'Edge Computing': '⚡',
      'Emerging Technology': '🚀',
      'Data Management': '📊',
      'IT Infrastructure': '🏗️'
    };
    return icons[category] || '💡';
  };

  return (
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
            Comprehensive Services Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our complete range of innovative micro SAAS services, AI solutions, and cutting-edge technology services designed to transform your business
          </p>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg p-6 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-zion-cyan mb-4">Transform Your Business Today</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-zion-cyan font-semibold">📱 Mobile:</span>
                <br />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <span className="text-zion-cyan font-semibold">✉️ Email:</span>
                <br />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <span className="text-zion-cyan font-semibold">🌐 Website:</span>
                <br />
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-zion-slate-light">
              <span className="text-zion-cyan font-semibold">📍 Address:</span> 364 E Main St STE 1008, Middletown DE 19709
            </div>
          </div>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search Bar */}
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

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              >
                <option value="all">All Categories</option>
                {categories.filter(cat => cat !== 'all').map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* Price Range */}
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min $"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                  className="flex-1 px-4 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
                />
                <input
                  type="number"
                  placeholder="Max $"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                  className="flex-1 px-4 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan">{COMPREHENSIVE_SERVICES.length}+</div>
              <div className="text-zion-slate-light">Total Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan">{categories.length - 1}</div>
              <div className="text-zion-slate-light">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan">24/7</div>
              <div className="text-zion-slate-light">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan">Global</div>
              <div className="text-zion-slate-light">Delivery</div>
            </div>
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
              className="bg-zion-blue-light/10 border border-zion-cyan/20 rounded-xl p-6 backdrop-blur-sm hover:border-zion-cyan/40 hover:bg-zion-blue-light/20 transition-all duration-300 group"
            >
              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                    <span className="text-xs font-medium text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-zion-cyan">
                    {service.currency}{service.price.toLocaleString()}
                    <span className="text-sm text-zion-slate-light">/{service.pricingModel}</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Market Price & Delivery */}
              <div className="mb-4 p-3 bg-zion-blue-light/10 rounded-lg">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-zion-cyan font-semibold">Market Price:</span>
                    <br />
                    <span className="text-white">{service.marketPrice}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-semibold">Delivery:</span>
                    <br />
                    <span className="text-white">{service.estimatedDelivery}</span>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <span className="text-xs text-zion-cyan font-semibold">Support Level:</span>
                  <span className="text-xs text-white ml-2">{service.supportLevel}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="text-xs text-zion-slate-light flex items-center">
                      <span className="text-zion-cyan mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-xs text-zion-cyan">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="text-xs text-zion-slate-light flex items-center">
                      <span className="text-zion-cyan mr-2">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases & Target Audience */}
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Use Cases:</h4>
                    <div className="space-y-1">
                      {service.useCases.slice(0, 3).map((useCase, index) => (
                        <div key={index} className="text-xs text-zion-slate-light">
                          • {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Target Audience:</h4>
                    <div className="space-y-1">
                      {service.targetAudience.slice(0, 3).map((audience, index) => (
                        <div key={index} className="text-xs text-zion-slate-light">
                          • {audience}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more information about pricing, features, and implementation.`}
                  className="inline-block w-full bg-gradient-to-r from-zion-cyan to-zion-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-zion-blue-500 hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/30"
                >
                  Get Started Today
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 mb-20"
        >
          <div className="bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-zion-cyan mb-4">
              {filteredServices.length} Services Found
            </h3>
            <p className="text-zion-slate-light">
              {selectedCategory !== 'all' && `Showing ${selectedCategory} services`}
              {searchTerm && ` matching "${searchTerm}"`}
              {priceRange.min > 0 || priceRange.max < 10000 && ` within your price range`}
            </p>
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue-500/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our comprehensive portfolio of innovative services is designed to give you a competitive edge in today's rapidly evolving technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Comprehensive Services Consultation&body=Hi, I'd like to schedule a consultation to discuss how your comprehensive services can help transform my business. Please let me know your availability."
                className="bg-zion-cyan text-zion-blue-dark font-bold py-4 px-8 rounded-lg hover:bg-zion-blue-500 transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors duration-300 transform hover:scale-105"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
            <div className="mt-6 text-zion-slate-light">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan transition-colors">ziontechgroup.com</a></p>
            </div>
          </div>
        </motion.div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8dd6
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <h3 className="text-2xl font-semibold text-center mb-6">Explore Our Service Categories</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              All Services ({allServices.length})
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getServicesByCategory(activeTab).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-blue-400/50 group"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                  {getCategoryIcon(service.category)}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-400">
                    ${service.price.monthly}
                    <span className="text-sm text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">{service.pricingModel}</div>
                </div>
              </div>

              {/* Service Title and Category */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-gray-400">{service.category}</span>
                <span className="text-gray-600">•</span>
                <span className="text-sm text-gray-400">{service.subcategory}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
                <div className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-500">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </div>

              {/* ROI and Market Info */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="bg-green-500/20 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold">ROI</span>
                  </div>
                  <span className="text-green-400">{service.roi}</span>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                  <div className="text-gray-400 mb-1">Market</div>
                  <span className="text-blue-400">{service.marketPrice}</span>
                </div>
              </div>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>{service.supportLevel}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Target className="w-3 h-3" />
                  <span>{service.estimatedDelivery}</span>
                </div>
              </div>

              {/* Contact Button */}
              <div className="space-y-2">
                <a
                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center block transition-colors duration-200"
                >
                  Get Started
                </a>
                <a
                  href={service.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-center block transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {getServicesByCategory(activeTab).length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found in this category</div>
            <button
              onClick={() => setActiveTab('all')}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors duration-200"
            >
              View All Services
            </button>
          </div>
        )}
      </div>

      {/* Category Descriptions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Service Categories Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className={`p-4 rounded-lg bg-gradient-to-r ${getCategoryColor(category)} mb-4 inline-block`}>
                {getCategoryIcon(category)}
              </div>
              <h3 className="text-xl font-bold mb-3">{category}</h3>
              <p className="text-gray-300 mb-4">{getCategoryDescription(category)}</p>
              
              <div className="text-sm text-gray-400 mb-4">
                {getServicesByCategory(category).length} services available
              </div>
              
              <button
                onClick={() => setActiveTab(category)}
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is ready to help you implement the perfect solution for your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-400 font-semibold">+1 302 464 0950</p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-177b
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-400 font-semibold">kleber@ziontechgroup.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-blue-400 font-semibold">Middletown, DE</p>
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
              href="/comprehensive-services-showcase"
              className="bg-white/10 hover:bg-white/20 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              <Link
                to="/innovative-services"
                className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Services
              </Link>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = getServiceIcon(service.category);
                const colorClass = getServiceColor(service.category);
                
                return (
                  <div
                    key={service.id}
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Service Header */}
                    <div className="flex items-center mb-4">
                      <div className={`p-3 bg-gradient-to-r ${colorClass} rounded-lg mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {'title' in service ? service.title : 'name' in service ? service.name : ''}
                        </h3>
                        <p className="text-sm text-gray-400">{service.category}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Price and Delivery */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-green-400">
                        <DollarSign className="w-4 h-4 mr-1" />
                        <span className="font-semibold">${getServicePrice(service).toLocaleString()}</span>
                        <span className="text-gray-400 text-sm ml-1">/month</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{('estimatedDelivery' in service ? service.estimatedDelivery : '4-6 weeks')}</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {getServiceTags(service).slice(0, 4).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Key Benefits:</h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Price */}
                    <div className="mb-6 p-3 bg-gray-700/30 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Market Price:</span>
                        <span className="text-yellow-400 font-medium">{service.marketPrice}</span>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-6 p-4 bg-gray-700/30 rounded-lg">
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Contact Information:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-300">
                          <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                          <a href={`tel:${service.contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                            {service.contactInfo.phone}
                          </a>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                          <a href={`mailto:${service.contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                            {service.contactInfo.email}
                          </a>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                          <span>364 E Main St STE 1008, Middletown DE 19709</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={`https://ziontechgroup.com/contact?service=${service.id}`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                      </a>
                      <a
                        href={`https://ziontechgroup.com/services/${service.id}`}
                        className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our team of experts is ready to help you implement the perfect technology solution. 
              Get in touch today to discuss your needs and discover how we can accelerate your digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
=======
      {/* Contact Information Banner */}
      <div className="bg-white/10 backdrop-blur-sm border-t border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">Need Help Choosing?</h3>
              <p className="text-zion-blue-light">Our experts are here to guide you</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                kleber@ziontechgroup.com
>>>>>>> origin/cursor/expand-services-and-deploy-updates-069c
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center px-8 py-4 border border-gray-600 text-gray-300 rounded-lg text-lg font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-400">Experienced professionals with deep industry knowledge</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-400">Track record of successful implementations and ROI</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Support</h3>
                <p className="text-gray-400">24/7 support and maintenance worldwide</p>
              </div>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </>
<<<<<<< HEAD
=======
  CheckCircle,
  DollarSign,
  Clock,
  Award,
  Search,
  Filter,
  Grid3X3,
  List
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  services: string[];
}
=======
    </div>
  );
<<<<<<< HEAD
};
>>>>>>> origin/cursor/expand-services-and-deploy-updates-177b

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'ai-machine-learning',
    name: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence solutions that transform business operations',
    icon: Brain,
    color: 'from-cyan-500 to-blue-600',
    services: [
      'AI Business Intelligence Suite',
      'Quantum Machine Learning Platform',
      'Edge AI Platform',
      'AI Marketing Automation',
      'AI HR Management Platform',
      'AI Legal Technology Platform'
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity & Compliance',
    description: 'Enterprise-grade security solutions to protect your digital assets',
    icon: Shield,
    color: 'from-purple-500 to-pink-600',
    services: [
      'Cybersecurity Compliance Automation',
      'SOC2 Compliance Automation',
      'Advanced Threat Detection',
      'Security Policy Management',
      'Incident Response Automation'
    ]
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure',
    description: 'Scalable cloud solutions and robust IT infrastructure management',
    icon: Cpu,
    color: 'from-green-500 to-emerald-600',
    services: [
      'IoT Management Platform',
      'Edge Computing Solutions',
      'Cloud Migration Services',
      'DevOps Automation',
      'Infrastructure as Code'
    ]
  },
  {
    id: 'blockchain-defi',
    name: 'Blockchain & DeFi',
    description: 'Enterprise blockchain solutions and decentralized finance platforms',
    icon: Network,
    color: 'from-yellow-500 to-orange-600',
    services: [
      'Blockchain & DeFi Platform',
      'Smart Contract Development',
      'Token Management System',
      'DeFi Protocol Integration',
      'Cross-chain Solutions'
    ]
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    description: 'Next-generation quantum computing solutions for complex problem solving',
    icon: Atom,
    color: 'from-violet-500 to-purple-600',
    services: [
      'Quantum Computing Platform',
      'Quantum Machine Learning',
      'Quantum Internet Platform',
      'Quantum Algorithm Library',
      'Quantum Simulation Tools'
    ]
  },
  {
    id: 'emerging-technologies',
    name: 'Emerging Technologies',
    description: 'Cutting-edge solutions in neuromorphic computing, 6G, and space tech',
    icon: Rocket,
    color: 'from-pink-500 to-rose-600',
    services: [
      'Neuromorphic Computing Platform',
      '6G Network Infrastructure',
      'Space Technology Platform',
      'Brain-Computer Interface',
      'Fusion Energy Platform'
    ]
  },
  {
    id: 'sustainability',
    name: 'Sustainability & ESG',
    description: 'Environmental impact monitoring and sustainability optimization',
    icon: Leaf,
    color: 'from-emerald-500 to-teal-600',
    services: [
      'Sustainable Technology Platform',
      'Carbon Footprint Tracking',
      'Energy Efficiency Optimization',
      'ESG Compliance Tools',
      'Environmental Impact Analytics'
    ]
  },
  {
    id: 'autonomous-systems',
    name: 'Autonomous Systems',
    description: 'Fully autonomous business operations and intelligent automation',
    icon: Zap,
    color: 'from-orange-500 to-red-600',
    services: [
      'Autonomous Business Operations',
      'Autonomous Manufacturing Platform',
      'AI Business Agents',
      'Process Orchestration',
      'Predictive Maintenance'
    ]
  }
];

const ComprehensiveServicesOverview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCategories = SERVICE_CATEGORIES.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: ServiceCategory) => {
    const IconComponent = category.icon;
    return <IconComponent className="h-8 w-8" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      <SEOHead
        title="Comprehensive Technology Services Overview | Zion Tech Group"
        description="Explore our complete portfolio of AI, cybersecurity, blockchain, quantum computing, and emerging technology solutions. Transform your business with cutting-edge innovation."
        keywords="comprehensive services, AI solutions, cybersecurity, blockchain, quantum computing, emerging technology, Zion Tech Group"
        type="website"
=======
import React from 'react';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Zap, 
  Users, 
  Truck, 
  Building2, 
  ChartBar, 
  Code, 
  Microscope,
  Hospital,
  Leaf,
  TrendingUp,
  Camera,
  Database,
  Lock,
  Building,
  Car,
  Bot,
  Atom,
  Globe,
  Wifi,
  Shield,
  Cloud,
  Factory,
  ShoppingCart,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

// Import all service data
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { advancedAIAutomationServices } from '../../data/2026-advanced-ai-automation-services';
import { blockchainWeb3Services } from '../../data/2026-blockchain-web3-innovations';
import { healthcareBiotechServices } from '../../data/2026-healthcare-biotech-innovations';
import { iotSmartCityServices } from '../../data/2026-iot-smart-city-innovations';
import { roboticsAutomationServices } from '../../data/2026-robotics-automation-innovations';
import { quantumComputingServices } from '../../data/2026-quantum-computing-innovations';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  contactInfo?: {
    mobile: string;
    email: string;
    address: string;
  };
}

const ComprehensiveServicesOverview: React.FC = () => {
  // Combine all services
  const allServices: Service[] = [
    ...enhancedRealMicroSaasServices,
    ...advancedAIAutomationServices,
    ...blockchainWeb3Services,
    ...healthcareBiotechServices,
    ...iotSmartCityServices,
    ...roboticsAutomationServices,
    ...quantumComputingServices
  ];

  // Service categories with descriptions
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence and machine learning solutions',
      icon: Brain,
      color: 'from-blue-600 to-cyan-500',
      services: allServices.filter(s => s.category.includes('AI')),
      count: allServices.filter(s => s.category.includes('AI')).length
    },
    {
      name: 'Blockchain & Web3',
      description: 'Decentralized technology and blockchain solutions',
      icon: Globe,
      color: 'from-purple-600 to-pink-500',
      services: allServices.filter(s => s.category.includes('Blockchain') || s.category.includes('Web3') || s.category.includes('DeFi') || s.category.includes('NFT') || s.category.includes('DAO')),
      count: allServices.filter(s => s.category.includes('Blockchain') || s.category.includes('Web3') || s.category.includes('DeFi') || s.category.includes('NFT') || s.category.includes('DAO')).length
    },
    {
      name: 'Healthcare & Biotech',
      description: 'Innovative healthcare and biotechnology solutions',
      icon: Microscope,
      color: 'from-green-600 to-emerald-500',
      services: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech') || s.category.includes('Medical')),
      count: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech') || s.category.includes('Medical')).length
    },
    {
      name: 'IoT & Smart Cities',
      description: 'Internet of Things and smart city infrastructure',
      icon: Wifi,
      color: 'from-teal-600 to-cyan-500',
      services: allServices.filter(s => s.category.includes('Smart') || s.category.includes('IoT')),
      count: allServices.filter(s => s.category.includes('Smart') || s.category.includes('IoT')).length
    },
    {
      name: 'Robotics & Automation',
      description: 'Advanced robotics and automation systems',
      icon: Bot,
      color: 'from-indigo-600 to-blue-500',
      services: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')),
      count: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')).length
    },
    {
      name: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions',
      icon: Atom,
      color: 'from-yellow-600 to-orange-500',
      services: allServices.filter(s => s.category.includes('Quantum')),
      count: allServices.filter(s => s.category.includes('Quantum')).length
    },
    {
      name: 'Digital Marketing & Content',
      description: 'AI-powered marketing and content creation',
      icon: ChartBar,
      color: 'from-red-600 to-pink-500',
      services: allServices.filter(s => s.category.includes('Marketing') || s.category.includes('Content')),
      count: allServices.filter(s => s.category.includes('Marketing') || s.category.includes('Content')).length
    },
    {
      name: 'Financial & Business',
      description: 'Financial technology and business automation',
      icon: Building2,
      color: 'from-emerald-600 to-green-500',
      services: allServices.filter(s => s.category.includes('Financial') || s.category.includes('Business')),
      count: allServices.filter(s => s.category.includes('Financial') || s.category.includes('Business')).length
    }
  ];

  const getPopularServices = (limit: number = 6) => {
    return allServices.filter(service => service.popular).slice(0, limit);
  };

  const getServicesByROI = (limit: number = 6) => {
    return allServices
      .sort((a, b) => {
        const aROI = parseInt(a.roi.split('%')[0]);
        const bROI = parseInt(b.roi.split('%')[0]);
        return bROI - aROI;
      })
      .slice(0, limit);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group" 
        description="Explore our complete portfolio of innovative micro SAAS services, AI solutions, blockchain technology, and cutting-edge business solutions."
        keywords="comprehensive services, micro SAAS, AI solutions, blockchain, quantum computing, robotics, IoT, healthcare, biotech, business solutions"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-02bf
        url="https://ziontechgroup.com/comprehensive-services-overview"
      />

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            Comprehensive Technology Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover our complete portfolio of cutting-edge technology solutions designed to accelerate your digital transformation and drive innovation across all aspects of your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/innovative-services-showcase"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold rounded-lg transition-all duration-300"
            >
              Get Started Today
            </Link>
=======
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services Overview
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Your Complete Technology Solution Partner
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover our extensive portfolio of {allServices.length}+ innovative services spanning AI, blockchain, 
            healthcare, IoT, robotics, quantum computing, and more. Each solution is designed to deliver 
            measurable ROI and drive business transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore All Services
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-02bf
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Information Banner */}
      <section className="py-8 bg-zion-blue-dark/50 border-y border-zion-blue-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3 text-zion-cyan">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3 text-zion-purple-light">
              <Mail className="h-5 w-5" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3 text-zion-slate-light">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

<<<<<<< HEAD
      {/* Search and Filters */}
      <section className="py-8 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-zion-purple text-white'
                    : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-light/20'
                }`}
              >
                All Categories
              </button>
              {SERVICE_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-purple text-white'
                      : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-light/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan w-full sm:w-64"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-zion-purple text-white'
                      : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-light/20'
                  }`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-zion-purple text-white'
                      : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-light/20'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {filteredCategories.length} Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg">
              Comprehensive solutions across all major technology domains
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-zion-blue-dark/50 backdrop-blur-md rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                      {getCategoryIcon(category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-zion-slate-light text-sm">{category.services.length} services</p>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-zion-slate-light mb-6 line-clamp-3">
                    {category.description}
                  </p>

                  {/* Services List */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-zion-cyan" />
                      Key Services
                    </h4>
                    <div className="space-y-2">
                      {category.services.slice(0, 4).map((service, index) => (
                        <div key={index} className="flex items-start gap-2 text-zion-slate-light text-sm">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                          <span>{service}</span>
                        </div>
                      ))}
                      {category.services.length > 4 && (
                        <div className="text-zion-purple-light text-sm font-medium">
                          +{category.services.length - 4} more services
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/innovative-services-showcase?category=${category.id}`}
                    className="w-full text-center px-4 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-medium rounded-lg transition-all duration-300"
                  >
                    Explore {category.name}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-zion-blue-dark/50 backdrop-blur-md rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-purple/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${category.color} flex-shrink-0`}>
                      {getCategoryIcon(category)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                          <p className="text-zion-slate-light text-lg mb-3">{category.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-zion-cyan font-semibold text-lg">{category.services.length} Services</div>
                          <div className="text-zion-slate-light text-sm">Available</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-zion-cyan" />
                            Featured Services
                          </h4>
                          <div className="space-y-2">
                            {category.services.slice(0, 6).map((service, index) => (
                              <div key={index} className="flex items-start gap-2 text-zion-slate-light text-sm">
                                <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                                <span>{service}</span>
=======
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-blue-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-blue-light focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-zion-blue-dark text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range} className="bg-zion-blue-dark text-white">
                    {range}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-zion-blue-light hover:bg-white/20'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-colors duration-200 ${
                  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-zion-blue-light hover:bg-white/20'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-zion-blue-light">
              Showing {filteredCount} of {totalServices} services
            </p>
            <div className="flex items-center gap-4 text-sm text-zion-blue-light">
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Competitive Pricing
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Fast Delivery
              </span>
              <span className="flex items-center gap-2">
                <TrendingUpIcon className="w-4 h-4" />
                Proven ROI
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
              <Search className="w-16 h-16 text-zion-blue-light mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-zion-blue-light mb-6">
                Try adjusting your search criteria or contact us for custom solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedPriceRange('All');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Clear Filters
                </button>
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 gap-8' : 'space-y-6'}>
            {filteredServices.map((service) => {
              const IconComponent = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div 
                  key={service.id}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${
                    viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${categoryColor} p-6 ${viewMode === 'list' ? 'md:w-1/3' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-3 rounded-xl">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{service.title}</h3>
                          <p className="text-white/80 text-sm">{service.category}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleService(service.id)}
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors duration-200"
                      >
                        {expandedService === service.id ? (
                          <ChevronUp className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                    <p className="text-zion-blue-light mb-4">{service.description}</p>
                    
                    {/* Pricing */}
                    <div className="bg-gradient-to-r from-zion-blue to-zion-purple p-4 rounded-xl mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white/80 text-sm">Starting at</p>
                          <p className="text-2xl font-bold text-white">
                            ${service.price.toLocaleString()}
                            <span className="text-lg text-white/80">/{service.pricingModel}</span>
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/80 text-sm">Market Price</p>
                          <p className="text-white font-semibold">{service.marketPrice}</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-zion-blue-light">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-green-400" />
                        Key Benefits
                      </h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-zion-blue-light">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                                         {/* ROI and Delivery */}
                     <div className="grid grid-cols-2 gap-4 mb-4">
                       <div className="bg-white/5 p-3 rounded-lg">
                         <p className="text-white/80 text-xs">ROI</p>
                         <p className="text-white font-semibold text-sm">
                           {('roi' in service && typeof service.roi === 'string') ? service.roi : 'Varies by implementation'}
                         </p>
                       </div>
                       <div className="bg-white/5 p-3 rounded-lg">
                         <p className="text-white/80 text-xs">Delivery</p>
                         <p className="text-white font-semibold text-sm">{service.estimatedDelivery}</p>
                       </div>
                     </div>

                    {/* Expandable Details */}
                    {expandedService === service.id && (
                      <div className="border-t border-white/10 pt-4 space-y-4">
                                                 {/* Technology Stack */}
                         {'technology' in service && Array.isArray(service.technology) && (
                           <div>
                             <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                               <Cpu className="w-4 h-4 text-blue-400" />
                               Technology Stack
                             </h5>
                             <div className="flex flex-wrap gap-2">
                               {service.technology.map((tech, index) => (
                                 <span key={index} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                                   {tech}
                                 </span>
                               ))}
                             </div>
                           </div>
                         )}

                                                 {/* Integrations */}
                         {'integrations' in service && Array.isArray(service.integrations) && (
                           <div>
                             <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                               <Users className="w-4 h-4 text-green-400" />
                               Integrations
                             </h5>
                             <div className="flex flex-wrap gap-2">
                               {service.integrations.map((integration, index) => (
                                 <span key={index} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
                                   {integration}
                                 </span>
                               ))}
                             </div>
                           </div>
                         )}

                                                 {/* Compliance */}
                         {'compliance' in service && Array.isArray(service.compliance) && (
                           <div>
                             <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                               <Award className="w-4 h-4 text-yellow-400" />
                               Compliance
                             </h5>
                             <div className="flex flex-wrap gap-2">
                               {service.compliance.map((compliance, index) => (
                                 <span key={index} className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs">
                                   {compliance}
                                 </span>
                               ))}
                             </div>
                           </div>
                         )}

                                                 {/* Unique Value */}
                         {'uniqueValue' in service && typeof service.uniqueValue === 'string' && (
                           <div>
                             <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                               <Star className="w-4 h-4 text-purple-400" />
                               Unique Value
                             </h5>
                             <p className="text-zion-blue-light text-sm">{service.uniqueValue}</p>
                           </div>
                         )}

                        {/* Use Cases */}
                        <div>
                          <h5 className="text-white font-semibold mb-2">Use Cases</h5>
                          <div className="grid grid-cols-2 gap-2">
                            {service.useCases.map((useCase, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm text-zion-blue-light">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                {useCase}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-069c
                              </div>
                            ))}
                          </div>
                        </div>
<<<<<<< HEAD
                        
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                            <Star className="h-4 w-4 text-zion-cyan" />
                            Key Benefits
                          </h4>
                          <div className="space-y-2 text-zion-slate-light text-sm">
                            <div>• Accelerate digital transformation</div>
                            <div>• Reduce operational costs</div>
                            <div>• Improve efficiency & productivity</div>
                            <div>• Future-proof your business</div>
                            <div>• Competitive advantage</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Link
                          to={`/innovative-services-showcase?category=${category.id}`}
                          className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-medium rounded-lg transition-all duration-300"
                        >
                          Explore Services
                        </Link>
                        <Link
                          to="/contact"
                          className="px-6 py-3 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-medium rounded-lg transition-all duration-300"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-xl mb-4">
                No service categories found matching your criteria
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our services leverage the latest technologies and frameworks to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'AI & ML', icon: Brain, color: 'from-cyan-500 to-blue-600' },
              { name: 'Quantum', icon: Atom, color: 'from-violet-500 to-purple-600' },
              { name: 'Blockchain', icon: Network, color: 'from-yellow-500 to-orange-600' },
              { name: 'IoT & Edge', icon: Cpu, color: 'from-green-500 to-emerald-600' },
              { name: 'Cybersecurity', icon: Shield, color: 'from-purple-500 to-pink-600' },
              { name: 'Cloud Native', icon: Globe, color: 'from-blue-500 to-indigo-600' },
              { name: 'Autonomous', icon: Zap, color: 'from-orange-500 to-red-600' },
              { name: 'Sustainability', icon: Leaf, color: 'from-emerald-500 to-teal-600' }
            ].map((tech, index) => (
              <div key={tech.name} className="text-center group">
                <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
=======
      {/* Services by Category */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Services by Category
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our services organized by category to find the perfect solution for your business needs
            </p>
          </div>

          {Object.entries(servicesByCategory).map(([category, services]) => {
            if (services.length === 0) return null;
            
            const IconComponent = getCategoryIcon(category);
            const categoryColor = getCategoryColor(category);
            const categoryDescription = getCategoryDescription(category);
            
            return (
              <div key={category} className="mb-16">
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${categoryColor} mr-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category}</h3>
                    <p className="text-lg text-gray-400 max-w-2xl">{categoryDescription}</p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={service.id}
                      className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      {/* Service Header */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-400 text-sm line-clamp-3">
                          {service.description}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30"
                            >
                              <CheckCircle className="w-3 h-3 mr-1" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Pricing and Contact */}
                      <div className="border-t border-gray-700/50 pt-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-xl font-bold text-white">
                            ${service.price.toLocaleString()}
                            <span className="text-sm text-gray-400 font-normal">/month</span>
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.estimatedDelivery}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <a
                            href={service.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 text-center"
                          >
                            Learn More
                          </a>
                          <a
                            href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
                          >
                            Contact
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {Object.keys(servicesByCategory).length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </div>
          )}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our comprehensive technology solutions are designed to accelerate your digital transformation and give you a competitive edge in today's rapidly evolving market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/innovative-services-showcase"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold rounded-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Footer */}
      <section className="py-12 bg-zion-blue-dark/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <div className="space-y-2 text-zion-slate-light">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
              <div className="text-zion-slate-light">
                <p>364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Learn More</h3>
              <div className="space-y-2">
                <Link to="/innovative-services-showcase" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                  All Services
                </Link>
                <Link to="/case-studies" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                  Case Studies
                </Link>
                <Link to="/about" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                  About Zion Tech
                </Link>
              </div>
            </div>
=======
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our team of experts is ready to help you implement the perfect solution for your business needs. 
            Get in touch today to start your digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1 302 464 0950
            </a>
            
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-2">Visit our website for more information:</p>
=======
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <a
                        href={`tel:+13024640950`}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                      <a
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}
                        className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Email Us
                      </a>
                    </div>
=======
      {/* Service Categories Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our services are organized into comprehensive categories, each designed to address 
              specific business challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-zion-blue-dark mb-2 text-center">
                    {category.name}
                  </h3>
                  <p className="text-sm text-zion-slate text-center mb-4">
                    {category.description}
                  </p>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-zion-cyan">{category.count}</span>
                    <div className="text-xs text-zion-slate">Services</div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-02bf
                  </div>
                </div>
              );
            })}
          </div>
<<<<<<< HEAD
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Our team of experts is ready to help you implement these innovative solutions and drive growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-white/80 text-sm">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-white/80 text-sm">Send us a detailed inquiry</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-semibold">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-white/80 text-sm">Our headquarters location</p>
              <p className="text-green-400 font-semibold text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-069c
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300"
            >
              https://ziontechgroup.com
            </a>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
          </div>
        </div>
      </section>
=======
              className="bg-white text-zion-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Our Website
            </a>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-069c
    </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5c5f
  );
<<<<<<< HEAD
<<<<<<< HEAD
};

export default ComprehensiveServicesOverview;
=======
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2e04
=======
  );
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0f9b
=======
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8dd6
=======
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-069c
=======
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Most Popular Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              These are our most sought-after services, delivering exceptional value and ROI to businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getPopularServices().map((service, index) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">Popular</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-white/90 text-sm">{service.tagline}</p>
                </div>

                <div className="p-6">
                  <p className="text-zion-slate mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-zion-blue-dark">{service.price}</span>
                      <span className="text-zion-slate">{service.period}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-zion-slate">{service.trialDays} days trial</div>
                      <div className="text-xs text-zion-slate">{service.setupTime} setup</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-blue-dark mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={service.link}
                      className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-white text-center py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      Learn More
                    </a>
                    <button className="bg-zion-blue-dark hover:bg-zion-blue text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High ROI Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Highest ROI Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              These services deliver the highest return on investment, helping businesses achieve 
              maximum value from their technology investments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getServicesByROI().map((service, index) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-zion-cyan/20">
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div className="bg-zion-cyan text-white px-3 py-1 rounded-full text-sm font-bold">
                      {service.roi}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-white/90 text-sm">{service.tagline}</p>
                </div>

                <div className="p-6">
                  <p className="text-zion-slate mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="mb-4 p-3 bg-zion-cyan/10 rounded-lg">
                    <div className="text-sm font-semibold text-zion-cyan mb-2">ROI Breakdown:</div>
                    <div className="text-xs text-zion-slate space-y-1">
                      <div>• {service.roi}</div>
                      <div>• Market Size: {service.marketSize}</div>
                      <div>• Growth Rate: {service.growthRate}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={service.link}
                      className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-white text-center py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      Learn More
                    </a>
                    <button className="bg-zion-blue-dark hover:bg-zion-blue text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver innovative solutions that drive business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'AI/ML', icon: Brain, color: 'from-blue-600 to-cyan-500' },
              { name: 'Blockchain', icon: Globe, color: 'from-purple-600 to-pink-500' },
              { name: 'Quantum', icon: Atom, color: 'from-yellow-600 to-orange-500' },
              { name: 'IoT', icon: Wifi, color: 'from-teal-600 to-cyan-500' },
              { name: 'Robotics', icon: Bot, color: 'from-indigo-600 to-blue-500' },
              { name: 'Cloud', icon: Cloud, color: 'from-gray-600 to-slate-500' },
              { name: 'Cybersecurity', icon: Shield, color: 'from-red-600 to-pink-500' },
              { name: 'Big Data', icon: Database, color: 'from-green-600 to-emerald-500' },
              { name: 'Mobile', icon: Users, color: 'from-blue-600 to-purple-500' },
              { name: 'Web3', icon: Globe, color: 'from-purple-600 to-indigo-500' },
              { name: 'DevOps', icon: Code, color: 'from-gray-600 to-blue-500' },
              { name: 'Analytics', icon: ChartBar, color: 'from-green-600 to-blue-500' }
            ].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-zion-blue-dark">{tech.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our comprehensive service portfolio is designed to meet your every technology need. 
            Get in touch with our experts to discuss your requirements and find the perfect solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Services
            </button>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">📞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div>
              <div className="text-3xl mb-2">✉️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesOverview;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-02bf
