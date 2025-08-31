import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Cpu, 
  Database, 
  Network, 
  Zap, 
  Shield,
  Target,
  Users,
  Globe,
  Lock,
  BarChart3,
  Lightbulb,
  Monitor,
  TrendingUp
} from 'lucide-react';

const DigitalTwinSolutions = () => {
  const features = [
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring and visualization of physical assets and processes',
      benefits: ['Live data streams', 'Real-time alerts', 'Instant notifications']
    },
    {
      icon: Cpu,
      title: 'Predictive Analytics',
      description: 'AI-powered predictions for maintenance, performance, and optimization',
      benefits: ['Predictive maintenance', 'Performance forecasting', 'Risk assessment']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration with IoT sensors, SCADA systems, and enterprise data',
      benefits: ['Multi-source integration', 'Data synchronization', 'Quality assurance']
    },
    {
      icon: Network,
      title: 'Connected Systems',
      description: 'Interconnected digital twins for comprehensive system modeling',
      benefits: ['System integration', 'Cross-platform communication', 'Unified dashboard']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Automated responses and actions based on digital twin insights',
      benefits: ['Smart automation', 'Process optimization', 'Efficiency gains']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance and audit trails',
      benefits: ['Data encryption', 'Access control', 'Audit logging']
    }
  ];

  const applications = [
    {
      industry: 'Manufacturing',
      useCases: ['Production Line Optimization', 'Quality Control', 'Predictive Maintenance']
    },
    {
      industry: 'Smart Cities',
      useCases: ['Traffic Management', 'Energy Optimization', 'Infrastructure Monitoring']
    },
    {
      industry: 'Healthcare',
      useCases: ['Patient Monitoring', 'Medical Device Management', 'Facility Optimization']
    },
    {
      industry: 'Energy',
      useCases: ['Grid Management', 'Renewable Energy', 'Power Plant Optimization']
    }
  ];

  const benefits = [
    {
      icon: Monitor,
      title: 'Real-time Visibility',
      description: 'Complete visibility into operations and performance metrics'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous improvement through data-driven insights and automation'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Proactive identification and prevention of potential issues'
    },
    {
      icon: Zap,
      title: 'Cost Reduction',
      description: 'Significant cost savings through predictive maintenance and optimization'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Eye className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Twin Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create virtual replicas of physical assets and processes for real-time monitoring, predictive analytics, and intelligent automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
                Explore Solutions
              </button>
              <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Digital Twin Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Harness the power of digital twins to create intelligent, connected, and optimized systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how digital twins are revolutionizing operations across diverse industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={application.industry}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <Target className="w-6 h-6 text-teal-400 mr-3" />
                  {application.industry}
                </h3>
                <div className="space-y-3">
                  {application.useCases.map((useCase) => (
                    <div key={useCase} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {useCase}
                    </div>
                  ))}
                </div>
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Digital Twins?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the transformative benefits of digital twin technology for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built on cutting-edge IoT, AI, and cloud technologies for maximum performance and scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['IoT Sensors', 'Cloud Computing', 'AI/ML', 'Real-time Analytics'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center hover:border-gray-600 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Digital Twin?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your physical assets into intelligent, connected digital twins for unprecedented insights and optimization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTwinSolutions;