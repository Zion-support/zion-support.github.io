import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Clock, 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  BarChart3,
  Bot,
  Cpu,
  Database,
  Lock,
  Network,
  Smartphone,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  GitFork,
  Eye,
  Sparkles,
  MessageSquare as MessageSquareIcon,
  FileText,
  Search,
  Clock as ClockIcon,
  DollarSign,
  Target,
  Lightbulb,
  ShieldX,
  Globe2,
  CpuIcon,
  Network2,
  SmartphoneIcon,
  BarChart3Icon,
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
  MessageSquareIcon as MessageSquareIcon2,
  FileTextIcon,
  SearchIcon,
  ClockIcon as ClockIcon2,
  DollarSignIcon,
  TargetIcon,
  LightbulbIcon,
  ShieldXIcon,
  Globe2Icon
} from 'lucide-react';

const AIAutonomousBusinessOperations: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      category: "AI Customer Service",
      items: [
        "24/7 Multi-language Customer Support",
        "Intelligent Ticket Routing & Prioritization",
        "Automated FAQ & Knowledge Base Management",
        "Sentiment Analysis & Customer Satisfaction Tracking",
        "Seamless Human Handoff for Complex Issues",
        "Integration with CRM Systems (Salesforce, HubSpot)"
      ]
    },
    {
      category: "Sales Automation",
      items: [
        "AI-Powered Lead Scoring & Qualification",
        "Automated Sales Pipeline Management",
        "Intelligent Follow-up Scheduling",
        "Sales Performance Analytics & Forecasting",
        "Cross-selling & Upselling Recommendations",
        "Integration with Sales Tools (Pipedrive, Close)"
      ]
    },
    {
      category: "Marketing Operations",
      items: [
        "Automated Campaign Creation & Management",
        "AI-Driven Content Personalization",
        "Multi-channel Marketing Orchestration",
        "ROI Tracking & Performance Optimization",
        "A/B Testing & Conversion Rate Optimization",
        "Integration with Marketing Platforms (Mailchimp, ActiveCampaign)"
      ]
    },
    {
      category: "Business Intelligence",
      items: [
        "Real-time Business Analytics Dashboard",
        "Predictive Analytics & Trend Forecasting",
        "Custom KPI & Metric Tracking",
        "Automated Report Generation",
        "Data Visualization & Insights",
        "Integration with BI Tools (Tableau, Power BI)"
      ]
    },
    {
      category: "Process Automation",
      items: [
        "Workflow Automation & Orchestration",
        "Document Processing & Management",
        "Approval Workflows & Compliance Tracking",
        "Task Assignment & Progress Monitoring",
        "Integration with 100+ Business Tools",
        "Custom Automation Rules & Triggers"
      ]
    },
    {
      category: "Security & Compliance",
      items: [
        "Enterprise-Grade Security Protocols",
        "SOC 2 Type II Compliance",
        "GDPR & Data Privacy Compliance",
        "Role-Based Access Control",
        "Audit Trail & Activity Logging",
        "Regular Security Updates & Penetration Testing"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small businesses starting their automation journey",
      features: [
        "Up to 5 AI Agents",
        "Basic Customer Service Automation",
        "Sales Pipeline Management",
        "Marketing Campaign Automation",
        "Standard Analytics Dashboard",
        "Email & Chat Support",
        "Integration with 25+ Tools"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$6,999",
      period: "/month",
      description: "Ideal for growing businesses with complex automation needs",
      features: [
        "Up to 20 AI Agents",
        "Advanced Customer Service AI",
        "Intelligent Sales Automation",
        "Multi-channel Marketing Orchestration",
        "Advanced Analytics & Reporting",
        "Priority Support (4-hour response)",
        "Integration with 50+ Tools",
        "Custom Workflow Automation",
        "API Access & Webhooks"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For large enterprises requiring maximum automation and customization",
      features: [
        "Unlimited AI Agents",
        "Full Autonomous Business Operations",
        "Custom AI Model Training",
        "Advanced Predictive Analytics",
        "White-label Solutions",
        "24/7 Dedicated Support",
        "Integration with 100+ Tools",
        "Custom Development & Integration",
        "On-premise Deployment Options",
        "SLA Guarantees"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "60% Cost Reduction",
      description: "Automate repetitive tasks and reduce operational costs significantly"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Your business never sleeps with AI agents working around the clock"
    },
    {
      icon: Users,
      title: "Scalable Growth",
      description: "Easily scale operations without proportional increase in human resources"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Make informed decisions with real-time analytics and insights"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security with SOC 2 compliance and regular audits"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Multi-language support for international business expansion"
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Automate customer support, order management, and marketing campaigns for online stores",
      results: "40% increase in customer satisfaction, 35% reduction in support costs"
    },
    {
      industry: "SaaS Companies",
      description: "Streamline customer onboarding, support, and retention with AI-powered automation",
      results: "50% faster customer onboarding, 25% improvement in retention rates"
    },
    {
      industry: "Financial Services",
      description: "Automate compliance monitoring, customer service, and risk assessment processes",
      results: "99.9% compliance accuracy, 60% faster risk assessment"
    },
    {
      industry: "Healthcare",
      description: "Automate appointment scheduling, patient communication, and administrative tasks",
      results: "30% reduction in administrative overhead, improved patient satisfaction"
    },
    {
      industry: "Manufacturing",
      description: "Automate supply chain management, quality control, and customer service",
      results: "25% improvement in supply chain efficiency, 20% reduction in defects"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-6 mx-auto mb-8">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Autonomous Business
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Operations Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with complete AI automation. Our platform handles customer service, 
              sales, marketing, and operations 24/7, reducing costs by 60% while improving efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
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
            { id: 'use-cases', name: 'Use Cases', icon: Target },
            { id: 'contact', name: 'Contact', icon: MessageSquare }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
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
              <h2 className="text-4xl font-bold text-white mb-6">Revolutionary Business Automation</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                The AI Autonomous Business Operations Platform is the most advanced business automation solution 
                available today. It combines cutting-edge AI technology with proven business processes to create 
                a truly autonomous business operation.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-4 mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">AI Analysis</h4>
                  <p className="text-gray-300">Our AI analyzes your business processes and identifies automation opportunities</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Automation Setup</h4>
                  <p className="text-gray-300">We configure AI agents and workflows to automate your business operations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Autonomous Operation</h4>
                  <p className="text-gray-300">Your business runs autonomously with AI agents handling all operations 24/7</p>
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
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Feature Set</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our platform includes everything you need to automate your entire business operation, 
                from customer service to financial management.
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
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-2 mr-3">
                      <Brain className="w-4 h-4 text-white" />
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
              <h2 className="text-4xl font-bold text-white mb-6">Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the plan that best fits your business needs. All plans include our core AI automation 
                features with different levels of customization and support.
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
                    plan.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
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
                Our AI Autonomous Business Operations Platform delivers measurable results that transform 
                your business operations and drive growth.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 mr-4 flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">ROI Calculator</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">60%</div>
                  <p className="text-gray-300">Cost Reduction</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <p className="text-gray-300">Operation Time</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">3-6 months</div>
                  <p className="text-gray-300">Payback Period</p>
                </div>
              </div>
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
                Our platform has been successfully implemented across various industries, 
                delivering measurable results and transforming business operations.
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
              <h2 className="text-4xl font-bold text-white mb-6">Get Started Today</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Ready to transform your business with AI automation? Contact our team to schedule 
                a personalized demo and discuss your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                        +1 (302) 464-0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Address</h4>
                      <p className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Website</h4>
                      <a href="https://ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                        https://ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Why Choose Zion Tech Group?</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Industry-leading AI and automation expertise</li>
                    <li>• Proven track record of successful implementations</li>
                    <li>• 24/7 technical support and maintenance</li>
                    <li>• Competitive pricing with premium features</li>
                    <li>• Global network of technology partners</li>
                    <li>• Future-proof technology solutions</li>
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
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Company Size</label>
                    <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Tell us about your automation needs and business goals..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
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
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the companies already transforming their operations with our AI Autonomous Business Operations Platform. 
              The future of business automation is here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
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

export default AIAutonomousBusinessOperations;