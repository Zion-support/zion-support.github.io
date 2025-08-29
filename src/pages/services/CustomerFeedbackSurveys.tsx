import React from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart3, Target, MessageSquare, Zap, Shield, Globe, Award, CheckCircle, Mail, Send, TrendingUp } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function CustomerFeedbackSurveys() {
  const features = [
    {
      icon: Users,
      title: "Smart Survey Design",
      description: "AI-powered survey creation with intelligent question suggestions and branching logic"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Instant insights and visualizations of customer feedback and satisfaction metrics"
    },
    {
      icon: Target,
      title: "Audience Segmentation",
      description: "Target specific customer groups with personalized survey experiences"
    },
    {
      icon: MessageSquare,
      title: "Multi-channel Distribution",
      description: "Deploy surveys across email, SMS, web, and mobile channels"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Trigger follow-up actions based on survey responses and customer sentiment"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with GDPR compliance and data protection"
    }
  ];

  const benefits = [
    "Increase response rates by 60%",
    "Improve customer satisfaction by 35%",
    "Reduce survey creation time by 80%",
    "Get actionable insights in real-time",
    "Scale feedback collection efficiently",
    "Build stronger customer relationships"
  ];

  const surveyTypes = [
    {
      title: "Customer Satisfaction (CSAT)",
      description: "Measure customer satisfaction with products, services, and overall experience"
    },
    {
      title: "Net Promoter Score (NPS)",
      description: "Gauge customer loyalty and likelihood to recommend your business"
    },
    {
      title: "Customer Effort Score (CES)",
      description: "Evaluate how easy it is for customers to interact with your business"
    },
    {
      title: "Product Feedback",
      description: "Collect detailed feedback on product features, usability, and improvements"
    }
  ];

  const capabilities = [
    "AI-powered survey design and optimization",
    "Advanced question types and branching logic",
    "Real-time response tracking and analytics",
    "Automated survey distribution and follow-ups",
    "Integration with CRM and marketing platforms",
    "Custom branding and white-label options",
    "Multi-language support and localization",
    "Advanced reporting and export capabilities"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Customer Feedback Surveys - Zion Tech Group"
        description="Create intelligent customer feedback surveys with AI-powered design, real-time analytics, and actionable insights."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI-Powered Feedback Collection
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Customer Feedback Surveys
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your customer feedback collection with intelligent surveys. Our AI-powered 
              platform helps you design better surveys, increase response rates, and extract 
              actionable insights to improve customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105">
                Create Survey
              </button>
              <button className="px-8 py-4 border border-pink-400 text-pink-400 font-semibold rounded-lg hover:bg-pink-400 hover:text-slate-900 transition-all duration-300">
                View Templates
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Survey Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our Customer Feedback Surveys platform combines AI intelligence with 
              powerful analytics to deliver meaningful insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-pink-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join thousands of businesses already achieving breakthrough results with intelligent feedback collection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Survey Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Survey Types & Templates
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Pre-built templates and survey types for common feedback collection needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {surveyTypes.map((surveyType, index) => (
              <motion.div
                key={surveyType.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{surveyType.title}</h3>
                <p className="text-slate-300">{surveyType.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Platform Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with enterprise-grade technology for reliable feedback collection and analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-pink-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Collect Better Feedback?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using AI to transform their customer feedback collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

