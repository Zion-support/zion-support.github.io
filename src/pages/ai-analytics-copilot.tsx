import React from 'react';
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
    }
  ];

  const useCases = [
    {
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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
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
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
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
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
        </div>
      </section>
    </div>
  );
}