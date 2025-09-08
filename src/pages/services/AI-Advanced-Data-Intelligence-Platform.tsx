import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Database, 
  BarChart3, 
  Zap, 
  Shield, 
  Cloud, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Lock,
  Network,
  Code,
  Server,
  Chip,
  Atom,
  Rocket,
  Target,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Satellite,
  Navigation,
  Telescope,
  Planet,
  Orbit,
  Signal,
  Wifi,
  DollarSign,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  Clock,
  UserCheck,
  Calculator,
  Wallet,
  Coins,
  Building2,
  Eye,
  Leaf,
  Factory,
  Car,
  Truck,
  Ship,
  Plane,
  Train,
  Cpu,
  HardDrive,
  Activity,
  Layers,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare,
  GitPullRequestClosed,
  GitBranchPlus,
  GitCommitPlus,
  GitPullRequestPlus,
  GitMergePlus,
  GitComparePlus,
  GitPullRequestClosedPlus,
  GitBranchMinus,
  GitCommitMinus,
  GitPullRequestMinus,
  GitMergeMinus,
  GitCompareMinus,
  GitPullRequestClosedMinus
} from 'lucide-react';

const AIAdvancedDataIntelligencePlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('enterprise');

  const features = [
    {
      category: 'Data Processing',
      items: [
        'Real-time data streaming and processing',
        'Multi-format data ingestion (JSON, XML, CSV, Parquet)',
        'Advanced ETL/ELT pipeline automation',
        'Data quality monitoring and validation',
        'Schema evolution and versioning',
        'Batch and stream processing capabilities'
      ]
    },
    {
      category: 'AI & Machine Learning',
      items: [
        'Automated ML model training and deployment',
        'Real-time prediction and scoring',
        'Model performance monitoring and A/B testing',
        'AutoML for feature engineering and selection',
        'Deep learning model optimization',
        'Natural language processing capabilities'
      ]
    },
    {
      category: 'Analytics & Visualization',
      items: [
        'Interactive dashboards and reports',
        'Real-time KPI monitoring',
        'Advanced statistical analysis',
        'Predictive analytics and forecasting',
        'Custom metric calculations',
        'Multi-dimensional data exploration'
      ]
    },
    {
      category: 'Security & Compliance',
      items: [
        'End-to-end data encryption',
        'Role-based access control (RBAC)',
        'Data lineage and audit trails',
        'GDPR and CCPA compliance',
        'SOC 2 Type II certification',
        'Zero-trust security architecture'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 100GB data processing',
        '5 AI models',
        'Basic analytics dashboard',
        'Email support',
        'Standard security features'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1TB data processing',
        '25 AI models',
        'Advanced analytics suite',
        'Priority support',
        'Enhanced security features',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'For large enterprises and organizations',
      features: [
        'Unlimited data processing',
        'Unlimited AI models',
        'Full analytics platform',
        '24/7 dedicated support',
        'Enterprise security features',
        'Custom development',
        'On-premise deployment option'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Automate data processing workflows and reduce manual effort by up to 80%'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Lower infrastructure costs and improve ROI with intelligent resource allocation'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with compliance certifications and audit trails'
    },
    {
      icon: Users,
      title: 'Better Decision Making',
      description: 'Real-time insights and predictive analytics for data-driven decisions'
    }
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      description: 'Fraud detection, risk assessment, and algorithmic trading',
      icon: DollarSign
    },
    {
      industry: 'Healthcare',
      description: 'Patient data analysis, drug discovery, and predictive diagnostics',
      icon: Users
    },
    {
      industry: 'Retail',
      description: 'Customer behavior analysis, inventory optimization, and demand forecasting',
      icon: ShoppingCart
    },
    {
      industry: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization',
      icon: Factory
    }
  ];

  return (
    <>
      <SEO 
        title="AI Advanced Data Intelligence Platform | Zion Tech Group"
        description="Transform your business with our comprehensive AI-powered data intelligence platform. Real-time analytics, machine learning, and advanced data processing capabilities."
        keywords="AI data intelligence, machine learning platform, data analytics, real-time processing, business intelligence"
        canonicalUrl="https://ziontechgroup.com/services/ai-advanced-data-intelligence-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                  <Brain className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">AI-Powered Platform</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  AI Advanced Data
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Intelligence Platform
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Unlock the full potential of your data with our comprehensive AI-powered platform. 
                  Real-time processing, advanced analytics, and machine learning capabilities that transform 
                  raw data into actionable intelligence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold">
                    Start Free Trial
                  </button>
                  <button className="px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                    Schedule Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Data Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build, deploy, and manage AI-powered data solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                    <Database className="w-6 h-6 text-blue-400 mr-3" />
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your business needs and scale as you grow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-blue-500/50 bg-blue-500/5' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business operations with intelligent data solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform delivers value across diverse industries and use cases
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>
                  </div>
                  <p className="text-gray-300">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12"
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Data Strategy?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of businesses already leveraging our AI-powered data intelligence platform
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold">
                    Start Free Trial
                  </button>
                  <button className="px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                    Contact Sales
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300 text-center">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAdvancedDataIntelligencePlatform;