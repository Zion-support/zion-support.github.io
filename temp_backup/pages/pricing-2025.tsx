import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Check, Star, Users, Zap, Shield, Globe, 
  TrendingUp, Award, Clock, CheckCircle, ExternalLink
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { innovative2025MicroSaasExpansionV3 } from '../data/2025-innovative-micro-saas-expansion-v3';

export default function Pricing2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: '🧠' },
    { id: 'Cybersecurity & Quantum', name: 'Cybersecurity & Quantum', icon: '🔒' },
    { id: 'Edge Computing & IoT', name: 'Edge Computing & IoT', icon: '🌐' },
    { id: 'Space Technology & Innovation', name: 'Space Technology & Innovation', icon: '🚀' },
    { id: 'Neural Technology & BCI', name: 'Neural Technology & BCI', icon: '🧬' }
  ];

  const filteredServices = innovative2025MicroSaasExpansionV3.filter(service => 
    selectedCategory === 'all' || service.category.includes(selectedCategory)
  );

  const getAnnualPrice = (monthlyPrice: string) => {
    const price = parseFloat(monthlyPrice.replace('$', ''));
    const annualPrice = price * 12 * 0.8; // 20% discount for annual
    return `$${Math.round(annualPrice)}`;
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

const pricing-2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>pricing-2025 | Zion Tech Group</title>
        <meta name="description" content="pricing-2025 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">pricing-2025</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default pricing-2025;
