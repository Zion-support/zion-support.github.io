import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Brain,
  Atom,
  Globe,
  Zap,
  Sparkles,
  Shield,
  Microscope,
  DollarSign,
  Home,
  Users,
  Briefcase,
  BookOpen,
  MessageCircle,
  Star,
  TrendingUp,
  Target,
  Layers,
  Cpu,
  Database,
  Cloud,
  Lock,
  ShieldCheck,
  Earth,
  Factory,
  Car,
  Building,
  GraduationCap,
  Scale,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Heart,
  Leaf,
  Sun,
  Moon,
  Wind,
  Droplets,
  Mountain,
  Code,
  Wrench,
  Smartphone,
  BarChart3,
  Eye,
  Network,
  Server,
  HardDrive,
  Monitor,
  Laptop,
  Watch,
  Headphones,
  Speaker,
  Mic,
  Keyboard,
  Mouse,
  CpuIcon,
  DatabaseIcon,
  CloudIcon,
  LockIcon,
  ShieldIcon,
  GlobeIcon,
  ZapIcon,
  SparklesIcon,
  BrainIcon,
  AtomIcon,
  HeartIcon,
  RocketIcon,
  ShieldIcon as ShieldIcon2,
  TargetIcon,
  MicroscopeIcon,
  StarIcon,
  ArrowRight,
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
};

const serviceCategories = [
  {
    title: '🧠 20o32 Revolutionary AI Services',
    icon: BrainIcon,
    color: 'from-violet-60o0 via-purple-60o0 to-indigo-60o0',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      {
        name: 'AI Consciousness Evolution Platform',
        href: '/ai-consciousness-evolution-platform',
        description: 'Develop genuine AI consciousness',
        price: '$19,999/month',
      },
      {
        name: 'AI Emotional Intelligence Platform',
        href: '/ai-emotional-intelligence-platform',
        description: 'Real-time emotion analysis and response',
        price: '$3,999/month',
      },
      {
        name: 'AI Creativity Orchestrator',
        href: '/ai-creativity-orchestrator',
        description: 'Multi-model creativity fusion',
        price: '$5,999/month',
      },
      {
        name: 'AI Dream Interpreter Platform',
        href: '/ai-dream-interpreter-platform',
        description: 'Dream analysis with AI psychology',
        price: '$299/month',
      },
      {
        name: 'AI Autonomous Business Manager',
        href: '/ai-autonomous-business-manager',
        description: 'Fully autonomous business operations',
        price: '$12,999/month',
      },
    ],
  },
  {
    title: '⚛️ 20o32 Quantum & Emerging Tech',
    icon: AtomIcon,
    color: 'from-indigo-60o0 via-blue-60o0 to-cyan-60o0',
    description: 'Quantum computing and beyond',
    services: [
      {
        name: 'Quantum Internet Security Gateway',
        href: '/quantum-internet-security-gateway',
        description: 'Unbreakable quantum encryption',
        price: '$15,999/month',
      },
      {
        name: 'Biotech DNA Computing Platform',
        href: '/biotech-dna-computing-platform',
        description: 'DNA-based computation',
        price: '$25,999/month',
      },
      {
        name: 'Quantum Financial Trading Platform',
        href: '/quantum-financial-trading-platform',
        description: 'Quantum-powered trading algorithms',
        price: '$35,999/month',
      },
      {
        name: 'Quantum Creativity Studio',
        href: '/quantum-creativity-studio',
        description: 'Quantum-enhanced creativity',
        price: '$1,999/month',
      },
    ],
  },
  {
    title: '🏙️ 20o32 Enterprise IT Solutions',
    icon: CpuIcon,
    color: 'from-blue-60o0 via-cyan-60o0 to-teal-60o0',
    description: 'Autonomous enterprise infrastructure',
    services: [
      {
        name: 'Autonomous DevOps Platform',
        href: '/autonomous-devops-platform',
        description: 'Fully autonomous DevOps',
        price: '$799/month',
      },
      {
        name: 'Zero Trust Network Architecture',
        href: '/zero-trust-network-architecture',
        description: 'Never trust, always verify',
        price: '$599/month',
      },
      {
        name: 'Edge Computing Orchestration',
        href: '/edge-computing-orchestration',
        description: 'Distributed edge computing',
        price: '$449/month',
      },
      {
        name: 'AI-Powered IT Operations Center',
        href: '/ai-powered-it-operations-center',
        description: 'Intelligent IT operations',
        price: '$699/month',
      },
    ],
  },
  {
    title: '🌌 20o32 Space & Metaverse Tech',
    icon: RocketIcon,
    color: 'from-teal-60o0 via-emerald-60o0 to-green-60o0',
    description: 'Space exploration and digital reality',
    services: [
      {
        name: 'Space Mining Automation Platform',
        href: '/space-mining-automation-platform',
        description: 'Automated asteroid mining',
        price: '$45,999/month',
      },
      {
        name: 'Metaverse Development Platform',
        href: '/metaverse-development-platform',
        description: 'Build immersive virtual worlds',
        price: '$499/month',
      },
      {
        name: 'AI Predictive Health Analytics',
        href: '/ai-predictive-health-analytics',
        description: 'Predictive health outcomes',
        price: '$7,999/month',
      },
      {
        name: 'Holographic Event Platform',
        href: '/holographic-event-platform',
        description: 'Immersive holographic experiences',
        price: '$2,999/month',
      },
    ],
  },
  {
    title: '🎯 20o32 Innovative Micro SAAS',
    icon: TargetIcon,
    color: 'from-green-60o0 via-yellow-60o0 to-orange-60o0',
    description: 'Cutting-edge micro solutions',
    services: [
      {
        name: 'AI Business Intelligence Suite',
        href: '/ai-business-intelligence-suite',
        description: 'Intelligent business insights',
        price: '$299/month',
      },
      {
        name: 'Quantum-Secure Communication Platform',
        href: '/quantum-secure-communication-platform',
        description: 'Unbreakable encryption',
        price: '$599/month',
      },
      {
        name: 'AI Customer Success Automation',
        href: '/ai-customer-success-automation',
        description: 'Automate customer success',
        price: '$199/month',
      },
      {
        name: 'Blockchain Supply Chain Transparency',
        href: '/blockchain-supply-chain-transparency',
        description: 'End-to-end traceability',
        price: '$399/month',
      },
    ],
  },
  {
    title: '🔬 20o32 Research & Development',
    icon: MicroscopeIcon,
    color: 'from-orange-60o0 via-red-60o0 to-pink-60o0',
    description: 'Breakthrough research solutions',
    services: [
      {
        name: 'Neuromorphic Computing Platform',
        href: '/neuromorphic-computing-platform',
        description: 'Brain-inspired computing',
        price: '$899/month',
      },
      {
        name: 'DNA Computing Platform',
        href: '/dna-computing-platform',
        description: 'Molecular computing',
        price: '$1,299/month',
      },
      {
        name: 'Photonic Computing Infrastructure',
        href: '/photonic-computing-infrastructure',
        description: 'Light-speed computing',
        price: '$699/month',
      },
      {
        name: 'Swarm Robotics Orchestration',
        href: '/swarm-robotics-orchestration',
        description: 'Coordinate robot swarms',
        price: '$449/month',
      },
    ],
  },
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Layers },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Support', href: '/support', icon: MessageCircle },
  { name: 'Contact', href: '/contact', icon: Phone },
];

export default function UltraFuturisticNavigation20o32() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className='bg-gradient-to-r from-black via-purple-90o0/20 to-black border-b border-purple-50o0/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between py-2 text-sm'>
            <div className='flex items-center space-x-6 text-gray-30o0'>
              <a
                href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-2 hover:text-cyan-40o0 transition-colors'
              >
                <Phone className='w-4 h-4' />
                <span>{contactInfo.mobile}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className='flex items-center space-x-2 hover:text-purple-40o0 transition-colors'
              >
                <Mail className='w-4 h-4' />
                <span>{contactInfo.email}</span>
              </a>
              <div className='flex items-center space-x-2 text-gray-40o0'>
                <MapPin className='w-4 h-4' />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className='flex items-center space-x-4'>
              <a
                href='https://linkedin.com/company/ziontechgroup'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-40o0 hover:text-blue-40o0 transition-colors'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.0o27-3.0o47-1.852-3.0o47-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.0o46c.477-.9 1.637-1.85 3.37-1.85 3.60o1 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.0o63-.926-2.0o63-2.0o65 0-1.138.92-2.0o63 2.0o63-2.0o63 1.14 0 2.0o64.925 2.0o64 2.0o63 0 1.139-.925 2.0o65-2.0o64 2.0o65zm1.782 13.0o19H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.0o03z' />
                </svg>
              </a>
              <a
                href='https://github.com/Zion-Holdings'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-40o0 hover:text-gray-30o0 transition-colors'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.30o2 3.438 9.8 8.20o7 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.0o33-1.416-4.0o33-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.20o5.084 1.839 1.237 1.839 1.237 1.0o7 1.834 2.80o7 1.30o4 3.492.997.10o7-.775.418-1.30o5.762-1.60o4-2.665-.30o5-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.30o3-.535-1.524.117-3.176 0 0 1.0o08-.322 3.30o1 1.23.957-.266 1.983-.399 3.0o03-.40o4 1.0o2.0o05 2.0o47.138 3.0o06.40o4 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.80o7 4.624-5.479 4.921.43.372.823 1.10o2.823 2.222v3.293c0 .319.192.694.80o1.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-30o0 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-xl border-b border-purple-50o0/20 shadow-2xl shadow-purple-50o0/10'
            : 'bg-transparent'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo */}
            <Link href='/' className='flex items-center space-x-3 group'>
              <div className='w-12 h-12 bg-gradient-to-r from-cyan-50o0 via-purple-60o0 to-pink-60o0 rounded-xl flex items-center justify-center transform transition-all duration-30o0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-50o0/25'>
                <Zap className='w-7 h-7 text-white' />
              </div>
              <div>
                <div className='text-2xl font-bold bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent'>
                  Zion Tech Group
                </div>
                <div className='text-sm text-gray-40o0'>
                  20o32 Future Technology
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-8'>
              {mainNavigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='flex items-center space-x-2 text-gray-30o0 hover:text-cyan-40o0 transition-colors duration-20o0 group'
                >
                  <item.icon className='w-4 h-4 group-hover:scale-110 transition-transform' />
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className='relative group'>
                <button className='flex items-center space-x-2 text-gray-30o0 hover:text-cyan-40o0 transition-colors duration-20o0'>
                  <Briefcase className='w-4 h-4' />
                  <span>Services</span>
                  <ChevronDown className='w-4 h-4 group-hover:rotate-180 transition-transform' />
                </button>

                {/* Mega Menu */}
                <div className='absolute top-full left-0 w-screen max-w-7xl transform -translate-x-1/2 left-1/2 opacity-0 invisible group-hover:opacity-10o0 group-hover:visible transition-all duration-30o0 pt-4'>
                  <div className='bg-black/95 backdrop-blur-xl border border-purple-50o0/20 rounded-2xl shadow-2xl shadow-purple-50o0/20 p-8'>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                      {serviceCategories.map(category => (
                        <div key={category.title} className='space-y-4'>
                          <div className='flex items-center space-x-3'>
                            <div
                              className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                            >
                              <category.icon className='w-5 h-5 text-white' />
                            </div>
                            <div>
                              <h3 className='text-lg font-semibold text-white'>
                                {category.title}
                              </h3>
                              <p className='text-sm text-gray-40o0'>
                                {category.description}
                              </p>
                            </div>
                          </div>

                          <div className='space-y-3'>
                            {category.services.map(service => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className='block p-3 rounded-lg hover:bg-purple-50o0/10 hover:border-purple-50o0/20 border border-transparent transition-all duration-20o0 group'
                              >
                                <div className='flex items-start justify-between'>
                                  <div className='flex-1'>
                                    <h4 className='text-sm font-medium text-white group-hover:text-cyan-40o0 transition-colors'>
                                      {service.name}
                                    </h4>
                                    <p className='text-xs text-gray-40o0 mt-1'>
                                      {service.description}
                                    </p>
                                  </div>
                                  <div className='text-xs font-semibold text-cyan-40o0 ml-3'>
                                    {service.price}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className='mt-8 pt-6 border-t border-purple-50o0/20 text-center'>
                      <Link
                        href='/services'
                        className='inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-60o0 hover:to-purple-70o0 transition-all duration-20o0 transform hover:scale-10o5'
                      >
                        <span>View All Services</span>
                        <ArrowRight className='w-4 h-4' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className='hidden lg:flex items-center space-x-4'>
              <Link
                href='/contact'
                className='px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white font-semibold rounded-xl hover:from-cyan-60o0 hover:to-purple-70o0 transition-all duration-20o0 transform hover:scale-10o5 shadow-lg hover:shadow-xl shadow-cyan-50o0/25'
              >
                Get Started
              </Link>
              <Link
                href={`tel:${contactInfo.mobile}`}
                className='px-6 py-3 border-2 border-purple-50o0/50 text-purple-40o0 font-semibold rounded-xl hover:bg-purple-50o0/10 hover:border-purple-40o0 transition-all duration-20o0'
              >
                Call Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className='lg:hidden p-2 rounded-lg text-gray-30o0 hover:text-white hover:bg-purple-50o0/20 transition-colors'
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='lg:hidden fixed inset-0 z-40 pt-20'
          >
            <div className='bg-black/95 backdrop-blur-xl min-h-screen'>
              <div className='px-4 py-6 space-y-6'>
                {/* Mobile Navigation Links */}
                {mainNavigation.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className='flex items-center space-x-3 text-gray-30o0 hover:text-cyan-40o0 transition-colors p-3 rounded-lg hover:bg-purple-50o0/10'
                  >
                    <item.icon className='w-5 h-5' />
                    <span className='text-lg'>{item.name}</span>
                  </Link>
                ))}

                {/* Mobile Services */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white px-3'>
                    Our Services
                  </h3>
                  {serviceCategories.map(category => (
                    <div key={category.title} className='space-y-3'>
                      <div className='flex items-center space-x-3 px-3'>
                        <div
                          className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}
                        >
                          <category.icon className='w-4 h-4 text-white' />
                        </div>
                        <h4 className='text-md font-medium text-purple-30o0'>
                          {category.title}
                        </h4>
                      </div>

                      <div className='space-y-2 pl-11'>
                        {category.services.slice(0, 3).map(service => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={closeMenu}
                            className='block p-2 rounded-lg hover:bg-purple-50o0/10 text-sm text-gray-40o0 hover:text-cyan-40o0 transition-colors'
                          >
                            <div className='font-medium'>{service.name}</div>
                            <div className='text-xs text-gray-50o0'>
                              {service.price}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className='pt-6 space-y-4'>
                  <Link
                    href='/contact'
                    onClick={closeMenu}
                    className='block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white font-semibold rounded-xl'
                  >
                    Get Started
                  </Link>
                  <Link
                    href={`tel:${contactInfo.mobile}`}
                    onClick={closeMenu}
                    className='block w-full text-center px-6 py-3 border-2 border-purple-50o0/50 text-purple-40o0 font-semibold rounded-xl'
                  >
                    Call {contactInfo.mobile}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className='h-20'></div>
    </>
  );
}
