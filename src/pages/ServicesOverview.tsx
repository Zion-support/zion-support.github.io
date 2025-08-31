<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Server, 
  ShoppingCart, 
  Shield, 
<<<<<<< HEAD
=======
import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
<<<<<<< HEAD
import { Search,
  Filter,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Zap,
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Eye,
  PenTool,
  Analytics,
  MessageSquare,
  Calendar,
  DollarSign,
  Heart,
  Smile,
  ThumbsUp,
  UserCheck,
  Monitor,
  Smartphone,
  AlertTriangle,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Cpu,
  Lock,
  Database,
  Network,
=======
  BarChart3, 
  Cloud, 
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  Rocket,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Target,
  Globe,
  Lock,
  Cpu,
  Heart,
  Atom,
  MessageCircle,
  BookOpen,
  Workflow,
  Network,
  Phone,
  Mail,
<<<<<<< HEAD
  MapPin,
  Search,
  FileText,
<<<<<<< HEAD
  ShoppingCart
=======
  MapPin
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
} from 'lucide-react';
import { SEO } from '../components/SEO';
import INNOVATIVE_SERVICES_2025 from '../data/innovativeServices2025';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  marketPrice: string;
  roi: string;
  innovationLevel: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const ServicesOverview: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    {
      id: 'AI Solutions',
      name: 'AI Solutions',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Cutting-edge artificial intelligence services for business transformation',
      count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AI Solutions').length
    },
    {
<<<<<<< HEAD
      icon: Heart,
      title: "AI Customer Experience Analytics",
      description: "Transform your customer experience with AI-powered analytics. Understand, predict, and optimize every customer interaction.",
      features: ["Sentiment Analysis", "Customer Journey Mapping", "Predictive Behavior", "Personalization Engine"],
      pricing: "Starting at $149/month",
      href: "/services/ai-customer-experience-analytics",
      benefits: ["45% increase in customer satisfaction", "60% reduction in churn", "300% improvement in CLV"]
    },
    {
      icon: AlertTriangle,
      title: "AI Financial Risk Management",
      description: "Transform your financial risk management with AI-powered analytics. Monitor, predict, and mitigate risks effectively.",
      features: ["Risk Assessment", "Market Monitoring", "Predictive Modeling", "Portfolio Analysis"],
      pricing: "Starting at $299/month",
      href: "/services/ai-financial-risk-management",
      benefits: ["48-hour early risk detection", "35% reduction in losses", "40% cost savings"]
    },
    {
      icon: Brain,
      title: "AI Supply Chain Optimization",
      description: "Revolutionize your supply chain with AI-powered optimization and predictive analytics.",
      features: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Assessment"],
      pricing: "Starting at $199/month",
      href: "/services/ai-supply-chain-optimization",
      benefits: ["30% cost reduction", "95% forecast accuracy", "40% efficiency increase"]
    },
    {
      icon: Shield,
      title: "AI Cybersecurity Platform",
      description: "Advanced AI-powered cybersecurity platform for threat detection and prevention.",
      features: ["Threat Detection", "Behavioral Analysis", "Incident Response", "Security Automation"],
      pricing: "Starting at $399/month",
      href: "/services/ai-cybersecurity-platform",
      benefits: ["99.9% threat blocking", "< 1 second response time", "AI-powered automation"]
    },
    {
      icon: Heart,
      title: "AI Healthcare Platform",
      description: "AI-powered healthcare solutions for diagnosis, treatment planning, and patient care optimization.",
      features: ["Medical Imaging", "Diagnostic Support", "Treatment Planning", "Patient Monitoring"],
      pricing: "Starting at $599/month",
      href: "/services/ai-healthcare-platform",
      benefits: ["95% diagnostic accuracy", "25% cost reduction", "HIPAA compliance"]
    }
=======
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  DollarSign,
  Users,
  Eye,
  ArrowUpRight,
  Grid,
  List,
  ChevronRight,
  ChevronDown,
  Info,
  Calendar,
  UserCheck,
  Globe,
  Layers,
  Activity,
  PieChart,
  BarChart,
  LineChart,
  TrendingDown,
  Zap,
  Target,
  Award,
  Clock,
  Users,
  Shield,
  Lock,
  Key,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info as InfoIcon
import { SEO              } from '../components/SEO';
import { servicesCatalog              } from '../data/servicesCatalog';

// Enhanced category definitions with better organization
const serviceCategories = [
  {
    id: 'all',
    name: 'All Services',
    icon: Grid,
    color: 'from-blue-600 to-cyan-600',
    description: 'Complete portfolio of all services',
    count: 0
  },
  {
    id: 'Micro SaaS',
    name: 'Micro SaaS Solutions',
    icon: ShoppingCart,
    color: 'from-purple-600 to-pink-600',
    description: 'Scalable software-as-a-service solutions',
    count: 0
  },
  {
    id: 'IT Services',
    name: 'IT Services',
    icon: Server,
    color: 'from-green-600 to-emerald-600',
    description: 'Enterprise IT infrastructure and consulting',
    count: 0
  },
  {
    id: 'AI Solutions',
    name: 'AI Solutions',
    icon: Brain,
    color: 'from-indigo-600 to-purple-600',
    description: 'Advanced AI and machine learning solutions',
    count: 0
  },
  {
    id: 'Cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-600 to-pink-600',
    description: 'Security and compliance solutions',
    count: 0
  },
  {
    id: 'Cloud & DevOps',
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-blue-600 to-cyan-600',
    description: 'Cloud infrastructure and development operations',
    count: 0
  },
  {
    id: 'Emerging Tech',
    name: 'Emerging Technologies',
    icon: Sparkles,
    color: 'from-yellow-600 to-orange-600',
    description: 'Cutting-edge technologies and innovations',
    count: 0

];

// Enhanced service features display
const ServiceCard = ({ service, viewMode }: { service: anyanyanyanyanyanyanyanyanyanyanyanyany; viewMode: 'grid' | 'list' })              => {
  const [expanded, setExpanded] = useState(false);

  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    const cat = serviceCategories.find(c => c.id === category);
    return cat ? cat.icon : Grid;
  };
=======
import { Search, Filter, Star, TrendingUp, Clock, Users, DollarSign, Globe, Shield, Bot, Cloud, BarChart3, Workflow, FileText, Sparkles, Building, Car, Leaf, Zap, Home, Scale, GraduationCap, ShoppingCart, Hotel              } from 'lucide-react.ts';
import { SEO              } from '@/components/SEO';
import { enhancedServices2025              } from '../../data/enhanced-2025-services';
import { specializedIndustryServices              } from '../../data/specialized-industry-services';
import { allServices              } from '../../data/services';
import { Link              } from 'react-router-dom.ts';

export default function ServicesOverview(...args: any[]): any {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allAvailableServices = [
    ...enhancedServices2025,
    ...specializedIndustryServices,
    ...allServices
  ];
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'AI', name: 'AI & Machine Learning', icon: Bot },
    { id: 'IT', name: 'IT & Infrastructure', icon: Cloud },
    { id: 'Security', name: 'Security & Compliance', icon: Shield },
    { id: 'Analytics', name: 'Analytics & BI', icon: BarChart3 },
    { id: 'Automation', name: 'Automation', icon: Workflow },
    { id: 'Fintech', name: 'Fintech', icon: DollarSign },
    { id: 'Healthcare', name: 'Healthcare', icon: FileText },
    { id: 'Education', name: 'Education', icon: GraduationCap },
    { id: 'Marketing', name: 'Marketing', icon: ShoppingCart },
    { id: 'Development', name: 'Development', icon: Building },
    { id: 'SAAS', name: 'SAAS Solutions', icon: Cloud }
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  ];

  const itServices = [
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Comprehensive cloud infrastructure and DevOps automation services for modern applications.",
      features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code", "Monitoring & Logging"],
      pricing: "Starting at $150/hour",
      href: "/services/cloud-devops",
      benefits: ["Faster deployment cycles", "Improved reliability", "Cost optimization"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "End-to-end cybersecurity solutions to protect your digital assets and infrastructure.",
      features: ["Security Audits", "Penetration Testing", "Incident Response", "Security Training"],
      pricing: "Starting at $200/hour",
      href: "/services/cybersecurity",
      benefits: ["Comprehensive protection", "24/7 monitoring", "Compliance assurance"]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Data engineering, analytics, and business intelligence solutions for data-driven decisions.",
      features: ["Data Engineering", "Business Intelligence", "Machine Learning", "Data Governance"],
      pricing: "Starting at $175/hour",
      href: "/services/data-analytics",
      benefits: ["Actionable insights", "Improved decision making", "Operational efficiency"]
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Design, implementation, and management of enterprise network infrastructure.",
      features: ["Network Design", "Implementation", "Management", "Security"],
      pricing: "Starting at $125/hour",
      href: "/services/network-infrastructure",
      benefits: ["Reliable connectivity", "Scalable architecture", "Performance optimization"]
    }
  ];

  const microSaaSServices = [
    {
      icon: Code,
      title: "Micro CRM Platform",
      description: "Lightweight, scalable CRM solution designed for small to medium businesses.",
      features: ["Contact Management", "Sales Pipeline", "Email Integration", "Analytics"],
      pricing: "Starting at $49/month",
      href: "/services/micro-crm",
      benefits: ["Easy to use", "Affordable pricing", "Quick implementation"]
    },
    {
      icon: Search,
      title: "AI-Powered SEO Platform",
      description: "Intelligent SEO optimization platform with AI-driven insights and recommendations.",
      features: ["Keyword Research", "Content Optimization", "Ranking Analysis", "Competitive Intelligence"],
      pricing: "Starting at $79/month",
      href: "/services/ai-powered-seo",
      benefits: ["Higher search rankings", "Increased organic traffic", "Better ROI"]
    },
    {
      icon: FileText,
      title: "LLM Content Studio",
      description: "AI-powered content creation and optimization platform for marketers and creators.",
      features: ["Content Generation", "SEO Optimization", "Brand Voice", "Performance Analytics"],
      pricing: "Starting at $89/month",
      href: "/services/llm-content-studio",
      benefits: ["Faster content creation", "Better quality", "SEO optimization"]
=======
      id: 'IT Services',
      name: 'IT Services',
      icon: Server,
      color: 'from-blue-600 to-cyan-600',
      description: 'Enterprise-grade IT infrastructure and digital transformation solutions',
      count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'IT Services').length
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
    },
    {
      id: 'Micro SaaS',
      name: 'Micro SaaS',
      icon: ShoppingCart,
      color: 'from-green-600 to-emerald-600',
      description: 'Scalable software-as-a-service solutions for specific business needs',
      count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Micro SaaS').length
    },
    {
      id: 'Cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Advanced security solutions and threat protection systems',
      count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Cybersecurity').length
    },
    {
      id: 'Emerging Tech',
      name: 'Emerging Tech',
      icon: Rocket,
      color: 'from-yellow-600 to-orange-600',
      description: 'Next-generation technologies including quantum computing and blockchain',
      count: INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Emerging Tech').length
    }
  ];

<<<<<<< HEAD
<<<<<<< HEAD
  const contactInfo = {
    phone: "+1 (302) 464-0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
=======
  const filteredServices = selectedCategory === 'all' 
    ? INNOVATIVE_SERVICES_2025 
    : INNOVATIVE_SERVICES_2025.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Solutions': return Brain;
      case 'IT Services': return Server;
      case 'Micro SaaS': return ShoppingCart;
      case 'Cybersecurity': return Shield;
      case 'Data Analytics': return BarChart3;
      case 'Cloud Services': return Cloud;
      case 'Emerging Tech': return Rocket;
      default: return Zap;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Solutions': return 'from-purple-600 to-pink-600';
      case 'IT Services': return 'from-blue-600 to-cyan-600';
      case 'Micro SaaS': return 'from-green-600 to-emerald-600';
      case 'Cybersecurity': return 'from-red-600 to-orange-600';
      case 'Data Analytics': return 'from-indigo-600 to-purple-600';
      case 'Cloud Services': return 'from-cyan-600 to-blue-600';
      case 'Emerging Tech': return 'from-yellow-600 to-orange-600';
      default: return 'from-gray-600 to-slate-600';
    }
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
  };
=======
<<<<<<< HEAD
          {/* Features */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Key Features
            </h4>
            <div className="space-y-2">
              {service.features.slice(0, 3).map((feature: anyanyanyanyanyanyanyanyanyanyanyanyanystring, idx: number)              => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
              {service.features.length > 3 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"

                  {expanded ? 'Show less' : `+${service.features.length - 3} more features`}
                  {expanded ? <ChevronDown className="w-4 h-4 ml-1" /> : <ChevronRight className="w-4 h-4 ml-1" />}
                </button>
              )}
              {expanded && service.features.slice(3).map((feature: anyanyanyanyanyanyanyanyanyanyanyanyanystring, idx: number)              => (
                <div key={idx + 3} className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={service.href}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-center block hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg flex items-center justify-center"

            {service.ctaLabel}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    );

  // List view
  return (
=======
  const renderServiceCard = (service: anyanyanyanyanyanyanyanyanyanyanyanyany)              => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    <motion.div
      key={service.id}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
<<<<<<< HEAD
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"

      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        {/* Service Info */}
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <div className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
              {React.createElement(getCategoryIcon(service.category), { className: 'w-5 h-5 text-white' })}
            </div>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {service.category}
=======
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl mb-2">{service.icon}</div>
        <div className="flex gap-2">
          {service.isPopular && (
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs px-3 py-1 rounded-full">
              Popular
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </span>
          )}
          {service.isNew && (
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-3 py-1 rounded-full">
              New
            </span>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
      {service.tagline && (
        <p className="text-cyan-400 text-sm mb-2 italic">"{service.tagline}"</p>
      )}
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
      
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-cyan-400">
            ${service.pricing?.starter || service.price?.replace(/[^0-9]/g, '') || 'Contact'}
          </span>
          <span className="text-gray-400 text-sm">
            {service.pricing?.period || '/month'}
          </span>
        </div>
        {service.pricing?.professional && (
          <div className="text-sm text-gray-400 mt-1">
            Pro: ${service.pricing.professional}/month | Enterprise: ${service.pricing.enterprise}/month
          </div>
<<<<<<< HEAD
          <a
            href={service.href}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"

            {service.ctaLabel}
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
=======
        )}
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
        <ul className="space-y-1">
          {(service.features || []).slice(0, 4).map((feature: anyanyanyanyanyanyanyanyanyanyanyanyanystring, index: number)              => (
            <li key={index} className="text-gray-300 text-xs flex items-center">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2 text-sm">Benefits:</h4>
        <ul className="space-y-1">
          {(service.benefits || []).slice(0, 3).map((benefit: anyanyanyanyanyanyanyanyanyanyanyanyanystring, index: number)              => (
            <li key={index} className="text-gray-300 text-xs flex items-center">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {service.marketPosition && (
        <div className="mb-4 p-3 bg-white/5 rounded-lg">
          <p className="text-gray-300 text-xs italic">"{service.marketPosition}"</p>
        </div>
      )}

      {service.roi && (
        <div className="mb-4 p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-400 text-xs font-semibold">ROI: {service.roi}</p>
        </div>
      )}

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {service.targetAudience?.slice(0, 3).map((audience: anyanyanyanyanyanyanyanyanyanyanyanyanystring, index: number)              => (
            <span key={index} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
              {audience}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link
          to={service.link || `/services/${service.id}`}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
        >
          Learn More →
        </Link>
        
        <div className="flex items-center space-x-2 text-xs text-gray-400">
          {service.trialDays && (
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {service.trialDays}d trial
            </span>
          )}
          {service.setupTime && (
            <span className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              {service.setupTime}
            </span>
          )}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        </div>
      </div>
    </motion.div>
  );
<<<<<<< HEAD
};

// Sidebar component for better navigation
const ServicesSidebar = ({
  selectedCategory,
  onCategoryChange,
  categoriesWithCounts
}: {
  selectedCategory: anyanyanyanyanyanyanyanyanyanyanyanyanystring;
  onCategoryChange: (category: string)              => void;
  categoriesWithCounts: anyanyanyanyanyanyanyanyanyanyanyanyanyany[];
})              => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Filter className="w-5 h-5 mr-2 text-blue-600" />
        Service Categories
      </h3>
      <div className="space-y-2">
        {categoriesWithCounts.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
              selectedCategory === category.id
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}

            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                {React.createElement(category.icon, { className: 'w-4 h-4 text-white' })}
              </div>
              <span className="font-medium">{category.name}</span>
            </div>
            <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Quick Stats</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center justify-between">
            <span>Total Services</span>
            <span className="font-semibold text-gray-900">
              {categoriesWithCounts.reduce((sum, cat) => sum + cat.count, 0)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Categories</span>
            <span className="font-semibold text-gray-900">{categoriesWithCounts.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ServicesOverview(...args: any[]): any {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<any>('grid');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Flatten all services from the catalog
  const allServices = useMemo(() => {
    return servicesCatalog.flatMap(category => category.items);
  }, []);

  // Calculate service counts for each category
  const categoriesWithCounts = useMemo(() => {
    return serviceCategories.map(cat => {
      const count = allServices.filter(service => {
        if (cat.id === 'all') return true;
        return service.category === cat.id;
      }).length;
      return { ...cat, count };
    });
  }, [allServices]);

  // Filter services based on search and category
  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allServices, searchQuery, selectedCategory]);
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Explore our comprehensive portfolio of AI, IT, and Micro SaaS services. Discover innovative solutions designed to transform your business and drive growth."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Services Overview
              </span>
              <span className="block text-white">Complete Portfolio</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
<<<<<<< HEAD
              <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Brain className="w-5 h-5" />
                <span>AI & Machine Learning Services</span>
              </div>
<<<<<<< HEAD
              
              <h2 className="text-4xl font-bold text-white mb-4">
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence technology. 
                Our AI services deliver measurable results and competitive advantages.
=======

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:border-cyan-400"
                >
                  {categories.map(category              => (
                    <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Industry Filter */}
              <div>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:border-cyan-400"
                >
                  {industries.map(industry              => (
                    <option key={industry.id} value={industry.id} className="bg-slate-800 text-white">
                      {industry.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="name" className="bg-slate-800 text-white">Sort by Name</option>
                  <option value="price-low" className="bg-slate-800 text-white">Price: Low to High</option>
                  <option value="price-high" className="bg-slate-800 text-white">Price: High to Low</option>
                  <option value="popular" className="bg-slate-800 text-white">Most Popular</option>
                  <option value="new" className="bg-slate-800 text-white">Newest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              {filteredServices.length} Services Available
            </h2>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your specific needs and discover how our innovative solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"

                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="/request-quote"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center"

                <DollarSign className="w-5 h-5 mr-2" />
                Request Custom Quote
              </a>
=======
            <div className="text-gray-400">
              Showing {filteredServices.length} of {allAvailableServices.length} services
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map(renderServiceCard)}
            </div>
          )}
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact us to discuss your specific needs and get a customized solution for your business.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                +1 (302) 464-0950
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                    <service.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-cyan-400">
                      {service.pricing}
                    </p>
                  </div>
                  
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <motion.div
=======
              Discover our comprehensive range of innovative technology services designed to 
              transform your business, enhance efficiency, and drive competitive advantage.
            </motion.p>
            <motion.div 
>>>>>>> f219bce04e406d3d2d696cae82a13fb57f779089
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center space-x-2 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
                <span>{INNOVATIVE_SERVICES_2025.length}+ Services</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <TrendingUp className="w-5 h-5" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Star className="w-5 h-5" />
                <span>Cutting-edge Technology</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
                className={`relative group p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedCategory === category.id || selectedCategory === 'all'
                    ? 'border-cyan-500 bg-slate-800/80'
                    : 'border-slate-700 bg-slate-800/50 hover:border-cyan-500/50'
                }`}
              >
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400 font-medium">{category.count} Services</span>
                  {selectedCategory === category.id && (
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            {selectedCategory === 'all' ? 'All Services' : `${selectedCategory} Services`}
          </h2>
          <p className="text-gray-400">
            {filteredServices.length} services available
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${categoryColor} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <CategoryIcon className="w-8 h-8 text-white" />
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                      {service.innovationLevel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.subcategory}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-white">${service.price.toLocaleString()}</span>
                      <span className="text-gray-400 ml-2">/{service.pricingModel}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Market Price</div>
                      <div className="text-sm text-cyan-400">{service.marketPrice}</div>
                    </div>
                  </div>

                  {/* ROI */}
                  <div className="bg-slate-700/50 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400 font-medium">ROI: {service.roi}</span>
                    </div>
                  </div>

                  {/* Key Features Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Use Cases</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.slice(0, 2).map((useCase, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700 rounded-full text-xs text-gray-300">
                          {useCase}
                        </span>
                      ))}
                      {service.useCases.length > 2 && (
                        <span className="px-2 py-1 bg-slate-700 rounded-full text-xs text-gray-300">
                          +{service.useCases.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Categories Deep Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories Deep Dive</h2>
        
        <div className="space-y-12">
          {/* AI Solutions */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">AI Solutions</h3>
                <p className="text-gray-400">Transform your business with cutting-edge artificial intelligence</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INNOVATIVE_SERVICES_2025.filter(s => s.category === 'AI Solutions').map(service => (
                <div key={service.id} className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-medium">${service.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">{service.innovationLevel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-xl">
                <Server className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">IT Services</h3>
                <p className="text-gray-400">Enterprise-grade infrastructure and digital transformation</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INNOVATIVE_SERVICES_2025.filter(s => s.category === 'IT Services').map(service => (
                <div key={service.id} className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-medium">${service.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">{service.innovationLevel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Micro SaaS */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-xl">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Micro SaaS</h3>
                <p className="text-gray-400">Scalable software solutions for specific business needs</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Micro SaaS').map(service => (
                <div key={service.id} className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-medium">${service.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">{service.innovationLevel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emerging Tech */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-3 rounded-xl">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Emerging Tech</h3>
                <p className="text-gray-400">Next-generation technologies for the future</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {INNOVATIVE_SERVICES_2025.filter(s => s.category === 'Emerging Tech').map(service => (
                <div key={service.id} className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-medium">${service.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">{service.innovationLevel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-cyan-100 mb-6">
            Let's discuss how our services can transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-white text-cyan-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 bg-white text-cyan-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </a>
          </div>
          <div className="mt-6 text-cyan-100">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;