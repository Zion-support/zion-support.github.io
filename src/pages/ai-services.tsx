import { motion } from 'framer-motion';
import { Brain, Zap, Target, Users, Shield, BarChart3, Cloud, Lock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function AIServices() {
  const aiServiceCategories = [
    {
      name: 'AI-Powered Business Intelligence',
      description: 'Advanced analytics and business intelligence solutions powered by artificial intelligence',
      icon: Brain,
      count: 18,
      color: 'from-purple-400 to-pink-500',
      solutions: ['Predictive Analytics', 'Data Visualization', 'Business Intelligence', 'Machine Learning Models', 'Real-time Analytics', 'Custom Dashboards']
    },
    {
      name: 'AI Automation & Workflow',
      description: 'Intelligent automation solutions that streamline business processes and workflows',
      icon: Zap,
      count: 22,
      color: 'from-blue-400 to-cyan-500',
      solutions: ['Process Automation', 'Workflow Optimization', 'RPA Solutions', 'Intelligent Automation', 'Business Process Management', 'Task Automation']
    },
    {
      name: 'AI-Powered Customer Experience',
      description: 'AI-driven solutions that enhance customer interactions and improve satisfaction',
      icon: Users,
      count: 15,
      color: 'from-green-400 to-emerald-500',
      solutions: ['Chatbots', 'Customer Support', 'Personalization', 'Sentiment Analysis', 'Customer Analytics', 'Voice Assistants']
    },
    {
      name: 'AI Security & Compliance',
      description: 'Intelligent security solutions that protect data and ensure regulatory compliance',
      icon: Shield,
      count: 12,
      color: 'from-red-400 to-orange-500',
      solutions: ['Threat Detection', 'Fraud Prevention', 'Compliance Monitoring', 'Security Analytics', 'Risk Assessment', 'Privacy Protection']
    }
  ];

  const featuredAIServices = [
    {
      title: 'AI-Powered Business Intelligence Platform',
      description: 'Advanced analytics platform that uses machine learning to provide actionable business insights and predictive analytics',
      price: 'From $2,999/month',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization', 'Automated Reporting', 'API Integration'],
      href: '/services/ai-business-intelligence',
      color: 'from-purple-400 to-pink-500',
      popular: true
    },
    {
      title: 'Intelligent Document Processing Suite',
      description: 'AI-powered document processing platform that automatically extracts, categorizes, and analyzes information from various document types',
      price: 'From $1,499/month',
      features: ['OCR Technology', 'Natural Language Processing', 'Automated Classification', 'Data Extraction', 'Compliance Monitoring', 'Integration APIs'],
      href: '/services/ai-document-processing',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'AI-Powered Marketing Automation',
      description: 'Intelligent marketing automation that personalizes campaigns, optimizes customer journeys, and maximizes ROI through AI-driven insights',
      price: 'From $2,499/month',
      features: ['Personalization Engine', 'Predictive Customer Scoring', 'A/B Testing Automation', 'Multi-channel Campaigns', 'ROI Analytics', 'CRM Integration'],
      href: '/services/ai-marketing-automation',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our comprehensive AI solutions designed to drive innovation, efficiency, and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {aiServiceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{category.description}</p>
              <div className="text-blue-400 font-semibold">{category.count} Solutions</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredAIServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-slate-500/50 transition-all duration-300"
            >
              {service.popular && (
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <div className="text-3xl font-bold text-white mb-6">{service.price}</div>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className={`w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold text-center block hover:shadow-lg transition-all duration-300`}
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}