<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD:src_disabled_1757239864/layout/AppHeader.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const showTagline = router.pathname === '/
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const isMobile = useIsMobile()
  const { t } = useTranslation()
  const { user } = useAuth()
  const isLoggedIn = useSelector((state: RootState,) => state.auth.isLoggedIn)
  const router = useRouter()
  const showTagline = router.pathname === /'
import React, { useState } from 'react;
import { useMessaging } from @/context/MessagingContext';
import Link from 'next/link;
import { ResponsiveNavigation } from @/components/navigation/ResponsiveNavigation';
import { Logo } from '@/components/header/Logo;
import { useTranslation } from react-i18next';
import { Menu, X } from 'lucide-react
import { MobileMenu } from @/components/header/MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile;
import { MobileBottomNav } from @/components/header/MobileBottomNav';
import { PointsBadge } from '@/components/loyalty/PointsBadge;
import { LoginModal } from @/components/auth/LoginModal';
import { useAuth } from '@/hooks/useAuth;
import { UserMenu } from @/components/header/UserMenu';
import { useSelector } from 'react-redux;
import type { RootState } from @/store';
import { cn } from '@/lib/utils, // Import cn utility
import { useRouter } from next/router';
<<<<<<< HEAD
export function AppHeader() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
=======
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, Code, Truck, Building, ShoppingCart, BookOpen, MessageCircle } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';


export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
<<<<<<< HEAD

=======
<<<<<<< HEAD:src_disabled_1757239864/layout/AppHeader.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [loginOpen, setLoginOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { user } = useAuth();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn),
  const router = useRouter();
  const showTagline = router.pathname === '/;
<<<<<<< HEAD

  // Messaging context (unread message count)
  const { unreadCount } = useMessaging();

=======
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

<<<<<<< HEAD

=======
<<<<<<< HEAD:src_disabled_1757239864/layout/AppHeader.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const openLoginModal = (returnToPath?: string) => {
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu)
    // using router.push with shallow:true before this function is called.
    // This functions main job is just to open the modal.
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.
    setLoginOpen(true)
<<<<<<< HEAD
  };
  
  return (
    <>
=======
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }

  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Solutions', href: '/solutions', current: false },
    { name: 'Research', href: '/research-development', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'Machine Learning & Data Science' },
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Quantum AI & Optimization' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'AI-Powered Security' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'DevOps & Infrastructure' },
    { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Smart Devices & Networks' },
    { name: 'Blockchain', href: '/services/blockchain', icon: Lock, description: 'DeFi & Smart Contracts' },
    { name: 'Healthcare Tech', href: '/services/data-analytics', icon: Heart, description: 'AI Medicine & Diagnostics' },
    { name: 'Green IT', href: '/green-it', icon: Globe, description: 'Sustainability Solutions' },
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Help Center', href: '/help-center', icon: MessageCircle },
  ];

  return (
    <>
<<<<<<< HEAD

=======
<<<<<<< HEAD:src_disabled_1757239864/layout/AppHeader.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <header
        style={{ "--nav-height: 64px" } as React.CSSProperties}
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground;
          { bg-red-500": mobileMenuOpen }
        )}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6>
          <Logo />
          {showTagline && (
            <span className=ml-4 hidden text-sm text-muted-foreground md:inline">
              {t('home.header_tagline')}
            </span>
          )}
          <div className="ml-6 flex-1 hidden md:block">
            <nav role="navigation" aria-label="Main navigation">
              <ResponsiveNavigation openLoginModal={openLoginModal} />
            </nav>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
              aria-expanded={mobileMenuOpen}
              aria-label={t(general.toggle_mobile_menu)}
            >
              <span className=sr-only">{t('general.open_main_menu')}</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6 aria-hidden=true" />
              ) : (
                <Menu className="block h-6 w-6 aria-hidden=true" />
              )}
            </button>
          </div>

          <PointsBadge />
          {!isLoggedIn && (
            <div className="ml-4 relative z-10 flex items-center>
<<<<<<< HEAD
              <Link
                href="/auth/login"
                className="text-sm font-medium text-foreground/70 hover:text-foreground"
                aria-label={t('auth.login')}
                data-testid="login-link"
                onClick={(e) => {
                  e.preventDefault();
                  // For the main login link, we might not have a specific returnTo beyond current page;
                  // or we could default to dashboard.
                  // For consistency with how sub-menus now set it:
                  router.push({ pathname: '/auth/login', query: { returnTo: router.asPath } }, undefined, { shallow: true }),
                  openLoginModal(router.asPath)
                }}
              >
                {t('auth.login')}
              </Link>
=======
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container-responsive">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {servicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 border border-cyan-400/20 rounded-xl shadow-2xl backdrop-blur-xl animate-fade-in"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-3">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group hover:scale-105"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                              <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                            </div>
                            <div className="ml-4 flex-1">
                              <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                {service.name}
                              </div>
                              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                {service.description}
                              </div>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <ChevronDown className="w-4 h-4 text-cyan-400 rotate-[-90deg]" />
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-700/50">
                        <Link
                          to="/services"
                          className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors py-2 px-4 rounded-lg hover:bg-cyan-400/10"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors p-1.5 hover:bg-zion-cyan/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <ZionLoadingSpinner size="sm" />
                    ) : (
                      <Search className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </form>

              {/* Quick actions */}
              <div className="hidden md:flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200">
                  <User className="w-5 h-5" />
                </button>
              </div>

              {/* CTA Button */}

              <Link
                to="/contact"
                className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
              >
                Get Started
              </Link>
<<<<<<< HEAD

=======
<<<<<<< HEAD:src_disabled_1757239864/layout/AppHeader.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <Link
                href=/signup"
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground
                aria-label={t(auth.signup)}
                data-testid=signup-nav-link"
<<<<<<< HEAD
              >
                {t('auth.signup')}
              </Link>
            </div>
=======
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"

              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
<<<<<<< HEAD


=======
<<<<<<< HEAD:src_disabled_1757239864/layout/AppHeader.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          )}
          {/* User avatar menu */}
          {isLoggedIn && (
            <div className="ml-4>
              <UserMenu />
            </div>
          )}
        </div>
      </header>
      
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className=md:hidden fixed inset-0 z-60 pt-16">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden=true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu 
              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={openLoginModal}
            />
<<<<<<< HEAD
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
  )
=======
=======
>>>>>>> origin/main:src/layout/AppHeader.tsx
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 border-t border-slate-700/50 backdrop-blur-xl animate-slide-up">
            <div className="container-responsive py-6">
              {/* Mobile search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-cyan p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSearching ? (
                      <ZionLoadingSpinner size="sm" />
                    ) : (
                      <Search className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </form>

              {/* Mobile navigation */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-300 hover:text-cyan-400 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile services */}
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <h3 className="text-slate-400 text-sm font-medium mb-4">Services</h3>
                <div className="grid grid-cols-1 gap-3">
                  {services.slice(0, 6).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                        <service.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="ml-3">
                        <div className="text-white font-medium text-sm">{service.name}</div>
                        <div className="text-gray-400 text-xs">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors mt-4 py-2 px-4 rounded-lg hover:bg-cyan-400/10"
                >
                  View All Services →
                </Link>
              </div>

              {/* Mobile quick links */}
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <h3 className="text-slate-400 text-sm font-medium mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                    >
                      <link.icon className="w-4 h-4 text-cyan-400 mr-2" />
                      <span className="text-white text-sm">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-3 px-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
