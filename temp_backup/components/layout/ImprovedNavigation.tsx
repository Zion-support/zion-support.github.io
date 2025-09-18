import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, ArrowRight,
  Brain, Rocket, Target, Atom, Shield,
  DollarSign, BarChart3, Globe, Grid, Heart, Database,
  Cpu, Palette, Cloud, Network, TrendingUp, ShoppingCart, Settings, Building, Monitor,
  Search, User, Lock, Zap, Users, BookOpen, FileText, Video
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
    name: 'Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Comprehensive technology solutions',
    category: 'services',
    color: 'from-emerald-500 to-cyan-500',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI & Machine Learning', 
        href: '/ai-services', 
        description: 'AI-powered solutions and platforms',
        icon: <Brain className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500',
        featured: true
      },
      { 
        name: 'Quantum Computing', 
        href: '/quantum-services', 
        description: 'Quantum-powered solutions',
        icon: <Atom className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500',
        featured: true
      },
      { 
        name: 'Cybersecurity', 
        href: '/cybersecurity', 
        description: 'Advanced security solutions',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-red-500 to-orange-500'
      },
      { 
        name: 'Space Technology', 
        href: '/space-technology', 
        description: 'Space exploration solutions',
        icon: <Rocket className="w-4 h-4" />,
        color: 'from-indigo-500 to-purple-500'
      },
      { 
        name: 'Cloud & Infrastructure', 
        href: '/cloud-infrastructure', 
        description: 'Cloud and infrastructure services',
        icon: <Cloud className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    category: 'solutions',
    color: 'from-blue-500 to-indigo-500',
    children: [
      { 
        name: 'Enterprise Solutions', 
        href: '/enterprise-solutions', 
        description: 'Large enterprise technology solutions',
        icon: <Building className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Startup Solutions', 
        href: '/startup-solutions', 
        description: 'Technology solutions for startups',
        icon: <Zap className="w-4 h-4" />,
        color: 'from-yellow-500 to-orange-500'
      },
      { 
        name: 'Government Solutions', 
        href: '/government-solutions', 
        description: 'Government and public sector solutions',
        icon: <Shield className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Users className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    category: 'company',
    color: 'from-purple-500 to-pink-500',
    children: [
      { 
        name: 'About Us', 
        href: '/about', 
        description: 'Learn about our company',
        icon: <Target className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Users className="w-4 h-4" />,
        color: 'from-green-500 to-emerald-500'
      },
      { 
        name: 'News', 
        href: '/news', 
        description: 'Latest company news',
        icon: <Globe className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories',
        icon: <BarChart3 className="w-4 h-4" />,
        color: 'from-orange-500 to-red-500'
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and resources',
    category: 'resources',
    color: 'from-green-500 to-emerald-500',
    children: [
      { 
        name: 'Blog', 
        href: '/blog', 
        description: 'Technology insights and updates',
        icon: <FileText className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Documentation', 
        href: '/docs', 
        description: 'Technical documentation',
        icon: <BookOpen className="w-4 h-4" />,
        color: 'from-blue-500 to-cyan-500'
      },
      { 
        name: 'Webinars', 
        href: '/webinars', 
        description: 'Educational webinars',
        icon: <Video className="w-4 h-4" />,
        color: 'from-purple-500 to-pink-500'
      }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Transparent pricing plans',
    category: 'pricing',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Mail className="w-5 h-5" />,
    description: 'Get in touch with us',
    category: 'contact',
    color: 'from-cyan-500 to-blue-500'
  }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const ImprovedNavigation: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ImprovedNavigation</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default ImprovedNavigation;
