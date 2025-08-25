import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
<<<<<<< HEAD
  Search, 
  Filter, 
  Star, 
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
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
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
    }
  });

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
    }
  };

  return (
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
          </div>
        </div>
      </section>

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
                >
                  {category}
                </button>
              ))}
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
            </div>

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
            </div>
          </div>
        </div>
      </section>

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
                      to={service.contactInfo.website}
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
    </div>
  );
};

export default InnovativeServicesShowcase;