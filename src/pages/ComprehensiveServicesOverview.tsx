import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Brain, 
  Shield, 
  Search, 
  DollarSign, 
  Heart, 
  Cpu, 
  Zap, 
  BookOpen, 
  GraduationCap, 
  FileText,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Globe,
  Rocket,
  Target,
  Award,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Eye,
  BarChart3,
  Calculator,
  Crown,
  Building,
  Gauge,
  Activity,
  Network,
  Leaf,
  Database,
  Cloud,
  Lock,
  Scale,
  Stethoscope,
  Car,
  Building2,
  Flask,
  Rocket as RocketIcon,
  Lock as LockIcon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Network as NetworkIcon,
  Database as DatabaseIcon,
  Zap as ZapIcon,
  Shield as ShieldIcon,
  Heart as HeartIcon,
  BookOpen as BookOpenIcon,
  GraduationCap as GraduationCapIcon,
  FileText as FileTextIcon,
  Sparkles as SparklesIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Users as UsersIcon,
  Target as TargetIcon,
  Award as AwardIcon,
  Lightbulb as LightbulbIcon,
  Crown as CrownIcon,
  Building as BuildingIcon,
  Gauge as GaugeIcon,
  Activity as ActivityIcon,
  Network as NetworkIcon,
  Leaf as LeafIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  Scale as ScaleIcon,
  Stethoscope as StethoscopeIcon,
  Car as CarIcon,
  Building2 as Building2Icon,
  Flask as FlaskIcon,
  Rocket as RocketIconIcon
} from 'lucide-react';
import { ENHANCED_INNOVATIVE_SERVICES } from '@/data/enhancedInnovativeServices';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '@/data/innovativeMicroSaasServices';
import { motion } from 'framer-motion';
import EnhancedSEO from '@/components/EnhancedSEO';
// Combine all services
const ALL_SERVICES = [
  ...ENHANCED_INNOVATIVE_SERVICES,
  ...COMPREHENSIVE_SERVICES,
  ...INNOVATIVE_MICRO_SAAS_SERVICES
] as any[];
const categoryIcons = {
  'AI & Legal Tech': FileText,
  'AI & FinTech': DollarSign,
  'AI & Healthcare': Heart,
  'Cybersecurity & Quantum': Shield,
  'AI & Supply Chain': Building,
  'AI & Energy': Zap,
  'AI & Customer Experience': Users,
  'Quantum & AI': Cpu,
  'AI & Data Governance': Database,
  'AI & HR Tech': Users,
  'AI & Machine Learning': Brain,
  'AI & Business Intelligence': BarChart3,
  'AI & Marketing Automation': Target,
  'AI & CRM': Users,
  'AI & ERP': Building,
  'AI & Project Management': Code,
  'AI & Autonomous Systems': Bot,
  'AI & Research': Brain,
  'AI & Content Generation': FileText,
  'AI & Voice Technology': Smartphone,
  'AI & Video Generation': Eye,
  'AI & Threat Intelligence': Shield,
  'AI & Cloud Management': Cloud,
  'AI & DevOps': Code
};
const categoryColors = {
  'AI & Legal Tech': 'from-blue-500 to-indigo-500',
  'AI & FinTech': 'from-green-500 to-emerald-500',
  'AI & Healthcare': 'from-red-500 to-pink-500',
  'Cybersecurity & Quantum': 'from-purple-500 to-violet-500',
  'AI & Supply Chain': 'from-orange-500 to-red-500',
  'AI & Energy': 'from-yellow-500 to-orange-500',
  'AI & Customer Experience': 'from-pink-500 to-rose-500',
  'Quantum & AI': 'from-cyan-500 to-blue-500',
  'AI & Data Governance': 'from-indigo-500 to-purple-500',
  'AI & HR Tech': 'from-teal-500 to-green-500',
  'AI & Machine Learning': 'from-purple-500 to-pink-500',
  'AI & Business Intelligence': 'from-indigo-500 to-purple-500',
  'AI & Marketing Automation': 'from-pink-500 to-rose-500',
  'AI & CRM': 'from-blue-500 to-cyan-500',
  'AI & ERP': 'from-green-500 to-emerald-500',
  'AI & Project Management': 'from-orange-500 to-red-500',
  'AI & Autonomous Systems': 'from-purple-500 to-violet-500',
  'AI & Research': 'from-cyan-500 to-blue-500',
  'AI & Content Generation': 'from-indigo-500 to-purple-500',
  'AI & Voice Technology': 'from-teal-500 to-green-500',
  'AI & Video Generation': 'from-pink-500 to-rose-500',
  'AI & Threat Intelligence': 'from-red-500 to-pink-500',
  'AI & Cloud Management': 'from-blue-500 to-cyan-500',
  'AI & DevOps': 'from-orange-500 to-red-500'
};
const supportLevelColors = {
  'premium': 'bg-gradient-to-r from-blue-500 to-cyan-500',
  'enterprise': 'bg-gradient-to-r from-purple-500 to-pink-500',
  'basic': 'bg-gradient-to-r from-green-500 to-emerald-500'
};
export default function ComprehensiveServicesOverview() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [selectedSupportLevel, setSelectedSupportLevel] = useState<string>('all');
  const filteredServices = useMemo(() => {
    let filtered = ALL_SERVICES;
    // Search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery) ||
        (service.tags && service.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
      );
    }
    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    // Price range filter
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'low':
          filtered = filtered.filter(service => {
            const price = typeof service.price === 'number' ? service.price : service.price?.monthly || 0;
            return price <= 1000;
          });
          break;
        case 'medium':
          filtered = filtered.filter(service => {
            const price = typeof service.price === 'number' ? service.price : service.price?.monthly || 0;
            return price > 1000 && price <= 3000;
          });
          break;
        case 'high':
          filtered = filtered.filter(service => {
            const price = typeof service.price === 'number' ? service.price : service.price?.monthly || 0;
            return price > 3000;
          });
          break;
      }
    }
    // Support level filter
    if (selectedSupportLevel !== 'all') {
      filtered = filtered.filter(service => service.supportLevel === selectedSupportLevel);
    }
    return filtered;
  }, [searchQuery, selectedCategory, priceRange, selectedSupportLevel]);
  const categories = Array.from(new Set(ALL_SERVICES.map(service => service.category))).sort();
  const formatPrice = (price: any) => {
    if (typeof price === 'number') {
      if (price >= 1000) {
        return `$${(price / 1000).toFixed(1)}k`;
      }
      return `$${price}`;
    }
    if (price?.monthly) {
      if (price.monthly >= 1000) {
        return `$${(price.monthly / 1000).toFixed(1)}k`;
      }
      return `$${price.monthly}`;
    }
    return 'Contact Us';
  };
  const getServicePrice = (service: any) => {
    if (typeof service.price === 'number') {
      return service.price;
    }
    return service.price?.monthly || 0;
  };
