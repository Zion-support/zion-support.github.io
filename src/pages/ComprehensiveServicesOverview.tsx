import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Shield,
  Server,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Sparkles
} from 'lucide-react';
// Mock data for services (replace with actual imports when available)
const ALL_SERVICES = [
  {
    id: 'ai-legal-tech',
    title: 'AI-Powered Legal Tech Solutions',
    description: 'Advanced legal technology powered by artificial intelligence for document analysis, contract review, and legal research.',
    category: 'AI & Legal Tech',
    price: '$299',
    supportLevel: 'premium',
    tags: ['Legal Tech', 'AI', 'Document Analysis', 'Contract Review'],
    features: ['Automated document review', 'Contract analysis', 'Legal research assistance', 'Compliance monitoring'],
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: 'ai-fintech',
    title: 'AI-Driven Financial Technology',
    description: 'Intelligent financial solutions including fraud detection, risk assessment, and automated trading systems.',
    category: 'AI & FinTech',
    price: '$499',
    supportLevel: 'enterprise',
    tags: ['FinTech', 'AI', 'Fraud Detection', 'Risk Assessment'],
    features: ['Fraud detection', 'Risk assessment', 'Automated trading', 'Financial analytics'],
    rating: 4.9,
    reviewCount: 234
  },
  {
    id: 'ai-healthcare',
    title: 'AI Healthcare Solutions',
    description: 'Healthcare technology powered by AI for diagnosis, patient monitoring, and medical research.',
    category: 'AI & Healthcare',
    price: '$399',
    supportLevel: 'premium',
    tags: ['Healthcare', 'AI', 'Diagnosis', 'Patient Monitoring'],
    features: ['Medical diagnosis', 'Patient monitoring', 'Drug discovery', 'Health analytics'],
    rating: 4.7,
    reviewCount: 189
  }
];

const categoryIcons = {
  'AI & Legal Tech': FileText,
  'AI & FinTech': DollarSign,
  'AI & Healthcare': Heart,
  'Cybersecurity & Quantum': Shield,
  'AI & Supply Chain': Building,
  'AI & Energy': Zap,
  'AI & Customer Experience': Users,
  'Quantum & AI': Cpu,
  'AI & Data Governance': Database,
  'AI & HR Tech': Users,
  'AI & Machine Learning': Brain,
  'AI & Business Intelligence': BarChart3,
  'AI & Marketing Automation': Target,
  'AI & CRM': Users,
  'AI & ERP': Building,
  'AI & Project Management': Code,
  'AI & Autonomous Systems': Bot,
  'AI & Research': Brain,
  'AI & Content Generation': FileText,
  'AI & Voice Technology': Smartphone,
  'AI & Video Generation': Eye,
  'AI & Threat Intelligence': Shield,
  'AI & Cloud Management': Cloud,
  'AI & DevOps': Code
};

const categoryColors = {
  'AI & Legal Tech': 'from-blue-500 to-indigo-500',
  'AI & FinTech': 'from-green-500 to-emerald-500',
  'AI & Healthcare': 'from-red-500 to-pink-500',
  'Cybersecurity & Quantum': 'from-purple-500 to-violet-500',
  'AI & Supply Chain': 'from-orange-500 to-red-500',
  'AI & Energy': 'from-yellow-500 to-orange-500',
  'AI & Customer Experience': 'from-pink-500 to-rose-500',
  'Quantum & AI': 'from-cyan-500 to-blue-500',
  'AI & Data Governance': 'from-indigo-500 to-purple-500',
  'AI & HR Tech': 'from-teal-500 to-green-500',
  'AI & Machine Learning': 'from-purple-500 to-pink-500',
  'AI & Business Intelligence': 'from-indigo-500 to-purple-500',
  'AI & Marketing Automation': 'from-pink-500 to-rose-500',
  'AI & CRM': 'from-blue-500 to-cyan-500',
  'AI & ERP': 'from-green-500 to-emerald-500',
  'AI & Project Management': 'from-orange-500 to-red-500',
  'AI & Autonomous Systems': 'from-purple-500 to-violet-500',
  'AI & Research': 'from-cyan-500 to-blue-500',
  'AI & Content Generation': 'from-indigo-500 to-purple-500',
  'AI & Voice Technology': 'from-teal-500 to-green-500',
  'AI & Video Generation': 'from-pink-500 to-rose-500',
  'AI & Threat Intelligence': 'from-red-500 to-pink-500',
  'AI & Cloud Management': 'from-blue-500 to-cyan-500',
  'AI & DevOps': 'from-orange-500 to-red-500'
};

const supportLevelColors = {
  'premium': 'bg-gradient-to-r from-blue-500 to-cyan-500',
  'enterprise': 'bg-gradient-to-r from-purple-500 to-pink-500',
  'basic': 'bg-gradient-to-r from-green-500 to-emerald-500'
};

export default function ComprehensiveServicesOverview() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = useMemo(() => {
    let filtered = ALL_SERVICES;
    
    // Search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        (service.tags && service.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
      );
    }
    }
    return service.pricing?.basic || 0;
  };
