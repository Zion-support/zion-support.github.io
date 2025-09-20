import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, Phone, Mail, MapPin, Brain, Atom, Shield, Rocket, Target, Star, Twitter, Linkedin, Youtube, Github, ArrowUp, ArrowRight, ExternalLink, Sparkles, Infinity, Zap, Cpu, Database, Cloud, Lock, Network, Server, CpuIcon, ZapIcon, Truck, BookOpen, FileText, Handshake, Newspaper, Grid, BarChart3, Palette, PaletteIcon, GraduationCap, HeartIcon, DollarSign, TrendingUp, Monitor, Building, Users, Briefcase, Code, MessageCircle, Calendar, Clock, ShieldCheck, Globe2, Satellite, Telescope, Microscope, FlaskConical, TargetIcon, Wifi, Bluetooth, Radio, SatelliteDish, Orbit
} from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
  featured?: boolean;
  price?: string;
  rating?: number;
}

const footerSections = [
  {
    title: 'Featured Revolutionary Services 2041',
    description: 'Our most innovative and cutting-edge solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-500',
    links: [
      { name: 'Quantum AI Consciousness Platform', href: '/quantum-ai-consciousness-platform', featured: true, price: '$2,999/month', rating: 4.9 },
      { name: 'Space Resource Intelligence Platform', href: '/space-resource-intelligence-platform', featured: true, price: '$1,999/month', rating: 4.8 },
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040', featured: true, price: '$1,499/month', rating: 4.9 },
      { name: 'Quantum Cybersecurity Future 2040', href: '/quantum-cybersecurity-future-2040', featured: true, price: '$899/month', rating: 4.8 },
      { name: 'Brain-Computer Interface 2040', href: '/brain-computer-interface-2040', featured: true, price: '$3,999/month', rating: 4.9 },
      { name: 'AI Autonomous Research 2041', href: '/ai-autonomous-research-2041', featured: true, price: '$2,499/month', rating: 4.9 },
      { name: 'Quantum Internet Security 2041', href: '/quantum-internet-security-2041', price: '$1,799/month', rating: 4.8 },
      { name: 'AI Customer Success 2041', href: '/ai-customer-success-2041', price: '$599/month', rating: 4.9 },
      { name: 'AI Sales Intelligence 2041', href: '/ai-sales-intelligence-2041', price: '$799/month', rating: 4.8 },
      { name: 'Quantum Cloud Infrastructure 2041', href: '/quantum-cloud-infrastructure-2041', price: '$1,299/month', rating: 4.9 }
    ] as FooterLink[]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI consciousness platforms',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-purple-500 to-pink-500',
    links: [
      { name: 'Quantum AI Consciousness Platform', href: '/quantum-ai-consciousness-platform', price: '$2,999/month', rating: 4.9 },
      { name: 'AI Autonomous Ecosystem Manager', href: '/ai-autonomous-ecosystem-manager', price: '$399/month', rating: 4.8 },
      { name: 'AI Predictive Maintenance Platform', href: '/ai-predictive-maintenance-platform', price: '$299/month', rating: 4.7 },
      { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine', price: '$199/month', rating: 4.8 },
      { name: 'AI Ethics & Governance Framework', href: '/ai-ethics-governance-framework', price: '$599/month', rating: 4.9 },
      { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant', price: '$799/month', rating: 4.8 },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', price: '$149/month', rating: 4.7 },
      { name: 'Autonomous Business Intelligence 2040', href: '/autonomous-business-intelligence-2040', price: '$1,499/month', rating: 4.9 }
    ] as FooterLink[]
  },
  {
    title: 'Quantum & Space Technology',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-cyan-500',
    links: [
      { name: 'Quantum Neural Ecosystem 2040', href: '/quantum-neural-ecosystem-2040', price: '$1,999/month', rating: 4.9 },
      { name: 'Space Resource Intelligence Platform', href: '/space-resource-intelligence-platform', price: '$1,999/month', rating: 4.8 },
      { name: 'Quantum Cybersecurity Future 2040', href: '/quantum-cybersecurity-future-2040', price: '$899/month', rating: 4.8 },
      { name: 'Brain-Computer Interface 2040', href: '/brain-computer-interface-2040', price: '$3,999/month', rating: 4.9 },
      { name: 'Quantum Internet Security 2041', href: '/quantum-internet-security-2041', price: '$1,799/month', rating: 4.8 },
      { name: 'Quantum Cloud Infrastructure 2041', href: '/quantum-cloud-infrastructure-2041', price: '$1,299/month', rating: 4.9 },
      { name: 'Space Mining Operations', href: '/space-mining-operations', price: '$2,499/month', rating: 4.7 },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', price: '$1,799/month', rating: 4.8 }
    ] as FooterLink[]
  },
  {
    title: 'Business Solutions',
    description: 'Enterprise-grade business solutions',
    icon: <Building className="w-5 h-5 text-green-400" />,
    color: 'from-green-500 to-emerald-500',
    links: [
      { name: 'AI Customer Success 2041', href: '/ai-customer-success-2041', price: '$599/month', rating: 4.9 },
      { name: 'AI Sales Intelligence 2041', href: '/ai-sales-intelligence-2041', price: '$799/month', rating: 4.8 },
      { name: 'Enterprise Process Automation', href: '/enterprise-process-automation', price: '$899/month', rating: 4.7 },
      { name: 'Digital Transformation Consulting', href: '/digital-transformation-consulting', price: '$1,299/month', rating: 4.8 },
      { name: 'Cloud Infrastructure Solutions', href: '/cloud-infrastructure-solutions', price: '$699/month', rating: 4.8 },
      { name: 'Cybersecurity Services', href: '/cybersecurity-services', price: '$799/month', rating: 4.9 },
      { name: 'Data Analytics Platform', href: '/data-analytics-platform', price: '$499/month', rating: 4.7 },
      { name: 'API Management Suite', href: '/api-management-suite', price: '$399/month', rating: 4.8 }
    ] as FooterLink[]
  },
  {
    title: 'Research & Development',
    description: 'Cutting-edge research and development',
    icon: <FlaskConical className="w-5 h-5 text-orange-400" />,
    color: 'from-orange-500 to-red-500',
    links: [
      { name: 'AI Autonomous Research 2041', href: '/ai-autonomous-research-2041', price: '$2,499/month', rating: 4.9 },
      { name: 'Space Technology Research', href: '/space-technology-research', price: '$2,199/month', rating: 4.7 },
      { name: 'Biotechnology Innovation', href: '/biotechnology-innovation', price: '$1,599/month', rating: 4.8 },
      { name: 'Quantum Computing Research', href: '/quantum-computing-research', price: '$1,899/month', rating: 4.8 },
      { name: 'AI Ethics Research', href: '/ai-ethics-research', price: '$999/month', rating: 4.9 },
      { name: 'Neural Network Research', href: '/neural-network-research', price: '$1,299/month', rating: 4.7 },
      { name: 'Space Exploration Research', href: '/space-exploration-research', price: '$2,799/month', rating: 4.8 },
      { name: 'Consciousness Studies', href: '/consciousness-studies', price: '$1,999/month', rating: 4.9 }
    ] as FooterLink[]
  },
  {
    title: 'Company & Resources',
    description: 'About Zion Tech Group and resources',
    icon: <Target className="w-5 h-5 text-purple-400" />,
    color: 'from-orange-500 to-red-500',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Updates', href: '/news' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Support', href: '/support' }
    ] as FooterLink[]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  hours: 'Mon-Fri: 9AM-6PM EST',
  rating: '4.9/5 (500+ Reviews)',
  founded: '2020',
  employees: '50+',
  countries: '25+',
  customers: '1000+'
};
export default UltraAdvancedFuturisticFooter2041;