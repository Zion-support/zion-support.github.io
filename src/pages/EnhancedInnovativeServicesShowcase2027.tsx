import React, { useState, useEffect } from 'react';
import { motion  } from 'framer-motion.ts';
import { Brain, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Filter,
  Search,
  Grid3X3,
  List
 } from 'lucide-react';
import { enhancedInnovativeServices2027, enhancedInnovativeServices2027Categories  } from '../data/enhancedInnovativeServices2027';
const categoryIcons: { [key: string]: React.ComponentType<any> } = {
  'Web3 Solutions': Globe,
  'Metaverse Solutions': Eye,
  'Sustainable Tech': Leaf,
  'NeuroTech Solutions': Brain,
  'Fusion Energy Solutions': Zap,
  'OceanTech Solutions': Waves,
  'AgriTech Solutions': Factory,
  'Smart City Solutions': Building2,
  'Digital Twin Solutions': Cpu,
  'Edge AI Solutions': Network,
  'Federated Learning Solutions': Code
};
const categoryColors: { [key: string]: string } = {
  'Web3 Solutions': 'from-purple-500 to-pink-500',
  'Metaverse Solutions': 'from-blue-500 to-cyan-500',
  'Sustainable Tech': 'from-green-500 to-emerald-500',
  'NeuroTech Solutions': 'from-indigo-500 to-purple-500',
  'Fusion Energy Solutions': 'from-orange-500 to-red-500',
  'OceanTech Solutions': 'from-blue-500 to-teal-500',
  'AgriTech Solutions': 'from-green-500 to-lime-500',
  'Smart City Solutions': 'from-gray-500 to-blue-500',
  'Digital Twin Solutions': 'from-purple-500 to-indigo-500',
  'Edge AI Solutions': 'from-red-500 to-pink-500',
  'Federated Learning Solutions': 'from-yellow-500 to-orange-500'
};
export default function EnhancedInnovativeServicesShowcase2027(...args[]):  {
  const [selectedCategory, setSelectedCategory] = useState<any>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<any>('grid');
  const [sortBy, setSortBy] = useState<any>('name');
  const filteredServices = enhancedInnovativeServices2027.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch});
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'innovation':
        const innovationOrder = { 'Breakthrough': 3, 'Advanced': 2, 'Innovative': 1 };
        return (innovationOrder[b.innovationLevel as keyof typeof innovationOrder] || 0) - 
               (innovationOrder[a.innovationLevel as keyof typeof innovationOrder] || 0);
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
      default:
        return 0}
  });


