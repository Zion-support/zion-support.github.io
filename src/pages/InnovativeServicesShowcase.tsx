<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { SEO } from '../components/SEO';
>>>>>>> origin/cursor/expand-services-and-deploy-updates-02bf
=======
import React, { useState, useMemo } from 'react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES, INNOVATIVE_SAAS_CATEGORIES, CONTACT_INFO } from '@/data/innovativeMicroSaasServices';
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-895f
import { 
<<<<<<< HEAD
  Search, 
  Filter, 
  Star, 
<<<<<<< HEAD
<<<<<<< HEAD
  ArrowRight, 
  CheckCircle,
  Shield,
  Brain,
  Cloud,
  Lock,
  Cpu,
=======
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  Users, 
  TrendingUp, 
  Zap, 
  Target, 
  Sparkles,
  Globe,
  Lock,
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5c5f
  Database,
  Network,
  Code,
  BarChart3,
<<<<<<< HEAD
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Target as TargetIcon,
  Bot,
  Microchip,
  Globe2,
  BarChart,
  ShieldCheck,
  Zap as ZapIcon,
  TrendingUp,
  Users,
  Award,
  Globe
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SEOConfigs } from '../components/SEOHead';

// Import all service data
import { ADVANCED_AI_SERVICES } from '../data/advancedAIServices';
import { INNOVATIVE_IT_INFRASTRUCTURE_SERVICES } from '../data/innovativeITInfrastructureServices';
import { BLOCKCHAIN_WEB3_SERVICES } from '../data/blockchainWeb3Services';
import { IOT_EDGE_COMPUTING_SERVICES } from '../data/iotEdgeComputingServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';

const InnovativeServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices = [
    ...ADVANCED_AI_SERVICES,
    ...INNOVATIVE_IT_INFRASTRUCTURE_SERVICES,
    ...BLOCKCHAIN_WEB3_SERVICES,
    ...IOT_EDGE_COMPUTING_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES
  ];

  // Get unique categories
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  // Filter services based on search and filters
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'low' && service.price < 2000) ||
                        (selectedPriceRange === 'medium' && service.price >= 2000 && service.price < 5000) ||
                        (selectedPriceRange === 'high' && service.price >= 5000);
=======
  TrendingUp, 
  Zap, 
  Globe, 
  Shield, 
  Cpu,
  Brain,
  Atom,
  Bot,
  Leaf,
  Building,
  Car,
  Lock,
  ChartBar,
  Users,
  Code,
  Database,
  Cloud,
  Smartphone,
  Camera,
  Microscope,
  Truck,
  Factory,
  Hospital,
  Building2,
  ShoppingCart,
  Wifi,
  Satellite,
  Rocket
} from 'lucide-react';

// Import all service data
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { advancedAIAutomationServices } from '../../data/2026-advanced-ai-automation-services';
import { blockchainWeb3Services } from '../../data/2026-blockchain-web3-innovations';
import { healthcareBiotechServices } from '../../data/2026-healthcare-biotech-innovations';
import { iotSmartCityServices } from '../../data/2026-iot-smart-city-innovations';
import { roboticsAutomationServices } from '../../data/2026-robotics-automation-innovations';
import { quantumComputingServices } from '../../data/2026-quantum-computing-innovations';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  contactInfo?: {
    mobile: string;
    email: string;
    address: string;
  };
}

const InnovativeServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [sortBy, setSortBy] = useState('name');

  // Combine all services
  const allServices: Service[] = [
    ...enhancedRealMicroSaasServices,
    ...advancedAIAutomationServices,
    ...blockchainWeb3Services,
    ...healthcareBiotechServices,
    ...iotSmartCityServices,
    ...roboticsAutomationServices,
    ...quantumComputingServices
  ];

  // Get unique categories
  const categories = ['All', ...new Set(allServices.map(service => service.category))];
  
  // Get unique technologies
  const technologies = ['All', ...new Set(allServices.flatMap(service => service.technology))];

  // Filter services based on search criteria
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-02bf
    
    const matchesTechnology = selectedTechnology === 'All' || 
                             service.technology.some(tech => tech === selectedTechnology);
    
    const price = parseFloat(service.price.replace('$', '').replace(',', ''));
    const matchesPrice = price >= priceRange.min && price <= priceRange.max;

    return matchesSearch && matchesCategory && matchesTechnology && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
<<<<<<< HEAD
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
=======
      case 'price':
        return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'growth':
        return parseFloat(b.growthRate.replace('%', '').replace(' annual growth', '')) - 
               parseFloat(a.growthRate.replace('%', '').replace(' annual growth', ''));
>>>>>>> origin/cursor/expand-services-and-deploy-updates-02bf
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const getCategoryIcon = (category: string) => {
<<<<<<< HEAD
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Business Intelligence':
      case 'AI & Legal Tech':
      case 'AI & FinTech':
      case 'AI & Healthcare':
      case 'AI & Supply Chain':
      case 'AI & Customer Service':
        return <Brain className="w-6 h-6 text-blue-500" />;
      case 'IT Infrastructure':
        return <Cpu className="w-6 h-6 text-green-500" />;
      case 'Blockchain & Web3':
        return <Database className="w-6 h-6 text-purple-500" />;
      case 'IoT & Edge Computing':
        return <Network className="w-6 h-6 text-orange-500" />;
      case 'Cybersecurity':
        return <Shield className="w-6 h-6 text-red-500" />;
      default:
        return <Code className="w-6 h-6 text-gray-500" />;
    }
  };

  const getPriceRangeLabel = (price: number) => {
    if (price < 2000) return 'Low';
    if (price < 5000) return 'Medium';
    return 'High';
  };

  const getPriceRangeColor = (price: number) => {
    if (price < 2000) return 'text-green-600 bg-green-100';
    if (price < 5000) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEOHead {...SEOConfigs.innovativeServices} />
      
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Innovative Services Showcase
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our cutting-edge micro SAAS services, IT solutions, and AI-powered platforms designed to transform your business operations and drive innovation.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2" />
                <span>{allServices.length}+ Services</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="w-5 h-5 mr-2" />
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="w-5 h-5 mr-2" />
                <span>Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
=======
  Microchip,
  Atom,
  Satellite,
  Leaf,
  Battery,
  Eye,
  Heart,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface InnovativeService {
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
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const INNOVATIVE_SERVICES: InnovativeService[] = [
  // AI & Machine Learning Services
  {
    id: "ai-business-intelligence-suite",
    title: "Zion AI Business Intelligence Suite",
    description: "Advanced AI-powered business intelligence platform that transforms raw data into actionable insights, predictive analytics, and automated reporting.",
    category: "AI & Machine Learning",
    subcategory: "Business Intelligence",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time data visualization",
      "Predictive analytics engine",
      "Automated report generation",
      "Natural language querying",
      "Multi-source data integration",
      "Custom dashboard builder",
      "Mobile-responsive design",
      "Role-based access control"
    ],
    benefits: [
      "Make data-driven decisions 10x faster",
      "Identify hidden business opportunities",
      "Reduce manual reporting by 90%",
      "Improve forecasting accuracy by 40%",
      "Enable self-service analytics for teams"
    ],
    useCases: [
      "Sales performance analysis",
      "Customer behavior insights",
      "Operational efficiency tracking",
      "Financial forecasting",
      "Market trend analysis"
    ],
    targetAudience: ["Business analysts", "Data scientists", "Executives", "Operations managers", "Marketing teams"],
    tags: ["AI", "Business Intelligence", "Analytics", "Predictive Modeling", "Data Visualization"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "premium",
    marketPrice: "$199 - $1,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "quantum-machine-learning-platform",
    title: "Zion Quantum Machine Learning Platform",
    description: "Cutting-edge quantum machine learning platform that combines quantum computing with AI algorithms to solve complex problems beyond classical computing capabilities.",
    category: "AI & Machine Learning",
    subcategory: "Quantum ML",
    price: 15000,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum neural networks",
      "Quantum optimization algorithms",
      "Hybrid quantum-classical ML",
      "Quantum feature maps",
      "Quantum kernel methods",
      "Real quantum hardware access",
      "Research collaboration tools",
      "Educational resources"
    ],
    benefits: [
      "Solve intractable ML problems",
      "Exponential speedup for certain tasks",
      "Access to quantum advantage",
      "Future-proof ML capabilities",
      "Accelerate research breakthroughs"
    ],
    useCases: [
      "Drug discovery",
      "Financial modeling",
      "Logistics optimization",
      "Material science",
      "Climate modeling"
    ],
    targetAudience: ["Research institutions", "Pharmaceutical companies", "Financial services", "Technology companies", "Universities"],
    tags: ["Quantum", "Machine Learning", "AI", "Research", "Technology"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "premium",
    marketPrice: "$15,000 - $200,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "edge-ai-platform",
    title: "Zion Edge AI Platform",
    description: "Intelligent edge computing platform that brings AI processing closer to data sources, enabling real-time decision making and reducing latency for IoT applications.",
    category: "AI & Machine Learning",
    subcategory: "Edge Computing",
    price: 199,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge AI model deployment",
      "Real-time inference engine",
      "Model optimization tools",
      "Edge device management",
      "Data synchronization",
      "Offline operation support",
      "Security & encryption",
      "Scalable edge infrastructure"
    ],
    benefits: [
      "Reduce latency by 90%",
      "Lower bandwidth costs by 70%",
      "Enable offline AI operations",
      "Improve privacy & security",
      "Scale AI to edge devices"
    ],
    useCases: [
      "Autonomous vehicle perception",
      "Industrial quality control",
      "Smart surveillance systems",
      "Healthcare monitoring",
      "Retail analytics"
    ],
    targetAudience: ["Manufacturing companies", "Autonomous vehicle companies", "Smart city operators", "Healthcare providers", "Retail chains"],
    tags: ["Edge AI", "IoT", "Real-time", "Low Latency", "Distributed Computing"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "professional",
    marketPrice: "$199 - $2,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Cybersecurity & Compliance
  {
    id: "cybersecurity-compliance-automation",
    title: "Zion Cybersecurity Compliance Automation",
    description: "Comprehensive cybersecurity compliance platform that automates security assessments, compliance monitoring, and risk management for businesses of all sizes.",
    category: "Security",
    subcategory: "Compliance",
    price: 149,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated compliance scanning",
      "Real-time threat detection",
      "Vulnerability assessment",
      "Compliance reporting (SOC2, GDPR, HIPAA)",
      "Security policy management",
      "Incident response automation",
      "Employee security training",
      "24/7 security monitoring"
    ],
    benefits: [
      "Achieve compliance 50% faster",
      "Reduce security incidents by 80%",
      "Automate 90% of compliance tasks",
      "Protect against emerging threats",
      "Maintain audit readiness year-round"
    ],
    useCases: [
      "SOC2 compliance automation",
      "GDPR data protection",
      "HIPAA healthcare compliance",
      "PCI DSS for e-commerce",
      "General security posture management"
    ],
    targetAudience: ["IT security teams", "Compliance officers", "Healthcare organizations", "Financial services", "E-commerce businesses"],
    tags: ["Cybersecurity", "Compliance", "SOC2", "GDPR", "HIPAA", "Automation"],
    estimatedDelivery: "2-4 weeks",
    supportLevel: "professional",
    marketPrice: "$149 - $1,500/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // IoT & Edge Computing
  {
    id: "iot-management-platform",
    title: "Zion IoT Management Platform",
    description: "Enterprise-grade IoT device management platform that provides real-time monitoring, automation, and analytics for connected devices and smart infrastructure.",
    category: "Cloud",
    subcategory: "IoT",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Device lifecycle management",
      "Real-time monitoring & alerts",
      "Automated device provisioning",
      "Data analytics & visualization",
      "Edge computing capabilities",
      "Multi-protocol support",
      "Scalable cloud infrastructure",
      "API-first architecture"
    ],
    benefits: [
      "Manage 10,000+ devices from single dashboard",
      "Reduce operational costs by 40%",
      "Improve device uptime by 99.9%",
      "Real-time insights for decision making",
      "Scalable for enterprise growth"
    ],
    useCases: [
      "Smart building management",
      "Industrial IoT monitoring",
      "Asset tracking & management",
      "Environmental monitoring",
      "Predictive maintenance"
    ],
    targetAudience: ["Manufacturing companies", "Smart city operators", "Energy utilities", "Healthcare facilities", "Retail chains"],
    tags: ["IoT", "Device Management", "Real-time Monitoring", "Edge Computing", "Smart Infrastructure"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$299 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Blockchain & DeFi
  {
    id: "blockchain-defi-platform",
    title: "Zion Blockchain & DeFi Platform",
    description: "Enterprise blockchain platform with DeFi capabilities for secure, transparent financial transactions, smart contracts, and decentralized applications.",
    category: "Finance",
    subcategory: "Blockchain",
    price: 399,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-blockchain support",
      "Smart contract development",
      "DeFi protocol integration",
      "Token management system",
      "Wallet integration",
      "Compliance & KYC tools",
      "Analytics dashboard",
      "API for developers"
    ],
    benefits: [
      "Reduce transaction costs by 70%",
      "Increase transaction speed by 10x",
      "Enhanced security & transparency",
      "Access to DeFi yield opportunities",
      "Future-proof financial infrastructure"
    ],
    useCases: [
      "Cross-border payments",
      "Supply chain transparency",
      "Tokenized assets",
      "DeFi yield farming",
      "Smart contract automation"
    ],
    targetAudience: ["Financial institutions", "Fintech companies", "Investment firms", "E-commerce platforms", "Supply chain companies"],
    tags: ["Blockchain", "DeFi", "Smart Contracts", "Cryptocurrency", "Financial Technology"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$399 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Marketing & Automation
  {
    id: "ai-marketing-automation",
    title: "Zion AI Marketing Automation",
    description: "Intelligent marketing automation platform that uses AI to personalize campaigns, optimize customer journeys, and maximize ROI across all marketing channels.",
    category: "Marketing",
    subcategory: "Automation",
    price: 99,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered personalization",
      "Multi-channel campaign management",
      "Behavioral targeting",
      "A/B testing automation",
      "Lead scoring & nurturing",
      "ROI tracking & analytics",
      "Email & SMS automation",
      "Social media management"
    ],
    benefits: [
      "Increase conversion rates by 45%",
      "Reduce customer acquisition costs by 30%",
      "Improve customer lifetime value",
      "Automate repetitive marketing tasks",
      "Data-driven campaign optimization"
    ],
    useCases: [
      "Email marketing campaigns",
      "Social media advertising",
      "Lead generation & nurturing",
      "Customer retention programs",
      "Product launch campaigns"
    ],
    targetAudience: ["Marketing teams", "E-commerce businesses", "B2B companies", "Agencies", "Startups"],
    tags: ["Marketing Automation", "AI", "Personalization", "Lead Generation", "ROI Optimization"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "professional",
    marketPrice: "$99 - $1,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Quantum Computing
  {
    id: "quantum-computing-platform",
    title: "Zion Quantum Computing Platform",
    description: "Cutting-edge quantum computing platform that provides access to quantum algorithms, simulations, and optimization tools for research and enterprise applications.",
    category: "AI",
    subcategory: "Quantum Computing",
    price: 599,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum algorithm library",
      "Quantum simulation tools",
      "Hybrid quantum-classical computing",
      "Real quantum hardware access",
      "Quantum machine learning",
      "Optimization algorithms",
      "Research collaboration tools",
      "Educational resources"
    ],
    benefits: [
      "Solve complex problems 1000x faster",
      "Access to cutting-edge quantum technology",
      "Accelerate research & development",
      "Future-proof computational capabilities",
      "Competitive advantage in innovation"
    ],
    useCases: [
      "Drug discovery & molecular modeling",
      "Financial portfolio optimization",
      "Logistics & supply chain optimization",
      "Cryptography & security",
      "Machine learning acceleration"
    ],
    targetAudience: ["Research institutions", "Pharmaceutical companies", "Financial services", "Technology companies", "Universities"],
    tags: ["Quantum Computing", "Research", "Optimization", "Simulation", "Innovation"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$599 - $25,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // HR & Productivity
  {
    id: "ai-hr-management-platform",
    title: "Zion AI HR Management Platform",
    description: "Intelligent human resources platform that uses AI to streamline recruitment, employee management, performance tracking, and workplace analytics.",
    category: "Productivity",
    subcategory: "Human Resources",
    price: 79,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered candidate screening",
      "Automated interview scheduling",
      "Performance analytics",
      "Employee engagement tracking",
      "Skills gap analysis",
      "Predictive turnover modeling",
      "Compliance management",
      "Mobile HR app"
    ],
    benefits: [
      "Reduce hiring time by 60%",
      "Improve candidate quality by 40%",
      "Increase employee retention",
      "Automate HR processes",
      "Data-driven HR decisions"
    ],
    useCases: [
      "Talent acquisition",
      "Performance management",
      "Employee development",
      "Workforce planning",
      "Compliance reporting"
    ],
    targetAudience: ["HR departments", "Recruitment agencies", "Small businesses", "Enterprise companies", "Startups"],
    tags: ["HR Management", "AI", "Recruitment", "Performance Analytics", "Employee Engagement"],
    estimatedDelivery: "2-3 weeks",
    supportLevel: "professional",
    marketPrice: "$79 - $800/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Sustainability & ESG
  {
    id: "sustainable-tech-platform",
    title: "Zion Sustainable Technology Platform",
    description: "Comprehensive platform for monitoring, managing, and optimizing environmental impact, energy efficiency, and sustainability initiatives for businesses.",
    category: "Analytics",
    subcategory: "Sustainability",
    price: 149,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Carbon footprint tracking",
      "Energy consumption monitoring",
      "Sustainability reporting",
      "ESG compliance tools",
      "Green technology recommendations",
      "Environmental impact analytics",
      "Stakeholder communication",
      "Goal setting & tracking"
    ],
    benefits: [
      "Reduce carbon footprint by 25%",
      "Lower energy costs by 30%",
      "Improve ESG ratings",
      "Meet sustainability goals",
      "Enhance brand reputation"
    ],
    useCases: [
      "Environmental impact assessment",
      "Energy efficiency optimization",
      "Sustainability reporting",
      "ESG compliance",
      "Green technology adoption"
    ],
    targetAudience: ["Manufacturing companies", "Energy companies", "Real estate companies", "Retail chains", "Service businesses"],
    tags: ["Sustainability", "ESG", "Carbon Tracking", "Energy Management", "Environmental Impact"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "professional",
    marketPrice: "$149 - $2,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Legal Technology
  {
    id: "ai-legal-tech-platform",
    title: "Zion AI Legal Technology Platform",
    description: "Advanced legal technology platform that uses AI to automate document review, contract analysis, legal research, and compliance monitoring.",
    category: "AI",
    subcategory: "Legal Technology",
    price: 299,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI document review",
      "Contract analysis & extraction",
      "Legal research automation",
      "Compliance monitoring",
      "Risk assessment tools",
      "Case law analysis",
      "Legal document generation",
      "Client portal"
    ],
    benefits: [
      "Reduce document review time by 80%",
      "Improve contract accuracy by 95%",
      "Lower legal costs by 40%",
      "Enhance compliance monitoring",
      "Scale legal operations efficiently"
    ],
    useCases: [
      "Contract review & analysis",
      "Due diligence processes",
      "Legal research",
      "Compliance monitoring",
      "Document automation"
    ],
    targetAudience: ["Law firms", "Corporate legal departments", "Compliance officers", "Legal consultants", "Businesses"],
    tags: ["Legal Tech", "AI", "Document Review", "Contract Analysis", "Compliance"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$299 - $5,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },

  // Autonomous Business Operations
  {
    id: "autonomous-business-operations",
    title: "Zion Autonomous Business Operations Platform",
    description: "Revolutionary platform that enables fully autonomous business operations through AI agents, automated decision-making, and intelligent process orchestration.",
    category: "Automation",
    subcategory: "Business Operations",
    price: 499,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI business agents",
      "Automated decision making",
      "Process orchestration",
      "Real-time monitoring",
      "Predictive maintenance",
      "Autonomous optimization",
      "Multi-tenant architecture",
      "API ecosystem"
    ],
    benefits: [
      "Reduce operational costs by 60%",
      "Increase efficiency by 300%",
      "Enable 24/7 autonomous operations",
      "Eliminate human error",
      "Scale operations infinitely"
    ],
    useCases: [
      "Autonomous manufacturing",
      "Self-managing supply chains",
      "Automated customer service",
      "Intelligent resource allocation",
      "Predictive business planning"
    ],
    targetAudience: ["Enterprise companies", "Manufacturing companies", "Service businesses", "Technology companies", "Innovation leaders"],
    tags: ["Autonomous Operations", "AI Agents", "Process Automation", "Business Intelligence", "Innovation"],
    estimatedDelivery: "8-12 weeks",
    supportLevel: "enterprise",
    marketPrice: "$499 - $50,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

const InnovativeServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');

  const categories = ['All', ...Array.from(new Set(INNOVATIVE_SERVICES.map(service => service.category)))];

  const filteredServices = INNOVATIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
=======
  Users, 
  Zap, 
  Shield, 
  TrendingUp, 
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function InnovativeServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'name'>('rating');

  const filteredServices = useMemo(() => {
    let filtered = INNOVATIVE_MICRO_SAAS_SERVICES;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-895f
    }

<<<<<<< HEAD
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning': return <Brain className="h-6 w-6" />;
      case 'Security': return <Shield className="h-6 w-6" />;
      case 'Cloud': return <Cpu className="h-6 w-6" />;
      case 'Finance': return <DollarSign className="h-6 w-6" />;
      case 'Marketing': return <TrendingUp className="h-6 w-6" />;
      case 'Productivity': return <Users className="h-6 w-6" />;
      case 'Analytics': return <BarChart3 className="h-6 w-6" />;
      case 'Automation': return <Zap className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning': return 'from-cyan-500 to-blue-600';
      case 'Security': return 'from-purple-500 to-pink-600';
      case 'Cloud': return 'from-green-500 to-emerald-600';
      case 'Finance': return 'from-yellow-500 to-orange-600';
      case 'Marketing': return 'from-pink-500 to-rose-600';
      case 'Productivity': return 'from-indigo-500 to-purple-600';
      case 'Analytics': return 'from-teal-500 to-cyan-600';
      case 'Automation': return 'from-orange-500 to-red-600';
      default: return 'from-gray-500 to-slate-600';
=======
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.price.starter - b.price.starter;
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

=======
import React, { useState } from 'react';
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

interface InnovativeService {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  price: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  complexity: string;
  timeline: string;
  featured: boolean;
  trending: boolean;
}

const INNOVATIVE_SERVICES: InnovativeService[] = [
  {
    id: 'quantum-computing',
    title: 'Quantum Computing Simulation',
    description: 'Revolutionary quantum computing platform for solving complex optimization problems in logistics, finance, and scientific research.',
    category: 'Advanced Computing',
    icon: '⚛️',
    price: '$50,000 - $100,000',
    features: [
      'Quantum algorithm simulation',
      'Hybrid quantum-classical computing',
      'Real-time optimization',
      'Research collaboration tools',
      'Performance benchmarking'
    ],
    benefits: [
      'Solve problems 1000x faster',
      'Unlock new computational possibilities',
      'Future-proof technology investment',
      'Competitive advantage in research'
    ],
    useCases: ['Portfolio optimization', 'Supply chain logistics', 'Drug discovery', 'Climate modeling'],
    complexity: 'Very High',
    timeline: '20-24 weeks',
    featured: true,
    trending: true
  },
  {
    id: 'space-tech',
    title: 'Space Technology & Satellite Solutions',
    description: 'Advanced space technology solutions including satellite communication, space data analytics, and orbital optimization.',
    category: 'Space Technology',
    icon: '🚀',
    price: '$150,000 - $500,000',
    features: [
      'Satellite communication systems',
      'Orbital optimization algorithms',
      'Space data analytics',
      'Ground station integration',
      'Mission planning software'
    ],
    benefits: [
      'Global communication coverage',
      'Advanced space data insights',
      'Optimized satellite operations',
      'Future-ready space infrastructure'
    ],
    useCases: ['Global communications', 'Earth observation', 'Navigation systems', 'Research missions'],
    complexity: 'Very High',
    timeline: '32-40 weeks',
    featured: true,
    trending: true
  },
  {
    id: 'biotech-ai',
    title: 'Biotech AI Drug Discovery',
    description: 'AI-powered drug discovery platform using machine learning for pharmaceutical research and development.',
    category: 'Biotechnology',
    icon: '🧬',
    price: '$100,000 - $300,000',
    features: [
      'AI molecular modeling',
      'Drug target identification',
      'Clinical trial optimization',
      'Regulatory compliance tools',
      'Collaborative research platform'
    ],
    benefits: [
      'Accelerate drug discovery by 10x',
      'Reduce R&D costs significantly',
      'Improve success rates',
      'Faster time to market'
    ],
    useCases: ['Pharmaceutical R&D', 'Clinical trials', 'Drug repurposing', 'Personalized medicine'],
    complexity: 'Very High',
    timeline: '24-32 weeks',
    featured: true,
    trending: true
  },
  {
    id: 'autonomous-vehicles',
    title: 'Autonomous Vehicles Platform',
    description: 'Complete autonomous vehicle solution with AI navigation, safety systems, and fleet management capabilities.',
    category: 'Autonomous Technology',
    icon: '🚗',
    price: '$150,000 - $400,000',
    features: [
      'AI navigation and pathfinding',
      'Advanced safety systems',
      'Fleet management platform',
      'Real-time monitoring',
      'Regulatory compliance'
    ],
    benefits: [
      'Reduce transportation costs by 50%',
      'Improve safety and efficiency',
      '24/7 operation capability',
      'Future-ready transportation'
    ],
    useCases: ['Logistics', 'Public transportation', 'Mining operations', 'Agriculture'],
    complexity: 'Very High',
    timeline: '28-36 weeks',
    featured: true,
    trending: false
  },
  {
    id: 'ai-robotics',
    title: 'AI Robotics & Industrial Automation',
    description: 'Intelligent robotics solutions with AI-powered automation for manufacturing, logistics, and industrial processes.',
    category: 'Industrial AI',
    icon: '🤖',
    price: '$50,000 - $150,000',
    features: [
      'AI-powered robot control systems',
      'Computer vision integration',
      'Predictive maintenance',
      'Safety monitoring and compliance',
      'Integration with existing systems'
    ],
    benefits: [
      'Increase production efficiency by 60%',
      'Reduce operational costs by 40%',
      'Improve workplace safety',
      '24/7 operation capability'
    ],
    useCases: ['Manufacturing', 'Warehouse automation', 'Quality control', 'Assembly lines'],
    complexity: 'High',
    timeline: '20-28 weeks',
    featured: true,
    trending: true
  },
  {
    id: 'metaverse-platform',
    title: 'Enterprise Metaverse Platform',
    description: 'Complete metaverse solution for businesses with virtual offices, training environments, and immersive customer experiences.',
    category: 'Immersive Technology',
    icon: '🥽',
    price: '$5,000 - $15,000/month',
    features: [
      '3D virtual environments',
      'VR/AR integration',
      'Collaborative workspaces',
      'Custom branding',
      'Analytics dashboard'
    ],
    benefits: [
      'Reduce travel costs by 60%',
      'Improve team collaboration',
      'Enhanced customer engagement',
      'Future-ready business platform'
    ],
    useCases: ['Virtual meetings', 'Training simulations', 'Product demos', 'Virtual events'],
    complexity: 'High',
    timeline: '6-8 weeks',
    featured: true,
    trending: true
  },
  {
    id: 'green-tech',
    title: 'Green Technology Sustainability',
    description: 'Comprehensive sustainability management platform for tracking carbon footprint, energy optimization, and environmental compliance.',
    category: 'Sustainability',
    icon: '🌱',
    price: '$4,000 - $10,000/month',
    features: [
      'Carbon footprint tracking',
      'Energy consumption monitoring',
      'Sustainability reporting',
      'Compliance management',
      'Predictive analytics'
    ],
    benefits: [
      'Reduce energy costs by 30%',
      'Achieve sustainability goals',
      'Compliance with regulations',
      'Improve brand reputation'
    ],
    useCases: ['Corporate sustainability', 'Building management', 'Manufacturing', 'Supply chain'],
    complexity: 'Medium',
    timeline: '4-6 weeks',
    featured: true,
    trending: false
  },
  {
    id: 'ai-legal',
    title: 'AI Legal Document Review',
    description: 'Automated legal document analysis and review using natural language processing and machine learning.',
    category: 'Legal Tech',
    icon: '⚖️',
    price: '$15,000 - $40,000',
    features: [
      'Automated contract analysis',
      'Risk assessment scoring',
      'Compliance checking',
      'Document comparison',
      'Legal research assistance'
    ],
    benefits: [
      'Reduce document review time by 80%',
      'Improve accuracy and consistency',
      'Identify potential risks faster',
      'Lower legal costs'
    ],
    useCases: ['Contract review', 'Compliance audits', 'Due diligence', 'Legal research'],
    complexity: 'High',
    timeline: '10-12 weeks',
    featured: true,
    trending: true
  }
];

const categories = [
  { id: 'all', name: 'All Services', icon: '🚀' },
  { id: 'ai', name: 'AI & Machine Learning', icon: '🤖' },
  { id: 'space', name: 'Space Technology', icon: '🚀' },
  { id: 'biotech', name: 'Biotechnology', icon: '🧬' },
  { id: 'autonomous', name: 'Autonomous Systems', icon: '🚗' },
  { id: 'immersive', name: 'Immersive Tech', icon: '🥽' },
  { id: 'sustainability', name: 'Sustainability', icon: '🌱' },
  { id: 'legal', name: 'Legal Technology', icon: '⚖️' }
];

export const InnovativeServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<InnovativeService | null>(null);

  const filteredServices = selectedCategory === 'all' 
    ? INNOVATIVE_SERVICES 
    : INNOVATIVE_SERVICES.filter(service => 
        service.category.toLowerCase().includes(selectedCategory) ||
        service.title.toLowerCase().includes(selectedCategory)
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-895f
=======
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple via-zion-blue to-zion-cyan opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Next-Generation
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our cutting-edge portfolio of innovative services that push the boundaries of what's possible. 
              From quantum computing to space technology, we're building the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark px-8 py-4 text-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
              <Button
                onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Innovation Consultation'}
                variant="outline"
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 text-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-zion-blue-dark'
                    : 'border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </Button>
            ))}
=======
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      <SEOHead
        title="Innovative Technology Services Showcase | Zion Tech Group"
        description="Discover cutting-edge AI, quantum computing, blockchain, IoT, and emerging technology solutions. Transform your business with our innovative micro SAAS services."
        keywords="AI services, quantum computing, blockchain solutions, IoT platform, emerging technology, micro SAAS, Zion Tech Group"
        type="website"
        url="https://ziontechgroup.com/innovative-services-showcase"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zion-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zion-cyan/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            Innovative Technology Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover cutting-edge AI, quantum computing, blockchain, IoT, and emerging technology solutions that will revolutionize your business operations and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold rounded-lg transition-all duration-300"
            >
              Request Custom Quote
            </Link>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section id="services-grid" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card 
                  className="bg-zion-blue-light/20 border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 cursor-pointer group h-full"
                  onClick={() => setSelectedService(service)}
=======
      {/* Contact Information Banner */}
      <section className="py-8 bg-zion-blue-dark/50 border-y border-zion-blue-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3 text-zion-cyan">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-3 text-zion-purple-light">
              <Mail className="h-5 w-5" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-3 text-zion-slate-light">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-zion-purple text-white'
                      : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-light/20'
                  }`}
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                >
                  {category}
                </button>
              ))}
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  Users, 
  Zap,
  Globe,
  Lock,
  BarChart3,
  Code,
  Database,
  Cloud,
  Smartphone,
  Target,
  Star,
  CheckCircle,
  Clock,
  DollarSign,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { INNOVATIVE_AI_SERVICES } from '../data/innovativeAIServices';
import { INNOVATIVE_IT_SERVICES } from '../data/innovativeITServices';
import { INNOVATIVE_MICRO_SAAS_SERVICES } from '../data/innovativeMicroSaasServices';

export default function InnovativeServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

<<<<<<< HEAD
=======
  const allServices = [
    ...INNOVATIVE_AI_SERVICES,
    ...INNOVATIVE_IT_SERVICES,
    ...INNOVATIVE_MICRO_SAAS_SERVICES
  ];

  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];
  
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Marketing':
      case 'AI & Computer Vision':
      case 'AI & Finance':
      case 'AI & Healthcare':
      case 'AI & Operations':
        return Brain;
      case 'IT Infrastructure':
      case 'IT Security':
        return Shield;
      case 'Micro SAAS':
        return Cpu;
      default:
        return Rocket;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
      case 'AI & Marketing':
      case 'AI & Computer Vision':
      case 'AI & Finance':
      case 'AI & Healthcare':
      case 'AI & Operations':
        return 'from-cyan-500 to-blue-600';
      case 'IT Infrastructure':
      case 'IT Security':
        return 'from-purple-500 to-pink-600';
      case 'Micro SAAS':
        return 'from-green-500 to-emerald-600';
      default:
        return 'from-orange-500 to-red-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative Services Showcase - Zion Tech Group" 
        description="Discover our comprehensive range of innovative AI services, IT solutions, and micro SAAS platforms designed to transform your business operations and drive growth."
      />

      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Innovative Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Explore our cutting-edge technology solutions that combine artificial intelligence, 
            advanced IT infrastructure, and innovative micro SAAS platforms to drive your business forward
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = getCategoryIcon(category);
              const colorClass = getCategoryColor(category);
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category
                      ? `bg-gradient-to-r ${colorClass} border-transparent text-white shadow-lg`
                      : 'border-zion-cyan/30 text-zion-cyan hover:border-zion-cyan hover:bg-zion-cyan/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="capitalize">{category === 'all' ? 'All Services' : category}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => {
            const Icon = getCategoryIcon(service.category);
            const colorClass = getCategoryColor(service.category);
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClass}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">
                      ${service.price}
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      per {service.pricingModel}
                    </div>
                  </div>
                </div>

                {/* Service Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${colorClass} text-white`}>
                    {service.category}
                  </span>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-zion-slate-light">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Price & ROI */}
                <div className="mb-4 p-3 bg-zion-blue-light/20 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate-light">Market Price:</span>
                    <span className="text-zion-cyan font-medium">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-zion-slate-light">ROI:</span>
                    <span className="text-green-400 font-medium">{service.roi}</span>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-zion-cyan/20 pt-4">
                  <div className="flex items-center justify-between text-sm text-zion-slate-light mb-2">
                    <span>Contact us for custom pricing</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="flex items-center gap-2 text-zion-cyan hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {service.contactInfo.phone}
                    </a>
                    <a 
                      href={`mailto:${service.contactInfo.email}`}
                      className="flex items-center gap-2 text-zion-cyan hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </div>
                  <a 
                    href={service.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors text-sm mt-2"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Call to Action */}
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-500 hover:to-zion-cyan transition-all duration-300 transform hover:scale-105">
                    Get Started Today
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="bg-zion-blue-light/10 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these innovative solutions 
              and drive real business results. Contact us today to get started.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+13024640950"
                className="flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-500 hover:to-zion-cyan transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center gap-2 border border-zion-cyan text-zion-cyan py-3 px-6 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="mt-6 text-sm text-zion-slate-light">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:text-white">https://ziontechgroup.com</a></p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-3558
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5c5f
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
<<<<<<< HEAD
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
=======
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  Globe, 
  Lock, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Clock,
  TrendingUp,
  Award,
  Mail,
  Phone,
  Search,
  Filter,
  ExternalLink
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES, INNOVATIVE_SAAS_CATEGORIES } from '../data/innovativeMicroSaasServices';
import { SPECIALIZED_IT_SERVICES, SPECIALIZED_IT_CATEGORIES } from '../data/specializedITServices';

export default function InnovativeServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('all');

  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES, ...SPECIALIZED_IT_SERVICES];
  const allCategories = [...INNOVATIVE_SAAS_CATEGORIES, ...SPECIALIZED_IT_CATEGORIES];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'budget' && service.price.starter <= 200) ||
      (priceRange === 'mid-range' && service.price.starter > 200 && service.price.starter <= 500) ||
      (priceRange === 'premium' && service.price.starter > 500);
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const ServiceCard = ({ service }: { service: any }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-zion-blue-dark mb-2 group-hover:text-zion-cyan transition-colors">
            {service.title}
          </h3>
          <p className="text-zion-slate text-sm mb-3">
            {service.description}
          </p>
        </div>
        {service.status === 'Active' && (
          <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Active
          </div>
        )}
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{service.rating}</span>
          <span className="text-zion-slate text-sm">({service.reviewCount} reviews)</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-zion-cyan" />
            <span className="text-sm font-semibold text-zion-blue-dark">
              Starting at ${service.price.starter}/month
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-zion-slate" />
            <span className="text-zion-slate text-sm">{service.deliveryTime}</span>
          </div>
        </div>

        <div className="text-xs text-zion-slate mb-3">
          Market Price: {service.marketPrice}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-zion-blue-dark mb-2">Key Features:</h4>
        <div className="grid grid-cols-2 gap-1">
          {service.features.slice(0, 4).map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-zion-slate">
              <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <a 
          href={service.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zion-cyan hover:text-zion-cyan-light text-sm flex items-center group"
        >
          Learn More <ExternalLink className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
        </a>
        
        <div className="flex gap-2">
          <a 
            href={`mailto:${service.contactInfo.email}`}
            className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-3 py-1 rounded text-xs font-medium transition-colors"
          >
            Get Quote
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative Services Showcase - Zion Tech Group" 
        description="Discover our comprehensive range of innovative micro SAAS services and specialized IT solutions designed to transform your business."
        keywords="micro SAAS, IT services, AI solutions, cybersecurity, cloud computing, digital transformation, Zion Tech Group"
        url="https://ziontechgroup.com/services/innovative-showcase"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Innovative Services Showcase
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Cutting-Edge Solutions for Modern Businesses
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Explore our comprehensive portfolio of micro SAAS services and specialized IT solutions 
            designed to accelerate your digital transformation and drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-zion-blue-light rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-zion-blue-dark mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-zion-blue-light rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  <option value="all">All Categories</option>
                  {allCategories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-zion-blue-dark mb-2">Search Services</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 pl-10 border border-zion-blue-light rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate" />
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      <SEO 
        title="Innovative Micro SAAS Services - Zion Tech Group"
        description="Discover cutting-edge micro SAAS solutions powered by AI, quantum computing, and blockchain technology. Transform your business with our innovative services."
        url="https://ziontechgroup.com/innovative-services"
      />

      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 text-xs animate-matrix-rain opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400 mr-3" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Innovative Micro SAAS
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge micro SAAS solutions powered by AI, quantum computing, and blockchain technology. 
              Transform your business with our innovative services designed for the future.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { number: INNOVATIVE_MICRO_SAAS_SERVICES.length.toString(), label: "Services", icon: "🚀" },
                { number: INNOVATIVE_SAAS_CATEGORIES.length.toString(), label: "Categories", icon: "📂" },
                { number: "4.8+", label: "Average Rating", icon: "⭐" },
                { number: "1000+", label: "Happy Clients", icon: "😊" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Search and Filter Section */}
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex-shrink-0">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {INNOVATIVE_SAAS_CATEGORIES.map((category) => (
                      <option key={category.value} value={category.label}>
                        {category.label} ({category.serviceCount})
                      </option>
                    ))}
                  </select>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-895f
                </div>

<<<<<<< HEAD
              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-zion-blue-dark mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-zion-blue-light rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget ($0 - $200/month)</option>
                  <option value="mid-range">Mid-Range ($201 - $500/month)</option>
                  <option value="premium">Premium ($500+/month)</option>
                </select>
=======
                {/* Sort */}
                <div className="flex-shrink-0">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'rating' | 'price' | 'name')}
                    className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    <option value="rating">Sort by Rating</option>
                    <option value="price">Sort by Price</option>
                    <option value="name">Sort by Name</option>
                  </select>
                </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-895f
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              {filteredServices.length} Services Available
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Discover the perfect solution for your business needs from our comprehensive portfolio 
              of innovative services and solutions.
            </p>
          </div>
          
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-zion-blue-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-zion-blue-dark" />
              </div>
              <h3 className="text-2xl font-semibold text-zion-blue-dark mb-2">No services found</h3>
              <p className="text-zion-slate mb-6">
                Try adjusting your filters or search terms to find the services you need.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setPriceRange('all');
                }}
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
            </div>
          )}
        </div>
      </section>

<<<<<<< HEAD
            {/* Category Filter */}
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

            {/* Price Range Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Prices</option>
              <option value="low">Low ($0 - $2,000)</option>
              <option value="medium">Medium ($2,000 - $5,000)</option>
              <option value="high">High ($5,000+)</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>
<<<<<<< HEAD
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {sortedServices.length === 0 ? (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group">
                {/* Service Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getCategoryIcon(service.category)}
                      <div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriceRangeColor(service.price)}`}>
                          {getPriceRangeLabel(service.price)}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        per {service.pricingModel}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.estimatedDelivery}
                    </span>
                    <span className="flex items-center">
                      <ShieldCheck className="w-4 h-4 mr-1" />
                      {service.supportLevel}
                    </span>
                  </div>
                </div>

                {/* Service Features */}
                <div className="p-6 border-b border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{service.features.length - 4} more features
                      </div>
=======
                className="px-4 py-2 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-zion-blue-dark/50 border border-zion-blue-light/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="category">Sort by Category</option>
              </select>
=======
      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Contact our team to discuss your requirements and get personalized recommendations 
              for the services that best fit your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">Call Us</h3>
              <p className="text-zion-slate mb-3">+1 302 464 0950</p>
              <a 
                href="tel:+13024640950"
                className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
              >
                Call Now →
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">Email Us</h3>
              <p className="text-zion-slate mb-3">kleber@ziontechgroup.com</p>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
              >
                Send Email →
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">Visit Us</h3>
              <p className="text-zion-slate mb-3">364 E Main St STE 1008<br />Middletown DE 19709</p>
              <a 
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
              >
                Visit Website →
              </a>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedServices.map((service) => (
              <div
                key={service.id}
                className="bg-zion-blue-dark/50 backdrop-blur-md rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-zion-slate-light text-sm">{service.subcategory}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">
                      {service.currency}{service.price.toLocaleString()}
                    </div>
                    <div className="text-zion-slate-light text-sm">per {service.pricingModel}</div>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-zion-slate-light mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-zion-cyan" />
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-zion-blue-light/20 text-zion-slate-light text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 4 && (
                      <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple-light text-xs rounded-md">
                        +{service.features.length - 4} more
                      </span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5c5f
                    )}
                  </div>
                </div>

<<<<<<< HEAD
                {/* Service Benefits */}
                <div className="p-6 border-b border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-3">Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
=======
                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Star className="h-4 w-4 text-zion-cyan" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Clock className="h-4 w-4" />
                    <span>{service.estimatedDelivery}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Award className="h-4 w-4" />
                    <span>{service.supportLevel}</span>
                  </div>
                </div>

                {/* Market Price */}
                <div className="mb-6 p-3 bg-zion-blue-light/10 rounded-lg">
                  <div className="text-center">
                    <div className="text-zion-slate-light text-sm mb-1">Market Price Range</div>
                    <div className="text-zion-cyan font-semibold">{service.marketPrice}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-zion-purple/20 text-zion-purple-light text-xs rounded-md"
                      >
                        {tag}
                      </span>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5c5f
                    ))}
                  </div>
                </div>

<<<<<<< HEAD
                {/* Service Footer */}
                <div className="p-6 bg-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                      Market Price: <span className="font-medium">{service.marketPrice}</span>
                    </div>
                    <div className="flex space-x-2">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link
<<<<<<< HEAD
                      to={service.contactInfo.website}
=======
                      to={('websiteUrl' in service ? service.websiteUrl : service.contactInfo?.website) || '/'}
>>>>>>> origin/cursor/website-audit-and-enhancement-53a4
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <a
                      href={`tel:${service.contactInfo.phone}`}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center"
                      title="Call us"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${service.contactInfo.email}`}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center"
                      title="Email us"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
=======
                {/* CTA Buttons */}
                <div className="flex flex-col gap-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="w-full text-center px-4 py-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-medium rounded-lg transition-all duration-300"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full text-center px-4 py-2 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-medium rounded-lg transition-all duration-300"
                  >
                    Get Started
                  </Link>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5c5f
                </div>
              </div>
            ))}
          </div>
<<<<<<< HEAD
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our innovative services are designed to help you stay ahead of the competition. 
            Get in touch with our experts to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-sm">
              <MapPin className="w-4 h-4 inline mr-2" />
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
=======
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our innovative technology solutions are designed to accelerate your digital transformation and give you a competitive edge in today's rapidly evolving market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold rounded-lg transition-all duration-300"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Footer */}
      <section className="py-12 bg-zion-blue-dark/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <div className="space-y-2 text-zion-slate-light">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
              <div className="text-zion-slate-light">
                <p>364 E Main St STE 1008</p>
                <p>Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Learn More</h3>
              <div className="space-y-2">
                <Link to="/services" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                  All Services
                </Link>
                <Link to="/case-studies" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                  Case Studies
                </Link>
                <Link to="/about" className="block text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300">
                  About Zion Tech
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-5c5f
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface InnovativeService {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  marketPrice: string;
  estimatedDelivery: string;
  supportLevel: string;
  useCases: string[];
  targetAudience: string[];
  tags: string[];
}

const INNOVATIVE_SERVICES: InnovativeService[] = [
  {
    id: "ai-autonomous-code-review",
    title: "AI Autonomous Code Review & Quality Assurance",
    description: "Intelligent code review system that automatically analyzes, reviews, and suggests improvements for code quality, security, and performance.",
    category: "AI & Machine Learning",
    price: 899,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Automated code analysis",
      "Security vulnerability detection",
      "Performance optimization suggestions",
      "Code style enforcement",
      "Integration with CI/CD pipelines",
      "Real-time feedback",
      "Custom rule configuration",
      "Multi-language support"
    ],
    benefits: [
      "Reduce code review time by 80%",
      "Improve code quality by 60%",
      "Early bug detection",
      "Consistent coding standards",
      "Reduced technical debt"
    ],
    marketPrice: "$899 - $2,499/month",
    estimatedDelivery: "1-2 weeks",
    supportLevel: "premium",
    useCases: [
      "Software development teams",
      "DevOps teams",
      "Quality assurance teams",
      "Open source projects",
      "Enterprise development"
    ],
    targetAudience: [
      "Software developers",
      "DevOps engineers",
      "QA engineers",
      "Engineering managers",
      "CTOs"
    ],
    tags: ["AI", "Code Review", "Quality Assurance", "DevOps", "Automation"]
  },
  {
    id: "quantum-encryption-as-a-service",
    title: "Quantum Encryption as a Service (QEaaS)",
    description: "Next-generation encryption platform leveraging quantum-resistant algorithms to protect data against future quantum computing threats.",
    category: "Cybersecurity",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum-resistant algorithms",
      "Post-quantum cryptography",
      "Hybrid encryption systems",
      "Key management",
      "Compliance certifications",
      "Real-time threat monitoring",
      "API integrations",
      "Zero-knowledge proofs"
    ],
    benefits: [
      "Future-proof security",
      "Quantum-resistant protection",
      "Regulatory compliance",
      "Scalable encryption",
      "Advanced key management"
    ],
    marketPrice: "$3,500 - $12,000/month",
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    useCases: [
      "Financial institutions",
      "Healthcare organizations",
      "Government agencies",
      "Defense contractors",
      "Cloud service providers"
    ],
    targetAudience: [
      "CISOs",
      "Security architects",
      "Compliance officers",
      "Government officials",
      "Financial regulators"
    ],
    tags: ["Quantum Security", "Encryption", "Post-Quantum", "Compliance", "Zero-Trust"]
  },
  {
    id: "ai-powered-business-process-automation",
    title: "AI-Powered Business Process Automation Platform",
    description: "Intelligent automation platform that uses AI to identify, optimize, and automate complex business processes across organizations.",
    category: "AI & Machine Learning",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Process discovery and mapping",
      "AI-powered optimization",
      "RPA integration",
      "Workflow automation",
      "Process analytics",
      "Custom automation rules",
      "Multi-department support",
      "Compliance tracking"
    ],
    benefits: [
      "Reduce process time by 70%",
      "Increase efficiency by 50%",
      "Cost savings of 30-40%",
      "Improved accuracy",
      "Scalable automation"
    ],
    marketPrice: "$2,200 - $7,500/month",
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    useCases: [
      "Human resources",
      "Finance and accounting",
      "Customer service",
      "Supply chain management",
      "Sales operations"
    ],
    targetAudience: [
      "Operations managers",
      "Process improvement teams",
      "Business analysts",
      "CIOs",
      "Operations directors"
    ],
    tags: ["AI", "Automation", "RPA", "Process Optimization", "Workflow"]
  },
  {
    id: "edge-computing-orchestration-platform",
    title: "Edge Computing Orchestration & Management Platform",
    description: "Comprehensive edge computing platform that manages, monitors, and optimizes distributed edge infrastructure for IoT and 5G applications.",
    category: "Edge Computing",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Edge node management",
      "Distributed computing orchestration",
      "Real-time monitoring",
      "Load balancing",
      "Security management",
      "Performance optimization",
      "API gateway",
      "Multi-cloud integration"
    ],
    benefits: [
      "Reduce latency by 80%",
      "Improve reliability by 90%",
      "Cost-effective edge deployment",
      "Scalable infrastructure",
      "Enhanced security"
    ],
    marketPrice: "$1,800 - $6,000/month",
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    useCases: [
      "IoT deployments",
      "5G networks",
      "Autonomous vehicles",
      "Smart cities",
      "Industrial IoT"
    ],
    targetAudience: [
      "IoT architects",
      "Network engineers",
      "DevOps teams",
      "Infrastructure managers",
      "Technology consultants"
    ],
    tags: ["Edge Computing", "IoT", "5G", "Orchestration", "Infrastructure"]
  },
  {
    id: "ai-powered-financial-fraud-detection",
    title: "AI-Powered Financial Fraud Detection System",
    description: "Advanced fraud detection platform that uses machine learning to identify and prevent financial fraud in real-time across multiple channels.",
    category: "AI & Machine Learning",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time fraud detection",
      "Multi-channel monitoring",
      "Machine learning models",
      "Risk scoring",
      "Alert management",
      "Compliance reporting",
      "API integrations",
      "Custom rule engine"
    ],
    benefits: [
      "Reduce fraud losses by 90%",
      "Improve detection accuracy by 85%",
      "Real-time protection",
      "Regulatory compliance",
      "Cost-effective security"
    ],
    marketPrice: "$2,800 - $9,000/month",
    estimatedDelivery: "2-3 weeks",
    supportLevel: "enterprise",
    useCases: [
      "Banks and credit unions",
      "Payment processors",
      "E-commerce platforms",
      "Insurance companies",
      "Investment firms"
    ],
    targetAudience: [
      "Risk managers",
      "Compliance officers",
      "Security teams",
      "Financial executives",
      "Fraud investigators"
    ],
    tags: ["AI", "Fraud Detection", "FinTech", "Security", "Compliance"]
  },
  {
    id: "metaverse-development-platform",
    title: "Metaverse Development & Management Platform",
    description: "Comprehensive platform for creating, deploying, and managing metaverse experiences with AI-powered content generation and user engagement tools.",
    category: "Emerging Technology",
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "3D world builder",
      "AI content generation",
      "Avatar customization",
      "Virtual economy tools",
      "Social interaction features",
      "Analytics dashboard",
      "Multi-platform support",
      "NFT integration"
    ],
    benefits: [
      "Reduce development time by 60%",
      "Increase user engagement by 80%",
      "Scalable metaverse creation",
      "AI-powered content",
      "Monetization opportunities"
    ],
    marketPrice: "$3,200 - $10,000/month",
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    useCases: [
      "Gaming companies",
      "Educational institutions",
      "Virtual events",
      "Real estate companies",
      "Brand experiences"
    ],
    targetAudience: [
      "Game developers",
      "Digital artists",
      "Marketing teams",
      "Educational technologists",
      "Brand managers"
    ],
    tags: ["Metaverse", "3D Development", "AI", "Virtual Reality", "NFT"]
  },
  {
    id: "ai-powered-healthcare-diagnostics",
    title: "AI-Powered Healthcare Diagnostics & Analytics Platform",
    description: "Advanced healthcare platform that uses AI to analyze medical data, assist in diagnostics, and provide predictive health insights.",
    category: "AI & Machine Learning",
    price: 4500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Medical image analysis",
      "Predictive diagnostics",
      "Patient data analytics",
      "Clinical decision support",
      "Health monitoring",
      "Compliance management",
      "Integration with EHR systems",
      "Telemedicine support"
    ],
    benefits: [
      "Improve diagnostic accuracy by 40%",
      "Reduce diagnosis time by 60%",
      "Better patient outcomes",
      "Cost-effective healthcare",
      "Regulatory compliance"
    ],
    marketPrice: "$4,500 - $15,000/month",
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    useCases: [
      "Hospitals and clinics",
      "Radiology departments",
      "Primary care practices",
      "Specialty clinics",
      "Research institutions"
    ],
    targetAudience: [
      "Healthcare providers",
      "Radiologists",
      "Medical researchers",
      "Healthcare administrators",
      "Clinical directors"
    ],
    tags: ["AI", "Healthcare", "Diagnostics", "Medical Imaging", "Analytics"]
  },
  {
    id: "quantum-machine-learning-platform",
    title: "Quantum Machine Learning Development Platform",
    description: "Advanced platform that combines quantum computing with machine learning to solve complex optimization problems and accelerate AI model training.",
    category: "AI & Machine Learning",
    price: 5500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Quantum ML algorithms",
      "Hybrid classical-quantum models",
      "Optimization solvers",
      "Model training acceleration",
      "Quantum feature selection",
      "Performance benchmarking",
      "Cloud quantum access",
      "Research collaboration tools"
    ],
    benefits: [
      "Accelerate ML training by 100x",
      "Solve complex optimization problems",
      "Future-proof AI development",
      "Research advancement",
      "Competitive advantage"
    ],
    marketPrice: "$5,500 - $18,000/month",
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    useCases: [
      "Research institutions",
      "Pharmaceutical companies",
      "Financial services",
      "Technology companies",
      "Government agencies"
    ],
    targetAudience: [
      "AI researchers",
      "Data scientists",
      "Quantum physicists",
      "Technology leaders",
      "Research directors"
    ],
    tags: ["Quantum AI", "Machine Learning", "Optimization", "Research", "Advanced Computing"]
  }
];

export default function InnovativeServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['all', ...Array.from(new Set(INNOVATIVE_SERVICES.map(service => service.category)))];
  
  const filteredServices = INNOVATIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-quantum-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-zion-cyan text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent animate-holographic-shift">
            Innovative Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge micro SAAS solutions that combine AI, quantum computing, and emerging technologies to transform your business operations
          </p>
          
          {/* Contact Information */}
          <div className="bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg p-6 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-zion-cyan mb-4">Ready to Transform Your Business?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-zion-cyan font-semibold">📱 Mobile:</span>
                <br />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div>
                <span className="text-zion-cyan font-semibold">✉️ Email:</span>
                <br />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                <span className="text-zion-cyan font-semibold">🌐 Website:</span>
                <br />
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-zion-cyan transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-zion-blue-light/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zion-cyan">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/30'
                    : 'bg-zion-blue-light/20 border border-zion-cyan/30 text-zion-slate-light hover:bg-zion-cyan/20 hover:border-zion-cyan/50'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
<<<<<<< HEAD
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-light/10 border border-zion-cyan/20 rounded-xl p-6 backdrop-blur-sm hover:border-zion-cyan/40 hover:bg-zion-blue-light/20 transition-all duration-300 group"
            >
              {/* Service Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <span className="text-2xl font-bold text-zion-cyan">
                    {service.currency}{service.price}
                    <span className="text-sm text-zion-slate-light">/{service.pricingModel}</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Market Price & Delivery */}
              <div className="mb-4 p-3 bg-zion-blue-light/10 rounded-lg">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-zion-cyan font-semibold">Market Price:</span>
                    <br />
                    <span className="text-white">{service.marketPrice}</span>
                  </div>
                  <div>
                    <span className="text-zion-cyan font-semibold">Delivery:</span>
                    <br />
                    <span className="text-white">{service.estimatedDelivery}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="text-xs text-zion-slate-light flex items-center">
                      <span className="text-zion-cyan mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-xs text-zion-cyan">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 3).map((benefit, index) => (
                    <li key={index} className="text-xs text-zion-slate-light flex items-center">
                      <span className="text-zion-cyan mr-2">→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}&body=Hi, I'm interested in learning more about your ${service.title} service. Please provide more information about pricing, features, and implementation.`}
                  className="inline-block w-full bg-gradient-to-r from-zion-cyan to-zion-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-zion-blue-500 hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/30"
                >
                  Get Started Today
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-blue-500/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Our innovative micro SAAS solutions are designed to give you a competitive edge in today's rapidly evolving technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Innovative Services Consultation&body=Hi, I'd like to schedule a consultation to discuss how your innovative services can help transform my business. Please let me know your availability."
                className="bg-zion-cyan text-zion-blue-dark font-bold py-4 px-8 rounded-lg hover:bg-zion-blue-500 transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-zion-cyan text-zion-cyan font-bold py-4 px-8 rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors duration-300 transform hover:scale-105"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.div>
      </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-8dd6
=======
        </motion.div>
      </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-3558
=======
=======
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'AI & Machine Learning': Brain,
      'AI & Business Automation': Zap,
      'AI & Customer Experience': Users,
      'AI & Supply Chain': Truck,
      'AI & Financial Services': Building2,
      'AI & Human Resources': Users,
      'AI & Marketing': ChartBar,
      'AI & Content Creation': Code,
      'AI Medical Diagnostics': Microscope,
      'Telemedicine & Virtual Care': Hospital,
      'Biotech Research & Development': Microscope,
      'Healthcare Analytics & BI': ChartBar,
      'Precision Medicine & Genomics': Microscope,
      'Mental Health & Wellness': Brain,
      'DeFi & Yield Farming': TrendingUp,
      'NFT & Digital Assets': Camera,
      'Blockchain Infrastructure': Database,
      'Smart Contract Security': Lock,
      'Web3 Identity': Shield,
      'DAO & Governance': Building,
      'Smart Infrastructure & Utilities': Zap,
      'Smart Transportation & Mobility': Car,
      'Environmental Monitoring & Sustainability': Leaf,
      'Smart Buildings & Facilities': Building,
      'Smart Waste & Recycling': Truck,
      'Smart Parking & Mobility': Car,
      'Industrial Automation & Manufacturing': Factory,
      'Warehouse & Logistics Automation': Truck,
      'Agricultural Automation & Precision Farming': Leaf,
      'Service Robotics & Hospitality': Bot,
      'Autonomous Vehicles & Transportation': Car,
      'Business Process Automation': Cpu,
      'Quantum Algorithms & Optimization': Atom,
      'Quantum Machine Learning & AI': Brain,
      'Quantum Cryptography & Security': Lock,
      'Quantum Simulation & Research': Microscope,
      'Quantum Finance & Risk Management': Building2,
      'Quantum Drug Discovery & Healthcare': Microscope,
      'Cloud & Infrastructure': Cloud,
      'Digital Marketing': ChartBar,
      'Software Development': Code,
      'Cybersecurity': Shield,
      'Data & Analytics': ChartBar,
      'Design & User Experience': Users,
      'E-commerce & Sales': ShoppingCart,
      'Finance & Accounting': Building2,
      'Education & Training': Users,
      'Productivity & Automation': Zap,
      'Communication & Collaboration': Users,
      'Robotics & Automation': Bot,
      'Metaverse & VR/AR': Globe,
      'IoT & Smart Cities': Wifi
    };
    return iconMap[category] || Globe;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-blue-600 to-cyan-500',
      'AI & Business Automation': 'from-purple-600 to-pink-500',
      'AI & Customer Experience': 'from-green-600 to-emerald-500',
      'AI & Supply Chain': 'from-yellow-600 to-orange-500',
      'AI & Financial Services': 'from-indigo-600 to-blue-500',
      'AI & Human Resources': 'from-teal-600 to-cyan-500',
      'AI & Marketing': 'from-red-600 to-pink-500',
      'AI & Content Creation': 'from-blue-600 to-purple-500',
      'AI Medical Diagnostics': 'from-blue-600 to-cyan-500',
      'Telemedicine & Virtual Care': 'from-green-600 to-emerald-500',
      'Biotech Research & Development': 'from-purple-600 to-pink-500',
      'Healthcare Analytics & BI': 'from-indigo-600 to-blue-500',
      'Precision Medicine & Genomics': 'from-teal-600 to-cyan-500',
      'Mental Health & Wellness': 'from-pink-600 to-rose-500',
      'DeFi & Yield Farming': 'from-green-600 to-emerald-500',
      'NFT & Digital Assets': 'from-purple-600 to-pink-500',
      'Blockchain Infrastructure': 'from-blue-600 to-cyan-500',
      'Smart Contract Security': 'from-red-600 to-pink-500',
      'Web3 Identity': 'from-indigo-600 to-blue-500',
      'DAO & Governance': 'from-yellow-600 to-orange-500',
      'Smart Infrastructure & Utilities': 'from-yellow-600 to-orange-500',
      'Smart Transportation & Mobility': 'from-green-600 to-emerald-500',
      'Environmental Monitoring & Sustainability': 'from-teal-600 to-cyan-500',
      'Smart Buildings & Facilities': 'from-blue-600 to-cyan-500',
      'Smart Waste & Recycling': 'from-gray-600 to-slate-500',
      'Smart Parking & Mobility': 'from-purple-600 to-pink-500',
      'Industrial Automation & Manufacturing': 'from-blue-600 to-cyan-500',
      'Warehouse & Logistics Automation': 'from-green-600 to-emerald-500',
      'Agricultural Automation & Precision Farming': 'from-yellow-600 to-orange-500',
      'Service Robotics & Hospitality': 'from-purple-600 to-pink-500',
      'Autonomous Vehicles & Transportation': 'from-red-600 to-pink-500',
      'Business Process Automation': 'from-indigo-600 to-blue-500',
      'Quantum Algorithms & Optimization': 'from-purple-600 to-pink-500',
      'Quantum Machine Learning & AI': 'from-blue-600 to-cyan-500',
      'Quantum Cryptography & Security': 'from-green-600 to-emerald-500',
      'Quantum Simulation & Research': 'from-indigo-600 to-blue-500',
      'Quantum Finance & Risk Management': 'from-yellow-600 to-orange-500',
      'Quantum Drug Discovery & Healthcare': 'from-red-600 to-pink-500'
    };
    return colorMap[category] || 'from-gray-600 to-slate-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Innovative Services Showcase - Zion Tech Group" 
        description="Discover our comprehensive collection of innovative micro SAAS services, AI solutions, blockchain services, and cutting-edge technology solutions."
        keywords="innovative services, micro SAAS, AI solutions, blockchain, quantum computing, robotics, IoT, smart cities, healthcare, biotech"
        url="https://ziontechgroup.com/innovative-services-showcase"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Innovative Services Showcase
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Cutting-Edge Solutions for the Future
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Explore our comprehensive collection of innovative micro SAAS services, AI-powered solutions, 
            blockchain technology, quantum computing, robotics, IoT, and more. Transform your business 
            with next-generation technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Journey
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Technology Filter */}
              <select
                value={selectedTechnology}
                onChange={(e) => setSelectedTechnology(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {technologies.map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="popularity">Sort by Popularity</option>
                <option value="growth">Sort by Growth Rate</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Price Range:</span>
              <input
                type="range"
                min="0"
                max="5000"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                className="flex-1"
              />
              <span className="text-sm text-gray-600">${priceRange.min} - ${priceRange.max}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Discover Our Innovative Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              {filteredServices.length} services found matching your criteria. 
              Each service is designed to deliver real value and measurable ROI for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => {
              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${categoryColor} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{service.icon}</span>
                      {service.popular && (
                        <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium">Popular</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-white/90 text-sm">{service.tagline}</p>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CategoryIcon className="w-5 h-5 text-zion-cyan" />
                      <span className="text-sm text-zion-slate font-medium">{service.category}</span>
                    </div>

                    <p className="text-zion-slate mb-4 line-clamp-3">{service.description}</p>

                    {/* Price and Trial */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-zion-blue-dark">{service.price}</span>
                        <span className="text-zion-slate">{service.period}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-zion-slate">{service.trialDays} days trial</div>
                        <div className="text-xs text-zion-slate">{service.setupTime} setup</div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-blue-dark mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-zion-slate">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-zion-slate text-center">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Market Info */}
                    <div className="mb-4 p-3 bg-zion-blue-light rounded-lg">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="font-medium text-zion-blue-dark">Market Size:</span>
                          <div className="text-zion-slate">{service.marketSize}</div>
                        </div>
                        <div>
                          <span className="font-medium text-zion-blue-dark">Growth Rate:</span>
                          <div className="text-zion-slate">{service.growthRate}</div>
                        </div>
                        <div>
                          <span className="font-medium text-zion-blue-dark">ROI:</span>
                          <div className="text-zion-slate">{service.roi}</div>
                        </div>
                        <div>
                          <span className="font-medium text-zion-blue-dark">Setup Time:</span>
                          <div className="text-zion-slate">{service.setupTime}</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={service.link}
                        className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-white text-center py-2 px-4 rounded-lg font-medium transition-colors"
                      >
                        Learn More
                      </a>
                      <button className="bg-zion-blue-dark hover:bg-zion-blue text-white py-2 px-4 rounded-lg font-medium transition-colors">
                        Contact
                      </button>
                    </div>

                    {/* Contact Info */}
                    {service.contactInfo && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-xs text-zion-slate">
                          <div className="flex items-center gap-1 mb-1">
                            <span>📞 {service.contactInfo.mobile}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-1">
                            <span>✉️ {service.contactInfo.email}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>📍 {service.contactInfo.address}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-zion-blue-dark mb-2">No services found</h3>
              <p className="text-zion-slate">Try adjusting your search criteria or filters to find the services you're looking for.</p>
            </div>
          )}
        </div>
      </section>

>>>>>>> origin/cursor/expand-services-and-deploy-updates-02bf
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
            Transform Your Business Today
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join hundreds of businesses that have already transformed their operations 
            with our innovative services and solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your Project
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0c6c
=======
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our innovative services are designed to deliver measurable results and drive your business forward. 
            Get in touch with our experts to discuss your specific needs and find the perfect solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Services
            </button>
          </div>
          
          {/* Contact Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">📞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div>
              <div className="text-3xl mb-2">✉️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-02bf
=======
        <section className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
                    {/* Service Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm ml-1">{service.rating}</span>
                          </div>
                          <span className="text-gray-500 text-sm">({service.reviewCount})</span>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/20 text-cyan-400 border border-cyan-400/30">
                        {service.category}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-400 text-sm">Starting from</span>
                        <span className="text-2xl font-bold text-cyan-400">
                          ${service.price.starter}
                          <span className="text-sm text-gray-400">/month</span>
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Professional: ${service.price.professional}/month • Enterprise: ${service.price.enterprise}/month
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        Key Features
                      </h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-cyan-400 text-sm">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                        Key Benefits
                      </h4>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specs */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                        Technical Specs
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center text-gray-300">
                          <span className="text-gray-500 mr-2">Platform:</span>
                          {service.technicalSpecs.platform}
                        </div>
                        <div className="flex items-center text-gray-300">
                          <span className="text-gray-500 mr-2">API:</span>
                          {service.technicalSpecs.api ? '✅' : '❌'}
                        </div>
                        <div className="flex items-center text-gray-300">
                          <span className="text-gray-500 mr-2">Mobile:</span>
                          {service.technicalSpecs.mobile ? '✅' : '❌'}
                        </div>
                        <div className="flex items-center text-gray-300">
                          <span className="text-gray-500 mr-2">Cloud:</span>
                          {service.technicalSpecs.cloud ? '✅' : '❌'}
                        </div>
                      </div>
                    </div>

                    {/* Competitive Advantage */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-xl border border-cyan-400/20">
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                        Competitive Advantage
                      </h4>
                      <p className="text-sm text-gray-300">{service.competitiveAdvantage}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={service.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-semibold rounded-xl hover:from-cyan-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-105"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                      <button className="flex-1 flex items-center justify-center px-4 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or browse all categories</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-xl hover:bg-cyan-300 transition-colors"
                >
                  View All Services
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-400/10 to-blue-400/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get in touch with our team to discuss how our innovative micro SAAS solutions can help you achieve your business goals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{CONTACT_INFO.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>{CONTACT_INFO.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-semibold rounded-xl hover:from-cyan-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Visit Website
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-895f
=======
    <div className="min-h-screen bg-zion-blue-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple via-zion-blue to-zion-cyan opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Next-Generation
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover our cutting-edge portfolio of innovative services that push the boundaries of what's possible. 
              From quantum computing to space technology, we're building the future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark px-8 py-4 text-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
              <Button
                onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Innovation Consultation'}
                variant="outline"
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 text-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Get Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-zion-blue-dark'
                    : 'border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card 
                  className="bg-zion-blue-light/20 border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 cursor-pointer group h-full"
                  onClick={() => setSelectedService(service)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{service.icon}</span>
                      <div className="flex gap-2">
                        {service.featured && (
                          <Badge variant="secondary" className="bg-zion-cyan text-zion-blue-dark">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        {service.trending && (
                          <Badge variant="outline" className="border-zion-purple text-zion-purple">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-zion-slate-light text-sm">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-zion-cyan font-semibold">{service.price}</span>
                        <Badge variant="outline" className="text-xs">
                          {service.complexity}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-white font-medium text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-zion-slate-light text-xs flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-zion-cyan" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-zion-blue-light/30">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zion-slate-light">Timeline: {service.timeline}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-zion-cyan hover:text-zion-cyan-dark p-0 h-auto"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zion-blue-dark border border-zion-blue-light/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-6xl">{selectedService.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-zion-slate-light">{selectedService.category}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedService(null)}
                  className="text-zion-slate-light hover:text-white"
                >
                  ✕
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                  <p className="text-zion-slate-light mb-6">{selectedService.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium mb-2">Key Benefits</h4>
                      <ul className="space-y-2">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-zion-cyan" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-2">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedService.useCases.map((useCase, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-zion-blue-light/10 rounded-lg p-6 mb-6">
                    <h4 className="text-white font-medium mb-4">Project Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Investment:</span>
                        <span className="text-zion-cyan font-semibold">{selectedService.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Complexity:</span>
                        <span className="text-white">{selectedService.complexity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zion-slate-light">Timeline:</span>
                        <span className="text-white">{selectedService.timeline}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-4">All Features</h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="text-zion-slate-light text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 space-y-3">
                    <Button
                      onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Quote Request: ${selectedService.title}`}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark"
                    >
                      Get Quote
                    </Button>
                    <Button
                      onClick={() => window.location.href = 'tel:+13024640950'}
                      variant="outline"
                      className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Schedule Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our innovative technology solutions can transform your business 
              and give you a competitive edge in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Innovation Consultation Request'}
                size="lg"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark px-8 py-4 text-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Innovation Journey
              </Button>
              <Button
                onClick={() => window.location.href = 'tel:+13024640950'}
                variant="outline"
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    </div>
  );
};

export default InnovativeServicesShowcase;