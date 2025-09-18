import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Shield, Atom, BookOpen,
  DollarSign, BarChart3, Star, Sparkles, 
  Grid, Globe, Cpu, Database, Cloud, Palette,
  HelpCircle, FileText, Video, Building, MessageCircle,
  Zap, Target, Users, Award, TrendingUp, Lock, Clock, Calendar
} from 'lucide-react';

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
  color?: string;
}

function normalizeHref(href: string): string {
  if (!href) return href;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }
  if (!href.startsWith('/')) return href;
  const hasQueryOrHash = href.includes('?') || href.includes('#');
  if (hasQueryOrHash) return href;
  return href.endsWith('/') ? href : href + '/';
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

function normalizeHref(href: string): string {
  if (!href) return href;
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }
  if (!href.startsWith('/')) return href;
  const hasQueryOrHash = href.includes('?') || href.includes('#');
  if (hasQueryOrHash) return href;
  return href.endsWith('/') ? href : href + '/';
}

const navigationItems: NavigationItem[] = [
  {
    name: 'AI & Consciousness',
    href: '/ai-consciousness',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'Featured',
    featured: true,
    category: 'AI Services',
    children: [
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', description: 'Predict and prevent churn with AI', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Supercharge sales with AI automation', featured: true },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'Advanced emotional AI training', featured: true },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Autonomous research and analysis', featured: true },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Predictive maintenance with AI', featured: true },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content with AI', featured: true },
      { name: 'AI Autonomous Operations', href: '/autonomous-business-operations-platform', description: 'Fully autonomous business operations', featured: true },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'AI ethics and governance framework', featured: true }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Breakthrough quantum and space technologies',
    badge: 'Quantum',
    featured: true,
    category: 'Quantum Technology',
    children: [
      { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks', featured: true },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum financial optimization', featured: true },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Quantum materials research', featured: true },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Quantum-secured communications', featured: true },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum cloud computing', featured: true },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum biological computing', featured: true },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Quantum threat protection', featured: true },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Quantum energy optimization', featured: true }
    ]
  },
  {
    name: 'Enterprise IT Solutions',
    href: '/enterprise-solutions',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure solutions',
    badge: 'Enterprise',
    category: 'IT Infrastructure',
    children: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Quantum-secured cloud platform', featured: true },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'AI-powered IT operations', featured: true },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform', description: 'Edge computing management', featured: true },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain platform', featured: true },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', description: 'Intelligent DevOps automation', featured: true },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform', description: 'Zero trust security framework', featured: true },
      { name: 'AI Cybersecurity', href: '/ai-powered-cybersecurity', description: 'AI-powered threat protection', featured: true },
      { name: 'IT Asset Management', href: '/ai-powered-it-asset-management', description: 'Intelligent asset management', featured: true }
    ]
  },
  {
    name: 'Micro SAAS Services',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'New',
    category: 'Business Solutions',
    children: [
      { name: 'AI Content Generator', href: '/ai-content-generator', description: 'AI-powered content creation', featured: true },
      { name: 'AI Code Review', href: '/ai-code-review', description: 'Intelligent code analysis', featured: true },
      { name: 'AI HR Analytics', href: '/intelligent-hr-analytics-platform', description: 'HR intelligence platform', featured: true },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', description: 'Intelligent financial planning', featured: true },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', description: 'AI supply chain optimization', featured: true },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform', description: 'Automated content management', featured: true },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite', description: 'Intelligent CRM platform', featured: true },
      { name: 'SEO Automation Suite', href: '/seo-automation-suite', description: 'Automated SEO optimization', featured: true }
    ]
  },
  {
    name: 'Space Technology',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Revolutionary space exploration and resource management',
    badge: 'Space',
    category: 'Space Technology',
    children: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Space resource extraction', featured: true },
      { name: 'AI-Powered Space Tech', href: '/ai-powered-space-technology', description: 'AI space technology platform', featured: true },
      { name: 'Space Intelligence 2040', href: '/space-resource-intelligence-2040', description: 'Future space intelligence', featured: true },
      { name: 'Autonomous Space Operations', href: '/autonomous-space-operations-center', description: 'AI space mission control', featured: true },
      { name: 'Space Resource Intelligence', href: '/space-resource-intelligence-2040', description: 'Space resource analytics', featured: true }
    ]
  },
  {
    name: 'Specialized Solutions',
    href: '/specialized-solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific and specialized services',
    badge: 'Specialized',
    category: 'Specialized Services',
    children: [
      { name: 'Browser Automation Cloud', href: '/browser-automation-cloud', description: 'Scalable browser automation', featured: true },
      { name: 'Secrets Rotation Automation', href: '/secrets-rotation-automation', description: 'Automated security management', featured: true },
      { name: 'API Performance Testing', href: '/api-performance-testing', description: 'API performance optimization', featured: true },
      { name: 'Sales Copilot', href: '/sales-copilot', description: 'AI-powered sales assistance', featured: true },
      { name: 'Serverless Cron Manager', href: '/serverless-cron-manager', description: 'Serverless task scheduling', featured: true },
      { name: 'SSO in a Box', href: '/sso-in-a-box', description: 'Single sign-on solution', featured: true },
      { name: 'Status Pages & SLO', href: '/status-pages-slo', description: 'Service monitoring and status', featured: true },
      { name: 'Synthetic Monitor Recorder', href: '/synthetic-monitor-recorder', description: 'Automated monitoring', featured: true }
    ]
  },
  {
    name: 'Showcase & Pricing',
    href: '/comprehensive-services-showcase-2025',
    icon: <Star className="w-5 h-5" />,
    description: 'Complete portfolio and pricing information',
    badge: 'Showcase',
    featured: true,
    category: 'Portfolio',
    children: [
      { name: 'All Services Portfolio', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio', featured: true },
      { name: 'Ultimate 2035 Futuristic', href: '/ultimate-2035-futuristic-services-showcase', description: 'Revolutionary future technology', featured: true },
      { name: 'Ultimate 2025 Micro SAAS', href: '/ultimate-2025-micro-saas-showcase', description: 'Latest innovative services', featured: true },
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions', featured: true },
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services', featured: true },
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection', featured: true },
      { name: 'Market Pricing', href: '/market-pricing', description: 'Average market prices & references', featured: true },
      { name: 'Pricing Comparison', href: '/pricing', description: 'Service pricing comparison', featured: true }
    ]
  }
];

const UltraFuturisticNavigation2045: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">UltraFuturisticNavigation2045</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default UltraFuturisticNavigation2045;
