import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Brain, 
  BarChart3, 
  Cloud, 
  Zap, 
  Users, 
  Lock,
  CheckCircle,
  ArrowRight,
  Activity,
  Database,
  Workflow,
  Target,
  Stethoscope,
  Microscope,
  Pill,
  Hospital
} from 'lucide-react';

const HealthcareSolutions: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms for early disease detection and accurate diagnosis.',
      benefits: ['Predictive analytics', 'Image recognition', 'Pattern analysis', 'Risk assessment']
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance & Security',
      description: 'Enterprise-grade security ensuring patient data protection and regulatory compliance.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance monitoring']
    },
    {
      icon: Cloud,
      title: 'Cloud-Based Healthcare Platform',
      description: 'Scalable infrastructure supporting telemedicine and remote patient monitoring.',
      benefits: ['Telehealth integration', 'Remote monitoring', 'Scalable architecture', '24/7 availability']
    },
    {
      icon: Workflow,
      title: 'Clinical Workflow Automation',
      description: 'Streamlined processes improving efficiency and patient care quality.',
      benefits: ['Process optimization', 'Automated workflows', 'Performance tracking', 'Quality metrics']
    }
  ];

  const solutions = [
    {
      category: 'Clinical Solutions',
      services: [
        'Electronic Health Records (EHR)',
        'Clinical Decision Support',
        'Medical Imaging Analysis',
        'Patient Monitoring Systems'
      ]
    },
    {
      category: 'Research & Analytics',
      services: [
        'Clinical Data Analytics',
        'Research Platform Development',
        'Real-time Data Processing',
        'Predictive Modeling'
      ]
    },
    {
      category: 'Telemedicine',
      services: [
        'Virtual Consultation Platforms',
        'Remote Patient Monitoring',
        'Mobile Health Applications',
        'Secure Video Conferencing'
      ]
    },
    {
      category: 'Compliance & Security',
      services: [
        'HIPAA Compliance Automation',
        'Data Security & Encryption',
        'Audit & Reporting Tools',
        'Privacy Protection Systems'
      ]
    }
  ];

  const useCases = [
    {
      icon: Hospital,
      title: 'Hospital Management',
      description: 'Comprehensive hospital information systems with integrated patient care workflows.'
    },
    {
      icon: Stethoscope,
      title: 'Primary Care',
      description: 'Streamlined primary care operations with patient engagement and care coordination.'
    },
    {
      icon: Microscope,
      title: 'Laboratory Services',
      description: 'Advanced laboratory information management with automated testing and reporting.'
    },
    {
      icon: Pill,
      title: 'Pharmacy Management',
      description: 'Integrated pharmacy systems with medication safety and inventory management.'
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
              <Heart className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Healthcare Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionizing Healthcare with
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI-Powered Technology
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Zion Tech Group delivers innovative healthcare solutions that improve patient outcomes, 
              streamline clinical operations, and ensure regulatory compliance. From AI diagnostics 
              to secure telemedicine platforms, we're transforming healthcare delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Explore Solutions
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
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
              Advanced Healthcare Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our healthcare solutions leverage cutting-edge AI, machine learning, and cloud 
              technologies to deliver superior patient care and operational efficiency.
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

      {/* Use Cases Section */}
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
              Healthcare Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions address the diverse needs of healthcare organizations, 
              from large hospital systems to specialized clinics and research institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
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
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From clinical operations to research and compliance, we provide 
              end-to-end solutions that transform healthcare delivery.
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
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how Zion Tech Group can help you implement innovative 
              healthcare solutions that improve patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Download Healthcare Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareSolutions;
