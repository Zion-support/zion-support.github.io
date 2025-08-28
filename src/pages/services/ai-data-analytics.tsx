import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Brain, Database, Zap, Target, Users, Lock, ArrowRight, TrendingUp, PieChart, LineChart, Activity, Cpu, Network, Shield, Globe, Award, Lightbulb } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIDataAnalytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Data Analytics - Zion Tech Group"
        description="Transform your data into actionable insights with AI-powered analytics. Our platform provides advanced data processing, predictive modeling, and intelligent business intelligence solutions."
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
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              AI-Powered Analytics
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Data Analytics
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Unlock the full potential of your data with AI-powered analytics that provide deep insights, 
              predictive capabilities, and actionable intelligence for informed decision-making.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center"
              >
                Explore Platform
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                View Demo
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
              Advanced Analytics Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI Data Analytics platform provides comprehensive data processing and intelligence capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Insights",
                description: "Advanced machine learning algorithms that uncover hidden patterns and trends"
              },
              {
                icon: Database,
                title: "Data Processing",
                description: "Handle massive datasets with real-time processing and analysis capabilities"
              },
              {
                icon: Target,
                title: "Predictive Modeling",
                description: "Forecast future trends and outcomes with high accuracy models"
              },
              {
                icon: Users,
                title: "Collaborative Analytics",
                description: "Enable teams to work together on data analysis and insights"
              },
              {
                icon: Lock,
                title: "Secure & Compliant",
                description: "Enterprise-grade security with data privacy and compliance features"
              },
              {
                icon: Zap,
                title: "Real-time Analytics",
                description: "Instant insights and dashboards updated in real-time"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
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
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Data Strategy?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join leading organizations that trust our AI Data Analytics platform for intelligent insights
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
            >
              Start Your Analytics Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}