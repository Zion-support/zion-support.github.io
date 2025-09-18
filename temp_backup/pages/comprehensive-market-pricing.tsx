<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Star, Users, TrendingUp, 
  DollarSign, Clock, CheckCircle, ArrowRight,
  Brain, Rocket, Dna, Globe, Shield, Wifi, 
  Package, Bot, Car, Building2, Monitor, Cpu, 
  Zap, Atom, Database, Cloud, Lock, Code,
  Phone, Mail, MapPin, ExternalLink, Award,
  Target, Sparkles, Crown, Infinity, Zap as ZapIcon,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { revolutionary2025Services } from '../data/revolutionary-2025-services';
import { nextGenInnovations2025 } from '../data/next-gen-innovations-2025';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Card from '../components/ui/Card';

export default function ComprehensiveMarketPricing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const allServices = [
    ...revolutionary2025Services,
    ...nextGenInnovations2025
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Market analysis data
  const marketAnalysis = {
    totalMarketSize: '$156.8B',
    averageROI: '1000%',
    serviceCount: allServices.length,
    categories: [
      { name: 'AI & Machine Learning', marketSize: '$45.2B', growth: '280%' },
      { name: 'Quantum Computing', marketSize: '$12.8B', growth: '320%' },
      { name: 'Cybersecurity', marketSize: '$28.5B', growth: '220%' },
      { name: 'Cloud & Infrastructure', marketSize: '$35.6B', growth: '180%' },
      { name: 'Emerging Tech', marketSize: '$18.7B', growth: '350%' },
      { name: 'Enterprise IT', marketSize: '$16.0B', growth: '200%' }
    ]
  };

  // Competitive analysis
  const competitiveAnalysis = {
    aiServices: [
      { name: 'OpenAI', pricing: '$0.002-$0.12 per 1K tokens', ourAdvantage: 'Consciousness simulation, ethical AI, 1000% ROI' },
      { name: 'Anthropic', pricing: '$3-$15 per 1M tokens', ourAdvantage: 'Quantum-powered AI, privacy preservation, advanced features' },
      { name: 'Google AI', pricing: 'Enterprise pricing', ourAdvantage: 'First-to-market solutions, specialized AI services' }
    ],
    quantumServices: [
      { name: 'IBM Quantum', pricing: '$0.10-$1.60 per second', ourAdvantage: 'Advanced algorithms, industry-specific solutions' },
      { name: 'Microsoft Azure Quantum', pricing: 'Pay-per-use', ourAdvantage: 'Comprehensive quantum platforms, better integration' },
      { name: 'Amazon Braket', pricing: '$0.30 per task', ourAdvantage: 'Quantum optimization, specialized use cases' }
    ],
    cybersecurity: [
      { name: 'CrowdStrike', pricing: '$8.92-$18.92 per endpoint/month', ourAdvantage: 'Quantum threat detection, AI-powered security, 500% ROI' },
      { name: 'SentinelOne', pricing: '$5-$8 per endpoint/month', ourAdvantage: 'Advanced AI security, behavioral analysis, comprehensive protection' },
      { name: 'Palo Alto Networks', pricing: '$50-$200 per user/month', ourAdvantage: 'Zero trust architecture, quantum encryption, enterprise-grade' }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: '🧠', count: allServices.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟', count: allServices.filter(s => s.category.includes('Emerging') || s.category.includes('Next-Gen')).length },
    { id: 'business', name: 'Business & Finance', icon: '💼', count: allServices.filter(s => s.category.includes('Business') || s.category.includes('Finance')).length },
    { id: 'industry', name: 'Industry 4.0', icon: '🏭', count: allServices.filter(s => s.category.includes('Manufacturing') || s.category.includes('Industry')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $10K/month', range: 'Under $10K' },
    { id: 'medium', name: '$10K - $25K/month', range: '$10K - $25K' },
    { id: 'high', name: '$25K+/month', range: '$25K+' }
  ];

  // Filter and sort services
  const filteredServices = React.useMemo(() => {
    const parsePriceToNumber = (price: any): number => {
      if (typeof price === 'number') return price;
      if (typeof price === 'string') {
        const match = price.replace(/[^0-9.]/g, '');
        const parsed = parseFloat(match || '0');
        return isNaN(parsed) ? 0 : parsed;
      }
      return 0;
    };

    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && service.category.includes('AI')) ||
                             (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||
                             (selectedCategory === 'emerging' && (service.category.includes('Emerging') || service.category.includes('Next-Gen'))) ||
                             (selectedCategory === 'business' && (service.category.includes('Business') || service.category.includes('Finance'))) ||
                             (selectedCategory === 'industry' && (service.category.includes('Manufacturing') || service.category.includes('Industry')));

      const matchesPrice = selectedPriceRange === 'all' ||
                          (selectedPriceRange === 'low' && parsePriceToNumber(service.price) < 10000) ||
                          (selectedPriceRange === 'medium' && parsePriceToNumber(service.price) >= 10000 && parsePriceToNumber(service.price) <= 25000) ||
                          (selectedPriceRange === 'high' && parsePriceToNumber(service.price) > 25000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort by price low to high
    filtered.sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price));

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange]);
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const comprehensive-market-pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>comprehensive-market-pricing | Zion Tech Group</title>
        <meta name="description" content="comprehensive-market-pricing - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">comprehensive-market-pricing</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};


export default AdvancedQuantumComputing2026;
