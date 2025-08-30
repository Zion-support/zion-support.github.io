import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, MessageCircle, CheckCircle, ArrowRight, Brain, Zap, Globe, Server, Target, PieChart, DollarSign } from 'lucide-react';

export default function AISalesCopilot() {
  const features = [
    {
      icon: Users,
      title: 'Intelligent Lead Scoring',
      description: 'AI-powered lead qualification and scoring to prioritize high-value prospects.'
    },
    {
      icon: MessageCircle,
      title: 'Automated Outreach',
      description: 'Smart email sequences and follow-up campaigns that adapt to prospect behavior.'
    },
    {
      icon: TrendingUp,
      title: 'Sales Forecasting',
      description: 'Predictive analytics forecast sales outcomes with high accuracy.'
    },
    {
      icon: Target,
      title: 'Opportunity Management',
      description: 'Track and manage sales opportunities with AI-driven insights and recommendations.'
    },
    {
      icon: PieChart,
      title: 'Performance Analytics',
      description: 'Comprehensive sales performance metrics and actionable insights.'
    },
    {
      icon: DollarSign,
      title: 'Revenue Optimization',
      description: 'AI recommendations to maximize deal size and close rates.'
    }
  ];

  const benefits = [
    'Increase sales productivity by 40%',
    'Improve lead conversion by 35%',
    'Reduce sales cycle time by 25%',
    'Automated follow-up sequences',
    'AI-powered sales coaching',
    'Real-time performance insights'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">AI Sales</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Sales Copilot
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Supercharge your sales team with AI-powered automation, intelligent insights, and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300">
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
              Intelligent Sales Automation
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI sales copilot provides comprehensive automation with intelligent insights and predictive analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
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
                Why Choose AI Sales Copilot?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Transform your sales process with intelligent automation, predictive insights, and performance optimization.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
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
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-8 border border-emerald-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">40%</div>
                    <div className="text-slate-300 text-sm">Productivity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-400 mb-2">35%</div>
                    <div className="text-slate-300 text-sm">Conversion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">25%</div>
                    <div className="text-slate-300 text-sm">Cycle Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-400 mb-2">AI-Powered</div>
                    <div className="text-slate-300 text-sm">Insights</div>
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
              Ready to Supercharge Sales?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading sales teams that use AI to increase productivity, improve conversion rates, and drive revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}