import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  DollarSign,
  Brain,
  Shield,
  TrendingUp,
  BarChart3,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Play,
  Download,
  FileText,
  Video,
  Lock,
  Globe,
  Cpu,
  Network,
  Server,
  Smartphone,
  Tablet,
  Monitor,
  Wifi,
  Bluetooth,
  Radio,
  Satellite,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  WifiIcon,
  BluetoothIcon,
  RadioIcon,
  SatelliteIcon,
  WifiOffIcon,
  SignalIcon,
  SignalHighIcon,
  SignalMediumIcon,
  SignalLowIcon,
  CreditCard,
  Banknote,
  PiggyBank,
  Calculator,
  LineChart,
  PieChart,
  Activity,
  Target,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  Settings,
  User,
  Building,
  Home,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bike,
  Walk,
  Run,
  Heart,
  Eye,
  Database,
  Cloud,
  Key,
  Fingerprint,
  QrCode,
  SmartphoneIcon,
  TabletIcon,
  MonitorIcon,
  Laptop,
  Desktop,
  Printer,
  Scanner,
  Camera,
  Microphone,
  Headphones,
  Speaker,
  Volume2,
  VolumeX,
  Mute,
  PlayIcon,
  PauseIcon,
  StopIcon,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  RotateCcw,
  RotateCw,
  Repeat,
  Shuffle,
  Volume1,
  Volume3,
  Volume4,
  Volume5,
  Volume6,
  Volume7,
  Volume8,
  Volume9,
  Volume10,
  Volume11,
  Volume12,
  Volume13,
  Volume14,
  Volume15,
  Volume16,
  Volume17,
  Volume18,
  Volume19,
  Volume20,
  Volume21,
  Volume22,
  Volume23,
  Volume24,
  Volume25,
  Volume26,
  Volume27,
  Volume28,
  Volume29,
  Volume30,
  Volume31,
  Volume32,
  Volume33,
  Volume34,
  Volume35,
  Volume36,
  Volume37,
  Volume38,
  Volume39,
  Volume40,
  Volume41,
  Volume42,
  Volume43,
  Volume44,
  Volume45,
  Volume46,
  Volume47,
  Volume48,
  Volume49,
  Volume50,
  Volume51,
  Volume52,
  Volume53,
  Volume54,
  Volume55,
  Volume56,
  Volume57,
  Volume58,
  Volume59,
  Volume60,
  Volume61,
  Volume62,
  Volume63,
  Volume64,
  Volume65,
  Volume66,
  Volume67,
  Volume68,
  Volume69,
  Volume70,
  Volume71,
  Volume72,
  Volume73,
  Volume74,
  Volume75,
  Volume76,
  Volume77,
  Volume78,
  Volume79,
  Volume80,
  Volume81,
  Volume82,
  Volume83,
  Volume84,
  Volume85,
  Volume86,
  Volume87,
  Volume88,
  Volume89,
  Volume90,
  Volume91,
  Volume92,
  Volume93,
  Volume94,
  Volume95,
  Volume96,
  Volume97,
  Volume98,
  Volume99,
  Volume100
} from 'lucide-react';
import { SEO } from '../../components/SEO';

const FinancialSolutions: React.FC = () => {
  const solutions = [
    {
      id: 'ai-trading-platforms',
      name: 'AI Trading Platforms',
      description: 'Intelligent trading systems powered by advanced AI algorithms for optimal market performance',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Algorithmic Trading',
        'Market Analysis',
        'Risk Management',
        'Portfolio Optimization',
        'Real-time Monitoring',
        'Automated Execution'
      ],
      benefits: [
        'Increased trading efficiency',
        'Reduced human error',
        '24/7 market monitoring',
        'Optimized returns'
      ]
    },
    {
      id: 'risk-assessment',
      name: 'Risk Assessment',
      description: 'AI-powered risk analysis and management for comprehensive financial security',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      features: [
        'Credit Risk Analysis',
        'Market Risk Assessment',
        'Operational Risk Management',
        'Compliance Monitoring',
        'Stress Testing',
        'Early Warning Systems'
      ],
      benefits: [
        'Proactive risk identification',
        'Reduced financial losses',
        'Regulatory compliance',
        'Improved decision making'
      ]
    },
    {
      id: 'fraud-detection',
      name: 'Fraud Detection',
      description: 'Advanced fraud detection systems using machine learning and behavioral analysis',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-500',
      features: [
        'Real-time Monitoring',
        'Behavioral Analysis',
        'Pattern Recognition',
        'Anomaly Detection',
        'Transaction Screening',
        'Alert Management'
      ],
      benefits: [
        'Real-time fraud prevention',
        'Reduced false positives',
        'Lower fraud losses',
        'Enhanced security'
      ]
    },
    {
      id: 'customer-analytics',
      name: 'Customer Analytics',
      description: 'Comprehensive customer insights and behavior analysis for personalized financial services',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Customer Segmentation',
        'Behavioral Analysis',
        'Predictive Modeling',
        'Churn Prevention',
        'Cross-selling Opportunities',
        'Personalization Engine'
      ],
      benefits: [
        'Improved customer retention',
        'Increased revenue per customer',
        'Better product recommendations',
        'Enhanced customer experience'
      ]
    },
    {
      id: 'regulatory-compliance',
      name: 'Regulatory Compliance',
      description: 'Automated compliance management for financial regulations and reporting requirements',
      icon: CheckCircle2,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'KYC/AML Compliance',
        'Regulatory Reporting',
        'Audit Trails',
        'Policy Management',
        'Training Tracking',
        'Risk Assessment'
      ],
      benefits: [
        'Automated compliance',
        'Reduced regulatory risk',
        'Audit readiness',
        'Cost savings'
      ]
    },
    {
      id: 'process-automation',
      name: 'Process Automation',
      description: 'Intelligent automation of financial processes for increased efficiency and accuracy',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Document Processing',
        'Workflow Automation',
        'Data Entry Automation',
        'Report Generation',
        'Approval Workflows',
        'Integration Management'
      ],
      benefits: [
        'Increased efficiency',
        'Reduced manual errors',
        'Faster processing times',
        'Cost optimization'
      ]
    }
  ];

  const useCases = [
    {
      title: 'Digital Banking Transformation',
      description: 'Complete digital transformation of traditional banking operations with AI-powered solutions.',
      metrics: ['40% reduction in operational costs', '60% faster loan processing', '85% customer satisfaction improvement']
    },
    {
      title: 'Investment Portfolio Optimization',
      description: 'AI-driven portfolio management and optimization for institutional and retail investors.',
      metrics: ['25% better risk-adjusted returns', '30% reduction in portfolio volatility', '50% faster rebalancing']
    },
    {
      title: 'Regulatory Compliance Automation',
      description: 'Automated compliance management reducing manual effort and ensuring regulatory adherence.',
      metrics: ['90% reduction in compliance time', '95% accuracy in reporting', '70% cost savings']
    }
  ];

  const technologies = [
    { name: 'Machine Learning', icon: Brain, description: 'Advanced ML algorithms for pattern recognition and prediction' },
    { name: 'Natural Language Processing', icon: FileText, description: 'AI-powered text analysis for financial documents' },
    { name: 'Predictive Analytics', icon: BarChart3, description: 'Data-driven forecasting and trend analysis' },
    { name: 'Blockchain', icon: Lock, description: 'Secure, transparent financial transactions and record-keeping' },
    { name: 'Cloud Computing', icon: Cloud, description: 'Scalable infrastructure for financial applications' },
    { name: 'API Integration', icon: Network, description: 'Seamless integration with existing financial systems' }
  ];

  const industries = [
    { name: 'Commercial Banking', icon: Building, description: 'Retail and commercial banking solutions' },
    { name: 'Investment Banking', icon: TrendingUp, description: 'Investment and capital markets solutions' },
    { name: 'Insurance', icon: Shield, description: 'Risk assessment and claims processing' },
    { name: 'FinTech', icon: Zap, description: 'Innovative financial technology solutions' },
    { name: 'Asset Management', icon: PieChart, description: 'Portfolio management and optimization' },
    { name: 'Regulatory Bodies', icon: CheckCircle2, description: 'Compliance and reporting solutions' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Financial Solutions - Zion Tech Group"
        description="Revolutionize financial operations with our AI-powered solutions. From trading platforms to risk management, we deliver innovative technology that drives growth and efficiency in financial services."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 bg-clip-text text-transparent">
                {' '}Financial Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform financial services with cutting-edge AI technology. Optimize trading, manage risk, 
              detect fraud, and ensure compliance with our comprehensive financial solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              >
                Get Financial Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered financial solutions address every aspect of modern financial services, 
              from trading and risk management to compliance and customer analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Real-World Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our financial solutions are transforming financial services and driving business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="space-y-3">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-400">
                      <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our financial solutions leverage the latest advancements in AI, machine learning, and emerging technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {tech.name}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Financial Industry Focus
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are designed specifically for the unique needs and challenges of the financial services industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {industry.name}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Financial Services?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading financial institutions that are already using our AI solutions to optimize operations and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              >
                Get Financial Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FinancialSolutions;