import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Zap,
  Target,
  Users,
  BarChart3,
  Shield,
  Heart,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Eye,
  Lock,
  Cloud,
  Activity,
  Code,
  Database,
  Network,
  Server,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

export function AISolutionsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const aiServices = [
    {
      category: 'AI Business Intelligence',
      services: [
        {
          title: 'AI Business Intelligence Platform',
          description: 'Advanced analytics and business intelligence powered by artificial intelligence',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
          price: '$2,500',
          duration: '4-6 weeks',
          icon: BarChart3,
          href: '/services/ai-business-intelligence'
        },
        {
          title: 'AI Sales Copilot',
          description: 'Intelligent sales automation and lead management system',
          features: ['Lead Scoring', 'Sales Forecasting', 'Pipeline Management', 'Performance Analytics'],
          price: '$1,800',
          duration: '3-4 weeks',
          icon: Users,
          href: '/services/ai-sales-copilot'
        },
        {
          title: 'AI Marketing Automation',
          description: 'Smart marketing campaigns and customer engagement automation',
          features: ['Campaign Optimization', 'Customer Segmentation', 'A/B Testing', 'ROI Tracking'],
          price: '$2,200',
          duration: '4-5 weeks',
          icon: TrendingUp,
          href: '/services/ai-marketing-automation'
        }
      ]
    },
    {
      category: 'AI Healthcare Solutions',
      services: [
        {
          title: 'AI Healthcare Analytics Platform',
          description: 'Comprehensive healthcare data analysis and patient insights',
          features: ['Patient Risk Assessment', 'Treatment Optimization', 'Clinical Decision Support', 'Population Health'],
          price: '$3,500',
          duration: '6-8 weeks',
          icon: Heart,
          href: '/services/ai-healthcare-analytics-platform'
        },
        {
          title: 'AI Healthcare Diagnostics',
          description: 'AI-powered medical imaging and diagnostic assistance',
          features: ['Image Analysis', 'Disease Detection', 'Diagnostic Accuracy', 'Radiology Support'],
          price: '$4,200',
          duration: '8-10 weeks',
          icon: Eye,
          href: '/services/ai-healthcare-diagnostics'
        }
      ]
    },
    {
      category: 'AI Development & DevOps',
      services: [
        {
          title: 'AI DevOps Automation Platform',
          description: 'Intelligent CI/CD and deployment automation',
          features: ['Automated Testing', 'Deployment Optimization', 'Performance Monitoring', 'Error Prediction'],
          price: '$2,800',
          duration: '5-6 weeks',
          icon: Cpu,
          href: '/services/ai-devops-automation-platform'
        },
        {
          title: 'AI Code Review & Security',
          description: 'Automated code analysis and security vulnerability detection',
          features: ['Code Quality Analysis', 'Security Scanning', 'Performance Optimization', 'Best Practices'],
          price: '$1,500',
          duration: '2-3 weeks',
          icon: Shield,
          href: '/services/ai-code-review-security'
        },
        {
          title: 'AI Project Management Platform',
          description: 'Intelligent project planning and resource optimization',
          features: ['Task Automation', 'Resource Allocation', 'Risk Assessment', 'Progress Tracking'],
          price: '$2,000',
          duration: '3-4 weeks',
          icon: Target,
          href: '/services/ai-project-management-platform'
        }
      ]
    },
    {
      category: 'AI Content & Communication',
      services: [
        {
          title: 'AI Content Creation Studio',
          description: 'Automated content generation and optimization platform',
          features: ['Content Generation', 'SEO Optimization', 'Brand Consistency', 'Performance Analytics'],
          price: '$1,800',
          duration: '3-4 weeks',
          icon: BookOpen,
          href: '/services/ai-content-creation'
        },
        {
          title: 'AI Customer Support Automation',
          description: 'Intelligent customer service and support automation',
          features: ['Chatbot Integration', 'Ticket Routing', 'Knowledge Base', 'Customer Satisfaction'],
          price: '$2,200',
          duration: '4-5 weeks',
          icon: Users,
          href: '/services/ai-customer-support-automation'
        },
        {
          title: 'AI Auto Email Responder',
          description: 'Smart email management and automated response system',
          features: ['Email Classification', 'Auto-Response', 'Priority Sorting', 'Sentiment Analysis'],
          price: '$1,200',
          duration: '2-3 weeks',
          icon: Mail,
          href: '/services/ai-auto-email-responder'
        }
      ]
    },
    {
      category: 'AI Financial Solutions',
      services: [
        {
          title: 'AI Financial Trading Platform',
          description: 'Intelligent trading algorithms and market analysis',
          features: ['Algorithmic Trading', 'Risk Management', 'Market Analysis', 'Portfolio Optimization'],
          price: '$5,000',
          duration: '8-12 weeks',
          icon: TrendingUp,
          href: '/services/ai-financial-trading-platform'
        },
        {
          title: 'AI Supply Chain Optimization',
          description: 'Intelligent supply chain management and optimization',
          features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Cost Reduction'],
          price: '$3,800',
          duration: '6-8 weeks',
          icon: Network,
          href: '/services/ai-supply-chain-optimization'
        }
      ]
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Globe },
    { id: 'services', name: 'Services', icon: Zap },
    { id: 'benefits', name: 'Benefits', icon: Star },
    { id: 'process', name: 'Process', icon: Play },
    { id: 'pricing', name: 'Pricing', icon: DollarSign }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline workflows',
      icon: Zap,
      color: 'text-cyan-400'
    },
    {
      title: 'Better Decision Making',
      description: 'Data-driven insights and predictive analytics',
      icon: Brain,
      color: 'text-blue-400'
    },
    {
      title: 'Cost Reduction',
      description: 'Optimize operations and reduce manual overhead',
      icon: DollarSign,
      color: 'text-green-400'
    },
    {
      title: 'Improved Accuracy',
      description: 'Reduce human error and increase precision',
      icon: Target,
      color: 'text-purple-400'
    },
    {
      title: 'Scalability',
      description: 'Grow your business without proportional cost increase',
      icon: TrendingUp,
      color: 'text-orange-400'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead with cutting-edge AI technology',
      icon: Star,
      color: 'text-yellow-400'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Analyze your business needs and current infrastructure',
      icon: Eye,
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Design custom AI solution architecture and roadmap',
      icon: Lightbulb,
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build and thoroughly test the AI solution',
      icon: Code,
      duration: '3-8 weeks'
    },
    {
      step: '04',
      title: 'Deployment & Training',
      description: 'Deploy the solution and train your team',
      icon: Rocket,
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Support & Optimization',
      description: 'Ongoing support and continuous improvement',
      icon: Shield,
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>AI-Powered Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {' '}AI Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to automate processes, gain insights, 
                and drive innovation across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center space-x-2 border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200"
                >
                  <span>View Pricing</span>
                  <DollarSign className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-cyan-500 text-cyan-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Overview Content */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Comprehensive AI Solutions for Modern Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our AI solutions are designed to address the most pressing challenges facing 
                businesses today. From automation to predictive analytics, we provide the tools 
                you need to stay competitive in an AI-driven world.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/30 transition-all duration-200"
                >
                  <div className={`w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Our AI Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of AI-powered services designed to transform 
                every aspect of your business operations.
              </p>
            </div>

            {aiServices.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-6">
                <h3 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                      className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/30 transition-all duration-200 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-sm text-gray-400">{service.duration}</div>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link
                        to={service.href}
                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-200"
                      >
                        <span className="text-sm font-medium">Learn More</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the transformative benefits that our AI solutions bring to your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex space-x-4"
                >
                  <div className={`w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'process' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Our AI Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful AI implementation and maximum ROI.
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Transparent AI Solution Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Competitive pricing for enterprise-grade AI solutions with flexible deployment options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$1,500</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Basic AI Integration</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Standard Support</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>2-3 Week Delivery</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Get Started
                </Link>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-8 rounded-lg border border-cyan-500/30 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$3,500</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Advanced AI Features</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>4-6 Week Delivery</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Custom Training</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$8,000+</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Full AI Suite</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>24/7 Support</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>8-12 Week Delivery</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Dedicated Team</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive innovation and growth in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center space-x-2 border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200"
              >
                <span>View Full Pricing</span>
                <DollarSign className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}