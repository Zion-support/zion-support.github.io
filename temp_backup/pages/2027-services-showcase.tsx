<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Star, Users, TrendingUp, DollarSign, Clock, 
  CheckCircle, ArrowRight, Rocket, Brain, Atom, Globe, 
  Zap, Sparkles, Shield, Target, Cpu, Database, Cloud, 
  Lock, ShieldCheck, Eye, Heart, Share2, Download, Phone, Mail, MapPin
} from 'lucide-react';
import { cuttingEdge2027Innovations } from '../data/2027-cutting-edge-innovations';
import { practicalMicroSaas2027 } from '../data/2027-practical-micro-saas';
import UltraFuturisticNavigation2027 from '../components/layout/UltraFuturisticNavigation2027';
import UltraFuturisticMatrixBackground2027 from '../components/ui/UltraFuturisticMatrixBackground2027';

export default function ServicesShowcase2027() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  // Sort options
  const sortOptions = [
    { value: 'name', label: 'Sort by Name' },
    { value: 'price', label: 'Sort by Price' },
    { value: 'roi', label: 'Sort by ROI' }
  ];

  const allServices = [
    ...cuttingEdge2027Innovations,
    ...practicalMicroSaas2027
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 1000) ||
                        (selectedPriceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(service.price.replace(/[^0-9]/g, '')) < 10000) ||
                        (selectedPriceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 10000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'roi':
        return parseInt(a.roi.replace(/[^0-9]/g, '')) - parseInt(b.roi.replace(/[^0-9]/g, ''));
      default:
        return 0;
    }
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'AI Consciousness Evolution', name: 'AI Consciousness', icon: '🧠', count: allServices.filter(s => s.category.includes('AI Consciousness')).length },
    { id: 'Quantum Consciousness', name: 'Quantum Consciousness', icon: '⚛️', count: allServices.filter(s => s.category.includes('Quantum Consciousness')).length },
    { id: 'AI Civilization', name: 'AI Civilization', icon: '🏛️', count: allServices.filter(s => s.category.includes('AI Civilization')).length },
    { id: 'Quantum Time', name: 'Quantum Time', icon: '⏰', count: allServices.filter(s => s.category.includes('Quantum Time')).length },
    { id: 'AI Multiverse', name: 'AI Multiverse', icon: '🌌', count: allServices.filter(s => s.category.includes('AI Multiverse')).length },
    { id: 'Customer Success Automation', name: 'Customer Success', icon: '🎯', count: allServices.filter(s => s.category.includes('Customer Success')).length },
    { id: 'Content Marketing Automation', name: 'Content Marketing', icon: '📝', count: allServices.filter(s => s.category.includes('Content Marketing')).length },
    { id: 'Inventory Management', name: 'Inventory Management', icon: '📦', count: allServices.filter(s => s.category.includes('Inventory Management')).length },
    { id: 'HR Automation', name: 'HR Automation', icon: '👥', count: allServices.filter(s => s.category.includes('HR Automation')).length },
    { id: 'Financial Automation', name: 'Financial Automation', icon: '💰', count: allServices.filter(s => s.category.includes('Financial Automation')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', count: allServices.length },
    { id: 'low', name: 'Under $1K/month', count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) < 1000).length },
    { id: 'medium', name: '$1K - $10K/month', count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) >= 1000 && parseInt(s.price.replace(/[^0-9]/g, '')) < 10000).length },
    { id: 'high', name: '$10K+/month', count: allServices.filter(s => parseInt(s.price.replace(/[^0-9]/g, '')) >= 10000).length }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const 2027-services-showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2027-services-showcase | Zion Tech Group</title>
        <meta name="description" content="2027-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2027-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};


export default InnovationShowcase2025;
