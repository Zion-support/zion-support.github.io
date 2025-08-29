import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Brain, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  DollarSign,
  Globe,
  Clock,
  Award,
  Target,
  BarChart3,
  Sparkles,
  Phone,
  Mail,
  Calendar,
  UserCheck
} from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';

export default function AISalesCopilot() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Lead Scoring",
      description: "Intelligent lead prioritization based on behavior and engagement patterns"
    },
    {
      icon: MessageCircle,
      title: "Automated Sales Conversations",
      description: "Natural language processing for personalized customer interactions"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast sales outcomes and identify high-value opportunities"
    },
    {
      icon: Zap,
      title: "Smart Follow-up Automation",
      description: "Automated follow-up sequences optimized for conversion"
    }
  ];

  const benefits = [
    "Increase sales conversion rates by up to 35%",
    "Reduce sales cycle time by 40%",
    "Improve lead qualification accuracy by 60%",
    "Automate repetitive sales tasks",
    "Provide real-time sales insights and recommendations"
  ];

  const useCases = [
    {
      title: "Lead Generation",
      description: "Automated lead identification and qualification processes",
      icon: Target
    },
    {
      title: "Sales Outreach",
      description: "Personalized email and call campaigns with AI optimization",
      icon: Phone
    },
    {
      title: "Customer Engagement",
      description: "Intelligent conversation flows and follow-up sequences",
      icon: MessageCircle
    },
    {
      title: "Sales Analytics",
      description: "Comprehensive reporting and performance insights",
      icon: BarChart3
    }
  ];

  const salesFeatures = [
    {
      name: "Lead Scoring",
      description: "AI-powered lead qualification and prioritization",
      icon: Target,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Email Automation",
      description: "Smart email sequences and personalization",
      icon: Mail,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Call Intelligence",
      description: "AI-powered call analysis and insights",
      icon: Phone,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "CRM Integration",
      description: "Seamless integration with popular CRM platforms",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Sales Forecasting",
      description: "Predictive analytics for sales planning",
      icon: BarChart3,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Performance Analytics",
      description: "Comprehensive sales performance insights",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="AI Sales Copilot - Zion Tech Group"
        description="Transform your sales process with AI-powered automation. Lead scoring, intelligent conversations, and predictive analytics to boost your sales performance."
        canonical="/services/ai-sales-copilot"
        url="https://ziontechgroup.com/services/ai-sales-copilot"
        type="service"
        tags={['AI Sales Copilot', 'Sales Automation', 'Lead Scoring', 'Sales Analytics', 'CRM Integration']}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
                <MessageCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-400 text-sm font-medium">AI Sales Copilot</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered
                <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Sales Copilot
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your sales process with our intelligent AI copilot. 
                Automated lead scoring, intelligent conversations, and predictive analytics 
                to boost your sales performance and close more deals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/schedule-demo"
                  className="inline-flex items-center px-8 py-4 border border-red-500/30 text-red-400 hover:bg-red-500/10 font-semibold rounded-lg transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Sales AI Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our platform combines cutting-edge AI with sales expertise to deliver 
                unprecedented efficiency and results for your sales team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sales Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Sales Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                From lead management to performance analytics, our platform covers all aspects of modern sales.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {salesFeatures.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Sales Platform?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the future of sales with our comprehensive AI solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Platform Performance</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Conversion Rate</span>
                    <span className="text-red-400 font-semibold">+35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Sales Cycle</span>
                    <span className="text-red-400 font-semibold">-40%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Lead Accuracy</span>
                    <span className="text-red-400 font-semibold">+60%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-red-400 font-semibold">&lt;5min</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sales Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our AI platform addresses the most critical challenges in modern sales operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Sales?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading sales teams who are already using our AI platform 
                to increase conversions and close more deals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                >
                  Get Your Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-red-500/30 text-red-400 hover:bg-red-500/10 font-semibold rounded-lg transition-all duration-300"
                >
                  Contact Sales Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}