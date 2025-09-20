import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Brain, Zap, Shield, Globe, Cpu, Database, Network, Cloud, Lock, Eye, Target, BarChart3, Lightbulb, Code, TestTube, Leaf, Car, Bot, Microscope, BrainCircuit, Phone, Mail, MapPin } from 'lucide-react';
import { revolutionary2026MicroSaasV2 } from '../data/revolutionary-2026-micro-saas-v2';
import { ultimate2026AIServicesV2 } from '../data/ultimate-2026-ai-services-v2';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import UltraAdvancedNavigation2026V2 from '../components/layout/UltraAdvancedNavigation2026V2';

export default function Revolutionary2026ServicesShowcaseV2() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...revolutionary2026MicroSaasV2,
    ...ultimate2026AIServicesV2
  ];

  // Dynamic category counts
  const aiCount = allServices.filter(service => 
    service.category.some(cat => cat.includes('AI'))
  ).length;
  const quantumCount = allServices.filter(service => 
    service.category.some(cat => cat.includes('Quantum'))
  ).length;
  const microSaasCount = allServices.filter(service => 
    service.category.some(cat => cat.includes('Micro SaaS'))
  ).length;
  const consciousnessCount = allServices.filter(service => 
    service.category.some(cat => cat.includes('Consciousness'))
  ).length;
  const roboticsCount = allServices.filter(service => 
    service.category.some(cat => cat.includes('Robotics'))
  ).length;
  const healthcareCount = allServices.filter(service => 
    service.category.some(cat => cat.includes('Healthcare') || cat.includes('Medical'))
  ).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: quantumCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },
    { id: 'consciousness', name: 'AI Consciousness', icon: '🌟', count: consciousnessCount },
    { id: 'robotics', name: 'Robotics', icon: '🤖', count: roboticsCount },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥', count: healthcareCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget ($0-$999)', range: '0-999' },
    { id: 'mid', name: 'Mid-Range ($1000-$2999)', range: '1000-2999' },
    { id: 'premium', name: 'Premium ($3000-$4999)', range: '3000-4999' },
    { id: 'enterprise', name: 'Enterprise ($5000+)', range: '5000+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'category', name: 'Category' },
    { id: 'newest', name: 'Newest First' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.some(cat => cat.toLowerCase().includes(selectedCategory.toLowerCase()));
      
      const matchesPrice = selectedPriceRange === 'all' || 
                          (selectedPriceRange === 'budget' && service.pricing.monthly < 1000) ||
                          (selectedPriceRange === 'mid' && service.pricing.monthly >= 1000 && service.pricing.monthly < 3000) ||
                          (selectedPriceRange === 'premium' && service.pricing.monthly >= 3000 && service.pricing.monthly < 5000) ||
                          (selectedPriceRange === 'enterprise' && service.pricing.monthly >= 5000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.pricing.monthly - b.pricing.monthly);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricing.monthly - a.pricing.monthly);
        break;
      case 'category':
        filtered.sort((a, b) => a.category[0].localeCompare(b.category[0]));
        break;
      case 'newest':
        filtered.sort((a, b) => new Date().getTime() - new Date().getTime()); // Placeholder for actual date
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return <Brain className="w-5 h-5" />;
    if (category.includes('Quantum')) return <Atom className="w-5 h-5" />;
    if (category.includes('Healthcare')) return <Heart className="w-5 h-5" />;
    if (category.includes('Robotics')) return <Bot className="w-5 h-5" />;
    if (category.includes('Consciousness')) return <BrainCircuit className="w-5 h-5" />;
    if (category.includes('Financial')) return <DollarSign className="w-5 h-5" />;
    if (category.includes('Manufacturing')) return <Factory className="w-5 h-5" />;
    if (category.includes('Cybersecurity')) return <Shield className="w-5 h-5" />;
    if (category.includes('Content')) return <FileText className="w-5 h-5" />;
    if (category.includes('Space')) return <Rocket className="w-5 h-5" />;
    if (category.includes('Metaverse')) return <Globe className="w-5 h-5" />;
    if (category.includes('Vehicle')) return <Car className="w-5 h-5" />;
    if (category.includes('Biotech')) return <TestTube className="w-5 h-5" />;
    if (category.includes('Climate')) return <Leaf className="w-5 h-5" />;
    return <Zap className="w-5 h-5" />;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI')) return 'from-purple-500 to-pink-500';
    if (category.includes('Quantum')) return 'from-blue-500 to-cyan-500';
    if (category.includes('Healthcare')) return 'from-green-500 to-emerald-500';
    if (category.includes('Robotics')) return 'from-orange-500 to-red-500';
    if (category.includes('Consciousness')) return 'from-indigo-500 to-purple-500';
    if (category.includes('Financial')) return 'from-yellow-500 to-orange-500';
    if (category.includes('Manufacturing')) return 'from-gray-500 to-blue-500';
    if (category.includes('Cybersecurity')) return 'from-red-500 to-pink-500';
    if (category.includes('Content')) return 'from-pink-500 to-rose-500';
    if (category.includes('Space')) return 'from-indigo-500 to-blue-500';
    if (category.includes('Metaverse')) return 'from-violet-500 to-purple-500';
    if (category.includes('Vehicle')) return 'from-blue-500 to-indigo-500';
    if (category.includes('Biotech')) return 'from-green-500 to-teal-500';
    if (category.includes('Climate')) return 'from-emerald-500 to-green-500';
    return 'from-gray-500 to-blue-500';
  };

const revolutionary-2026-services-showcase-v2: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>revolutionary-2026-services-showcase-v2 | Zion Tech Group</title>
        <meta name="description" content="revolutionary-2026-services-showcase-v2 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">revolutionary-2026-services-showcase-v2</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default revolutionary-2026-services-showcase-v2;
