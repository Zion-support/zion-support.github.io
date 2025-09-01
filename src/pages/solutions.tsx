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

