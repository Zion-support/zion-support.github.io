import React, { useState, useEffect, useRef } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu,
  X, 
  ChevronDown, 
  Search, 
  User, 
  Settings, 
  LogOut,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Zap,
  Star,
  Globe,
  Phone,
  Mail,
  MapPin
} from 'lucide-react',

interface UltraAdvancedNavigation2026Props {
  className?: string,
}

const UltraAdvancedNavigation2026: React.FC<UltraAdvancedNavigation2026Props> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false),
  const [isScrolled, setIsScrolled] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
  const [searchQuery, setSearchQuery] = useState(''),
  const [showSearch, setShowSearch] = useState(false),
  const navRef = useRef<HTMLDivElement>(null),

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20),
    },

    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll),
  }, []),

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    },

    document.addEventListener('mousedown', handleClickOutside),
    return () => document.removeEventListener('mousedown', handleClickOutside),
  }, []),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: Rocket,
      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=ai', icon: Brain, color: 'from-blue-500 to-purple-600' },
        { name: 'Quantum Computing', href: '/services?category=quantum', icon: Zap, color: 'from-purple-500 to-pink-600' },
        { name: 'Enterprise IT', href: '/services?category=enterprise', icon: Shield, color: 'from-green-500 to-blue-600' },
        { name: 'Micro SaaS', href: '/services?category=micro-saas', icon: Cloud, color: 'from-orange-500 to-red-600' },
        { name: 'Emerging Tech', href: '/services?category=emerging', icon: Star, color: 'from-indigo-500 to-purple-600' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Shield,
      dropdown: [
        { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Zap, color: 'from-purple-500 to-pink-600' },
        { name: 'Cloud Infrastructure', href: '/solutions/cloud-infrastructure', icon: Cloud, color: 'from-blue-500 to-indigo-600' },
        { name: 'Cybersecurity', href: '/solutions/cybersecurity', icon: Shield, color: 'from-red-500 to-orange-600' },
        { name: 'Data Analytics', href: '/solutions/data-analytics', icon: Brain, color: 'from-green-500 to-blue-600' }
      ]
    },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: Star
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: Globe,
      dropdown: [
        { name: 'Blog', href: '/blog', icon: Brain, color: 'from-blue-500 to-purple-600' },
        { name: 'Case Studies', href: '/case-studies', icon: Star, color: 'from-green-500 to-blue-600' },
        { name: 'Documentation', href: '/docs', icon: Shield, color: 'from-red-500 to-orange-600' },
        { name: 'API Reference', href: '/api', icon: Zap, color: 'from-purple-500 to-pink-600' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: User,
      dropdown: [
        { name: 'About Us', href: '/about', icon: User, color: 'from-blue-500 to-purple-600' },
        { name: 'Careers', href: '/careers', icon: Star, color: 'from-green-500 to-blue-600' },
        { name: 'Contact', href: '/contact', icon: Phone, color: 'from-red-500 to-orange-600' },
        { name: 'News', href: '/news', icon: Globe, color: 'from-indigo-500 to-purple-600' }
      ]
    }
  ],

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  },

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(),
    if (searchQuery.trim()) {
      window.location.href = `/services?search=${encodeURIComponent(searchQuery)}`,
    }
  },

const UltraAdvancedNavigation2026: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraAdvancedNavigation2026</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default UltraAdvancedNavigation2026,
