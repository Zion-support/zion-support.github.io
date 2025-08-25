import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Cpu, Target, ArrowRight, CheckCircle, Star, Users, Shield, Globe, BarChart3, TrendingUp, PieChart, LineChart, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAnalyticsCopilot = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Intelligent analysis and interpretation of complex data sets"
    },
    {
      icon: BarChart3,
      title: "Interactive Dashboards",
      description: "Real-time dashboards with dynamic data visualization"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Advanced forecasting and trend prediction capabilities"
    },
    {
      icon: Target,
      title: "Natural Language Queries",
      description: "Ask questions in plain English and get instant insights"
    }
  ];

  const capabilities = [
    {
      title: "Data Discovery & Preparation",
      description: "Automated data discovery, cleaning, and preparation",
      icon: Database,
      features: ["Data source integration", "Automated data cleaning", "Data quality assessment", "Schema detection"]
    },
    {
      title: "Advanced Analytics",
      description: "Sophisticated analytical models and algorithms",
      icon: Brain,
      features: ["Machine learning models", "Statistical analysis", "Pattern recognition", "Anomaly detection"]
    },
    {
      title: "Visualization & Reporting",
      description: "Rich visualizations and automated reporting",
      icon: BarChart3,
      features: ["Interactive charts", "Custom dashboards", "Automated reports", "Real-time updates"]
    },
    {
      title: "Collaborative Analytics",
      description: "Team collaboration and knowledge sharing",
      icon: Users,
      features: ["Shared workspaces", "Comment systems", "Version control", "Knowledge base"]
    }
  ];

  const benefits = [
    "Reduce analysis time by up to 80%",
    "Improve data accuracy by 90%",
    "Enable self-service analytics for business users",
    "Real-time insights and decision support",
    "Automated report generation and distribution",
    "Advanced predictive modeling capabilities"
  ];

  const useCases = [
    "Business Intelligence",
    "Financial Analytics",
    "Marketing Performance",
    "Customer Analytics",
    "Operational Metrics",
    "Risk Assessment",
    "Supply Chain Analytics",
    "Performance Monitoring"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 to-blue-900/50"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <span className="text-emerald-400 font-semibold">AI Analytics</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-400 to-blue-600 bg-clip-text text-transparent">
              AI Analytics Copilot
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your data into actionable insights with our AI-powered analytics copilot. 
              Get instant answers to complex business questions through natural language queries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/services/ai-autonomous-systems"
                className="border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Platform Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Analytics Copilot provides intelligent data analysis and insights 
              through advanced AI algorithms and natural language processing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Analytics Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive analytics features that enable data-driven decision making 
              across your organization with AI-powered insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Business Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience significant improvements in data analysis efficiency and 
              decision-making capabilities with our AI Analytics Copilot.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-200">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Industry Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Analytics Copilot is designed to work across industries, 
              providing intelligent insights for various business functions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-4 text-center hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <span className="text-gray-200 group-hover:text-emerald-400 transition-colors font-medium">
                  {useCase}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Analytics?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the power of AI-driven analytics that deliver 
              instant insights and actionable intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/pricing"
                className="border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAnalyticsCopilot;