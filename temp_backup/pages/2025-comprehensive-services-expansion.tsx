import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Star, Phone, Mail, MapPin,
  Building, Cpu, Zap, Globe, Lock, BarChart3
} from 'lucide-react';

// Import our new service data
import { innovativeMicroSaasExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITInfrastructureExpansion } from '../data/2025-innovative-it-infrastructure-expansion';
import { innovativeAIServicesExpansion } from '../data/2025-innovative-ai-services-expansion';

// Create unified services array
const allNewServices = [
  ...innovativeMicroSaasExpansionV2,
  ...innovativeITInfrastructureExpansion,
  ...innovativeAIServicesExpansion
];

const categories = [
  {
    id: 'all',
    name: 'All New Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of new innovative services'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    icon: <Target className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Innovative business solutions and automation'
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: <Building className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Advanced infrastructure and security solutions'
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Cutting-edge AI and machine learning services'
  }
];

const sortOptions = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Highest Rated' }
];

export default function ComprehensiveServicesExpansion2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const pageSize = 12;

  // Simulate loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Filter services based on search and category
  const filteredServices = allNewServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    
    const serviceCategory = service.category.toLowerCase();
    return matchesSearch && serviceCategory.includes(selectedCategory.toLowerCase());
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', ''));
      case 'popular':
        return b.popular ? 1 : -1;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedServices.length / pageSize);
  const paginatedServices = sortedServices.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getServiceCategory = (service: any) => {
    if (service.category) return service.category;
    return 'Other';
  };

const 2025-comprehensive-services-expansion: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2025-comprehensive-services-expansion | Zion Tech Group</title>
        <meta name="description" content="2025-comprehensive-services-expansion - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2025-comprehensive-services-expansion</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2025-comprehensive-services-expansion;
