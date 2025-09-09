import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Shield, 
  Users, 
  Database, 
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Download,
  MessageCircle
} from 'lucide-react';

const AIAnalytics: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning algorithms to forecast trends and identify patterns before they happen.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: BarChart3,
      title: 'Real-time Insights',
      description: 'Get instant analytics and visualizations with our real-time data processing capabilities.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-driven recommendations to optimize your business processes and improve efficiency.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    },
    {
      icon: Zap,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with intelligent insights and recommendations.',
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20'
    }
  ];

  const useCases = [
    {
      title: 'Customer Behavior Analysis',
      description: 'Understand customer patterns and preferences to improve engagement and retention.',
      icon: Users,
      benefits: ['Customer segmentation', 'Purchase prediction', 'Churn prevention']
    },
    {
      title: 'Financial Forecasting',
      description: 'Predict market trends and optimize investment strategies with AI-powered insights.',
      icon: TrendingUp,
      benefits: ['Risk assessment', 'Portfolio optimization', 'Market prediction']
    },
    {
      title: 'Operational Intelligence',
      description: 'Monitor and optimize business operations in real-time with intelligent analytics.',
      icon: Database,
      benefits: ['Process optimization', 'Resource allocation', 'Performance monitoring']
    },
    {
      title: 'Marketing Optimization',
      description: 'Optimize marketing campaigns and ROI with data-driven insights and predictions.',
      icon: Target,
      benefits: ['Campaign optimization', 'Audience targeting', 'ROI improvement']
    }
  ];

  const technologies = [
    'Machine Learning Algorithms',
    'Deep Learning Models',
    'Natural Language Processing',
    'Computer Vision',
    'Predictive Modeling',
    'Statistical Analysis',
    'Data Mining',
    'Real-time Processing'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group\'s AI Analytics transformed our data strategy. We now have insights we never thought possible.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Data Scientist, DataFlow',
      content: 'The predictive capabilities are incredible. We\'re making better decisions faster than ever before.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Analytics, GrowthCo',
      content: 'Implementation was smooth and the results exceeded our expectations. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600/20 rounded-full">
              <Brain className="h-16 w-16 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI-Powered
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Analytics
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your data into actionable intelligence with our cutting-edge AI analytics platform. 
            Discover hidden patterns, predict future trends, and make data-driven decisions with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful AI Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`${feature.bgColor} rounded-xl p-6 border border-slate-700`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <feature.icon className={`h-8 w-8 ${feature.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Real-World Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <useCase.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Advanced Technologies</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our AI analytics platform leverages cutting-edge technologies to deliver 
                unprecedented insights and predictive capabilities.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                >
                  <span className="text-gray-300 text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Analytics?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-600/20 rounded-full">
                  <Lightbulb className="h-12 w-12 text-green-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Insights</h3>
              <p className="text-gray-300">
                Discover hidden patterns and correlations that traditional analytics miss, 
                leading to breakthrough insights and opportunities.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-600/20 rounded-full">
                  <Shield className="h-12 w-12 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with end-to-end encryption, compliance certifications, 
                and enterprise-grade data protection.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-600/20 rounded-full">
                  <Zap className="h-12 w-12 text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300">
                Process massive datasets in seconds with our optimized AI algorithms 
                and cloud-native architecture.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Data?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the AI revolution and unlock the full potential of your data with 
              Zion Tech Group's advanced analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Demo
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" />
                Talk to Expert
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AIAnalytics;