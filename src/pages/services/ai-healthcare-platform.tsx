import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Brain, Activity, Users, BarChart3, Clock, CheckCircle } from 'lucide-react';

export default function AIHealthcarePlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced machine learning algorithms for accurate and early disease detection"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Continuous patient monitoring with instant alerts and anomaly detection"
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security ensuring complete patient data protection"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast health trends and optimize treatment outcomes"
    },
    {
      icon: Users,
      title: "Care Coordination",
      description: "Seamless collaboration between healthcare providers and teams"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock AI assistance and automated healthcare workflows"
    }
  ];

  const benefits = [
    "Reduce diagnostic errors by up to 90%",
    "Improve patient outcomes through predictive care",
    "Streamline administrative workflows",
    "Enhance care coordination across teams",
    "Lower operational costs by 30-40%",
    "Ensure complete regulatory compliance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Healthcare
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI-powered healthcare platform that transforms patient care through 
              intelligent diagnostics, predictive analytics, and automated workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Healthcare AI Features
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive AI solutions designed specifically for modern healthcare environments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Measurable Healthcare Outcomes
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our AI Healthcare Platform delivers proven results across all healthcare metrics
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Implementation Stats</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Diagnostic Accuracy</span>
                    <span className="text-cyan-400 font-semibold">96%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-cyan-400 font-semibold">40%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Patient Satisfaction</span>
                    <span className="text-cyan-400 font-semibold">98%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join leading healthcare organizations using our AI platform to improve patient outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Request Demo
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}