<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react.ts';
import { Link  } from 'react-router-dom.ts';
import { motion  } from 'framer-motion.ts';
import { Building, 
  Heart, 
  DollarSign, 
  Truck, 
  BookOpen, 
  Shield, 
  Users, 
  Globe,
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  Brain,
  Server,
  Rocket,
  Cloud,
<<<<<<< HEAD
  Atom,
  Sparkles,
  TrendingUp,
  Zap,
  Target,
  Award,
  CheckCircle,
  ArrowRight
 } from 'lucide-react.ts';

export default function Solutions(...args: any[]): any {
  const industrySolutions = [
    {
      title: 'Enterprise Solutions',
      icon: Building,
      description: 'Scalable enterprise-grade solutions for large organizations',
      color: 'from-blue-500 to-indigo-600',
      features: [
        'Digital Transformation Consulting',
        'Enterprise AI Integration',
        'Scalable Cloud Infrastructure',
        'Enterprise Security & Compliance',
        'Business Process Automation',
        'Data Governance & Analytics'
      ],
      useCases: [
        'Fortune 500 Digital Transformation',
        'Multi-national AI Implementation',
        'Enterprise Security Modernization',
        'Legacy System Migration'
      ],
      href: '/solutions/enterprise'
    },
    {
      title: 'Healthcare Solutions',
      icon: Heart,
      description: 'AI-powered healthcare solutions for improved patient outcomes',
      color: 'from-red-500 to-pink-600',
      features: [
        'AI Diagnostic Tools',
        'Patient Data Analytics',
        'Healthcare Process Automation',
        'Medical Imaging AI',
        'Drug Discovery Support',
        'Healthcare Compliance'
      ],
      useCases: [
        'AI-Powered Diagnosis Systems',
        'Patient Outcome Prediction',
        'Medical Image Analysis',
        'Healthcare Workflow Optimization'
      ],
      href: '/solutions/healthcare'
    },
    {
      title: 'Financial Services',
      icon: DollarSign,
      description: 'Advanced financial technology solutions for modern banking',
      color: 'from-green-500 to-emerald-600',
      features: [
        'AI Trading Algorithms',
        'Risk Management Systems',
        'Fraud Detection AI',
        'Financial Analytics',
        'Regulatory Compliance',
        'Customer Experience AI'
      ],
      useCases: [
        'Algorithmic Trading Platforms',
        'Real-time Risk Assessment',
        'AI Fraud Prevention',
        'Personalized Banking'
      ],
      href: '/solutions/financial'
    },
    {
      title: 'Manufacturing Solutions',
      icon: Truck,
      description: 'Smart manufacturing and Industry 4.0 solutions',
      color: 'from-orange-500 to-red-600',
      features: [
        'Predictive Maintenance',
        'Quality Control AI',
        'Supply Chain Optimization',
        'IoT Integration',
        'Production Analytics',
        'Smart Factory Solutions'
      ],
      useCases: [
        'Predictive Maintenance Systems',
        'Quality Control Automation',
        'Supply Chain Optimization',
        'Smart Factory Implementation'
      ],
      href: '/solutions/manufacturing'
    },
    {
      title: 'Government Solutions',
      icon: Shield,
      description: 'Secure and compliant government technology solutions',
      color: 'from-purple-500 to-indigo-600',
      features: [
        'Cybersecurity & Compliance',
        'Data Governance',
        'Citizen Services AI',
        'Infrastructure Management',
        'Public Safety Systems',
        'Regulatory Compliance'
      ],
      useCases: [
        'Government Cybersecurity',
        'Smart City Infrastructure',
        'Citizen Service Automation',
        'Public Safety AI'
      ],
      href: '/solutions/government'
    },
    {
      title: 'Education Solutions',
      icon: BookOpen,
      description: 'Innovative educational technology for modern learning',
      color: 'from-cyan-500 to-blue-600',
      features: [
        'AI Learning Platforms',
        'Personalized Education',
        'Student Analytics',
        'Virtual Learning Environments',
        'Assessment Automation',
        'Educational Content AI'
      ],
      useCases: [
        'Personalized Learning Systems',
        'Student Performance Analytics',
        'Virtual Classroom Platforms',
        'AI-Powered Assessment'
      ],
      href: '/solutions/education'
    }
  ];

  const technologySolutions = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge AI solutions for business transformation',
      color: 'from-purple-500 to-pink-600',
      solutions: [
        'AI Business Intelligence',
        'Machine Learning Platforms',
        'Natural Language Processing',
        'Computer Vision Systems',
        'Predictive Analytics',
        'AI Automation'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Scalable cloud solutions and infrastructure management',
      color: 'from-blue-500 to-cyan-600',
      solutions: [
        'Cloud Migration',
        'DevOps Automation',
        'Container Orchestration',
        'Serverless Computing',
        'Multi-cloud Management',
        'Edge Computing'
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Advanced security solutions for modern threats',
      color: 'from-red-500 to-orange-600',
      solutions: [
        'Zero Trust Security',
        'AI Threat Detection',
        'Compliance Management',
        'Identity & Access Management',
        'Security Automation',
        'Incident Response'
      ]
    },
    {
      title: 'Quantum Computing',
      icon: Atom,
      description: 'Next-generation quantum computing solutions',
      color: 'from-indigo-500 to-purple-600',
      solutions: [
        'Quantum Algorithms',
        'Quantum Machine Learning',
        'Quantum Cryptography',
        'Quantum Simulation',
        'Hybrid Quantum-Classical',
        'Quantum Optimization'
      ]
    }
  ];

  const successMetrics = [
    { metric: '500+', label: 'Successful Implementations', icon: CheckCircle, color: 'text-green-400' },
    { metric: '98%', label: 'Client Satisfaction Rate', icon: Award, color: 'text-yellow-400' },
    { metric: '40%', label: 'Average Cost Reduction', icon: TrendingUp, color: 'text-blue-400' },
    { metric: '3x', label: 'Performance Improvement', icon: Zap, color: 'text-purple-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header Section */}
      <div className="bg-black/95 backdrop-blur-xl border-b border-cyan-500/30">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Solutions
                </h1>
                <p className="text-lg text-cyan-400 font-rajdhani tracking-wider">
                  Industry-Specific Solutions
                </p>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover tailored solutions designed for your industry. From healthcare to finance, 
              manufacturing to government, we provide cutting-edge technology solutions that drive real results.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md: anygrid-cols-4 gap-8">
            {successMetrics.map((item, index)  => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{item.metric}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold font-rajdhani text-cyan-400 text-center mb-12 uppercase tracking-wider">
            Industry Solutions
          </h2>
          <div className="grid grid-cols-1 lg: anygrid-cols-2 gap-8">
            {industrySolutions.map((solution, index)  => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  to={solution.href}
                  className="block p-8 bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 group h-full"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-rajdhani text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-gray-400">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-300 mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 md: anygrid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex)  => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
=======
import React, { useState } from 'react.ts';
import { motion   } from 'framer-motion.ts';
import { Link   } from 'react-router-dom.ts';
import { Building, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Globe,
  Users,
  Database,
  Lock,
=======
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  TrendingUp,
  CheckCircle,
  ArrowRight,
<<<<<<< HEAD
  Play
  } from 'lucide-react.ts';
import { SEO   } from '@/components/SEO';

const Solutions: React.FC = (): JSX.Element => {;
  const [selectedIndustry, setSelectedIndustry] = useState('all');
=======
  Star,
  Target,
  Award,
  Clock,
  DollarSign,
  Search,
  Filter
} from 'lucide-react';

const solutionCategories = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: Brain,
    description: 'Transform your business with intelligent automation and predictive insights',
    color: 'from-purple-500 to-indigo-600',
    solutions: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Systems',
      'Chatbots & Virtual Assistants',
      'Machine Learning Models'
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    description: 'Protect your digital assets with enterprise-grade security solutions',
    color: 'from-red-500 to-pink-600',
    solutions: [
      'Threat Detection & Response',
      'Identity & Access Management',
      'Security Compliance',
      'Penetration Testing',
      'Security Training',
      'Incident Response'
    ]
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    icon: Cloud,
    description: 'Scale your infrastructure with flexible and cost-effective cloud solutions',
    color: 'from-blue-500 to-cyan-600',
    solutions: [
      'Cloud Migration',
      'Infrastructure as Code',
      'Container Orchestration',
      'Serverless Computing',
      'Multi-cloud Strategy',
      'Cloud Security'
    ]
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    icon: TrendingUp,
    description: 'Turn your data into actionable insights for better decision making',
    color: 'from-green-500 to-emerald-600',
    solutions: [
      'Business Intelligence',
      'Data Warehousing',
      'Real-time Analytics',
      'Predictive Modeling',
      'Data Visualization',
      'Big Data Processing'
    ]
  },
  {
    id: 'iot-edge',
    name: 'IoT & Edge Computing',
    icon: Zap,
    description: 'Connect devices and process data closer to the source for real-time insights',
    color: 'from-yellow-500 to-orange-600',
    solutions: [
      'IoT Device Management',
      'Edge Computing Platforms',
      'Sensor Networks',
      'Real-time Monitoring',
      'Predictive Maintenance',
      'Smart City Solutions'
    ]
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    icon: Globe,
    description: 'Modernize your business processes and customer experience',
    color: 'from-indigo-500 to-purple-600',
    solutions: [
      'Process Automation',
      'Customer Experience',
      'Legacy Modernization',
      'Digital Strategy',
      'Change Management',
      'Technology Consulting'
    ]
  }
];
>>>>>>> 0db51c83ec2639597974243032be26f90b238361

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Shield },
    { id: 'finance', name: 'Financial Services', icon: Lock },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building },
    { id: 'retail', name: 'Retail & E-commerce', icon: Users },;
    { id: 'technology', name: 'Technology', icon: Brain };
  ];

<<<<<<< HEAD
  const solutions = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics',
      industry: 'healthcare',
      description: 'Transform patient care with predictive analytics and intelligent diagnosis support.',
      features: [
        'Predictive disease modeling',
        'Medical image analysis',
        'Patient risk assessment',
        'Drug discovery optimization'
      ],
      benefits: [
        'Improved diagnostic accuracy',
        'Reduced healthcare costs',
        'Enhanced patient outcomes',
        'Streamlined clinical workflows'
      ],
      icon: Brain,
      demo: true,
      trial: true
    },
    {
      id: 2,
      title: 'Cybersecurity for Financial Services',
      industry: 'finance',
      description: 'Protect financial institutions with advanced threat detection and compliance solutions.',
      features: [
        'Real-time threat monitoring',
        'Compliance automation',
        'Fraud detection systems',
        'Secure transaction processing'
      ],
      benefits: [
        'Enhanced security posture',
        'Regulatory compliance',
        'Reduced fraud losses',
        'Customer trust protection'
      ],
      icon: Shield,
      demo: true,
      trial: false
    },
    {
      id: 3,
      title: 'Smart Manufacturing Platform',
      industry: 'manufacturing',
      description: 'Optimize production with IoT sensors, predictive maintenance, and quality control.',
      features: [
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Energy efficiency monitoring'
      ],
      benefits: [
        'Reduced downtime',
        'Improved product quality',
        'Lower operational costs',
        'Increased productivity'
      ],
      icon: Building,
      demo: true,
      trial: true
    },
    {
      id: 4,
      title: 'E-commerce Personalization Engine',
      industry: 'retail',
      description: 'Boost sales with AI-driven product recommendations and customer insights.',
      features: [
        'Personalized recommendations',
        'Customer behavior analysis',
        'Dynamic pricing optimization',
        'Inventory management'
      ],
      benefits: [
        'Increased conversion rates',
        'Higher customer retention',
        'Optimized pricing strategies',
        'Better inventory control'
      ],
      icon: Users,
      demo: true,
      trial: true
    },
    {
      id: 5,
      title: 'Cloud-Native Development Platform',
      industry: 'technology',
      description: 'Accelerate software development with cloud-native tools and DevOps automation.',
      features: [
        'Container orchestration',
        'CI/CD pipelines',
        'Microservices architecture',
        'Auto-scaling infrastructure'
      ],
      benefits: [
        'Faster time to market',
        'Reduced infrastructure costs',
        'Improved scalability',
        'Enhanced reliability'
      ],
      icon: Cloud,
      demo: true,
      trial: true
    },
    {
      id: 6,
      title: 'Data Intelligence Platform',
      industry: 'technology',
      description: 'Unlock insights from your data with advanced analytics and machine learning.',
      features: [
        'Data warehousing',
        'Real-time analytics',
        'Machine learning models',
        'Business intelligence dashboards'
      ],
      benefits: [
        'Data-driven decisions',
        'Improved operational efficiency',
        'Competitive advantage',
        'Cost optimization'
      ],
      icon: Database,
      demo: true,
      trial: false;
    };
  ];

  const filteredSolutions = selectedIndustry === 'all' ;
    ? solutions: anysolutions.filter(solution   => solution.industry === selectedIndustry);

  return (
    <>
      <SEO 
        title = "Technology Solutions | Zion Tech Group"
        description="Industry-specific technology solutions designed to transform your business operations and drive innovation across healthcare, finance, manufacturing, and more."
        keywords="technology solutions, industry solutions, healthcare analytics, cybersecurity, smart manufacturing, e-commerce, cloud development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-32 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              animate = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Technology
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Industry-specific technology solutions designed to transform your business operations, 
                drive innovation, and deliver measurable results across all sectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                    selectedIndustry === industry.id
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50'
                  }`}
                >
                  <industry.icon className="w-5 h-5 mr-2" />
                  {industry.name}
                </button>
              ))}
=======
const featuredSolutions = [
  {
    id: 1,
    name: 'AI-Powered Business Intelligence',
    category: 'AI & ML',
    description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.',
    features: [
      'Real-time data processing',
      'Predictive analytics models',
      'Custom dashboard creation',
      'Automated reporting',
      'Natural language queries',
      'Mobile-responsive design'
    ],
    benefits: [
      '30% faster decision making',
      'Reduced manual reporting',
      'Improved data accuracy',
      'Enhanced user experience'
    ],
    price: 'Starting at $2,500/month',
    implementation: '4-8 weeks',
    icon: Brain,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 2,
    name: 'Zero-Trust Security Framework',
    category: 'Cybersecurity',
    description: 'Implement a comprehensive security framework that continuously verifies every user, device, and connection to protect your organization from modern threats.',
    features: [
      'Identity verification',
      'Device authentication',
      'Network segmentation',
      'Threat detection',
      'Compliance monitoring',
      'Incident response'
    ],
    benefits: [
      '99.9% threat detection rate',
      'Reduced security incidents',
      'Compliance achievement',
      'Lower insurance costs'
    ],
    price: 'Starting at $3,200/month',
    implementation: '6-12 weeks',
    icon: Shield,
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 3,
    name: 'Cloud-Native Infrastructure',
    category: 'Cloud Computing',
    description: 'Build scalable, resilient, and cost-effective infrastructure using modern cloud-native technologies and best practices.',
    features: [
      'Auto-scaling infrastructure',
      'Container orchestration',
      'CI/CD pipelines',
      'Monitoring & alerting',
      'Disaster recovery',
      'Cost optimization'
    ],
    benefits: [
      '50% infrastructure cost reduction',
      '99.9% uptime guarantee',
      'Faster deployment cycles',
      'Improved scalability'
    ],
    price: 'Starting at $1,800/month',
    implementation: '8-16 weeks',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-600'
  }
];

export default function Solutions() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...solutionCategories.map(cat => cat.name)];
  const industries = ['All', ...industrySolutions.map(ind => ind.industry)];

  const filteredSolutions = featuredSolutions.filter(solution => {
    const matchesCategory = selectedCategory === 'All' || solution.category === selectedCategory;
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-zion-cyan/20 text-zion-cyan px-6 py-3 rounded-full border border-zion-cyan/30 mb-6">
              <Rocket className="w-5 h-5" />
              <span className="font-medium">Technology Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Solutions for Modern Businesses
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              Discover comprehensive technology solutions designed to transform your business operations, 
              enhance security, and drive growth through cutting-edge innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="md:col-span-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Industry Filter */}
              <div>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Solution Categories</h2>
            <p className="text-zion-slate-light text-lg">Explore our comprehensive range of technology solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <Link to={`/solutions#${category.id}`}>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300 h-full">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                      <p className="text-zion-slate-light mb-4">{category.description}</p>
                      <div className="space-y-2">
                        {category.solutions.slice(0, 4).map((solution, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span>{solution}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
            <p className="text-zion-slate-light text-lg">Tailored solutions designed for your industry's unique challenges</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={industry.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.industry}</h3>
                  <div className="space-y-2">
                    {industry.solutions.slice(0, 4).map((solution, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link
                      to={`/solutions/${industry.industry.toLowerCase()}`}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                    >
                      View {industry.industry} Solutions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Solutions</h2>
            <p className="text-zion-slate-light text-lg">Our most popular and impactful technology solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{solution.name}</h3>
                        <span className="text-sm text-zion-cyan">{solution.category}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">{solution.price}</div>
                      <div className="text-sm text-zion-slate-light">Starting Price</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zion-slate-light mb-4">{solution.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Key Features</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Business Benefits</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Implementation & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-zion-slate-light">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Implementation: {solution.implementation}
                      </span>
                    </div>
                    <Link
                      to={`/solutions/${solution.id}`}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Let's discuss how our technology solutions can address your specific challenges 
              and drive measurable results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-zion-cyan px-8 py-4 rounded-xl hover:bg-zion-slate-light transition-all duration-300 font-medium text-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-zion-cyan transition-all duration-300 font-medium text-lg"
              >
                View Case Studies
              </Link>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution, index)   => (
                <motion.div
                  key={solution.id}
                  initial = {
  { opacity: 0,
  y: 20 

}}
                  whileInView = {
  { opacity: 1,
  y: 0 

}}
                  transition = {
  { duration: 0.5,
  delay: index * 0.1 

}}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

<<<<<<< HEAD
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-300 mb-3">Use Cases</h4>
                    <div className="space-y-2">
                      {solution.useCases.map((useCase, useCaseIndex) => (
                        <div key={useCaseIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <ArrowRight className="w-3 h-3 text-cyan-500" />
                          <span>{useCase}</span>
                        </div>
=======
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                      ))}
                    </ul>
                  </div>

<<<<<<< HEAD
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                      Learn More
                    </span>
                    <ArrowRight className="w-5 h-5 text-cyan-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold font-rajdhani text-cyan-400 text-center mb-12 uppercase tracking-wider">
            Technology Solutions
          </h2>
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-6">
            {technologySolutions.map((tech, index)  => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <div className="p-6 bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4`}>
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {tech.description}
                  </p>
                  <div className="space-y-2">
                    {tech.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center space-x-2 text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold font-rajdhani text-cyan-400 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let our experts help you find the perfect solution for your industry and business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Get Started
              </Link>
              <Link
                to="/request-quote"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
              >
                Request Quote
              </Link>
              <Link
                to="/case-studies"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
=======
                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex space-x-2">
                      {solution.demo && (
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors duration-300">
                          <Play className="w-4 h-4 mr-1 inline" />
                          Demo
                        </button>
                      )}
                      {solution.trial && (
                        <button className="px-4 py-2 border border-blue-600 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
                          Start Trial
                        </button>
                      )}
                    </div>
                    <Link
                      to={`/solutions/${solution.id}`}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-700/30">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial = {
  { opacity: 0,
  y: 30 

}}
              whileInView = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our technology solutions drive your digital transformation and unlock new possibilities 
                for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center justify-center px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
      </div>;
    </>;
  )};

export default Solutions;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
      </div>
    </>
  );
}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
