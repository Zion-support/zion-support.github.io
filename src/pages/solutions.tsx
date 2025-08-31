<<<<<<< HEAD
=======
import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Solutions - Zion Tech Group" 
        description="Explore industry and capability solutions including enterprise and healthcare."
      />
      <div className="container-responsive py-16">
        <h1 className="text-4xl font-bold mb-6">Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/solutions/enterprise" className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-cyan-400 transition">Enterprise</Link>
          <Link to="/solutions/healthcare" className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-cyan-400 transition">Healthcare</Link>
        </div>
      </div>
    </div>
  );
};
export default Solutions;
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
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
 } from 'lucide-react';
import { SEO  } from '@/components/SEO';
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
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
<<<<<<< HEAD

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

  const filteredIndustries = selectedCategory === 'all'
    ? industrySolutions
    : industrySolutions.filter(ind => 
        ind.solutions.some(sol => 
          sol.name.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      );

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
      'Improved scalability';
    ],;
    price: 'Starting at $1,800/month',;
    implementation: '8-16 weeks',;
    icon: Cloud,;
    color: 'from-blue-500 to-cyan-600';
  };
];
export default function Solutions() {
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
  const filteredSolutions = featuredSolutions.filter(solution => {;
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <div className = "min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            </div>
          </div>
        </section>
      {/* Solution Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Solution Categories</h2>;
            <p className="text-zion-slate-light text-lg">Explore our comprehensive range of technology solutions</p>;
          </motion.div>;
;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {solutionCategories.map((category, index) => {;
              const IconComponent = category.icon;
              return (
                <motion.div
                  key = {category.id}
                  initial = {
  { opacity: 0,
  y: 20 
}}
                  whileInView = {
  { opacity: 1,
  y: 0 
}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
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
                      <div className="mt-4 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">;
                        <span className="text-sm font-medium">Learn More</span>;
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />;
                      </div>;
                    </div>;
                  </Link>;
                </motion.div>;
              );
            })}
          </div>
        </div>
      </section>
      {/* Industry Solutions */}
      <section className = "py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Industry-Specific Solutions</h2>;
            <p className="text-zion-slate-light text-lg">Tailored solutions designed for your industry's unique challenges</p>;
          </motion.div>;
;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {industrySolutions.map((industry, index) => {;
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key = {industry.industry}
                  initial = {
  { opacity: 0,
  y: 20 
}}
                  whileInView = {
  { opacity: 1,
  y: 0 
}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
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
                      className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300";
                    >;
                      View {industry.industry} Solutions;
                      <ArrowRight className="ml-2 h-4 w-4" />;
                    </Link>;
                  </div>;
                </motion.div>;
              );
            })}
          </div>
        </div>
      </section>
      {/* Featured Solutions */}
      <section className = "py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >;
            <h2 className="text-3xl font-bold text-white mb-4">Featured Solutions</h2>;
            <p className="text-zion-slate-light text-lg">Our most popular and impactful technology solutions</p>;
          </motion.div>;
;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {filteredSolutions.map((solution, index) => {;
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key = {solution.id}
                  initial = {
  { opacity: 0,
  y: 20 
}}
                  whileInView = {
  { opacity: 1,
  y: 0 
}}
                  transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"
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
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                      Learn More;
                      <ArrowRight className="ml-2 h-4 w-4" />;
                    </Link>;
                  </div>;
                </motion.div>;
              );
            })}
          </div>
        </motion.div>
      {/* CTA Section */}
      <section className = "py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
<<<<<<< HEAD
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
=======
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
                View Case Studies;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
