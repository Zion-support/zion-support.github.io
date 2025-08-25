import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2669
import { 
  Brain, 
  Atom, 
  Rocket, 
  Shield, 
  Globe, 
  Building, 
  Zap, 
  Target,
  Star,
  TrendingUp,
<<<<<<< HEAD
  Users,
  Award,
=======
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Cpu,
  Brain,
  Blockchain,
  Wifi,
  Eye,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-177b
  Phone,
  Mail,
  MapPin,
  ExternalLink,
<<<<<<< HEAD
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
=======
  CheckCircle,
  Clock,
  Users,
  Target,
  BarChart3
} from 'lucide-react';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { EMERGING_TECH_INNOVATIVE_SERVICES } from '../data/emergingTechInnovativeServices';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-177b

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: {
    monthly: number;
    yearly: number;
    currency: string;
    pricingModel: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
<<<<<<< HEAD
}
=======
  Video,
  Palette,
  Car,
  Plane,
  Leaf,
  Atom,
  Satellite,
  Microscope,
  Beaker,
  Lightbulb,
  ShieldCheck,
  UserCheck,
  FileText,
  Home,
  Stethoscope,
  Droplets,
  Sparkles
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES, NEW_INNOVATIVE_SERVICES } from '../data/comprehensiveServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES, NEW_INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';
import { EMERGING_TECHNOLOGY_SERVICES } from '../data/emergingTechnologyServices';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2669

const ComprehensiveServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Services');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('popularity');

  // Comprehensive services data
  const services: Service[] = [
    // AI-Powered Space Technology Services
    {
      id: "ai-powered-space-technology-platform",
      title: "AI-Powered Space Technology Platform",
      description: "Cutting-edge AI platform for space exploration, satellite management, and cosmic data analysis with autonomous mission planning capabilities.",
      category: "AI & Space Technology",
      subcategory: "Space Exploration",
      price: 5000,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Satellite AI management system",
        "Space data analytics platform",
        "Autonomous mission planning",
        "Real-time space weather monitoring",
        "Satellite constellation optimization",
        "Space debris tracking",
        "Interplanetary communication AI",
        "Space resource mapping"
      ],
      benefits: [
        "Reduce satellite operation costs by 40%",
        "Improve mission success rate by 60%",
        "Real-time space situational awareness",
        "Automated space traffic management",
        "Enhanced space exploration capabilities"
      ],
      useCases: [
        "Space agencies",
        "Satellite operators",
        "Space research institutions",
        "Commercial space companies",
        "Defense organizations"
      ],
      targetAudience: [
        "Space engineers",
        "Satellite operators",
        "Research scientists",
        "Space agency officials",
        "Commercial space companies"
      ],
      tags: ["AI", "Space Technology", "Satellite Management", "Space Exploration", "Mission Planning"],
      estimatedDelivery: "4-6 weeks",
      supportLevel: "enterprise",
      marketPrice: "$5,000 - $15,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Quantum-Secure Cloud Infrastructure
    {
      id: "quantum-secure-cloud-infrastructure",
      title: "Quantum-Secure Cloud Infrastructure",
      description: "Next-generation cloud platform with quantum encryption, zero-trust architecture, and advanced threat detection for maximum security.",
      category: "Quantum & Cloud Security",
      subcategory: "Infrastructure Security",
      price: 3500,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Quantum-resistant encryption",
        "Zero-trust security architecture",
        "Advanced threat detection",
        "Real-time security monitoring",
        "Automated incident response",
        "Compliance automation",
        "Multi-cloud management",
        "Disaster recovery"
      ],
      benefits: [
        "Future-proof quantum security",
        "99.99% uptime guarantee",
        "Zero-trust protection",
        "Automated compliance",
        "Scalable infrastructure"
      ],
      useCases: [
        "Financial institutions",
        "Healthcare organizations",
        "Government agencies",
        "Enterprise businesses",
        "Critical infrastructure"
      ],
      targetAudience: [
        "CTOs",
        "Security officers",
        "IT directors",
        "Compliance managers",
        "Enterprise architects"
      ],
      tags: ["Quantum Security", "Cloud Infrastructure", "Zero-Trust", "Compliance", "Enterprise"],
      estimatedDelivery: "3-4 weeks",
      supportLevel: "enterprise",
      marketPrice: "$3,500 - $12,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // AI-Powered Autonomous Business Operations
    {
      id: "ai-powered-autonomous-business-operations",
      title: "AI-Powered Autonomous Business Operations",
      description: "Revolutionary AI platform that autonomously manages and optimizes your entire business operations with real-time decision making.",
      category: "AI & Business Automation",
      subcategory: "Autonomous Operations",
      price: 2500,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "24/7 autonomous operations",
        "Real-time decision making",
        "Predictive analytics",
        "Process optimization",
        "Resource allocation",
        "Performance monitoring",
        "Automated reporting",
        "Intelligent workflow management"
      ],
      benefits: [
        "Reduce operational costs by 30%",
        "Improve efficiency by 50%",
        "24/7 business operations",
        "Data-driven decisions",
        "Scalable automation"
      ],
      useCases: [
        "Manufacturing companies",
        "Service businesses",
        "E-commerce operations",
        "Healthcare facilities",
        "Financial services"
      ],
      targetAudience: [
        "Operations managers",
        "Business owners",
        "COOs",
        "Process improvement teams",
        "Automation specialists"
      ],
      tags: ["AI", "Business Automation", "Autonomous Operations", "Process Optimization", "Efficiency"],
      estimatedDelivery: "4-5 weeks",
      supportLevel: "premium",
      marketPrice: "$2,500 - $8,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Advanced AI Consciousness Simulation Platform
    {
      id: "advanced-ai-consciousness-simulation",
      title: "Advanced AI Consciousness Simulation Platform",
      description: "Breakthrough platform for simulating and studying AI consciousness, emotional intelligence, and cognitive development patterns.",
      category: "AI & Consciousness Research",
      subcategory: "Cognitive Simulation",
      price: 8000,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Consciousness simulation engine",
        "Emotional intelligence modeling",
        "Cognitive development tracking",
        "Behavioral pattern analysis",
        "Ethical decision making",
        "Multi-agent consciousness",
        "Research collaboration tools",
        "Advanced analytics dashboard"
      ],
      benefits: [
        "Advance AI consciousness research",
        "Develop ethical AI systems",
        "Understand cognitive processes",
        "Improve human-AI interaction",
        "Breakthrough research capabilities"
      ],
      useCases: [
        "Research institutions",
        "AI development companies",
        "Psychology departments",
        "Neuroscience labs",
        "Ethics committees"
      ],
      targetAudience: [
        "AI researchers",
        "Neuroscientists",
        "Psychologists",
        "Ethics researchers",
        "Technology philosophers"
      ],
      tags: ["AI Consciousness", "Cognitive Science", "Ethical AI", "Research Platform", "Neuroscience"],
      estimatedDelivery: "6-8 weeks",
      supportLevel: "enterprise",
      marketPrice: "$8,000 - $25,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Quantum Neural Network Platform
    {
      id: "quantum-neural-network-platform",
      title: "Quantum Neural Network Platform",
      description: "Revolutionary platform combining quantum computing with neural networks for unprecedented AI performance and problem-solving capabilities.",
      category: "Quantum & AI",
      subcategory: "Neural Networks",
      price: 6000,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Quantum neural network simulator",
        "Hybrid quantum-classical algorithms",
        "Quantum advantage optimization",
        "Real-time quantum processing",
        "Advanced model training",
        "Performance benchmarking",
        "Research collaboration tools",
        "Enterprise integration APIs"
      ],
      benefits: [
        "Exponential performance improvement",
        "Solve previously impossible problems",
        "Future-proof AI technology",
        "Research breakthrough potential",
        "Competitive advantage"
      ],
      useCases: [
        "Drug discovery",
        "Financial modeling",
        "Climate prediction",
        "Material science",
        "Cryptography"
      ],
      targetAudience: [
        "AI researchers",
        "Quantum scientists",
        "Pharmaceutical companies",
        "Financial institutions",
        "Research universities"
      ],
      tags: ["Quantum Computing", "Neural Networks", "AI", "Research Platform", "Breakthrough Technology"],
      estimatedDelivery: "5-7 weeks",
      supportLevel: "enterprise",
      marketPrice: "$6,000 - $20,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Autonomous Business Operations Platform
    {
      id: "autonomous-business-operations-platform",
      title: "Autonomous Business Operations Platform",
      description: "Complete autonomous business management system that runs your business 24/7 with AI-driven decision making and optimization.",
      category: "AI & Business Management",
      subcategory: "Autonomous Operations",
      price: 4000,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Full business automation",
        "AI decision engine",
        "Resource optimization",
        "Performance monitoring",
        "Predictive maintenance",
        "Customer service automation",
        "Financial management",
        "Strategic planning"
      ],
      benefits: [
        "24/7 business operations",
        "Reduce human error by 90%",
        "Improve efficiency by 60%",
        "Cost optimization",
        "Scalable growth"
      ],
      useCases: [
        "Small businesses",
        "Medium enterprises",
        "Startups",
        "Service companies",
        "E-commerce businesses"
      ],
      targetAudience: [
        "Business owners",
        "Entrepreneurs",
        "Operations managers",
        "Startup founders",
        "Business consultants"
      ],
      tags: ["Business Automation", "AI Management", "Autonomous Operations", "Efficiency", "Scalability"],
      estimatedDelivery: "4-6 weeks",
      supportLevel: "premium",
      marketPrice: "$4,000 - $12,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // AI-Powered IT Asset Management
    {
      id: "ai-powered-it-asset-management",
      title: "AI-Powered IT Asset Management Platform",
      description: "Intelligent IT asset management system that automatically tracks, optimizes, and maintains your entire technology infrastructure.",
      category: "IT & Infrastructure",
      subcategory: "Asset Management",
      price: 1800,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Automated asset discovery",
        "Lifecycle management",
        "Predictive maintenance",
        "Cost optimization",
        "Compliance tracking",
        "Integration management",
        "Performance monitoring",
        "Automated reporting"
      ],
      benefits: [
        "Reduce IT costs by 25%",
        "Improve asset utilization",
        "Prevent downtime",
        "Automated compliance",
        "Better decision making"
      ],
      useCases: [
        "Enterprise IT departments",
        "Managed service providers",
        "Data centers",
        "Cloud infrastructure",
        "Network operations"
      ],
      targetAudience: [
        "IT directors",
        "Asset managers",
        "System administrators",
        "Operations teams",
        "Compliance officers"
      ],
      tags: ["IT Management", "Asset Management", "Automation", "Compliance", "Cost Optimization"],
      estimatedDelivery: "2-3 weeks",
      supportLevel: "premium",
      marketPrice: "$1,800 - $5,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // SOC2 Compliance Automation Platform
    {
      id: "soc2-compliance-automation",
      title: "SOC2 Compliance Automation Platform",
      description: "Automated SOC2 compliance platform that continuously monitors, documents, and maintains your security and compliance requirements.",
      category: "Compliance & Security",
      subcategory: "SOC2 Compliance",
      price: 2200,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Automated compliance monitoring",
        "Real-time security assessment",
        "Documentation automation",
        "Audit preparation",
        "Risk assessment",
        "Policy management",
        "Training automation",
        "Compliance reporting"
      ],
      benefits: [
        "Achieve SOC2 compliance faster",
        "Reduce audit preparation time",
        "Continuous compliance",
        "Risk mitigation",
        "Cost-effective compliance"
      ],
      useCases: [
        "SaaS companies",
        "Financial services",
        "Healthcare organizations",
        "E-commerce businesses",
        "Technology companies"
      ],
      targetAudience: [
        "Compliance officers",
        "Security managers",
        "Risk managers",
        "Legal teams",
        "IT security teams"
      ],
      tags: ["SOC2", "Compliance", "Security", "Automation", "Risk Management"],
      estimatedDelivery: "3-4 weeks",
      supportLevel: "premium",
      marketPrice: "$2,200 - $6,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // AI Autonomous Research Assistant
    {
      id: "ai-autonomous-research-assistant",
      title: "AI Autonomous Research Assistant",
      description: "Intelligent research platform that autonomously conducts research, analyzes data, and generates comprehensive reports across any domain.",
      category: "AI & Research",
      subcategory: "Autonomous Research",
      price: 3000,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Autonomous research execution",
        "Multi-source data analysis",
        "Intelligent report generation",
        "Trend identification",
        "Citation management",
        "Collaborative research",
        "Real-time updates",
        "Custom research protocols"
      ],
      benefits: [
        "Accelerate research by 10x",
        "Reduce research costs",
        "Comprehensive analysis",
        "24/7 research capability",
        "Scalable research operations"
      ],
      useCases: [
        "Academic institutions",
        "Research organizations",
        "Market research firms",
        "Consulting companies",
        "Government agencies"
      ],
      targetAudience: [
        "Researchers",
        "Analysts",
        "Academics",
        "Consultants",
        "Policy makers"
      ],
      tags: ["AI Research", "Autonomous Systems", "Data Analysis", "Report Generation", "Academic Research"],
      estimatedDelivery: "4-5 weeks",
      supportLevel: "premium",
      marketPrice: "$3,000 - $8,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // 5G Enterprise Solutions Platform
    {
      id: "5g-enterprise-solutions-platform",
      title: "5G Enterprise Solutions Platform",
      description: "Comprehensive 5G enterprise platform providing ultra-fast connectivity, IoT integration, and edge computing capabilities for modern businesses.",
      category: "5G & Connectivity",
      subcategory: "Enterprise Solutions",
      price: 2800,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "5G network optimization",
        "IoT device management",
        "Edge computing platform",
        "Network slicing",
        "Security management",
        "Performance monitoring",
        "Scalable infrastructure",
        "Enterprise integration"
      ],
      benefits: [
        "Ultra-fast connectivity",
        "Low latency operations",
        "Massive IoT support",
        "Enhanced security",
        "Future-ready infrastructure"
      ],
      useCases: [
        "Manufacturing facilities",
        "Smart cities",
        "Healthcare facilities",
        "Transportation systems",
        "Retail environments"
      ],
      targetAudience: [
        "Network engineers",
        "IT directors",
        "Operations managers",
        "Technology officers",
        "Infrastructure teams"
      ],
      tags: ["5G", "Enterprise", "IoT", "Edge Computing", "Connectivity"],
      estimatedDelivery: "3-5 weeks",
      supportLevel: "premium",
      marketPrice: "$2,800 - $7,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Advanced AI Workflow Automation
    {
      id: "advanced-ai-workflow-automation",
      title: "Advanced AI Workflow Automation Platform",
      description: "Intelligent workflow automation platform that uses AI to optimize, automate, and orchestrate complex business processes across your organization.",
      category: "AI & Automation",
      subcategory: "Workflow Automation",
      price: 1600,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "AI-powered process optimization",
        "Intelligent workflow design",
        "Automated decision making",
        "Process monitoring",
        "Performance analytics",
        "Integration capabilities",
        "Custom automation rules",
        "Real-time optimization"
      ],
      benefits: [
        "Increase productivity by 40%",
        "Reduce process errors",
        "Faster workflow execution",
        "Cost optimization",
        "Scalable automation"
      ],
      useCases: [
        "HR departments",
        "Finance teams",
        "Operations",
        "Customer service",
        "Sales processes"
      ],
      targetAudience: [
        "Process improvement teams",
        "Operations managers",
        "Business analysts",
        "Automation specialists",
        "Department heads"
      ],
      tags: ["Workflow Automation", "AI", "Process Optimization", "Efficiency", "Business Process"],
      estimatedDelivery: "2-3 weeks",
      supportLevel: "premium",
      marketPrice: "$1,600 - $4,500/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // Blockchain Enterprise Solutions
    {
      id: "blockchain-enterprise-solutions",
      title: "Blockchain Enterprise Solutions Platform",
      description: "Enterprise-grade blockchain platform providing secure, scalable, and compliant solutions for business transformation and digital innovation.",
      category: "Blockchain & Web3",
      subcategory: "Enterprise Solutions",
      price: 3200,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Enterprise blockchain infrastructure",
        "Smart contract development",
        "DeFi integration",
        "Security protocols",
        "Compliance frameworks",
        "Scalability solutions",
        "Interoperability",
        "Analytics dashboard"
      ],
      benefits: [
        "Enhanced security and transparency",
        "Reduced transaction costs",
        "Improved efficiency",
        "Innovative business models",
        "Competitive advantage"
      ],
      useCases: [
        "Supply chain management",
        "Financial services",
        "Healthcare records",
        "Digital identity",
        "Asset management"
      ],
      targetAudience: [
        "Enterprise architects",
        "Blockchain developers",
        "Business strategists",
        "Technology officers",
        "Innovation teams"
      ],
      tags: ["Blockchain", "Enterprise", "Web3", "Smart Contracts", "DeFi"],
      estimatedDelivery: "4-6 weeks",
      supportLevel: "premium",
      marketPrice: "$3,200 - $9,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    },

    // IoT Data Analytics Platform
    {
      id: "iot-data-analytics-platform",
      title: "IoT Data Analytics Platform",
      description: "Advanced IoT analytics platform that processes, analyzes, and visualizes data from connected devices to drive intelligent business decisions.",
      category: "IoT & Analytics",
      subcategory: "Data Analytics",
      price: 1400,
      currency: "$",
      pricingModel: "monthly",
      features: [
        "Real-time data processing",
        "Advanced analytics engine",
        "Predictive modeling",
        "Device management",
        "Data visualization",
        "Alert systems",
        "Integration APIs",
        "Scalable infrastructure"
      ],
      benefits: [
        "Real-time insights",
        "Predictive maintenance",
        "Operational efficiency",
        "Cost reduction",
        "Data-driven decisions"
      ],
      useCases: [
        "Smart manufacturing",
        "Connected cities",
        "Healthcare monitoring",
        "Energy management",
        "Transportation systems"
      ],
      targetAudience: [
        "IoT engineers",
        "Data scientists",
        "Operations managers",
        "Technology officers",
        "Analytics teams"
      ],
      tags: ["IoT", "Data Analytics", "Predictive Analytics", "Real-time Processing", "Smart Devices"],
      estimatedDelivery: "3-4 weeks",
      supportLevel: "premium",
      marketPrice: "$1,400 - $4,000/month",
      contactInfo: {
        phone: "+1 302 464 0950",
        email: "kleber@ziontechgroup.com",
        website: "https://ziontechgroup.com"
      }
    }
=======
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Database,
  Network,
  Zap,
  Target,
  Users,
  Globe,
  Lock,
  BarChart3,
  Rocket,
  Microchip,
  Code,
  Server,
  ShieldCheck,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ADVANCED_MICRO_SAAS_SERVICES } from '../data/advancedMicroSaasServices';
import { EMERGING_TECHNOLOGY_SERVICES } from '../data/emergingTechnologyServices';
import { SPECIALIZED_IT_SERVICES } from '../data/specializedITServices';

export default function ComprehensiveServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // Combine all services
  const allServices = [
    ...ADVANCED_MICRO_SAAS_SERVICES,
    ...EMERGING_TECHNOLOGY_SERVICES,
    ...SPECIALIZED_IT_SERVICES
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
  ];

  const categories = ['All Services', ...Array.from(new Set(services.map(s => s.category)))];

<<<<<<< HEAD
  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
=======
  technology: string[];
  integrations: string[];
  compliance: string[];
  roi: string;
  competitors: string[];
  marketTrend: string;
  innovationLevel: string;
  launchDate: string;
  status: 'Active' | 'Beta' | 'Coming Soon';
}

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
<<<<<<< HEAD
  const allServices: Service[] = [
    ...ADVANCED_MICRO_SAAS_SERVICES,
    ...EMERGING_TECH_INNOVATIVE_SERVICES
=======
  const allServices = [
    ...COMPREHENSIVE_SERVICES,
    ...NEW_INNOVATIVE_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES,
    ...NEW_INNOVATIVE_MICRO_SAAS_SERVICES,
    ...EMERGING_TECHNOLOGY_SERVICES
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2669
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      
      let matchesPrice = true;
<<<<<<< HEAD
      if (selectedPriceRange !== 'All') {
        const [min, max] = selectedPriceRange.split('-').map(Number);
        if (max) {
          matchesPrice = service.price.monthly >= min && service.price.monthly <= max;
        } else {
          matchesPrice = service.price.monthly >= min;
        }
      }
=======
      if (selectedPriceRange === 'low') matchesPrice = service.price <= 500;
      else if (selectedPriceRange === 'medium') matchesPrice = service.price > 500 && service.price <= 2000;
      else if (selectedPriceRange === 'high') matchesPrice = service.price > 2000;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2669
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
<<<<<<< HEAD
      switch (sortBy) {
        case 'name':
          return a.title.localeCompare(b.title);
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'roi':
          return parseInt(b.roi.split('%')[0]) - parseInt(a.roi.split('%')[0]);
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Business Intelligence':
      case 'AI & Customer Service':
      case 'AI & Project Management':
      case 'AI & Financial Services':
      case 'AI & Human Resources':
      case 'Artificial Intelligence':
        return <Brain className="w-6 h-6" />;
      case 'Blockchain & Web3':
        return <Blockchain className="w-6 h-6" />;
      case 'Internet of Things':
        return <Wifi className="w-6 h-6" />;
      case 'Quantum Computing':
        return <Cpu className="w-6 h-6" />;
      case 'Extended Reality':
        return <Eye className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-177b
    }
  });
=======
  // Price ranges
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'budget', label: 'Under $500/month' },
    { value: 'mid', label: '$500 - $1,500/month' },
    { value: 'premium', label: '$1,500 - $3,000/month' },
    { value: 'enterprise', label: 'Over $3,000/month' }
  ];
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864

  // Filter services based on search, category, and price
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (selectedPriceRange === 'budget') matchesPrice = service.price < 500;
    else if (selectedPriceRange === 'mid') matchesPrice = service.price >= 500 && service.price < 1500;
    else if (selectedPriceRange === 'premium') matchesPrice = service.price >= 1500 && service.price < 3000;
    else if (selectedPriceRange === 'enterprise') matchesPrice = service.price >= 3000;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Get service count by category
  const getServiceCountByCategory = (category: string) => {
    if (category === 'all') return allServices.length;
    return allServices.filter(service => service.category === category).length;
  };

<<<<<<< HEAD
  // Get icon for category
  const getCategoryIcon = (category: string) => {
<<<<<<< HEAD
    switch (category) {
      case 'AI & Space Technology':
        return <Rocket className="w-6 h-6" />;
      case 'Quantum & Cloud Security':
        return <Shield className="w-6 h-6" />;
      case 'AI & Business Automation':
        return <Brain className="w-6 h-6" />;
      case 'AI & Consciousness Research':
        return <Brain className="w-6 h-6" />;
      case 'Quantum & AI':
        return <Atom className="w-6 h-6" />;
      case 'AI & Business Management':
        return <Building className="w-6 h-6" />;
      case 'IT & Infrastructure':
        return <Globe className="w-6 h-6" />;
      case 'Compliance & Security':
        return <Shield className="w-6 h-6" />;
      case 'AI & Research':
        return <Brain className="w-6 h-6" />;
      case '5G & Connectivity':
        return <Zap className="w-6 h-6" />;
      case 'AI & Automation':
        return <Zap className="w-6 h-6" />;
      case 'Blockchain & Web3':
        return <Globe className="w-6 h-6" />;
      case 'IoT & Analytics':
        return <Target className="w-6 h-6" />;
      default:
        return <Star className="w-6 h-6" />;
    }
=======
    const iconMap: { [key: string]: any } = {
      'AI & Machine Learning': Brain,
      'AI & Financial Technology': Brain,
      'AI & Healthcare': Brain,
      'AI & Legal Technology': Brain,
      'AI & Manufacturing': Brain,
      'AI & Retail Technology': Brain,
      'AI & Real Estate': Brain,
      'AI & Education Technology': Brain,
      'AI & Logistics': Brain,
      'AI & Energy Technology': Brain,
      'AI & Marketing Technology': Brain,
      'Quantum Computing': Microchip,
      'Edge Computing': Server,
      'Neuromorphic Computing': Brain,
      '6G Networks': Network,
      'Space Technology': Rocket,
      'Brain-Computer Interface': Brain,
      'Synthetic Biology': Code,
      'Quantum Internet': Lock,
      'Fusion Energy': Zap,
      'Metaverse': Globe,
      'Cybersecurity': Shield,
      'Cloud Computing': Cloud,
      'IT Operations': Cpu,
      'Data Management': Database,
      'Network Management': Network,
      'DevOps': Code,
      'Application Management': Server,
      'IT Service Management': ShieldCheck,
      'Cloud Services': Cloud,
      'Business Continuity': ShieldCheck
    };
    return iconMap[category] || Target;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
  };

  // Get category color
  const getCategoryColor = (category: string) => {
<<<<<<< HEAD
    switch (category) {
      case 'AI & Space Technology':
        return 'from-blue-500 to-cyan-500';
      case 'Quantum & Cloud Security':
        return 'from-purple-500 to-pink-500';
      case 'AI & Business Automation':
        return 'from-green-500 to-emerald-500';
      case 'AI & Consciousness Research':
        return 'from-indigo-500 to-purple-500';
      case 'Quantum & AI':
        return 'from-cyan-500 to-blue-500';
      case 'AI & Business Management':
        return 'from-orange-500 to-red-500';
      case 'IT & Infrastructure':
        return 'from-gray-500 to-slate-500';
      case 'Compliance & Security':
        return 'from-red-500 to-pink-500';
      case 'AI & Research':
        return 'from-blue-500 to-indigo-500';
      case '5G & Connectivity':
        return 'from-green-500 to-blue-500';
      case 'AI & Automation':
        return 'from-purple-500 to-indigo-500';
      case 'Blockchain & Web3':
        return 'from-yellow-500 to-orange-500';
      case 'IoT & Analytics':
        return 'from-teal-500 to-green-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 text-sm mb-6">
              <Star className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300">Comprehensive Services Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Technology Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive suite of cutting-edge AI, quantum computing, IT infrastructure, and micro SAAS solutions. 
              Transform your business with the future of technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{services.length}</div>
                <div className="text-sm text-gray-400">Total Services</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-pink-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">300%</div>
                <div className="text-sm text-gray-400">Average ROI</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400 mb-12">
              <a href="tel:+1 302 464 0950" className="flex items-center hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center hover:text-purple-400 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008 Middletown DE 19709
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="mb-12 space-y-6">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
              />
              <Target className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 border-transparent text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  {getCategoryIcon(category)}
                  <span>{category}</span>
                  <span className="bg-white/20 rounded-full px-2 py-1 text-xs">
                    {category === 'All Services' ? services.length : services.filter(s => s.category === category).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center space-x-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="popularity">Sort by Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Sort by Name</option>
                </select>
=======
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      return 0;
    });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      'AI & Machine Learning': Brain,
      'Cybersecurity': Shield,
      'Cloud & Infrastructure': Cloud,
      'Blockchain & Web3': Network,
      'Internet of Things': Cpu,
      'Customer Experience': Users,
      'Supply Chain Management': ShoppingCart,
      'Human Resources': Users,
      'Financial Technology': DollarSign,
      'Legal Technology': FileText,
      'Real Estate Technology': Home,
      'Healthcare Technology': Stethoscope,
      'Energy Management': Zap,
      'Creative Design': Palette,
      'AI & Creative Technology': Video,
      'Autonomous Systems': Car,
      'AI & Education': BookOpen,
      'AI & Healthcare': Heart,
      'Quantum Computing': Atom,
      'Emerging Computing': Cpu,
      'Molecular Computing': Microscope,
      'Quantum Technology': Atom,
      'Biotechnology': Beaker,
      'Energy Technology': Zap,
      'Neurotechnology': Brain,
      'Space Technology': Satellite,
      'Materials Science': Microscope,
      'Climate Technology': Leaf,
      'Digital Technology': Sparkles
    };
    return iconMap[category] || Target;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-pink-500',
      'Cloud & Infrastructure': 'from-blue-500 to-indigo-500',
      'Blockchain & Web3': 'from-green-500 to-emerald-500',
      'Internet of Things': 'from-cyan-500 to-blue-500',
      'Customer Experience': 'from-orange-500 to-yellow-500',
      'Supply Chain Management': 'from-indigo-500 to-purple-500',
      'Human Resources': 'from-pink-500 to-rose-500',
      'Financial Technology': 'from-emerald-500 to-green-500',
      'Legal Technology': 'from-slate-500 to-gray-500',
      'Real Estate Technology': 'from-amber-500 to-orange-500',
      'Healthcare Technology': 'from-red-500 to-pink-500',
      'Energy Management': 'from-yellow-500 to-orange-500',
      'Creative Design': 'from-purple-500 to-indigo-500',
      'AI & Creative Technology': 'from-pink-500 to-purple-500',
      'Autonomous Systems': 'from-blue-500 to-cyan-500',
      'AI & Education': 'from-green-500 to-emerald-500',
      'AI & Healthcare': 'from-red-500 to-rose-500',
      'Quantum Computing': 'from-indigo-500 to-purple-500',
      'Emerging Computing': 'from-violet-500 to-purple-500',
      'Molecular Computing': 'from-emerald-500 to-teal-500',
      'Quantum Technology': 'from-blue-500 to-indigo-500',
      'Biotechnology': 'from-green-500 to-emerald-500',
      'Energy Technology': 'from-yellow-500 to-orange-500',
      'Neurotechnology': 'from-purple-500 to-pink-500',
      'Space Technology': 'from-slate-500 to-gray-500',
      'Materials Science': 'from-amber-500 to-yellow-500',
      'Climate Technology': 'from-emerald-500 to-green-500',
      'Digital Technology': 'from-cyan-500 to-blue-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover our extensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business and drive digital innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">{allServices.length}+</div>
                <div className="text-sm">Services Available</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm">Uptime Guarantee</div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2669
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center mr-4`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-cyan-400 font-medium">{service.currency}{service.price.toLocaleString()}/{service.pricingModel}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="text-xs text-gray-400">• {benefit}</div>
=======
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-purple-500 to-pink-500',
      'AI & Financial Technology': 'from-green-500 to-emerald-500',
      'AI & Healthcare': 'from-red-500 to-pink-500',
      'AI & Legal Technology': 'from-blue-500 to-indigo-500',
      'AI & Manufacturing': 'from-orange-500 to-yellow-500',
      'AI & Retail Technology': 'from-purple-500 to-pink-500',
      'AI & Real Estate': 'from-teal-500 to-cyan-500',
      'AI & Education Technology': 'from-indigo-500 to-purple-500',
      'AI & Logistics': 'from-blue-500 to-cyan-500',
      'AI & Energy Technology': 'from-yellow-500 to-orange-500',
      'AI & Marketing Technology': 'from-pink-500 to-red-500',
      'Quantum Computing': 'from-blue-500 to-cyan-500',
      'Edge Computing': 'from-green-500 to-teal-500',
      'Neuromorphic Computing': 'from-purple-500 to-indigo-500',
      '6G Networks': 'from-cyan-500 to-blue-500',
      'Space Technology': 'from-indigo-500 to-purple-500',
      'Brain-Computer Interface': 'from-pink-500 to-red-500',
      'Synthetic Biology': 'from-green-500 to-emerald-500',
      'Quantum Internet': 'from-blue-500 to-indigo-500',
      'Fusion Energy': 'from-yellow-500 to-orange-500',
      'Metaverse': 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-pink-500',
      'Cloud Computing': 'from-blue-500 to-indigo-500',
      'IT Operations': 'from-gray-500 to-slate-500',
      'Data Management': 'from-teal-500 to-cyan-500',
      'Network Management': 'from-indigo-500 to-purple-500',
      'DevOps': 'from-orange-500 to-yellow-500',
      'Application Management': 'from-green-500 to-emerald-500',
      'IT Service Management': 'from-blue-500 to-cyan-500',
      'Cloud Services': 'from-cyan-500 to-blue-500',
      'Business Continuity': 'from-emerald-500 to-teal-500'
    };
    return colorMap[category] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <SEOHead 
        title="Comprehensive Services Showcase - Zion Tech Group"
        description="Explore our complete portfolio of AI-powered solutions, emerging technologies, and specialized IT services designed to transform your business."
        keywords="AI services, emerging technology, IT solutions, micro SAAS, quantum computing, cybersecurity, cloud services"
        type="website"
        url="https://ziontechgroup.com/comprehensive-services-showcase"
      />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span> Showcase
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our complete portfolio of cutting-edge AI solutions, emerging technologies, and specialized IT services. 
            From micro SAAS applications to quantum computing platforms, we provide the tools you need to stay ahead of the competition.
=======
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Beta':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Coming Soon':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'enterprise':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'premium':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'standard':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Zion Tech Group
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Comprehensive Micro SAAS Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our cutting-edge AI-powered services, emerging technology solutions, and innovative micro SAAS platforms designed to transform your business operations and drive exponential growth.
            </p>
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Get Started Today</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/20 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 bg-white/20 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Prices</option>
              <option value="0-100">$0 - $100</option>
              <option value="100-500">$100 - $500</option>
              <option value="500-1000">$500 - $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000-">$2,000+</option>
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/20 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="roi">Sort by ROI</option>
              <option value="newest">Sort by Newest</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mt-4">
            <div className="bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                List View
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-gray-300">
            Showing {filteredServices.length} of {allServices.length} services
>>>>>>> origin/cursor/expand-services-and-deploy-updates-177b
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
              <div className="text-gray-400">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-400">Technology Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category} ({getServiceCountByCategory(category)})
                </button>
              ))}
            </div>

            {/* Price Range Filter */}
            <div className="flex flex-wrap gap-2">
              {priceRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setSelectedPriceRange(range.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedPriceRange === range.value
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, idx) => {
            const CategoryIcon = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${categoryColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Category and Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">
                    {service.category}
                  </span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-cyan-400">
                      ${service.price.toLocaleString()}/mo
                    </div>
                    <div className="text-xs text-gray-400">
                      {service.pricingModel}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
=======
        {/* Services Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-blue-400/50"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getCategoryIcon(service.category)}
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <p className="text-sm text-gray-400">{service.category}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getSupportLevelColor(service.supportLevel)}`}>
                      {service.supportLevel}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>

                {/* Price */}
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-blue-400">
                        {service.price.currency}{service.price.monthly}
                        <span className="text-sm text-gray-400">/month</span>
                      </p>
                      <p className="text-sm text-gray-400">
                        {service.price.currency}{service.price.yearly}/year (save 17%)
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Market Price</p>
                      <p className="text-sm text-green-400">{service.marketPrice}</p>
                    </div>
                  </div>
                </div>

                {/* ROI */}
                <div className="bg-green-500/20 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">ROI: {service.roi}</span>
                  </div>
                </div>

                {/* Features Preview */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-177b
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 3 && (
<<<<<<< HEAD
                      <li className="text-xs text-gray-500">
                        +{service.features.length - 3} more features
                      </li>
=======
                      <p className="text-xs text-gray-500">+{service.features.length - 3} more features</p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-177b
                    )}
                  </ul>
                </div>

<<<<<<< HEAD
                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIdx) => (
                      <li key={benefitIdx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {service.tags.slice(0, 3).map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
                    ))}
=======
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Prices</option>
              <option value="low">Under $500/month</option>
              <option value="medium">$500 - $2,000/month</option>
              <option value="high">Over $2,000/month</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = getCategoryIcon(service.category);
            const categoryColor = getCategoryColor(service.category);
            
            return (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${categoryColor} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="h-8 w-8" />
                    <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                      {service.supportLevel}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-white/90 line-clamp-2">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">
                        ${service.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">/{service.pricingModel}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Market: {service.marketPrice}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <TrendingUp className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2669
                  </div>

<<<<<<< HEAD
<<<<<<< HEAD
                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                  <div>
                    <span className="text-gray-400">Delivery:</span>
                    <div className="text-white">{service.estimatedDelivery}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Support:</span>
                    <div className="text-white capitalize">{service.supportLevel}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Market Price:</span>
                    <div className="text-white">{service.marketPrice}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Category:</span>
                    <div className="text-white">{service.category}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Get Started</span>
                  </a>
                  
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Request Quote</span>
                  </a>

=======
                {/* Service Details */}
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{service.supportLevel}</span>
=======
                  {/* Delivery & Support */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.estimatedDelivery}
                    </div>
                    <div className="flex items-center">
                      <ShieldCheck className="h-4 w-4 mr-1" />
                      {service.supportLevel}
                    </div>
                  </div>

                  {/* Contact & Action */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm text-gray-600">
                        <div>📞 {service.contactInfo.phone}</div>
                        <div>✉️ {service.contactInfo.email}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        to={`/services/${service.id}`}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                      >
                        Contact
                      </a>
                    </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2669
                  </div>
                </div>

                {/* Contact Button */}
                <div className="space-y-2">
                  <a
                    href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-center block transition-colors duration-200"
                  >
                    Get Started
                  </a>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-177b
                  <a
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD
                    className="w-full bg-white/5 border border-white/10 text-gray-300 px-4 py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Learn More</span>
=======
                    className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-center block transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-177b
                  </a>
                </div>
              </motion.div>
            ))}
<<<<<<< HEAD
=======
                {/* Market Price */}
                <div className="mb-4 p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>Market Price: {service.marketPrice}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>

<<<<<<< HEAD
        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
          </div>

<<<<<<< HEAD
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies already leveraging our revolutionary technology solutions to achieve unprecedented growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+1 302 464 0950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-cyan-500/25"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: +1 302 464 0950</span>
                </a>
                
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Comprehensive Services Inquiry"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-purple-500/25"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">Visit our website for more information:</p>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium inline-flex items-center gap-2"
                >
                  <span>ziontechgroup.com</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
=======
        {/* Contact Information */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the right technology solutions. 
              Get in touch to discuss your needs and discover how we can accelerate your digital transformation.
            </p>
            
            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-white font-medium">+1 302 464 0950</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-medium">kleber@ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <div className="text-left">
                  <div className="text-sm text-gray-400">Address</div>
                  <div className="text-white font-medium">364 E Main St STE 1008<br />Middletown DE 19709</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Contact Us Today
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                View All Services
              </Link>
=======
          </div>
        ) : (
          <div className="space-y-4">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Service Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getCategoryIcon(service.category)}
                        <div>
                          <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                          <p className="text-gray-400">{service.category} • {service.subcategory}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSupportLevelColor(service.supportLevel)}`}>
                          {service.supportLevel}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{service.description}</p>

                    {/* Features and Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-blue-400" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 4).map((benefit, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Contact */}
                  <div className="space-y-4">
                    {/* Price */}
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-400">
                          {service.price.currency}{service.price.monthly}
                          <span className="text-sm text-gray-400">/month</span>
                        </p>
                        <p className="text-sm text-gray-400">
                          {service.price.currency}{service.price.yearly}/year
                        </p>
                        <p className="text-xs text-green-400 mt-1">Save 17% annually</p>
                      </div>
                    </div>

                    {/* ROI */}
                    <div className="bg-green-500/20 rounded-lg p-3">
                      <div className="flex items-center justify-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-semibold">ROI: {service.roi}</span>
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-400">Market Price</p>
                      <p className="text-sm text-green-400 font-semibold">{service.marketPrice}</p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2">
                      <a
                        href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-center block transition-colors duration-200 font-semibold"
                      >
                        Contact Sales
                      </a>
                      <a
                        href={service.contactInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg text-center block transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
=======
        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No services found matching your criteria</div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2669
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedPriceRange('All');
              }}
<<<<<<< HEAD
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors duration-200"
=======
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2669
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

<<<<<<< HEAD
      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts is ready to help you implement the perfect solution for your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-400 font-semibold">+1 302 464 0950</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-400 font-semibold">kleber@ziontechgroup.com</p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-177b
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-blue-400 font-semibold">Middletown, DE</p>
=======
      {/* Contact Section */}
      <div className="bg-gradient-to-r from-gray-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Our team of experts is ready to help you implement the perfect technology solution for your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-300">ziontechgroup.com</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Our Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709<br />
                United States
              </p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2669
            </div>
          </div>

          <div className="space-x-4">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Consultation Request"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
            >
              Get Free Consultation
            </a>
            <a
              href="https://ziontechgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white py-3 px-8 rounded-lg text-lg font-semibold transition-colors duration-200 inline-block"
            >
              Visit Our Website
            </a>
          </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-9864
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default ComprehensiveServicesShowcase;
=======
}

// Missing icon components
const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 19 7.5 19s3.332-.523 4.5-1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 19 16.5 19c-1.746 0-3.332-.523-4.5-1.253" />
  </svg>
);

const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-2669
