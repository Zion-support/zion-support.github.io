<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
=======
<<<<<<< HEAD
import React from 'react.ts';
import { Link              } from 'react-router-dom.ts';
import { motion              } from 'framer-motion.ts';
import { Building, 
  Heart, 
  DollarSign, 
  Truck, 
  BookOpen, 
  Shield, 
  Users, 
  Globe,
  Brain,
  Server,
  Rocket,
  Cloud,
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
          <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-4 gap-8">
            {successMetrics.map((item, index)              => (
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
          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {industrySolutions.map((solution, index)              => (
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
                    <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex)              => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
=======
import React, { useState } from 'react.ts';
import { motion               } from 'framer-motion.ts';
import { Link               } from 'react-router-dom.ts';
import { Building, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Globe,
  Users,
  Database,
  Lock,
  TrendingUp,
  Cpu,
  Network,
  Code,
  Rocket,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  PanelLeft,
  ShoppingCart,
  Settings,
  CheckCircle,
  ArrowRight,
<<<<<<< HEAD
  Play,
  Heart as HeartIcon,
  DollarSign,
  Truck,
  BookOpen,
  Atom,
  Sparkles,
  Target,
  Award
} from 'lucide-react';
import { SEO } from '@/components/SEO';
=======
  Play
              } from 'lucide-react.ts';
import { SEO               } from '@/components/SEO';
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

const solutionCategories = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: Brain,
    description: 'Transform your business with intelligent automation and predictive insights',
    color: 'from-purple-500 to-indigo-600',
    solutions: [
      {
        name: 'AI-Powered Analytics',
        description: 'Advanced analytics with machine learning algorithms for deeper insights',
        features: ['Predictive modeling', 'Real-time processing', 'Custom dashboards'],
        pricing: '$2,500/month'
      },
      {
        name: 'Intelligent Automation',
        description: 'Automate complex workflows with AI decision-making capabilities',
        features: ['Process automation', 'Smart routing', 'Performance optimization'],
        pricing: '$3,200/month'
      }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    description: 'Protect your digital assets with enterprise-grade security solutions',
    color: 'from-red-500 to-pink-600',
    solutions: [
      {
        name: 'Threat Detection & Response',
        description: 'Advanced threat detection with automated response capabilities',
        features: ['Real-time monitoring', 'AI-powered analysis', 'Incident response'],
        pricing: '$4,100/month'
      },
      {
        name: 'Identity & Access Management',
        description: 'Comprehensive IAM solution for secure user access control',
        features: ['Multi-factor authentication', 'Role-based access', 'Audit logging'],
        pricing: '$2,800/month'
      }
    ]
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure',
    icon: Cloud,
    description: 'Scalable and reliable cloud solutions for modern businesses',
    color: 'from-blue-500 to-cyan-600',
    solutions: [
      {
        name: 'Cloud Migration',
        description: 'Seamless migration to cloud platforms with minimal downtime',
        features: ['Assessment planning', 'Data migration', 'Performance optimization'],
        pricing: '$15,000+'
      },
      {
        name: 'DevOps Automation',
        description: 'Streamline development and deployment with CI/CD pipelines',
        features: ['Automated testing', 'Deployment automation', 'Monitoring tools'],
        pricing: '$3,500/month'
      }
    ]
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    icon: BarChart3,
    description: 'Turn your data into actionable insights and strategic decisions',
    color: 'from-green-500 to-emerald-600',
    solutions: [
      {
        name: 'Business Intelligence',
        description: 'Comprehensive BI solutions for data-driven decision making',
        features: ['Interactive dashboards', 'Data visualization', 'Report automation'],
        pricing: '$2,200/month'
      },
      {
        name: 'Data Engineering',
        description: 'Build robust data pipelines and warehousing solutions',
        features: ['ETL processes', 'Data modeling', 'Quality assurance'],
        pricing: '$4,500/month'
      }
    ]
  }
];

const industrySolutions = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: HeartIcon,
    description: 'Innovative solutions for modern healthcare challenges',
    color: 'from-pink-500 to-rose-600',
    solutions: [
      {
        name: 'Electronic Health Records',
        description: 'Secure and compliant EHR systems with AI-powered insights',
        features: ['HIPAA compliance', 'AI diagnostics', 'Patient portal'],
        pricing: '$5,200/month'
      },
      {
        name: 'Telemedicine Platform',
        description: 'Complete telehealth solution for remote patient care',
        features: ['Video consultations', 'Appointment scheduling', 'Prescription management'],
        pricing: '$3,800/month'
      }
    ]
  },
  {
    id: 'finance',
    name: 'Financial Services',
    icon: DollarSign,
    description: 'Secure and compliant financial technology solutions',
    color: 'from-yellow-500 to-orange-600',
    solutions: [
      {
        name: 'Fraud Detection',
        description: 'AI-powered fraud detection and prevention systems',
        features: ['Real-time monitoring', 'Machine learning', 'Risk scoring'],
        pricing: '$6,500/month'
      },
      {
        name: 'Regulatory Compliance',
        description: 'Automated compliance monitoring and reporting',
        features: ['Regulation tracking', 'Automated reporting', 'Audit trails'],
        pricing: '$4,200/month'
      }
    ]
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Building,
    description: 'Smart manufacturing solutions for Industry 4.0',
    color: 'from-gray-500 to-slate-600',
    solutions: [
      {
        name: 'Predictive Maintenance',
        description: 'IoT-based predictive maintenance for manufacturing equipment',
        features: ['Sensor integration', 'ML predictions', 'Maintenance scheduling'],
        pricing: '$3,900/month'
      },
      {
        name: 'Quality Control',
        description: 'AI-powered quality control and defect detection',
        features: ['Computer vision', 'Real-time monitoring', 'Quality metrics'],
        pricing: '$4,800/month'
      }
    ]
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    description: 'Digital transformation solutions for modern retail',
    color: 'from-indigo-500 to-purple-600',
    solutions: [
      {
        name: 'Customer Analytics',
        description: 'Comprehensive customer behavior analysis and insights',
        features: ['Behavior tracking', 'Personalization', 'ROI optimization'],
        pricing: '$2,900/month'
      },
      {
        name: 'Inventory Management',
        description: 'Smart inventory management with demand forecasting',
        features: ['Demand prediction', 'Stock optimization', 'Automated reordering'],
        pricing: '$2,100/month'
      }
    ]
  }
];

const Solutions: React.FC = (): JSX.Element => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedIndustry === 'all' 
    ? solutionCategories 
    : solutionCategories.filter(cat => 
        industrySolutions.find(ind => ind.id === selectedIndustry)?.solutions.some(sol => 
          sol.name.toLowerCase().includes(cat.name.toLowerCase())
        )
      );

<<<<<<< HEAD
  const filteredIndustries = selectedCategory === 'all'
    ? industrySolutions
    : industrySolutions.filter(ind => 
        ind.solutions.some(sol => 
          sol.name.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      );
=======
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
    ? solutions: anyanyanyanyanyanyanyanyanyanyanyanyanysolutions.filter(solution               => solution.industry === selectedIndustry);
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <SEO 
        title="Solutions - Zion Tech Group" 
        description="Comprehensive technology solutions for modern businesses. AI, cybersecurity, cloud infrastructure, and industry-specific solutions."
      />
      
      {/* Hero Section */}
      <div className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Technology Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8"
            >
              Transform your business with cutting-edge technology solutions designed for the modern digital landscape.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Solution Categories */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Solution Categories
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore our comprehensive range of technology solutions designed to address your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCategories.map((category, index) => (
=======
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
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution, index)               => (
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
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-6">
            {technologySolutions.map((tech, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.solutions.map((solution, solIndex) => (
                    <div key={solIndex} className="text-sm">
                      <div className="font-medium text-slate-900 dark:text-white">
                        {solution.name}
                      </div>
                      <div className="text-slate-500 dark:text-slate-400">
                        {solution.pricing}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Industry Solutions */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Specialized solutions tailored to the unique challenges and requirements of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredIndustries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center mr-4`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {industry.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {industry.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {industry.solutions.map((solution, solIndex) => (
                    <div key={solIndex} className="border-l-4 border-cyan-500 pl-4">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {solution.name}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                        {solution.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {solution.pricing}
                        </div>
                        <button className="text-cyan-600 hover:text-cyan-700 text-sm font-medium flex items-center gap-1">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Solutions;
