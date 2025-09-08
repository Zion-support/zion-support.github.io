import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, BarChart3, CheckCircle, ArrowRight, Brain, Zap, Globe, Server, Target, PieChart, Smartphone } from 'lucide-react';

export default function MobileFeedbackSurveys() {
  const features = [
    {
      icon: Users,
      title: 'Customer Feedback Collection',
      description: 'Gather real-time feedback from customers through mobile-optimized surveys and forms.'
    },
    {
      icon: MessageCircle,
      title: 'NPS & CSAT Surveys',
      description: 'Measure customer satisfaction and loyalty with industry-standard survey methodologies.'
    },
    {
      icon: BarChart3,
      title: 'AI-Powered Insights',
      description: 'Advanced analytics provide actionable insights from customer feedback data.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for mobile devices with responsive design and touch-friendly interfaces.'
    },
    {
      icon: PieChart,
      title: 'Real-time Analytics',
      description: 'Monitor survey responses and customer sentiment in real-time with live dashboards.'
    },
    {
      icon: Target,
      title: 'Custom Survey Builder',
      description: 'Create tailored surveys with drag-and-drop functionality and advanced question types.'
    }
  ];

  const benefits = [
    'Increase response rates by 50%',
    'Improve customer satisfaction scores',
    'Real-time feedback collection',
    'AI-powered sentiment analysis',
    'Mobile-optimized experience',
    'Automated reporting and insights'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 text-sm font-medium">Customer Feedback</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mobile Feedback Surveys
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Capture customer insights with mobile-optimized surveys, AI-powered analytics, and real-time feedback collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-pink-400 hover:text-pink-400 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Feedback Collection
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our mobile survey platform provides comprehensive feedback collection with AI-powered insights and analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-pink-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Mobile Feedback Surveys?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Transform customer feedback collection with mobile-optimized surveys and AI-powered insights.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-2xl p-8 border border-pink-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">50%</div>
                    <div className="text-slate-300 text-sm">Response Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-rose-400 mb-2">Real-time</div>
                    <div className="text-slate-300 text-sm">Feedback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">AI-Powered</div>
                    <div className="text-slate-300 text-sm">Analytics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-rose-400 mb-2">Mobile</div>
                    <div className="text-slate-300 text-sm">Optimized</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Collect Better Feedback?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading companies that use mobile-optimized surveys to improve customer satisfaction and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-pink-400 hover:text-pink-400 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}