import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain,
  Eye,
  MessageSquare,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  DollarSign,
  Award,
  Globe,
  Lock,
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Cloud,
  Server,
  Network,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  Mail,
  Search,
  Target,
  TrendingUp,
  Package,
  Calendar,
  BookOpen,
  ShoppingCart,
  Home,
  Trash2,
  Camera,
  HardDrive,
  Database,
  Phone,
  MapPin,
  Zap,
  Users,
  Shield,
  Wifi,
  Laptop,
  Truck,
  GraduationCap,
  PieChart,
  ClipboardList,
  TreePine,
  Droplets,
  Gamepad2,
} from 'lucide-react';

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
};

const aiServices = [
  // AI Automation & Process Intelligence
  {
    id: 1,
    title: 'Machine Learning Models',
    description:
      'Custom ML models for predictive analytics, automation, and intelligent decision-making across various industries.',
    icon: Brain,
    category: 'Machine Learning',
    price: 'Starting at $3,500/month',
    features: [
      'Custom model development & training',
      'Data preprocessing & feature engineering',
      'Model deployment & monitoring',
      'A/B testing & performance optimization',
      'Real-time prediction APIs',
      'Model versioning & management',
      'Automated retraining pipelines',
      'Integration with existing systems',
    ],
    benefits: [
      'Increase prediction accuracy by 40-60%',
      'Automate decision-making processes',
      'Reduce manual analysis time by 80%',
      'Improve business outcomes by 25-35%',
    ],
    marketPrice: '$5,000-12,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'E-commerce, Finance, Healthcare, Manufacturing',
  },
  {
    id: 2,
    title: 'Computer Vision Solutions',
    description:
      'Advanced image and video analysis for object detection, recognition, and automated visual inspection.',
    icon: Eye,
    category: 'Computer Vision',
    price: 'Starting at $2,800/month',
    features: [
      'Object detection & recognition',
      'Image classification & tagging',
      'Facial recognition & analysis',
      'Video analytics & monitoring',
      'OCR & document processing',
      'Quality control automation',
      'Real-time processing capabilities',
      'Custom model fine-tuning',
    ],
    benefits: [
      'Improve accuracy by 95%+ in visual tasks',
      'Reduce inspection time by 90%',
      'Enable 24/7 automated monitoring',
      'Lower operational costs by 50%',
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Manufacturing, Retail, Security, Healthcare',
  },
  {
    id: 3,
    title: 'Natural Language Processing',
    description:
      'Text analysis, sentiment analysis, language understanding, and automated content processing solutions.',
    icon: MessageSquare,
    category: 'NLP',
    price: 'Starting at $2,200/month',
    features: [
      'Text analysis & sentiment detection',
      'Language translation & localization',
      'Chatbot & virtual assistant development',
      'Document summarization & extraction',
      'Content moderation & filtering',
      'Voice-to-text & text-to-speech',
      'Intent recognition & classification',
      'Multi-language support',
    ],
    benefits: [
      'Process 10,000+ documents per hour',
      'Improve customer satisfaction by 35%',
      'Reduce content moderation costs by 70%',
      'Enable multilingual operations',
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'Customer service, Content platforms, E-learning, Legal',
  },
  {
    id: 4,
    title: 'AI-Powered Analytics',
    description:
      'Intelligent data analysis with predictive insights, anomaly detection, and automated reporting.',
    icon: BarChart3,
    category: 'Analytics',
    price: 'Starting at $2,500/month',
    features: [
      'Predictive analytics & forecasting',
      'Anomaly detection & alerting',
      'Automated report generation',
      'Real-time data visualization',
      'Pattern recognition & insights',
      'Custom dashboard creation',
      'Data quality assessment',
      'Trend analysis & recommendations',
    ],
    benefits: [
      'Increase decision speed by 60%',
      'Identify opportunities 3x faster',
      'Reduce false positives by 80%',
      'Improve forecast accuracy by 40%',
    ],
    marketPrice: '$4,000-9,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Finance, Marketing, Operations, Sales teams',
  },
  {
    id: 5,
    title: 'AI Chatbots & Virtual Assistants',
    description:
      'Intelligent conversational AI for customer service, sales, and internal operations automation.',
    icon: Bot,
    category: 'Conversational AI',
    price: 'Starting at $1,800/month',
    features: [
      'Multi-channel chatbot deployment',
      'Natural language understanding',
      'Context-aware conversations',
      'Integration with CRM & databases',
      'Voice & text capabilities',
      'Escalation to human agents',
      'Analytics & performance tracking',
      'Custom personality & branding',
    ],
    benefits: [
      'Handle 80% of customer queries automatically',
      'Reduce response time by 90%',
      'Improve customer satisfaction by 40%',
      'Lower support costs by 60%',
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-3 weeks',
    targetUsers: 'E-commerce, Healthcare, Finance, Customer service',
  },
  // NEW INNOVATIVE AI SERVICES
  {
    id: 101,
    title: 'AI-Powered Drug Discovery Platform',
    description:
      'Revolutionary AI platform for accelerating drug discovery, molecular design, and pharmaceutical research.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $15,000/month',
    features: [
      'Molecular property prediction',
      'Drug-target interaction modeling',
      'ADMET property prediction',
      'Synthetic route optimization',
      'Clinical trial optimization',
      'Biomarker discovery',
      'Drug repurposing analysis',
      'Toxicity prediction',
    ],
    benefits: [
      'Reduce drug discovery time by 70%',
      'Increase success rate by 40%',
      'Lower R&D costs by 50%',
      'Accelerate time to market',
    ],
    marketPrice: '$25,000-100,000/month',
    setupTime: '8-12 weeks',
    targetUsers:
      'Pharmaceutical companies, Biotech firms, Research institutions',
  },
  {
    id: 102,
    title: 'Quantum AI Optimization Engine',
    description:
      'Cutting-edge quantum AI for solving complex optimization problems in logistics, finance, and operations.',
    icon: Cpu,
    category: 'Quantum AI',
    price: 'Starting at $12,000/month',
    features: [
      'Quantum machine learning algorithms',
      'Complex optimization problems',
      'Portfolio optimization',
      'Supply chain optimization',
      'Route optimization',
      'Resource allocation',
      'Scheduling optimization',
      'Risk management',
    ],
    benefits: [
      'Solve problems 1000x faster',
      'Find optimal solutions in complex scenarios',
      'Reduce operational costs by 30%',
      'Improve decision accuracy by 90%',
    ],
    marketPrice: '$20,000-80,000/month',
    setupTime: '6-10 weeks',
    targetUsers: 'Financial services, Logistics, Manufacturing, Government',
  },
  {
    id: 103,
    title: 'AI-Powered Climate Change Modeling',
    description:
      'Advanced AI models for climate prediction, environmental impact assessment, and sustainability planning.',
    icon: TreePine,
    category: 'Environmental AI',
    price: 'Starting at $8,000/month',
    features: [
      'Climate pattern prediction',
      'Carbon footprint analysis',
      'Renewable energy optimization',
      'Environmental risk assessment',
      'Sustainability metrics tracking',
      'Emission reduction strategies',
      'Weather pattern analysis',
      'Ecosystem monitoring',
    ],
    benefits: [
      'Improve climate predictions by 60%',
      'Reduce environmental impact by 40%',
      'Optimize renewable energy usage',
      'Enable data-driven sustainability',
    ],
    marketPrice: '$12,000-50,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Environmental agencies, Energy companies, Government, NGOs',
  },
  {
    id: 104,
    title: 'Autonomous AI Trading System',
    description:
      'Fully autonomous AI trading platform with real-time market analysis and automated decision making.',
    icon: TrendingUp,
    category: 'FinTech AI',
    price: 'Starting at $20,000/month',
    features: [
      'Real-time market analysis',
      'Automated trading decisions',
      'Risk management algorithms',
      'Portfolio optimization',
      'Sentiment analysis integration',
      'News impact assessment',
      'Pattern recognition',
      'Backtesting capabilities',
    ],
    benefits: [
      'Generate 25-40% annual returns',
      'Reduce human error by 95%',
      'Operate 24/7 without breaks',
      'Process market data in milliseconds',
    ],
    marketPrice: '$35,000-150,000/month',
    setupTime: '8-12 weeks',
    targetUsers:
      'Hedge funds, Investment banks, Trading firms, Wealth management',
  },
  {
    id: 105,
    title: 'AI-Powered Space Mission Planning',
    description:
      'Advanced AI for space mission optimization, satellite constellation management, and space exploration.',
    icon: Rocket,
    category: 'Space AI',
    price: 'Starting at $25,000/month',
    features: [
      'Mission trajectory optimization',
      'Satellite constellation management',
      'Space debris tracking',
      'Resource allocation optimization',
      'Communication link optimization',
      'Orbital mechanics calculations',
      'Mission risk assessment',
      'Autonomous navigation',
    ],
    benefits: [
      'Reduce mission costs by 50%',
      'Improve mission success rate by 35%',
      'Optimize fuel consumption',
      'Enable autonomous operations',
    ],
    marketPrice: '$40,000-200,000/month',
    setupTime: '10-16 weeks',
    targetUsers:
      'Space agencies, Satellite companies, Aerospace firms, Government',
  },
  {
    id: 106,
    title: 'AI-Powered Legal Document Analysis',
    description:
      'Intelligent legal document processing with contract analysis, compliance checking, and case law research.',
    icon: FileText,
    category: 'Legal AI',
    price: 'Starting at $5,000/month',
    features: [
      'Contract analysis & review',
      'Compliance checking',
      'Case law research',
      'Legal document summarization',
      'Risk assessment',
      'Due diligence automation',
      'Legal precedent analysis',
      'Document generation',
    ],
    benefits: [
      'Reduce document review time by 80%',
      'Improve accuracy by 95%',
      'Lower legal costs by 60%',
      'Enable 24/7 legal research',
    ],
    marketPrice: '$8,000-30,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Law firms, Corporate legal, Government agencies, Legal tech',
  },
  {
    id: 107,
    title: 'AI-Powered Agricultural Intelligence',
    description:
      'Smart farming solutions with crop monitoring, yield prediction, and automated agricultural management.',
    icon: Sprout,
    category: 'AgTech AI',
    price: 'Starting at $3,500/month',
    features: [
      'Crop health monitoring',
      'Yield prediction & optimization',
      'Soil analysis & recommendations',
      'Pest & disease detection',
      'Irrigation optimization',
      'Weather-based planning',
      'Resource allocation',
      'Harvest timing optimization',
    ],
    benefits: [
      'Increase crop yield by 30%',
      'Reduce water usage by 25%',
      'Lower pesticide use by 40%',
      'Improve farm profitability by 50%',
    ],
    marketPrice: '$6,000-25,000/month',
    setupTime: '4-8 weeks',
    targetUsers:
      'Farmers, Agricultural companies, Food producers, Research institutions',
  },
  {
    id: 108,
    title: 'AI-Powered Cybersecurity Intelligence',
    description:
      'Advanced AI security platform with threat detection, incident response, and predictive security analytics.',
    icon: Shield,
    category: 'Security AI',
    price: 'Starting at $7,500/month',
    features: [
      'Advanced threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Threat intelligence analysis',
      'Vulnerability assessment',
      'Security orchestration',
      'Predictive threat modeling',
      'Zero-day attack detection',
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 85%',
      'Prevent 95% of cyber attacks',
      'Enable proactive security posture',
    ],
    marketPrice: '$12,000-50,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Enterprises, Government, Financial services, Healthcare',
  },
  {
    id: 109,
    title: 'AI-Powered Smart City Management',
    description:
      'Comprehensive AI platform for smart city operations, traffic management, and urban planning.',
    icon: Building,
    category: 'Smart City AI',
    price: 'Starting at $10,000/month',
    features: [
      'Traffic flow optimization',
      'Energy consumption management',
      'Waste management optimization',
      'Public safety monitoring',
      'Infrastructure maintenance',
      'Citizen service automation',
      'Environmental monitoring',
      'Urban planning insights',
    ],
    benefits: [
      'Reduce traffic congestion by 40%',
      'Lower energy consumption by 25%',
      'Improve citizen satisfaction by 60%',
      'Enable data-driven urban planning',
    ],
    marketPrice: '$15,000-75,000/month',
    setupTime: '6-12 weeks',
    targetUsers:
      'City governments, Urban planners, Infrastructure companies, Technology firms',
  },
  {
    id: 110,
    title: 'AI-Powered Personal Health Assistant',
    description:
      'Intelligent health monitoring with personalized recommendations, disease prediction, and wellness tracking.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $2,000/month',
    features: [
      'Health data analysis',
      'Disease risk prediction',
      'Personalized recommendations',
      'Medication adherence tracking',
      'Symptom analysis',
      'Wellness coaching',
      'Emergency health alerts',
      'Integration with wearables',
    ],
    benefits: [
      'Improve health outcomes by 45%',
      'Reduce healthcare costs by 30%',
      'Enable preventive care',
      'Personalize treatment plans',
    ],
    marketPrice: '$3,500-15,000/month',
    setupTime: '3-6 weeks',
    targetUsers:
      'Healthcare providers, Insurance companies, Wellness apps, Individuals',
  },
  {
    id: 111,
    title: 'AI-Powered Content Creation Studio',
    description:
      'Advanced AI platform for automated content creation including videos, articles, and multimedia content.',
    icon: Video,
    category: 'Content AI',
    price: 'Starting at $4,500/month',
    features: [
      'Automated video production',
      'Article & blog generation',
      'Social media content creation',
      'Multimedia content generation',
      'Brand voice customization',
      'SEO optimization',
      'Content scheduling',
      'Performance analytics',
    ],
    benefits: [
      'Reduce content creation time by 90%',
      'Increase content output by 500%',
      'Maintain consistent brand voice',
      'Optimize for engagement and SEO',
    ],
    marketPrice: '$7,500-30,000/month',
    setupTime: '3-6 weeks',
    targetUsers:
      'Marketing agencies, Content creators, Media companies, E-commerce',
  },
  {
    id: 112,
    title: 'AI-Powered Supply Chain Optimization',
    description:
      'Intelligent supply chain management with demand forecasting, inventory optimization, and logistics planning.',
    icon: Package,
    category: 'Supply Chain AI',
    price: 'Starting at $6,000/month',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Supplier risk assessment',
      'Logistics route optimization',
      'Quality control automation',
      'Cost optimization',
      'Sustainability tracking',
      'Real-time monitoring',
    ],
    benefits: [
      'Reduce inventory costs by 35%',
      'Improve delivery times by 50%',
      'Lower supply chain risks by 60%',
      'Increase overall efficiency by 40%',
    ],
    marketPrice: '$10,000-40,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Retail, Logistics, E-commerce',
  },
  {
    id: 113,
    title: 'AI-Powered Voice Synthesis & Cloning',
    description:
      'Advanced voice AI for realistic speech synthesis, voice cloning, and multilingual voice generation.',
    icon: Mic,
    category: 'Voice AI',
    price: 'Starting at $3,000/month',
    features: [
      'Realistic voice synthesis',
      'Voice cloning technology',
      'Multilingual voice generation',
      'Emotion & tone control',
      'Real-time voice conversion',
      'Voice authentication',
      'Custom voice training',
      'API integration',
    ],
    benefits: [
      'Create realistic voice content',
      'Enable multilingual communication',
      'Reduce voice production costs by 80%',
      'Personalize voice experiences',
    ],
    marketPrice: '$5,000-20,000/month',
    setupTime: '2-4 weeks',
    targetUsers:
      'Media companies, E-learning, Accessibility services, Entertainment',
  },
  {
    id: 114,
    title: 'AI-Powered Predictive Maintenance',
    description:
      'Intelligent maintenance system with failure prediction, condition monitoring, and automated scheduling.',
    icon: Settings,
    category: 'Industrial AI',
    price: 'Starting at $4,500/month',
    features: [
      'Failure prediction algorithms',
      'Condition monitoring',
      'Maintenance scheduling',
      'Performance optimization',
      'Cost optimization',
      'Asset lifecycle management',
      'Predictive analytics',
      'Integration with IoT sensors',
    ],
    benefits: [
      'Reduce unplanned downtime by 70%',
      'Lower maintenance costs by 40%',
      'Extend asset life by 30%',
      'Improve operational efficiency',
    ],
    marketPrice: '$7,500-30,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Manufacturing, Energy, Transportation, Facilities management',
  },
  {
    id: 115,
    title: 'AI-Powered Financial Risk Assessment',
    description:
      'Advanced AI for credit scoring, fraud detection, and comprehensive financial risk analysis.',
    icon: DollarSign,
    category: 'FinTech AI',
    price: 'Starting at $8,500/month',
    features: [
      'Credit scoring algorithms',
      'Fraud detection systems',
      'Risk modeling',
      'Market risk analysis',
      'Operational risk assessment',
      'Regulatory compliance',
      'Real-time monitoring',
      'Predictive analytics',
    ],
    benefits: [
      'Improve risk assessment accuracy by 60%',
      'Reduce fraud losses by 80%',
      'Faster credit decisions',
      'Enhanced regulatory compliance',
    ],
    marketPrice: '$15,000-60,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Banks, Credit unions, Insurance companies, Fintech firms',
  },
  {
    id: 116,
    title: 'AI-Powered Autonomous Vehicle Systems',
    description:
      'Advanced AI for autonomous vehicle navigation, safety systems, and fleet management.',
    icon: Car,
    category: 'Autonomous AI',
    price: 'Starting at $25,000/month',
    features: [
      'Autonomous navigation',
      'Object detection & avoidance',
      'Path planning algorithms',
      'Fleet management',
      'Safety monitoring',
      'Traffic optimization',
      'Predictive maintenance',
      'Real-time decision making',
    ],
    benefits: [
      'Improve safety by 90%',
      'Reduce transportation costs by 60%',
      'Enable 24/7 operations',
      'Optimize fleet efficiency',
    ],
    marketPrice: '$40,000-200,000/month',
    setupTime: '8-16 weeks',
    targetUsers:
      'Automotive companies, Logistics, Transportation, Fleet operators',
  },
  {
    id: 117,
    title: 'AI-Powered Energy Grid Optimization',
    description:
      'Intelligent energy management with grid optimization, renewable integration, and demand response.',
    icon: Zap,
    category: 'Energy AI',
    price: 'Starting at $12,000/month',
    features: [
      'Grid optimization algorithms',
      'Renewable energy integration',
      'Demand response management',
      'Energy storage optimization',
      'Load forecasting',
      'Price optimization',
      'Grid stability monitoring',
      'Carbon footprint tracking',
    ],
    benefits: [
      'Reduce energy costs by 25%',
      'Increase renewable energy usage by 40%',
      'Improve grid stability',
      'Enable sustainable energy transition',
    ],
    marketPrice: '$20,000-80,000/month',
    setupTime: '6-12 weeks',
    targetUsers:
      'Utility companies, Energy providers, Grid operators, Government',
  },
  {
    id: 118,
    title: 'AI-Powered Mental Health Support',
    description:
      'Intelligent mental health platform with mood tracking, therapy assistance, and crisis intervention.',
    icon: Heart,
    category: 'Healthcare AI',
    price: 'Starting at $3,500/month',
    features: [
      'Mood tracking & analysis',
      'Therapy session assistance',
      'Crisis detection & intervention',
      'Personalized recommendations',
      'Progress monitoring',
      'Medication adherence',
      'Support group matching',
      'Professional integration',
    ],
    benefits: [
      'Improve mental health outcomes by 50%',
      'Provide 24/7 support',
      'Reduce therapy costs by 40%',
      'Enable early intervention',
    ],
    marketPrice: '$6,000-25,000/month',
    setupTime: '4-8 weeks',
    targetUsers:
      'Healthcare providers, Mental health clinics, Insurance, Individuals',
  },
  {
    id: 119,
    title: 'AI-Powered Real Estate Intelligence',
    description:
      'Advanced AI for property valuation, market analysis, and real estate investment optimization.',
    icon: Home,
    category: 'Real Estate AI',
    price: 'Starting at $5,500/month',
    features: [
      'Property valuation algorithms',
      'Market trend analysis',
      'Investment opportunity identification',
      'Risk assessment',
      'Rental yield optimization',
      'Property management automation',
      'Market forecasting',
      'Portfolio optimization',
    ],
    benefits: [
      'Improve valuation accuracy by 45%',
      'Identify profitable opportunities 3x faster',
      'Reduce investment risks by 50%',
      'Optimize portfolio performance',
    ],
    marketPrice: '$9,000-35,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'Real estate agents, Investors, Property managers, Developers',
  },
  {
    id: 120,
    title: 'AI-Powered Gaming Intelligence',
    description:
      'Advanced AI for game development, player behavior analysis, and dynamic content generation.',
    icon: Gamepad2,
    category: 'Gaming AI',
    price: 'Starting at $7,000/month',
    features: [
      'Procedural content generation',
      'Player behavior analysis',
      'Dynamic difficulty adjustment',
      'NPC intelligence',
      'Game balancing algorithms',
      'Monetization optimization',
      'Player retention analysis',
      'Anti-cheat systems',
    ],
    benefits: [
      'Increase player engagement by 60%',
      'Reduce development time by 40%',
      'Improve monetization by 35%',
      'Create more immersive experiences',
    ],
    marketPrice: '$12,000-50,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Game developers, Publishers, Gaming platforms, Esports',
  },
];

const categories = [
  { name: 'All', count: aiServices.length },
  {
    name: 'Machine Learning',
    count: aiServices.filter(s => s.category === 'Machine Learning').length,
  },
  {
    name: 'Computer Vision',
    count: aiServices.filter(s => s.category === 'Computer Vision').length,
  },
  { name: 'NLP', count: aiServices.filter(s => s.category === 'NLP').length },
  {
    name: 'Analytics',
    count: aiServices.filter(s => s.category === 'Analytics').length,
  },
  {
    name: 'Conversational AI',
    count: aiServices.filter(s => s.category === 'Conversational AI').length,
  },
  {
    name: 'Content AI',
    count: aiServices.filter(s => s.category === 'Content AI').length,
  },
  {
    name: 'Process Automation',
    count: aiServices.filter(s => s.category === 'Process Automation').length,
  },
  {
    name: 'Security AI',
    count: aiServices.filter(s => s.category === 'Security AI').length,
  },
  {
    name: 'Supply Chain AI',
    count: aiServices.filter(s => s.category === 'Supply Chain AI').length,
  },
  {
    name: 'Healthcare AI',
    count: aiServices.filter(s => s.category === 'Healthcare AI').length,
  },
  {
    name: 'FinTech AI',
    count: aiServices.filter(s => s.category === 'FinTech AI').length,
  },
  {
    name: 'Voice AI',
    count: aiServices.filter(s => s.category === 'Voice AI').length,
  },
  {
    name: 'Quantum AI',
    count: aiServices.filter(s => s.category === 'Quantum AI').length,
  },
  {
    name: 'Environmental AI',
    count: aiServices.filter(s => s.category === 'Environmental AI').length,
  },
  {
    name: 'Space AI',
    count: aiServices.filter(s => s.category === 'Space AI').length,
  },
  {
    name: 'Legal AI',
    count: aiServices.filter(s => s.category === 'Legal AI').length,
  },
  {
    name: 'AgTech AI',
    count: aiServices.filter(s => s.category === 'AgTech AI').length,
  },
  {
    name: 'Smart City AI',
    count: aiServices.filter(s => s.category === 'Smart City AI').length,
  },
  {
    name: 'Industrial AI',
    count: aiServices.filter(s => s.category === 'Industrial AI').length,
  },
  {
    name: 'Autonomous AI',
    count: aiServices.filter(s => s.category === 'Autonomous AI').length,
  },
  {
    name: 'Energy AI',
    count: aiServices.filter(s => s.category === 'Energy AI').length,
  },
  {
    name: 'Real Estate AI',
    count: aiServices.filter(s => s.category === 'Real Estate AI').length,
  },
  {
    name: 'Gaming AI',
    count: aiServices.filter(s => s.category === 'Gaming AI').length,
  },
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory =
      selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta
          name='description'
          content='Comprehensive AI services including machine learning, computer vision, NLP, quantum AI, and advanced automation solutions.'
        />
        <meta
          name='keywords'
          content='AI services, machine learning, computer vision, NLP, quantum AI, automation, artificial intelligence'
        />
      </Head>

      <div className='min-h-screen bg-gray-50'>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20'>
          <div className='container mx-auto px-4'>
            <div className='text-center'>
              <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                AI Services & Solutions
              </h1>
              <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
                Transform your business with cutting-edge AI technologies. From
                machine learning to quantum AI, we provide comprehensive
                artificial intelligence solutions for every industry.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link
                  href='/contact'
                  className='px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center'
                >
                  Get Started
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Link>
                <a
                  href='tel:+13024640950'
                  className='px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold'
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className='py-12 bg-white'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
              <div className='flex flex-wrap gap-2'>
                {categories.map(category => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
              <div className='w-full md:w-64'>
                <input
                  type='text'
                  placeholder='Search AI services...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className='py-16'>
          <div className='container mx-auto px-4'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredServices.map(service => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6'
                >
                  <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4'>
                    <service.icon className='w-8 h-8 text-white' />
                  </div>
                  <div className='text-sm text-blue-600 font-semibold mb-2'>
                    {service.category}
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 mb-4'>{service.description}</p>
                  <div className='text-lg font-bold text-green-600 mb-4'>
                    {service.price}
                  </div>
                  <div className='text-sm text-gray-500 mb-4'>
                    Market Price: {service.marketPrice}
                  </div>
                  <Link
                    href='/contact'
                    className='inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold'
                  >
                    Learn More
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className='py-16 bg-blue-600 text-white'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-6'>
              Ready to Implement AI Solutions?
            </h2>
            <p className='text-xl mb-8 max-w-2xl mx-auto'>
              Contact us today to discuss how our AI services can transform your
              business.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold'
              >
                Get Started
              </Link>
              <a
                href='tel:+13024640950'
                className='px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold'
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className='mt-8 text-blue-200'>
              <p>
                📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008,
                Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
