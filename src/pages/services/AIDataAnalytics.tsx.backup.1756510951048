import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import {
  BarChart3,
  Brain,
  Target,
  Zap,
  TrendingUp,
  Clock,
  Award,
  Star,
  Globe,
  Cpu,
  Database,
  CheckCircle,
  Eye,
  Users,
  FileText,
  Shield,
  Search,
  Download,
  Upload,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';

export default function AIDataAnalytics() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Intelligent data analysis with machine learning algorithms and predictive modeling."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive business intelligence with real-time dashboards and reporting."
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Forecast trends, identify patterns, and make data-driven decisions with AI."
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Instant data processing and analysis for immediate business insights."
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor KPIs and track business performance with intelligent alerts."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with data encryption and compliance features."
    }
  ];

  const benefits = [
    "Increase data-driven decision making by 60-80% with AI insights",
    "Improve business performance by 25-45% through predictive analytics",
    "Reduce analysis time by 70-90% with automated processing",
    "Enhance forecasting accuracy by 40-70% with ML algorithms",
    "Identify new business opportunities with pattern recognition",
    "Optimize operations and reduce costs by 20-35%"
  ];

  const analyticsTypes = [
    {
      type: "Descriptive Analytics",
      description: "Historical data analysis, reporting, and performance measurement",
      icon: BarChart3
    },
    {
      type: "Diagnostic Analytics",
      description: "Root cause analysis and why events occurred investigation",
      icon: Search
    },
    {
      type: "Predictive Analytics",
      description: "Future trend forecasting and probability modeling",
      icon: TrendingUp
    },
    {
      type: "Prescriptive Analytics",
      description: "Actionable recommendations and optimization suggestions",
      icon: Target
    },
    {
      type: "Real-Time Analytics",
      description: "Live data processing and instant insights delivery",
      icon: Activity
    },
    {
      type: "Big Data Analytics",
      description: "Large-scale data processing and complex pattern analysis",
      icon: Database
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Customer behavior analysis, inventory optimization, and sales forecasting"
    },
    {
      industry: "Financial Services",
      description: "Risk assessment, fraud detection, and investment portfolio optimization"
    },
    {
      industry: "Healthcare",
      description: "Patient outcome prediction, treatment optimization, and resource planning"
    },
    {
      industry: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization"
    },
    {
      industry: "Marketing",
      description: "Campaign performance analysis, customer segmentation, and ROI optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Data Analytics - Zion Tech Group"
        description="Transform your business with AI-powered data analytics, predictive insights, and intelligent business intelligence solutions. Make data-driven decisions with confidence."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-indigo-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full border border-violet-400/30 mb-6">
              <BarChart3 className="w-5 h-5 text-violet-400 mr-2" />
              <span className="text-violet-300 font-medium">AI Data Analytics</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Unlock Business Intelligence with
              <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                {" "}AI-Powered Analytics
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with intelligent analytics, predictive
              modeling, and AI-driven business intelligence that drives growth and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-violet-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-violet-400/30 text-violet-300 font-semibold rounded-lg hover:bg-violet-400/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered data analytics platform combines cutting-edge artificial intelligence
              with proven business intelligence methodologies to deliver exceptional insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/30 hover:border-violet-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-violet-400/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Measurable Analytics Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See real results with our AI-powered data analytics solutions that deliver
              quantifiable improvements across all aspects of your business intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-violet-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 p-8 rounded-xl border border-violet-400/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Industry-leading AI analytics algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Enterprise-grade security & compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Global analytics expertise and support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">24/7 analytics support & training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-violet-400" />
                  <span className="text-gray-300">Proven analytics success track record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Analytics Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform provides a complete range of analytics capabilities, from
              basic reporting to advanced predictive and prescriptive analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyticsTypes.map((analyticsType, index) => (
              <motion.div
                key={analyticsType.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/20 hover:border-violet-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-400/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <analyticsType.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{analyticsType.type}</h3>
                </div>
                <p className="text-gray-300 text-sm">{analyticsType.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered data analytics solutions are designed to work across industries,
              providing tailored analytics strategies for your specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/20 hover:border-violet-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-400/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-indigo-500/10 p-12 rounded-2xl border border-violet-400/20 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have already revolutionized their analytics
              with our AI-powered data intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-violet-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-violet-400/30 text-violet-300 font-semibold rounded-lg hover:bg-violet-400/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}