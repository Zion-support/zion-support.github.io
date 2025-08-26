import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Shield, Database, Users, Clock, TrendingUp, CheckCircle } from 'lucide-react';

const HealthcareSolutions: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms for accurate disease detection and diagnosis'
    },
    {
      icon: Database,
      title: 'Patient Data Analytics',
      description: 'Comprehensive analysis of patient data for personalized treatment plans'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Full compliance with healthcare data protection regulations'
    },
    {
      icon: Users,
      title: 'Patient Engagement',
      description: 'Digital tools to improve patient communication and care coordination'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous health monitoring and early warning systems'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-driven insights to predict health outcomes and prevent complications'
    }
  ];

  const solutions = [
    {
      title: 'Electronic Health Records (EHR)',
      description: 'Secure, interoperable EHR systems with AI-powered insights',
      benefits: ['Improved accuracy', 'Better coordination', 'Reduced errors']
    },
    {
      title: 'Telemedicine Platform',
      description: 'Comprehensive virtual care solution with AI diagnostics',
      benefits: ['Remote consultations', 'AI symptom analysis', 'Prescription management']
    },
    {
      title: 'Medical Imaging AI',
      description: 'Advanced image analysis for radiology and pathology',
      benefits: ['Faster diagnosis', 'Higher accuracy', 'Reduced workload']
    },
    {
      title: 'Population Health Management',
      description: 'Data-driven approach to managing community health outcomes',
      benefits: ['Preventive care', 'Risk stratification', 'Resource optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Healthcare Technology Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforming Healthcare with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {' '}AI Innovation
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Empowering healthcare providers with cutting-edge AI solutions that improve patient outcomes, 
              streamline operations, and ensure compliance with healthcare regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Healthcare Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our healthcare solutions combine cutting-edge AI technology with deep healthcare domain expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From patient care to administrative efficiency, we provide end-to-end healthcare technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6">{solution.description}</p>
                <div className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join leading healthcare providers who are already leveraging AI to improve patient care and operational efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareSolutions;