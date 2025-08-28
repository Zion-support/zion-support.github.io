import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, BarChart3, Zap, Target, Users, Lock, ArrowRight, Calculator, PieChart, LineChart, Activity, Cpu, Network, Shield, Globe, Award, Lightbulb } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function FinOpsAdvisor() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="FinOps Advisor - Zion Tech Group"
        description="Optimize your cloud costs with AI-powered FinOps solutions. Our platform provides intelligent cost management, resource optimization, and financial governance for cloud infrastructure."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Cloud Cost Optimization
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              FinOps Advisor
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your cloud financial operations with AI-powered cost optimization and governance. 
              Reduce cloud spend while improving performance and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center"
              >
                Start Optimization
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                Cost Analysis
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Financial Operations Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our FinOps Advisor provides comprehensive cost management and optimization capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator,
                title: "Cost Analysis",
                description: "Deep insights into cloud spending patterns and cost drivers"
              },
              {
                icon: TrendingDown,
                title: "Cost Optimization",
                description: "AI-powered recommendations to reduce cloud costs"
              },
              {
                icon: Target,
                title: "Budget Management",
                description: "Set and track budgets with automated alerts and controls"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Enable cross-functional teams to manage cloud costs together"
              },
              {
                icon: Lock,
                title: "Governance",
                description: "Policy enforcement and compliance for cloud spending"
              },
              {
                icon: Zap,
                title: "Automation",
                description: "Automate cost optimization and resource management"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your Cloud Costs?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join leading organizations that trust our FinOps Advisor for cost optimization
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
            >
              Start Cost Optimization
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}