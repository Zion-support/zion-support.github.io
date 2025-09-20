import React, { useState, useEffect, useRef } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Rocket, Shield, Target, BookOpen,
  DollarSign, BarChart3, Users, Star,
  Cpu, Settings, Heart,
  Grid,
  ShoppingCart, HelpCircle, FileText,
  BookOpenCheck,
  Building, MessageCircle,
  Target as TargetIcon, Brain as BrainIcon
} from 'lucide-react',
import Link from 'next/link',

// Custom ShoppingBag icon component
const ShoppingBag = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
),

interface NavigationItem {
  name: string,
  href: string,
  icon?: React.ReactNode,
  description?: string,
  children?: NavigationItem[],
  badge?: string,
  title?: string,
  featured?: boolean,
  category?: string
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

const navigationItems: NavigationItem[] = [
  {
    name: 'Services',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Complete technology solutions',
    badge: 'Main',
    category: 'services',
    children: [
      { 
        name: 'All Services', 
        href: '/services', 
        description: 'Complete services overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Ultimate 2036 Showcase', 
        href: '/ultimate-2036-futuristic-services-showcase', 
        description: 'Latest futuristic services',
        icon: <Sparkles className="w-4 h-4" />,
        featured: true,
        badge: 'NEW'
      },
      { 
        name: '2038 Futuristic Services', 
        href: '/ultimate-2038-futuristic-services-showcase', 
        description: 'Ultimate 2038 futuristic services showcase',
        icon: <Sparkles className="w-4 h-4" />,
        featured: true
      },
      { 
        name: '2025 Innovative Services', 
        href: '/comprehensive-2025-innovative-services-showcase', 
        description: 'Cutting-edge innovative services showcase',
        icon: <Star className="w-4 h-4" />,
        featured: true
      },
      { 
        name: '2026 Services Showcase', 
        href: '/ultimate-2026-services-showcase', 
        description: 'Ultimate showcase of our 2026 services',
        icon: <Star className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Innovative 2036 Services', 
        href: '/innovative-2036-services-showcase', 
        description: 'Revolutionary micro SAAS solutions',
        icon: <Star className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'AI & Machine Learning', 
        href: '/services?category=ai', 
        description: 'Advanced AI solutions',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Quantum Technology', 
        href: '/services?category=quantum', 
        description: 'Quantum computing solutions',
        icon: <AtomIcon className="w-4 h-4" />
      },
      { 
        name: 'Space Technology', 
        href: '/space-technology', 
        description: 'Space exploration solutions',
        icon: <Rocket className="w-4 h-4" />
      },
      { 
        name: 'IT Solutions', 
        href: '/it-services', 
        description: 'Enterprise IT infrastructure',
        icon: <Cpu className="w-4 h-4" />
      },
      { 
        name: 'Industry Solutions', 
        href: '/solutions', 
        description: 'Industry-specific solutions',
        icon: <TargetIcon className="w-4 h-4" />
      },
      { 
        name: 'Cybersecurity', 
        href: '/services?category=security', 
        description: 'Security and compliance',
        icon: <Zap className="w-4 h-4" />
      },
      { 
        name: 'IT Infrastructure', 
        href: '/services?category=infrastructure', 
        description: 'Enterprise IT solutions',
        icon: <Zap className="w-4 h-4" />
      },
      { 
        name: 'Micro SAAS', 
        href: '/services?category=micro-saas', 
        description: 'Business solutions',
        icon: <Zap className="w-4 h-4" />
      },
      { 
        name: 'Emerging Tech', 
        href: '/services?category=emerging', 
        description: 'Cutting-edge technologies',
        icon: <Zap className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Showcase & Pricing',
    href: '/comprehensive-2036-services-showcase',
    icon: <Star className="w-5 h-5" />,
    description: 'Service showcases and pricing',
    badge: 'Featured',
    category: 'showcase',
    children: [
      { 
        name: '2036 Services Showcase', 
        href: '/comprehensive-2036-services-showcase', 
        description: 'Latest innovative services',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: '2025 Services Showcase', 
        href: '/comprehensive-services-showcase-2025', 
        description: 'Previous services overview',
        icon: <Grid className="w-4 h-4" />
      },
      { 
        name: 'Pricing Plans', 
        href: '/pricing', 
        description: 'Service pricing information',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: '2026 Pricing', 
        href: '/pricing-2036', 
        description: 'Competitive pricing for 2036',
        icon: <DollarSign className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Market Pricing', 
        href: '/market-pricing', 
        description: 'Market price references',
        icon: <Star className="w-4 h-4" />
      },
      { 
        name: '2026 Services', 
        href: '/ultimate-2026-services-showcase', 
        description: 'Latest 2026 services',
        icon: <Star className="w-4 h-4" />
      },
      { 
        name: '2035 Futuristic', 
        href: '/ultimate-2035-futuristic-services-showcase', 
        description: 'Future-ready services',
        icon: <Star className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    badge: 'New',
    category: 'solutions',
    children: [
      { 
        name: 'All Solutions', 
        href: '/solutions', 
        description: 'Complete solutions overview',
        icon: <Grid className="w-4 h-4" />,
        featured: true
      },
      { 
        name: 'Financial Services', 
        href: '/solutions?industry=financial', 
        description: 'Banking and fintech solutions',
        icon: <Target className="w-4 h-4" />
      },
      { 
        name: 'Healthcare', 
        href: '/solutions?industry=healthcare', 
        description: 'Healthcare technology solutions',
        icon: <Target className="w-4 h-4" />
      },
      { 
        name: 'Manufacturing', 
        href: '/solutions?industry=manufacturing', 
        description: 'Industrial automation solutions',
        icon: <Target className="w-4 h-4" />
      },
      { 
        name: 'Retail & E-commerce', 
        href: '/solutions?industry=retail', 
        description: 'Digital commerce solutions',
        icon: <Target className="w-4 h-4" />
      },
      { 
        name: 'Government', 
        href: '/solutions?industry=government', 
        description: 'Public sector solutions',
        icon: <Target className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Star className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    category: 'company',
    children: [
      { 
        name: 'About Us', 
        href: '/about', 
        description: 'Our story and mission',
        icon: <Users className="w-4 h-4" />,
        featured: true
      },
      {
        name: 'Leadership',
        href: '/leadership',
        description: 'Meet our team',
        icon: <Star className="w-4 h-4" />
      },
      { 
        name: 'Contact', 
        href: '/contact', 
        description: 'Get in touch',
        icon: <MessageCircle className="w-4 h-4" />
      },
      { 
        name: 'Partners', 
        href: '/partners', 
        description: 'Partnership opportunities',
        icon: <div className="w-4 h-4" />
      },
      { 
        name: 'Careers', 
        href: '/careers', 
        description: 'Join our team',
        icon: <Play className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <Play className="w-5 h-5" />,
    description: 'Knowledge & support',
    category: 'resources',
    children: [
      { 
        name: 'Documentation', 
        href: '/docs', 
        description: 'Technical documentation',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Blog', 
        href: '/blog', 
        description: 'Latest insights',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Case Studies', 
        href: '/case-studies', 
        description: 'Success stories',
        icon: <Star className="w-4 h-4" />
      },
      { 
        name: 'Support', 
        href: '/support', 
        description: 'Technical support',
        icon: <Play className="w-4 h-4" />
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Play className="w-5 h-5" />,
    description: 'Industry solutions',
    category: 'solutions',
    children: [
      { 
        name: 'Healthcare', 
        href: '/healthcare-solutions', 
        description: 'Healthcare technology solutions',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Finance', 
        href: '/financial-solutions', 
        description: 'Financial technology solutions',
        icon: <Play className="w-4 h-4" />
      },
      { 
        name: 'Manufacturing', 
        href: '/manufacturing-ai-solutions', 
        description: 'Manufacturing AI',
        icon: <Settings className="w-4 h-4" />
      },
      { 
        name: 'Education', 
        href: '/education-technology-solutions', 
        description: 'Education technology',
        icon: <BookOpen className="w-4 h-4" />
      },
      { 
        name: 'Energy', 
        href: '/energy-technology-solutions', 
        description: 'Energy technology',
        icon: <Zap className="w-4 h-4" />
      }
    ]
  }
],

interface UltraFuturisticNavigation2036Props {
  onMenuToggle: () => void,
  'aria-expanded': boolean
}

export default function UltraFuturisticNavigation2036({ onMenuToggle, 'aria-expanded': ariaExpanded }: UltraFuturisticNavigation2036Props) {
  const [isOpen, setIsOpen] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
  const [isScrolled, setIsScrolled] = useState(false),
  const navRef = useRef<HTMLElement>(null),
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({}),

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as HTMLElement)) {
        setIsOpen(false)
      }
    },

    document.addEventListener('mousedown', handleClickOutside),
    return () => document.removeEventListener('mousedown', handleClickOutside),
  }, []),

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown),
    return () => document.removeEventListener('keydown', handleKeyDown),
  }, [handleKeyDown]),

  // Enhanced dropdown animation variants
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const
      }
    }
  },

const UltraFuturisticNavigation2036: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticNavigation2036</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default UltraFuturisticNavigation2036,
