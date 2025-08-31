import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Shield, 
  BarChart3, 
  Cloud, 
  Zap, 
  Brain, 
  Lock,
  CheckCircle,
  ArrowRight,
  Globe,
  Database,
  Workflow,
  Target
} from 'lucide-react';

const EnterpriseSolutions: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced analytics and insights to drive strategic decision-making across your enterprise.',
      benefits: ['Real-time data visualization', 'Predictive analytics', 'Custom dashboards', 'Automated reporting']
    },
    {
      icon: Shield,
      title: 'Enterprise Security & Compliance',
      description: 'Comprehensive security solutions ensuring your business meets all regulatory requirements.',
      benefits: ['SOC 2 compliance', 'Zero-trust architecture', 'Data encryption', 'Audit trails']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Scalable cloud solutions with automated deployment and management.',
      benefits: ['Multi-cloud strategy', 'Infrastructure as Code', 'CI/CD pipelines', '24/7 monitoring']
    },
    {
      icon: Workflow,
      title: 'Business Process Automation',
      description: 'Streamline operations with intelligent workflow automation and optimization.',
      benefits: ['Process mapping', 'Automated workflows', 'Performance tracking', 'Continuous improvement']
    }
  ];

  const solutions = [
    {
      category: 'Digital Transformation',
      services: [
        'Legacy System Modernization',
        'Cloud Migration Strategy',
        'API Integration Services',
        'Microservices Architecture'
      ]
    },
    {
      category: 'Data & Analytics',
      services: [
        'Data Warehouse Design',
        'Business Intelligence Platforms',
        'Real-time Analytics',
        'Data Governance & Quality'
      ]
    },
    {
      category: 'Security & Compliance',
      services: [
        'Cybersecurity Assessment',
        'Compliance Automation',
        'Threat Detection & Response',
        'Security Training Programs'
      ]
    },
    {
      category: 'AI & Machine Learning',
      services: [
        'Custom AI Solutions',
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Applications'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Building2 className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Enterprise Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Enterprise with
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Cutting-Edge Technology
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Zion Tech Group delivers enterprise-grade solutions that drive innovation, 
              efficiency, and competitive advantage. From AI-powered insights to secure 
              cloud infrastructure, we help enterprises thrive in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our enterprise solutions combine cutting-edge technology with proven methodologies 
              to deliver measurable business value and sustainable competitive advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
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

      {/* Solutions Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From strategy to implementation, we provide end-to-end solutions that 
              address your enterprise's most critical technology challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{solution.category}</h3>
                <ul className="space-y-2">
                  {solution.services.map((service, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center space-x-2">
                      <ArrowRight className="w-3 h-3 text-cyan-400" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help you achieve your digital 
              transformation goals and drive sustainable business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSolutions;
