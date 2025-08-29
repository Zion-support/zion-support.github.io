import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, BarChart3, Target, Users, Zap, Globe, Award, Calculator, Lock, Eye, Clock } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function FinOpsAdvisor() {
  const features = [
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "AI-powered cost analysis and optimization recommendations for cloud resources"
    },
    {
      icon: TrendingDown,
      title: "Spend Forecasting",
      description: "Predictive analytics for cloud spending with budget planning and alerts"
    },
    {
      icon: BarChart3,
      title: "Resource Utilization",
      description: "Monitor and optimize resource usage across all cloud platforms"
    },
    {
      icon: Target,
      title: "Budget Management",
      description: "Set and track budgets with automated alerts and cost controls"
    },
    {
      icon: Users,
      title: "Team Accountability",
      description: "Track costs by team, project, and individual usage patterns"
    },
    {
      icon: Zap,
      title: "Automated Actions",
      description: "Automatically scale resources and implement cost-saving measures"
    }
  ];

  const benefits = [
    "Reduce cloud costs by 30-50%",
    "Improve resource utilization by 40%",
    "Eliminate waste and unused resources",
    "Optimize spending across teams and projects",
    "Forecast costs with 95% accuracy",
    "Implement FinOps best practices"
  ];

  const cloudPlatforms = [
    {
      title: "AWS Cost Optimization",
      description: "Optimize EC2, RDS, S3, and other AWS services with intelligent recommendations"
    },
    {
      title: "Azure Cost Management",
      description: "Monitor and optimize Azure spending with automated cost controls"
    },
    {
      title: "Google Cloud Optimization",
      description: "Reduce GCP costs with AI-powered resource optimization and scheduling"
    },
    {
      title: "Multi-Cloud Management",
      description: "Unified cost management across multiple cloud platforms and providers"
    }
  ];

  const capabilities = [
    "Real-time cost monitoring and alerts",
    "Automated cost optimization recommendations",
    "Resource utilization analysis",
    "Budget planning and forecasting",
    "Team cost allocation and chargebacks",
    "Reserved instance and savings plan optimization",
    "Spot instance management",
    "Cost anomaly detection and alerts"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="FinOps Advisor - Zion Tech Group"
        description="Optimize cloud costs and implement FinOps best practices with AI-powered cost analysis and automated optimization."
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              AI-Powered Cost Optimization
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              FinOps Advisor
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your cloud cost management with AI-powered FinOps optimization. 
              Reduce costs by 30-50% while improving resource utilization and implementing 
              industry best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                Start Optimizing
              </button>
              <button className="px-8 py-4 border border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300">
                Cost Analysis
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
              Comprehensive FinOps Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our FinOps Advisor provides end-to-end cloud cost management with 
              intelligent automation and optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-emerald-400 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg flex items-center justify-center mb-4">
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
              Proven Cost Savings
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join hundreds of organizations already achieving significant cost reductions with FinOps optimization.
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
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Multi-Cloud Support
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Optimize costs across all major cloud platforms with unified management and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{platform.title}</h3>
                <p className="text-slate-300">{platform.description}</p>
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
              Advanced FinOps Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Built with enterprise-grade technology for comprehensive cost management.
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
                <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                <span className="text-slate-300">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Cloud Costs?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations already saving millions with intelligent FinOps optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

