import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, AlertTriangle, FileText, Users, Lock, Zap, Brain, BarChart3, Globe, ArrowRight, Star, Clock, TrendingUp, Award, Target, Lightbulb, Cpu, Database, Network, ShieldCheck } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIComplianceAssistant() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Compliance Assistant - Zion Tech Group"
        description="Automated regulatory compliance solutions powered by AI. Ensure your business meets all regulatory requirements with intelligent compliance monitoring and reporting."
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
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Compliance
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Compliance Assistant
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Automated regulatory compliance solutions that keep your business ahead of changing regulations. 
              Our AI-powered platform ensures continuous compliance monitoring and proactive risk management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                Watch Demo
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
              Intelligent Compliance Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI Compliance Assistant provides comprehensive regulatory monitoring and automated compliance management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Monitoring",
                description: "Continuous monitoring of regulatory changes and automated compliance assessment"
              },
              {
                icon: ShieldCheck,
                title: "Risk Assessment",
                description: "Proactive identification and mitigation of compliance risks before they become issues"
              },
              {
                icon: FileText,
                title: "Automated Reporting",
                description: "Generate compliance reports automatically with real-time data and insights"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Enable cross-functional teams to work together on compliance initiatives"
              },
              {
                icon: Lock,
                title: "Secure & Private",
                description: "Enterprise-grade security with data privacy and confidentiality guarantees"
              },
              {
                icon: Zap,
                title: "Real-time Updates",
                description: "Instant notifications about regulatory changes and compliance requirements"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
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
            className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Compliance Process?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join leading organizations that trust our AI Compliance Assistant to maintain regulatory excellence
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200"
            >
              Start Your Free Trial
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}