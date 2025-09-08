import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight,
  Home, Search, Settings, User, 
  Brain, Cpu, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Microscope, Atom, Database,
  Lock, Cloud, BarChart3, Settings as SettingsIcon,
  Eye, Code, Palette, Layers,
  Network, Server, ShieldCheck, ZapIcon,
  GlobeIcon, StarIcon, TrendingUpIcon, UsersIcon,
  CheckCircleIcon, ArrowRightIcon, CpuIcon,
  DollarSign, Phone, ArrowRight, Mail, MapPin, Dna, HelpCircle,
  Sparkles, Crown, Award, Target as TargetIcon, Zap as ZapIcon2, MessageCircle,
  Calendar, ExternalLink, BookOpen, FileText, Video, Headphones
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
  color?: string;
  isNew?: boolean;
  isHot?: boolean;
  isPremium?: boolean;
  category?: string;
}

const navigationItems = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-violet-500 to-purple-600',
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    children: [
      { name: 'AI Consciousness Evolution Pro', href: '/ai-consciousness-evolution-pro', description: 'Advanced AI consciousness development' },
      { name: 'Quantum AI Fusion Platform', href: '/quantum-ai-fusion-platform', description: 'Quantum-AI hybrid computing' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-platform', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio Pro', href: '/ai-creativity-studio-pro', description: 'AI-powered creative platform' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal AI analysis platform' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-indigo-500 to-blue-600',
    description: 'Breakthrough quantum computing and space technology solutions',
    badge: 'Revolutionary',
    children: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unhackable quantum communication' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum molecular simulation' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface platform' },
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Autonomous space mining' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Quantum energy optimization' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', description: 'Quantum materials research' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5 text-green-400" />,
    color: 'from-blue-500 to-cyan-600',
    description: 'Advanced enterprise infrastructure and security solutions',
    badge: 'Enterprise',
    children: [
      { name: 'Quantum Cloud Infrastructure Pro', href: '/quantum-cloud-infrastructure-pro', description: 'Quantum-enhanced cloud platform' },
      { name: 'Edge Computing Orchestrator Pro', href: '/edge-computing-orchestrator-pro', description: 'Advanced edge computing' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Comprehensive zero trust security' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform', description: 'Intelligent DevOps automation' },
      { name: 'Quantum Data Center Platform', href: '/quantum-data-center-platform', description: 'Quantum data center solutions' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    color: 'from-teal-500 to-emerald-600',
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Popular',
    children: [
      { name: 'AI Content Factory Enterprise', href: '/ai-content-factory-enterprise', description: 'Enterprise AI content generation' },
      { name: 'Quantum CRM Suite Enterprise', href: '/quantum-crm-suite-enterprise', description: 'Quantum-enhanced CRM platform' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', description: 'Autonomous decision making' },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', description: 'Advanced medical AI diagnostics' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal AI analysis platform' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' }
    ]
  },
  {
    title: 'Financial Technology',
    icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
    color: 'from-green-500 to-emerald-600',
    description: 'Advanced AI-powered financial solutions',
    badge: 'Hot',
    children: [
      { name: 'Neural Finance AI', href: '/neural-finance-ai', description: 'AI-powered financial analysis' },
      { name: 'Quantum Risk Financial Manager', href: '/quantum-risk-financial-manager', description: 'Quantum risk management' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'Autonomous Trading System', href: '/autonomous-quantum-trading-system', description: 'AI-powered trading' },
      { name: 'Financial Compliance AI', href: '/financial-compliance-ai', description: 'Regulatory compliance automation' },
      { name: 'Cryptocurrency Analytics', href: '/cryptocurrency-analytics-platform', description: 'Crypto market analysis' }
    ]
  },
  {
    title: 'Healthcare & Biotech',
    icon: <Microscope className="w-5 h-5 text-red-400" />,
    color: 'from-red-500 to-pink-600',
    description: 'Advanced healthcare and biotechnology solutions',
    badge: 'New',
    children: [
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', description: 'Advanced medical AI diagnostics' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform', description: 'AI-powered research platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum molecular simulation' },
      { name: 'Neural Interface Development', href: '/brain-computer-interface-platform', description: 'Brain-computer interfaces' },
      { name: 'Personalized Medicine AI', href: '/personalized-medicine-ai', description: 'AI-powered personalized medicine' },
      { name: 'Medical Imaging AI', href: '/medical-imaging-ai', description: 'Advanced medical imaging analysis' }
    ]
  },
  {
    title: 'Space & Metaverse',
    icon: <Globe className="w-5 h-5 text-pink-400" />,
    color: 'from-pink-500 to-rose-600',
    description: 'Space exploration and virtual reality solutions',
    badge: 'Future',
    children: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Autonomous space mining' },
      { name: 'Metaverse AI Development', href: '/metaverse-ai-development-platform', description: 'AI-powered metaverse' },
      { name: 'Satellite Operations', href: '/satellite-operations-platform', description: 'Satellite management systems' },
      { name: 'Virtual Reality AI', href: '/virtual-reality-ai-platform', description: 'AI-enhanced VR experiences' },
      { name: 'Space Debris Management', href: '/space-debris-management', description: 'Orbital debris tracking' },
      { name: 'Holographic Events Platform', href: '/holographic-events-platform', description: '3D holographic experiences' }
    ]
  }
];

const quickActions = [
  { name: 'Get Quote', href: '/quote', icon: <DollarSign className="w-4 h-4" />, color: 'from-green-500 to-emerald-600' },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w-4 h-4" />, color: 'from-blue-500 to-cyan-600' },
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w-4 h-4" />, color: 'from-purple-500 to-pink-600' },
  { name: 'Contact Support', href: '/support', icon: <HelpCircle className="w-4 h-4" />, color: 'from-orange-500 to-red-600' }
];

const resourceLinks = [
  { name: 'Documentation', href: '/docs', icon: <BookOpen className="w-4 h-4" />, description: 'Technical guides and API docs' },
  { name: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4" />, description: 'Success stories and implementations' },
  { name: 'Video Tutorials', href: '/tutorials', icon: <Video className="w-4 h-4" />, description: 'Step-by-step video guides' },
  { name: 'Webinars', href: '/webinars', icon: <Headphones className="w-4 h-4" />, description: 'Live and recorded sessions' }
];

export default function EnhancedSidebar2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (title: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedItems(newExpanded);
  };

  const filteredItems = navigationItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.children?.some(child => 
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isOpen && !target.closest('.sidebar') && !target.closest('.sidebar-toggle')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryTitle) 
        ? prev.filter(cat => cat !== categoryTitle)
        : [...prev, categoryTitle]
    );
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
