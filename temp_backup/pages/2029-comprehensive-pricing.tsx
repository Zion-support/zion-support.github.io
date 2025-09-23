import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Star, Zap, Shield, Globe, Cpu, Brain, 
  Atom, Rocket, Target, Microscope, DollarSign, Phone, 
  Mail, MapPin, ArrowRight, TrendingUp, Users, Briefcase
} from 'lucide-react';
import UltraFuturisticNavigation20o29 from '../components/layout/UltraFuturisticNavigation20o29';
import UltraFuturisticFooter20o29 from '../components/layout/UltraFuturisticFooter20o29';
import FuturisticAnimatedBackground20o29 from '../components/ui/FuturisticAnimatedBackground20o29';
import { aiAutonomousEcosystemServices20o29 } from '../data/20o29-ai-autonomous-ecosystem';
import { emergingTechBreakthroughServices20o29 } from '../data/20o29-emerging-tech-breakthroughs';
import { practicalBusinessSolutionServices20o29 } from '../data/20o29-practical-business-solutions';

const contactInfo ={
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function ComprehensivePricing20o29() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const allServices = [
    ...aiAutonomousEcosystemServices20o29,
    ...emergingTechBreakthroughServices20o29,
    ...practicalBusinessSolutionServices20o29
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Briefcase, count: allServices.length },
    { id: 'ai-autonomous', name: 'AI Autonomous', icon: Brain, count: aiAutonomousEcosystemServices20o29.length },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Atom, count: emergingTechBreakthroughServices20o29.length },
    { id: 'business-solutions', name: 'Business Solutions', icon: Target, count: practicalBusinessSolutionServices20o29.length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => {
        if (selectedCategory === 'ai-autonomous') {
          return service.category.some(cat => cat.includes('AI') && cat.includes('Autonomous'));
        } else if (selectedCategory === 'emerging-tech') {
          return service.category.some(cat => cat.includes('Quantum') || cat.includes('Biotech') || cat.includes('Space'));
        } else if (selectedCategory === 'business-solutions') {
          return service.category.some(cat => cat.includes('Business') || cat.includes('Marketing') || cat.includes('Education'));
        }
        return true;
      });

  const getPrice = (price: string) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    return billingCycle === 'monthly' ? numericPrice : Math.round(numericPrice * 0.8);
  };

  const getBillingText = (price: string) => {
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ''));
    if (billingCycle === 'monthly') {
      return `$${numericPrice.toLocaleString()}/month`;
    } else {
      return `$${Math.round(numericPrice * 0.8).toLocaleString()}/month (billed annually)`;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <FuturisticAnimatedBackground20o29  />
      
      <Head>
        <title>20o29 Comprehensive Pricing - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive 20o29 pricing for AI autonomous ecosystems, emerging tech breakthroughs, and practical business solutions. Transparent pricing with flexible billing options."  />
        <meta name="keywords" content="20o29 pricing, AI services pricing, quantum technology pricing, business solutions pricing, Zion Tech Group"  />
        <link rel="canonical" href="https://ziontechgroup.com/20o29-comprehensive-pricing"  />
      </Head>

      <UltraFuturisticNavigation20o29  />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-40o0 via-pink-40o0 to-blue-40o0 bg-clip-text text-transparent mb-8">
              20o29 Comprehensive Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-30o0 mb-12 max-w-4xl mx-auto">
              Transparent pricing for our revolutionary 20o29 services. Choose the perfect plan 
              for your business transformation journey.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="text-gray-40o0">Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-16 h-8 bg-gray-70o0 rounded-full transition-colors duration-30o0 ${
                  billingCycle === 'annual' ? 'bg-purple-60o0' : ''
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-30o0 ${
                    billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                  }`}
                 />
              </button>
              <span className="text-gray-40o0">Annual (20% off)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-90o0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-30o0 ${
                  selectedCategory === category.id
                    ? 'border-purple-50o0 bg-purple-50o0/20 text-purple-30o0'
                    : 'border-gray-60o0 text-gray-40o0 hover:border-gray-50o0 hover:text-gray-30o0'
                }`}
                whileHover={{ scale: 1.0o5 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-5 h-5"  />
                <span>{category.name}</span>
                <span className="px-2 py-1 bg-gray-70o0 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
