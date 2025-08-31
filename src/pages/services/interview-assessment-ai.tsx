import React from 'react';
import { motion } from 'framer-motion';
import { Users, Brain, Target, BarChart3, Clock, Shield, CheckCircle, Star, Award, Rocket, ArrowRight, Phone, Video, FileText, TrendingUp, Zap, Eye, Heart, MessageCircle, Calendar, Award as Trophy } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function InterviewAssessmentAI() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Candidate Evaluation",
      description: "Advanced machine learning algorithms assess candidates objectively and consistently"
    },
    {
      icon: Video,
      title: "Video Interview Analysis",
      description: "Analyze facial expressions, tone, and communication skills in real-time"
    },
    {
      icon: Target,
      title: "Skills Assessment",
      description: "Comprehensive evaluation of technical and soft skills"
    },
    {
      icon: BarChart3,
      title: "Predictive Performance Analytics",
      description: "Forecast candidate success and cultural fit with high accuracy"
    },
    {
      icon: Shield,
      title: "Bias Elimination",
      description: "Remove unconscious bias and ensure fair evaluation processes"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Conduct assessments anytime, anywhere with automated scheduling"
    }
  ];

  const benefits = [
    "Reduce hiring time by 60-80%",
    "Improve candidate quality by 40-60%",
    "Eliminate unconscious bias completely",
    "Save 15+ hours per hire on interviews",
    "Increase diversity in hiring by 30-50%",
    "Reduce turnover by 25-40%"
  ];

  const assessmentTypes = [
    {
      title: "Technical Skills Assessment",
      description: "Comprehensive evaluation of programming, problem-solving, and technical knowledge",
      duration: "45-90 minutes",
      price: "From $150/candidate"
    },
    {
      title: "Behavioral & Cultural Fit",
      description: "AI analysis of personality traits, communication, and cultural alignment",
      duration: "30-60 minutes",
      price: "From $100/candidate"
    },
    {
      title: "Leadership Assessment",
      description: "Evaluation of leadership potential, decision-making, and team management",
      duration: "60-120 minutes",
      price: "From $200/candidate"
    },
    {
      title: "Full Assessment Suite",
      description: "Complete evaluation covering all aspects of candidate suitability",
      duration: "2-3 hours",
      price: "From $350/candidate"
    }
  ];

  const industries = [
    "Technology & Software",
    "Healthcare & Life Sciences",
    "Finance & Banking",
    "Manufacturing & Engineering",
    "Retail & E-commerce",
    "Consulting & Professional Services"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Interview Assessment Services - Zion Tech Group"
        description="Revolutionary AI-powered interview assessment services that eliminate bias, improve hiring quality, and streamline recruitment processes. Get objective candidate evaluations with predictive analytics."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-6">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">AI Interview Assessment</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              <span className="text-white">Interview Assessment</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your hiring process with AI-powered interview assessment technology. 
              Eliminate bias, improve candidate quality, and make data-driven hiring decisions 
              with unprecedented accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-400/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300 flex items-center justify-center"
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
              Advanced AI Technology for Better Hiring
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered assessment platform combines natural language processing, 
              computer vision, and machine learning to deliver objective candidate evaluations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-purple-400/40 group-hover:to-pink-500/40 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-purple-400" />
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
              Our AI-powered interview assessment services deliver measurable improvements 
              in hiring efficiency, candidate quality, and organizational diversity.
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

      {/* Assessment Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Assessment Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of AI-powered assessment types designed to evaluate 
              different aspects of candidate suitability and potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentTypes.map((assessment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{assessment.title}</h3>
                <p className="text-gray-300 mb-4">{assessment.description}</p>
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <Clock className="w-4 h-4 mr-2" />
                  {assessment.duration}
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-4">{assessment.price}</div>
                <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered assessment technology is successfully deployed across 
              diverse industries, helping organizations make better hiring decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-white font-medium text-sm">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the AI revolution in recruitment and make better hiring decisions 
              with objective, data-driven candidate assessments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Your Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-purple-400/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300 flex items-center justify-center"
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