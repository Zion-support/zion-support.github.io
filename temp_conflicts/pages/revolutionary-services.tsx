<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, Eye, Trophy, FlaskConical as FlaskIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { revolutionaryMicroSaasServices, revolutionaryServiceCategories, getRevolutionaryServicesByCategory, getPopularRevolutionaryServices, getRevolutionaryServicesByPriceRange } from '../data/revolutionary-micro-saas-services';


export default function RevolutionaryServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-1000', label: '$0 - $1,000' },
    { value: '1001-2500', label: '$1,001 - $2,500' },
    { value: '2501-5000', label: '$2,501 - $5,000' },
    { value: '5001+', label: '$5,001+' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' },
    { value: 'roi', label: 'Highest ROI' }
  ];

  // Filter and sort services
  let filteredServices = revolutionaryMicroSaasServices;

  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = getRevolutionaryServicesByCategory(selectedCategory);
  }

  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = getRevolutionaryServicesByPriceRange(min, max);
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

  const popularServices = getPopularRevolutionaryServices();

  // Enhanced service categories with better descriptions
  const enhancedCategories = [
    {
      name: 'Quantum AI & Cognitive Computing',
      description: 'Revolutionary quantum AI solutions with human-level reasoning capabilities',
      icon: <Brain className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum AI & Cognitive Computing').length,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Autonomous Manufacturing & Industry 4.0',
      description: 'Next-generation autonomous manufacturing with zero human intervention',
      icon: <Factory className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Autonomous Manufacturing & Industry 4.0').length,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Quantum Blockchain & DeFi',
      description: 'Quantum-secured blockchain platforms with infinite scalability',
      icon: <Globe className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Blockchain & DeFi').length,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'AI Biomedical Research & Drug Discovery',
      description: 'AI-powered platforms for accelerated drug discovery and medical research',
      icon: <FlaskIcon className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'AI Biomedical Research & Drug Discovery').length,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Quantum Cybersecurity & Threat Detection',
      description: 'Quantum-resistant cybersecurity with AI-powered threat detection',
      icon: <ShieldCheck className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Cybersecurity & Threat Detection').length,
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'Space Technology & Satellite Optimization',
      description: 'Revolutionary platforms for space exploration and satellite optimization',
      icon: <Rocket className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Space Technology & Satellite Optimization').length,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'AI Content Creation & Marketing',
      description: 'Quantum-powered content creation at infinite scale',
      icon: <FileText className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'AI Content Creation & Marketing').length,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      name: 'Quantum Computing as a Service',
      description: 'Enterprise quantum computing with real quantum processors',
      icon: <Cpu className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Quantum Computing as a Service').length,
      color: 'from-violet-500 to-purple-600'
    },
    {
      name: 'Autonomous Vehicles & Smart Transportation',
      description: 'AI platforms for autonomous vehicles and smart transportation',
      icon: <CarIcon className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Autonomous Vehicles & Smart Transportation').length,
      color: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Smart Energy & Renewable Energy',
      description: 'AI platforms for smart energy grids and renewable energy optimization',
      icon: <LeafIcon className="w-6 h-6" />,
      count: revolutionaryMicroSaasServices.filter(s => s.category === 'Smart Energy & Renewable Energy').length,
      color: 'from-yellow-500 to-orange-600'
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

const revolutionary-services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>revolutionary-services | Zion Tech Group</title>
        <meta name="description" content="revolutionary-services - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">revolutionary-services</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default revolutionary-services;