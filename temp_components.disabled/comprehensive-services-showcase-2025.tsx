import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Grid3X3, List, 
  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings,
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3,
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon
} from 'lucide-react';

// Import service data
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  category: string;
  rating: number;
  reviews: number;
  customers: number;
  marketSize: string;
  growthRate: string;
  launchDate: string;
  badge?: string;
  icon?: React.ReactNode;
}

const allServices: Service[] = [
  ...innovativeRealMicroSaasServices2025.map(service => ({
    ...service,
    category: 'Micro SAAS',
    icon: <Rocket className="w-6 h-6" />
  })),
  ...innovativeAIServicesEnhanced2025.map(service => ({
    ...service,
    category: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />
  })),
  ...innovativeITServicesEnhanced2025.map(service => ({
    ...service,
    category: 'Enterprise IT',
    icon: <Shield className="w-6 h-6" />
  })),
  ...emergingTechServicesEnhanced2025.map(service => ({
    ...service,
    category: 'Quantum & Emerging Tech',
    icon: <Atom className="w-6 h-6" />
  }))
];

const categories = [
  { name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length },
  { name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: innovativeRealMicroSaasServices2025.length },
  { name: 'AI & Consciousness', icon: <Brain className="w-5 h-5" />, count: innovativeAIServicesEnhanced2025.length },
  { name: 'Enterprise IT', icon: <Shield className="w-5 h-5" />, count: innovativeITServicesEnhanced2025.length },
  { name: 'Quantum & Emerging Tech', icon: <Atom className="w-5 h-5" />, count: emergingTechServicesEnhanced2025.length }
];

const priceRanges = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under $50/month', value: 'under-50' },
  { label: '$50 - $200/month', value: '50-200' },
  { label: '$200 - $500/month', value: '200-500' },
  { label: 'Over $500/month', value: 'over-500' }
];

const sortOptions = [
  { label: 'Most Popular', value: 'popular' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-low' },
  { label: 'Price: High to Low', value: 'price-high' }
];

export default function ComprehensiveServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState<Service[]>(allServices);

  useEffect(() => {
    let filtered = allServices;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
        switch (selectedPriceRange) {
          case 'under-50': return price < 50;
          case '50-200': return price >= 50 && price <= 200;
          case '200-500': return price > 200 && price <= 500;
          case 'over-500': return price > 500;
          default: return true;
        }
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.customers - a.customers;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        default:
          return 0;
      }
    });

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SAAS': return 'from-blue-500 to-cyan-500';
      case 'AI & Consciousness': return 'from-purple-500 to-pink-500';
      case 'Enterprise IT': return 'from-green-500 to-emerald-500';
      case 'Quantum & Emerging Tech': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SAAS': return <Rocket className="w-5 h-5" />;
      case 'AI & Consciousness': return <Brain className="w-5 h-5" />;
      case 'Enterprise IT': return <Shield className="w-5 h-5" />;
      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  };

const comprehensive-services-showcase-2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">comprehensive-services-showcase-2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default comprehensive-services-showcase-2025;
