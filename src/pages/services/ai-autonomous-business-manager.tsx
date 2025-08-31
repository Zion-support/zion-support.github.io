import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Users, BarChart3, Shield, Zap, Clock, 
  TrendingUp, CheckCircle, Star, Target, ArrowRight,
  Phone, Mail, MapPin, Globe, Cpu, Database, 
  Lock, Smartphone, Network, Server, Code, 
  Bot, GitFork, Eye, Sparkles, Award, DollarSign
} from 'lucide-react';

const AIAutonomousBusinessManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showPricingModal, setShowPricingModal] = useState(false);

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const features = [
    {
      category: "Autonomous Decision Making",
      items: [
        "AI-powered strategic planning and execution",
        "Real-time market analysis and adaptation",
        "Automated resource allocation optimization",
        "Intelligent risk assessment and mitigation",
        "Dynamic pricing and revenue optimization",
        "Predictive customer behavior analysis"
      ]
    },
    {
      category: "Business Intelligence",
      items: [
        "Real-time KPI monitoring and reporting",
        "Advanced predictive analytics",
        "Competitive intelligence gathering",
        "Market trend identification",
        "Performance benchmarking",
        "Custom dashboard creation"
      ]
    },
    {
      category: "Process Automation",
      items: [
        "End-to-end workflow automation",
        "Intelligent document processing",
        "Automated customer service",
        "Smart inventory management",
        "Financial process automation",
        "HR and recruitment automation"
      ]
    },
    {
      category: "Communication Management",
      items: [
        "Multi-channel communication orchestration",
        "AI-powered content generation",
        "Automated email marketing campaigns",
        "Social media management",
        "Customer relationship optimization",
        "Internal communication automation"
      ]
    }
  ];

  const benefits = [
    {
      title: "24/7 Autonomous Operation",
      description: "Your business runs continuously without human intervention, maximizing efficiency and opportunities.",
      icon: Clock,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data-Driven Decisions",
      description: "Every decision is based on real-time data analysis, ensuring optimal outcomes and reduced risk.",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cost Reduction",
      description: "Automation reduces operational costs by 30-50% while improving quality and consistency.",
      icon: DollarSign,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Scalable Growth",
      description: "The system automatically scales with your business, handling increased complexity and volume.",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Risk Mitigation",
      description: "Continuous monitoring and predictive analytics identify and prevent potential issues before they occur.",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of competitors with AI-powered insights and rapid adaptation to market changes.",
      icon: Award,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const useCases = [
    {
      industry: "E-commerce & Retail",
      applications: [
        "Automated inventory management",
        "Dynamic pricing optimization",
        "Customer behavior analysis",
        "Marketing campaign automation",
        "Supply chain optimization"
      ]
    },
    {
      industry: "Financial Services",
      applications: [
        "Risk assessment and management",
        "Portfolio optimization",
        "Fraud detection",
        "Customer service automation",
        "Compliance monitoring"
      ]
    },
    {
      industry: "Healthcare",
      applications: [
        "Patient scheduling optimization",
        "Resource allocation",
        "Predictive diagnostics",
        "Administrative automation",
        "Quality assurance"
      ]
    },
    {
      industry: "Manufacturing",
      applications: [
        "Production planning optimization",
        "Quality control automation",
        "Predictive maintenance",
        "Supply chain management",
        "Energy consumption optimization"
      ]
    }
  ];

  const technology = [
    {
      category: "AI & Machine Learning",
      technologies: [
        "GPT-4 Turbo with 128K context",
        "Claude 3.5 Sonnet",
        "Custom fine-tuned models",
        "Deep learning algorithms",
        "Natural language processing",
        "Computer vision capabilities"
      ]
    },
    {
      category: "Data Processing",
      technologies: [
        "Real-time data streaming",
        "Big data analytics",
        "Data warehousing",
        "ETL/ELT pipelines",
        "Data quality management",
        "Real-time analytics"
      ]
    },
    {
      category: "Integration & APIs",
      technologies: [
        "RESTful APIs",
        "GraphQL interfaces",
        "Webhook systems",
        "Third-party integrations",
        "Custom connectors",
        "API management platform"
      ]
    },
    {
      category: "Security & Compliance",
      technologies: [
        "End-to-end encryption",
        "Zero-trust architecture",
        "GDPR compliance tools",
        "SOC 2 Type II certification",
        "Regular security audits",
        "Data privacy protection"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$15,000",
      period: "/month",
      description: "Perfect for small businesses starting their AI journey",
      features: [
        "Basic autonomous decision making",
        "Core business intelligence",
        "Process automation (up to 10 workflows)",
        "Standard integrations",
        "Email support",
        "Monthly reporting"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$35,000",
      period: "/month",
      description: "Ideal for growing businesses with complex operations",
      features: [
        "Advanced autonomous decision making",
        "Comprehensive business intelligence",
        "Unlimited process automation",
        "Advanced integrations",
        "Priority support",
        "Real-time reporting",
        "Custom dashboards",
        "API access"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$75,000",
      period: "/month",
      description: "For large enterprises requiring maximum automation",
      features: [
        "Full autonomous business management",
        "Enterprise-grade intelligence",
        "Custom AI model development",
        "White-label solutions",
        "Dedicated support team",
        "Custom integrations",
        "Advanced analytics",
        "Multi-tenant architecture"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Autonomous Business Manager
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                AI Autonomous
              </span>
              <br />
              <span className="text-white">Business Manager</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with a fully autonomous AI system that manages every aspect 
              of your operations, from decision-making to execution, 24/7 without human intervention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowPricingModal(true)}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </button>
              <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "ROI Improvement", value: "300%+", icon: TrendingUp },
              { label: "Cost Reduction", value: "30-50%", icon: DollarSign },
              { label: "Efficiency Gain", value: "80%+", icon: Zap },
              { label: "Decision Speed", value: "1000x", icon: Clock }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center"
              >
                <metric.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'overview', name: 'Overview', icon: Eye },
              { id: 'features', name: 'Features', icon: CheckCircle },
              { id: 'benefits', name: 'Benefits', icon: Star },
              { id: 'use-cases', name: 'Use Cases', icon: Target },
              { id: 'technology', name: 'Technology', icon: Cpu },
              { id: 'pricing', name: 'Pricing', icon: DollarSign }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  The Future of Business Management
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Our AI Autonomous Business Manager is a revolutionary system that completely 
                  transforms how businesses operate. It combines cutting-edge artificial intelligence, 
                  machine learning, and automation to create a self-managing business ecosystem.
                </p>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  From strategic decision-making to daily operations, the system continuously 
                  learns, adapts, and optimizes every aspect of your business, ensuring maximum 
                  efficiency, profitability, and growth.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white">24/7 autonomous operation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white">Real-time decision making</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white">Continuous optimization</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                  <Brain className="w-24 h-24 text-purple-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white text-center mb-4">
                    Autonomous Intelligence
                  </h3>
                  <p className="text-gray-300 text-center">
                    Your business runs on intelligent automation that never sleeps, 
                    continuously optimizing and improving every process.
                  </p>
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
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Comprehensive Feature Set
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.category}</h3>
                    <ul className="space-y-3">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Transform Your Business
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
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
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Industry Applications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                    <ul className="space-y-3">
                      {useCase.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Technology Tab */}
          {activeTab === 'technology' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Cutting-Edge Technology Stack
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {technology.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">{tech.category}</h3>
                    <ul className="space-y-3">
                      {tech.technologies.map((technology, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Code className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{technology}</span>
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
            >
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Transparent Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-6 ${
                      plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700/50'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-purple-400 mb-1">
                        {plan.price}
                        <span className="text-lg text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                      {plan.cta}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Ready to Automate Your Business?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">{contactInfo.phone}</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Schedule Free Consultation
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Modal */}
      {showPricingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">Pricing Plans</h2>
                <button
                  onClick={() => setShowPricingModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">{plan.name}</h3>
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                      {plan.cta}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAutonomousBusinessManager;