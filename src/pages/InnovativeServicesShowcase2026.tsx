import React, { useState, useEffect } from 'react';
import { motion  } from 'framer-motion.ts';
import { Brain, 
  Shield, 
  Zap, 
  Cloud, 
  Lock, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Smartphone,
  BarChart3,
  TrendingUp,
  Users,
  Building2,
  Leaf,
  Car,
  Heart,
  Scale,
  Eye,
  Search,
  Filter,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
 } from 'lucide-react';
import { INNOVATIVE_SERVICES  } from '../data/servicesData';
export default function InnovativeServicesShowcase2026(...args[]):  {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('innovation');
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'DevOps & Infrastructure', name: 'DevOps & Infrastructure', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-rose-500 to-pink-500' },
    { id: 'AI & Edge Computing', name: 'AI & Edge Computing', icon: Zap, color: 'from-amber-500 to-yellow-500' }
  ];
  const filteredServices = INNOVATIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch});
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'innovation':
        return a.innovationLevel === 'Cutting-edge' ? -1 : 1;
      case 'roi':
        return parseInt(b.roi.replace('%', '')) - parseInt(a.roi.replace('%', ''));
      default:
        return 0}
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


