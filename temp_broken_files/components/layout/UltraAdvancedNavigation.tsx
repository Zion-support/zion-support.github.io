import React, { useState, useEffect } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin,
  Brain, Rocket, Dna, Globe, Shield, Wifi, Package,
  Bot, Car, Building2, DollarSign, Monitor, Users,
  Cpu, Zap, Atom, Database, Cloud, Lock, Code
} from 'lucide-react',
import Link from 'next/link',
const UltraAdvancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false),
  const [isScrolled, setIsScrolled] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    },
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  const _navigationItems = [
    {_name: 'Home', _href: '/', _icon: null},
    {_name: 'AI Services', _href: '#', _icon: Brain, _description: 'Cutting-edge AI solutions', _dropdown: [
        {
          name: 'AI Agent Orchestrator', _href: '/ai-agents', _icon: Bot, _description: 'Multi-agent workflow automation', _price: '$2, _999/month'},
        {_name: 'AI Cybersecurity', _href: '/security', _icon: Shield, _description: 'AI-powered threat detection', _price: '$4, _999/month'},
        {_name: 'AI Healthcare Analytics', _href: '/ai-data-analytics', _icon: Dna, _description: 'Patient outcome prediction', _price: '$3, _999/month'},
        {_name: 'AI Supply Chain', _href: '/quantum-logistics', _icon: Package, _description: 'End-to-end optimization', _price: '$2, _499/month'},
        {_name: 'AI Financial Risk', _href: '/ai-financial-risk', _icon: DollarSign, _description: 'Advanced risk management', _price: '$5, _999/month'}
      ]
    },
    {_name: 'Quantum Computing', _href: '#', _icon: Atom, _description: 'Quantum-powered solutions', _dropdown: [
        {
          name: 'Quantum AI Supercomputer', _href: '/quantum-ai-cognitive', _icon: Cpu, _description: 'Enterprise quantum computing', _price: '$15, _999/month'},
        {_name: 'Quantum Internet Security', _href: '/quantum-internet-security-platform', _icon: Lock, _description: 'Future-proof encryption', _price: '$8, _999/month'},
        {_name: 'Quantum Drug Discovery', _href: '/biotech-ai', _icon: Dna, _description: 'Accelerated drug development', _price: '$12, _999/month'},
        {_name: 'Quantum Financial Trading', _href: '/quantum-financial-trading', _icon: DollarSign, _description: 'Nanosecond precision trading', _price: '$19, _999/month'},
        {_name: 'Quantum IoT Platform', _href: '/quantum-iot', _icon: Wifi, _description: 'Quantum-secured IoT', _price: '$4, _999/month'}
      ]
    },
    {_name: 'Space Technology', _href: '#', _icon: Rocket, _description: 'Space mission management', _dropdown: [
        {
          name: 'Space Mission Control', _href: '/space-technology', _icon: Rocket, _description: 'Complete mission management', _price: '$25, _999/month'},
        {_name: 'Space Debris Cleanup', _href: '/space-technology', _icon: Package, _description: 'AI-powered debris removal', _price: '$35, _999/month'}
      ]
    },
    {_name: 'Enterprise IT', _href: '#', _icon: Building2, _description: 'Enterprise solutions', _dropdown: [
        {
          name: 'Cloud Migration', _href: '/cloud-platform', _icon: Cloud, _description: 'Zero-downtime migration', _price: '$8, _999/month'},
        {_name: 'DevOps Automation', _href: '/automation', _icon: Code, _description: 'AI-powered automation', _price: '$5, _999/month'},
        {_name: 'Data Analytics', _href: '/ai-data-analytics', _icon: Database, _description: 'AI-powered insights', _price: '$6, _999/month'},
        {_name: 'Security Operations', _href: '/security', _icon: Shield, _description: '24/7 security monitoring', _price: '$12, _999/month'},
        {_name: 'API Management', _href: '/api-observability', _icon: Code, _description: 'Complete lifecycle management', _price: '$4, _999/month'},
        {_name: 'Digital Transformation', _href: '/solutions', _icon: Zap, _description: 'AI-powered transformation', _price: '$15, _999/month'},
        {_name: 'IoT Management', _href: '/it-asset-discovery-agent', _icon: Wifi, _description: 'AI-powered device management', _price: '$7, _999/month'}
      ]
    },
    {
      name: 'Micro SaaS',
      href: '/services',
      icon: Monitor,
      description: '300+ micro SaaS services'
    },
    {
      name: 'Market Pricing',
      href: '/market-pricing',
      icon: DollarSign,
      description: 'Benchmarks & vendor references'
    },
    {
      name: 'About',
      href: '/about',
      icon: null
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: null
    }
  ],

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },
  return (_<nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;flex justify-between items-center h-20&quot;>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=&quot;flex items-center&quot;          >
            <Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 group&quot;>
              <div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                <Zap className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <div className=&quot;hidden sm:block&quot;>
                <div className=&quot;text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </div>
                <div className=&quot;text-xs text-gray-400&quot;>Revolutionary Technology</div>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
            {navigationItems.map((item, index) => (
              <div key={item.name} className=&quot;relative group&quot;>
                {item.dropdown ? (                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;
                  >
                    {item.icon && <item.icon className=&quot;w-4 h-4&quot; />}
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2&quot;
                  >
                    {item.icon && <item.icon className=&quot;w-4 h-4&quot; />}
                    <span>{item.name}</span>
                  </a>                )}

                {_/* Dropdown Menu */}
                {_item.dropdown && (_<AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className=&quot;absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden&quot;
                      >
                        <div className=&quot;p-4&quot;>
                          <div className=&quot;text-sm text-gray-400 mb-3&quot;>{item.description}</div>
                          <div className=&quot;space-y-2&quot;>
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 group&quot;                              >
                                <div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200&quot;>
                                  <dropdownItem.icon className=&quot;w-5 h-5 text-cyan-400&quot; />
                                </div>
                                <div className=&quot;flex-1&quot;>
                                  <div className=&quot;text-white font-medium group-hover:text-cyan-400 transition-colors duration-200&quot;>
                                    {dropdownItem.name}
                                  </div>
                                  <div className=&quot;text-sm text-gray-400&quot;>{dropdownItem.description}</div>
                                </div>
                                <div className=&quot;text-sm font-semibold text-cyan-400&quot;>
                                  {dropdownItem.price}                                </div>
                              </a>
                            ))}
                          </div>;
                        </div>;
                      </motion.div>;
                    )}
                  </AnimatePresence>;
                )}
              </div>;
            ))}
          </div>;
;
          {/* Contact Info & CTA */}
          <div className=&quot;hidden lg:flex items-center space-x-6&quot;>
            <div className=&quot;flex items-center space-x-4 text-sm text-gray-300&quot;>
              <a href={`tel:${contactInfo.mobile}`} className=&quot;flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200&quot;>
                <Phone className=&quot;w-4 h-4&quot; />
                <span className=&quot;hidden xl:inline&quot;>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className=&quot;flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200&quot;>
                <Mail className=&quot;w-4 h-4&quot; />
                <span className=&quot;hidden xl:inline&quot;>{contactInfo.email}</span>              </a>
            </div>
            
            <motion.a
              href=&quot;/contact&quot;
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300&quot;            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className=&quot;lg:hidden&quot;>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=&quot;text-gray-300 hover:text-white transition-colors duration-200&quot;
            >
              {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}            </button>
          </div>
        </div>
      </div>

      {_/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className=&quot;lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden&quot;
          >
            <div className=&quot;px-4 py-6 space-y-4&quot;>
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className=&quot;flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3&quot;
                      >
                        <div className=&quot;flex items-center space-x-3&quot;>
                          {item.icon && <item.icon className=&quot;w-5 h-5&quot; />}
                          <span>{item.name}</span>                        </div>
                        <ChevronDown className={_`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className=&quot;ml-8 mt-2 space-y-2&quot;>
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setIsOpen(false)}
                              className=&quot;block py-2 text-gray-400 hover:text-white transition-colors duration-200&quot;
                            >
                              {dropdownItem.name}
                            </a>                          ))}
                        </div>
                      )}
                    </div>;
                  ) :(;
                    <Link;
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className=&quot;flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3&quot;
                    >
                      {item.icon && <item.icon className=&quot;w-5 h-5&quot; />}
                      <span>{item.name}</span>
                    </a>                  )}
                </div>
              ))}
              ;
              {/* Mobile Contact Info */}
              <div className=&quot;pt-6 border-t border-gray-800/50&quot;>
                <div className=&quot;space-y-3 text-sm text-gray-400&quot;>
                  <a href={`tel:${contactInfo.mobile}`} className=&quot;flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200&quot;>
                    <Phone className=&quot;w-4 h-4&quot; />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className=&quot;flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200&quot;>
                    <Mail className=&quot;w-4 h-4&quot; />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className=&quot;flex items-start space-x-3&quot;>
                    <MapPin className=&quot;w-4 h-4 mt-0.5&quot; />
                    <span>{contactInfo.address}</span>                  </div>
                </div>
                
                <motion.a
                  href=&quot;/contact&quot;
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300&quot;                >
                  Get Started
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
},

export default UltraAdvancedNavigation,