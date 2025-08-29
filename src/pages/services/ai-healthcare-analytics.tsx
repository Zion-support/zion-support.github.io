import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Shield, TrendingUp, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const AIHealthcareAnalytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent mb-6">
            AI Healthcare Analytics
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Revolutionizing healthcare with advanced AI-powered analytics, predictive diagnostics, and intelligent patient care management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-red-500/20"
          >
            <Brain className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Predictive Diagnostics</h3>
            <p className="text-slate-300">
              Advanced machine learning algorithms for early disease detection and risk assessment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-pink-500/20"
          >
            <Shield className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Patient Data Security</h3>
            <p className="text-slate-300">
              HIPAA-compliant data protection with advanced encryption and privacy controls.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20"
          >
            <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Treatment Optimization</h3>
            <p className="text-slate-300">
              AI-driven treatment recommendations and personalized care plans.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get Started with AI Healthcare Analytics
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AIHealthcareAnalytics;