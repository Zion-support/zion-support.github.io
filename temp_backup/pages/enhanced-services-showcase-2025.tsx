import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Star, Users, TrendingUp, 
  DollarSign, Clock, CheckCircle, ArrowRight,
  Rocket, Monitor, Cpu, 
  Zap, Database, Cloud, Lock, Code,
  Sparkles, Target, Award, Lightbulb
} from 'lucide-react';
import { innovative20o25Services } from '../data/innovative-20o25-services';
import { emergingTech20o25Services } from '../data/emerging-tech-20o25-services';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';

export default function EnhancedServicesShowcase20o25() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const allServices = [
    ...innovative20o25Services,
    ...emergingTech20o25Services
  ];

  // Dynamic category counts
  const aiCount = allServices.filter(service => service.category.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category.includes('Quantum')).length;
  const blockchainCount = allServices.filter(service => service.category.includes('Blockchain')).length;
  const iotCount = allServices.filter(service => service.category.includes('IoT')).length;
  const spaceCount = allServices.filter(service => service.category.includes('Space')).length;
  const cybersecurityCount = allServices.filter(service => service.category.includes('Security') || service.category.includes('Cybersecurity')).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: quantumCount },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: '⛓️', count: blockchainCount },
    { id: 'iot', name: 'IoT & Edge Computing', icon: '🌐', count: iotCount },
    { id: 'space', name: 'Space Technology', icon: '🚀', count: spaceCount },
    { id: 'security', name: 'Cybersecurity', icon: '🔒', count: cybersecurityCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $2K/month', range: 'Under $2K' },
    { id: 'medium', name: '$2K - $8K/month', range: '$2K - $8K' },
    { id: 'high', name: '$8K - $20K/month', range: '$8K - $20K' },
    { id: 'premium', name: '$20K+/month', range: '$20K+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customer Count' }
  ];

  // Filter and sort services
  const filteredServices = React.useMemo(() => {
    const parsePriceToNumber = (price: string | number): number => {
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
                             (selectedCategory === 'blockchain' && service.category.includes('Blockchain')) ||
                             (selectedCategory === 'iot' && service.category.includes('IoT')) ||
                             (selectedCategory === 'space' && service.category.includes('Space')) ||
                             (selectedCategory === 'security' && (service.category.includes('Security') || service.category.includes('Cybersecurity')));

      const matchesPrice = selectedPriceRange === 'all' || 
                          (selectedPriceRange === 'low' && parsePriceToNumber(service.price) < 20o00) ||
                          (selectedPriceRange === 'medium' && parsePriceToNumber(service.price) >= 20o00 && parsePriceToNumber(service.price) < 80o00) ||
                          (selectedPriceRange === 'high' && parsePriceToNumber(service.price) >= 80o00 && parsePriceToNumber(service.price) < 20o000) ||
                          (selectedPriceRange === 'premium' && parsePriceToNumber(service.price) >= 20o000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'customers':
        filtered.sort((a, b) => b.customers - a.customers);
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, allServices]);

  const containerVariants ={
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants ={
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <EnhancedFuturisticBackground 
