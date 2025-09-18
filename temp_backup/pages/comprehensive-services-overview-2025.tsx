import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Star, Users, Clock, Shield, Zap, Globe, Rocket, Brain, Atom,
  ArrowRight, ExternalLink, TrendingUp, Award, Target, ChevronDown, Search,
  Filter, Grid, List, BarChart3, DollarSign, Target as TargetIcon
} from 'lucide-react';
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';

export default function ComprehensiveServicesOverviewPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity');

  // Combine all services
  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: allServices.filter(s => s.category === 'AI & Machine Learning').length },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: allServices.filter(s => s.category === 'Healthcare AI').length },
    { id: 'Fintech AI', name: 'Fintech', icon: '💰', count: allServices.filter(s => s.category === 'Fintech AI').length },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️', count: allServices.filter(s => s.category === 'IoT & Smart Cities').length },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: allServices.filter(s => s.category === 'Blockchain & DeFi').length },
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️', count: allServices.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', count: allServices.filter(s => s.category === 'Space Technology').length },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖', count: allServices.filter(s => s.category === 'Autonomous Systems').length },
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: '🥽', count: allServices.filter(s => s.category === 'AR/VR & Metaverse').length },
    { id: '5G/6G Networks', name: '5G/6G', icon: '📡', count: allServices.filter(s => s.category === '5G/6G Networks').length },
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬', count: allServices.filter(s => s.category === 'Biotechnology AI').length },
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡', count: allServices.filter(s => s.category === 'Renewable Energy').length },
    { id: 'Edge Computing', name: 'Edge', icon: '🌐', count: allServices.filter(s => s.category === 'Edge Computing').length },
    { id: 'Quantum Internet', name: 'Q-Internet', icon: '🌍', count: allServices.filter(s => s.category === 'Quantum Internet').length },
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠', count: allServices.filter(s => s.category === 'Neuromorphic Computing').length }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popular ? 1 : -1;
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || '🚀';
  };

  // Calculate market statistics
  const totalMarketSize = allServices.reduce((sum, service) => {
    const marketSize = service.marketSize.match(/\$([\d.]+)B/);
    return sum + (marketSize ? parseFloat(marketSize[1]) : 0);
  }, 0);

  const averageROI = allServices.reduce((sum, service) => {
    const roi = service.roi.match(/(\d+)%/);
    return sum + (roi ? parseInt(roi[1]) : 0);
  }, 0) / allServices.length;

  const totalCustomers = allServices.reduce((sum, service) => sum + service.customers, 0);

const comprehensive-services-overview-2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-services-overview-2025 | Zion Tech Group</title>
        <meta name="description" content="comprehensive-services-overview-2025 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-services-overview-2025</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default comprehensive-services-overview-2025;
