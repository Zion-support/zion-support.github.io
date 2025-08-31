import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  TrendingUp, 
  Globe, 
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
  DollarSign,
  Target,
  Lightbulb,
  Shield,
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
  Recycle,
  Sun,
  Wind,
  Droplets,
  TreePine,
  Factory,
  Car,
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
  DollarSignIcon as DollarSignIcon2
} from 'lucide-react';

const SustainableTechAnalytics: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      category: "Environmental Impact Assessment",
      items: [
        "Carbon Footprint Calculation",
        "Life Cycle Analysis (LCA)",
        "Environmental Risk Assessment",
        "Sustainability Metrics Tracking",
        "Regulatory Compliance Monitoring",
        "Impact Forecasting & Modeling"
      ]
    },
    {
      category: "Energy Efficiency Analytics",
      items: [
        "Energy Consumption Monitoring",
        "Renewable Energy Integration",
        "Smart Grid Optimization",
        "Energy Performance Benchmarking",
        "Efficiency Improvement Recommendations",
        "Cost-Benefit Analysis"
      ]
    },
    {
      category: "Resource Management",
      items: [
        "Water Usage Optimization",
        "Waste Reduction Strategies",
        "Circular Economy Modeling",
        "Supply Chain Sustainability",
        "Resource Efficiency Tracking",
        "Sustainable Procurement Analysis"
      ]
    },
    {
      category: "Climate Risk Management",
      items: [
        "Climate Scenario Modeling",
        "Extreme Weather Impact Assessment",
        "Adaptation Strategy Development",
        "Vulnerability Analysis",
        "Resilience Planning",
        "Climate Finance Optimization"
      ]
    },
    {
      category: "ESG Performance Tracking",
      items: [
        "Environmental Metrics Dashboard",
        "Social Impact Measurement",
        "Governance Compliance Tracking",
        "Stakeholder Engagement Analysis",
        "ESG Reporting Automation",
        "Performance Benchmarking"
      ]
    },
    {
      category: "AI-Powered Sustainability",
      items: [
        "Predictive Sustainability Analytics",
        "Automated Impact Assessment",
        "Intelligent Optimization Recommendations",
        "Real-time Monitoring & Alerts",
        "Machine Learning Insights",
        "Sustainability AI Chatbot"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Green Starter",
      price: "$2,999",
      period: "/month",
      description: "Essential sustainability analytics for small organizations",
      features: [
        "Basic Environmental Impact Assessment",
        "Energy Efficiency Monitoring",
        "Sustainability Dashboard",
        "Email Support",
        "Integration with 20+ Sustainability Tools",
        "Monthly Sustainability Reports"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Sustainability Pro",
      price: "$7,999",
      period: "/month",
      description: "Advanced sustainability solutions for growing organizations",
      features: [
        "Comprehensive Environmental Analytics",
        "Advanced Energy & Resource Management",
        "Climate Risk Assessment",
        "Priority Support (4-hour response)",
        "Integration with 50+ Sustainability Tools",
        "Custom Sustainability Templates",
        "AI-Powered Recommendations",
        "API Access & Webhooks"
      ],
      popular: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Enterprise Green",
      price: "$19,999",
      period: "/month",
      description: "Complete sustainability infrastructure for major organizations",
      features: [
        "Unlimited Sustainability Analytics",
        "Enterprise ESG Performance Tracking",
        "Global Climate Risk Management",
        "Custom Sustainability Development",
        "24/7 Dedicated Support",
        "Integration with 100+ Sustainability Tools",
        "White-label Solutions",
        "On-premise Deployment",
        "SLA Guarantees",
        "Custom Compliance Frameworks"
      ],
      popular: false,
      color: "from-violet-500 to-purple-500"
    }
  ];

  const benefits = [
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Reduce environmental footprint and achieve sustainability goals"
    },
    {
      icon: TrendingUp,
      title: "Cost Savings",
      description: "Lower operational costs through efficiency improvements"
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "Meet regulatory requirements and industry standards"
    },
    {
      icon: Star,
      title: "Brand Value",
      description: "Enhance brand reputation and stakeholder trust"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Contribute to global sustainability initiatives"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Drive innovation through sustainable technology adoption"
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Optimize production processes, reduce waste, and improve energy efficiency",
      results: "30% waste reduction, 25% energy savings, 40% cost reduction"
    },
    {
      industry: "Retail & E-commerce",
      description: "Track supply chain sustainability, optimize logistics, and reduce carbon footprint",
      results: "35% carbon reduction, 20% logistics optimization, sustainable sourcing"
    },
    {
      industry: "Financial Services",
      description: "ESG risk assessment, sustainable investment analysis, and climate finance",
      results: "ESG compliance 100%, sustainable portfolio growth, climate risk mitigation"
    },
    {
      industry: "Real Estate",
      description: "Building sustainability certification, energy efficiency, and green building design",
      results: "LEED certification, 40% energy savings, green building compliance"
    },
    {
      industry: "Transportation",
      description: "Fleet optimization, route planning, and sustainable mobility solutions",
      results: "25% fuel reduction, 30% emissions decrease, sustainable mobility"
    }
  ];

  const sustainabilityMetrics = [
    {
      metric: "Carbon Footprint",
      description: "Total greenhouse gas emissions from operations",
      unit: "CO2e (tons)",
      target: "Net Zero by 2030",
      current: "Reduced by 45%"
    },
    {
      metric: "Energy Efficiency",
      description: "Energy consumption per unit of production",
      unit: "kWh/unit",
      target: "30% improvement",
      current: "25% achieved"
    },
    {
      metric: "Water Usage",
      description: "Water consumption and recycling rates",
      unit: "Gallons/unit",
      target: "50% reduction",
      current: "35% achieved"
    },
    {
      metric: "Waste Reduction",
      description: "Waste generation and recycling rates",
      unit: "% recycled",
      target: "90% recycling",
      current: "75% achieved"
    },
    {
      metric: "Renewable Energy",
      description: "Percentage of energy from renewable sources",
      unit: "% renewable",
      target: "100% renewable",
      current: "60% achieved"
    }
  ];

  const sustainabilityFrameworks = [
    {
      name: "UN Sustainable Development Goals (SDGs)",
      description: "Global framework for sustainable development",
      focus: "17 goals covering social, economic, and environmental aspects",
      relevance: "International sustainability standards and reporting"
    },
    {
      name: "Global Reporting Initiative (GRI)",
      description: "Sustainability reporting standards",
      focus: "Environmental, social, and governance performance",
      relevance: "Corporate sustainability reporting and disclosure"
    },
    {
      name: "Science Based Targets (SBTi)",
      description: "Climate action targets aligned with climate science",
      focus: "Carbon reduction targets and climate action",
      relevance: "Climate risk management and net-zero strategies"
    },
    {
      name: "Task Force on Climate-related Financial Disclosures (TCFD)",
      description: "Climate risk disclosure framework",
      focus: "Climate-related financial risks and opportunities",
      relevance: "Financial risk assessment and climate finance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-6 mx-auto mb-8">
              <Leaf className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI-Powered
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Sustainability Analytics
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your organization's sustainability journey with our comprehensive analytics platform. 
              From environmental impact assessment to ESG performance tracking, we're enabling a greener future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
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
            { id: 'metrics', name: 'Sustainability Metrics', icon: BarChart3 },
            { id: 'frameworks', name: 'Frameworks', icon: FileText },
            { id: 'use-cases', name: 'Use Cases', icon: Target },
            { id: 'contact', name: 'Contact', icon: MessageSquare }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
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
              <h2 className="text-4xl font-bold text-white mb-6">Building a Sustainable Future</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our AI-Powered Sustainability Analytics Platform represents the next generation of 
                environmental management. Combining cutting-edge AI, advanced analytics, and proven 
                sustainability frameworks to revolutionize how organizations approach environmental responsibility.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Platform Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Environmental Impact</h4>
                  <p className="text-gray-300">Comprehensive environmental assessment and monitoring</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-4 mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Analytics & Insights</h4>
                  <p className="text-gray-300">AI-powered sustainability analytics and reporting</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full p-4 mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Compliance & Risk</h4>
                  <p className="text-gray-300">Regulatory compliance and climate risk management</p>
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
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Sustainability Features</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our platform provides everything you need for modern sustainability management, from 
                environmental impact assessment to ESG performance tracking and climate risk management.
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
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-2 mr-3">
                      <Leaf className="w-4 h-4 text-white" />
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
              <h2 className="text-4xl font-bold text-white mb-6">Sustainable Investment</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the plan that best fits your sustainability goals. All plans include our core 
                sustainability features with different levels of customization and support.
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
                    plan.popular ? 'ring-2 ring-green-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
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
                Our AI-Powered Sustainability Analytics Platform delivers measurable results that transform 
                environmental management and enable organizations to achieve their sustainability goals.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 mr-4 flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Sustainability Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">45%</div>
                  <p className="text-gray-300">Average Carbon Reduction</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">30%</div>
                  <p className="text-gray-300">Cost Savings</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                  <p className="text-gray-300">Compliance Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Sustainability Metrics Tab */}
        {activeTab === 'metrics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Key Sustainability Metrics</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Track and measure your organization's sustainability performance with our comprehensive 
                metrics dashboard and AI-powered insights.
              </p>
            </div>

            <div className="space-y-6">
              {sustainabilityMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{metric.metric}</h3>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-3">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{metric.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Target:</h4>
                      <p className="text-gray-300 text-sm">{metric.target}</p>
                    </div>
                    <div>
                      <h4 className="text-emerald-400 font-semibold mb-2">Current Progress:</h4>
                      <p className="text-gray-300 text-sm">{metric.current}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Real-time Monitoring</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Environmental Sensors</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Air quality monitoring</li>
                    <li>• Water quality sensors</li>
                    <li>• Energy consumption tracking</li>
                    <li>• Waste generation monitoring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Data Analytics</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Real-time data processing</li>
                    <li>• Predictive analytics</li>
                    <li>• Automated reporting</li>
                    <li>• Performance benchmarking</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Frameworks Tab */}
        {activeTab === 'frameworks' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Sustainability Frameworks</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our platform supports all major sustainability frameworks and standards, ensuring 
                compliance and alignment with global best practices.
              </p>
            </div>

            <div className="space-y-6">
              {sustainabilityFrameworks.map((framework, index) => (
                <motion.div
                  key={framework.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{framework.name}</h3>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-3">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{framework.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-400 font-semibold mb-2">Focus Area:</h4>
                      <p className="text-gray-300 text-sm">{framework.focus}</p>
                    </div>
                    <div>
                      <h4 className="text-emerald-400 font-semibold mb-2">Relevance:</h4>
                      <p className="text-gray-300 text-sm">{framework.relevance}</p>
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
                Our platform has been successfully implemented across various industries, delivering 
                measurable sustainability results and transforming environmental management practices.
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
              <h2 className="text-4xl font-bold text-white mb-6">Start Your Sustainability Journey</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Ready to transform your organization's sustainability performance? Contact our team to 
                schedule a personalized demo and discuss your specific sustainability needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-green-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <a href="tel:+13024640950" className="text-green-400 hover:text-green-300 transition-colors">
                        +1 (302) 464-0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-green-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-green-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Address</h4>
                      <p className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="w-6 h-6 text-green-400 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold">Website</h4>
                      <a href="https://ziontechgroup.com" className="text-green-400 hover:text-green-300 transition-colors">
                        https://ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Why Choose Zion Tech Group?</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Industry-leading sustainability expertise</li>
                    <li>• Proven track record of successful implementations</li>
                    <li>• 24/7 technical support and monitoring</li>
                    <li>• Competitive pricing with premium sustainability features</li>
                    <li>• Global network of sustainability partners</li>
                    <li>• Future-proof sustainability technology solutions</li>
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
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Industry</label>
                    <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option value="">Select your industry</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="financial">Financial Services</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="transportation">Transportation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Tell us about your sustainability goals and requirements..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
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
      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build a Sustainable Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
               Join the organizations already transforming their sustainability performance with our 
               AI-Powered Sustainability Analytics Platform. The future of environmental responsibility is here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
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

export default SustainableTechAnalytics;