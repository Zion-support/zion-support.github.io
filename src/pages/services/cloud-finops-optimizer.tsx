import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, BarChart3, CheckCircle, ArrowRight, Brain, Zap, Globe, Server, Target, PieChart, Calculator } from 'lucide-react';

export default function CloudFinOpsOptimizer() {
  const features = [
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'AI-powered analysis identifies cost-saving opportunities across your cloud infrastructure.'
    },
    {
      icon: TrendingDown,
      title: 'Spend Reduction',
      description: 'Automated recommendations reduce cloud spending by up to 40% without performance impact.'
    },
    {
      icon: BarChart3,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of cloud costs with instant alerts for budget overruns.'
    },
    {
      icon: Calculator,
      title: 'Predictive Analytics',
      description: 'Forecast future cloud costs and optimize resource allocation proactively.'
    },
    {
      icon: PieChart,
      title: 'Cost Allocation',
      description: 'Accurate cost attribution to teams, projects, and business units.'
    },
    {
      icon: Target,
      title: 'Budget Management',
      description: 'Set and enforce budgets with automated controls and notifications.'
    }
  ];

  const benefits = [
    'Reduce cloud costs by 40%',
    'Improve cost visibility by 90%',
    'Automate 80% of cost optimization',
    'Real-time budget monitoring',
    'Predictive cost forecasting',
    'Team-level cost accountability'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Cost Optimization</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud FinOps Optimizer
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Optimize your cloud costs with AI-powered insights, automated optimization, and real-time financial governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-green-400 hover:text-green-400 transition-all duration-300">
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
              Intelligent Cost Management
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our FinOps platform provides comprehensive cost optimization with AI-driven insights and automated recommendations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
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
                Why Choose Cloud FinOps?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Transform your cloud financial management with intelligent automation and proactive cost optimization.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
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
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                    <div className="text-slate-300 text-sm">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">90%</div>
                    <div className="text-slate-300 text-sm">Cost Visibility</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
                    <div className="text-slate-300 text-sm">Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">Real-time</div>
                    <div className="text-slate-300 text-sm">Monitoring</div>
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
              Ready to Optimize Cloud Costs?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join leading enterprises that save millions with intelligent cloud cost optimization and FinOps best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-green-400 hover:text-green-400 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}