<<<<<<< HEAD
import React, { useState, useEffect } from 'react.ts';
import { motion, AnimatePresence             } from 'framer-motion.ts';
import { Link             } from 'react-router-dom.ts';
import { Brain,
  Cloud,
  Shield,
  Server,
  Zap,
  Globe,
  Cpu,
=======
import React from 'react.ts';
import { Link, useLocation             } from 'react-router-dom.ts';
import { motion             } from 'framer-motion.ts';
import { Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  Database,
  Server,
  Network,
  Lock,
  Cloud,
  Target,
  TrendingUp,
  Briefcase,
  Globe,
  Phone,
  Mail,
  MapPin,
<<<<<<< HEAD
  Globe as GlobeIcon
import { SEO             } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025, SPECIALIZED_SERVICES             } from '@/data/innovativeMicroSaasServices2025';
import { ADDITIONAL_MICRO_SAAS_SERVICES_2025, ADDITIONAL_SPECIALIZED_SERVICES             } from '@/data/additionalServices2025';
=======
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Leaf,
  Sun,
  Wind,
  Zap as Lightning,
  Shield as Security,
  Globe as Web,
  Smartphone,
  Watch,
  Headphones,
  Printer,
  Wifi,
  Bluetooth,
  Satellite,
  Telescope,
  Microscope,
  Flask,
  Pill,
  Stethoscope,
  Calculator,
  BookOpen,
  GraduationCap,
  DollarSign,
  CreditCard,
  ShoppingCart,
  Truck,
  Warehouse,
  Factory,
  Building2,
  Home,
  Store,
  Bank,
  Insurance,
  Law,
  Gavel,
  FileText,
  Calendar,
  Clock,
  Timer,
  Stopwatch,
  Thermometer,
  Gauge,
  Compass,
  Map,
  Navigation,
  Search,
  Filter,
  Sort,
  Download,
  Upload,
  Share,
  Link,
  Copy,
  Edit,
  Trash,
  Save,
  Plus,
  Minus,
  X,
  Check,
  AlertTriangle,
  Info,
  HelpCircle,
  Settings,
  User,
  LogOut,
  LogIn,
  UserPlus,
  UserMinus,
  Key,
  Unlock,
  Lock as LockIcon,
  EyeOff,
  Eye as EyeIcon,
  RefreshCw,
  RotateCcw,
  Power,
  PowerOff,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Volume,
  VolumeX,
  Volume1,
  Volume2,
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  Image,
  File,
  Folder,
  HardDrive,
  MemoryStick,
  Usb,
  Cable,
  Wifi as WifiIcon,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  Plug,
  Charging,
  Flash,
  Thunder,
  Rain,
  Snow,
  Cloud as CloudIcon,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Moon,
  Sunrise,
  Sunset,
  Star as StarIcon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Pi,
  Sigma,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Omega,
  Theta,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Rho,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega as OmegaIcon
} from 'lucide-react';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export function ServicesPage(...args: any[]): any {
  const location = useLocation();
  const currentService = location.pathname.split('/').pop();

<<<<<<< HEAD
  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-zion-cyan to-zion-blue' },
    { id: 'ai', name: 'AI & Analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
    { id: 'quantum', name: 'Quantum Computing', icon: Rocket, color: 'from-zion-blue to-zion-cyan' },
    { id: 'blockchain', name: 'Blockchain', icon: Lock, color: 'from-zion-purple to-zion-blue' },
    { id: 'iot', name: 'IoT & Edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
    { id: 'healthcare', name: 'Healthcare', icon: Users, color: 'from-zion-pink to-zion-purple' },
    { id: 'finance', name: 'Finance', icon: DollarSign, color: 'from-zion-green to-zion-blue' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Server, color: 'from-zion-blue to-zion-purple' },
    { id: 'sustainability', name: 'Sustainability', icon: Globe, color: 'from-zion-orange to-zion-green' }
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
    { id: 'popular', name: 'Most Popular' }
  ];

  // Filter and sort services
  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...SPECIALIZED_SERVICES,
    ...ADDITIONAL_MICRO_SAAS_SERVICES_2025,
    ...ADDITIONAL_SPECIALIZED_SERVICES
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (service.tags && service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));

    const matchesCategory = selectedCategory === 'all' ||
                           service.category.toLowerCase().includes(selectedCategory);

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
      default:
        return 0;

  });
=======
  const services = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      price: '$2,500 - $15,000/month',
      features: [
        'Machine Learning & Deep Learning',
        'Natural Language Processing',
        'Computer Vision & Image Recognition',
        'Predictive Analytics & Forecasting',
        'AI-Powered Automation',
        'Intelligent Decision Support',
        'AI Chatbots & Virtual Assistants',
        'Recommendation Systems'
      ],
      benefits: [
        'Increase operational efficiency by up to 40%',
        'Reduce costs through intelligent automation',
        'Improve decision-making with data-driven insights',
        'Enhance customer experience with personalized solutions',
        '24/7 AI-powered customer support',
        'Real-time data analysis and insights'
      ],
      useCases: [
        'Customer Service Chatbots',
        'Predictive Maintenance',
        'Fraud Detection',
        'Recommendation Systems',
        'Process Automation',
        'Quality Control',
        'Sales Forecasting',
        'Customer Segmentation'
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Harness the power of quantum mechanics for unprecedented computational capabilities and optimization',
      icon: Atom,
      color: 'from-blue-500 to-cyan-600',
      price: '$5,000 - $25,000/month',
      features: [
        'Quantum Algorithm Development',
        'Quantum AI Hybrid Systems',
        'Quantum Cryptography',
        'Quantum Optimization',
        'Quantum Machine Learning',
        'Quantum Simulation',
        'Quantum Error Correction',
        'Quantum-Classical Hybrid Computing'
      ],
      benefits: [
        'Solve complex problems exponentially faster',
        'Breakthrough computational capabilities',
        'Enhanced security with quantum encryption',
        'Revolutionary optimization algorithms',
        'Unprecedented simulation accuracy',
        'Future-proof technology investment'
      ],
      useCases: [
        'Financial Modeling',
        'Drug Discovery',
        'Climate Modeling',
        'Supply Chain Optimization',
        'Cryptography',
        'Machine Learning',
        'Material Science',
        'Logistics Optimization'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect your digital assets with AI-powered security solutions and zero-trust architecture',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      price: '$1,500 - $10,000/month',
      features: [
        'Zero Trust Security Architecture',
        'AI-Powered Threat Detection',
        'Security Headers & CSP Management',
        'Compliance & Risk Management',
        'Incident Response & Recovery',
        'Security Training & Awareness',
        'Penetration Testing',
        'Vulnerability Assessment'
      ],
      benefits: [
        'Real-time threat detection and response',
        'Comprehensive compliance management',
        'Reduced security incidents by 90%',
        '24/7 security monitoring and support',
        'Proactive threat prevention',
        'Regulatory compliance assurance'
      ],
      useCases: [
        'Network Security',
        'Application Security',
        'Data Protection',
        'Identity & Access Management',
        'Cloud Security',
        'IoT Security',
        'Endpoint Protection',
        'Security Operations Center'
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Modernize your infrastructure with cloud-native solutions and DevOps practices for scalability',
      icon: Cloud,
      color: 'from-green-500 to-teal-600',
      price: '$1,000 - $8,000/month',
      features: [
        'Cloud Migration & Strategy',
        'DevOps Automation',
        'Container Orchestration',
        'Infrastructure as Code',
        'Continuous Integration/Deployment',
        'Monitoring & Observability',
        'Serverless Architecture',
        'Multi-Cloud Management'
      ],
      benefits: [
        'Reduce infrastructure costs by 30-50%',
        'Faster time to market',
        'Improved reliability and scalability',
        'Enhanced security and compliance',
        'Automated deployment pipelines',
        'Real-time monitoring and alerting'
      ],
      useCases: [
        'Application Modernization',
        'Microservices Architecture',
        'Data Center Migration',
        'Disaster Recovery',
        'Performance Optimization',
        'Cost Optimization',
        'Auto-scaling Solutions',
        'DevOps Transformation'
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Transform your business processes and customer experience for the digital age with comprehensive solutions',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-600',
      price: '$3,000 - $20,000/month',
      features: [
        'Process Automation & Optimization',
        'Customer Experience Design',
        'Data Strategy & Analytics',
        'Change Management',
        'Technology Roadmapping',
        'Digital Culture Development',
        'Legacy System Modernization',
        'Digital Workplace Solutions'
      ],
      benefits: [
        'Improved operational efficiency',
        'Enhanced customer satisfaction',
        'Increased revenue growth',
        'Competitive advantage in digital markets',
        'Reduced operational costs',
        'Improved employee productivity'
      ],
      useCases: [
        'Business Process Automation',
        'Customer Journey Optimization',
        'Data-Driven Decision Making',
        'Employee Experience Enhancement',
        'Supply Chain Digitalization',
        'E-commerce Transformation',
        'Digital Marketing Automation',
        'Workflow Optimization'
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for better decision-making and business intelligence',
      icon: BarChart3,
      color: 'from-yellow-500 to-orange-600',
      price: '$1,200 - $8,500/month',
      features: [
        'Data Strategy & Architecture',
        'Business Intelligence & Reporting',
        'Advanced Analytics & Modeling',
        'Data Visualization',
        'Data Quality & Governance',
        'Real-time Analytics',
        'Predictive Analytics',
        'Data Lake & Warehouse Solutions'
      ],
      benefits: [
        'Data-driven decision making',
        'Improved operational efficiency',
        'Enhanced customer insights',
        'Competitive market intelligence',
        'Real-time business monitoring',
        'Predictive business insights'
      ],
      useCases: [
        'Business Performance Monitoring',
        'Customer Behavior Analysis',
        'Predictive Analytics',
        'Risk Assessment',
        'Market Research',
        'Operational Optimization',
        'Financial Analytics',
        'Supply Chain Analytics'
      ]
    },
    {
      id: 'iot-edge-computing',
      title: 'IoT & Edge Computing',
      description: 'Connect and manage IoT devices with edge computing for real-time processing and analytics',
      icon: Activity,
      color: 'from-emerald-500 to-green-600',
      price: '$800 - $6,000/month',
      features: [
        'IoT Device Management',
        'Edge Computing Infrastructure',
        'Real-time Data Processing',
        'IoT Security & Privacy',
        'Sensor Data Analytics',
        'Edge AI & Machine Learning',
        'IoT Platform Development',
        'Device Connectivity Solutions'
      ],
      benefits: [
        'Real-time data processing at the edge',
        'Reduced latency and bandwidth costs',
        'Enhanced privacy and security',
        'Scalable IoT deployments',
        'Improved operational efficiency',
        'Cost-effective data processing'
      ],
      useCases: [
        'Smart Manufacturing',
        'Connected Healthcare',
        'Smart Cities',
        'Industrial IoT',
        'Connected Vehicles',
        'Smart Agriculture',
        'Energy Management',
        'Environmental Monitoring'
      ]
    },
    {
      id: 'space-technology',
      title: 'Space Technology',
      description: 'Leverage space technology for satellite communications, Earth observation, and space exploration',
      icon: Rocket,
      color: 'from-violet-500 to-purple-600',
      price: '$5,000 - $30,000/month',
      features: [
        'Satellite Communications',
        'Earth Observation Systems',
        'Space Data Analytics',
        'Satellite Navigation',
        'Space Mission Planning',
        'Satellite Constellation Management',
        'Space Weather Monitoring',
        'Astronomical Data Processing'
      ],
      benefits: [
        'Global connectivity solutions',
        'Real-time Earth monitoring',
        'Advanced navigation systems',
        'Space exploration capabilities',
        'Environmental monitoring',
        'Scientific research support'
      ],
      useCases: [
        'Global Communications',
        'Environmental Monitoring',
        'Navigation & Positioning',
        'Weather Forecasting',
        'Disaster Management',
        'Agricultural Monitoring',
        'Maritime Operations',
        'Scientific Research'
      ]
    },
    {
      id: 'ai-healthcare-platform',
      title: 'AI Healthcare Platform',
      description: 'Revolutionize healthcare with AI-powered diagnostics, patient care, and medical research',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      price: '$3,500 - $18,000/month',
      features: [
        'AI-Powered Diagnostics',
        'Patient Care Management',
        'Medical Image Analysis',
        'Drug Discovery Support',
        'Predictive Healthcare',
        'Telemedicine Solutions',
        'Health Data Analytics',
        'Clinical Decision Support'
      ],
      benefits: [
        'Improved diagnostic accuracy',
        'Enhanced patient outcomes',
        'Reduced healthcare costs',
        'Faster drug discovery',
        'Personalized medicine',
        '24/7 medical support'
      ],
      useCases: [
        'Medical Imaging',
        'Patient Monitoring',
        'Drug Development',
        'Clinical Trials',
        'Healthcare Analytics',
        'Preventive Care',
        'Remote Patient Care',
        'Medical Research'
      ]
    },
    {
      id: 'ai-sales-copilot',
      title: 'AI Sales Copilot',
      description: 'Boost sales performance with AI-powered sales automation, lead scoring, and customer insights',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      price: '$500 - $3,000/month',
      features: [
        'Lead Scoring & Qualification',
        'Sales Process Automation',
        'Customer Behavior Analysis',
        'Sales Forecasting',
        'Email & Communication Automation',
        'CRM Integration',
        'Performance Analytics',
        'Sales Training Support'
      ],
      benefits: [
        'Increased sales conversion rates',
        'Improved lead quality',
        'Automated sales processes',
        'Better customer insights',
        'Enhanced sales team productivity',
        'Data-driven sales strategies'
      ],
      useCases: [
        'Lead Generation',
        'Sales Process Optimization',
        'Customer Relationship Management',
        'Sales Performance Tracking',
        'Email Marketing Automation',
        'Sales Training',
        'Customer Segmentation',
        'Revenue Optimization'
      ]
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation',
      description: 'Automate marketing campaigns with AI-powered personalization, analytics, and optimization',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      price: '$400 - $2,500/month',
      features: [
        'Campaign Automation',
        'Personalized Content',
        'Customer Segmentation',
        'Marketing Analytics',
        'A/B Testing Automation',
        'Social Media Management',
        'Email Marketing Automation',
        'ROI Optimization'
      ],
      benefits: [
        'Increased marketing ROI',
        'Personalized customer experiences',
        'Automated campaign management',
        'Better customer engagement',
        'Data-driven marketing decisions',
        'Reduced manual workload'
      ],
      useCases: [
        'Email Marketing',
        'Social Media Marketing',
        'Content Marketing',
        'Customer Journey Optimization',
        'Marketing Analytics',
        'Campaign Management',
        'Lead Nurturing',
        'Customer Retention'
      ]
    },
    {
      id: 'ai-project-management',
      title: 'AI Project Management',
      description: 'Streamline project management with AI-powered planning, resource allocation, and risk management',
      icon: Target,
      color: 'from-orange-500 to-red-600',
      price: '$300 - $2,000/month',
      features: [
        'Project Planning & Scheduling',
        'Resource Allocation',
        'Risk Assessment & Management',
        'Progress Tracking',
        'Team Collaboration Tools',
        'Automated Reporting',
        'Performance Analytics',
        'Integration Capabilities'
      ],
      benefits: [
        'Improved project success rates',
        'Better resource utilization',
        'Reduced project delays',
        'Enhanced team collaboration',
        'Automated project monitoring',
        'Data-driven project decisions'
      ],
      useCases: [
        'Software Development',
        'Construction Projects',
        'Marketing Campaigns',
        'Product Development',
        'Event Planning',
        'Research Projects',
        'Infrastructure Projects',
        'Business Transformations'
      ]
    },
    {
      id: 'quantum-ai-hybrid-platform',
      title: 'Quantum AI Hybrid Platform',
      description: 'Combine quantum computing with AI for revolutionary problem-solving capabilities',
      icon: Atom,
      color: 'from-cyan-500 to-blue-600',
      price: '$8,000 - $40,000/month',
      features: [
        'Quantum-Classical Hybrid Computing',
        'Quantum AI Algorithms',
        'Hybrid Optimization',
        'Quantum Machine Learning',
        'Quantum Neural Networks',
        'Hybrid Problem Solving',
        'Quantum Simulation',
        'Performance Analytics'
      ],
      benefits: [
        'Exponential computational power',
        'Revolutionary problem-solving',
        'Future-proof technology',
        'Competitive advantage',
        'Scientific breakthrough potential',
        'Unprecedented optimization'
      ],
      useCases: [
        'Financial Modeling',
        'Drug Discovery',
        'Climate Science',
        'Material Science',
        'Logistics Optimization',
        'Cryptography',
        'Machine Learning',
        'Scientific Research'
      ]
    },
    {
      id: 'ai-cybersecurity-platform',
      title: 'AI Cybersecurity Platform',
      description: 'Advanced AI-powered cybersecurity with real-time threat detection and automated response',
      icon: Shield,
      color: 'from-red-600 to-pink-600',
      price: '$2,000 - $12,000/month',
      features: [
        'AI Threat Detection',
        'Behavioral Analysis',
        'Automated Incident Response',
        'Zero Trust Architecture',
        'Threat Intelligence',
        'Vulnerability Management',
        'Compliance Monitoring',
        'Security Analytics'
      ],
      benefits: [
        'Real-time threat detection',
        'Automated security response',
        'Reduced false positives',
        '24/7 security monitoring',
        'Proactive threat prevention',
        'Compliance automation'
      ],
      useCases: [
        'Network Security',
        'Endpoint Protection',
        'Cloud Security',
        'Application Security',
        'Data Protection',
        'Identity Management',
        'Security Operations',
        'Compliance Management'
      ]
    },
    {
      id: 'quantum-ai-trading-platform',
      title: 'Quantum AI Trading Platform',
      description: 'Revolutionary trading platform combining quantum computing with AI for financial markets',
      icon: DollarSign,
      color: 'from-green-600 to-emerald-600',
      price: '$10,000 - $50,000/month',
      features: [
        'Quantum Algorithm Trading',
        'AI Market Analysis',
        'Real-time Risk Assessment',
        'Portfolio Optimization',
        'Market Prediction Models',
        'Automated Trading',
        'Compliance Management',
        'Performance Analytics'
      ],
      benefits: [
        'Superior trading performance',
        'Real-time risk management',
        'Automated trading strategies',
        'Enhanced market insights',
        'Portfolio optimization',
        'Regulatory compliance'
      ],
      useCases: [
        'Algorithmic Trading',
        'Risk Management',
        'Portfolio Management',
        'Market Analysis',
        'Compliance Monitoring',
        'Performance Tracking',
        'Strategy Optimization',
        'Financial Modeling'
      ]
    },
    {
      id: 'space-tech',
      title: 'Space Technology Solutions',
      description: 'Comprehensive space technology solutions for satellite operations and space exploration',
      icon: Satellite,
      color: 'from-purple-600 to-violet-600',
      price: '$6,000 - $35,000/month',
      features: [
        'Satellite Operations',
        'Space Mission Control',
        'Earth Observation',
        'Space Communications',
        'Satellite Navigation',
        'Space Weather',
        'Astronomical Research',
        'Space Data Analytics'
      ],
      benefits: [
        'Global connectivity',
        'Real-time monitoring',
        'Scientific advancement',
        'Commercial applications',
        'Environmental insights',
        'Technological innovation'
      ],
      useCases: [
        'Satellite Communications',
        'Earth Monitoring',
        'Navigation Systems',
        'Weather Forecasting',
        'Disaster Management',
        'Scientific Research',
        'Commercial Applications',
        'Space Exploration'
      ]
    },
    {
      id: 'digital-twin',
      title: 'Digital Twin Solutions',
      description: 'Create virtual replicas of physical systems for simulation, monitoring, and optimization',
      icon: Eye,
      color: 'from-blue-600 to-indigo-600',
      price: '$2,500 - $15,000/month',
      features: [
        '3D Modeling & Visualization',
        'Real-time Monitoring',
        'Predictive Analytics',
        'Simulation & Testing',
        'IoT Integration',
        'Performance Optimization',
        'Maintenance Planning',
        'Data Analytics'
      ],
      benefits: [
        'Improved operational efficiency',
        'Reduced maintenance costs',
        'Enhanced decision making',
        'Risk mitigation',
        'Performance optimization',
        'Predictive maintenance'
      ],
      useCases: [
        'Manufacturing',
        'Smart Cities',
        'Healthcare',
        'Energy Management',
        'Transportation',
        'Buildings',
        'Infrastructure',
        'Product Development'
      ]
    },
    {
      id: 'green-it',
      title: 'Green IT Solutions',
      description: 'Sustainable technology solutions for reducing environmental impact and energy consumption',
      icon: Leaf,
      color: 'from-green-600 to-emerald-600',
      price: '$800 - $5,000/month',
      features: [
        'Energy-Efficient Computing',
        'Sustainable Data Centers',
        'Green Cloud Solutions',
        'Carbon Footprint Tracking',
        'Renewable Energy Integration',
        'Waste Reduction',
        'Environmental Monitoring',
        'Sustainability Reporting'
      ],
      benefits: [
        'Reduced energy costs',
        'Environmental compliance',
        'Corporate social responsibility',
        'Improved brand reputation',
        'Regulatory compliance',
        'Sustainable operations'
      ],
      useCases: [
        'Data Center Optimization',
        'Cloud Computing',
        'Energy Management',
        'Waste Management',
        'Environmental Monitoring',
        'Sustainability Reporting',
        'Green Building Design',
        'Corporate Sustainability'
      ]
    },
    {
      id: 'zero-trust-network-access',
      title: 'Zero Trust Network Access',
      description: 'Implement zero trust security architecture for comprehensive network protection',
      icon: Lock,
      color: 'from-red-600 to-orange-600',
      price: '$1,500 - $8,000/month',
      features: [
        'Identity Verification',
        'Access Control',
        'Network Segmentation',
        'Continuous Monitoring',
        'Threat Detection',
        'Compliance Management',
        'Security Analytics',
        'Incident Response'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Compliance assurance',
        'Real-time monitoring',
        'Automated response',
        'Risk mitigation'
      ],
      useCases: [
        'Enterprise Networks',
        'Cloud Environments',
        'Remote Work',
        'IoT Networks',
        'Critical Infrastructure',
        'Financial Services',
        'Healthcare',
        'Government'
      ]
    },
    {
      id: 'ai-powered-business-intelligence',
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI analytics and predictive modeling',
      icon: Brain,
      color: 'from-violet-600 to-purple-700',
      price: '$2,000 - $12,000/month',
      features: [
        'Advanced Analytics & ML',
        'Predictive Modeling',
        'Natural Language Queries',
        'Real-time Dashboards',
        'Automated Insights',
        'Data Storytelling',
        'Collaborative Analytics',
        'Mobile BI Access'
      ],
      benefits: [
        'Data-driven decision making',
        'Predictive business insights',
        'Reduced analysis time by 80%',
        'Improved forecasting accuracy',
        'Real-time business monitoring',
        'Enhanced collaboration'
      ],
      useCases: [
        'Financial Planning',
        'Sales Forecasting',
        'Customer Analytics',
        'Operational Intelligence',
        'Risk Management',
        'Performance Tracking',
        'Market Analysis',
        'Strategic Planning'
      ]
    },
    {
      id: 'blockchain-enterprise-solutions',
      title: 'Blockchain Enterprise Solutions',
      description: 'Leverage blockchain technology for secure, transparent, and efficient business operations',
      icon: Link,
      color: 'from-emerald-600 to-teal-700',
      price: '$3,000 - $20,000/month',
      features: [
        'Smart Contract Development',
        'DeFi Protocol Integration',
        'Cross-chain Interoperability',
        'Digital Asset Management',
        'Supply Chain Tracking',
        'Identity Verification',
        'Token Economics',
        'Regulatory Compliance'
      ],
      benefits: [
        'Enhanced security and transparency',
        'Reduced operational costs',
        'Automated trust mechanisms',
        'Global accessibility',
        'Immutable audit trails',
        'Innovative business models'
      ],
      useCases: [
        'Supply Chain Management',
        'Financial Services',
        'Healthcare Records',
        'Real Estate',
        'Voting Systems',
        'Intellectual Property',
        'Cross-border Payments',
        'Digital Identity'
      ]
    },
    {
      id: 'quantum-machine-learning',
      title: 'Quantum Machine Learning',
      description: 'Harness quantum computing power for revolutionary machine learning capabilities',
      icon: Atom,
      color: 'from-indigo-600 to-blue-700',
      price: '$8,000 - $50,000/month',
      features: [
        'Quantum Neural Networks',
        'Quantum Feature Selection',
        'Quantum Optimization',
        'Hybrid Classical-Quantum',
        'Quantum Error Correction',
        'Quantum Simulation',
        'Quantum Cryptography',
        'Performance Analytics'
      ],
      benefits: [
        'Exponential computational speed',
        'Revolutionary ML capabilities',
        'Enhanced optimization',
        'Future-proof technology',
        'Competitive advantage',
        'Scientific breakthroughs'
      ],
      useCases: [
        'Drug Discovery',
        'Financial Modeling',
        'Climate Prediction',
        'Material Science',
        'Logistics Optimization',
        'Cryptography',
        'AI Research',
        'Scientific Computing'
      ]
    },
    {
      id: 'edge-ai-computing',
      title: 'Edge AI Computing',
      description: 'Deploy AI models at the edge for real-time processing and reduced latency',
      icon: Cpu,
      color: 'from-orange-600 to-red-700',
      price: '$1,500 - $10,000/month',
      features: [
        'Edge Model Deployment',
        'Real-time Inference',
        'Offline Processing',
        'Model Optimization',
        'Edge Device Management',
        'Data Synchronization',
        'Security & Privacy',
        'Performance Monitoring'
      ],
      benefits: [
        'Reduced latency',
        'Lower bandwidth costs',
        'Enhanced privacy',
        'Offline capabilities',
        'Scalable deployment',
        'Real-time responsiveness'
      ],
      useCases: [
        'Autonomous Vehicles',
        'Smart Manufacturing',
        'IoT Devices',
        'Mobile Applications',
        'Healthcare Monitoring',
        'Retail Analytics',
        'Security Systems',
        'Smart Cities'
      ]
    },
    {
      id: 'ai-ethics-governance',
      title: 'AI Ethics & Governance',
      description: 'Ensure responsible AI development with comprehensive ethics and governance frameworks',
      icon: Shield,
      color: 'from-pink-600 to-rose-700',
      price: '$2,500 - $15,000/month',
      features: [
        'AI Ethics Framework',
        'Bias Detection & Mitigation',
        'Explainable AI',
        'Fairness Assessment',
        'Privacy Protection',
        'Compliance Monitoring',
        'Stakeholder Engagement',
        'Audit & Reporting'
      ],
      benefits: [
        'Responsible AI development',
        'Regulatory compliance',
        'Reduced bias and discrimination',
        'Enhanced transparency',
        'Stakeholder trust',
        'Risk mitigation'
      ],
      useCases: [
        'AI Development Teams',
        'Regulatory Compliance',
        'Risk Management',
        'Corporate Governance',
        'Public Policy',
        'Research Institutions',
        'Healthcare AI',
        'Financial AI'
      ]
    },
    {
      id: 'neuromorphic-computing',
      title: 'Neuromorphic Computing',
      description: 'Revolutionary brain-inspired computing for next-generation AI applications',
      icon: Brain,
      color: 'from-cyan-600 to-blue-700',
      price: '$10,000 - $60,000/month',
      features: [
        'Brain-inspired Architecture',
        'Spiking Neural Networks',
        'Low-power Computing',
        'Real-time Learning',
        'Adaptive Processing',
        'Neuromorphic Chips',
        'Cognitive Computing',
        'Bio-inspired Algorithms'
      ],
      benefits: [
        'Ultra-low power consumption',
        'Real-time learning capabilities',
        'Brain-like processing',
        'Adaptive intelligence',
        'Revolutionary performance',
        'Future computing paradigm'
      ],
      useCases: [
        'Autonomous Systems',
        'Cognitive Computing',
        'Brain-computer Interfaces',
        'Robotics',
        'Sensor Networks',
        'Medical Devices',
        'IoT Applications',
        'Scientific Research'
      ]
    },
    {
      id: 'ai-powered-cybersecurity',
      title: 'AI-Powered Cybersecurity',
      description: 'Advanced threat detection and response using artificial intelligence and machine learning',
      icon: Shield,
      color: 'from-red-600 to-pink-700',
      price: '$2,500 - $15,000/month',
      features: [
        'AI Threat Detection',
        'Behavioral Analysis',
        'Automated Response',
        'Threat Intelligence',
        'Vulnerability Assessment',
        'Incident Management',
        'Security Analytics',
        'Compliance Monitoring'
      ],
      benefits: [
        'Real-time threat detection',
        'Reduced false positives',
        'Automated incident response',
        '24/7 security monitoring',
        'Proactive threat prevention',
        'Enhanced security posture'
      ],
      useCases: [
        'Enterprise Security',
        'Cloud Security',
        'Network Protection',
        'Endpoint Security',
        'Application Security',
        'Data Protection',
        'Identity Management',
        'Security Operations'
      ]
    },

    // New Revolutionary Services 2025
    {
      id: 'quantum-ai-hybrid-platform',
      title: 'Quantum AI Hybrid Platform',
      description: 'Revolutionary platform combining quantum computing with AI for exponential computational power and breakthrough problem-solving capabilities',
      icon: Atom,
      color: 'from-cyan-600 to-blue-700',
      price: '$2,999 - $9,999/month',
      features: [
        'Quantum-Classical Hybrid Computing',
        'Quantum AI Algorithms',
        'Quantum Machine Learning',
        'Quantum Neural Networks',
        'Hybrid Problem Solving',
        'Quantum Simulation',
        'Performance Analytics',
        'Expert Quantum Consulting'
      ],
      benefits: [
        'Solve problems 1000x faster than classical computers',
        'Exponential computational power',
        'Revolutionary AI capabilities',
        'Future-proof technology investment',
        'Competitive advantage in R&D',
        'Breakthrough scientific discoveries'
      ],
      useCases: [
        'Pharmaceutical Research',
        'Financial Modeling',
        'Climate Science',
        'Material Science',
        'Cryptography',
        'Logistics Optimization',
        'Machine Learning Research',
        'Scientific Computing'
      ]
    },

    {
      id: 'ai-edge-computing-platform',
      title: 'AI Edge Computing Platform',
      description: 'Revolutionary edge computing platform bringing AI processing to the edge for real-time decision making and offline capabilities',
      icon: Cpu,
      color: 'from-orange-600 to-red-700',
      price: '$699 - $2,499/month',
      features: [
        'Edge AI Model Deployment',
        'Real-time Inference at Edge',
        'Offline AI Processing',
        'Edge Device Management',
        'Model Compression & Optimization',
        'Edge-to-Cloud Sync',
        'Multi-edge Node Orchestration',
        'Edge Security & Privacy'
      ],
      benefits: [
        'Reduce latency by 90% vs cloud processing',
        'Enable offline AI capabilities',
        'Reduce bandwidth costs by 70%',
        'Enhanced privacy and security',
        'Real-time decision making',
        'Scalable edge AI deployment'
      ],
      useCases: [
        'Autonomous Vehicles',
        'Smart Manufacturing',
        'IoT Devices',
        'Mobile Applications',
        'Healthcare Monitoring',
        'Retail Analytics',
        'Security Systems',
        'Smart Cities'
      ]
    },

    {
      id: 'ai-blockchain-analytics',
      title: 'AI Blockchain Analytics Platform',
      description: 'Advanced analytics platform combining AI with blockchain for real-time insights, fraud detection, and DeFi optimization',
      icon: Link,
      color: 'from-emerald-600 to-teal-700',
      price: '$899 - $2,999/month',
      features: [
        'Real-time Blockchain Analysis',
        'AI-Powered Fraud Detection',
        'DeFi Protocol Analytics',
        'Smart Contract Risk Assessment',
        'Cryptocurrency Market Intelligence',
        'Blockchain Network Monitoring',
        'Predictive Crypto Analytics',
        'Compliance & Regulatory Reporting'
      ],
      benefits: [
        'Detect fraud in real-time',
        'Optimize DeFi strategies',
        'Reduce blockchain security risks',
        'Compliance automation',
        'Real-time market intelligence',
        'Predictive trading insights'
      ],
      useCases: [
        'Cryptocurrency Exchanges',
        'DeFi Protocols',
        'Financial Institutions',
        'Regulatory Agencies',
        'Investment Firms',
        'Blockchain Companies'
      ]
    },

    {
      id: 'ai-financial-trading-platform',
      title: 'AI Financial Trading Platform',
      description: 'Advanced AI-powered trading platform with real-time market analysis, automated strategies, and risk management',
      icon: DollarSign,
      color: 'from-green-600 to-emerald-700',
      price: '$999 - $2,999/month',
      features: [
        'AI-Powered Trading Signals',
        'Automated Trading Strategies',
        'Real-time Risk Assessment',
        'Portfolio Optimization',
        'Market Prediction Models',
        'Multi-asset Trading',
        'Compliance Management',
        'Performance Analytics'
      ],
      benefits: [
        'Increase trading performance by 25-40%',
        'Reduce emotional trading decisions',
        '24/7 automated trading',
        'Advanced risk management',
        'Real-time market insights',
        'Portfolio diversification'
      ],
      useCases: [
        'Institutional Investors',
        'Retail Traders',
        'Hedge Funds',
        'Asset Management Firms',
        'Financial Advisors',
        'Quantitative Trading Firms'
      ]
    },

    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics Platform',
      description: 'Comprehensive healthcare analytics leveraging AI for predictive insights, patient risk assessment, and operational optimization',
      icon: Heart,
      color: 'from-pink-600 to-rose-700',
      price: '$599 - $1,999/month',
      features: [
        'Predictive Patient Risk Assessment',
        'Population Health Analytics',
        'Clinical Decision Support',
        'Healthcare Operations Optimization',
        'Revenue Cycle Management',
        'Patient Engagement Analytics',
        'Quality Metrics & Reporting',
        'EHR Integration'
      ],
      benefits: [
        'Reduce readmission rates by 30%',
        'Improve patient outcomes by 25%',
        'Optimize healthcare operations',
        'Reduce healthcare costs by 20%',
        'Enhanced clinical decision making',
        'Improve patient satisfaction'
      ],
      useCases: [
        'Hospitals & Health Systems',
        'Primary Care Practices',
        'Specialty Clinics',
        'Health Insurance Companies',
        'Public Health Agencies',
        'Research Institutions'
      ]
    }
  ];
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  const getCurrentService = () => {
    if (!currentService || currentService === 'services') {
      return null;
    }
    return services.find(service => service.id === currentService);
  };

  const currentServiceData = getCurrentService();

<<<<<<< HEAD
  return (
    <>
      <SEO
        title="Innovative Micro SAAS Services - Zion Tech Group"
        description="Discover cutting-edge micro SAAS solutions including AI, Quantum Computing, Blockchain, IoT, and more. Transform your business with our innovative technology services."
        canonical="/services"
        url="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="bg-futuristic min-h-[60vh] flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="container-responsive relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

            <h1 className="heading-responsive font-bold mb-6">
              <span className="text-gradient">Innovative Micro SAAS</span>
              <br />
              <span className="text-white">Services & Solutions</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with cutting-edge technology solutions. From AI-powered analytics to quantum computing,
              discover the future of business technology with our comprehensive micro SAAS platform.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-light/10 border border-zion-cyan/20 rounded-xl px-12 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
=======
  if (currentServiceData) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className={`w-24 h-24 bg-gradient-to-r ${currentServiceData.color} rounded-2xl flex items-center justify-center`}>
                  <currentServiceData.icon className="w-12 h-12 text-white" />
                </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">{currentServiceData.title}</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
                {currentServiceData.description}
              </p>
              
              {/* Pricing Badge */}
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl">
                <DollarSign className="w-6 h-6 text-cyan-400" />
                <span className="text-cyan-400 font-bold text-xl">{currentServiceData.price}</span>
              </div>
            </motion.div>
          </div>

<<<<<<< HEAD
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}

                <div className="text-3xl font-bold text-zion-cyan mb-2">{INNOVATIVE_MICRO_SAAS_SERVICES_2025.length + SPECIALIZED_SERVICES.length}+</div>
                <div className="text-zion-slate-light">Innovative Services</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}

                <div className="text-3xl font-bold text-zion-purple mb-2">{categories.length}+</div>
                <div className="text-zion-slate-light">Technology Categories</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}

                <div className="text-3xl font-bold text-zion-blue mb-2">99.9%</div>
                <div className="text-zion-slate-light">Uptime Guarantee</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py-12 bg-zion-slate-dark/50">
        <div className="container-responsive">
          {/* Category Pills */}
          <motion.div
            className="flex flex-wrap gap-3 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: anyanyanyanyanyanyanyanyanyanyanyany0.6 }}

            {categories.map((category)             => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
                }`}

                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Advanced Filters */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}

            <div className="flex flex-wrap gap-4">
              {/* Price Range Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-zion-cyan" />
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-zion-cyan"

                  {priceRanges.map((range)             => (
                    <option key={range.id} value={range.id}>{range.name}</option>
=======
          {/* Service Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <Zap className="w-7 h-7 text-cyan-400" />
                  <span>Key Features</span>
                </h2>
                <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-4">
                  {currentServiceData.features.map((feature, index)             => (
                    <div key={index} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                  ))}
                </div>
              </div>

<<<<<<< HEAD
              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-zion-cyan" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-zion-cyan"

                  {sortOptions.map((option)             => (
                    <option key={option.id} value={option.id}>{option.name}</option>
=======
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <Star className="w-7 h-7 text-yellow-400" />
                  <span>Benefits</span>
                </h2>
                <div className="space-y-4">
                  {currentServiceData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <Target className="w-7 h-7 text-green-400" />
                  <span>Use Cases</span>
                </h2>
                <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-4">
                  {currentServiceData.useCases.map((useCase, index)             => (
                    <div key={index} className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

<<<<<<< HEAD
      {/* Services Grid */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container-responsive">
          <AnimatePresence mode="wait">
            {sortedServices.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: anyanyanyanyanyanyanyanyanyanyanyany0.5 }}

                {sortedServices.map((service, index)             => (
                  <motion.div
                    key={service.id}
                    className="card-futuristic group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}

                    {/* Service Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-xl flex items-center justify-center`}>
                          {getCategoryIcon(service.category) && React.createElement(getCategoryIcon(service.category), { className: "w-6 h-6 text-white" })}
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
                          <div className="text-sm text-zion-slate-light">per month</div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-zion-slate-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-4 mb-6">
                      {/* Category & Innovation Level */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-cyan font-medium">{service.category}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          service.innovationLevel === 'Cutting-edge'
                            ? 'bg-zion-cyan/20 text-zion-cyan'
                            : 'bg-zion-purple/20 text-zion-purple'
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
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Service Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                      <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.estimatedDelivery}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-zion-cyan" />
                          <span>{service.supportLevel}</span>
                        </div>
                      </div>

                      <Link
                        to={`/services/${service.id}`}
                        className="btn-futuristic px-4 py-2 text-sm"

                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}

                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light mb-6">
                  Try adjusting your search criteria or browse all categories
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="btn-futuristic px-6 py-3"

                  View All Services
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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

            <h2 className="heading-responsive font-bold mb-4">
              <span className="text-gradient">Specialized Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our specialized technology solutions designed for specific industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIALIZED_SERVICES.map((service, index)             => (
              <motion.div
                key={service.id}
                className="card-futuristic text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}

                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
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

                  Explore Solution
                </Link>
              </motion.div>
            ))}
=======
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-cyan-100 mb-6">
                  Transform your business with our cutting-edge {currentServiceData.title.toLowerCase()} solutions.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-white text-cyan-600 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact Sales
                  </Link>
                  <Link
                    to="/request-quote"
                    className="block w-full text-center bg-transparent text-white px-4 py-3 rounded-lg font-semibold border border-white hover:bg-white/10 transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>364 E Main St STE 1008 Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </motion.div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </div>
        </div>
      </div>
    );
  }

  // Services Overview Page
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

            <h2 className="heading-responsive font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Get in touch with our technology experts to discuss your specific needs and discover
              how our innovative solutions can drive your business forward.
=======
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to drive innovation, enhance security, 
              and accelerate your digital transformation journey.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index)             => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-cyan-500/30 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
              
              {/* Pricing */}
              <div className="mb-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg">
                  <DollarSign className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold text-sm">{service.price}</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>{feature}</span>
                  </div>
                ))}
                {service.features.length > 3 && (
                  <div className="text-sm text-gray-500">
                    +{service.features.length - 3} more features
                  </div>
                )}
              </div>

              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group-hover:translate-x-1 transition-transform"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* New Services Showcase CTA */}
        <div className="text-center mt-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Discover Our Revolutionary New Services 2025
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Explore our latest cutting-edge micro SAAS services, AI-powered platforms, and emerging technology solutions. 
              Each service is designed with proven ROI and market-leading capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/new-services-2025"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Explore New Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/comprehensive-showcase-2025"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Comprehensive Showcase</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
              >
                <span>Contact Sales</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your technology goals
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="btn-futuristic px-8 py-4 text-lg"

                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>

              <a
                href="tel:+13024640950"
                className="btn-neon px-8 py-4 text-lg"

                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </div>

            <div className="mt-8 text-zion-slate-light">
              <p className="mb-2">📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a></p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
=======
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
              >
                <span>Request a Quote</span>
              </Link>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}}}