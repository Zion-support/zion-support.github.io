<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { useState } from 'react';
import Head from 'next/head';

import { TrendingUp, Star, Users, Zap, Brain, Atom, Sparkles, Shield, Target, Cloud, DollarSign, BarChart3, Target as TargetIcon, Award } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { revolutionary2026Services } from '../data/revolutionary-2026-services';
import { emergingTech2026Services } from '../data/emerging-tech-2026-services';
import { comprehensiveIT2026Services } from '../data/comprehensive-it-2026-services';

export default function MarketPricing2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  // Combine all 2026 services
  const allServices = [
    ...revolutionary2026Services,
    ...emergingTech2026Services,
    ...comprehensiveIT2026Services
  ];

  // Filter services based on selection
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'budget' && parseFloat(service.price.replace(/[^0-9.]/g, '')) < 5000) ||
      (priceRange === 'mid' && parseFloat(service.price.replace(/[^0-9.]/g, '')) >= 5000 && parseFloat(service.price.replace(/[^0-9.]/g, '')) < 15000) ||
      (priceRange === 'premium' && parseFloat(service.price.replace(/[^0-9.]/g, '')) >= 15000);
    return matchesCategory && matchesPrice;
  });

  const categories = [
    { id: 'all', name: 'All Categories', icon: BarChart3, count: allServices.length },
    { id: 'AI', name: 'AI & Machine Learning', icon: Brain, count: allServices.filter(s => s.category.includes('AI')).length },
    { id: 'Quantum', name: 'Quantum Computing', icon: Atom, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'Emerging', name: 'Emerging Technology', icon: Sparkles, count: allServices.filter(s => s.category.includes('Emerging')).length },
    { id: 'IT', name: 'IT & Infrastructure', icon: Shield, count: allServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'Autonomous', name: 'Autonomous Systems', icon: Target, count: allServices.filter(s => s.category.includes('Autonomous')).length },
    { id: 'Cloud', name: 'Cloud & DevOps', icon: Cloud, count: allServices.filter(s => s.category.includes('Cloud') || s.category.includes('DevOps')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All price ranges' },
    { id: 'budget', name: 'Budget ($0 - $5K)', range: 'Affordable solutions for startups and small businesses' },
    { id: 'mid', name: 'Mid-Range ($5K - $15K)', range: 'Professional solutions for growing companies' },
    { id: 'premium', name: 'Premium ($15K+)', range: 'Enterprise-grade solutions for large organizations' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Calculate pricing statistics
  const pricingStats = {
    totalServices: allServices.length,
    averagePrice: allServices.reduce((sum, service) => sum + parseFloat(service.price.replace(/[^0-9.]/g, '')), 0) / allServices.length,
    lowestPrice: Math.min(...allServices.map(s => parseFloat(s.price.replace(/[^0-9.]/g, '')))),
    highestPrice: Math.max(...allServices.map(s => parseFloat(s.price.replace(/[^0-9.]/g, '')))),
    totalCustomers: allServices.reduce((sum, service) => sum + service.customers, 0),
    averageRating: allServices.reduce((sum, service) => sum + service.rating, 0) / allServices.length
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const market-pricing-2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>market-pricing-2026 | Zion Tech Group</title>
        <meta name="description" content="market-pricing-2026 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">market-pricing-2026</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default market-pricing-2026;