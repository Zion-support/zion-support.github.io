import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
  Package,
  Truck,
  Warehouse,
  Route,
  BarChart,
  AlertTriangle,
  RefreshCw,
  BookOpen,
  Cpu,
  Lock,
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Rocket,
<<<<<<< HEAD
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
=======
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
<<<<<<< HEAD
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
=======
  Globe,
  Users,
  Target,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
<<<<<<< HEAD
  TrendingUp,
  Award,
  Handshake,
  Lightbulb,
  Truck,
  Building,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  ArrowRight,
  PanelLeft,
=======
  Bot,
  Workflow,
  Eye,
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
  Sparkles,
  Phone,
  Mail,
  MapPin,
<<<<<<< HEAD
  Satellite,
  FileText
} from 'lucide-react';

const InnovativeServicesShowcase2028 = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, color: 'from-blue-500 to-purple-500' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'cloud-infra', name: 'Cloud & Infrastructure', icon: Cloud, color: 'from-cyan-500 to-blue-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Code, color: 'from-green-500 to-emerald-500' },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: Rocket, color: 'from-yellow-500 to-orange-500' },
    { id: 'it-services', name: 'IT Services', icon: Server, color: 'from-gray-500 to-slate-500' }
  ];

  const services = [
    // AI & Machine Learning Services
    {
      id: 'ai-autonomous-business-manager',
      title: 'AI Autonomous Business Manager',
      description: 'Fully autonomous business operations management with AI-driven decision making, process optimization, and strategic planning.',
      category: 'ai-ml',
      price: '$2,500 - $15,000/month',
      features: ['24/7 autonomous operations', 'AI-powered decision making', 'Process optimization', 'Strategic planning', 'Performance analytics'],
      benefits: ['Reduce operational costs by 40%', 'Improve efficiency by 60%', '24/7 business monitoring', 'Data-driven insights'],
      useCases: ['Small to medium businesses', 'Startups', 'Growing companies', 'Remote teams'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/ai-autonomous-business-manager'
      }
    },
    {
      id: 'ai-quantum-hybrid-platform',
      title: 'Quantum AI Hybrid Platform',
      description: 'Revolutionary platform combining quantum computing with artificial intelligence for unprecedented computational power.',
      category: 'quantum',
      price: '$5,000 - $25,000/month',
      features: ['Quantum-AI hybrid algorithms', 'Superior computational power', 'Advanced optimization', 'Real-time processing', 'Scalable architecture'],
      benefits: ['100x faster computation', 'Solve complex problems', 'Future-proof technology', 'Competitive advantage'],
      useCases: ['Research institutions', 'Financial services', 'Pharmaceutical companies', 'Government agencies'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/quantum-ai-hybrid-platform'
      }
    },
    {
      id: 'ai-smart-city-infrastructure',
      title: 'AI Smart City Infrastructure Management',
      description: 'Intelligent urban infrastructure management using AI, IoT, and data analytics for sustainable city development.',
      category: 'emerging-tech',
      price: '$10,000 - $50,000/month',
      features: ['Smart traffic management', 'Energy optimization', 'Waste management', 'Public safety', 'Environmental monitoring'],
      benefits: ['Reduce energy consumption by 30%', 'Improve traffic flow by 25%', 'Enhanced public safety', 'Sustainable development'],
      useCases: ['Municipalities', 'City planners', 'Urban developers', 'Government agencies'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/ai-smart-city-infrastructure-management'
      }
    },
    {
      id: 'ai-autonomous-vehicle-platform',
      title: 'AI Autonomous Vehicle Management Platform',
      description: 'Comprehensive platform for managing autonomous vehicle fleets with advanced safety, routing, and monitoring capabilities.',
      category: 'emerging-tech',
      price: '$8,000 - $35,000/month',
      features: ['Fleet management', 'Safety monitoring', 'Route optimization', 'Predictive maintenance', 'Real-time tracking'],
      benefits: ['Reduce accidents by 90%', 'Optimize fuel consumption', '24/7 fleet monitoring', 'Regulatory compliance'],
      useCases: ['Transportation companies', 'Logistics providers', 'Ride-sharing services', 'Delivery companies'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/ai-autonomous-vehicle-management-platform'
      }
    },
    {
      id: 'ai-quantum-financial-trading',
      title: 'AI Quantum Financial Trading Platform',
      description: 'Advanced financial trading platform leveraging quantum computing and AI for superior market analysis and trading strategies.',
      category: 'quantum',
      price: '$15,000 - $75,000/month',
      features: ['Quantum market analysis', 'AI trading algorithms', 'Risk management', 'Portfolio optimization', 'Real-time data processing'],
      benefits: ['Superior market insights', 'Faster trade execution', 'Risk reduction', 'Portfolio optimization'],
      useCases: ['Investment banks', 'Hedge funds', 'Trading firms', 'Financial institutions'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/ai-quantum-financial-trading-platform'
      }
    },
    // Cloud & Infrastructure Services
    {
      id: 'cloud-devops-automation',
      title: 'Cloud DevOps Automation Platform',
      description: 'End-to-end DevOps automation platform for cloud infrastructure management, deployment, and monitoring.',
      category: 'cloud-infra',
      price: '$3,000 - $20,000/month',
      features: ['CI/CD automation', 'Infrastructure as code', 'Monitoring & alerting', 'Auto-scaling', 'Security compliance'],
      benefits: ['Reduce deployment time by 80%', 'Improve reliability', 'Cost optimization', 'Security enhancement'],
      useCases: ['Software companies', 'IT departments', 'Startups', 'Enterprises'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/cloud-devops'
      }
    },
    {
      id: 'finops-optimizer',
      title: 'Cloud FinOps Optimizer',
      description: 'Intelligent cloud cost optimization platform using AI to reduce cloud spending and improve resource utilization.',
      category: 'cloud-infra',
      price: '$2,000 - $15,000/month',
      features: ['Cost analysis', 'Resource optimization', 'Budget management', 'Usage monitoring', 'Automated recommendations'],
      benefits: ['Reduce cloud costs by 30-50%', 'Improve resource utilization', 'Budget control', 'ROI optimization'],
      useCases: ['Enterprises', 'Startups', 'IT departments', 'Cloud-heavy companies'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/cloud-finops-optimizer'
      }
    },
    // Cybersecurity Services
    {
      id: 'ai-cybersecurity-platform',
      title: 'AI Cybersecurity Threat Intelligence Platform',
      description: 'Advanced cybersecurity platform using AI and machine learning for real-time threat detection and response.',
      category: 'cybersecurity',
      price: '$5,000 - $30,000/month',
      features: ['Threat detection', 'Behavioral analysis', 'Incident response', 'Vulnerability assessment', 'Compliance monitoring'],
      benefits: ['Detect threats 10x faster', 'Reduce false positives', '24/7 protection', 'Regulatory compliance'],
      useCases: ['Financial institutions', 'Healthcare organizations', 'Government agencies', 'Enterprises'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/ai-cybersecurity-threat-intelligence'
      }
    },
    {
      id: 'zero-trust-network',
      title: 'Zero Trust Network Access Platform',
      description: 'Modern zero-trust security architecture providing secure access to applications and resources.',
      category: 'cybersecurity',
      price: '$3,000 - $25,000/month',
      features: ['Identity verification', 'Access control', 'Network segmentation', 'Threat prevention', 'Audit logging'],
      benefits: ['Enhanced security posture', 'Simplified access management', 'Compliance readiness', 'Risk reduction'],
      useCases: ['Remote workforces', 'Enterprises', 'Healthcare', 'Financial services'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/zero-trust-network-access'
      }
    },
    // Micro SaaS Solutions
    {
      id: 'micro-crm',
      title: 'Micro CRM Platform',
      description: 'Lightweight, affordable customer relationship management solution designed for small businesses and startups.',
      category: 'micro-saas',
      price: '$99 - $499/month',
      features: ['Contact management', 'Sales tracking', 'Email integration', 'Reporting', 'Mobile app'],
      benefits: ['Affordable pricing', 'Easy to use', 'Quick setup', 'Scalable growth'],
      useCases: ['Small businesses', 'Startups', 'Freelancers', 'Sales teams'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/micro-crm'
      }
    },
    {
      id: 'helpdesk-platform',
      title: 'Intelligent Helpdesk Platform',
      description: 'AI-powered customer support platform with automated responses, ticket management, and knowledge base.',
      category: 'micro-saas',
      price: '$149 - $999/month',
      features: ['AI chatbot', 'Ticket management', 'Knowledge base', 'Analytics', 'Multi-channel support'],
      benefits: ['Reduce support costs', 'Improve customer satisfaction', '24/7 availability', 'Quick resolution'],
      useCases: ['E-commerce', 'SaaS companies', 'Service businesses', 'Support teams'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/helpdesk'
      }
    },
    {
      id: 'website-analytics',
      title: 'Advanced Website Analytics Platform',
      description: 'Comprehensive website analytics with AI-powered insights, conversion tracking, and performance optimization.',
      category: 'micro-saas',
      price: '$79 - $399/month',
      features: ['Visitor tracking', 'Conversion analytics', 'Performance monitoring', 'AI insights', 'A/B testing'],
      benefits: ['Data-driven decisions', 'Improve conversions', 'Performance optimization', 'User experience enhancement'],
      useCases: ['E-commerce', 'Marketing agencies', 'Business websites', 'Content creators'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/website-analytics'
      }
    },
    // IT Services
    {
      id: 'it-infrastructure',
      title: 'Enterprise IT Infrastructure Solutions',
      description: 'Comprehensive IT infrastructure services including network design, security, and cloud migration.',
      category: 'it-services',
      price: '$10,000 - $100,000+',
      features: ['Network design', 'Security implementation', 'Cloud migration', '24/7 support', 'Compliance'],
      benefits: ['Reliable infrastructure', 'Enhanced security', 'Scalable solutions', 'Expert support'],
      useCases: ['Enterprises', 'Healthcare', 'Financial services', 'Government'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/it-infrastructure'
      }
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation services to modernize business processes and technology infrastructure.',
      category: 'it-services',
      price: '$25,000 - $200,000+',
      features: ['Strategy development', 'Process optimization', 'Technology implementation', 'Change management', 'Training'],
      benefits: ['Improved efficiency', 'Cost reduction', 'Competitive advantage', 'Future readiness'],
      useCases: ['Traditional businesses', 'Enterprises', 'Manufacturing', 'Retail'],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/services/digital-transformation'
      }
    }
  ];

import { Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Leaf, 
  Rocket,
  Car,
  Satellite,
  Dna,
  Wind,
  Cloud,
  Network,
  DollarSign,
  Clock,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Atom,
  Satellite,
  Leaf,
  Gamepad2,
  Coins,
  Truck,
  Building,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  Phone,
  Mail,
  ExternalLink
             } from 'lucide-react.ts';
import { SEO              } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2028              } from '../data/innovativeMicroSaasServices2028';
import { EMERGING_TECH_INNOVATIVE_SERVICES_2028              } from '../data/emergingTechInnovativeServices2028';

export default function InnovativeServicesShowcase2028(...args: any[]): any {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedInnovationLevel, setSelectedInnovationLevel] = useState('All');

  // Enhanced service categories with real market prices and features
  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'AI & Machine Learning Services',
      icon: Brain,
      color: 'from-blue-600 to-cyan-600',
      description: 'Cutting-edge artificial intelligence solutions for business transformation',
      services: [
        {
          name: 'AI-Powered Business Intelligence Platform',
          description: 'Advanced analytics with machine learning insights and predictive modeling',
          price: '$2,500/month',
          marketPrice: '$3,000-5,000/month',
          features: ['Real-time Data Processing', 'Predictive Analytics', 'Custom Dashboards', 'API Integration', 'Multi-source Data Connectors'],
          benefits: ['40% faster decision making', '25% cost reduction', 'Real-time insights', 'Scalable architecture'],
          icon: BarChart3,
          category: 'ai-services',
          badge: 'Popular'
        },
        {
          name: 'AI Customer Experience Platform',
          description: 'Intelligent customer engagement with personalized recommendations and sentiment analysis',
          price: '$1,800/month',
          marketPrice: '$2,200-4,000/month',
          features: ['Customer Journey Mapping', 'Sentiment Analysis', 'Omnichannel Support', 'Personalization Engine', 'A/B Testing'],
          benefits: ['35% increase in customer satisfaction', '28% higher conversion rates', '24/7 customer support', 'Reduced support costs'],
          icon: Users,
          category: 'ai-services',
          badge: 'New'
        },
        {
          name: 'AI Cybersecurity Threat Detection',
          description: 'Advanced threat detection using machine learning and behavioral analysis',
          price: '$3,200/month',
          marketPrice: '$4,000-7,000/month',
          features: ['Real-time Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Compliance Reporting', '24/7 Monitoring'],
          benefits: ['99.9% threat detection rate', '60% faster incident response', 'Reduced false positives', 'Compliance automation'],
          icon: Shield,
          category: 'ai-services',
          badge: 'Featured'
        }
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'from-purple-600 to-pink-600',
      description: 'Scalable software-as-a-service solutions for specific business needs',
      services: [
        {
          name: 'AI-Powered Project Management Suite',
          description: 'Intelligent project planning, resource allocation, and progress tracking',
          price: '$150/month',
          marketPrice: '$200-400/month',
          features: ['AI Resource Optimization', 'Risk Prediction', 'Automated Scheduling', 'Team Collaboration', 'Progress Analytics'],
          benefits: ['30% faster project completion', '20% resource optimization', 'Improved team productivity', 'Real-time insights'],
          icon: Workflow,
          category: 'micro-saas',
          badge: 'Best Value'
        },
        {
          name: 'Smart Inventory Management System',
          description: 'AI-driven inventory optimization with demand forecasting and automated reordering',
          price: '$200/month',
          marketPrice: '$250-500/month',
          features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Support', 'Supplier Management', 'Cost Analytics'],
          benefits: ['25% inventory cost reduction', '99% stock availability', 'Automated procurement', 'Real-time tracking'],
          icon: Truck,
          category: 'micro-saas',
          badge: 'Popular'
        },
        {
          name: 'AI Content Creation Platform',
          description: 'Automated content generation with SEO optimization and brand consistency',
          price: '$120/month',
          marketPrice: '$150-300/month',
          features: ['Multi-format Content', 'SEO Optimization', 'Brand Consistency', 'Plagiarism Detection', 'Performance Analytics'],
          benefits: ['10x faster content creation', 'Improved SEO rankings', 'Consistent brand voice', 'Cost-effective marketing'],
          icon: Brain, // Changed from PenTool to Brain for consistency with AI services
          category: 'micro-saas',
          badge: 'New'
        }
      ]
    },
    {
      id: 'it-services',
      name: 'IT Infrastructure & Services',
      icon: Server,
      color: 'from-green-600 to-emerald-600',
      description: 'Comprehensive IT solutions for modern business infrastructure',
      services: [
        {
          name: 'Cloud Migration & Optimization',
          description: 'Seamless cloud migration with cost optimization and performance tuning',
          price: '$5,000/project',
          marketPrice: '$8,000-15,000/project',
          features: ['Multi-cloud Strategy', 'Cost Optimization', 'Performance Tuning', 'Security Implementation', '24/7 Support'],
          benefits: ['40% cost reduction', '99.9% uptime', 'Scalable infrastructure', 'Enhanced security'],
          icon: Cloud,
          category: 'it-services',
          badge: 'Featured'
        },
        {
          name: 'DevOps Automation Platform',
          description: 'End-to-end DevOps automation with CI/CD pipelines and infrastructure as code',
          price: '$2,800/month',
          marketPrice: '$3,500-6,000/month',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Monitoring & Alerting', 'Security Scanning'],
          benefits: ['80% faster deployments', 'Reduced human errors', 'Improved code quality', 'Faster time to market'],
          icon: Code,
          category: 'it-services',
          badge: 'Popular'
        },
        {
          name: 'Cybersecurity Compliance Suite',
          description: 'Comprehensive security compliance for GDPR, HIPAA, SOC2, and industry standards',
          price: '$4,500/month',
          marketPrice: '$6,000-12,000/month',
          features: ['Compliance Automation', 'Risk Assessment', 'Audit Preparation', 'Security Training', 'Incident Response'],
          benefits: ['100% compliance assurance', 'Reduced audit time', 'Risk mitigation', 'Legal protection'],
          icon: Lock,
          category: 'it-services',
          badge: 'Essential'
        }
      ]
    },
    {
      id: 'quantum-tech',
      name: 'Quantum & Emerging Technologies',
      icon: Atom,
      color: 'from-indigo-600 to-purple-600',
      description: 'Next-generation technologies for future-ready businesses',
      services: [
        {
          name: 'Quantum Computing Solutions',
          description: 'Quantum algorithms for optimization, cryptography, and complex problem solving',
          price: '$15,000/month',
          marketPrice: '$20,000-50,000/month',
          features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Research Support'],
          benefits: ['Exponential speed improvements', 'Unbreakable encryption', 'Complex problem solving', 'Competitive advantage'],
          icon: Atom,
          category: 'quantum-tech',
          badge: 'Future Tech'
        },
        {
          name: 'Blockchain Enterprise Platform',
          description: 'Secure blockchain solutions for supply chain, finance, and digital identity',
          price: '$3,500/month',
          marketPrice: '$5,000-15,000/month',
          features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'Tokenization', 'Interoperability'],
          benefits: ['Enhanced transparency', 'Reduced fraud', 'Automated processes', 'Cost savings'],
          icon: LinkIcon,
          category: 'quantum-tech',
          badge: 'Innovative'
        },
        {
          name: 'IoT Edge Computing Platform',
          description: 'Real-time data processing at the edge for industrial IoT applications',
          price: '$2,200/month',
          marketPrice: '$3,000-8,000/month',
          features: ['Edge Analytics', 'Real-time Processing', 'Device Management', 'Data Streaming', 'Security'],
          benefits: ['Ultra-low latency', 'Reduced bandwidth costs', 'Real-time insights', 'Offline operation'],
          icon: Cpu,
          category: 'quantum-tech',
          badge: 'Industrial'
        }
      ]
    },
    {
      id: 'green-tech',
      name: 'Green Technology Solutions',
      icon: Leaf,
      color: 'from-green-500 to-teal-600',
      description: 'Sustainable technology solutions for environmental responsibility',
      services: [
        {
          name: 'Carbon Footprint Analytics Platform',
          description: 'AI-powered carbon tracking and sustainability reporting for businesses',
          price: '$800/month',
          marketPrice: '$1,000-2,500/month',
          features: ['Carbon Tracking', 'Sustainability Reporting', 'Goal Setting', 'Benchmarking', 'Compliance'],
          benefits: ['Reduced carbon footprint', 'Cost savings', 'Regulatory compliance', 'Brand enhancement'],
          icon: Leaf,
          category: 'green-tech',
          badge: 'Eco-Friendly'
        },
        {
          name: 'Smart Energy Management System',
          description: 'Intelligent energy optimization using IoT sensors and AI analytics',
          price: '$1,500/month',
          marketPrice: '$2,000-4,000/month',
          features: ['Energy Monitoring', 'AI Optimization', 'Predictive Maintenance', 'Cost Analysis', 'Integration'],
          benefits: ['30% energy cost reduction', 'Predictive maintenance', 'Real-time monitoring', 'ROI optimization'],
          icon: Zap,
          category: 'green-tech',
          badge: 'Cost-Effective'
        }
      ]
    },
    {
      id: 'space-tech',
      name: 'Space Technology Solutions',
      icon: Satellite,
      color: 'from-blue-500 to-indigo-600',
      description: 'Satellite and space-based technology for global connectivity and insights',
      services: [
        {
          name: 'Satellite Data Analytics Platform',
          description: 'Earth observation data analysis for agriculture, climate, and urban planning',
          price: '$2,800/month',
          marketPrice: '$4,000-10,000/month',
          features: ['Satellite Imagery', 'AI Analysis', 'Real-time Monitoring', 'Custom Algorithms', 'API Access'],
          benefits: ['Global coverage', 'Real-time insights', 'Cost-effective monitoring', 'Scalable solutions'],
          icon: Satellite,
          category: 'space-tech',
          badge: 'Global'
        }
      ]
=======
  Clock,
  DollarSign,
  Car,
  Building
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const InnovativeServicesShowcase2028: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket },
    { id: 'it', name: 'IT Services', icon: Server },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'emerging', name: 'Emerging Tech', icon: TrendingUp }
  ];

  const innovativeServices = [
    // AI & Machine Learning Services
    {
      id: 'ai-autonomous-business-manager',
      category: 'ai',
      title: 'AI Autonomous Business Manager',
      description: 'Fully autonomous AI system that manages your entire business operations, from strategy to execution.',
      features: [
        '24/7 Business Monitoring & Optimization',
        'Automated Decision Making',
        'Real-time Performance Analytics',
        'Predictive Market Analysis',
        'Automated Resource Allocation',
        'Intelligent Risk Management'
      ],
      pricing: {
        starter: '$2,500/month',
        professional: '$5,000/month',
        enterprise: '$12,000/month'
      },
      marketPrice: '$8,000 - $25,000/month',
      benefits: [
        'Reduce operational costs by 40-60%',
        'Improve decision-making speed by 80%',
        'Increase business efficiency by 50%',
        '24/7 autonomous operation',
        'Real-time market adaptation'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      featured: true,
      link: '/services/ai-autonomous-business-manager'
    },
    {
      id: 'ai-quantum-hybrid-platform',
      category: 'quantum',
      title: 'AI-Quantum Hybrid Computing Platform',
      description: 'Revolutionary platform combining AI and quantum computing for solving previously impossible problems.',
      features: [
        '1000+ Qubit Quantum Processing',
        'AI-Quantum Algorithm Optimization',
        'Real-time Problem Solving',
        'Quantum-Safe Cryptography',
        'Hybrid Neural Networks',
        'Quantum Machine Learning'
      ],
      pricing: {
        starter: '$8,500/month',
        professional: '$18,000/month',
        enterprise: '$45,000/month'
      },
      marketPrice: '$25,000 - $100,000/month',
      benefits: [
        'Solve complex problems 1000x faster',
        'Unbreakable quantum encryption',
        'Revolutionary AI capabilities',
        'Future-proof technology',
        'Competitive advantage'
      ],
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      link: '/services/quantum-ai-hybrid-platform'
    },
    {
      id: 'ai-autonomous-vehicle-management',
      category: 'ai',
      title: 'AI Autonomous Vehicle Management Platform',
      description: 'Complete platform for managing autonomous vehicle fleets with AI-powered optimization and safety.',
      features: [
        'Fleet Management & Optimization',
        'Real-time Safety Monitoring',
        'Predictive Maintenance',
        'Route Optimization',
        'Traffic Pattern Analysis',
        'Emergency Response Systems'
      ],
      pricing: {
        starter: '$3,500/month',
        professional: '$7,500/month',
        enterprise: '$18,000/month'
      },
      marketPrice: '$10,000 - $30,000/month',
      benefits: [
        'Reduce fleet costs by 35%',
        'Improve safety by 90%',
        'Optimize routes in real-time',
        'Predictive maintenance alerts',
        'Compliance automation'
      ],
      icon: Car,
      color: 'from-green-500 to-emerald-500',
      featured: true,
      link: '/services/ai-autonomous-vehicle-management-platform'
    },
    {
      id: 'ai-smart-city-infrastructure',
      category: 'ai',
      title: 'AI Smart City Infrastructure Management',
      description: 'Intelligent platform for managing smart city infrastructure with real-time monitoring and optimization.',
      features: [
        'Infrastructure Monitoring',
        'Energy Optimization',
        'Traffic Management',
        'Waste Management',
        'Public Safety Systems',
        'Environmental Monitoring'
      ],
      pricing: {
        starter: '$5,000/month',
        professional: '$12,000/month',
        enterprise: '$30,000/month'
      },
      marketPrice: '$15,000 - $50,000/month',
      benefits: [
        'Reduce city operational costs by 25%',
        'Improve citizen satisfaction by 40%',
        'Optimize resource usage',
        'Real-time problem detection',
        'Data-driven decision making'
      ],
      icon: Building,
      color: 'from-indigo-500 to-purple-500',
      featured: true,
      link: '/services/ai-smart-city-infrastructure-management'
    },
    // Micro SAAS Services
    {
      id: 'ai-powered-seo-platform',
      category: 'micro-saas',
      title: 'AI-Powered SEO Platform',
      description: 'Complete SEO solution powered by AI for automatic optimization and ranking improvement.',
      features: [
        'AI Content Optimization',
        'Keyword Research & Analysis',
        'Competitor Monitoring',
        'Performance Tracking',
        'Automated Reporting',
        'Technical SEO Audits'
      ],
      pricing: {
        starter: '$99/month',
        professional: '$299/month',
        enterprise: '$799/month'
      },
      marketPrice: '$200 - $1,000/month',
      benefits: [
        'Improve search rankings by 40%',
        'Save 20+ hours per week',
        'Automated optimization',
        'Real-time performance tracking',
        'Competitive advantage'
      ],
      icon: Search,
      color: 'from-orange-500 to-red-500',
      featured: false,
      link: '/services/ai-seo'
    },
    {
      id: 'ai-customer-support-automation',
      category: 'micro-saas',
      title: 'AI Customer Support Automation',
      description: 'Intelligent customer support system that handles inquiries automatically with human-like responses.',
      features: [
        '24/7 Customer Support',
        'Multi-language Support',
        'Ticket Management',
        'Knowledge Base Integration',
        'Analytics & Reporting',
        'Human Handoff System'
      ],
      pricing: {
        starter: '$149/month',
        professional: '$399/month',
        enterprise: '$999/month'
      },
      marketPrice: '$300 - $1,500/month',
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time by 90%',
        '24/7 availability',
        'Scalable support',
        'Customer satisfaction improvement'
      ],
      icon: MessageCircle,
      color: 'from-blue-500 to-indigo-500',
      featured: false,
      link: '/services/ai-customer-support-automation'
    },
    {
      id: 'ai-project-management',
      category: 'micro-saas',
      title: 'AI Project Management Platform',
      description: 'Intelligent project management with AI-powered planning, tracking, and optimization.',
      features: [
        'AI Project Planning',
        'Resource Optimization',
        'Risk Assessment',
        'Progress Tracking',
        'Team Collaboration',
        'Automated Reporting'
      ],
      pricing: {
        starter: '$79/month',
        professional: '$199/month',
        enterprise: '$499/month'
      },
      marketPrice: '$150 - $600/month',
      benefits: [
        'Improve project success rate by 30%',
        'Reduce planning time by 50%',
        'Better resource utilization',
        'Risk mitigation',
        'Real-time insights'
      ],
      icon: Workflow,
      color: 'from-green-500 to-teal-500',
      featured: false,
      link: '/services/ai-project-management'
    },
    // IT Services
    {
      id: 'cloud-finops-optimizer',
      category: 'it',
      title: 'Cloud FinOps Optimization Platform',
      description: 'Complete cloud cost optimization and financial operations management platform.',
      features: [
        'Cost Monitoring & Analysis',
        'Resource Optimization',
        'Budget Management',
        'Cost Allocation',
        'Automated Scaling',
        'ROI Tracking'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$499/month',
        enterprise: '$1,299/month'
      },
      marketPrice: '$400 - $2,000/month',
      benefits: [
        'Reduce cloud costs by 30-50%',
        'Improve resource utilization',
        'Better budget control',
        'Automated optimization',
        'ROI maximization'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      featured: false,
      link: '/services/cloud-finops-optimizer'
    },
    {
      id: 'zero-trust-network-access',
      category: 'security',
      title: 'Zero Trust Network Access Platform',
      description: 'Advanced zero trust security platform for secure remote access and network protection.',
      features: [
        'Identity Verification',
        'Access Control',
        'Network Segmentation',
        'Threat Detection',
        'Compliance Management',
        'Audit Logging'
      ],
      pricing: {
        starter: '$299/month',
        professional: '$699/month',
        enterprise: '$1,799/month'
      },
      marketPrice: '$600 - $3,000/month',
      benefits: [
        'Eliminate network vulnerabilities',
        'Comply with security standards',
        'Secure remote access',
        'Real-time threat protection',
        'Comprehensive audit trails'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: false,
      link: '/services/zero-trust-network-access'
    },
    // Emerging Technology Services
    {
      id: 'space-tech-platform',
      category: 'emerging',
      title: 'Space Technology Platform',
      description: 'Cutting-edge platform for space technology applications and satellite management.',
      features: [
        'Satellite Management',
        'Space Data Analytics',
        'Orbital Calculations',
        'Launch Planning',
        'Mission Control',
        'Space Weather Monitoring'
      ],
      pricing: {
        starter: '$5,000/month',
        professional: '$15,000/month',
        enterprise: '$50,000/month'
      },
      marketPrice: '$20,000 - $100,000/month',
      benefits: [
        'Access to space technology',
        'Satellite data insights',
        'Launch optimization',
        'Mission success improvement',
        'Innovation leadership'
      ],
      icon: Satellite,
      color: 'from-purple-500 to-indigo-500',
      featured: false,
      link: '/services/space-tech'
    },
    {
      id: 'sustainable-technology-platform',
      category: 'emerging',
      title: 'Sustainable Technology Platform',
      description: 'Platform for implementing and managing sustainable technology solutions.',
      features: [
        'Carbon Footprint Tracking',
        'Energy Optimization',
        'Waste Management',
        'Sustainability Reporting',
        'Green Technology Integration',
        'Compliance Management'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$499/month',
        enterprise: '$1,299/month'
      },
      marketPrice: '$400 - $2,000/month',
      benefits: [
        'Reduce environmental impact',
        'Meet sustainability goals',
        'Cost savings through efficiency',
        'Regulatory compliance',
        'Brand enhancement'
      ],
      icon: Leaf,
      color: 'from-green-500 to-emerald-500',
      featured: false,
      link: '/services/sustainable-technology'
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
    }
  ];

  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];
  const innovationLevels = ['All', ...Array.from(new Set(allServices.map(service => service.innovationLevel)))];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesInnovationLevel = selectedInnovationLevel === 'All' || service.innovationLevel === selectedInnovationLevel;
    
    return matchesSearch && matchesCategory && matchesInnovationLevel;
  });

  const getCategoryIcon = (category: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (category) {
      case 'Quantum Computing & AI':
        return <Brain className="w-6 h-6" />;
      case 'Manufacturing & AI':
        return <Zap className="w-6 h-6" />;
      case 'Healthcare & AI':
        return <Shield className="w-6 h-6" />;
      case 'Financial Services & AI':
        return <DollarSign className="w-6 h-6" />;
      case 'Smart Cities & AI':
        return <Globe className="w-6 h-6" />;
      case 'Agriculture & AI':
        return <Leaf className="w-6 h-6" />;
      case 'Legal Services & AI':
        return <Shield className="w-6 h-6" />;
      case 'Education & AI':
        return <Brain className="w-6 h-6" />;
      case 'Real Estate & AI':
        return <Globe className="w-6 h-6" />;
      case 'Blockchain & Supply Chain':
        return <Network className="w-6 h-6" />;
      case 'Autonomous Vehicles & AI':
        return <Car className="w-6 h-6" />;
      case 'Space Technology & AI':
        return <Satellite className="w-6 h-6" />;
      case 'Biotechnology & AI':
        return <Dna className="w-6 h-6" />;
      case 'Renewable Energy & AI':
        return <Wind className="w-6 h-6" />;
      case 'Climate Technology & AI':
        return <Cloud className="w-6 h-6" />;
      case 'Quantum Internet & AI':
        return <Network className="w-6 h-6" />;
      default:
        return <Rocket className="w-6 h-6" />;
    }
  };

  const getInnovationLevelColor = (level: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {
    switch (level) {
      case 'Revolutionary':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'Advanced':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'Innovative':
        return 'bg-gradient-to-r from-green-600 to-emerald-600';
      default:
        return 'bg-gradient-to-r from-gray-600 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="2028 Innovative Services Showcase - Zion Tech Group"
        description="Explore our cutting-edge AI services, micro SAAS solutions, IT infrastructure, and emerging technologies. Real market prices and proven ROI."
        keywords="AI services, micro SAAS, IT services, quantum computing, blockchain, IoT, green technology, space technology, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/innovative-services-showcase-2028"
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              2028 Innovative Services
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Discover our comprehensive portfolio of AI services, micro SAAS solutions, IT infrastructure, 
              and cutting-edge technologies. Real market prices, proven ROI, and expert implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
=======
      <SEO 
        title="2028 Innovative Services Showcase - Zion Tech Group"
        description="Discover Zion Tech Group's cutting-edge 2028 services: AI, Quantum Computing, Micro SAAS, and emerging technologies. Transform your business with the future of technology."
        keywords="AI services, quantum computing, micro SAAS, IT services, cybersecurity, 2028 technology, Zion Tech Group"
        canonical="https://ziontechgroup.com/innovative-services-showcase-2028"
      />

      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
<<<<<<< HEAD
            Innovative Services Showcase 2028
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Discover cutting-edge AI services, quantum computing solutions, and innovative micro SaaS platforms 
            designed to transform your business and drive success in the digital age.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
=======
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              2028 Innovative Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12">
              Pioneering the future with cutting-edge AI, Quantum Computing, Micro SAAS, and emerging technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
            </div>
          </motion.div>

<<<<<<< HEAD
          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
=======
      {/* Category Filter */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
<<<<<<< HEAD
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-md text-gray-300 hover:bg-white/20 border border-white/20'
=======
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
              >
                {categories.map(category              => (
                  <option key={category} value={category} className="bg-slate-800 text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Innovation Level Filter */}
            <div className="relative">
              <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedInnovationLevel}
                onChange={(e) => setSelectedInnovationLevel(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
              >
                {innovationLevels.map(level              => (
                  <option key={level} value={level} className="bg-slate-800 text-white">
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our most innovative and powerful AI-powered micro SAAS solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                    {categories.find(c => c.id === service.category)?.name}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-400">{service.price}</span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Ideal For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 3).map((useCase, idx) => (
                      <span key={idx} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                        {useCase}
                      </span>
                    )}
=======
                className={`group relative bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 ${
                  service.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Featured
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

<<<<<<< HEAD
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm">Our Price:</span>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Market Price:</span>
                      <span className="text-slate-300 text-sm line-through">{service.marketPrice}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
=======
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Pricing:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Starter:</span>
                      <span className="text-cyan-400 font-semibold">{service.pricing.starter}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Professional:</span>
                      <span className="text-cyan-400 font-semibold">{service.pricing.professional}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Enterprise:</span>
                      <span className="text-cyan-400 font-semibold">{service.pricing.enterprise}</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-slate-700 rounded text-xs text-slate-300">
                    Market Average: {service.marketPrice}
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
                  </div>
                </div>

<<<<<<< HEAD
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <span>Contact Information:</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="text-gray-300">{service.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="text-gray-300">{service.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 mr-2 text-blue-400" />
                      <a 
                        href={service.contactInfo.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to={`/services/${service.id}`}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
=======
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-slate-300 text-sm">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    Contact
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found</div>
              <p className="text-gray-500">Try adjusting your search or category filters</p>
            </motion.div>
          )}
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Contact our team of experts to discuss how our innovative services can drive your success
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
=======
      {/* Contact CTA */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Let's discuss how our innovative 2028 services can drive your business forward and give you a competitive edge in the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-slate-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
>>>>>>> cursor/website-audit-content-update-and-deployment-8db3
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2028;
