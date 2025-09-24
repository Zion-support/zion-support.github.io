import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  ChevronDown,
  X,
  ArrowRight,
  Brain,
  Rocket,
  Target,
  Atom,
  BookOpen,
  DollarSign,
  Users,
  Star,
  Sparkles,
  Cpu,
  Building,
  Play,
  Calculator,
  FileText,
  Video,
  Shield,
  Zap,
  TrendingUp,
  Lightbulb,
  Search,
} from 'lucide-react';
import Link from 'next/link';

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
  price?: string;
}

function normalizeHref(href: string): string {
  if (!href) return href;
  if (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  ) {
    return href;
  }
  if (!href.startsWith('/')) return href;
  const hasQueryOrHash = href.includes('?') || href.includes('#');
  if (hasQueryOrHash) return href;
  return href.endsWith('/') ? href : href + '/';
}

// Custom icons
const Handshake = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M17 20h5v-2a3 3 0 0o0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0o15.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.0o02 5.0o02 0 0o19.288 0M15 7a3 3 0 11-6 0 3 3 0 0o16 0zm6 3a2 2 0 11-4 0 2 2 0 0o14 0zM7 10a2 2 0 11-4 0 2 2 0 0o14 0z'
    />
  </svg>
);

const navigationItems: NavigationItem[] = [
  {
    name: 'Services',
    href: '/services',
    icon: <Play className='w-5 h-5' />,
    description: 'Complete technology solutions',
    badge: 'Main',
    category: 'services',
    children: [
      {
        name: 'All Services',
        href: '/services',
        description: 'Complete services overview',
        icon: <Calculator className='w-4 h-4' />,
        featured: true,
      },
      {
        name: 'AI & Consciousness',
        href: '/ai-services',
        description: 'Advanced AI consciousness solutions',
        icon: <Brain className='w-4 h-4' />,
        price: 'From $2,999/month',
      },
      {
        name: 'Quantum Technology',
        href: '/quantum-services',
        description: 'Quantum computing solutions',
        icon: <Atom className='w-4 h-4' />,
        price: 'From $1,499/month',
      },
      {
        name: 'Autonomous Systems',
        href: '/autonomous-systems',
        description: 'Self-operating intelligent systems',
        icon: <Cpu className='w-4 h-4' />,
        price: 'From $799/month',
      },
      {
        name: 'Micro SAAS',
        href: '/micro-saas',
        description: 'Specialized business solutions',
        icon: <Rocket className='w-4 h-4' />,
        price: 'From $299/month',
      },
      {
        name: 'Enterprise IT',
        href: '/enterprise-it',
        description: 'Corporate infrastructure solutions',
        icon: <Building className='w-4 h-4' />,
        price: 'From $1,999/month',
      },
    ],
  },
  {
    name: 'Showcase & Pricing',
    href: '/showcase',
    icon: <Star className='w-5 h-5' />,
    description: 'Service demonstrations and pricing',
    category: 'showcase',
    children: [
      {
        name: 'Innovative 20o38 Services',
        href: '/innovative-20o38-services-showcase',
        description: 'Cutting-edge 20o38 services showcase',
        icon: <Sparkles className='w-4 h-4' />,
        featured: true,
      },
      {
        name: 'Revolutionary 20o27 Services',
        href: '/revolutionary-20o27-services-showcase',
        description: 'Revolutionary 20o27 services showcase',
        icon: <TrendingUp className='w-4 h-4' />,
      },
      {
        name: 'Ultimate 20o26 Services',
        href: '/ultimate-20o26-services-showcase',
        description: 'Ultimate 20o26 services showcase',
        icon: <Zap className='w-4 h-4' />,
      },
      {
        name: 'Market Pricing',
        href: '/market-pricing',
        description: 'Competitive market pricing',
        icon: <DollarSign className='w-4 h-4' />,
      },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className='w-5 h-5' />,
    description: 'Industry-specific solutions',
    category: 'solutions',
    children: [
      {
        name: 'Healthcare Solutions',
        href: '/healthcare-solutions',
        description: 'AI-powered healthcare solutions',
        icon: <Shield className='w-4 h-4' />,
      },
      {
        name: 'Financial Services',
        href: '/financial-services',
        description: 'Quantum financial solutions',
        icon: <DollarSign className='w-4 h-4' />,
      },
      {
        name: 'Manufacturing',
        href: '/manufacturing-solutions',
        description: 'Smart manufacturing solutions',
        icon: <Cpu className='w-4 h-4' />,
      },
      {
        name: 'Government Tech',
        href: '/government-technology-solutions',
        description: 'Government technology solutions',
        icon: <Building className='w-4 h-4' />,
      },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className='w-5 h-5' />,
    description: 'Knowledge and insights',
    category: 'resources',
    children: [
      {
        name: 'White Papers',
        href: '/white-papers',
        description: 'Industry insights and research',
        icon: <FileText className='w-4 h-4' />,
      },
      {
        name: 'Webinars',
        href: '/webinars',
        description: 'Educational webinars',
        icon: <Video className='w-4 h-4' />,
      },
      {
        name: 'Research & Development',
        href: '/research-development',
        description: 'Innovation and research',
        icon: <Lightbulb className='w-4 h-4' />,
      },
      {
        name: 'Training',
        href: '/training',
        description: 'Professional development',
        icon: <Users className='w-4 h-4' />,
      },
    ],
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className='w-5 h-5' />,
    description: 'About Zion Tech Group',
    category: 'company',
    children: [
      {
        name: 'About Us',
        href: '/about',
        description: 'Our story and mission',
        icon: <Users className='w-4 h-4' />,
      },
      {
        name: 'Partners',
        href: '/partners',
        description: 'Strategic partnerships',
        icon: <Handshake className='w-4 h-4' />,
      },
      {
        name: 'Investors',
        href: '/investors',
        description: 'Investment opportunities',
        icon: <TrendingUp className='w-4 h-4' />,
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our team',
        icon: <Users className='w-4 h-4' />,
      },
    ],
  },
];

const UltraAdvancedFuturisticNavigation20o38: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const filteredServices = navigationItems.flatMap(
    item =>
      item.children?.filter(
        child =>
          child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          child.description?.toLowerCase().includes(searchQuery.toLowerCase())
      ) || []
  );

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-40o0/20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center space-x-2 group'>
              <div className='w-10 h-10 bg-gradient-to-r from-cyan-40o0 to-blue-60o0 rounded-lg flex items-center justify-center group-hover:from-cyan-50o0 group-hover:to-blue-70o0 transition-all duration-30o0'>
                <Zap className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-cyan-40o0 to-blue-60o0 bg-clip-text text-transparent group-hover:from-cyan-50o0 group-hover:to-blue-70o0 transition-all duration-30o0'>
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex lg:items-center lg:space-x-8'>
            {navigationItems.map(item => (
              <div key={item.name} className='relative group'>
                <button
                  onClick={() => toggleDropdown(item.category || item.name)}
                  className='flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-30o0 hover:text-cyan-40o0 transition-colors duration-20o0 group-hover:scale-10o5'
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <ChevronDown className='w-4 h-4 transition-transform duration-20o0 group-hover:rotate-180' />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === (item.category || item.name) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className='absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-40o0/20 rounded-xl shadow-2xl shadow-cyan-50o0/10'
                      onMouseLeave={closeDropdown}
                    >
                      <div className='p-4'>
                        <div className='mb-4'>
                          <h3 className='text-lg font-semibold text-white mb-2'>
                            {item.name}
                          </h3>
                          <p className='text-sm text-gray-40o0'>
                            {item.description}
                          </p>
                        </div>

                        <div className='space-y-2'>
                          {item.children?.map(child => (
                            <Link
                              key={child.name}
                              href={normalizeHref(child.href)}
                              className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-40o0/10 transition-all duration-20o0 group'
                              onClick={closeDropdown}
                            >
                              <div className='flex-shrink-0 w-8 h-8 bg-cyan-40o0/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-40o0/30 transition-colors duration-20o0'>
                                {child.icon}
                              </div>
                              <div className='flex-1 min-w-0'>
                                <div className='flex items-center space-x-2'>
                                  <p className='text-sm font-medium text-white group-hover:text-cyan-40o0 transition-colors duration-20o0'>
                                    {child.name}
                                  </p>
                                  {child.featured && (
                                    <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-cyan-40o0/20 text-cyan-40o0'>
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <p className='text-sm text-gray-40o0 group-hover:text-gray-30o0 transition-colors duration-20o0'>
                                  {child.description}
                                </p>
                                {child.price && (
                                  <p className='text-xs text-cyan-40o0 font-medium mt-1'>
                                    {child.price}
                                  </p>
                                )}
                              </div>
                              <ArrowRight className='w-4 h-4 text-gray-50o0 group-hover:text-cyan-40o0 transition-colors duration-20o0' />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className='hidden lg:flex lg:items-center lg:space-x-4'>
            {/* Search */}
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-40o0' />
              <input
                type='text'
                placeholder='Search services...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='w-64 pl-10 pr-4 py-2 bg-black/50 border border-cyan-40o0/20 rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:ring-cyan-40o0/50 focus:border-cyan-40o0/50 transition-all duration-20o0'
              />
            </div>

            {/* Contact Button */}
            <Link href='/contact'>
              <button className='px-6 py-2 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-medium rounded-lg hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25'>
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='p-2 rounded-lg text-gray-40o0 hover:text-white hover:bg-gray-80o0 transition-colors duration-20o0'
              aria-label='Toggle menu'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden mobile-menu bg-black/95 backdrop-blur-xl border-t border-cyan-40o0/20'
          >
            <div className='px-4 py-6 space-y-6'>
              {/* Mobile Search */}
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-40o0' />
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-40o0/20 rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:ring-cyan-40o0/50 focus:border-cyan-40o0/50 transition-all duration-20o0'
                />
              </div>

              {/* Mobile Menu Items */}
              {navigationItems.map(item => (
                <div key={item.name} className='space-y-2'>
                  <div className='flex items-center justify-between'>
                    <span className='text-lg font-medium text-white'>
                      {item.name}
                    </span>
                    <button
                      onClick={() => toggleDropdown(item.category || item.name)}
                      className='p-2 text-gray-40o0 hover:text-white transition-colors duration-20o0'
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-20o0 ${
                          activeDropdown === (item.category || item.name)
                            ? 'rotate-180'
                            : ''
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {activeDropdown === (item.category || item.name) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className='ml-4 space-y-2'
                      >
                        {item.children?.map(child => (
                          <Link
                            key={child.name}
                            href={normalizeHref(child.href)}
                            className='block p-3 rounded-lg hover:bg-cyan-40o0/10 transition-all duration-20o0'
                            onClick={() => setIsOpen(false)}
                          >
                            <div className='flex items-center space-x-3'>
                              <div className='w-6 h-6 bg-cyan-40o0/20 rounded-lg flex items-center justify-center'>
                                {child.icon}
                              </div>
                              <div>
                                <p className='text-sm font-medium text-white'>
                                  {child.name}
                                </p>
                                <p className='text-xs text-gray-40o0'>
                                  {child.description}
                                </p>
                                {child.price && (
                                  <p className='text-xs text-cyan-40o0 font-medium mt-1'>
                                    {child.price}
                                  </p>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile Contact Button */}
              <div className='pt-4'>
                <Link href='/contact'>
                  <button className='w-full px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-medium rounded-lg hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0/25'>
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Results Dropdown */}
      {searchQuery && (
        <div className='absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-cyan-40o0/20 max-h-96 overflow-y-auto'>
          <div className='p-4'>
            <h3 className='text-lg font-semibold text-white mb-4'>
              Search Results
            </h3>
            {filteredServices.length > 0 ? (
              <div className='space-y-2'>
                {filteredServices.map(service => (
                  <Link
                    key={service.name}
                    href={normalizeHref(service.href)}
                    className='flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-40o0/10 transition-all duration-20o0 group'
                    onClick={() => setSearchQuery('')}
                  >
                    <div className='flex-shrink-0 w-8 h-8 bg-cyan-40o0/20 rounded-lg flex items-center justify-center'>
                      {service.icon}
                    </div>
                    <div className='flex-1'>
                      <p className='text-sm font-medium text-white group-hover:text-cyan-40o0 transition-colors duration-20o0'>
                        {service.name}
                      </p>
                      <p className='text-sm text-gray-40o0'>
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className='text-gray-40o0 text-center py-4'>
                No services found
              </p>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default UltraAdvancedFuturisticNavigation20o38;
