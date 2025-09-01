import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import {

  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Users, 
  BarChart3, 
  Lock, 
  Heart,
  Globe,
  Rocket,
  Cpu,
  Database,
  Network,
  Workflow,
  BookOpen,
  MessageCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Target
} from 'lucide-react';

export default function AIServices() {

  const aiServices = [
    {

      category: 'AI Analytics & Intelligence',
      services: [
        {

          name: 'AI Predictive Analytics Platform',
          description: 'Advanced machine learning forecasting with 95%+ accuracy for business intelligence',
          icon: BarChart3,
          href: '/services/ai-predictive-analytics-platform',
          features: ['Real-time data processing', 'ML model training', 'Predictive insights', 'Custom dashboards']
        },
        {

          name: 'AI Business Intelligence Dashboard',
          description: 'Comprehensive BI solution powered by artificial intelligence',
          icon: Brain,
          href: '/services/ai-business-intelligence-dashboard',
          features: ['Data visualization', 'KPI tracking', 'Automated reporting', 'Trend analysis']
        }
      ]
    },
    {

      category: 'AI Automation & Workflows',
      services: [
        {

          name: 'AI Workflow Orchestrator',
          description: 'Intelligent process automation and workflow optimization',
          icon: Workflow,
          href: '/services/ai-workflow-orchestrator',
          features: ['Process automation', 'Smart routing', 'Performance monitoring', 'Scalable workflows']
        },
        {

          name: 'AI Autonomous Business Operations',
          description: 'Fully automated business processes with AI decision-making',
          icon: Rocket,
          href: '/services/ai-autonomous-business-operations-platform',
          features: ['Autonomous decision making', 'Process optimization', 'Real-time monitoring', 'Continuous learning']
        }
      ]
    },
    {

      category: 'AI Customer Experience',
      services: [
        {

          name: 'AI Customer Success Automation',
          description: 'Proactive customer engagement and success automation',
          icon: Users,
          href: '/services/ai-customer-success-automation',
          features: ['Customer journey mapping', 'Predictive churn prevention', 'Automated onboarding', 'Success metrics']
        },
        {

          name: 'AI Marketing Automation Platform',
          description: 'Intelligent marketing campaigns and customer segmentation',
          icon: Target,
          href: '/services/ai-marketing-automation-platform',
          features: ['Personalized campaigns', 'Behavioral targeting', 'A/B testing', 'ROI optimization']
        }
      ]
    },
    {

      category: 'AI Security & Compliance',
      services: [
        {

          name: 'AI Cybersecurity Suite',
          description: 'Advanced threat detection and security automation',
          icon: Shield,
          href: '/services/ai-cybersecurity-suite',
          features: ['Threat detection', 'Behavioral analysis', 'Automated response', 'Compliance monitoring']
        },
        {

          name: 'AI Customer Support Automation',
          description: 'Intelligent customer support with natural language processing',
          icon: MessageCircle,
          href: '/services/ai-customer-support-automation',
          features: ['Chatbot integration', 'Ticket routing', 'Knowledge base', 'Sentiment analysis']
        }
      ]
    }
  ];

  const emergingAITech = [
    {

      name: 'Quantum AI Platform',
      description: 'Next-generation quantum computing for AI applications',
      icon: Cpu,
      href: '/services/quantum-ai-platform'
    },
    {

      name: 'Edge AI Computing',
      description: 'AI processing at the edge for ultra-low latency',
      icon: Cpu,
      href: '/services/edge-ai-computing'
    },
    {

      name: 'AI Healthcare Analytics',
      description: 'Medical data analysis and diagnostic assistance',
      icon: Heart,
      href: '/services/ai-healthcare-analytics-platform'
    },
    {

      name: 'AI Blockchain Integration',
      description: 'Secure and transparent AI-powered blockchain solutions',
      icon: Lock,
      href: '/services/ai-blockchain-integration'
    }
  ];

  const benefits = [
    {

      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize business processes'
    },
    {

      icon: Brain,
      title: 'Intelligent Insights',
      description: 'Gain actionable insights from your data with AI analysis'
    },
    {

      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced threat detection and automated security responses'
    },
    {

      icon: Users,
      title: 'Better Customer Experience',
      description: 'Personalized interactions and proactive customer support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEO 
        title="AI Services - Zion Tech Group"
        description="Transform your business with cutting-edge AI services including predictive analytics, automation, cybersecurity, and customer experience solutions."
        keywords="AI services, machine learning, artificial intelligence, predictive analytics, automation, cybersecurity"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              AI-Powered
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Transform your business with cutting-edge artificial intelligence services. 
              From predictive analytics to autonomous operations, we deliver the future of technology today.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our AI services cover every aspect of modern business transformation, 
              from data analytics to autonomous operations.
            </p>
          </div>

          <div className="space-y-16">
            {aiServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.category}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {service.name}
                        </h4>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={service.href}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging AI Technology */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Emerging AI Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay ahead of the curve with our cutting-edge AI innovations and research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergingAITech.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {tech.description}
                </p>
                <Link
                  to={tech.href}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Explore →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the transformative power of AI with our proven solutions and expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Transform Your Business with AI?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how our AI services can revolutionize your operations, 
            enhance customer experience, and drive growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}