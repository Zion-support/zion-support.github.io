import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Search, 
  Brain, 
  Target, 
  Shield, 
  BarChart3, 
  Cpu, 
  Database, 
  Network,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Award,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Headphones,
  HelpCircle,
  Bot,
  Globe,
  FileText,
  BookOpen,
  Zap,
  Lightbulb,
  TrendingUp,
  Database,
  Network,
  Cpu
} from 'lucide-react';

export default function AIAutonomousResearchAssistant() {
  const features = [
    {
      icon: Search,
      title: 'Intelligent Research Discovery',
      description: 'AI-powered research exploration and literature review with automated source identification'
    },
    {
      icon: Brain,
      title: 'Autonomous Analysis',
      description: 'Self-directed research analysis and hypothesis generation using advanced machine learning'
    },
    {
      icon: Target,
      title: 'Data Synthesis',
      description: 'Intelligent compilation and synthesis of research findings from multiple sources'
    },
    {
      icon: FileText,
      title: 'Report Generation',
      description: 'Automated research report creation with citations, summaries, and insights'
    },
    {
      icon: Lightbulb,
      title: 'Insight Discovery',
      description: 'AI-driven identification of patterns, trends, and novel research opportunities'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Advanced validation and verification of research sources and findings'
    }
  ];

  const benefits = [
    '90% faster research completion times',
    'Comprehensive literature coverage',
    'Automated insight generation',
    'Reduced research bias',
    '24/7 autonomous operation',
    'Scalable research capabilities'
  ];

  const useCases = [
    {
      title: 'Academic Research',
      description: 'AI-powered research assistance for universities, research institutions, and academic researchers with automated literature reviews and analysis'
    },
    {
      title: 'Market Research',
      description: 'Intelligent market analysis and competitive intelligence gathering with automated trend identification and report generation'
    },
    {
      title: 'Scientific Discovery',
      description: 'AI-enhanced scientific research with automated hypothesis testing, data analysis, and breakthrough identification'
    },
    {
      title: 'Business Intelligence',
      description: 'Autonomous business research and competitive analysis with real-time market monitoring and strategic insights'
    }
  ];

  const pricing = [
    {
      name: 'Researcher',
      price: '$299',
      period: '/month',
      description: 'Basic AI research assistant for individual researchers',
      features: [
        'Basic research discovery',
        'Literature review',
        'Report generation',
        'Standard citations'
      ]
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Advanced AI research platform for research teams',
      features: [
        'Advanced AI analysis',
        'Multi-source synthesis',
        'Custom research areas',
        'Advanced reporting',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,399',
      period: '/month',
      description: 'Full-scale AI research platform for large organizations',
      features: [
        'Custom AI models',
        'Multi-domain research',
        '24/7 dedicated support',
        'White-label solutions',
        'Custom integrations'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="AI Autonomous Research Assistant Platform - Zion Tech Group"
        description="Revolutionary AI-powered autonomous research assistant for intelligent research discovery, analysis, and insight generation. Transform your research process with AI automation."
        keywords="AI research assistant, autonomous research, research automation, AI literature review, research analysis, AI insights"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-purple-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Research Assistant
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing research with cutting-edge AI technology. 
              From autonomous discovery to intelligent analysis, our platform transforms research processes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-futuristic text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
            <button className="btn-futuristic-outline text-lg px-8 py-4">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Research Assistant Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge machine learning with research expertise 
              to deliver unprecedented capabilities in autonomous research and analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 hover:border-violet-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-violet-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Autonomous Research Assistant?
            </h2>
            <p className="text-xl text-violet-200 max-w-3xl mx-auto">
              Experience the future of research with our AI-powered platform that delivers 
              unprecedented speed, accuracy, and insights for your research projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-violet-400 mt-1 flex-shrink-0" />
                <p className="text-lg text-white">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI autonomous research assistant platform is transforming industries and enabling new possibilities 
              in research discovery, analysis, and insight generation across diverse domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-violet-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your AI Research Assistant Plan
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your research needs and project requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-violet-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-violet-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-violet-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full btn-futuristic">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Research Process?
            </h2>
            <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
               Join the future of autonomous research with our AI-powered platform. 
               Contact us today to learn how we can accelerate your research discoveries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic-outline text-lg px-8 py-4 bg-white text-violet-600 hover:bg-violet-50">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
              <button className="btn-futuristic text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to explore the future of autonomous research? Our team of experts 
                is here to help you build AI-powered research systems that accelerate discovery.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-violet-400" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-violet-400" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-violet-400" />
                  <span className="text-white">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Request Information
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your research needs"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-futuristic">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}