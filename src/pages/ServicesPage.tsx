import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Users } from 'lucide-react';

interface ServicesPageProps {
  service?: string;
  category?: string;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ service, category }) => {
  const { service: urlService } = useParams();
  const activeService = service || urlService || category || 'overview';

  const services = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Revolutionary AI-powered content generation for marketing, documentation, and creative writing',
      icon: Brain,
      features: [
        'Multi-format content generation',
        'Brand voice consistency',
        'SEO optimization',
        'Multi-language support',
        'Real-time collaboration'
      ],
      stats: { value: '85%', label: 'Faster Content Creation' },
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'smart-appointment-scheduler',
      title: 'Smart Appointment Scheduler',
      description: 'Intelligent scheduling system with AI-powered optimization and conflict resolution',
      icon: Zap,
      features: [
        'AI-powered scheduling optimization',
        'Automatic conflict resolution',
        'Multi-timezone support',
        'Integration with calendar systems',
        'Smart reminder system'
      ],
      stats: { value: '73%', label: 'Scheduling Efficiency' },
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Comprehensive workflow automation with intelligent decision-making capabilities',
      icon: Brain,
      features: [
        'Intelligent process automation',
        'Dynamic workflow adaptation',
        'Exception handling',
        'Performance monitoring',
        'Scalable architecture'
      ],
      stats: { value: '520%', label: 'Productivity Increase' },
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'ai-virtual-assistant',
      title: 'AI Virtual Assistant',
      description: 'Advanced virtual assistant with natural language processing and contextual understanding',
      icon: Users,
      features: [
        'Natural language processing',
        'Contextual understanding',
        'Multi-channel support',
        'Learning capabilities',
        'Integration with business systems'
      ],
      stats: { value: '99.7%', label: 'Accuracy Rate' },
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics',
      description: 'Advanced analytics platform with AI-powered insights and predictive modeling',
      icon: Brain,
      features: [
        'Predictive analytics',
        'Real-time data processing',
        'Automated insights generation',
        'Interactive dashboards',
        'Custom reporting'
      ],
      stats: { value: '2,400%', label: 'ROI Improvement' },
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'ai-intelligent-document-processing',
      title: 'Intelligent Document Processing',
      description: 'AI-powered document processing with OCR, classification, and data extraction',
      icon: Shield,
      features: [
        'Advanced OCR technology',
        'Document classification',
        'Data extraction automation',
        'Quality assurance',
        'Compliance monitoring'
      ],
      stats: { value: '98.9%', label: 'Processing Accuracy' },
      color: 'from-emerald-500 to-green-600'
    },
    {
      id: 'real-time-cognitive-automation',
      title: 'Real-Time Cognitive Automation',
      description: 'Real-time cognitive automation with sub-2ms latency for instant decision making',
      icon: Zap,
      features: [
        'Sub-2ms latency processing',
        'Real-time decision making',
        'Cognitive load balancing',
        'Adaptive algorithms',
        'High availability'
      ],
      stats: { value: '<2ms', label: 'Response Time' },
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'advanced-cybersecurity-ai',
      title: 'Advanced Cybersecurity AI',
      description: 'Next-generation cybersecurity with AI-powered threat detection and prevention',
      icon: Shield,
      features: [
        'AI threat detection',
        'Behavioral analysis',
        'Automated response',
        'Zero-day protection',
        'Compliance monitoring'
      ],
      stats: { value: '99.97%', label: 'Threat Prevention' },
      color: 'from-gray-500 to-slate-600'
    }
  ];

  const selectedService = services.find(s => s.id === activeService) || services[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {selectedService.title}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              {selectedService.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  activeService === service.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${selectedService.color} flex items-center justify-center mb-8`}>
                <selectedService.icon className="text-white" size={40} />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {selectedService.title}
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                {selectedService.description}
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-8">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {selectedService.stats.value}
                </div>
                <div className="text-gray-600">
                  {selectedService.stats.label}
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                {selectedService.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Services Overview */}
      {activeService === 'overview' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                All Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI services for every business need
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="text-sm font-semibold text-purple-600 mb-4">
                    {service.stats.value} {service.stats.label}
                  </div>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-purple-600 hover:text-purple-700 font-semibold flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServicesPage;