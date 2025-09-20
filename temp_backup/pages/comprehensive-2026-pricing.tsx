import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket,
  Brain, Globe, Database, Cloud, Lock, Palette, Target, Layers, Sparkles, Atom, Microscope, Satellite,
  Crown, Award, Users, BarChart3, Clock, Eye, EyeOff, Filter, Search
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { nextGenAIServices2026 } from '../data/next-gen-ai-services-2026';
import { revolutionaryITInfrastructure2026 } from '../data/revolutionary-it-infrastructure-2026';
import { innovativeMicroSaas2026 } from '../data/innovative-micro-saas-2026';

export default function Comprehensive2026Pricing() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [showPopularOnly, setShowPopularOnly] = useState(false);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services
  const allServices = [
    ...nextGenAIServices2026,
    ...revolutionaryITInfrastructure2026,
    ...innovativeMicroSaas2026
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: nextGenAIServices2026.length },
    { id: 'it', name: 'IT Infrastructure', icon: Shield, count: revolutionaryITInfrastructure2026.length },
    { id: 'saas', name: 'Micro SaaS', icon: Zap, count: innovativeMicroSaas2026.length },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Layers, count: allServices.filter(s => s.category.includes('Blockchain')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: Sparkles, count: allServices.filter(s => s.category.includes('Emerging')).length }
  ];

  // Price ranges
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget ($0-$299)', range: '0-299' },
    { id: 'mid', name: 'Mid-Range ($300-$999)', range: '300-999' },
    { id: 'premium', name: 'Premium ($1000-$2999)', range: '1000-2999' },
    { id: 'enterprise', name: 'Enterprise ($3000+)', range: '3000+' }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory);
      
      const matchesPriceRange = (() => {
        const price = parseFloat(service.price.replace('$', '').replace(',', ''));
        switch (priceRange) {
          case 'budget': return price <= 299;
          case 'mid': return price >= 300 && price <= 999;
          case 'premium': return price >= 1000 && price <= 2999;
          case 'enterprise': return price >= 3000;
          default: return true;
        }
      })();
      
      const matchesPopular = !showPopularOnly || service.popular;
      
      return matchesCategory && matchesPriceRange && matchesPopular;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'price-high':
          return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        default:
          return a.popular ? -1 : 1;
      }
    });

  // Calculate pricing statistics
  const pricingStats = {
    totalServices: allServices.length,
    averagePrice: Math.round(allServices.reduce((sum, s) => sum + parseFloat(s.price.replace('$', '').replace(',', '')), 0) / allServices.length),
    lowestPrice: Math.min(...allServices.map(s => parseFloat(s.price.replace('$', '').replace(',', '')))),
    highestPrice: Math.max(...allServices.map(s => parseFloat(s.price.replace('$', '').replace(',', '')))),
    popularServices: allServices.filter(s => s.popular).length
  };

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

const comprehensive-2026-pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-2026-pricing | Zion Tech Group</title>
        <meta name="description" content="comprehensive-2026-pricing - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-2026-pricing</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default comprehensive-2026-pricing;
