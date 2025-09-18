import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Shield, Cloud, Factory, Truck, Heart,
  ArrowRight, Check, Star, Phone, Mail, MapPin,
  TrendingUp, Users, Zap, Target, Award
} from 'lucide-react';

// Import our new innovative services
import { innovative2027AIBusinessIntelligenceServices } from '../data/innovative-2027-ai-business-intelligence';
import { innovative2027CybersecurityComplianceServices } from '../data/innovative-2027-cybersecurity-compliance';
import { innovative2027CloudDevOpsServices } from '../data/innovative-2027-cloud-devops';
import { innovative2027IndustrySolutions } from '../data/innovative-2027-industry-solutions';

// Combine all services
const allInnovativeServices = [
  ...innovative2027AIBusinessIntelligenceServices,
  ...innovative2027CybersecurityComplianceServices,
  ...innovative2027CloudDevOpsServices,
  ...innovative2027IndustrySolutions
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of innovative 2027 services'
  },
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-500',
    description: 'AI-powered analytics and business insights'
  },
  {
    id: 'cybersecurity-compliance',
    name: 'Cybersecurity & Compliance',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-orange-500',
    description: 'Advanced security and compliance solutions'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Infrastructure & DevOps',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Modern cloud and DevOps solutions'
  },
  {
    id: 'healthcare-biotech',
    name: 'Healthcare & Biotech',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-pink-500 to-red-500',
    description: 'AI-powered healthcare solutions'
  },
  {
    id: 'financial-technology',
    name: 'Financial Technology',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-emerald-500 to-green-500',
    description: 'Fintech and compliance automation'
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    icon: <Target className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Retail optimization and analytics'
  },
  {
    id: 'manufacturing-industrial',
    name: 'Manufacturing & Industrial',
    icon: <Factory className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Manufacturing AI and quality control'
  },
  {
    id: 'transportation-logistics',
    name: 'Transportation & Logistics',
    icon: <Truck className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Logistics optimization and supply chain'
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

export default function Innovative2027ServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // Filter services based on search and category
  const filteredServices = allInnovativeServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    
    return matchesSearch && service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return (parseInt(a.price.replace(/[^0-9]/g, '')) || 0) - 
               (parseInt(b.price.replace(/[^0-9]/g, '')) || 0);
      case 'price-high':
        return (parseInt(b.price.replace(/[^0-9]/g, '')) || 0) - 
               (parseInt(a.price.replace(/[^0-9]/g, '')) || 0);
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedServices.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedServices = sortedServices.slice(startIndex, startIndex + pageSize);

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
    }
  };

const innovative-2027-services-showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>innovative-2027-services-showcase | Zion Tech Group</title>
        <meta name="description" content="innovative-2027-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">innovative-2027-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default innovative-2027-services-showcase;
