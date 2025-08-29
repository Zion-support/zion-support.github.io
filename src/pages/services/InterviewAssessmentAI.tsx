import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Users, 
  Brain, 
  Target, 
  Zap, 
  BarChart3, 
  Clock, 
  Award, 
  Star,
  Globe,
  Cpu,
  Database,
  CheckCircle,
  Eye,
  MessageCircle,
  FileText,
  Shield,
  TrendingUp,
  UserCheck,
  Calendar,
  Video
} from 'lucide-react';

export default function InterviewAssessmentAI() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Assessment",
      description: "Intelligent evaluation of candidate skills, personality, and cultural fit."
    },
    {
      icon: Video,
      title: "Video Interview Analysis",
      description: "Advanced video processing for facial expressions, tone, and communication skills."
    },
    {
      icon: Target,
      title: "Skill Gap Analysis",
      description: "Comprehensive assessment of technical and soft skills with detailed reporting."
    },
    {
      icon: Zap,
      title: "Automated Scheduling",
      description: "Intelligent interview scheduling and candidate communication automation."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Data-driven insights into hiring effectiveness and candidate performance."
    },
    {
      icon: Shield,
      title: "Bias-Free Evaluation",
      description: "Objective assessment algorithms that eliminate unconscious bias in hiring."
    }
  ];

  const benefits = [
    "Reduce hiring time by 50-70% with automated assessments",
    "Improve hiring quality by 40-60% through AI insights",
    "Reduce bias in hiring decisions by 80-90%",
    "Enhance candidate experience with 24/7 availability",
    "Lower cost per hire by 30-50%",
    "Improve retention rates by 25-40%"
  ];

  const assessmentTypes = [
    {
      type: "Technical Skills",
      description: "Programming tests, problem-solving, and technical knowledge assessment",
      icon: Cpu
    },
    {
      type: "Personality Assessment",
      description: "Behavioral analysis, cultural fit, and work style evaluation",
      icon: Users
    },
    {
      type: "Communication Skills",
      description: "Verbal and written communication, presentation, and interpersonal skills",
      icon: MessageCircle
    },
    {
      type: "Cognitive Ability",
      description: "Problem-solving, critical thinking, and analytical reasoning tests",
      icon: Brain
    },
    {
      type: "Situational Judgment",
      description: "Real-world scenarios and decision-making assessment",
      icon: Target
    },
    {
      type: "Cultural Fit",
      description: "Values alignment, team dynamics, and organizational culture match",
      icon: Globe
    }
  ];

  const useCases = [
    {
      industry: "Technology",
      description: "Software developer hiring, technical skills assessment, and coding challenges"
    },
    {
      industry: "Finance",
      description: "Analyst recruitment, risk assessment, and financial modeling evaluation"
    },
    {
      industry: "Healthcare",
      description: "Medical staff hiring, patient care assessment, and clinical skills evaluation"
    },
    {
      industry: "Sales & Marketing",
      description: "Sales representative hiring, communication skills, and performance potential"
    },
    {
      industry: "Manufacturing",
      description: "Engineering recruitment, technical skills, and safety compliance assessment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Interview Assessment AI - Zion Tech Group"
        description="Transform your hiring process with AI-powered candidate evaluation, automated assessments, and bias-free recruitment solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-400/30 mb-6">
              <Users className="w-5 h-5 text-emerald-400 mr-2" />
              <span className="text-emerald-300 font-medium">Interview Assessment AI</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Revolutionize Hiring with
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                {" "}AI-Powered Assessment
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your recruitment process with intelligent candidate evaluation, automated 
              assessments, and data-driven hiring decisions that improve quality and reduce bias.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-emerald-400/30 text-emerald-300 font-semibold rounded-lg hover:bg-emerald-400/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Assessment Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered interview assessment platform combines cutting-edge artificial intelligence 
              with proven hiring methodologies to deliver exceptional recruitment results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/30 hover:border-emerald-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Measurable Hiring Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See real results with our AI-powered assessment solutions that deliver quantifiable 
              improvements across all aspects of your recruitment process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-8 rounded-xl border border-emerald-400/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Industry-leading AI assessment algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Bias-free evaluation technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Global hiring expertise and compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">24/7 assessment and support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">Proven hiring success track record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Types Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Assessment Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform provides a wide range of assessment types to evaluate every aspect 
              of candidate suitability and potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessmentTypes.map((assessment, index) => (
              <motion.div
                key={assessment.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/20 hover:border-emerald-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-lg flex items-center justify-center">
                    <assessment.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{assessment.type}</h3>
                </div>
                <p className="text-gray-300 text-sm">{assessment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered assessment solutions are designed to work across industries, providing 
              tailored evaluation strategies for your specific hiring needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/20 hover:border-emerald-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 p-12 rounded-2xl border border-emerald-400/20 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their recruitment 
              process with our AI-powered assessment solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-emerald-400/30 text-emerald-300 font-semibold rounded-lg hover:bg-emerald-400/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}