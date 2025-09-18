<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, 
  DollarSign, Shield, Mail, MapPin, Rocket, Brain, 
  Sparkles, Atom, Target, Microscope, Search, Filter,
  ExternalLink, Users, Clock, BarChart3, Award, Globe,
  Cpu, Database, Lock, MessageSquare, BarChart, ShoppingCart,
  UserCheck, FileText, Palette, Camera, Video, Music
} from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticBackground2035 from '../components/ui/UltraFuturisticBackground2035';
import UltraFuturisticNavigation2033 from '../components/layout/UltraFuturisticNavigation2033';
import UltraFuturisticFooter2034 from '../components/layout/UltraFuturisticFooter2034';

export default function EnhancedServicesOverview() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'Artificial Intelligence',
      description: 'Revolutionary AI solutions including consciousness platforms, emotional intelligence, and autonomous business systems.',
      icon: Brain,
      color: 'from-violet-500 to-purple-600',
      services: [
        'AI Consciousness Evolution Platform',
        'AI Emotional Intelligence Platform',
        'AI Autonomous Business Manager',
        'AI Creativity Orchestrator',
        'AI Content Generation & Optimization',
        'AI Sales Automation',
        'AI HR Recruitment',
        'AI Legal Contract Analysis'
      ],
      pricing: { starting: '$1,499', range: '$1,499 - $9,999' },
      benefits: ['300% ROI improvement', '80% time savings', 'Enhanced decision making'],
      href: '/ai-services',
      featured: true
    },
    {
      id: 'quantum-services',
      name: 'Quantum Computing',
      description: 'Cutting-edge quantum computing solutions for security, finance, and emerging technology applications.',
      icon: Atom,
      color: 'from-indigo-500 to-blue-600',
      services: [
        'Quantum Internet Security Gateway',
        'Quantum Financial Trading Platform',
        'Quantum AI Brain-Computer Interface',
        'Quantum Blockchain Infrastructure',
        'Quantum Cybersecurity Solutions',
        'Quantum Energy Optimization',
        'Quantum Logistics Platform',
        'Quantum Metaverse Development'
      ],
      pricing: { starting: '$2,999', range: '$2,999 - $19,999' },
      benefits: ['Unbreakable security', 'Exponential performance', 'Future-proof technology'],
      href: '/quantum-services',
      featured: true
    },
    {
      id: 'space-technology',
      name: 'Space Technology',
      description: 'Advanced space technology solutions including mining automation, satellite systems, and space infrastructure.',
      icon: Rocket,
      color: 'from-teal-500 to-emerald-600',
      services: [
        'Space Mining Automation Platform',
        'Satellite Constellation Management',
        'Space Debris Tracking System',
        'Space Tourism Platform',
        'Space Resource Analytics',
        'Space Weather Monitoring',
        'Space Communication Networks',
        'Space Manufacturing Systems'
      ],
      pricing: { starting: '$4,999', range: '$4,999 - $49,999' },
      benefits: ['Access to space resources', 'Global connectivity', 'Innovation leadership'],
      href: '/space-technology',
      featured: true
    },
    {
      id: 'enterprise-it',
      name: 'Enterprise IT Solutions',
      description: 'Comprehensive enterprise IT solutions including infrastructure, security, and operations automation.',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-600',
      services: [
        'Autonomous DevOps Platform',
        'Zero Trust Network Architecture',
        'Edge Computing Orchestration',
        'AI IT Operations Center',
        'Cloud Infrastructure Management',
        'Data Center Automation',
        'Network Security Monitoring',
        'IT Asset Management'
      ],
      pricing: { starting: '$1,999', range: '$1,999 - $29,999' },
      benefits: ['Operational efficiency', 'Cost reduction', 'Security enhancement'],
      href: '/enterprise-it',
      featured: true
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      description: 'Market-ready micro SAAS services for business automation, marketing, and operational efficiency.',
      icon: Target,
      color: 'from-green-500 to-yellow-600',
      services: [
        'AI Content Calendar Pro',
        'Smart Invoice Automation',
        'Customer Success Automation',
        'AI Sales Pipeline Optimizer',
        'HR Automation Suite',
        'E-commerce Automation Platform',
        'Project Management AI',
        'Data Analytics Automation'
      ],
      pricing: { starting: '$19', range: '$19 - $499' },
      benefits: ['Quick implementation', 'Affordable pricing', 'Immediate ROI'],
      href: '/enhanced-micro-saas-showcase',
      featured: true
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Advanced cybersecurity solutions including threat detection, incident response, and security automation.',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      services: [
        'AI Threat Detection System',
        'Incident Response Automation',
        'Vulnerability Assessment Platform',
        'Security Awareness Training',
        'Compliance Monitoring System',
        'Penetration Testing Automation',
        'Security Operations Center',
        'Risk Assessment AI'
      ],
      pricing: { starting: '$79', range: '$79 - $999' },
      benefits: ['Threat prevention', 'Compliance assurance', 'Risk mitigation'],
      href: '/security',
      featured: false
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      description: 'Comprehensive data analytics solutions including collection, processing, and visualization automation.',
      icon: BarChart3,
      color: 'from-orange-500 to-red-600',
      services: [
        'Data Pipeline Automation',
        'Real-time Analytics Dashboard',
        'Predictive Analytics Platform',
        'Data Quality Monitoring',
        'Business Intelligence Suite',
        'Data Visualization Tools',
        'Machine Learning Pipeline',
        'Data Governance Platform'
      ],
      pricing: { starting: '$49', range: '$49 - $799' },
      benefits: ['Data-driven decisions', 'Operational insights', 'Performance optimization'],
      href: '/ai-data-analytics',
      featured: false
    },
    {
      id: 'content-creation',
      name: 'Content Creation',
      description: 'AI-powered content creation and management solutions for marketing and communication.',
      icon: FileText,
      color: 'from-pink-500 to-rose-600',
      services: [
        'AI Content Generator',
        'Video Editing AI Platform',
        'Social Media Automation',
        'Content Calendar Management',
        'SEO Optimization Tools',
        'Multimedia Content Creation',
        'Content Performance Analytics',
        'Brand Voice AI'
      ],
      pricing: { starting: '$29', range: '$29 - $399' },
      benefits: ['Content quality improvement', 'Time savings', 'Engagement increase'],
      href: '/ai-content-generator',
      featured: false
    },
    {
      id: 'automation',
      name: 'Business Automation',
      description: 'Comprehensive business process automation solutions for operational efficiency.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      services: [
        'Workflow Automation Platform',
        'Process Mining Tools',
        'RPA Implementation',
        'Business Process Optimization',
        'Automation Consulting',
        'Integration Services',
        'Performance Monitoring',
        'Automation Strategy'
      ],
      pricing: { starting: '$99', range: '$99 - $1,999' },
      benefits: ['Process efficiency', 'Cost reduction', 'Error elimination'],
      href: '/automation',
      featured: false
    },
    {
      id: 'research-development',
      name: 'Research & Development',
      description: 'Cutting-edge R&D services including emerging technology research and innovation consulting.',
      icon: Microscope,
      color: 'from-purple-500 to-indigo-600',
      services: [
        'Emerging Technology Research',
        'Innovation Strategy Consulting',
        'Prototype Development',
        'Technology Assessment',
        'Patent Research',
        'Market Analysis',
        'Technology Transfer',
        'Innovation Workshops'
      ],
      pricing: { starting: '$199', range: '$199 - $2,999' },
      benefits: ['Innovation leadership', 'Competitive advantage', 'Future readiness'],
      href: '/emerging-tech',
      featured: false
    }
  ];

  const filteredCategories = serviceCategories.filter(category =>
    selectedCategory === 'all' || category.id === selectedCategory
  );

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
        duration: 0.6
      }
    }
  };
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const enhanced-services-overview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>enhanced-services-overview | Zion Tech Group</title>
        <meta name="description" content="enhanced-services-overview - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">enhanced-services-overview</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default enhanced-services-overview;
