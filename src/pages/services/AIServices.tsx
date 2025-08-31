import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cpu,
  Zap,
  Users,
  TrendingUp,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  MessageCircle,
  FileText,
  Workflow,
  Cloud,
  Shield,
  Server,
  Network,
  Building2,
  Globe,
  Activity,
  BarChart3,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Bot,
  Eye,
  Lock,
  Database,
  Code,
  Layers,
  Sparkles,
  Lightbulb,
  Rocket,
  Gauge,
  PieChart,
  LineChart,
  BarChart,
  ScatterChart,
  AreaChart
} from 'lucide-react';

export default function AIServices() {
  const services = [
    {
      title: 'Machine Learning',
      description: 'Build and deploy custom ML models for predictive analytics and automation',
      icon: Brain,
      features: [
        'Custom model development',
        'Data preprocessing',
        'Model training & validation',
        'Performance optimization',
        'Model deployment'
      ],
      benefits: [
        'Predictive insights',
        'Process automation',
        'Improved accuracy',
        'Cost reduction'
      ]
    },
    {
      title: 'Natural Language Processing',
      description: 'Enable machines to understand and process human language',
      icon: MessageCircle,
      features: [
        'Text analysis',
        'Sentiment analysis',
        'Language translation',
        'Chatbot development',
        'Document processing'
      ],
      benefits: [
        'Better customer service',
        'Automated content analysis',
        'Multilingual support',
        'Efficiency gains'
      ]
    },
    {
      title: 'Computer Vision',
      description: 'Extract insights from images and video using AI',
      icon: Eye,
      features: [
        'Image recognition',
        'Object detection',
        'Facial recognition',
        'Video analysis',
        'Quality inspection'
      ],
      benefits: [
        'Automated inspection',
        'Security enhancement',
        'Quality control',
        'Process automation'
      ]
    },
    {
      title: 'AI Automation',
      description: 'Streamline business processes with intelligent automation',
      icon: Workflow,
      features: [
        'Process automation',
        'Intelligent workflows',
        'Decision automation',
        'Predictive maintenance',
        'Resource optimization'
      ],
      benefits: [
        'Increased efficiency',
        'Reduced errors',
        'Cost savings',
        '24/7 operation'
      ]
    },
    {
      title: 'AI Consulting',
      description: 'Strategic guidance for AI implementation and transformation',
      icon: Lightbulb,
      features: [
        'AI strategy development',
        'Technology assessment',
        'Implementation planning',
        'Change management',
        'ROI optimization'
      ],
      benefits: [
        'Clear roadmap',
        'Risk mitigation',
        'Faster implementation',
        'Better outcomes'
      ]
    },
    {
      title: 'AI Infrastructure',
      description: 'Build scalable AI infrastructure and platforms',
      icon: Server,
      features: [
        'GPU clusters',
        'Distributed computing',
        'Model serving',
        'Data pipelines',
        'Monitoring & scaling'
      ],
      benefits: [
        'Scalable performance',
        'Cost optimization',
        'Reliable deployment',
        'Easy management'
      ]
    }
  ];

  const technologies = [
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
    'OpenAI GPT',
    'Hugging Face',
    'AWS SageMaker',
    'Google AI Platform',
    'Azure ML',
    'Kubernetes',
    'Docker',
    'Python',
    'R'
  ];

  const benefits = [
    {
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge AI capabilities',
      icon: Sparkles
    },
    {
      title: 'Efficiency',
      description: 'Automate complex tasks and processes',
      icon: Zap
    },
    {
      title: 'Insights',
      description: 'Discover hidden patterns in your data',
      icon: Brain
    },
    {
      title: 'Competitive Edge',
      description: 'Outperform competitors with AI-first approach',
      icon: Target
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Technology',
    'Energy',
    'Transportation',
    'Education'
  ];

  const useCases = [
    'Fraud Detection',
    'Customer Segmentation',
    'Predictive Maintenance',
    'Quality Control',
    'Demand Forecasting',
    'Risk Assessment',
    'Personalization',
    'Process Optimization'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"> Services</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with cutting-edge artificial intelligence. From machine learning 
            to computer vision, we help you harness the power of AI for competitive advantage.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/comprehensive-pricing-guide-2025"
              className="px-8 py-4 border border-purple-500/30 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end AI solutions 
              that transform your business operations and drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <Star className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              AI Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest AI frameworks and platforms to deliver 
              cutting-edge solutions for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((technology, index) => (
              <motion.div
                key={technology}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Brain className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:text-purple-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-purple-400 transition-colors text-sm">
                  {technology}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              AI Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how artificial intelligence can transform your business operations 
              and create new opportunities for growth and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Bot className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:text-purple-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-purple-400 transition-colors text-sm">
                  {useCase}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Artificial intelligence provides unprecedented opportunities for businesses to 
              automate, optimize, and innovate across all operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have experience applying AI across various industries 
              to solve unique business challenges and drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 text-center hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Building2 className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:text-purple-300 transition-colors" />
                <h3 className="text-white font-medium group-hover:text-purple-400 transition-colors text-sm">
                  {industry}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Embrace AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI services can transform your business, 
              automate processes, and create new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-purple-500/30 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                <span>View Case Studies</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}