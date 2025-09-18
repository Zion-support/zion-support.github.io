<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Rocket, Phone, Mail, MapPin,
  Brain, Cpu, Shield, Zap, Star, Users, TrendingUp,
  Globe, Database, Cloud, Lock, Palette, Target,
  Layers, Sparkles, Atom, Microscope, Satellite,
  Search, Bell, User, Settings, LogOut, SparklesIcon,
  Eye, Code, Server, Network, Globe2,
  Smartphone, Monitor, Laptop, Watch, Camera, Headphones
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Machine Learning 2026',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Business Intelligence Elite 2026', href: '/ai-business-intelligence-elite-2026', description: 'Next-generation AI-powered business analytics', price: '$299/month', popular: true },
      { name: 'Autonomous AI Agents Platform 2026', href: '/autonomous-ai-agents-platform-2026', description: 'Create and manage autonomous AI agents', price: '$199/month', popular: true },
      { name: 'AI Healthcare Companion 2026', href: '/ai-healthcare-companion-2026', description: 'Revolutionary AI-powered healthcare assistance', price: '$399/month', popular: true },
      { name: 'AI Creative Studio Platform 2026', href: '/ai-creative-studio-platform-2026', description: 'Unlimited AI-powered creativity', price: '$149/month', popular: true },
      { name: 'AI Financial Risk Management', href: '/ai-financial-risk', description: 'Advanced AI-powered financial risk analysis', price: '$599/month', popular: false },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Intelligent legal document analysis', price: '$299/month', popular: false }
    ]
  },
  {
    title: 'Quantum Computing & Security',
    icon: Atom,
    color: 'from-blue-600 to-cyan-600',
    description: 'Quantum-era solutions',
    services: [
      { name: 'Quantum Cybersecurity Suite 2026', href: '/quantum-cybersecurity-suite-2026', description: 'Quantum-resistant cybersecurity', price: '$599/month', popular: true },
      { name: 'Quantum Internet Security Platform 2026', href: '/quantum-internet-security-platform-2026', description: 'Secure the future of the internet', price: '$799/month', popular: false },
      { name: 'Quantum Financial Trading Platform 2026', href: '/quantum-financial-trading-platform-2026', description: 'Quantum-powered financial trading', price: '$1,299/month', popular: false },
      { name: 'Quantum-Secure Communication', href: '/quantum-secure-communication', description: 'Unbreakable encryption for the quantum era', price: '$599/month', popular: false },
      { name: 'Quantum AI Brain Interface', href: '/quantum-ai-brain-computer-interface', description: 'Revolutionary brain-computer interface', price: '$2,999/month', popular: false }
    ]
  },
  {
    title: 'Emerging Technologies 2026',
    icon: Sparkles,
    color: 'from-green-600 to-emerald-600',
    description: 'Cutting-edge innovations',
    services: [
      { name: 'Neuromorphic Computing Platform 2026', href: '/neuromorphic-computing-platform-2026', description: 'Brain-inspired computing for next-generation AI', price: '$2,499/month', popular: false },
      { name: 'DNA Computing Platform 2026', href: '/dna-computing-platform-2026', description: 'Molecular computing for complex problem solving', price: '$3,999/month', popular: false },
      { name: 'Photonic Computing Platform 2026', href: '/photonic-computing-platform-2026', description: 'Light-speed computing with photonic processors', price: '$1,999/month', popular: false },
      { name: 'Holographic Display Platform 2026', href: '/holographic-display-platform-2026', description: 'Next-generation 3D holographic visualization', price: '$899/month', popular: true },
      { name: 'Metaverse AI Development Platform', href: '/metaverse-ai-development-platform', description: 'AI-powered metaverse creation', price: '$1,499/month', popular: false }
    ]
  },
  {
    title: 'Enterprise IT Solutions 2026',
    icon: Shield,
    color: 'from-red-600 to-orange-600',
    description: 'Enterprise-grade solutions',
    services: [
      { name: 'Zero Trust Network Architecture 2026', href: '/zero-trust-network-architecture-2026', description: 'Next-generation network security', price: 'Custom pricing', popular: false },
      { name: 'Edge Computing Orchestration 2026', href: '/edge-computing-orchestration-2026', description: 'Intelligent edge computing management', price: 'Custom pricing', popular: false },
      { name: '5G Private Network Solutions 2026', href: '/5g-private-network-solutions-2026', description: 'Enterprise-grade 5G private networks', price: 'Custom pricing', popular: false },
      { name: 'Blockchain Infrastructure Platform 2026', href: '/blockchain-infrastructure-platform-2026', description: 'Enterprise blockchain infrastructure', price: 'Custom pricing', popular: false },
      { name: 'Cloud Landing Zone', href: '/cloud-landing-zone', description: 'Secure cloud infrastructure setup', price: '$2,999/month', popular: false }
    ]
  },
  {
    title: 'Autonomous Systems & Robotics',
    icon: Target,
    color: 'from-indigo-600 to-purple-600',
    description: 'Intelligent automation',
    services: [
      { name: 'Swarm Robotics Platform 2026', href: '/swarm-robotics-platform-2026', description: 'Coordinated multi-robot systems', price: '$1,299/month', popular: false },
      { name: 'AI Autonomous Business Platform 2026', href: '/ai-autonomous-business-platform-2026', description: 'Run your business with autonomous AI', price: 'Custom pricing', popular: false },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing', description: 'AI-powered manufacturing automation', price: '$599/month', popular: false },
      { name: 'Autonomous Supply Chain Optimization', href: '/autonomous-supply-chain-optimization', description: 'AI-powered supply chain management', price: '$399/month', popular: false },
      { name: 'Autonomous Vehicle AI Platform', href: '/autonomous-vehicle-ai-platform', description: 'Advanced autonomous vehicle systems', price: '$1,999/month', popular: false }
    ]
  },
  {
    title: 'Space Technology & Innovation',
    icon: Satellite,
    color: 'from-yellow-600 to-orange-600',
    description: 'Space-age solutions',
    services: [
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'AI-powered space exploration', price: '$3,999/month', popular: false },
      { name: 'Quantum Space Mining Platform', href: '/quantum-space-mining-platform', description: 'Revolutionary space resource exploration', price: '$1,299/month', popular: false },
      { name: 'Satellite Operations AI', href: '/satellite-operations-ai', description: 'Intelligent satellite management', price: '$2,999/month', popular: false },
      { name: 'Space Debris Tracking System 2026', href: '/space-debris-tracking-system-2026', description: 'Advanced space debris monitoring', price: '$1,999/month', popular: false },
      { name: 'Space Tourism AI Platform', href: '/space-tourism-ai-platform', description: 'AI-powered space tourism experiences', price: '$2,499/month', popular: false }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: Code,
    color: 'from-teal-600 to-green-600',
    description: 'Scalable SaaS platforms',
    services: [
      { name: 'AI Content Generator Elite', href: '/ai-content-generator', description: 'Professional AI-powered content creation', price: '$49/month', popular: true },
      { name: 'AI Guardrails Suite', href: '/ai-guardrails', description: 'Policy, safety and governance for LLM apps', price: '$99/month', popular: false },
      { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber-pro', description: 'Advanced meeting transcription and analysis', price: '$79/month', popular: false },
      { name: 'AI SEO Optimization Suite', href: '/ai-seo-optimization', description: 'AI-powered SEO optimization', price: '$89/month', popular: false },
      { name: 'AI Video Editing Platform', href: '/ai-video-editing', description: 'Professional AI video editing', price: '$129/month', popular: false }
    ]
  },
  {
    title: 'Cybersecurity & Compliance',
    icon: Lock,
    color: 'from-red-600 to-pink-600',
    description: 'Advanced security solutions',
    services: [
      { name: 'Vulnerability Assessment & Penetration Testing', href: '/vulnerability-assessment-penetration-testing', description: 'Comprehensive security testing', price: '$2,999/month', popular: false },
      { name: 'SOC2 Evidence Automation', href: '/soc2-evidence-automation', description: 'Automated compliance evidence collection', price: '$399/month', popular: false },
      { name: 'TLS Certificate Monitor', href: '/tls-certificate-monitor', description: 'Automated certificate management', price: '$29/month', popular: false },
      { name: 'API Security Scanner', href: '/api-security-scanner', description: 'Advanced API security testing', price: '$199/month', popular: false },
      { name: 'Incident Automation Suite', href: '/incident-automation-suite', description: 'Automated incident response', price: '$299/month', popular: false }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: '2026 Services', href: '/2026-services-showcase', icon: Sparkles },
  { name: 'News & Updates', href: '/news', icon: Bell },
  { name: 'Case Studies', href: '/case-studies', icon: TrendingUp },
  { name: 'Blog & Resources', href: '/blog', icon: Globe },
  { name: 'Careers', href: '/careers', icon: Target },
  { name: 'Contact', href: '/contact', icon: Mail }
];

const EnhancedNavigation2026V2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const filteredServices = serviceCategories.flatMap(category =>
    category.services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const EnhancedNavigation2026V2: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedNavigation2026V2</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnhancedNavigation2026V2;
