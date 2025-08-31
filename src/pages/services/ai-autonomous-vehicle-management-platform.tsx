import React from 'react';
import { motion } from 'framer-motion';
import { 
  Car, Shield, Brain, Zap, Globe, Users, TrendingUp, 
  Award, Clock, CheckCircle, ArrowRight, Play, 
  BarChart3, Cpu, Network, Satellite, MapPin, 
  Smartphone, Database, Server, Lock, Eye, 
  Shield, Activity, Target, Star, Rocket
} from 'lucide-react';

export default function AIAutonomousVehicleManagementPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Navigation',
      description: 'Advanced machine learning algorithms for real-time route optimization and obstacle detection'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Protection',
      description: 'Multi-layered security protocols to protect autonomous vehicles from cyber threats'
    },
    {
      icon: Globe,
      title: 'Global Fleet Management',
      description: 'Centralized control and monitoring of autonomous vehicle fleets worldwide'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI-driven insights for predictive maintenance and performance optimization'
    },
    {
      icon: Network,
      title: '5G Connectivity',
      description: 'Ultra-low latency communication for real-time vehicle control and data transmission'
    },
    {
      icon: Lock,
      title: 'Compliance & Safety',
      description: 'Built-in regulatory compliance and safety standards for autonomous operations'
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Improve safety with 99.9% accident prevention',
    '24/7 autonomous operation capability',
    'Real-time fleet optimization and routing',
    'Scalable solution for any fleet size',
    'Comprehensive reporting and analytics'
  ];

  const useCases = [
    {
      title: 'Logistics & Transportation',
      description: 'Autonomous delivery vehicles and freight transportation systems',
      icon: Car
    },
    {
      title: 'Public Transportation',
      description: 'Self-driving buses and shuttles for urban mobility',
      icon: Users
    },
    {
      title: 'Mining & Construction',
      description: 'Autonomous heavy machinery and construction vehicles',
      icon: Target
    },
    {
      title: 'Agriculture',
      description: 'Smart farming equipment and autonomous tractors',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Car className="w-4 h-4" />
              <span>AI Autonomous Vehicle Management</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Autonomous Vehicle
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Management Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your fleet operations with our cutting-edge AI-powered autonomous vehicle management platform. 
              Experience the future of transportation with intelligent, safe, and efficient autonomous systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI technology with industry-leading safety standards
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Fleet Operations
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience unprecedented efficiency and safety with our autonomous vehicle management platform. 
                Reduce costs, improve reliability, and scale your operations seamlessly.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
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
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Performance Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">99.9%</div>
                      <div className="text-gray-300">Safety Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">40%</div>
                      <div className="text-gray-300">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform serves diverse industries with specialized autonomous solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Fleet?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of autonomous transportation with Zion Tech Group's cutting-edge platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}