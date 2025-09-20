import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Target, Crown, Star, TrendingUp, ArrowRight,
  CheckCircle, DollarSign, Users, Clock, Award, Zap as ZapIcon,
  Search, Phone, Mail, MapPin, Heart, Leaf, Car, GraduationCap, Scale,
  Building, Factory, Camera, Video, Music, Gamepad2, Eye,
  Globe2, Satellite, Dna, Battery, Gamepad, Cpu as CpuIcon
} from 'lucide-react';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';
import { cuttingEdge2028MicroSaas } from '../data/2028-cutting-edge-micro-saas';
import { practicalBusinessSolutions2028 } from '../data/2028-practical-business-solutions';
import { advancedAIAutonomousServices2028 } from '../data/2028-advanced-ai-autonomous-services';
import { quantumSpaceInnovations2028 } from '../data/2028-quantum-space-innovations';

export default function UltimateServicesShowcase2029() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const allServices = [
    ...cuttingEdge2028MicroSaas,
    ...practicalBusinessSolutions2028,
    ...advancedAIAutonomousServices2028,
    ...quantumSpaceInnovations2028
  ];

  const categories = [
    { id: 'all', name: '🚀 All Services', icon: Rocket, count: allServices.length, color: 'from-violet-600 to-purple-600' },
    { id: 'cutting-edge', name: '⚡ Cutting-Edge', icon: Zap, count: cuttingEdge2028MicroSaas.length, color: 'from-cyan-600 to-blue-600' },
    { id: 'business', name: '🎯 Business Solutions', icon: Target, count: practicalBusinessSolutions2028.length, color: 'from-green-600 to-emerald-600' },
    { id: 'ai-autonomous', name: '🤖 AI & Autonomous', icon: Brain, count: advancedAIAutonomousServices2028.length, color: 'from-emerald-600 to-teal-600' },
    { id: 'quantum-space', name: '⚛️ Quantum & Space', icon: Atom, count: quantumSpaceInnovations2028.length, color: 'from-indigo-600 to-blue-600' },
    { id: 'ai', name: '🧠 AI & ML', icon: Brain, count: allServices.filter(s => s.category.some(c => c.includes('AI') || c.includes('Machine Learning'))).length, color: 'from-pink-600 to-rose-600' },
    { id: 'quantum', name: '🔮 Quantum Tech', icon: Atom, count: allServices.filter(s => s.category.some(c => c.includes('Quantum'))).length, color: 'from-purple-600 to-violet-600' },
    { id: 'enterprise', name: '🏢 Enterprise', icon: Shield, count: allServices.filter(s => s.category.some(c => c.includes('Enterprise'))).length, color: 'from-blue-600 to-cyan-600' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $5K', range: 'Under $5,000' },
    { id: 'medium', name: '$5K - $15K', range: '$5,000 - $15,000' },
    { id: 'high', name: '$15K - $30K', range: '$15,000 - $30,000' },
    { id: 'premium', name: 'Over $30K', range: 'Over $30,000' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'cutting-edge' && cuttingEdge2028MicroSaas.includes(service)) ||
      (selectedCategory === 'business' && practicalBusinessSolutions2028.includes(service)) ||
      (selectedCategory === 'ai-autonomous' && advancedAIAutonomousServices2028.includes(service)) ||
      (selectedCategory === 'quantum-space' && quantumSpaceInnovations2028.includes(service)) ||
      (selectedCategory === 'ai' && service.category.some(c => c.includes('AI') || c.includes('Machine Learning'))) ||
      (selectedCategory === 'quantum' && service.category.some(c => c.includes('Quantum'))) ||
      (selectedCategory === 'enterprise' && service.category.some(c => c.includes('Enterprise')));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesPrice = selectedPriceRange === 'all' ||
      (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$,]/g, '')) < 5000) ||
      (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$,]/g, '')) >= 5000 && parseFloat(service.price.replace(/[$,]/g, '')) < 15000) ||
      (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$,]/g, '')) >= 15000 && parseFloat(service.price.replace(/[$,]/g, '')) < 30000) ||
      (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$,]/g, '')) >= 30000);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

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

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

const 2029-ultimate-services-showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>2029-ultimate-services-showcase | Zion Tech Group</title>
        <meta name="description" content="2029-ultimate-services-showcase - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">2029-ultimate-services-showcase</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default 2029-ultimate-services-showcase;
