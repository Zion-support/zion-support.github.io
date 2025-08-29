import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Zap, CheckCircle, ArrowRight, Clock, Users } from 'lucide-react';

const InterviewAssessment: React.FC = () => {
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
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-6">
            Interview Assessment AI
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            AI-powered interview assessment and candidate evaluation platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20"
          >
            <Users className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Candidate Evaluation</h3>
            <p className="text-slate-300">
              Automated candidate assessment and scoring.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20"
          >
            <Users className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Interview Automation</h3>
            <p className="text-slate-300">
              AI-driven interview process automation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.30000000000000004 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20"
          >
            <Users className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Talent Analytics</h3>
            <p className="text-slate-300">
              Comprehensive talent analytics and insights.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get Started with Interview Assessment AI
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default InterviewAssessment;
