import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Shield, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Award,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  BarChart,
  Rocket,
  Layers,
  Workflow,
  Monitor,
  Settings,
  Cloud,
  Server,
  PieChart,
  LineChart,
  Activity,
  Zap
} from 'lucide-react';

const AIBusinessIntelligence = () => {
  const biFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that automatically identify patterns, trends, and insights in your data"
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboards",
      description: "Live, interactive dashboards that provide instant visibility into business performance and KPIs"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast future trends, customer behavior, and business outcomes with high accuracy"
    },
    {
      icon: Target,
      title: "Goal Tracking & Optimization",
      description: "Intelligent goal setting and automated optimization recommendations based on data analysis"
    },
    {
      icon: Users,
      title: "Customer Intelligence",
      description: "Deep insights into customer behavior, preferences, and lifetime value for targeted strategies"
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "AI-generated reports and insights delivered automatically to stakeholders across your organization"
    }
  ];

  const biModules = [
    {
      title: "Financial Analytics",
      description: "Comprehensive financial reporting, budgeting, and forecasting with AI-driven insights",
      icon: TrendingUp,
      features: ["Revenue analysis", "Cost optimization", "Profit forecasting", "Financial modeling"]
    },
    {
      title: "Sales Intelligence",
      description: "Advanced sales analytics and pipeline management with predictive lead scoring",
      icon: Target,
      features: ["Lead scoring", "Sales forecasting", "Pipeline analysis", "Performance tracking"]
    },
    {
      title: "Marketing Analytics",
      description: "Campaign performance tracking and ROI optimization across all marketing channels",
      icon: BarChart3,
      features: ["Campaign tracking", "ROI analysis", "Customer segmentation", "Channel optimization"]
    },
    {
      title: "Operational Intelligence",
      description: "Real-time monitoring and optimization of business operations and processes",
      icon: Activity,
      features: ["Process monitoring", "Efficiency tracking", "Resource optimization", "Quality control"]
    }
  ];

  const benefits = [
    "Increase revenue by up to 25%",
    "Reduce operational costs by 30%",
    "Improve decision-making speed by 5x",
    "Real-time business visibility",
    "Predictive business insights",
    "Automated reporting workflows",
    "Enhanced customer understanding",
    "Competitive advantage through data"
  ];

  const dataSources = [
    "CRM Systems",
    "ERP Platforms",
    "Marketing Tools",
    "Sales Platforms",
    "Customer Support",
    "Financial Systems",
    "Web Analytics",
    "Social Media"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <BarChart3 className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Business Intelligence
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business data into actionable intelligence with AI-powered analytics, 
              predictive insights, and automated reporting that drives growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Platform Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BI Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Business Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Business Intelligence platform combines advanced analytics with artificial intelligence 
              to deliver insights that transform your business decisions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BI Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive BI Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every aspect of your business intelligence needs covered with specialized modules and analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {biModules.map((module, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                    <p className="text-gray-300 text-sm">{module.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {module.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Transformation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented business growth and efficiency with AI-powered business intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Data Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect all your business data sources for comprehensive insights and unified reporting
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {dataSources.map((source, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{source}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business Intelligence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of business analytics with our AI-powered Business Intelligence platform. 
            Start making data-driven decisions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessIntelligence;