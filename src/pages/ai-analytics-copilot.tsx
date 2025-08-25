import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  LineChart, 
  Activity, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Users, 
  Target, 
  Lock, 
  Code, 
  Clock, 
  Eye, 
  ArrowRight,
  Play,
  Monitor,
  CheckCircle,
  AlertTriangle,
  Info,
  DollarSign,
  Globe,
  Search,
  Filter,
  Download,
  Share2,
  Settings
} from 'lucide-react';

export default function AIAnalyticsCopilot() {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Data Analysis",
      description: "AI-powered insights that automatically identify patterns, trends, and anomalies in your data.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Visualization",
      description: "Interactive charts and dashboards that make complex data easy to understand and act upon.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using machine learning and statistical modeling.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant data processing and analysis for immediate decision-making and insights.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security and compliance for sensitive business data and analytics.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Scalable Infrastructure",
      description: "Cloud-native platform that scales with your data volume and processing needs.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const capabilities = [
    {
      title: "Data Integration & ETL",
      description: "Connect to any data source and transform raw data into actionable insights",
      icon: Database,
      features: ["Multi-source connectors", "Real-time data streaming", "Data quality validation", "Automated ETL pipelines"]
    },
    {
      title: "Natural Language Queries",
      description: "Ask questions in plain English and get instant answers from your data",
      icon: Search,
      features: ["Conversational AI", "Context understanding", "Multi-language support", "Query optimization"]
    },
    {
      title: "Automated Insights",
      description: "AI automatically discovers hidden patterns and generates actionable recommendations",
      icon: Brain,
      features: ["Pattern recognition", "Anomaly detection", "Trend analysis", "Root cause analysis"]
    },
    {
      title: "Interactive Dashboards",
      description: "Create beautiful, responsive dashboards that work on any device",
      icon: BarChart3,
      features: ["Drag & drop builder", "Real-time updates", "Mobile optimization", "Custom branding"]
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, Brain, Zap, Target, TrendingUp, Shield, Database, Users } from 'lucide-react';

const AIAnalyticsCopilot = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Data Analysis',
      description: 'AI-powered insights that automatically identify patterns, trends, and anomalies in your data.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant analysis and insights as new data flows into your systems.'
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes with advanced machine learning algorithms.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous optimization of business processes based on data-driven insights.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with role-based access control and data encryption.'
    },
    {
      icon: Database,
      title: 'Multi-Source Integration',
      description: 'Connect and analyze data from multiple sources and platforms seamlessly.'
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  ];

  const useCases = [
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      industry: "Financial Services",
      description: "Risk assessment, fraud detection, and portfolio optimization",
      icon: DollarSign,
      benefits: ["Real-time risk monitoring", "Fraud pattern detection", "Portfolio performance analysis", "Regulatory compliance"]
    },
    {
      industry: "Healthcare",
      description: "Patient outcomes, operational efficiency, and predictive diagnostics",
      icon: Users,
      benefits: ["Patient risk scoring", "Resource optimization", "Treatment effectiveness", "Population health insights"]
    },
    {
      industry: "Retail & E-commerce",
      description: "Customer behavior, inventory optimization, and sales forecasting",
      icon: Target,
      benefits: ["Customer segmentation", "Demand forecasting", "Price optimization", "Marketing ROI analysis"]
    },
    {
      industry: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: Cpu,
      benefits: ["Equipment failure prediction", "Quality assurance", "Supply chain visibility", "Production optimization"]
    }
  ];

  const analyticsTypes = [
    {
      category: "Descriptive Analytics",
      description: "What happened and why",
      tools: ["Data visualization", "Reporting", "KPI dashboards", "Data exploration"],
      icon: BarChart3
    },
    {
      category: "Diagnostic Analytics",
      description: "Why did it happen",
      tools: ["Root cause analysis", "Drill-down capabilities", "Correlation analysis", "Statistical testing"],
      icon: Search
    },
    {
      category: "Predictive Analytics",
      description: "What will happen next",
      tools: ["Machine learning models", "Forecasting", "Risk assessment", "Trend analysis"],
      icon: TrendingUp
    },
    {
      category: "Prescriptive Analytics",
      description: "What should we do about it",
      tools: ["Recommendation engines", "Optimization algorithms", "Scenario planning", "Decision support"],
      icon: Target
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable insights for strategic decision-making.',
      icon: '📊'
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences for personalized experiences.',
      icon: '👥'
    },
    {
      title: 'Operational Efficiency',
      description: 'Identify bottlenecks and optimize business processes for maximum efficiency.',
      icon: '⚙️'
    },
    {
      title: 'Financial Forecasting',
      description: 'Predict revenue, costs, and market trends for better financial planning.',
      icon: '💰'
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-green-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                <BarChart3 className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent mb-6">
              AI Analytics Copilot
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your data into actionable intelligence with AI-powered analytics. 
              Get instant insights, predictive forecasts, and automated recommendations to drive better business decisions.
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI Analytics Copilot
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Your intelligent data companion that transforms complex analytics into clear insights, 
              helping you make better decisions faster with AI-powered analysis and recommendations.
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
=======
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-200"
              >
                <Monitor className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Analytics Copilot combines cutting-edge artificial intelligence with intuitive design 
              to make advanced analytics accessible to everyone in your organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-800/30 hover:bg-gray-700/40 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} w-fit mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Four Types of Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From understanding what happened to predicting what will happen next, 
              our platform covers the complete analytics spectrum.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsTypes.map((type, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{type.category}</h3>
                    <p className="text-gray-400 leading-relaxed">{type.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Key Tools:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {type.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to turn your data into a strategic advantage with enterprise-grade analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{capability.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{capability.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/services/ai-autonomous-systems"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
<<<<<<< HEAD
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              AI-Powered Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of data analysis with intelligent automation and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
=======
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              AI-Powered Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of data analysis with intelligent automation and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
<<<<<<< HEAD
                </div>
              </motion.div>
=======
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored analytics solutions designed for your industry's unique challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{useCase.industry}</h3>
                    <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Transform Your Data Strategy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From insights to action, our AI copilot helps you unlock the full potential of your data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-green-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of organizations that are already making data-driven decisions with AI Analytics Copilot. 
            Start your analytics transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Now
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-200"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Related AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive suite of AI-powered solutions and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/services/ai-business-intelligence"
              className="group p-6 bg-gray-800/30 hover:bg-gray-700/40 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200"
            >
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg w-fit mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-200">
                AI Business Intelligence
              </h3>
              <p className="text-gray-400 text-sm">
                Advanced business intelligence powered by artificial intelligence.
              </p>
            </Link>
            
            <Link
              to="/ai-autonomous-research-assistant"
              className="group p-6 bg-gray-800/30 hover:bg-gray-700/40 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200"
            >
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-200">
                AI Research Assistant
              </h3>
              <p className="text-gray-400 text-sm">
                AI-powered research automation and intelligent data analysis.
              </p>
            </Link>
            
            <Link
              to="/services/ai-autonomous-systems"
              className="group p-6 bg-gray-800/30 hover:bg-gray-700/40 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-200"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mb-4">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                AI Autonomous Systems
              </h3>
              <p className="text-gray-400 text-sm">
                Advanced autonomous AI systems for complex decision-making.
              </p>
            </Link>
          </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 rounded-3xl border border-cyan-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Supercharge Your Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution and transform how you analyze and act on your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default AIAnalyticsCopilot;
=======
<<<<<<< HEAD
}
=======
};

export default AIAnalyticsCopilot;
>>>>>>> origin/cursor/website-audit-and-enhancement-a8a0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
