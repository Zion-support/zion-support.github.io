import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Zap, Phone, Mail, ChevronDown, Search,
  Brain, Cpu, Rocket, Shield, Atom, Globe, Star, Users,
  Target, Microscope, Database, Lock, Cloud, BarChart3, Settings,
  Eye, Code, Palette, Layers, Network, Server, ShieldCheck, Building
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const sidebarItems: SidebarItem[] = [
  {
    name: '🚀 All Services',
    href: '/services',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    children: [
      { name: 'View All Services', href: '/services', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/services#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/services#search', description: 'Find specific services' }
    ]
  },
  {
    name: '🧠 AI & Consciousness',
    href: '/ai-solutions',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI automation and autonomous business processing',
    children: [
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
      { name: 'AI Content Generator', href: '/ai-content-generator', description: 'AI-powered content creation' },
      { name: 'AI Solutions Overview', href: '/ai-solutions', description: 'Complete AI portfolio' }
    ]
  },
  {
    name: '⚛️ Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Breakthrough quantum computing and space technology solutions',
    children: [
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', description: 'Quantum security solutions' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Quantum Services Overview', href: '/quantum-services', description: 'Complete quantum portfolio' }
    ]
  },
  {
    name: '🏢 Enterprise IT',
    href: '/solutions',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure and security solutions',
    children: [
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'Self-managing IT systems' },
      { name: 'Solutions Overview', href: '/solutions', description: 'Complete solutions portfolio' }
    ]
  },
  {
    name: '💻 Micro SaaS',
    href: '/services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions',
    children: [
      { name: 'All Services', href: '/services', description: 'Complete services portfolio' }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    children: [
      { name: 'About Us', href: '/about', description: 'Our mission and vision' },
      { name: 'Contact', href: '/contact', description: 'Get in touch' },
      { name: 'News', href: '/news', description: 'Company updates' },
      { name: 'Blog', href: '/blog', description: 'Industry insights' }
    ]
  }
];

interface EnhancedSidebar2025Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedSidebar2025({ isOpen, onClose }: EnhancedSidebar2025Props) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (sectionTitle: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionTitle)) {
      newExpanded.delete(sectionTitle);
    } else {
      newExpanded.add(sectionTitle);
    }
    setExpandedSections(newExpanded);
  };

  const filteredServices = sidebarItems.flatMap(item =>
    item.children?.filter(child =>
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (href: string) => router.pathname === href;

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-gray-800/50 z-50 overflow-y-auto`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-gray-800/50 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                  Zion Tech Group
                </h2>
                <p className="text-gray-400 text-sm">Revolutionary Technology</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Contact Bar */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">{contactInfo.email}</span>
            </div>
          </div>

          {/* Search */}
          <div className="mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/30 border border-gray-700/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="p-6 space-y-2">
          {sidebarItems.map((item) => (
            <div key={item.name} className="space-y-2">
              {/* Main Item */}
              <Link
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group ${
                  isActive(item.href)
                    ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-300'
                    : 'hover:bg-gray-800/30 text-gray-300 hover:text-white'
                }`}
              >
                {item.icon}
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  {item.description && (
                    <div className="text-sm text-gray-400">{item.description}</div>
                  )}
                </div>
                {item.children && item.children.length > 0 && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      expandedSections.has(item.name) ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </Link>

              {/* Children */}
              {item.children && item.children.length > 0 && (
                <AnimatePresence>
                  {expandedSections.has(item.name) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-6 space-y-1"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={onClose}
                          className={`block p-2 rounded-lg transition-colors duration-200 ${
                            isActive(child.href)
                              ? 'bg-cyan-500/10 text-cyan-300'
                              : 'text-gray-400 hover:text-cyan-300 hover:bg-gray-800/20'
                          }`}
                        >
                          <div className="font-medium text-sm">{child.name}</div>
                          {child.description && (
                            <div className="text-xs text-gray-500">{child.description}</div>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-black/80 backdrop-blur-xl border-t border-gray-800/50 p-6">
          <div className="space-y-3">
            <Link
              href="/request-quote"
              onClick={onClose}
              className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-center font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="w-full px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-center font-medium hover:bg-cyan-400 hover:text-black transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}