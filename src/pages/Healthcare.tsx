import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Brain, 
  Database, 
  Cloud, 
  Zap, 
  Users, 
  Lock,
  Activity,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Healthcare: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms for accurate disease detection and diagnosis'
    },
    {
      icon: Database,
      title: 'Secure Health Records',
      description: 'HIPAA-compliant electronic health record management with blockchain security'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Platform',
      description: 'Scalable healthcare infrastructure built for modern medical practices'
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Enterprise-grade security meeting all healthcare regulatory requirements'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Continuous patient monitoring with predictive analytics and alerts'
    },
    {
      icon: Users,
      title: 'Patient Engagement',
      description: 'Interactive patient portals and mobile health applications'
    }
  ];

  const solutions = [
    {
      title: 'AI Healthcare Analytics Platform',
      description: 'Comprehensive analytics solution for healthcare data insights',
      href: '/services/ai-healthcare-analytics-platform'
    },
    {
      title: 'Telemedicine Platform',
      description: 'Secure video conferencing and remote patient care solutions',
      href: '/services/telemedicine-platform'
    },
    {
      title: 'Medical Device Integration',
      description: 'IoT connectivity for medical devices and equipment monitoring',
      href: '/services/medical-device-integration'
    },
    {
      title: 'Clinical Decision Support',
      description: 'AI-powered clinical decision support systems for healthcare providers',
      href: '/services/clinical-decision-support'
    }
  ];

  const benefits = [
    'Improved patient outcomes through AI-powered diagnostics',
    'Enhanced operational efficiency and reduced administrative burden',
    'Better patient engagement and satisfaction',
    'Comprehensive compliance with healthcare regulations',
    'Scalable solutions for healthcare organizations of all sizes',
    'Real-time data insights for informed decision making'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Healthcare Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transforming healthcare delivery through innovative AI-powered solutions, 
              secure data management, and cutting-edge medical technology integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our comprehensive healthcare solutions combine AI, security, and innovation 
              to deliver better patient care and operational efficiency.
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
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our specialized healthcare technology solutions designed to 
              meet the unique needs of modern medical practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <a
                  href={solution.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Healthcare Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the benefits of cutting-edge healthcare technology designed 
              to improve patient care and operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Healthcare Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative healthcare technology solutions can 
              improve patient care and streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Us Today
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;