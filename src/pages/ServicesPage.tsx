import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Network, 
  Cpu, 
  Database, 
  Smartphone, 
  Server, 
  Monitor, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink,
  Search,
  Filter,
  Grid3X3,
  List,
  ChevronDown,
  ChevronUp,
  Users,
  Globe,
  Lock,
  Code,
  BarChart3,
  Target,
  Rocket,
  Lightbulb,
  Award,
  Clock,
  DollarSign,
  TrendingUp,
  Eye,
  Handshake,
  Building,
  Globe2,
  ShieldCheck,
  Network2,
  Smartphone as Mobile,
  Server as Infrastructure,
  Monitor as Analytics,
  Zap as Lightning,
  Users2,
  Award as Trophy,
  Clock as Time,
  DollarSign as Money,
  TrendingUp as Growth,
  Eye as Vision,
  Handshake as Partnership,
  Building as Enterprise
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from "@/components/SEO";
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, SPECIALIZED_SERVICES } from "@/data/innovativeMicroSaasServices2025";
import { ADVANCED_ENTERPRISE_SOLUTIONS_2025 } from "@/data/advancedEnterpriseSolutions2025";
import { NEXT_GEN_AI_SERVICES_2025 } from "@/data/nextGenAIServices2025";
import { SPECIALIZED_INDUSTRY_SOLUTIONS_2025 } from "@/data/specializedIndustrySolutions2025";
import { IOT_EDGE_COMPUTING_SERVICES_2025 } from "@/data/iotEdgeComputingServices2025";

interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: any;
  color: string;
  category: 'ai' | 'cloud' | 'security' | 'iot' | 'quantum' | 'infrastructure' | 'consulting' | 'transformation';
  features: string[];
  benefits: string[];
  useCases: string[];
  pricing: 'starter' | 'professional' | 'enterprise' | 'custom';
  estimatedTime: string;
  technologies: string[];
  image?: string;
}

const services: Service[] = [
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence solutions that transform business operations',
    longDescription: 'Our AI and Machine Learning services leverage the latest advancements in artificial intelligence to help businesses automate processes, gain insights from data, and create intelligent systems that adapt and learn.',
    icon: Brain,
    color: 'from-purple-500 to-pink-600',
    category: 'ai',
    features: [
      'Predictive Analytics & Forecasting',
      'Natural Language Processing (NLP)',
      'Computer Vision & Image Recognition',
      'Machine Learning Model Development',
      'AI-Powered Automation',
      'Intelligent Chatbots & Virtual Assistants'
    ],
    benefits: [
      'Increased operational efficiency through automation',
      'Data-driven decision making with predictive insights',
      'Enhanced customer experience with intelligent interactions',
      'Cost reduction through process optimization',
      'Competitive advantage with AI-first approach'
    ],
    useCases: [
      'Customer behavior analysis and prediction',
      'Fraud detection and risk assessment',
      'Supply chain optimization',
      'Content generation and personalization',
      'Quality control and defect detection'
    ],
    pricing: 'custom',
    estimatedTime: '4-12 weeks',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI GPT', 'Computer Vision APIs', 'NLP Libraries']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and streamlined development operations',
    longDescription: 'We help organizations migrate to the cloud and implement DevOps practices to accelerate software delivery, improve reliability, and reduce operational costs.',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-600',
    category: 'cloud',
    features: [
      'Cloud Migration & Strategy',
      'Container Orchestration (Kubernetes)',
      'CI/CD Pipeline Implementation',
      'Infrastructure as Code (IaC)',
      'Cloud Security & Compliance',
      'Performance Monitoring & Optimization'
    ],
    benefits: [
      'Reduced infrastructure costs and improved scalability',
      'Faster time to market with automated deployments',
      'Enhanced reliability and disaster recovery',
      'Improved collaboration between development and operations',
      'Better resource utilization and cost optimization'
    ],
    useCases: [
      'Legacy system modernization',
      'Microservices architecture implementation',
      'Multi-cloud strategy development',
      'DevOps transformation',
      'Cloud-native application development'
    ],
    pricing: 'custom',
    estimatedTime: '6-16 weeks',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security solutions to protect your digital assets',
    longDescription: 'Our cybersecurity services provide end-to-end protection for your organization, from threat detection and prevention to incident response and compliance management.',
    icon: Shield,
    color: 'from-green-500 to-emerald-600',
    category: 'security',
    features: [
      'Threat Detection & Response',
      'Vulnerability Assessment & Penetration Testing',
      'Security Architecture Design',
      'Compliance Management (SOC2, ISO27001)',
      'Security Awareness Training',
      'Incident Response Planning'
    ],
    benefits: [
      'Protection against evolving cyber threats',
      'Compliance with industry regulations',
      'Reduced risk of data breaches',
      'Enhanced customer trust and reputation',
      'Cost savings through proactive security measures'
    ],
    useCases: [
      'Security posture assessment',
      'Compliance audit preparation',
      'Incident response planning',
      'Security architecture review',
      'Employee security training programs'
    ],
    pricing: 'custom',
    estimatedTime: '2-8 weeks',
    technologies: ['SIEM Tools', 'EDR Solutions', 'Penetration Testing Tools', 'Compliance Frameworks', 'Security APIs']
  },
  {
    id: 'iot-edge-computing',
    title: 'IoT & Edge Computing',
    description: 'Connected devices and edge computing solutions for the modern world',
    longDescription: 'We design and implement IoT solutions that connect devices, collect data, and process information at the edge for real-time insights and automated decision-making.',
    icon: Network,
    color: 'from-orange-500 to-red-600',
    category: 'iot',
    features: [
      'IoT Device Design & Development',
      'Edge Computing Infrastructure',
      'Real-time Data Processing',
      'Sensor Network Implementation',
      'IoT Security & Privacy',
      'Data Analytics & Visualization'
    ],
    benefits: [
      'Real-time monitoring and control capabilities',
      'Reduced latency with edge processing',
      'Improved operational efficiency',
      'Enhanced data security and privacy',
      'Scalable and flexible architecture'
    ],
    useCases: [
      'Smart city infrastructure',
      'Industrial IoT monitoring',
      'Connected healthcare devices',
      'Environmental monitoring systems',
      'Smart home automation'
    ],
    pricing: 'custom',
    estimatedTime: '8-20 weeks',
    technologies: ['MQTT', 'CoAP', 'Edge Computing Platforms', 'IoT Frameworks', 'Sensor Technologies', '5G Networks']
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    description: 'Next-generation quantum computing solutions for complex problem solving',
    longDescription: 'We explore the frontier of quantum computing, developing solutions that leverage quantum mechanics to solve problems that are intractable for classical computers.',
    icon: Cpu,
    color: 'from-indigo-500 to-purple-600',
    category: 'quantum',
    features: [
      'Quantum Algorithm Development',
      'Quantum Machine Learning',
      'Quantum Cryptography',
      'Quantum Simulation',
      'Hybrid Classical-Quantum Systems',
      'Quantum Software Development'
    ],
    benefits: [
      'Exponential speedup for specific problems',
      'Enhanced security with quantum cryptography',
      'Breakthrough capabilities in optimization',
      'Future-proof technology investment',
      'Competitive advantage in research and development'
    ],
    useCases: [
      'Financial modeling and optimization',
      'Drug discovery and molecular simulation',
      'Cryptography and secure communications',
      'Supply chain optimization',
      'Climate modeling and prediction'
    ],
    pricing: 'custom',
    estimatedTime: '12-32 weeks',
    technologies: ['IBM Qiskit', 'Google Cirq', 'Microsoft Q#', 'Quantum Simulators', 'Quantum Hardware APIs']
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation strategies and implementation',
    longDescription: 'We guide organizations through comprehensive digital transformation, helping them modernize processes, adopt new technologies, and create digital-first business models.',
    icon: Rocket,
    color: 'from-yellow-500 to-orange-600',
    category: 'transformation',
    features: [
      'Digital Strategy Development',
      'Process Automation & Optimization',
      'Change Management & Training',
      'Technology Stack Modernization',
      'Digital Culture Transformation',
      'Performance Measurement & KPIs'
    ],
    benefits: [
      'Improved operational efficiency and productivity',
      'Enhanced customer experience and engagement',
      'Increased agility and innovation capability',
      'Better data-driven decision making',
      'Competitive advantage in digital markets'
    ],
    useCases: [
      'Legacy system modernization',
      'Customer experience transformation',
      'Operational process optimization',
      'Digital product development',
      'Organizational change management'
    ],
    pricing: 'custom',
    estimatedTime: '16-40 weeks',
    technologies: ['RPA Tools', 'Business Process Platforms', 'Digital Experience Platforms', 'Analytics Tools', 'Integration Platforms']
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure',
    description: 'Robust and scalable IT infrastructure solutions for modern businesses',
    longDescription: 'We design, implement, and manage enterprise-grade IT infrastructure that provides the foundation for reliable, secure, and high-performance business operations.',
    icon: Server,
    color: 'from-gray-500 to-slate-600',
    category: 'infrastructure',
    features: [
      'Network Design & Implementation',
      'Data Center Solutions',
      'Storage & Backup Systems',
      'Virtualization & Containerization',
      'High Availability & Disaster Recovery',
      'Infrastructure Monitoring & Management'
    ],
    benefits: [
      'Improved system reliability and uptime',
      'Enhanced security and compliance',
      'Better performance and scalability',
      'Reduced operational costs',
      'Simplified management and maintenance'
    ],
    useCases: [
      'Infrastructure modernization',
      'Data center consolidation',
      'Business continuity planning',
      'Performance optimization',
      'Security hardening'
    ],
    pricing: 'custom',
    estimatedTime: '8-24 weeks',
    technologies: ['VMware', 'Hyper-V', 'Docker', 'Kubernetes', 'Storage Solutions', 'Network Equipment']
  },
  {
    id: 'consulting-services',
    title: 'Technology Consulting',
    description: 'Strategic technology consulting to drive business innovation and growth',
    longDescription: 'Our consulting services help organizations make informed technology decisions, develop strategic roadmaps, and implement best practices for sustainable growth.',
    icon: Users,
    color: 'from-teal-500 to-cyan-600',
    category: 'consulting',
    features: [
      'Technology Strategy & Roadmapping',
      'Architecture Review & Design',
      'Technology Assessment & Selection',
      'Best Practices Implementation',
      'Performance Optimization',
      'Technology Training & Knowledge Transfer'
    ],
    benefits: [
      'Informed technology investment decisions',
      'Reduced implementation risks',
      'Improved technology ROI',
      'Enhanced team capabilities',
      'Strategic competitive advantage'
    ],
    useCases: [
      'Technology strategy development',
      'Architecture modernization',
      'Technology vendor selection',
      'Performance optimization',
      'Team skill development'
    ],
    pricing: 'custom',
    estimatedTime: '2-12 weeks',
    technologies: ['Architecture Frameworks', 'Assessment Tools', 'Best Practice Guides', 'Training Materials', 'Consulting Methodologies']
  }
];

const categories = [
  { id: 'all', name: 'All Services', icon: Grid3X3 },
  { id: 'ai', name: 'AI & ML', icon: Brain },
  { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
  { id: 'security', name: 'Security', icon: Shield },
  { id: 'iot', name: 'IoT & Edge', icon: Network },
  { id: 'quantum', name: 'Quantum', icon: Cpu },
  { id: 'infrastructure', name: 'Infrastructure', icon: Server },
  { id: 'transformation', name: 'Transformation', icon: Rocket },
  { id: 'consulting', name: 'Consulting', icon: Users }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedService, setExpandedService] = useState<string | null>(null);

<<<<<<< HEAD
  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleServiceExpansion = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
=======
  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai-analytics', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
<<<<<<< HEAD
    { id: 'ai-automation', name: 'AI & Automation', icon: Cpu, color: 'from-zion-purple to-zion-red' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Atom, color: 'from-zion-blue to-zion-cyan' },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Blockchain, color: 'from-zion-purple to-zion-blue' },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'healthcare-ai', name: 'Healthcare AI', icon: Heart, color: 'from-zion-pink to-zion-purple' },
    { id: 'legal-tech', name: 'Legal Tech', icon: Scale, color: 'from-zion-orange to-zion-purple' },
    { id: 'financial-ai', name: 'Financial AI', icon: DollarSign, color: 'from-zion-green to-zion-blue' },
    { id: 'manufacturing-ai', name: 'Manufacturing AI', icon: Factory, color: 'from-zion-blue to-zion-purple' },
    { id: 'space-tech', name: 'Space Technology', icon: Satellite, color: 'from-zion-purple to-zion-cyan' },
    { id: 'neuromorphic-computing', name: 'Neuromorphic Computing', icon: Brain, color: 'from-zion-purple to-zion-cyan' },
    { id: 'synthetic-biology', name: 'Synthetic Biology', icon: Heart, color: 'from-zion-pink to-zion-green' },
    { id: 'advanced-robotics', name: 'Advanced Robotics', icon: Cpu, color: 'from-zion-blue to-zion-red' },
    { id: 'advanced-materials', name: 'Advanced Materials', icon: Factory, color: 'from-zion-green to-zion-blue' },
    { id: 'advanced-energy', name: 'Advanced Energy', icon: Zap, color: 'from-zion-yellow to-zion-orange' },
    { id: 'advanced-transportation', name: 'Advanced Transportation', icon: Rocket, color: 'from-zion-blue to-zion-purple' },
    { id: 'advanced-communication', name: 'Advanced Communication', icon: Globe, color: 'from-zion-cyan to-zion-blue' },
    { id: 'advanced-manufacturing', name: 'Advanced Manufacturing', icon: Factory, color: 'from-zion-orange to-zion-blue' },
    { id: 'advanced-gaming', name: 'Advanced Gaming', icon: Code, color: 'from-zion-purple to-zion-pink' },
    { id: 'brain-computer-interface', name: 'Brain-Computer Interface', icon: Brain, color: 'from-zion-purple to-zion-cyan' },
    { id: 'digital-twin', name: 'Digital Twin', icon: Server, color: 'from-zion-blue to-zion-purple' },
    { id: 'extended-reality', name: 'Extended Reality', icon: Code, color: 'from-zion-orange to-zion-purple' },
    { id: 'edge-ai', name: 'Edge AI', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'federated-learning', name: 'Federated Learning', icon: Brain, color: 'from-zion-purple to-zion-blue' },
    { id: 'sustainable-tech', name: 'Sustainable Technology', icon: Globe, color: 'from-zion-green to-zion-blue' },
=======
    { id: 'ai-finance', name: 'AI & Finance', icon: TrendingUp, color: 'from-zion-purple to-zion-blue' },
    { id: 'ai-legal', name: 'AI & Legal', icon: Shield, color: 'from-zion-blue to-zion-cyan' },
    { id: 'ai-healthcare', name: 'AI & Healthcare', icon: Heart, color: 'from-zion-cyan to-zion-green' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan' },
    { id: 'quantum-ml', name: 'Quantum ML', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-purple to-zion-blue' },
    { id: 'iot-edge', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'autonomous-systems', name: 'Autonomous Systems', icon: Rocket, color: 'from-zion-blue to-zion-purple' },
>>>>>>> cursor/website-audit-and-enhancement-1eed
    { id: 'content-creation', name: 'Content Creation', icon: Code, color: 'from-zion-orange to-zion-purple' },
    { id: 'hr-talent', name: 'HR & Talent', icon: Users, color: 'from-zion-pink to-zion-purple' },
    { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'ai-content-marketing', name: 'AI Content & Marketing', icon: Code, color: 'from-zion-orange to-zion-pink' },
    { id: 'data-privacy-compliance', name: 'Data Privacy & Compliance', icon: Lock, color: 'from-zion-red to-zion-purple' },
    { id: 'green-tech-sustainability', name: 'Green Tech & Sustainability', icon: Globe, color: 'from-zion-green to-zion-blue' },
    { id: 'remote-work-collaboration', name: 'Remote Work & Collaboration', icon: Users, color: 'from-zion-blue to-zion-purple' },
    { id: 'ecommerce-retail', name: 'E-commerce & Retail', icon: ShoppingCart, color: 'from-zion-green to-zion-orange' },
    { id: 'healthcare-technology', name: 'Healthcare Technology', icon: Heart, color: 'from-zion-pink to-zion-red' },
    { id: 'educational-technology', name: 'Educational Technology', icon: BookOpen, color: 'from-zion-blue to-zion-green' },
    { id: 'real-estate-technology', name: 'Real Estate Technology', icon: Building, color: 'from-zion-orange to-zion-blue' },
    { id: 'supply-chain-logistics', name: 'Supply Chain & Logistics', icon: Truck, color: 'from-zion-green to-zion-purple' },
    { id: 'customer-support', name: 'Customer Support', icon: MessageCircle, color: 'from-zion-blue to-zion-pink' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$100 - $1,000' },
    { id: 'mid-range', name: 'Mid-Range', range: '$1,000 - $5,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$5,000+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'innovation', name: 'Innovation Level' }
  ];

  // Combine all services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...ADVANCED_ENTERPRISE_SOLUTIONS_2025,
    ...NEXT_GEN_AI_SERVICES_2025,
    ...SPECIALIZED_INDUSTRY_SOLUTIONS_2025,
    ...IOT_EDGE_COMPUTING_SERVICES_2025
  ];

  // Filter and sort services
<<<<<<< HEAD
  const filteredServices = ALL_INNOVATIVE_SERVICES.filter(service => {
=======
  const filteredServices = allServices.filter(service => {
>>>>>>> cursor/add-new-services-2025
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.replace('-', ' ')) ||
                           service.subcategory.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'budget' && service.price <= 1000) ||
                        (selectedPriceRange === 'mid-range' && service.price > 1000 && service.price <= 5000) ||
                        (selectedPriceRange === 'enterprise' && service.price > 5000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.createdAt || '2025-01-01').getTime() - new Date(a.createdAt || '2025-01-01').getTime();
      case 'innovation':
        const innovationOrder = { 'Cutting-edge': 3, 'Advanced': 2, 'Standard': 1 };
        return (innovationOrder[b.innovationLevel] || 0) - (innovationOrder[a.innovationLevel] || 0);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.icon : Zap;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category.toLowerCase().replace(' ', '-'));
    return cat ? cat.color : 'from-zion-cyan to-zion-blue';
>>>>>>> b8c9a46dfc3f9de0b3a990cc62e9bddf78309e52
  };

  // Get category statistics
  const getCategoryStats = () => {
    const stats: { [key: string]: number } = {};
    INNOVATIVE_MICRO_SAAS_SERVICES_2025.forEach(service => {
      const category = service.category.toLowerCase().replace(' ', '-');
      stats[category] = (stats[category] || 0) + 1;
    });
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24">
      <SEO 
        title="Innovative Micro SAAS Services - Zion Tech Group"
        description="Discover cutting-edge micro SAAS solutions including AI, Quantum Computing, Blockchain, IoT, Healthcare AI, Legal Tech, and more. Transform your business with our innovative technology services."
        canonical="/services"
        url="https://ziontechgroup.com/services"
      />
<<<<<<< HEAD
      <div className="container-responsive">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-zion-slate-light text-lg max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of technology services designed to transform your business. 
            From cutting-edge AI solutions to robust infrastructure, we have the expertise to drive your digital success.
          </p>
        </motion.div>
=======
      
      {/* Hero Section */}
      <section className="bg-futuristic min-h-[60vh] flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-zion-green rounded-full animate-pulse delay-3000"></div>
        </div>
>>>>>>> b8c9a46dfc3f9de0b3a990cc62e9bddf78309e52

        {/* Search and Filters */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
              />
            </div>

<<<<<<< HEAD
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white'
                      : 'bg-white/10 text-zion-slate-light hover:bg-white/20'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </button>
              ))}
=======
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
<<<<<<< HEAD
                <div className="text-3xl font-bold text-zion-cyan mb-2">{ALL_INNOVATIVE_SERVICES.length}+</div>
=======
                <div className="text-3xl font-bold text-zion-cyan mb-2">{allServices.length}+</div>
>>>>>>> cursor/add-new-services-2025
                <div className="text-zion-slate-light">Innovative Services</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
<<<<<<< HEAD
                <div className="text-3xl font-bold text-zion-purple mb-2">32+</div>
=======
                <div className="text-3xl font-bold text-zion-purple mb-2">{categories.length - 1}</div>
>>>>>>> cursor/website-audit-and-enhancement-1eed
                <div className="text-zion-slate-light">Technology Categories</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-zion-blue mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime Guarantee</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-zion-green mb-2">24/7</div>
                <div className="text-zion-slate-light">Support Available</div>
              </motion.div>
>>>>>>> b8c9a46dfc3f9de0b3a990cc62e9bddf78309e52
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-zion-cyan/20 rounded-lg p-1">
              <button
<<<<<<< HEAD
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
=======
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                {category.name}
                {category.id !== 'all' && (
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {categoryStats[category.id] || 0}
                  </span>
                )}
>>>>>>> b8c9a46dfc3f9de0b3a990cc62e9bddf78309e52
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'
                }`}
              >
<<<<<<< HEAD
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Services Grid/List */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className={`bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 ${
                    viewMode === 'list' ? 'flex items-start gap-6 p-6' : 'p-6'
                  }`}
                >
                  {/* Service Header */}
                  <div className={`${viewMode === 'list' ? 'flex-shrink-0' : ''}`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-white font-semibold text-xl mb-2">{service.title}</h3>
                        <p className="text-zion-slate-light mb-4">{service.description}</p>
=======
                {sortedServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="card-futuristic group hover-lift"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Service Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <getCategoryIcon(service.category) className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                          <div className="text-sm text-zion-slate-light">per month</div>
                        </div>
>>>>>>> b8c9a46dfc3f9de0b3a990cc62e9bddf78309e52
                      </div>
                      <button
                        onClick={() => toggleServiceExpansion(service.id)}
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        {expandedService === service.id ? (
                          <ChevronUp className="h-4 w-4 text-zion-cyan" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-zion-cyan" />
                        )}
                      </button>
                    </div>

                    {/* Service Details */}
<<<<<<< HEAD
                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-zion-cyan/20 pt-4 space-y-6">
                            {/* Long Description */}
                            <div>
                              <h4 className="text-white font-medium mb-2">Overview</h4>
                              <p className="text-zion-slate-light text-sm leading-relaxed">{service.longDescription}</p>
=======
                    <div className="space-y-4 mb-6">
                      {/* Category & Innovation Level */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-cyan font-medium">{service.category}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          service.innovationLevel === 'Cutting-edge' 
                            ? 'bg-zion-cyan/20 text-zion-cyan' 
                            : service.innovationLevel === 'Advanced'
                            ? 'bg-zion-purple/20 text-zion-purple'
                            : 'bg-zion-blue/20 text-zion-blue'
                        }`}>
                          {service.innovationLevel}
                        </span>
                      </div>

                      {/* ROI & Market Price */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-zion-green">
                          <TrendingUp className="w-4 h-4" />
                          <span>ROI: {service.roi}</span>
                        </div>
                        <div className="text-zion-slate-light">
                          Market: {service.marketPrice}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <CheckCircle className="w-3 h-3 text-zion-cyan" />
                              {feature}
>>>>>>> b8c9a46dfc3f9de0b3a990cc62e9bddf78309e52
                            </div>

                            {/* Features */}
                            <div>
                              <h4 className="text-white font-medium mb-3">Key Features</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {service.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="h-4 w-4 text-zion-cyan" />
                                    <span className="text-zion-slate-light">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Benefits */}
                            <div>
                              <h4 className="text-white font-medium mb-3">Business Benefits</h4>
                              <div className="space-y-2">
                                {service.benefits.map((benefit, benefitIndex) => (
                                  <div key={benefitIndex} className="flex items-start gap-2 text-sm">
                                    <Star className="h-4 w-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                                    <span className="text-zion-slate-light">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Use Cases */}
                            <div>
                              <h4 className="text-white font-medium mb-3">Common Use Cases</h4>
                              <div className="flex flex-wrap gap-2">
                                {service.useCases.map((useCase, useCaseIndex) => (
                                  <span
                                    key={useCaseIndex}
                                    className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                                  >
                                    {useCase}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Technical Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-white font-medium mb-2">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                  {service.technologies.map((tech, techIndex) => (
                                    <span
                                      key={techIndex}
                                      className="px-2 py-1 bg-white/10 text-zion-slate-light text-xs rounded border border-white/20"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-white font-medium mb-2">Timeline</h4>
                                <p className="text-zion-slate-light text-sm">{service.estimatedTime}</p>
                              </div>
                            </div>

                            {/* CTA */}
                            <div className="pt-4">
                              <Link
                                to="/contact"
                                className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
                              >
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology services can help you achieve your business goals and stay ahead of the competition.
            </p>
<<<<<<< HEAD
=======
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Micro SAAS Services */}
            <motion.div
              className="card-futuristic text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                Micro SAAS Services
              </h3>
              
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {INNOVATIVE_MICRO_SAAS_SERVICES_2025.length} innovative micro SAAS solutions for modern businesses
              </p>
              
              <div className="text-zion-cyan font-bold mb-4">
                Starting from $99/month
              </div>
            </motion.div>

            {/* Advanced Enterprise Solutions */}
            <motion.div
              className="card-futuristic text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-purple to-zion-red rounded-xl flex items-center justify-center mx-auto mb-6">
                <Server className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-purple transition-colors">
                Enterprise Solutions
              </h3>
              
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {ADVANCED_ENTERPRISE_SOLUTIONS_2025.length} advanced enterprise-grade solutions for large organizations
              </p>
              
              <div className="text-zion-purple font-bold mb-4">
                Starting from $5,000/month
              </div>
            </motion.div>

            {/* Next-Gen AI Services */}
            <motion.div
              className="card-futuristic text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-green to-zion-cyan rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-green transition-colors">
                Next-Gen AI Services
              </h3>
              
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {NEXT_GEN_AI_SERVICES_2025.length} cutting-edge AI and machine learning solutions
              </p>
              
              <div className="text-zion-green font-bold mb-4">
                Starting from $2,500/month
              </div>
            </motion.div>

            {/* Specialized Industry Solutions */}
            <motion.div
              className="card-futuristic text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-orange to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-orange transition-colors">
                Industry Solutions
              </h3>
              
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {SPECIALIZED_INDUSTRY_SOLUTIONS_2025.length} specialized solutions for healthcare, finance, manufacturing, and retail
              </p>
              
              <div className="text-zion-orange font-bold mb-4">
                Starting from $3,000/month
              </div>
            </motion.div>

            {/* IoT & Edge Computing */}
            <motion.div
              className="card-futuristic text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-blue transition-colors">
                IoT & Edge Computing
              </h3>
              
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {IOT_EDGE_COMPUTING_SERVICES_2025.length} IoT platforms and edge computing solutions for smart infrastructure
              </p>
              
              <div className="text-zion-blue font-bold mb-4">
                Starting from $1,500/month
              </div>
            </motion.div>

            {/* Specialized Services */}
            <motion.div
              className="card-futuristic text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-pink to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-pink transition-colors">
                Specialized Services
              </h3>
              
              <p className="text-zion-slate-light mb-4 leading-relaxed">
                {SPECIALIZED_SERVICES.length} specialized technology solutions for unique business needs
              </p>
              
              <div className="text-zion-pink font-bold mb-4">
                Starting from $2,000/month
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-responsive font-bold mb-4">
              <span className="text-gradient">Specialized Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our specialized technology solutions designed for specific industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALIZED_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                className="card-futuristic text-center group hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="text-zion-cyan font-bold mb-4">
                  {service.marketPrice}
                </div>
                
                <Link
                  to={`/services/${service.id}`}
                  className="btn-neon w-full"
                >
                  Explore Solution
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-responsive font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Get in touch with our technology experts to discuss your specific needs and discover 
              how our innovative solutions can drive your business forward.
            </p>
            
>>>>>>> b8c9a46dfc3f9de0b3a990cc62e9bddf78309e52
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
