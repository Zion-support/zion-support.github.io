import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
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
  Building
} from 'lucide-react';

const AIAutonomousBusinessPlatform = () => {
  const platformFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Core Engine",
      description: "Advanced machine learning algorithms that continuously learn and optimize business processes"
    },
    {
      icon: Workflow,
      title: "Intelligent Workflow Automation",
      description: "Self-optimizing workflows that adapt to changing business conditions and requirements"
    },
    {
      icon: Monitor,
      title: "Real-Time Business Intelligence",
      description: "Live dashboards and analytics that provide instant insights into business performance"
    },
    {
      icon: Cloud,
      title: "Scalable Cloud Infrastructure",
      description: "Enterprise-grade cloud platform that scales automatically with your business growth"
    },
    {
      icon: Shield,
      title: "Advanced Security & Compliance",
      description: "Built-in security protocols and compliance automation for enterprise requirements"
    },
    {
      icon: Users,
      title: "Collaborative AI Agents",
      description: "Multiple AI agents working together to manage different aspects of your business"
    }
  ];

  const modules = [
    {
      title: "Financial Management",
      description: "Automated accounting, budgeting, and financial planning with AI-driven insights",
      icon: TrendingUp,
      features: ["Expense tracking", "Revenue forecasting", "Budget optimization", "Financial reporting"]
    },
    {
      title: "Operations Management",
      description: "End-to-end business operations automation and optimization",
      icon: Settings,
      features: ["Process automation", "Resource allocation", "Performance monitoring", "Quality control"]
    },
    {
      title: "Customer Relationship",
      description: "Intelligent customer management and engagement automation",
      icon: Users,
      features: ["Lead management", "Customer support", "Sales automation", "Customer analytics"]
    },
    {
      title: "Supply Chain",
      description: "AI-powered supply chain optimization and management",
      icon: Network,
      features: ["Inventory management", "Supplier coordination", "Demand forecasting", "Logistics optimization"]
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 70%",
    "Increase productivity by 300%",
    "24/7 autonomous operation",
    "Real-time decision making",
    "Scalable business operations",
    "Comprehensive audit trails",
    "Predictive business insights",
    "Automated compliance management"
  ];

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "Retail & E-commerce",
    "Technology",
    "Professional Services",
    "Education",
    "Government"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Layers className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Autonomous Business Platform
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              The complete autonomous business platform that runs your entire operation with artificial intelligence, 
              delivering unprecedented efficiency and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
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

      {/* Platform Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Business Automation Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Business Platform is a comprehensive solution that transforms your entire business 
              into an intelligent, self-operating system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
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

      {/* Platform Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Integrated Business Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every aspect of your business is covered with our comprehensive suite of AI-powered modules
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
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
              Transform Your Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented growth and efficiency with our AI Autonomous Business Platform
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

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to work across all industries with specialized configurations for your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Entire Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of business with our AI Autonomous Business Platform. Start your free trial today and 
            see the transformation in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousBusinessPlatform;