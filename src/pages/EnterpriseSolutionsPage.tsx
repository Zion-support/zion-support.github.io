<<<<<<< HEAD
import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Building, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon } from 'lucide-react';

const EnterpriseSolutionsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedSolutionType, setSelectedSolutionType] = useState<string>('all');

  // Enterprise Solution data directly in the component
  const enterpriseSolutions = [
    {
      id: 1,
      name: "Enterprise AI Platform",
      industry: "Technology",
      solutionType: "AI & Machine Learning",
      description: "Comprehensive AI platform for enterprise-scale machine learning and automation",
      price: 50000,
      pricingModel: "project-based",
      enterpriseScore: 95,
      features: ["Scalable ML infrastructure", "AutoML capabilities", "Model governance", "Enterprise security"],
      benefits: ["Increased efficiency", "Cost reduction", "Competitive advantage", "Data-driven decisions"],
      targetIndustries: ["Technology", "Finance", "Healthcare", "Manufacturing"],
      tags: ["AI Platform", "Machine Learning", "Enterprise", "Automation"]
    },
    {
      id: 2,
      name: "Cloud Migration & Optimization",
      industry: "All Industries",
      solutionType: "Cloud Services",
      description: "End-to-end cloud migration with optimization for performance, cost, and security",
      price: 75000,
      pricingModel: "project-based",
      enterpriseScore: 92,
      features: ["Multi-cloud strategy", "Performance optimization", "Cost optimization", "Security implementation"],
      benefits: ["Reduced infrastructure costs", "Improved scalability", "Enhanced security", "Better performance"],
      targetIndustries: ["Technology", "Finance", "Healthcare", "Retail", "Manufacturing"],
      tags: ["Cloud Migration", "AWS", "Azure", "GCP", "Optimization"]
    },
    {
      id: 3,
      name: "Cybersecurity & Compliance Suite",
      industry: "Finance",
      solutionType: "Security",
      description: "Comprehensive cybersecurity solutions with regulatory compliance management",
      price: 45000,
      pricingModel: "project-based",
      enterpriseScore: 94,
      features: ["Threat detection", "Vulnerability assessment", "Compliance monitoring", "Incident response"],
      benefits: ["Protection against threats", "Regulatory compliance", "Risk mitigation", "Business continuity"],
      targetIndustries: ["Finance", "Healthcare", "Government", "Technology"],
      tags: ["Cybersecurity", "Compliance", "Security", "Risk Management"]
    },
    {
      id: 4,
      name: "Digital Transformation Consulting",
      industry: "All Industries",
      solutionType: "Consulting",
      description: "Strategic guidance for enterprise digital transformation initiatives",
      price: 300,
      pricingModel: "hourly",
      enterpriseScore: 90,
      features: ["Strategy development", "Process optimization", "Technology selection", "Change management"],
      benefits: ["Improved efficiency", "Cost savings", "Competitive advantage", "Future readiness"],
      targetIndustries: ["All Industries"],
      tags: ["Digital Transformation", "Consulting", "Strategy", "Process Optimization"]
    },
    {
      id: 5,
      name: "Enterprise Data Platform",
      industry: "Technology",
      solutionType: "Data & Analytics",
      description: "Scalable data platform for enterprise data management and analytics",
      price: 60000,
      pricingModel: "project-based",
      enterpriseScore: 93,
      features: ["Data governance", "Real-time analytics", "Data integration", "Scalable architecture"],
      benefits: ["Data-driven decisions", "Improved efficiency", "Cost reduction", "Competitive advantage"],
      targetIndustries: ["Technology", "Finance", "Healthcare", "Retail"],
      tags: ["Data Platform", "Analytics", "Governance", "Integration"]
    },
    {
      id: 6,
      name: "Enterprise Integration Platform",
      industry: "Manufacturing",
      solutionType: "Integration",
      description: "Comprehensive platform for integrating enterprise systems and applications",
      price: 55000,
      pricingModel: "project-based",
      enterpriseScore: 91,
      features: ["API management", "System integration", "Workflow automation", "Real-time sync"],
      benefits: ["Improved efficiency", "Cost reduction", "Better collaboration", "Scalability"],
      targetIndustries: ["Manufacturing", "Technology", "Finance", "Healthcare"],
      tags: ["Integration", "API", "Workflow", "Automation"]
    }
  ];

  const industries = ['all', 'Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Retail', 'Government', 'All Industries'];
  const solutionTypes = ['all', 'AI & Machine Learning', 'Cloud Services', 'Security', 'Consulting', 'Data & Analytics', 'Integration'];

  const filteredSolutions = enterpriseSolutions.filter(solution => {
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = selectedIndustry === 'all' || 
                           solution.targetIndustries.includes(selectedIndustry) || 
                           solution.industry === selectedIndustry;
    const matchesSolutionType = selectedSolutionType === 'all' || solution.solutionType === selectedSolutionType;
    
    return matchesSearch && matchesIndustry && matchesSolutionType;
  });

  const formatPrice = (price: number, model: string) => {
    switch (model) {
      case 'monthly':
        return `$${price.toLocaleString()}/month`;
      case 'hourly':
        return `$${price}/hour`;
      case 'project-based':
        return `$${price.toLocaleString()}`;
      default:
        return `$${price.toLocaleString()}`;
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Building, 
  Users, 
  Target, 
  TrendingUp, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Database
} from 'lucide-react';
=======
import { Building, Shield, Users, Zap, Target, Globe, Rocket, Award, Cpu, Cloud, Brain, Database } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
import { Link } from 'react-router-dom';
import { 
  Building, 
  Zap, 
  Shield, 
  Users, 
  Cpu, 
  Cloud,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Target,
  Rocket,
  Globe,
  Database,
  Network,
  Lock,
  BarChart3
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
=======
import { useState } from 'react';
import { Search, Star, Users, Zap, Brain, Shield, Settings, Phone, Mail, MapPin } from 'lucide-react';
>>>>>>> origin/cursor/build-and-fix-errors-c9ef

const EnterpriseSolutionsPage = () => {
  const enterpriseServices = [
=======
import React, { useState } from 'react';
import { Search, Filter, Star, Clock, DollarSign, Users, Zap, Brain, Cloud, Database, Shield, Settings, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Globe, Building, Cpu, Network, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon } from 'lucide-react';

const EnterpriseSolutionsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedSolutionType, setSelectedSolutionType] = useState<string>('all');

  // Enterprise Solution data directly in the component
  const enterpriseSolutions = [
>>>>>>> origin/cursor/build-and-fix-errors-e276
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Building,
      title: 'Digital Transformation',
      description: 'End-to-end business modernization and digital strategy implementation',
      features: [
        'Digital strategy consulting',
        'Process optimization',
        'Technology roadmapping',
        'Change management',
        'Performance monitoring',
        'Continuous improvement'
      ],
      pricing: 'Starting from $25,000',
      link: '/digital-transformation'
=======
      icon: Building,
      title: 'Enterprise Architecture',
      description: 'Design and implement scalable enterprise architectures that support business growth and digital transformation.',
      features: ['System Design', 'Integration Planning', 'Scalability Planning', 'Technology Roadmap'],
      link: '/enterprise-architecture'
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
<<<<<<< HEAD
      description: 'Comprehensive security solutions for enterprise environments',
      features: [
        'Security assessment & auditing',
        'Compliance management',
        'Identity & access management',
        'Threat detection & response',
        'Data protection',
        'Security monitoring'
      ],
      pricing: 'Starting from $15,000/month',
      link: '/enterprise-security'
    },
    {
      icon: Users,
      title: 'Business Process Automation',
      description: 'Streamline operations with intelligent automation solutions',
      features: [
        'Process analysis & mapping',
        'Workflow automation',
        'Integration services',
        'Performance analytics',
        'Change management',
        'Training & support'
      ],
      pricing: 'Starting from $20,000',
      link: '/business-process-automation'
    },
    {
      icon: Database,
      title: 'Data Analytics & BI',
      description: 'Transform data into actionable business intelligence',
      features: [
        'Data strategy & architecture',
        'Analytics platform setup',
        'Custom dashboard development',
        'Predictive analytics',
        'Data governance',
        'Performance optimization'
      ],
      pricing: 'Starting from $18,000/month',
      link: '/data-analytics'
    },
    {
      icon: Cpu,
      title: 'Legacy System Modernization',
      description: 'Transform legacy systems into modern, scalable solutions',
      features: [
        'System assessment',
        'Modernization strategy',
        'Migration planning',
        'Data migration',
        'Testing & validation',
        'Training & support'
      ],
      pricing: 'Starting from $30,000',
      link: '/legacy-modernization'
    },
    {
      icon: Globe,
      title: 'Enterprise Integration',
      description: 'Seamlessly connect all your business systems and applications',
      features: [
        'Integration architecture',
        'API development',
        'Data synchronization',
        'Real-time connectivity',
        'Monitoring & alerting',
        'Performance optimization'
      ],
      pricing: 'Starting from $22,000/month',
      link: '/enterprise-integration'
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  };

<<<<<<< HEAD
  const getEnterpriseScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transform your enterprise with our comprehensive technology solutions designed for large-scale 
            organizations. From AI platforms to cloud migration, we deliver results that drive growth.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-slate-800 py-8 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search enterprise solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Industry Filter */}
            <div>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>
                    {industry === 'all' ? 'All Industries' : industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Solution Type Filter */}
            <div>
              <select
                value={selectedSolutionType}
                onChange={(e) => setSelectedSolutionType(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                {solutionTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Solution Types' : type}
                  </option>
                ))}
              </select>
            </div>
=======
  const enterpriseCapabilities = [
    {
      icon: Target,
      title: 'Scalable Solutions',
      description: 'Enterprise-grade solutions that grow with your business'
    },
    {
      icon: Star,
      title: 'Industry Expertise',
      description: 'Deep knowledge across multiple industries and sectors'
    },
    {
      icon: TrendingUp,
      title: 'ROI Focused',
      description: 'Solutions designed to deliver measurable business value'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Fast deployment with minimal business disruption'
=======
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation solutions for enterprise organizations.',
      features: [
        'Legacy system modernization',
        'Process automation and optimization',
        'Change management and training',
        'ROI measurement and tracking'
      ],
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions for enterprise environments.',
      features: [
        'Zero-trust architecture',
        'Advanced threat detection',
        'Compliance automation',
        'Security awareness training'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Data & Analytics',
      description: 'Enterprise-grade data management and analytics solutions.',
      features: [
        'Data governance and quality',
        'Advanced analytics and BI',
        'Machine learning integration',
        'Real-time data processing'
      ],
      icon: Database,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Cloud Migration',
      description: 'Strategic cloud migration and optimization services.',
      features: [
        'Migration strategy and planning',
        'Multi-cloud architecture',
        'Cost optimization',
        'Performance monitoring'
      ],
      icon: Cloud,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Scale your operations efficiently as your business grows.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security with compliance and governance.',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Efficiency',
      description: 'Streamline operations and reduce costs through automation.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge technology and solutions.',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500'
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
<<<<<<< HEAD
      solutions: ['Compliance automation', 'Risk management', 'Customer analytics', 'Security enhancement']
    },
    {
      name: 'Healthcare',
      solutions: ['Patient data management', 'Compliance automation', 'Operational efficiency', 'Security & privacy']
    },
    {
      name: 'Manufacturing',
      solutions: ['Supply chain optimization', 'Quality control', 'Predictive maintenance', 'Process automation']
    },
    {
      name: 'Retail',
      solutions: ['Customer experience', 'Inventory management', 'Omnichannel integration', 'Analytics & insights']
=======
      challenges: ['Regulatory compliance', 'Data security', 'Real-time processing'],
      solutions: ['SOC2 compliance', 'Advanced encryption', 'High-performance computing'],
      icon: Building
    },
    {
      name: 'Healthcare',
      challenges: ['HIPAA compliance', 'Data privacy', 'System integration'],
      solutions: ['HIPAA automation', 'Secure data sharing', 'Interoperability solutions'],
      icon: Shield
    },
    {
      name: 'Manufacturing',
      challenges: ['Supply chain optimization', 'Quality control', 'Predictive maintenance'],
      solutions: ['IoT integration', 'AI-powered analytics', 'Predictive modeling'],
      icon: Cpu
    },
    {
      name: 'Retail',
      challenges: ['Customer experience', 'Inventory management', 'Omnichannel integration'],
      solutions: ['Personalization engines', 'Smart inventory', 'Unified commerce'],
      icon: Users
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Understand your current state and identify transformation opportunities.',
      icon: Target
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop comprehensive transformation roadmap aligned with business goals.',
      icon: Globe
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute transformation with proven methodologies and best practices.',
      icon: Rocket
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously improve and optimize your transformed operations.',
      icon: Award
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
    }
=======
      description: 'Comprehensive security solutions including compliance, threat detection, and risk management.',
      features: ['Security Audits', 'Compliance Frameworks', 'Threat Detection', 'Access Control'],
      link: '/enterprise-security'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Enterprise data strategy, governance, and analytics solutions for informed decision-making.',
      features: ['Data Strategy', 'Governance Policies', 'Analytics Platform', 'Data Quality'],
      link: '/data-management'
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Robust network solutions designed for enterprise-scale operations and high availability.',
      features: ['Network Design', 'High Availability', 'Load Balancing', 'Performance Monitoring'],
      link: '/network-infrastructure'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting solutions that drive strategic business decisions.',
      features: ['Dashboard Creation', 'Report Automation', 'Data Visualization', 'Predictive Analytics'],
      link: '/business-intelligence'
    },
    {
      icon: Lock,
      title: 'Compliance & Governance',
      description: 'Ensure regulatory compliance and implement robust governance frameworks.',
      features: ['Regulatory Compliance', 'Policy Development', 'Audit Support', 'Risk Management'],
      link: '/compliance-governance'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Build systems that grow with your business and handle increasing demands.'
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Enterprise-grade solutions ensure high availability and business continuity.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Protect your business with industry-leading security measures and compliance.'
    },
    {
      icon: Users,
      title: 'Efficiency',
      description: 'Streamline operations and improve productivity across your organization.'
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Technology',
    'Government',
    'Education',
    'Energy'
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
  ];
=======
import { Link } from 'react-router-dom';
import { Shield, Building, Users, Zap, ArrowRight, CheckCircle, Star, Globe, Lock, Rocket, Cpu, Database } from 'lucide-react';
import { SEO } from '@/components/SEO';

const enterpriseServices = [
  {
    title: "Enterprise Security Solutions",
    description: "Comprehensive security frameworks including threat detection, compliance management, and data protection.",
    icon: Shield,
    features: ["Zero Trust Architecture", "Compliance Automation", "Threat Intelligence", "Incident Response"],
    price: "From $15,000/month",
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Digital Transformation",
    description: "End-to-end business modernization with AI, cloud, and process automation.",
    icon: Building,
    features: ["Process Optimization", "Legacy Modernization", "Change Management", "ROI Tracking"],
    price: "From $25,000/month",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Enterprise AI Integration",
    description: "Seamlessly integrate AI capabilities across your entire organization.",
    icon: Cpu,
    features: ["AI Strategy Planning", "Data Infrastructure", "Model Deployment", "Training Programs"],
    price: "From $20,000/month",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Enterprise Data Management",
    description: "Comprehensive data governance, analytics, and business intelligence solutions.",
    icon: Database,
    features: ["Data Governance", "Analytics Platform", "Business Intelligence", "Data Quality"],
    price: "From $18,000/month",
    color: "from-green-500 to-emerald-500"
  }
];

const benefits = [
  {
    title: "Enhanced Security",
    description: "Protect your enterprise with industry-leading security solutions",
    icon: Shield,
    color: "text-zion-cyan"
  },
  {
    title: "Operational Efficiency",
    description: "Streamline processes and reduce costs through digital transformation",
    icon: Zap,
    color: "text-zion-purple"
  },
  {
    title: "Competitive Advantage",
    description: "Stay ahead with cutting-edge technology and AI capabilities",
    icon: Globe,
    color: "text-green-400"
  },
  {
    title: "Scalable Growth",
    description: "Build infrastructure that grows with your business needs",
    icon: Building,
    color: "text-blue-400"
  }
];

const testimonials = [
  {
    content: "Zion Tech Group's enterprise security solution helped us achieve SOC2 compliance in record time while significantly improving our threat detection capabilities.",
    name: "Jennifer Williams",
    role: "CISO, Fortune 500 Company",
    rating: 5
  },
  {
    content: "Their digital transformation program modernized our entire IT infrastructure, resulting in 60% cost savings and improved employee productivity.",
    name: "Michael Chang",
    role: "CTO, Global Manufacturing Corp",
    rating: 5
  },
  {
    content: "The enterprise AI integration they implemented has given us insights that were previously impossible to obtain, driving millions in new revenue.",
    name: "Sarah Rodriguez",
    role: "VP of Innovation, Tech Enterprise",
    rating: 5
  }
];
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0

export default function EnterpriseSolutionsPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-zion-cyan/20"></div>
=======
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue-light/20"></div>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue-light/10"></div>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-zion-cyan bg-clip-text text-transparent">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your enterprise with comprehensive technology solutions designed for scale, 
              security, and business growth. From digital transformation to legacy modernization.
=======
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Comprehensive technology solutions designed for enterprise-scale operations, 
              driving digital transformation and business growth.
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                Enterprise Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-6 py-3 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                View Enterprise Pricing
=======
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Enterprise Solutions - Zion Tech Group" 
        description="Transform your enterprise with comprehensive security, digital transformation, and AI integration solutions."
        keywords="enterprise solutions, digital transformation, enterprise security, AI integration, data management"
        canonical="https://ziontechgroup.com/enterprise-solutions"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Enterprise
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your enterprise with comprehensive security, digital transformation, and AI integration solutions. 
              Built for scale, security, and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Request Quote
                <CheckCircle className="w-5 h-5" />
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Enterprise Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Enterprise Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for enterprise-scale challenges and opportunities
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={service.link}
                    className="block p-8 bg-zion-blue-dark/50 border border-green-500/20 rounded-2xl hover:border-green-500/50 hover:bg-zion-blue-light/10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-green-500/20"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-green-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-green-400 font-semibold mb-4">
                      {service.pricing}
                    </div>
                    <div className="flex items-center text-green-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities */}
=======
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Enterprise{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed mb-8">
              Transform your enterprise with comprehensive technology solutions designed 
              for scale, security, and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
=======
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Services Grid */}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
<<<<<<< HEAD
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Enterprise Solutions
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Enterprise-grade solutions designed to meet the complex needs of large organizations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              );
            })}
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Solutions Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((solution) => (
            <div key={solution.id} className="bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{solution.name}</h3>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-blue-400">
                      {formatPrice(solution.price, solution.pricingModel)}
                    </span>
                    <div className={`text-sm font-semibold ${getEnterpriseScoreColor(solution.enterpriseScore)}`}>
                      Enterprise Score: {solution.enterpriseScore}%
                    </div>
                  </div>
=======
      {/* Enterprise Services */}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Enterprise Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We provide enterprise-grade solutions with proven methodologies and expertise
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{capability.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{capability.description}</p>
=======
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive enterprise solutions designed for modern organizations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
=======

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Enterprise Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive enterprise solutions designed to address the complex challenges of modern organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {enterpriseServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center text-white`}>
                  <IconComponent className="w-8 h-8" />
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                </div>
                
<<<<<<< HEAD
                <p className="text-slate-300 mb-4">{solution.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                    {solution.industry}
                  </span>
                  <span className="inline-block bg-slate-600 text-slate-300 text-xs px-2 py-1 rounded-full ml-2">
                    {solution.solutionType}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {solution.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="w-4 h-4 text-blue-400 mr-2" />
=======
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                        {feature}
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Target Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.targetIndustries.slice(0, 3).map((industry, index) => (
                      <span key={index} className="text-xs bg-indigo-600 text-white px-2 py-1 rounded">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Industry Solutions */}
=======
      {/* Industries */}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored solutions for specific industries and business challenges
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-zion-blue-dark/50 border border-green-500/20 rounded-2xl hover:border-green-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-400">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
=======
            <h2 className="text-4xl font-bold mb-6">
              Industry{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Specialized solutions for various industries and their unique challenges.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-zion-cyan">{industry.name}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-3 text-white">Challenges:</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          {challenge}
=======
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Enterprise Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              End-to-end enterprise solutions that address complex business challenges and drive operational excellence.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
                        </li>
                      ))}
                    </ul>
                  </div>
                  
<<<<<<< HEAD
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors duration-300 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
      {/* Process Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
<<<<<<< HEAD
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our enterprise solutions can drive your digital transformation 
              and accelerate business growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                Start Enterprise Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Get Enterprise Quote
              </Link>
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Methodology
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              A proven approach to enterprise transformation and digital innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-zion-slate-light">{step.description}</p>
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Enterprise Solutions?
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Discover the transformative benefits that enterprise-grade solutions can bring to your organization.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
=======
      {/* Industries Section */}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-center max-w-4xl mx-auto"
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Industries We{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Our enterprise solutions are tailored to meet the unique challenges and compliance requirements across diverse industries.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-4 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300 text-center"
              >
                <span className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  {industry}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Implementation
              </span>
              {' '}Process
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              A proven methodology for successfully implementing enterprise solutions that drive business transformation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'Understand your business needs and analyze current systems and processes.'
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                description: 'Develop a comprehensive strategy and implementation roadmap.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute the solution with careful attention to detail and quality.'
              },
              {
                step: '04',
                title: 'Optimization & Support',
                description: 'Continuously optimize performance and provide ongoing support.'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-zion-slate-light">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
<<<<<<< HEAD
            <p className="text-lg text-zion-slate-light mb-8">
              Let us help you build a future-ready enterprise with cutting-edge 
              technology solutions and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Your Transformation
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Get a Free Assessment
              </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our enterprise solutions can modernize your operations, 
              improve efficiency, and drive sustainable business growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Get a Custom Quote
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
            </div>
          </motion.div>
        </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                  Get Enterprise Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

<<<<<<< HEAD
      {/* Contact Section */}
      <div className="bg-slate-800 py-16 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Enterprise?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-slate-300">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href="https://ziontechgroup.com" 
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
            >
              Visit Our Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolutionsPage;
=======
      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join leading enterprises that have already revolutionized their operations with our comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your Transformation
                <Rocket className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <CheckCircle className="w-5 h-5" />
                Get Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default EnterpriseSolutionsPage;
>>>>>>> origin/cursor/build-and-fix-errors-e276
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
