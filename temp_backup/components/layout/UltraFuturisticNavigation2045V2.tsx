import React, {,
  useState,;
  useEffect,;
  useCallback,;
  useMemo,;
  useRef,;
} from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import {,
  Menu,;
  X,;
  Search,;
  ChevronDown,;
  Phone,;
  Linkedin,;
  Twitter,;
  Github,;
  Youtube,;
  Home,;
  Briefcase,;
  Brain,;
  Atom,;
  Rocket,;
  Shield,;
  Cloud,;
  Target,;
  Building,;
  Users,;
  BookOpen,;
  FileText,;
  Video,;
  Code,;
  Zap,;
  Star,;
  Sparkles,;
  Globe,;
  Cpu,;
  Database,;
  Eye,;
  Heart,;
  Infinity,;
  TrendingUp,;
  Palette,;
  Layers,;
  Grid,;
  BarChart3,;
  Settings,;
  HelpCircle,;
  MessageCircle,;
  Calendar,;
  Award,;
  Lightbulb,;
  Play,;
  DollarSign,;
  GraduationCap,;
  Mail,;
  MapPin,;
  ShoppingBag,;
} from 'lucide-react',
import Link from 'next/link',
// Define Node type for DOM event handling,
type Node = HTMLElement | null,
,
interface NavigationItem {,
  label: string,
  href: string,
  icon: React.ReactNode,
  description?: string,
  children?: NavigationItem[],
  badge?: string,
  featured?: boolean,
  neonColor?: string,
  category?: string,
,}
,
// Enhanced navigation items with better organization,
const navigationItems: NavigationItem[] = [,
  {,
    label: 'Home',;
    href: '/',;
    icon: <Home className='w-4 h-4' />,;
    neonColor: 'shadow-cyan-40o0/50',;
    category: 'main',;
  },;
  {,
    label: 'Services',;
    href: '/services',;
    icon: <Briefcase className='w-4 h-4' />,;
    description: 'Explore our comprehensive technology solutions',;
    badge: 'New',;
    neonColor: 'shadow-blue-40o0/50',;
    category: 'main',;
    children: [,
      {,
        label: 'AI & Machine Learning',;
        href: '/services?category=ai-ml',;
        icon: <Brain className='w-4 h-4' />,;
        description: 'Advanced AI solutions for enterprise',;
        featured: true,;
        neonColor: 'shadow-purple-40o0/50',;
        category: 'ai',;
      },;
      {,
        label: 'Quantum Computing',;
        href: '/services?category=quantum',;
        icon: <Atom className='w-4 h-4' />,;
        description: 'Next-generation quantum solutions',;
        featured: true,;
        neonColor: 'shadow-indigo-40o0/50',;
        category: 'quantum',;
      },;
      {,
        label: 'Cybersecurity',;
        href: '/services?category=cybersecurity',;
        icon: <Shield className='w-4 h-4' />,;
        description: 'Advanced security solutions',;
        featured: true,;
        neonColor: 'shadow-red-40o0/50',;
        category: 'security',;
      },;
      {,
        label: 'Micro SAAS',;
        href: '/services?category=micro-saas',;
        icon: <Building className='w-4 h-4' />,;
        description: 'Innovative business solutions',;
        featured: true,;
        neonColor: 'shadow-emerald-40o0/50',;
        category: 'saas',;
      },;
      {,
        label: 'IT Infrastructure',;
        href: '/services?category=it-infrastructure',;
        icon: <Cpu className='w-4 h-4' />,;
        description: 'Enterprise IT solutions',;
        neonColor: 'shadow-blue-40o0/50',;
        category: 'it',;
      },;
      {,
        label: 'Edge Computing',;
        href: '/services?category=edge-computing',;
        icon: <Cloud className='w-4 h-4' />,;
        description: 'Distributed computing solutions',;
        neonColor: 'shadow-green-40o0/50',;
        category: 'edge',;
      },;
    ],;
  },;
  {,
    label: 'Solutions',;
    href: '/solutions',;
    icon: <Target className='w-4 h-4' />,;
    description: 'Industry-specific solutions',;
    neonColor: 'shadow-emerald-40o0/50',;
    category: 'main',;
    children: [,
      {,
        label: 'Financial Services',;
        href: '/solutions/financial',;
        icon: <DollarSign className='w-4 h-4' />,;
        description: 'Banking and fintech solutions',;
        neonColor: 'shadow-green-40o0/50',;
      },;
      {,
        label: 'Healthcare',;
        href: '/solutions/healthcare',;
        icon: <Heart className='w-4 h-4' />,;
        description: 'Healthcare technology solutions',;
        neonColor: 'shadow-red-40o0/50',;
      },;
      {,
        label: 'Manufacturing',;
        href: '/solutions/manufacturing',;
        icon: <Settings className='w-4 h-4' />,;
        description: 'Industrial automation solutions',;
        neonColor: 'shadow-blue-40o0/50',;
      },;
      {,
        label: 'Retail',;
        href: '/solutions/retail',;
        icon: <ShoppingBag className='w-4 h-4' />,;
        description: 'Retail technology solutions',;
        neonColor: 'shadow-purple-40o0/50',;
      },;
    ],;
  },;
  {,
    label: 'Resources',;
    href: '/resources',;
    icon: <BookOpen className='w-4 h-4' />,;
    description: 'Knowledge and learning resources',;
    neonColor: 'shadow-purple-40o0/50',;
    category: 'main',;
    children: [,
      {,
        label: 'Documentation',;
        href: '/docs',;
        icon: <FileText className='w-4 h-4' />,;
        description: 'Technical documentation',;
        neonColor: 'shadow-blue-40o0/50',;
      },;
      {,
        label: 'Blog',;
        href: '/blog',;
        icon: <FileText className='w-4 h-4' />,;
        description: 'Latest insights and updates',;
        neonColor: 'shadow-green-40o0/50',;
      },;
      {,
        label: 'Webinars',;
        href: '/webinars',;
        icon: <Video className='w-4 h-4' />,;
        description: 'Educational webinars',;
        neonColor: 'shadow-purple-40o0/50',;
      },;
      {,
        label: 'Training',;
        href: '/training',;
        icon: <GraduationCap className='w-4 h-4' />,;
        description: 'Professional training programs',;
        neonColor: 'shadow-orange-40o0/50',;
      },;
    ],;
  },;
  {,
    label: 'Company',;
    href: '/about',;
    icon: <Building className='w-4 h-4' />,;
    description: 'About Zion Tech Group',;
    neonColor: 'shadow-gray-40o0/50',;
    category: 'main',;
    children: [,
      {,
        label: 'About Us',;
        href: '/about',;
        icon: <Users className='w-4 h-4' />,;
        description: 'Our story and mission',;
        neonColor: 'shadow-blue-40o0/50',;
      },;
      {,
        label: 'Team',;
        href: '/team',;
        icon: <Users className='w-4 h-4' />,;
        description: 'Meet our leadership team',;
        neonColor: 'shadow-green-40o0/50',;
      },;
      {,
        label: 'Careers',;
        href: '/careers',;
        icon: <Briefcase className='w-4 h-4' />,;
        description: 'Join our team',;
        neonColor: 'shadow-purple-40o0/50',;
      },;
      {,
        label: 'Contact',;
        href: '/contact',;
        icon: <MessageCircle className='w-4 h-4' />,;
        description: 'Get in touch with us',;
        neonColor: 'shadow-cyan-40o0/50',;
      },;
    ],;
  },;
],
,
const UltraFuturisticNavigation20o45V2: React.FC = () => {,
  const [isOpen, setIsOpen] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
  const [isScrolled, setIsScrolled] = useState(false),
  const [searchQuery, setSearchQuery] = useState(''),
  const [isSearchOpen, setIsSearchOpen] = useState(false),
  const router = useRouter(),
  const searchRef = useRef<HTMLDivElement>(null),
,
  // Handle scroll effect,
  useEffect(() => {,
    const handleScroll = () => {,
      setIsScrolled(window.scrollY > 20),
    };
,
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll),
  }, []),
,
  // Handle search click outside,
  useEffect(() => {,
    const handleClickOutside = (event: MouseEvent) => {,
      if (,
        searchRef.current &&,
        !searchRef.current.contains(event.target as Node),
      ) {,
        setIsSearchOpen(false),
      ,}
    };
,
    document.addEventListener('mousedown', handleClickOutside),
    return () => document.removeEventListener('mousedown', handleClickOutside),
  }, []),
,
  // Handle search,
  const handleSearch = (e: React.FormEvent) => {,
    e.preventDefault(),
    if (searchQuery.trim()) {,
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim()),}`),
      setIsSearchOpen(false),
      setSearchQuery(''),
    }
  };
,
  // Handle navigation item click,
  const handleNavItemClick = (href: string) => {,
    router.push(href),
    setIsOpen(false),
    setActiveDropdown(null),
  ,};
,
  // Handle dropdown toggle,
  const toggleDropdown = (label: string) => {,
    setActiveDropdown(activeDropdown === label ? null : label),
  ,};
,
  // Close mobile menu,
  const closeMobileMenu = () => {,
    setIsOpen(false),
    setActiveDropdown(null),
  };
,
  return (,
    <>,
      {/* Top Contact Bar */}
      <div className='bg-gradient-to-r from-cyan-90o0 to-blue-90o0 text-white py-2 px-4 text-sm'>,
        <div className='max-w-7xl mx-auto flex flex-col sm: flex-row justify-between items-center'>,
          <div className='flex items-center space-x-4 mb-2 sm:mb-0'>,
            <div className='flex items-center space-x-2'>,
              <Phone className='w-4 h-4 text-cyan-40o0' />,
              <span>+1 30o2 464 0950</span>,
            </div>,
            <div className='flex items-center space-x-2'>,
              <Mail className='w-4 h-4 text-cyan-40o0' />,
              <span>kleber@ziontechgroup.com</span>,
            </div>,
          </div>,
          <div className='flex items-center space-x-4'>,
            <span className='text-cyan-30o0'>,
              364 E Main St STE 10o08, Middletown DE 19709,
            </span>,
          </div>,
        </div>,
      </div>,
      {/* Main Navigation */}
      <nav,
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-30o0 ${,
          isScrolled,
            ? 'bg-black/90 backdrop-blur-md border-b border-cyan-50o0/20 shadow-2xl shadow-cyan-50o0/10',
            : 'bg-transparent',
        }`}
      >,
        <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>,
          <div className='flex justify-between items-center h-20'>,
            {/* Logo */,}
            <Link href='/' className='flex items-center space-x-3 group'>,
              <div className='relative'>,
                <div className='w-12 h-12 bg-gradient-to-br from-cyan-50o0 to-blue-60o0 rounded-2xl p-3 group-hover: scale-110 transition-transform duration-30o0'>,
                  <Zap className='w-6 h-6 text-white' />,
                </div>,
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-50o0 to-blue-60o0 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-30o0' />,
              </div>,
              <div className='text-2xl font-bold text-white group-hover:text-cyan-40o0 transition-colors duration-30o0'>,
                Zion Tech Group,
              </div>,
            </Link>,
            {/* Desktop Navigation */,}
            <div className='hidden lg: flex items-center space-x-8'>,
              {navigationItems.map(item => (,
                <div key={item.label,} className='relative group'>,
                  <button,
                    onClick={() => toggleDropdown(item.label)}
                    className='flex items-center space-x-2 px-4 py-2 text-gray-30o0 hover: text-white transition-colors duration-30o0 group-hover:text-cyan-40o0',
                  >,
                    {item.icon,}
                    <span>{item.label}</span>,
                    {item.children && (,
                      <ChevronDown,
                        className={`w-4 h-4 transition-transform duration-30o0 ${,
                          activeDropdown === item.label ? 'rotate-180' : '',
                        }`}
                      />,
                    )}
                    {item.badge && (,
                      <span className='px-2 py-1 bg-gradient-to-r from-pink-50o0 to-purple-60o0 text-white text-xs font-semibold rounded-full'>,
                        {item.badge}
                      </span>,
                    )}
                  </button>,
                  {/* Dropdown Menu */}
                  {item.children && (,
                    <AnimatePresence>,
                      {activeDropdown === item.label && (,
                        <motion.div,
                          initial={{ opacity: 0, y: 10, scale: 0.95 ,}}
                          animate={{ opacity: 1, y: 0, scale: 1 ,}}
                          exit={{ opacity: 0, y: 10, scale: 0.95 ,}}
                          transition={{ duration: 0.2 ,}}
                          className='absolute top-full left-0 mt-2 w-80 bg-gray-90o0/95 backdrop-blur-md rounded-2xl border border-gray-70o0/50 shadow-2xl shadow-cyan-50o0/10 overflow-hidden',
                        >,
                          <div className='p-4'>,
                            <div className='grid grid-cols-1 gap-2'>,
                              {item.children.map(child => (,
                                <Link,
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className='group flex items-start space-x-3 p-3 rounded-xl hover: bg-gray-80o0/50 transition-all duration-30o0',
                                >,
                                  <div,
                                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${child.neonColor,} p-2.5 flex-shrink-0`}
                                  >,
                                    {child.icon}
                                  </div>,
                                  <div className='flex-1 min-w-0'>,
                                    <div className='flex items-center space-x-2'>,
                                      <span className='text-white font-medium group-hover: text-cyan-40o0 transition-colors duration-30o0'>,
                                        {child.label,}
                                      </span>,
                                      {child.featured && (,
                                        <span className='px-2 py-1 bg-gradient-to-r from-yellow-50o0 to-orange-50o0 text-black text-xs font-semibold rounded-full'>,
                                          Featured,
                                        </span>,
                                      )}
                                    </div>,
                                    {child.description && (,
                                      <p className='text-gray-40o0 text-sm mt-1 group-hover: text-gray-30o0 transition-colors duration-30o0'>,
                                        {child.description,}
                                      </p>,
                                    )}
                                  </div>,
                                </Link>,
                              ))}
                            </div>,
                          </div>,
                        </motion.div>,
                      )}
                    </AnimatePresence>,
                  )}
                </div>,
              ))}
            </div>,
            {/* Right Side Actions */}
            <div className='hidden lg: flex items-center space-x-4'>,
              {/* Search */,}
              <div className='relative' ref={searchRef}>,
                <button,
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className='p-2 text-gray-30o0 hover: text-white transition-colors duration-30o0',
                >,
                  <Search className='w-5 h-5' />,
                </button>,
                <AnimatePresence>,
                  {isSearchOpen && (,
                    <motion.div,
                      initial={{ opacity: 0, y: 10, scale: 0.95 ,}}
                      animate={{ opacity: 1, y: 0, scale: 1 ,}}
                      exit={{ opacity: 0, y: 10, scale: 0.95 ,}}
                      transition={{ duration: 0.2 ,}}
                      className='absolute top-full right-0 mt-2 w-80 bg-gray-90o0/95 backdrop-blur-md rounded-2xl border border-gray-70o0/50 shadow-2xl shadow-cyan-50o0/10 p-4',
                    >,
                      <form onSubmit={handleSearch} className='space-y-4'>,
                        <div className='relative'>,
                          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-40o0' />,
                          <input,
                            type='text',
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder='Search services, solutions...',
                            className='w-full pl-10 pr-4 py-3 bg-gray-80o0/50 border border-gray-60o0/50 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0/50 focus:border-cyan-50o0/50 transition-all duration-30o0',
                          />,
                        </div>,
                        <button,
                          type='submit',
                          className='w-full px-4 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-xl hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0',
                        >,
                          Search,
                        </button>,
                      </form>,
                    </motion.div>,
                  ),}
                </AnimatePresence>,
              </div>,
              {/* CTA Button */}
              <Link,
                href='/contact',
                className='px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-xl hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 shadow-lg hover:shadow-cyan-50o0/25',
              >,
                Get Started,
              </Link>,
            </div>,
            {/* Mobile Menu Button */,}
            <button,
              onClick={() => setIsOpen(!isOpen)}
              className='lg: hidden p-2 text-gray-30o0 hover:text-white transition-colors duration-30o0',
            >,
              {isOpen ? (,
                <X className='w-6 h-6' />,
              ) : (,
                <Menu className='w-6 h-6' />,
              ),}
            </button>,
          </div>,
        </div>,
        {/* Mobile Menu */}
        <AnimatePresence>,
          {isOpen && (,
            <motion.div,
              initial={{ opacity: 0, height: 0 ,}}
              animate={{ opacity: 1, height: 'auto' ,}}
              exit={{ opacity: 0, height: 0 ,}}
              transition={{ duration: 0.3 ,}}
              className='lg: hidden bg-gray-90o0/95 backdrop-blur-md border-t border-gray-70o0/50',
            >,
              <div className='px-4 py-6 space-y-4'>,
                {/* Mobile Search */,}
                <div className='relative'>,
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-40o0' />,
                  <input,
                    type='text',
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='Search services, solutions...',
                    className='w-full pl-10 pr-4 py-3 bg-gray-80o0/50 border border-gray-60o0/50 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0/50 focus:border-cyan-50o0/50 transition-all duration-30o0',
                  />,
                </div>,
                {/* Mobile Navigation Items */,}
                {navigationItems.map(item => (,
                  <div key={item.label}>,
                    <button,
                      onClick={() => toggleDropdown(item.label)}
                      className='w-full flex items-center justify-between px-4 py-3 text-left text-gray-30o0 hover: text-white transition-colors duration-30o0',
                    >,
                      <div className='flex items-center space-x-3'>,
                        {item.icon,}
                        <span>{item.label}</span>,
                        {item.badge && (,
                          <span className='px-2 py-1 bg-gradient-to-r from-pink-50o0 to-purple-60o0 text-white text-xs font-semibold rounded-full'>,
                            {item.badge}
                          </span>,
                        )}
                      </div>,
                      {item.children && (,
                        <ChevronDown,
                          className={`w-4 h-4 transition-transform duration-30o0 ${,
                            activeDropdown === item.label ? 'rotate-180' : '',
                          }`}
                        />,
                      )}
                    </button>,
                    {/* Mobile Dropdown */}
                    {item.children && activeDropdown === item.label && (,
                      <motion.div,
                        initial={{ opacity: 0, height: 0 ,}}
                        animate={{ opacity: 1, height: 'auto' ,}}
                        exit={{ opacity: 0, height: 0 ,}}
                        transition={{ duration: 0.3 ,}}
                        className='ml-8 mt-2 space-y-2',
                      >,
                        {item.children.map(child => (,
                          <Link,
                            key={child.label}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className='block px-4 py-2 text-gray-40o0 hover: text-white transition-colors duration-30o0',
                          >,
                            {child.label,}
                          </Link>,
                        ))}
                      </motion.div>,
                    )}
                  </div>,
                ))}
,
                {/* Mobile CTA */}
                <div className='pt-4 border-t border-gray-70o0/50'>,
                  <Link,
                    href='/contact',
                    onClick={closeMobileMenu}
                    className='block w-full px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-xl text-center hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0',
                  >,
                    Get Started,
                  </Link>,
                </div>,
              </div>,
            </motion.div>,
          ),}
        </AnimatePresence>,
      </nav>,
      {/* Spacer for fixed navigation */}
      <div className='h-20' />,
    </>,
  ),
};
,
export default UltraFuturisticNavigation20o45V2,
,