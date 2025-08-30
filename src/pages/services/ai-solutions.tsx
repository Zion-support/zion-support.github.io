import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Shield, 
  Cpu, 
  Activity,
  Globe,
  Rocket,
  Heart,
  BarChart3,
  Code,
  Database,
  Network,
  Eye,
  Atom,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

export function AISolutionsPage() {
  const aiServices = [
    {
      title: 'AI Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform.',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reporting', 'Data Visualization'],
      href: '/services/ai-business-intelligence'
    },
    {
      title: 'AI Sales Copilot',
      description: 'Revolutionize your sales process with intelligent automation and predictive lead scoring.',
      icon: Users,
      features: ['Lead Generation', 'Sales Forecasting', 'Customer Segmentation', 'Performance Analytics'],
      href: '/services/ai-sales-copilot'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Optimize your marketing campaigns with AI-driven personalization and automation.',
      icon: TrendingUp,
      features: ['Campaign Optimization', 'Personalization', 'A/B Testing', 'ROI Tracking'],
      href: '/services/ai-marketing-automation'
    },
    {
      title: 'AI Healthcare Platform',
      description: 'Advanced healthcare solutions powered by AI for improved patient outcomes.',
      icon: Heart,
      features: ['Diagnostic Support', 'Patient Monitoring', 'Treatment Planning', 'Research Analytics'],
      href: '/services/ai-healthcare-platform'
    },
    {
      title: 'AI Project Management',
      description: 'Streamline project workflows with intelligent task management and resource optimization.',
      icon: Target,
      features: ['Task Automation', 'Resource Allocation', 'Risk Assessment', 'Progress Tracking'],
      href: '/services/ai-project-management'
    },
    {
      title: 'AI Cybersecurity Suite',
      description: 'Protect your digital assets with AI-powered threat detection and response.',
      icon: Shield,
      features: ['Threat Detection', 'Incident Response', 'Vulnerability Assessment', 'Security Analytics'],
      href: '/services/ai-cybersecurity-suite'
    }
  ];

  const aiCapabilities = [
    {
      title: 'Machine Learning',
      description: 'Advanced ML algorithms for pattern recognition and predictive modeling',
      icon: Brain
    },
    {
      title: 'Natural Language Processing',
      description: 'Understanding and processing human language for better communication',
      icon: Code
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis for automated visual inspection',
      icon: Eye
    },
    {
      title: 'Robotic Process Automation',
      description: 'Automate repetitive tasks and workflows for increased efficiency',
      icon: Activity
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors based on historical data',
      icon: TrendingUp
    },
    {
      title: 'AI Ethics & Governance',
      description: 'Ensure responsible AI development and deployment',
      icon: Shield
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize workflows',
      icon: Zap
    },
    {
      title: 'Better Decision Making',
      description: 'Data-driven insights for informed strategic decisions',
      icon: Target
    },
    {
      title: 'Cost Reduction',
      description: 'Lower operational costs through intelligent automation',
      icon: DollarSign
    },
    {
      title: '24/7 Availability',
      description: 'AI systems work around the clock without fatigue',
      icon: Clock
    },
    {
      title: 'Scalability',
      description: 'Easily scale AI solutions as your business grows',
      icon: TrendingUp
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead with cutting-edge AI technology',
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions designed for the future.
              From automation to predictive analytics, we deliver AI that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our AI Services Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your industry and business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:text-cyan-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI Capabilities & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging the latest advancements in artificial intelligence and machine learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of AI with our proven solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can drive innovation and growth for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AISolutionsPage;