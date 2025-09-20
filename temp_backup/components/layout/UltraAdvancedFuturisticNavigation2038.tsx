import React, { useState, useEffect } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, ChevronDown, X, ArrowRight,
  Brain, Rocket, Target, Atom, BookOpen,
  DollarSign, Users, Star, Sparkles, 
  Cpu, Building, Play, Calculator,
  FileText, Video, Shield, Zap,
  TrendingUp, Lightbulb, Search
} from 'lucide-react',
import Link from 'next/link',

interface NavigationItem {
  name: string,
  href: string,
  icon?: React.ReactNode,
  description?: string,
  children?: NavigationItem[],
  badge?: string,
  title?: string,
  featured?: boolean,
  category?: string,
  price?: string
}

function normalizeHref(href: string): string {
  if (!href) return href,
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href
  }
  if (!href.startsWith('/')) return href,
  const hasQueryOrHash = href.includes('?') || href.includes('#'),
  if (hasQueryOrHash) return href,
  return href.endsWith('/') ? href : href + '/',
}

// Custom icons
const Handshake = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
),

const navigationItems: NavigationItem[] = [
  {
    name: 'Services',
    href: '/services',
    icon: <Play className="w-5 h-5" />,
    description: 'Complete technology solutions',
    badge: 'Main',
    category: 'services',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Calculator className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI & Consciousness', 
        href: '/ai-services', 
        description: 'Advanced AI consciousness solutions',
        icon: <Brain className="w-4 h-4" />,
        price: 'From $2,999/month'
      },
      { 
        name: 'Quantum Technology', 
        href: '/quantum-services', 
        description: 'Quantum computing solutions',
        icon: <Atom className="w-4 h-4" />,
        price: 'From $1,499/month'
      },
      { 
        name: 'Autonomous Systems', 
        href: '/autonomous-systems', 
        description: 'Self-operating intelligent systems',
        icon: <Cpu className="w-4 h-4" />,
        price: 'From $799/month'
      },
      { 
        name: 'Micro SAAS', 
        href: '/micro-saas', 
        description: 'Specialized business solutions',
        icon: <Rocket className="w-4 h-4" />,
        price: 'From $299/month'
      },
      { 
        name: 'Enterprise IT', 
        href: '/enterprise-it', 
        description: 'Corporate infrastructure solutions',
        icon: <Building className="w-4 h-4" />,
        price: 'From $1,999/month'
      }
    ]
  },
  {
    name: 'Showcase & Pricing',
    href: '/showcase',
    icon: <Star className="w-5 h-5" />,
    description: 'Service demonstrations and pricing',
    category: 'showcase',
    children: [
      { 
        name: 'Innovative 2038 Services', 
        href: '/innovative-2038-services-showcase', 
        description: 'Cutting-edge 2038 services showcase',
        icon: <Sparkles className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Revolutionary 2027 Services', 
        href: '/revolutionary-2027-services-showcase', 
        description: 'Revolutionary 2027 services showcase',
        icon: <TrendingUp className="w-4 h-4" />
      },
      { 
        name: 'Ultimate 2026 Services', 
        href: '/ultimate-2026-services-showcase', 
        description: 'Ultimate 2026 services showcase',
        icon: <Zap className="w-4 h-4" />
      },
      { 
        name: 'Market Pricing', 
        href: '/market-pricing', 
        description: 'Competitive market pricing',
        icon: <DollarSign className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    category: 'solutions',
    children: [
      { 
        name: 'Healthcare Solutions', 
        href: '/healthcare-solutions', 
        description: 'AI-powered healthcare solutions',
        icon: <Shield className="w-4 h-4" />
      },
      { 
        name: 'Financial Services', 
        href: '/financial-services', 
        description: 'Quantum financial solutions',
        icon: <DollarSign className="w-4 h-4" />
      },
      { 
        name: 'Manufacturing', 
        href: '/manufacturing-solutions', 
        description: 'Smart manufacturing solutions',
        icon: <Cpu className="w-4 h-4" />
      },
      { 
        name: 'Government Tech', 
        href: '/government-technology-solutions', 
        description: 'Government technology solutions',
        icon: <Building className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and insights',
    category: 'resources',
    children: [
      { 
        name: 'White Papers', 
        href: '/white-papers', 
        description: 'Industry insights and research',
        icon: <FileText className="w-4 h-4" />
      },
      { 
        name: 'Webinars', 
        href: '/webinars', 
        description: 'Educational webinars',
        icon: <Video className="w-4 h-4" />
      },
      { 
        name: 'Research & Development', 
        href: '/research-development', 
        description: 'Innovation and research',
        icon: <Lightbulb className="w-4 h-4" />
      },
      { 
        name: 'Training', 
        href: '/training', 
        description: 'Professional development',
        icon: <Users className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    category: 'company',
    children: [
      { 
        name: 'About Us', 
        href: '/about', 
        description: 'Our story and mission',
        icon: <Users className="w-4 h-4" />
      },
      { 
        name: 'Partners', 
        href: '/partners', 
        description: 'Strategic partnerships',
        icon: <Handshake className="w-4 h-4" />
      },
      { 
        name: 'Investors', 
        href: '/investors', 
        description: 'Investment opportunities',
        icon: <TrendingUp className="w-4 h-4" />
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Users className="w-4 h-4" />
      }
    ]
  }
],

const UltraAdvancedFuturisticNavigation2038: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraAdvancedFuturisticNavigation2038</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default UltraAdvancedFuturisticNavigation2038,
