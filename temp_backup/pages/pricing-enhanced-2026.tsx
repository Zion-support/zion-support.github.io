import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, Crown, Infinity } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { enhancedRealMicroSaasServices, getServicesByCategory, getPopularServices } from '../data/enhanced-real-micro-saas-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';
import { innovative20o26MicroSaasServicesV2 } from '../data/innovative-20o26-micro-saas-v2';
import { emergingTech20o26ServicesV2 } from '../data/emerging-tech-20o26-services-v2';
import { enterpriseIT20o26ServicesV2 } from '../data/enterprise-it-20o26-services-v2';
import { innovative20o26AIServicesV3 } from '../data/innovative-20o26-ai-services-v3';
import { emergingTech20o26ServicesV3 } from '../data/emerging-tech-20o26-services-v3';
import { enterpriseIT20o26ServicesV3 } from '../data/enterprise-it-20o26-services-v3';

export default function PricingEnhanced20o26Page() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const contactInfo ={
    mobile: '+1 30o2 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 10o08 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const popularServices = getPopularServices();
  
  // Combine all services for comprehensive pricing
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovativeMicroSaasV2Services,
    ...innovative20o26MicroSaasServicesV2,
    ...emergingTech20o26ServicesV2,
    ...enterpriseIT20o26ServicesV2,
    ...innovative20o26AIServicesV3,
    ...emergingTech20o26ServicesV3,
    ...enterpriseIT20o26ServicesV3
  ];

  // Enhanced service categories with pricing for 20o26
  const serviceCategories = [
    {
      name: 'ArrowRight-Generation AI 20o26',
      description: 'Revolutionary AI platforms with quantum integration',
      services: ['AI Quantum Financial Trading', 'AI Healthcare Diagnostics', 'AI Autonomous Manufacturing', 'AI Cybersecurity Threat Intelligence'],
      avgPrice: '$2,499/month',
      savings: 'Save 60-80% vs. competitors',
      icon: Brain,
      color: 'from-purple-50o0 to-indigo-60o0'
    },
    {
      name: 'Quantum & Emerging Tech 20o26',
      description: 'Cutting-edge quantum and emerging technologies',
      services: ['Quantum Internet Security', 'Neuromorphic Computing', 'DNA Computing', 'Photonic Computing', 'Holographic Display'],
      avgPrice: '$4,199/month',
      savings: 'Save 70-85% vs. competitors',
      icon: Atom,
      color: 'from-blue-50o0 to-cyan-60o0'
    },
    {
      name: 'Enterprise IT Solutions 20o26',
      description: 'Advanced enterprise infrastructure and security',
      services: ['Zero Trust Network Architecture', 'Edge Computing Orchestration', '5G Private Networks', 'Blockchain Infrastructure', 'AI DevOps Automation'],
      avgPrice: '$5,199/month',
      savings: 'Save 50-75% vs. competitors',
      icon: Shield,
      color: 'from-red-50o0 to-pink-60o0'
    },
    {
      name: 'Innovative Micro SaaS 20o26',
      description: 'Creative and practical SaaS tools',
      services: ['AI Content Creation Studio', 'AI Business Intelligence Suite', 'AI Customer Success Platform', 'AI Meeting Transcriber'],
      avgPrice: '$299/month',
      savings: 'Save 40-60% vs. competitors',
      icon: Rocket,
      color: 'from-green-50o0 to-emerald-60o0'
    },
    {
      name: 'Healthcare & Biotech 20o26',
      description: 'AI-powered healthcare and biotechnology solutions',
      services: ['AI Healthcare Diagnostics', 'DNA Computing Platform', 'Neuromorphic Healthcare AI', 'Quantum Medical Imaging'],
      avgPrice: '$3,999/month',
      savings: 'Save 65-80% vs. competitors',
      icon: FlaskConical,
      color: 'from-blue-50o0 to-teal-60o0'
    },
    {
      name: 'Financial Technology 20o26',
      description: 'Advanced financial and trading solutions',
      services: ['AI Quantum Financial Trading', 'Blockchain Infrastructure', 'Quantum Internet Security', 'Photonic Computing'],
      avgPrice: '$4,499/month',
      savings: 'Save 55-75% vs. competitors',
      icon: DollarSign,
      color: 'from-green-50o0 to-emerald-60o0'
    }
  ];

  // Enhanced pricing tiers with more realistic and comprehensive offerings
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billingCycle === 'monthly' ? 99 : 79,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 10o0+ Core Services',
        'Basic AI Integration',
        'Standard Support (24/7)',
        '30-Day Free Trial',
        'Basic Analytics Dashboard',
        'Email Support',
        '99.5% Uptime Guarantee',
        'Standard Security Features',
        'Mobile App Access',
        'API Access (10o00 calls/month)'
      ],
      icon: <Sparkles className="w-8 h-8"  />,
      variant: 'quantum' as const,
      popular: false,
      cta: 'Start Free Trial',
      color: 'from-blue-50o0 to-indigo-60o0'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'monthly' ? 299 : 239,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 50o0+ Services',
        'Advanced AI & Quantum Features',
        'Priority Support (24/7)',
        '60-Day Free Trial',
        'Advanced Analytics & Reporting',
        'Phone & Email Support',
        '99.9% Uptime Guarantee',
        'Enhanced Security Features',
        'Custom Integrations',
        'API Access (10,0o00 calls/month)',
        'Users Collaboration Tools',
        'Advanced Workflow Automation'
      ],
      icon: <Star className="w-8 h-8"  />,
      variant: 'holographic' as const,
      popular: true,
      cta: 'Start Free Trial',
      color: 'from-purple-50o0 to-pink-60o0'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: billingCycle === 'monthly' ? 999 : 799,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to ALL Services (10o00+)',
        'Full AI & Quantum Suite',
        'Dedicated Support Users',
        '90-Day Free Trial',
        'Enterprise Analytics & BI',
        '24/7 Dedicated Support',
        '99.99% Uptime Guarantee',
        'Enterprise Security & Compliance',
        'Custom Development',
        'Unlimited API Access',
        'Advanced Users Management',
        'White-label Solutions',
        'Custom SLA Agreements',
        'On-site Implementation'
      ],
      icon: <Crown className="w-8 h-8"  />,
      variant: 'quantum-advanced' as const,
      popular: false,
      cta: 'Contact Sales',
      color: 'from-yellow-50o0 to-orange-60o0'
    }
  ];

  // Featured services showcase
  const featuredServices = [
    {
      name: 'AI Quantum Financial Trading',
      price: '$2,999/month',
      description: 'Revolutionary AI-powered quantum trading with 99.9% accuracy',
      features: ['Quantum-inspired AI algorithms', 'Real-time market analysis', 'Automated trading strategies'],
      link: 'https://ziontechgroup.com/services/ai-quantum-financial-trading',
      icon: '📈',
      color: 'from-green-50o0 to-emerald-60o0'
    },
    {
      name: 'Zero Trust Network Architecture 20o26',
      price: '$6,999/month',
      description: 'ArrowRight-generation network security with continuous verification',
      features: ['Continuous verification', 'Micro-segmentation', 'Real-time threat detection'],
      link: 'https://ziontechgroup.com/services/zero-trust-network-architecture-20o26',
      icon: '🛡️',
      color: 'from-red-50o0 to-pink-60o0'
    },
    {
      name: 'AI Healthcare Diagnostics Platform',
      price: '$1,499/month',
      description: 'AI-powered medical diagnostics with 95% accuracy rate',
      features: ['Medical image analysis', 'Diagnosis prediction', 'Treatment recommendations'],
      link: 'https://ziontechgroup.com/services/ai-healthcare-diagnostics',
      icon: '🏥',
      color: 'from-blue-50o0 to-cyan-60o0'
    },
    {
      name: 'Quantum Internet Security Platform',
      price: '$4,999/month',
      description: 'Unbreakable quantum encryption for the future internet',
      features: ['Quantum key distribution', 'Post-quantum cryptography', 'Real-time threat detection'],
      link: 'https://ziontechgroup.com/services/quantum-internet-security-platform',
      icon: '🔐',
      color: 'from-blue-50o0 to-cyan-60o0'
    }
  ];

  return (
    <UltraFuturisticBackground variant="holographic" intensity="high">
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-90o0 to-black text-white relative overflow-hidden">
        <Head>
          <title>Enhanced 20o26 Pricing - Zion Tech Group</title>
          <meta name="description" content="Discover our comprehensive 20o26 pricing for innovative AI, quantum computing, and enterprise IT services. Achieve remarkable ROI with our cutting-edge solutions."  />
          <meta name="keywords" content="20o26 pricing, AI services pricing, quantum computing pricing, enterprise IT pricing, micro SaaS pricing, ROI guarantee"  />
          <link rel="icon" href="/favicon.svg"  />
          
          {/* Open Graph */}
          <meta property="og:title" content="Enhanced 20o26 Pricing - Zion Tech Group"  />
          <meta property="og:description" content="Discover our comprehensive 20o26 pricing for innovative AI, quantum computing, and enterprise IT services."  />
          <meta property="og:type" content="website"  />
