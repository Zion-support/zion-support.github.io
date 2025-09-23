import React from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Users, Clock, Shield, CheckCircle, Star, Award, Rocket, ArrowRight, Phone, Video, Zap, TrendingUp, BarChart3, Globe, Heart, Settings, Monitor, Smartphone, Laptop, Calendar, GitBranch, PieChart, AlertTriangle } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIProjectManagement() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Planning",
      description: "Intelligent project planning with predictive analytics and resource optimization"
    },
    {
      icon: Target,
      title: "Smart Goal Setting",
      description: "AI-driven milestone tracking and adaptive goal adjustment"
    },
    {
      icon: Users,
      title: "Team Optimization",
      description: "Automated team allocation and workload balancing"
    },
    {
      icon: Clock,
      title: "Predictive Scheduling",
      description: "Forecast project timelines and identify potential delays"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Live project insights and performance metrics"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "AI-powered risk identification and mitigation strategies"
    }
  ];

  const benefits = [
    "Reduce project delivery time by 30-50%",
    "Improve resource utilization by 40-60%",
    "Increase project success rate by 25-40%",
    "Reduce project costs by 20-35%",
    "Eliminate manual reporting by 80%",
    "Improve stakeholder communication by 50%"
  ];

  const solutions = [
    {
      title: "AI Project Planning",
      description: "Intelligent project planning and scheduling with predictive analytics",
      features: ["Smart milestone planning", "Resource optimization", "Timeline forecasting"],
      price: "From $3,000/month"
    },
    {
      title: "Team Management AI",
      description: "AI-powered team allocation and performance optimization",
      features: ["Workload balancing", "Skill matching", "Performance tracking"],
      price: "From $2,500/month"
    },
    {
      title: "Risk Management Platform",
      description: "Advanced risk identification and mitigation strategies",
      features: ["Risk prediction", "Mitigation planning", "Real-time alerts"],
      price: "From $2,000/month"
    },
    {
      title: "Complete PM Suite",
      description: "Full AI-powered project management solution",
      features: ["All features", "Custom integrations", "Enterprise support"],
      price: "From $6,000/month"
    }
  ];

  const projectTypes = [
    "Software Development",
    "Construction & Engineering",
    "Marketing Campaigns",
    "Product Launches",
    "Research & Development",
    "Event Management"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Project Management Services - Zion Tech Group"
        description="Revolutionary AI-powered project management that optimizes planning, resource allocation, and risk management. Deliver projects faster, cheaper, and with higher success rates."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-400/30 mb-6">
              <Target className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-medium">AI Project Management</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                AI Project Management
              </span>
              <br />
              <span className="text-white">That Delivers Results</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your project delivery with AI-powered management that optimizes 
              planning, resource allocation, and risk management. Deliver projects faster, 
              cheaper, and with unprecedented success rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-orange-400/30 text-orange-300 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-300 flex items-center justify-center"
              >
                <Video className="w-5 h-5 mr-2" />
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced AI Technology for Better Project Delivery
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered project management platform combines machine learning, 
              predictive analytics, and automation to deliver exceptional project outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-orange-400/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-orange-400/40 group-hover:to-red-500/40 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Proven Results & Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered project management delivers measurable improvements 
              in delivery time, cost reduction, and project success rates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-4 bg-slate-700/30 rounded-lg p-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Flexible Solutions for Every Project
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of AI-powered project management solutions designed to 
              meet your specific project needs and scale with your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-orange-400/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-3xl font-bold text-orange-400 mb-6">{solution.price}</div>
                <button className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Optimized for Any Project Type
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered project management platform is designed to handle 
              diverse project types across all industries and complexity levels.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {projectTypes.map((projectType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <GitBranch className="w-6 h-6 text-orange-400" />
                </div>
                <span className="text-white font-medium text-sm">{projectType}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Project Delivery?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the AI revolution in project management and deliver projects 
              faster, cheaper, and with higher success rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-orange-400/30 text-orange-300 font-semibold rounded-lg hover:bg-orange-400/10 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}