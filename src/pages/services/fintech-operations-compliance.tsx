import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Database, 
  BarChart3, 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  FileText,
  Search,
  Clock,
  Target,
  Lightbulb,
  Smartphone,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Users,
  Zap,
  Cpu,
  Network,
  Atom,
  CreditCard,
  Building2,
  Gauge,
  Activity,
  LineChart,
  PieChart,
  TargetIcon,
  LightbulbIcon,
  ShieldIcon,
  SmartphoneIcon,
  CodeIcon,
  ServerIcon,
  ChipIcon,
  WifiIcon,
  ShieldCheckIcon,
  BotIcon,
  GitForkIcon,
  EyeIcon,
  SparklesIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  FileTextIcon,
  SearchIcon,
  ClockIcon,
  DollarSignIcon,
  TargetIcon as TargetIcon2,
  LightbulbIcon as LightbulbIcon2,
  ShieldIcon as ShieldIcon2,
  SmartphoneIcon as SmartphoneIcon2,
  CodeIcon as CodeIcon2,
  ServerIcon as ServerIcon2,
  ChipIcon as ChipIcon2,
  WifiIcon as WifiIcon2,
  ShieldCheckIcon as ShieldCheckIcon2,
  BotIcon as BotIcon2,
  GitForkIcon as GitForkIcon2,
  EyeIcon as EyeIcon2,
  SparklesIcon as SparklesIcon2,
  PhoneIcon as PhoneIcon2,
  MailIcon as MailIcon2,
  MapPinIcon as MapPinIcon2,
  MessageSquareIcon as MessageSquareIcon2,
  FileTextIcon as FileTextIcon2,
  SearchIcon as SearchIcon2,
  ClockIcon as ClockIcon2,
  DollarSignIcon as DollarSignIcon2,
  Globe,
  Globe as GlobeIcon
} from 'lucide-react';

const FintechOperationsCompliance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      category: "Financial Operations Management",
      items: [
        "Payment Processing & Settlement",
        "Treasury Management Systems",
        "Cash Flow Optimization",
        "Multi-Currency Operations",
        "Financial Risk Management",
        "Portfolio Management Tools"
      ]
    },
    {
      category: "Regulatory Compliance",
      items: [
        "KYC/AML Compliance Automation",
        "Regulatory Reporting (SEC, FINRA, etc.)",
        "Compliance Monitoring & Alerts",
        "Audit Trail Management",
        "Regulatory Change Management",
        "Compliance Risk Assessment"
      ]
    },
    {
      category: "AI-Powered Financial Analytics",
      items: [
        "Predictive Financial Modeling",
        "Fraud Detection & Prevention",
        "Credit Risk Assessment",
        "Market Analysis & Forecasting",
        "Portfolio Optimization",
        "Real-time Financial Insights"
      ]
    },
    {
      category: "Security & Risk Management",
      items: [
        "Multi-Factor Authentication",
        "Encryption & Data Protection",
        "Fraud Prevention Systems",
        "Risk Scoring & Monitoring",
        "Incident Response Management",
        "Business Continuity Planning"
      ]
    },
    {
      category: "Integration & APIs",
      items: [
        "Banking System Integration",
        "Payment Gateway APIs",
        "Accounting Software Integration",
        "Third-party Financial Services",
        "Real-time Data Synchronization",
        "Custom API Development"
      ]
    },
    {
      category: "Reporting & Analytics",
      items: [
        "Financial Performance Dashboards",
        "Regulatory Compliance Reports",
        "Custom Financial Reports",
        "Real-time Analytics",
        "Predictive Insights",
        "Automated Reporting"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Fintech Starter",
      price: "$4,999",
      period: "/month",
      description: "Essential financial operations for small fintech companies",
      features: [
        "Basic Financial Operations Management",
        "KYC/AML Compliance Tools",
        "Financial Dashboard",
        "Email Support",
        "Integration with 25+ Financial Platforms",
        "Monthly Compliance Reports"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Fintech Professional",
      price: "$12,999",
      period: "/month",
      description: "Advanced financial solutions for growing fintech companies",
      features: [
        "Comprehensive Financial Operations",
        "Advanced Compliance Management",
        "AI-Powered Analytics",
        "Priority Support (4-hour response)",
        "Integration with 50+ Financial Platforms",
        "Custom Financial Templates",
        "Advanced Security Features",
        "API Access & Webhooks"
      ],
      popular: true,
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "Enterprise Fintech",
      price: "$24,999",
      period: "/month",
      description: "Complete financial infrastructure for major fintech organizations",
      features: [
        "Unlimited Financial Operations",
        "Enterprise Compliance Management",
        "Advanced AI Analytics",
        "Custom Financial Development",
        "24/7 Dedicated Support",
        "Integration with 100+ Financial Platforms",
        "White-label Solutions",
        "On-premise Deployment",
        "SLA Guarantees",
        "Custom Compliance Frameworks"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Reduce operational costs and improve financial performance"
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "Ensure regulatory compliance and reduce compliance risks"
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Scale operations efficiently and support business growth"
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Automate manual processes and improve efficiency"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Operate globally with multi-currency and compliance support"
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Leverage AI and advanced technology for competitive advantage"
    }
  ];

  const useCases = [
    {
      industry: "Digital Banking",
      description: "Manage digital banking operations, compliance, and customer experience",
      results: "99.9% uptime, 40% cost reduction, 100% compliance rate"
    },
    {
      industry: "Payment Processing",
      description: "Process payments, manage fraud, and ensure compliance",
      results: "99.99% transaction success, 60% fraud reduction, real-time processing"
    },
    {
      industry: "Investment Management",
      description: "Portfolio management, risk assessment, and regulatory compliance",
      results: "25% portfolio optimization, 100% regulatory compliance, automated reporting"
    },
    {
      industry: "Lending & Credit",
      description: "Credit assessment, risk management, and compliance automation",
      results: "50% faster credit decisions, 30% risk reduction, automated compliance"
    },
    {
      industry: "Cryptocurrency & DeFi",
      description: "Crypto operations, compliance, and risk management",
      results: "Real-time monitoring, regulatory compliance, automated risk management"
    }
  ];

  const complianceFrameworks = [
    {
      name: "Bank Secrecy Act (BSA)",
      description: "Anti-money laundering regulations",
      requirements: "Customer identification, transaction monitoring, suspicious activity reporting",
      impact: "Critical for all financial institutions"
    },
    {
      name: "Know Your Customer (KYC)",
      description: "Customer identification and verification",
      requirements: "Identity verification, risk assessment, ongoing monitoring",
      impact: "Essential for customer onboarding and compliance"
    },
    {
      name: "Payment Card Industry (PCI DSS)",
      description: "Credit card security standards",
      requirements: "Data security, access control, vulnerability management",
      impact: "Required for credit card processing"
    },
    {
      name: "General Data Protection Regulation (GDPR)",
      description: "European data protection regulation",
      requirements: "Data privacy, consent management, data rights",
      impact: "Global impact on data handling"
    },
    {
      name: "Sarbanes-Oxley (SOX)",
      description: "Corporate financial reporting standards",
      requirements: "Financial controls, audit trails, internal controls",
      impact: "Required for public companies"
    }
  ];

  const financialMetrics = [
    {
      metric: "Transaction Success Rate",
      description: "Percentage of successful financial transactions",
      target: "99.99%",
      current: "99.97%",
      improvement: "0.02% increase needed"
    },
    {
      metric: "Compliance Rate",
      description: "Regulatory compliance percentage",
      target: "100%",
      current: "99.8%",
      improvement: "0.2% increase needed"
    },
    {
      metric: "Fraud Detection Rate",
      description: "Percentage of fraudulent transactions detected",
      target: "95%",
      current: "92%",
      improvement: "3% increase needed"
    },
    {
      metric: "Processing Speed",
      description: "Average transaction processing time",
      target: "<100ms",
      current: "120ms",
      improvement: "20ms reduction needed"
    },
    {
      metric: "Cost per Transaction",
      description: "Operational cost per financial transaction",
      target: "$0.01",
      current: "$0.015",
      improvement: "$0.005 reduction needed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-violet-500 rounded-3xl p-6 mx-auto mb-8">
              <DollarSign className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Financial Operations
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                & Compliance Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your financial operations with our comprehensive AI-powered platform. 
              From payment processing to regulatory compliance, we're enabling the future of fintech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { id: 'overview', name: 'Overview', icon: Eye },
            { id: 'features', name: 'Features', icon: CheckCircle },
            { id: 'pricing', name: 'Pricing', icon: DollarSign },
            { id: 'benefits', name: 'Benefits', icon: Star },
            { id: 'compliance', name: 'Compliance', icon: Shield },
            { id: 'metrics', name: 'Financial Metrics', icon: BarChart3 },
            { id: 'use-cases', name: 'Use Cases', icon: Target },
            { id: 'contact', name: 'Contact', icon: MessageSquare }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">The Future of Financial Technology</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our AI Financial Operations & Compliance Platform represents the next generation of 
                fintech infrastructure. Combining cutting-edge AI, advanced security, and comprehensive 
                compliance to revolutionize how financial services operate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl p-4 mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-violet-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Platform Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full p-4 mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Financial Operations</h4>
                  <p className="text-gray-300">Comprehensive financial management and automation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Compliance & Security</h4>
                  <p className="text-gray-300">Regulatory compliance and advanced security features</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full p-4 mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">AI Analytics</h4>
                  <p className="text-gray-300">AI-powered insights and predictive analytics</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Financial Features</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our platform provides everything you need for modern financial operations, from 
                payment processing to regulatory compliance and AI-powered analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {features.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg p-2 mr-3">
                      <DollarSign className="w-4 h-4 text-white" />
                    </div>
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Financial Technology Investment</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the plan that best fits your financial technology needs. All plans include our core 
                financial operations features with different levels of customization and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-gray-800 rounded-2xl p-8 ${
                    plan.popular ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-violet-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-white mb-1">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-6">
                Need a custom solution? Contact us for enterprise pricing and custom development.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </a>
            </div>
          </motion.div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our AI Financial Operations & Compliance Platform delivers measurable results that transform 
                financial operations and enable organizations to achieve their fintech goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 flex items-start"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl p-4 mr-4 flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-violet-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Financial Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">99.99%</div>
                  <p className="text-gray-300">Transaction Success Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                  <p className="text-gray-300">Cost Reduction</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-violet-400 mb-2">100%</div>
                  <p className="text-gray-300">Compliance Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Compliance Tab */}
        {activeTab === 'compliance' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Regulatory Compliance</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Stay compliant with all major financial regulations and standards. Our platform ensures 
                your operations meet regulatory requirements while maintaining operational efficiency.
              </p>
            </div>

            <div className="space-y-6">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{framework.name}</h3>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl p-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{framework.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-2">Requirements:</h4>
                      <p className="text-gray-300 text-sm">{framework.requirements}</p>
                    </div>
                    <div>
                      <h4 className="text-violet-400 font-semibold mb-2">Impact:</h4>
                      <p className="text-gray-300 text-sm">{framework.impact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-violet-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Compliance Automation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Automated Monitoring</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Real-time compliance monitoring</li>
                    <li>• Automated regulatory reporting</li>
                    <li>• Compliance risk alerts</li>
                    <li>• Audit trail automation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Regulatory Updates</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Regulatory change notifications</li>
                    <li>• Compliance requirement updates</li>
                    <li>• Impact assessment tools</li>
                    <li>• Implementation guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Financial Metrics Tab */}
        {activeTab === 'metrics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Key Financial Metrics</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Track and measure your financial operations performance with our comprehensive 
                metrics dashboard and AI-powered insights.
              </p>
            </div>

            <div className="space-y-6">
              {financialMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{metric.metric}</h3>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl p-3">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{metric.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-2">Target:</h4>
                      <p className="text-gray-300 text-sm">{metric.target}</p>
                    </div>
                    <div>
                      <h4 className="text-violet-400 font-semibold mb-2">Current:</h4>
                      <p className="text-gray-300 text-sm">{metric.current}</p>
                    </div>
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Improvement Needed:</h4>
                      <p className="text-gray-300 text-sm">{metric.improvement}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Use Cases Tab */}
        {activeTab === 'use-cases' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our platform has been successfully implemented across various fintech industries, delivering 
                measurable results and transforming financial operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="text-green-400 font-semibold mb-2">Results Achieved:</h4>
                    <p className="text-green-300 text-sm">{useCase.results}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Transform Your Financial Operations</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Ready to revolutionize your financial technology operations? Contact our team to 
                schedule a personalized demo and discuss your specific fintech needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                        +1 (302) 464-0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Address</h4>
                      <p className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-blue-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Website</h4>
                      <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                        https://ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-violet-600/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Why Choose Zion Tech Group?</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Industry-leading fintech expertise</li>
                    <li>• Proven track record of successful implementations</li>
                    <li>• 24/7 technical support and monitoring</li>
                    <li>• Competitive pricing with premium fintech features</li>
                    <li>• Global network of financial technology partners</li>
                    <li>• Future-proof fintech technology solutions</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Request a Demo</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Fintech Industry</label>
                    <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select your fintech industry</option>
                      <option value="digital-banking">Digital Banking</option>
                      <option value="payment-processing">Payment Processing</option>
                      <option value="investment-management">Investment Management</option>
                      <option value="lending-credit">Lending & Credit</option>
                      <option value="cryptocurrency-defi">Cryptocurrency & DeFi</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your fintech operations and compliance needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageSquare className="w-5 h-5 inline mr-2" />
                    Request Demo
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600/20 to-violet-600/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Financial Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
               Join the organizations already transforming their financial operations with our 
               AI Financial Operations & Compliance Platform. The future of fintech is here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FintechOperationsCompliance;