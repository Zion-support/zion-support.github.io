import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Star, Sparkles, 
  Grid, List, TrendingUp, 
  Calendar, Calculator, GraduationCap,
  Cpu, Cloud, Settings, Monitor, Palette, Network, Layers, Code, Heart, ShoppingCart, Clock, MessageCircle, HelpCircle, Building,
  Zap, Infinity, Eye, Heart as HeartIcon, Code as CodeIcon, Palette as PaletteIcon,
  Search, User, Bell, Menu as MenuIcon, Car
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;
  category?: string;
  color?: string;
}

function normalizeHref(href: string): string {
  if (!href) return href;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }
  if (!href.startsWith('/')) return href;
  const hasQueryOrHash = href.includes('?') || href.includes('#');
  if (hasQueryOrHash) return href;
  return href.endsWith('/') ? href : href + '/';
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Revolutionary Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Future-defining technology solutions',
    badge: 'New 2043',
    category: 'services',
    color: 'from-emerald-500 to-cyan-500',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete revolutionary services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI Consciousness Evolution', 
        href: '/quantum-neural-consciousness-platform', 
        description: 'Next-generation AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum Neural Ecosystem', 
        href: '/quantum-bio-computing-platform', 
        description: 'Quantum-powered AI systems',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'Space Resource Intelligence', 
        href: '/autonomous-space-mining-ai', 
        description: 'AI-powered space exploration',
        icon: <Rocket className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      },
      { 
        name: 'Autonomous Business Intelligence', 
        href: '/autonomous-business-ecosystem-ai', 
        description: 'Consciousness-driven insights',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-emerald-500 to-teal-500'
      },
      { 
        name: 'Quantum Cybersecurity Future', 
        href: '/quantum-internet-security-gateway', 
        description: 'Future-proof security',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness platforms',
    badge: 'Featured',
    category: 'ai',
    color: 'from-purple-500 to-pink-500',
    children: [
      {
        name: 'Quantum Neural Consciousness',
        href: '/quantum-neural-consciousness-platform',
        description: 'World\'s first quantum-powered AI consciousness',
        icon: <Brain className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Neural Holographic Interface',
        href: '/neural-holographic-interface-platform',
        description: 'Direct brain-to-hologram interface',
        icon: <Eye className="w-4 h-4" />
      },
      {
        name: 'Consciousness Transfer Platform',
        href: '/quantum-consciousness-transfer-platform',
        description: 'Transfer consciousness between systems',
        icon: <CodeIcon className="w-4 h-4" />
      },
      {
        name: 'Autonomous Healthcare AI',
        href: '/autonomous-healthcare-ai-ecosystem',
        description: 'Fully autonomous healthcare management',
        icon: <Heart className="w-4 h-4" />
      },
      {
        name: 'AI Ethics & Governance',
        href: '/ai-ethics-governance',
        description: 'Comprehensive AI ethics framework',
        icon: <Shield className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Quantum Technology',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing solutions',
    badge: 'Quantum',
    category: 'quantum',
    color: 'from-blue-500 to-cyan-500',
    children: [
      {
        name: 'Quantum Bio-Computing',
        href: '/quantum-bio-computing-platform',
        description: 'Quantum-bio hybrid computing',
        icon: <Atom className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Quantum Time Manipulation',
        href: '/quantum-time-manipulation-ai',
        description: 'AI that manipulates quantum time states',
        icon: <Clock className="w-4 h-4" />
      },
      {
        name: 'Quantum Materials Discovery',
        href: '/quantum-materials-discovery-ai',
        description: 'Quantum-powered materials research',
        icon: <Atom className="w-4 h-4" />
      },
      {
        name: 'Quantum Financial Intelligence',
        href: '/quantum-financial-intelligence-platform',
        description: 'Quantum-powered financial analysis',
        icon: <DollarSign className="w-4 h-4" />
      },
      {
        name: 'Quantum Neural Evolution',
        href: '/quantum-neural-network-evolution-platform',
        description: 'Evolving quantum neural networks',
        icon: <Brain className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Enterprise Solutions',
    href: '/it-services',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure',
    badge: 'Enterprise',
    category: 'it',
    color: 'from-orange-500 to-red-500',
    children: [
      {
        name: 'Autonomous Business Ecosystem',
        href: '/autonomous-business-ecosystem-ai',
        description: 'Fully autonomous business management',
        icon: <BarChart3 className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Autonomous Manufacturing AI',
        href: '/autonomous-manufacturing-ecosystem-ai',
        description: 'Complete manufacturing automation',
        icon: <Settings className="w-4 h-4" />
      },
      {
        name: 'Autonomous Energy Grid AI',
        href: '/autonomous-energy-grid-ai',
        description: 'Global energy grid management',
        icon: <Zap className="w-4 h-4" />
      },
      {
        name: 'Autonomous Transportation AI',
        href: '/autonomous-transportation-network-ai',
        description: 'Global transportation optimization',
        icon: <Network className="w-4 h-4" />
      },
      {
        name: 'AI Predictive Maintenance',
        href: '/ai-predictive-maintenance-platform',
        description: 'Consciousness-based maintenance',
        icon: <Monitor className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Emerging Technology',
    href: '/emerging-tech',
    icon: <Zap className="w-5 h-5" />,
    description: 'Cutting-edge emerging technologies',
    badge: 'Emerging',
    category: 'emerging',
    color: 'from-yellow-500 to-orange-500',
    children: [
      {
        name: 'Autonomous Space Mining AI',
        href: '/autonomous-space-mining-ai',
        description: 'AI-powered space resource extraction',
        icon: <Rocket className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Autonomous Climate Control AI',
        href: '/autonomous-climate-control-ai',
        description: 'Global climate management',
        icon: <Globe className="w-4 h-4" />
      },
      {
        name: 'Autonomous Vehicle Consciousness',
        href: '/autonomous-vehicle-consciousness-ai',
        description: 'Human-like driving AI',
        icon: <Car className="w-4 h-4" />
      },
      {
        name: 'Quantum Financial Manipulation',
        href: '/quantum-financial-market-manipulation-ai',
        description: 'Quantum-powered market manipulation',
        icon: <TrendingUp className="w-4 h-4" />
      },
      {
        name: 'Autonomous Education AI',
        href: '/autonomous-education-ai-platform',
        description: 'Personalized learning optimization',
        icon: <GraduationCap className="w-4 h-4" />
      }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const UltraFuturisticNavigation2043: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticNavigation2043</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraFuturisticNavigation2043;
