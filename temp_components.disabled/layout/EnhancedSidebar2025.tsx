import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight,
  Home, Zap, Brain, Atom, Shield, Rocket,
  Users, FileText, HelpCircle, Settings,
  TrendingUp, Award, CheckCircle, Clock,
  Globe, Cpu, Database, Lock, Star,
  Mail, Phone, MapPin, Search, ArrowRight,
  Heart, Palette, GraduationCap, Hospital, Coins, Leaf, Scale,
  BarChart3, Layers, Code, Terminal, Cloud, Server, Network, DollarSign
} from 'lucide-react';

const contactInfo ={
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709'
};

const mainNavigation = [
  {
    title: 'Home',
    href: '/',
    icon: <Home className="w-5 h-5"  />,
    description: 'Main landing page'
  },
  {
    title: 'All Services',
    href: '/comprehensive-services-showcase-20o25',
    icon: <Layers className="w-5 h-5"  />,
    description: 'Complete service catalog'
  },
  {
    title: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5"  />,
    description: 'Service pricing plans'
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <Mail className="w-5 h-5"  />,
    description: 'Get in touch with us'
  }
];

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-40o0"  />,
    color: 'from-cyan-50o0/20 to-blue-60o0/20',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-20o29', popular: true },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion', popular: false },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', popular: true },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', popular: false },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', popular: true },
      { name: 'AI Education Platform', href: '/ai-education-platform', popular: false },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', popular: true },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', popular: true },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', popular: false },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform', popular: false }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5 text-blue-40o0"  />,
    color: 'from-blue-50o0/20 to-purple-60o0/20',
    services: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', popular: true },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing', popular: false },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface', popular: true },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', popular: false },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai', popular: true },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', popular: false },
      { name: 'Quantum Robotics', href: '/quantum-robotics', popular: true },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', popular: true },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', popular: false },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', popular: true }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5 text-green-40o0"  />,
    color: 'from-green-50o0/20 to-emerald-60o0/20',
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', popular: true },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration', popular: false },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture', popular: true },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform', popular: false },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops', popular: true },
      { name: 'Quantum Networking', href: '/quantum-networking', popular: false },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations', popular: true },
      { name: 'Quantum Data Center', href: '/quantum-data-center', popular: false },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', popular: true },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', popular: false }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5"  />,
    color: 'text-emerald-40o0',
    items: [
      { name: 'AI Customer Success', href: '/ai-customer-success-platform', badge: 'New' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', badge: 'New' },
      { name: 'Financial Planning AI', href: '/ai-financial-planning-platform', badge: 'New' },
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics-platform', badge: 'New' },
      { name: 'Sales Intelligence AI', href: '/ai-sales-intelligence-platform', badge: 'New' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' },
      { name: 'Smart CRM Suite', href: '/smart-crm-intelligence-suite' },
      { name: 'Financial Analytics', href: '/automated-financial-analytics-platform' },
      { name: 'Project Management', href: '/intelligent-project-management-suite' },
      { name: 'Business Intelligence', href: '/ai-business-intelligence-suite' },
      { name: 'Marketing Automation', href: '/ai-autonomous-marketing-platform' },
      { name: 'Customer Service AI', href: '/ai-customer-service' },
      { name: 'HR & Recruitment', href: '/ai-hr-recruitment' },
      { name: 'Legal Contract Analysis', href: '/ai-legal-contract-analyzer' }
    ]
  },
  {
    title: 'Solutions',
    icon: <Target className="w-5 h-5"  />,
    color: 'text-orange-40o0',
    items: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
      { name: 'Financial Services', href: '/financial-solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology', href: '/retail-technology-solutions' },
      { name: 'Education Technology', href: '/education-technology-solutions' },
      { name: 'Government Solutions', href: '/government-technology-solutions' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },
      { name: 'Transportation & Logistics', href: '/intelligent-supply-chain-optimization' },
      { name: 'Real Estate Technology', href: '/innovative-business-solutions' },
      { name: 'Entertainment & Media', href: '/innovative-business-solutions' },
      { name: 'Space Technology', href: '/space-technology' },
      { name: 'Biotech & Healthcare', href: '/biotech-ai-research-platform' }
    ]
  },
  {
    title: 'Resources',
    icon: <BookOpen className="w-5 h-5"  />,
    color: 'text-cyan-40o0',
    items: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-documentation' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog & News', href: '/blog' },
      { name: 'Support Center', href: '/support' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Developer Resources', href: '/developer-resources' },
      { name: 'Research & Development', href: '/research-development' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Performance Reports', href: '/reports' },
      { name: 'Market Analysis', href: '/market-pricing' },
      { name: 'Services Advertising', href: '/services-advertising' }
    ]
  },
  {
    title: 'Company',
    icon: <Users className="w-5 h-5"  />,
    color: 'text-pink-40o0',
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership Team', href: '/leadership' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Press', href: '/news' },
      { name: 'Partners', href: '/partners' },
      { name: 'Investors', href: '/investors' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Locations', href: '/locations' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Diversity & Inclusion', href: '/diversity-inclusion' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  }
];

const quickLinks = [
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4"  /> },
  { name: 'API Reference', href: '/api-docs', icon: <Code className="w-4 h-4"  /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4"  /> },
  { name: 'Status', href: '/status', icon: <BarChart3 className="w-4 h-4"  /> },
  { name: 'Training', href: '/training', icon: <GraduationCap className="w-4 h-4"  /> },
  { name: 'Community', href: '/community', icon: <Users className="w-4 h-4"  /> }
];

const companyLinks = [
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4"  /> },
  { name: 'Careers', href: '/careers', icon: <Award className="w-4 h-4"  /> },
  { name: 'News', href: '/news', icon: <TrendingUp className="w-4 h-4"  /> },
  { name: 'Case Studies', href: '/case-studies', icon: <CheckCircle className="w-4 h-4"  /> }
];

interface EnhancedSidebar20o25Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedSidebar20o25({ isOpen, onClose }: EnhancedSidebar20o25Props) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryTitle) 
        ? prev.filter(cat => cat !== categoryTitle)
        : [...prev, categoryTitle]
    );
  };

  // Search functionality can be implemented here if needed
  // const filteredServices = sidebarSections.flatMap(section =>
  //   section.items.filter(item =>
  //     item.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   )
  // );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
           />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-10o0%' }}
            animate={{ x: 0 }}
            exit={{ x: '-10o0%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 20o0 }}
            className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-90o0 to-black border-r border-gray-80o0 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-80o0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white"  />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">Zion Tech</div>
                    <div className="text-xs text-cyan-40o0">Tech Solutions</div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-40o0 hover:text-white hover:bg-gray-80o0 rounded-lg transition-colors duration-20o0"
                >
                  <X className="w-5 h-5"  />
                </button>
              </div>
              
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search navigation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-80o0 border border-gray-70o0 rounded-lg text-white text-sm placeholder-gray-40o0 focus:outline-none focus:border-cyan-40o0"
                />
              </div>
            </div>

            {/* Main Navigation */}
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-40o0 uppercase tracking-wider mb-3">
                  Main Navigation
                </h3>
                <div className="space-y-2">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center space-x-3 p-3 text-gray-30o0 hover:text-white hover:bg-gray-80o0/50 rounded-lg transition-all duration-20o0 group"
                    >
                      <div className="text-gray-40o0 group-hover:text-cyan-40o0 transition-colors duration-20o0">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-gray-50o0">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Service Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-40o0 uppercase tracking-wider mb-3">
                  Service Categories
                </h3>
                <div className="space-y-2">
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="border border-gray-80o0 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleCategory(category.title)}
                        className="w-full flex items-center justify-between p-3 text-left text-gray-30o0 hover:text-white hover:bg-gray-80o0/50 transition-all duration-20o0"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                            {category.icon}
                          </div>
                          <span className="font-medium">{category.title}</span>
                        </div>
                        {expandedCategories.includes(category.title) ? (
                          <ChevronDown className="w-4 h-4 text-gray-40o0"  />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-40o0"  />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {expandedCategories.includes(category.title) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-gray-80o0/30"
                          >
                            <div className="p-3 space-y-2">
                              {category.services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={onClose}
                                  className="flex items-center justify-between p-2 text-sm text-gray-40o0 hover:text-white hover:bg-gray-70o0/50 rounded transition-colors duration-20o0 group"
                                >
                                  <span className="truncate">{service.name}</span>
                                  {service.popular && (
                                    <Star className="w-3 h-3 text-yellow-40o0"  />
                                  )}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-40o0 uppercase tracking-wider mb-3">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center space-x-3 p-3 text-gray-30o0 hover:text-white hover:bg-gray-80o0/50 rounded-lg transition-all duration-20o0 group"
                    >
                      <div className="text-gray-40o0 group-hover:text-cyan-40o0 transition-colors duration-20o0">
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company Links */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-40o0 uppercase tracking-wider mb-3">
                  Company
                </h3>
                <div className="space-y-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center space-x-3 p-3 text-gray-30o0 hover:text-white hover:bg-gray-80o0/50 rounded-lg transition-all duration-20o0 group"
                    >
                      <div className="text-gray-40o0 group-hover:text-cyan-40o0 transition-colors duration-20o0">
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-6 border-t border-gray-80o0 bg-gray-80o0/20">
              <h3 className="text-sm font-semibold text-gray-40o0 uppercase tracking-wider mb-3">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-30o0">
                  <Phone className="w-4 h-4 text-cyan-40o0"  />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-30o0">
                  <Mail className="w-4 h-4 text-cyan-40o0"  />
                  <span className="truncate">{contactInfo.email}</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-gray-30o0">
                  <MapPin className="w-4 h-4 text-cyan-40o0 mt-0.5"  />
                  <span className="text-xs leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <Link
                href="/contact"
                onClick={onClose}
                className="mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-medium rounded-lg hover:from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-20o0"  />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnhancedSidebar20o25;