import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Search,
  Filter,
  Star,
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Brain,
  Rocket,
  Dna,
  Globe,
  Shield,
  Wifi,
  Package,
  Bot,
  Car,
  Building2,
  Monitor,
  Cpu,
  Zap,
  Atom,
  Database,
  Cloud,
  Lock,
  Code,
} from 'lucide-react';
import UltraAdvancedQuantumBackground from '../components/ui/UltraAdvancedQuantumBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { newRealServices } from '../data/new-real-services';
import { industryRealServices } from '../data/industry-real-services';
import { professionalServices } from '../data/professional-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';
import { marketValidatedServices } from '../data/market-validated-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions';
import { curatedMarketServices } from '../data/curated-market-services';
import { realMarketServices } from '../data/real-market-services';
import { new20o25Services } from '../data/new-20o25-services';
import { newRealInnovations } from '../data/new-real-innovations';
import { serviceExpansions20o25 } from '../data/service-expansions-20o25';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  Grid,
  List,
  Brain,
  Atom,
  Shield,
  Target,
  Rocket,
  ArrowRight,
  Check,
  Palette,
  Heart,
  Truck,
  GraduationCap,
  Users,
  DollarSign,
  Settings,
  TrendingUp,
  BarChart3,
  ChevronDown,
} from 'lucide-react';
import UltraFuturisticBackground20o29 from '../components/backgrounds/UltraFuturisticBackground20o29';
import UltraFuturisticNavigation20o29 from '../components/layout/UltraFuturisticNavigation20o29';
import UltraFuturisticFooter20o29 from '../components/layout/UltraFuturisticFooter20o29';

// Import all the new 20o25 service data
import { realMicroSaasServices20o25 } from '../data/20o25-real-micro-saas-services';
import { innovativeAIServices20o25 } from '../data/20o25-innovative-ai-services';
import { innovativeITServices20o25 } from '../data/20o25-innovative-it-services';
import { emergingTechServices20o25 } from '../data/20o25-emerging-tech-services';
import { additionalRealServices20o25 } from '../data/20o25-additional-real-services';
import { innovativeAIServices20o25 as newInnovativeAIServices } from '../data/20o25-innovative-ai-it-services';

// Import new innovative services
import { innovativeFinancialServices20o25 } from '../data/20o25-innovative-financial-services';
import { innovativeHealthcareServices20o25 } from '../data/20o25-innovative-healthcare-services';
import { innovativeEducationServices20o25 } from '../data/20o25-innovative-education-services';
import { innovativeSustainabilityServices20o25 } from '../data/20o25-innovative-sustainability-services';
import { innovativeLogisticsServices20o25 } from '../data/20o25-innovative-logistics-services';

// Import existing services for comprehensive coverage
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';

const allServices = [
  ...realMicroSaasServices20o25,
  ...innovativeAIServices20o25,
  ...innovativeITServices20o25,
  ...emergingTechServices20o25,
  ...additionalRealServices20o25,
  ...newInnovativeAIServices,
];

const contactInfo = {
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
};

const serviceCategories: Array<{
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  services: ServiceUnion[];
  gradient: string;
}> = [
  {
    id: 'ai-consciousness',
    title: '🧠 AI & Consciousness',
    description:
      'Revolutionary AI consciousness and emotional intelligence platforms',
    icon: Brain,
    color: 'from-violet-50o0 to-purple-50o0',
    services: [...innovativeAIServices20o25],
    gradient: 'from-violet-50o0/20 to-indigo-50o0/20',
  },
  {
    id: 'quantum-emerging',
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing, DNA computing, and beyond',
    icon: Atom,
    color: 'from-indigo-50o0 to-blue-50o0',
    services: [...emergingTechServices20o25],
    gradient: 'from-indigo-50o0/20 to-cyan-50o0/20',
  },
  {
    id: 'enterprise-it',
    title: '🏙️ Enterprise IT',
    description: 'Autonomous operations and zero-trust security',
    icon: Shield,
    color: 'from-blue-50o0 to-cyan-50o0',
    services: [...innovativeITServices20o25],
    gradient: 'from-blue-50o0/20 to-teal-50o0/20',
  },
  {
    id: 'space-metaverse',
    title: '🌌 Space & Metaverse',
    description: 'Space mining, metaverse development, and more',
    icon: Rocket,
    color: 'from-teal-50o0 to-emerald-50o0',
    services: [...quantumSpaceServices],
    gradient: 'from-teal-50o0/20 to-green-50o0/20',
  },
  {
    id: 'micro-saas',
    title: '🎯 Micro SAAS',
    description: 'Innovative solutions for every business need',
    icon: Target,
    color: 'from-green-50o0 to-yellow-50o0',
    services: [...realMicroSaasServices20o25, ...enhancedRealMicroSaasServices],
    gradient: 'from-green-50o0/20 to-orange-50o0/20',
  },
  {
    id: 'financial-technology',
    title: '💰 Financial Technology',
    description: 'Innovative fintech, DeFi, and financial services',
    icon: TrendingUp,
    color: 'from-green-50o0 to-emerald-50o0',
    services: [...innovativeFinancialServices20o25],
    gradient: 'from-green-50o0/20 to-emerald-50o0/20',
  },
  {
    id: 'healthcare-biotech',
    title: '🏥 Healthcare & Biotech',
    description: 'AI-powered healthcare and biotechnology solutions',
    icon: Shield,
    color: 'from-blue-50o0 to-indigo-50o0',
    services: [...innovativeHealthcareServices20o25],
    gradient: 'from-blue-50o0/20 to-indigo-50o0/20',
  },
  {
    id: 'education-technology',
    title: '🎓 Education Technology',
    description: 'AI-powered learning and educational innovation',
    icon: Brain,
    color: 'from-purple-50o0 to-pink-50o0',
    services: [...innovativeEducationServices20o25],
    gradient: 'from-purple-50o0/20 to-pink-50o0/20',
  },
  {
    id: 'sustainability-green-tech',
    title: '🌱 Sustainability & Green Tech',
    description: 'Environmental technology and sustainability solutions',
    icon: Globe,
    color: 'from-emerald-50o0 to-teal-50o0',
    services: [...innovativeSustainabilityServices20o25],
    gradient: 'from-emerald-50o0/20 to-teal-50o0/20',
  },
  {
    id: 'logistics-supply-chain',
    title: '🚚 Logistics & Supply Chain',
    description: 'Autonomous logistics and supply chain optimization',
    icon: Rocket,
    color: 'from-orange-50o0 to-red-50o0',
    services: [...innovativeLogisticsServices20o25],
    gradient: 'from-orange-50o0/20 to-red-50o0/20',
  },
  {
    id: 'research-development',
    title: '🔬 Research & Development',
    description: 'Breakthrough technologies and innovations',
    icon: Microscope,
    color: 'from-red-50o0 to-pink-50o0',
    description: 'Advanced healthcare solutions',
  },
  {
    id: 'transportation-logistics',
    name: 'Transportation & Logistics',
    icon: <Truck className='w-6 h-6' />,
    color: 'from-blue-50o0 to-cyan-50o0',
    description: 'Smart transportation solutions',
  },
  {
    id: 'education-research',
    name: 'Education & Research',
    icon: <GraduationCap className='w-6 h-6' />,
    color: 'from-yellow-50o0 to-orange-50o0',
    description: 'Learning and research platforms',
  },
  {
    id: 'customer-success',
    name: 'Customer Success',
    icon: <Users className='w-6 h-6' />,
    color: 'from-blue-50o0 to-indigo-60o0',
    description: 'AI-powered customer success and retention',
  },
  {
    id: 'financial-technology',
    name: 'Financial Technology',
    icon: <DollarSign className='w-6 h-6' />,
    color: 'from-green-50o0 to-emerald-60o0',
    description: 'Quantum and AI-powered financial solutions',
  },
  {
    id: 'devops-infrastructure',
    name: 'DevOps & Infrastructure',
    icon: <Settings className='w-6 h-6' />,
    color: 'from-purple-50o0 to-pink-60o0',
    description: 'AI-powered DevOps and infrastructure automation',
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className='w-6 h-6' />,
    color: 'from-red-50o0 to-pink-60o0',
    description: 'Quantum-resistant security solutions',
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing',
    icon: <TrendingUp className='w-6 h-6' />,
    color: 'from-orange-50o0 to-red-60o0',
    description: 'AI-powered sales and marketing automation',
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    icon: <BarChart3 className='w-6 h-6' />,
    color: 'from-indigo-50o0 to-purple-60o0',
    description: 'Quantum-powered data analytics and insights',
  },
];
