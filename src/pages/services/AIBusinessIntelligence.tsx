import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, BarChart3, Database, Zap, Shield, Users, Globe, Award, CheckCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIBusinessIntelligence() {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Custom ML models tailored to your business needs and data patterns"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with confidence"
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "Advanced ETL/ELT pipelines for clean, structured data"
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Real-time dashboards and KPI monitoring systems"
    },
    {
      icon: Zap,
      title: "Automated Insights",
      description: "AI-powered anomaly detection and automated reporting"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security and compliance for sensitive data"
    }
  ];

  const benefits = [
    "Increase operational efficiency by 40%",
    "Reduce decision-making time by 60%",
    "Improve customer satisfaction by 35%",
    "Cut operational costs by 25%",
    "Enable real-time business monitoring",
    "Predict market trends and opportunities"
  ];

  const useCases = [
    {
      title: "Customer Segmentation",
      description: "AI-powered customer clustering for targeted marketing campaigns"
    },
    {
      title: "Demand Forecasting",
      description: "Predict inventory needs and optimize supply chain operations"
    },
    {
      title: "Fraud Detection",
      description: "Real-time fraud detection using machine learning algorithms"
    },
    {
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization of business processes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Business Intelligence - Zion Tech Group"
        description="Transform your business with AI-powered business intelligence, machine learning, and predictive analytics solutions."
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Business Intelligence
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI analytics platform. 
              Leverage machine learning, predictive analytics, and real-time business intelligence 
              to drive growth and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Learn More
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
              Powerful AI Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI Business Intelligence platform combines cutting-edge machine learning 
              with intuitive business tools to deliver unprecedented insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
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
              Measurable Business Impact
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI solutions deliver quantifiable results that directly impact your bottom line.
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
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how AI Business Intelligence transforms various industries and business functions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies already leveraging AI to gain competitive advantages 
              and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}