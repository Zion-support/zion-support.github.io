import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Brain, Atom, Shield, Globe, Factory, Leaf, Gamepad2, GraduationCap, Heart, CreditCard, Zap, Phone, Mail } from 'lucide-react';
import { allInnovative2026Services, innovative2026ServiceStats, popularInnovative2026Services, topRatedInnovative2026Services, highROIInnovative2026Services } from '../data/comprehensive-2026-services-index';

export default function Innovative2026ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Filter services based on search and category
  const filteredServices = useMemo(() => {
    let filtered = allInnovative2026Services;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service =>
        service.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        switch (selectedPriceRange) {
          case 'low':
            return price < 1000;
          case 'medium':
            return price >= 1000 && price < 5000;
          case 'high':
            return price >= 5000;
          default:
            return true;
        }
      });
    }

    // Sort services
    switch (sortBy) {
      case 'price':
        return filtered.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'customers':
        return filtered.sort((a, b) => b.customers - a.customers);
      default:
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allInnovative2026Services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: innovative2026ServiceStats.aiServices },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: '⛓️', count: innovative2026ServiceStats.blockchainServices },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🛡️', count: innovative2026ServiceStats.cybersecurityServices },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: innovative2026ServiceStats.spaceQuantumServices },
    { id: 'healthcare', name: 'Healthcare & Biotech', icon: '🏥', count: innovative2026ServiceStats.healthcareBiotechServices },
    { id: 'fintech', name: 'Financial Technology', icon: '💳', count: innovative2026ServiceStats.fintechServices },
    { id: 'education', name: 'Education & Research', icon: '🎓', count: innovative2026ServiceStats.educationResearchServices },
    { id: 'manufacturing', name: 'Manufacturing & Logistics', icon: '🏭', count: innovative2026ServiceStats.manufacturingLogisticsServices },
    { id: 'energy', name: 'Energy & Sustainability', icon: '⚡', count: innovative2026ServiceStats.energySustainabilityServices },
    { id: 'entertainment', name: 'Entertainment & Media', icon: '🎬', count: innovative2026ServiceStats.entertainmentMediaServices }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K+/month', range: '$5K+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name' },
    { id: 'price', name: 'Price' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customers' }
  ];

const innovative-2026-services-showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>innovative-2026-services-showcase | Zion Tech Group</title>
        <meta name="description" content="innovative-2026-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">innovative-2026-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default innovative-2026-services-showcase;
