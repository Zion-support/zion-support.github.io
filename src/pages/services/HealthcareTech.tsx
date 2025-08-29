import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Heart, Shield, Brain, Users, Zap, Database, Globe, BarChart3, CheckCircle, Lock, Cpu, Stethoscope } from 'lucide-react';

export default function HealthcareTech() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms for accurate disease detection and medical image analysis.',
      benefits: ['Early detection', 'High accuracy', 'Reduced errors', 'Faster results']
    },
    {
      icon: Heart,
      title: 'Remote Patient Monitoring',
      description: 'Continuous health monitoring systems with real-time alerts and predictive analytics.',
      benefits: ['24/7 monitoring', 'Early intervention', 'Reduced hospital visits', 'Better outcomes']
    },
    {
      icon: Shield,
      title: 'Healthcare Security',
      description: 'HIPAA-compliant security solutions protecting patient data and ensuring privacy.',
      benefits: ['Data encryption', 'Access control', 'Audit trails', 'Compliance ready']
    },
    {
      icon: Database,
      title: 'Health Data Analytics',
      description: 'Comprehensive analysis of health data for insights and improved decision making.',
      benefits: ['Population health', 'Treatment optimization', 'Cost reduction', 'Quality improvement']
    }
  ];

  const useCases = [
    {
      title: 'Medical Imaging',
      description: 'AI-powered analysis of X-rays, MRIs, and CT scans for accurate diagnosis.',
      icon: Brain,
      benefits: ['Faster diagnosis', 'Improved accuracy', 'Reduced workload', 'Cost savings']
    },
    {
      title: 'Telemedicine',
      description: 'Virtual healthcare platforms enabling remote consultations and care delivery.',
      icon: Users,
      benefits: ['Accessibility', 'Convenience', 'Cost reduction', 'Better reach']
    },
    {
      title: 'Drug Discovery',
      description: 'AI-driven pharmaceutical research accelerating drug development and testing.',
      icon: Cpu,
      benefits: ['Faster development', 'Cost reduction', 'Better targeting', 'Safety improvement']
    },
    {
      title: 'Personalized Medicine',
      description: 'Tailored treatment plans based on individual genetic and health data.',
      icon: Heart,
      benefits: ['Better outcomes', 'Reduced side effects', 'Targeted treatment', 'Precision care']
    }
  ];

  const technologies = [
    'Machine Learning',
    'Computer Vision',
    'Natural Language Processing',
    'IoT Medical Devices',
    'Blockchain Health Records',
    'Cloud Healthcare Platforms',
    '5G Medical Networks',
    'Edge Computing for Healthcare'
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Improved Accuracy',
      description: 'AI algorithms provide more accurate diagnoses and treatment recommendations.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security measures protect sensitive patient information.'
    },
    {
      icon: BarChart3,
      title: 'Better Outcomes',
      description: 'Data-driven insights lead to improved patient care and health outcomes.'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Telemedicine and remote monitoring enable healthcare access worldwide.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Healthcare Technology Services - Zion Tech Group"
        description="Transform healthcare delivery with AI-powered diagnostics, remote monitoring, and secure health data solutions. Improve patient outcomes with cutting-edge technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Healthcare
              <span className="block bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with AI-powered diagnostics, remote monitoring, 
              and secure health data solutions. Improve patient outcomes with 
              cutting-edge technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Stethoscope className="w-16 h-16 text-red-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Brain className="w-16 h-16 text-pink-500 animate-bounce" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive healthcare technology services deliver the innovation, 
              security, and intelligence needed to transform patient care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-red-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Healthcare Tech?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Healthcare technology offers unique advantages that can transform 
              patient care and improve health outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how healthcare technology is transforming patient care and 
              enabling new possibilities in medical treatment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-slate-300 mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage cutting-edge healthcare technologies and frameworks to 
              deliver robust, secure, and compliant solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-red-400/50 transition-all duration-300"
              >
                <div className="text-red-400 mb-3">
                  <Zap className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-white font-medium">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join the healthcare technology revolution and unlock new possibilities 
              for patient care with Zion Tech Group.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}