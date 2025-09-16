<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, Eye, Trophy, FlaskConical as FlaskIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Crown, Gem, Diamond } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { revolutionaryMicroSaasServices, revolutionaryServiceCategories } from '../data/revolutionary-micro-saas-services';
import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services';


export default function ComprehensivePricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allServices = [...revolutionaryMicroSaasServices, ...enhancedMicroSaasServices];

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-100', label: '$0 - $100' },
    { value: '101-500', label: '$101 - $500' },
    { value: '501-1000', label: '$501 - $1,000' },
    { value: '1001-2500', label: '$1,001 - $2,500' },
    { value: '2501-5000', label: '$2,501 - $5,000' },
    { value: '5001+', label: '$5,001+' }
  ];

  const sortOptions = [
    { value: 'price', label: 'Price Low-High' },
    { value: 'name', label: 'Name A-Z' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' },
    { value: 'roi', label: 'Highest ROI' }
  ];

  // Filter and sort services
  let filteredServices = allServices;

  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = filteredServices.filter(service => service.category === selectedCategory);
  }

  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = filteredServices.filter(service => {
      const price = parseFloat(service.price.replace('$', '').replace(',', ''));
      return price >= min && (max === Infinity || price <= max);
    });
  }

  // Search filter
  if (searchQuery) {
    filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort services
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':
        const aRoi = parseFloat(a.roi.match(/\d+/)?.[0] || '0');
        const bRoi = parseFloat(b.roi.match(/\d+/)?.[0] || '0');
        return bRoi - aRoi;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Pricing tiers
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic service access',
        'Email support',
        'Standard features',
        'Community forum access',
        'Basic analytics'
      ],
      icon: <Star className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Advanced service access',
        'Priority support',
        'Advanced features',
        'API access',
        'Advanced analytics',
        'Custom integrations'
      ],
      icon: <Gem className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Full service access',
        '24/7 dedicated support',
        'All features',
        'Custom development',
        'Enterprise analytics',
        'White-label options',
        'SLA guarantees'
      ],
      icon: <Crown className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-600',
      popular: false
    }
  ];

  // Market statistics
  const marketStats = [
    {
      metric: '$15.2B',
      label: 'Total Market Size',
      description: 'Combined market value of all services',
      icon: <ChartBar className="w-6 h-6" />
    },
    {
      metric: '400+',
      label: 'Services Available',
      description: 'Comprehensive micro SaaS portfolio',
      icon: <Database className="w-6 h-6" />
    },
    {
      metric: '99.99%',
      label: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability',
      icon: <Shield className="w-6 h-6" />
    },
    {
      metric: '2000%+',
      label: 'Average ROI',
      description: 'Proven business value',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const comprehensive-pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-pricing | Zion Tech Group</title>
        <meta name="description" content="comprehensive-pricing - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-pricing</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default comprehensive-pricing;