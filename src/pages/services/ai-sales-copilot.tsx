import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, TrendingUp, Target, Users, BarChart3, Zap, Brain, Star, ArrowRight, Headphones, Phone, Mail, Calendar, CheckCircle, Award, Lightbulb, Cpu, Database, Network, Rocket } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AISalesCopilot() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Sales Copilot - Zion Tech Group"
        description="Revolutionize your sales process with AI-powered automation. Our AI Sales Copilot helps teams close more deals with intelligent lead scoring, personalized outreach, and predictive analytics."
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
              <MessageSquare className="w-4 h-4 mr-2" />
              AI-Powered Sales
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Sales Copilot
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your sales team with AI-powered automation that identifies opportunities, 
              personalizes outreach, and helps close more deals. Boost revenue with intelligent sales intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                Schedule Demo
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
              Sales Intelligence Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI Sales Copilot provides comprehensive sales automation and intelligence capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Lead Scoring",
                description: "Intelligent lead qualification and scoring based on behavior and engagement patterns"
              },
              {
                icon: MessageSquare,
                title: "Personalized Outreach",
                description: "Automated, personalized messaging that resonates with each prospect"
              },
              {
                icon: Target,
                title: "Predictive Analytics",
                description: "Forecast sales outcomes and identify high-probability opportunities"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Enable sales teams to work together with shared insights and strategies"
              },
              {
                icon: BarChart3,
                title: "Performance Insights",
                description: "Real-time analytics and reporting on sales performance and trends"
              },
              {
                icon: Zap,
                title: "Workflow Automation",
                description: "Automate repetitive tasks and focus on high-value sales activities"
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
              Ready to Revolutionize Your Sales Process?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join leading sales teams that trust our AI Sales Copilot to boost revenue and efficiency
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}