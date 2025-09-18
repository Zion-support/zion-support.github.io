<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Grid, List, ArrowRight, ChevronRight,
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  TrendingUp, BarChart3, Cloud, Network, Lightbulb, Flame, Zap as ZapIcon
} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = [
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'Revolutionary AI consciousness and machine learning solutions',
      color: 'from-purple-500 to-pink-500',
      serviceCount: 25,
      featured: true
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Atom,
      description: 'Quantum-powered computing and consciousness simulation',
      color: 'from-blue-500 to-cyan-500',
      serviceCount: 18,
      featured: true
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Quantum-resistant security and AI threat detection',
      color: 'from-red-500 to-orange-500',
      serviceCount: 22,
      featured: true
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Autonomous DevOps and cloud infrastructure',
      color: 'from-emerald-500 to-teal-500',
      serviceCount: 20,
      featured: false
    },
    {
      id: 'edge',
      name: 'Edge Computing',
      icon: Network,
      description: 'Edge computing orchestration and IoT management',
      color: 'from-yellow-500 to-orange-500',
      serviceCount: 15,
      featured: false
    },
    {
      id: 'space',
      name: 'Space Technology',
      icon: Rocket,
      description: 'Space exploration and resource optimization',
      color: 'from-indigo-500 to-purple-500',
      serviceCount: 12,
      featured: true
    },
    {
      id: 'biotech',
      name: 'Biotechnology',
      icon: ZapIcon,
      description: 'Neural interfaces and biomedical innovations',
      color: 'from-pink-500 to-rose-500',
      serviceCount: 16,
      featured: false
    },
    {
      id: 'blockchain',
      name: 'Blockchain',
      icon: Code,
      description: 'AI-powered blockchain governance and DeFi',
      color: 'from-green-500 to-emerald-500',
      serviceCount: 14,
      featured: false
    },
    {
      id: 'automation',
      name: 'Automation',
      icon: Zap,
      description: 'Business process automation and AI agents',
      color: 'from-cyan-500 to-blue-500',
      serviceCount: 19,
      featured: false
    },
    {
      id: 'fintech',
      name: 'Financial Technology',
      icon: TrendingUp,
      description: 'Quantum financial trading and AI analytics',
      color: 'from-emerald-500 to-green-500',
      serviceCount: 17,
      featured: false
    }
  ];

  const featuredServices = [
    {
      id: 'ai-consciousness-evolution',
      title: 'AI Consciousness Evolution',
      category: 'ai',
      description: 'Revolutionary AI consciousness platform with emotional intelligence',
      status: 'beta',
      price: '$1,999/month',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'quantum-neural-networks',
      title: 'Quantum Neural Networks',
      category: 'quantum',
      description: 'Quantum-powered AI with advanced consciousness capabilities',
      status: 'beta',
      price: '$1,299/month',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'quantum-cybersecurity',
      title: 'Quantum Cybersecurity',
      category: 'cybersecurity',
      description: 'Future-proof security with quantum-resistant encryption',
      status: 'active',
      price: '$799/month',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'space-technology',
      title: 'Space Technology Innovation',
      category: 'space',
      description: 'AI-powered space exploration and resource optimization',
      status: 'beta',
      price: '$2,499/month',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  // Filter categories based on search
  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedCategory === 'all' || category.id === selectedCategory;
    return matchesSearch && matchesFilter;
  });

  // Sort categories
  const sortedCategories = [...filteredCategories].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.serviceCount - a.serviceCount;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      default:
        return 0;
    }
  });
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const explore: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>explore | Zion Tech Group</title>
        <meta name="description" content="explore - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">explore</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default explore;
