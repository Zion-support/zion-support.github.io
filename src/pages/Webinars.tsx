import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  Zap, 
  Globe,
  Video,
  Database,
  Target,
  Calendar,
  Clock,
  Users,
  Play,
  ExternalLink,
  Search,
  Filter,
  Star,
  Eye,
  Download,
  Share2,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Webinars() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPast, setShowPast] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket, count: 0 },
    { id: 'healthcare-tech', name: 'Healthcare Technology', icon: Heart, count: 0 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, count: 0 },
    { id: 'sustainability', name: 'Sustainability & Green IT', icon: Globe, count: 0 }
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI Autonomous Research Assistant: Revolutionizing Business Intelligence',
      description: 'Discover how our revolutionary AI Autonomous Research Assistant is transforming how businesses gather, analyze, and synthesize information across multiple sources.',
      category: 'ai-ml',
      type: 'upcoming',
      date: '2025-02-10T14:00:00Z',
      duration: '75 min',
      speakers: ['Dr. Sarah Chen', 'Dr. Michael Rodriguez', 'AI Research Team'],
      maxAttendees: 600,
      currentAttendees: 487,
      featured: true,
      tags: ['AI Research', 'Autonomous Systems', 'Business Intelligence', 'Innovation'],
      thumbnail: '/images/webinars/ai-autonomous-research-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    },
    {
      id: 2,
      title: 'AI Supply Chain Optimization: Reducing Costs by Up to 30%',
      description: 'Learn how AI-powered supply chain optimization can predict demand, optimize inventory, and reduce costs significantly for your organization.',
      category: 'ai-ml',
      type: 'upcoming',
      date: '2025-02-12T15:00:00Z',
      duration: '60 min',
      speakers: ['Michael Rodriguez', 'Supply Chain Experts', 'AI Implementation Team'],
      maxAttendees: 400,
      currentAttendees: 298,
      featured: true,
      tags: ['Supply Chain', 'AI Optimization', 'Cost Reduction', 'Predictive Analytics'],
      thumbnail: '/images/webinars/ai-supply-chain-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Advanced Threat Detection',
      description: 'Explore cutting-edge cybersecurity solutions that leverage AI to detect and respond to sophisticated threats in real-time.',
      category: 'cybersecurity',
      type: 'upcoming',
      date: '2025-02-15T13:00:00Z',
      duration: '90 min',
      speakers: ['Dr. Emily Watson', 'Security Experts', 'AI Security Team'],
      maxAttendees: 500,
      currentAttendees: 342,
      featured: false,
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Real-time Response'],
      thumbnail: '/images/webinars/cybersecurity-ai-2025.jpg',
      registrationRequired: true,
      recordingAvailable: false
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: 'Cloud Migration Strategies for Enterprise Success',
      description: 'Learn proven strategies for migrating legacy systems to the cloud while minimizing downtime and maximizing ROI.',
      category: 'cloud-devops',
      type: 'past',
      date: '2024-12-15T14:00:00Z',
      duration: '75 min',
      speakers: ['Cloud Architecture Team', 'DevOps Experts'],
      maxAttendees: 450,
      currentAttendees: 450,
      featured: false,
      tags: ['Cloud Migration', 'Enterprise', 'DevOps', 'ROI'],
      thumbnail: '/images/webinars/cloud-migration-2024.jpg',
      registrationRequired: false,
      recordingAvailable: true,
      recordingUrl: '/recordings/cloud-migration-2024',
      views: 1247,
      rating: 4.8
    },
    {
      id: 5,
      title: 'Digital Transformation Roadmap: From Strategy to Execution',
      description: 'A comprehensive guide to planning and executing successful digital transformation initiatives.',
      category: 'digital-transformation',
      type: 'past',
      date: '2024-11-20T15:00:00Z',
      duration: '60 min',
      speakers: ['Digital Strategy Team', 'Change Management Experts'],
      maxAttendees: 600,
      currentAttendees: 600,
      featured: false,
      tags: ['Digital Transformation', 'Strategy', 'Change Management', 'Execution'],
      thumbnail: '/images/webinars/digital-transformation-2024.jpg',
      registrationRequired: false,
      recordingAvailable: true,
      recordingUrl: '/recordings/digital-transformation-2024',
      views: 2156,
      rating: 4.9
    }
  ];

  const allWebinars = [...upcomingWebinars, ...pastWebinars];

  // Update category counts
  categories.forEach(category => {
    category.count = allWebinars.filter(webinar => 
      category.id === 'all' || webinar.category === category.id
    ).length;
  });

  const filteredWebinars = allWebinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'all' || webinar.category === selectedCategory;
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         webinar.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTime = showPast ? webinar.type === 'past' : webinar.type === 'upcoming';
    
    return matchesCategory && matchesSearch && matchesTime;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimeUntil = (dateString: string) => {
    const now = new Date();
    const webinarDate = new Date(dateString);
    const diff = webinarDate.getTime() - now.getTime();
    
    if (diff <= 0) return 'Past';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} away`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} away`;
    return 'Starting soon';
  };

  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case 'ai-ml': return 'from-purple-500 to-pink-500';
      case 'cybersecurity': return 'from-red-500 to-orange-500';
      case 'cloud-devops': return 'from-blue-500 to-cyan-500';
      case 'digital-transformation': return 'from-emerald-500 to-teal-500';
      case 'healthcare-tech': return 'from-green-500 to-emerald-500';
      case 'quantum-computing': return 'from-indigo-500 to-purple-500';
      case 'sustainability': return 'from-yellow-500 to-orange-500';
      default: return 'from-slate-500 to-gray-500';
    }
  };

  return (
    <>
      <SEO 
        title="Webinars - Zion Tech Group"
        description="Join our expert-led webinars on AI, cybersecurity, cloud computing, and digital transformation. Learn from industry leaders and stay ahead of technology trends."
        keywords="webinars, AI, cybersecurity, cloud computing, digital transformation, technology education, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium text-white mb-6">
                <Video className="w-4 h-4 mr-2" />
                Expert-Led Webinars