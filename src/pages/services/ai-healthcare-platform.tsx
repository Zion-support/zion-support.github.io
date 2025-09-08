import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Shield, 
  Activity, 
  Users, 
  Brain,
  Target, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  TrendingUp,
  Activity,
  Microscope,
  Pill,
  Stethoscope,
  Database,
  Lock,
  Globe,
  MessageCircle,
  Clock,
  Building,
  TestTube
} from 'lucide-react';

export default function AIHealthcarePlatform() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms for accurate disease detection and diagnosis',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: "Patient Care Optimization",
      description: "Intelligent patient monitoring and personalized care plans based on real-time data analysis"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant Security",
      description: "Enterprise-grade security with end-to-end encryption and compliance with healthcare regulations"
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Instant insights and actionable intelligence for healthcare providers',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Multi-user Access',
      description: 'Role-based access control for doctors, nurses, and administrators',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const solutions = [
    {
      icon: Lightbulb,
      title: 'Clinical Decision Support',
      description: 'AI-powered recommendations for treatment plans and medication management',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Medical Imaging Analysis',
      description: 'Computer vision for X-rays, MRIs, and CT scans with 99.9% accuracy',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Drug Interaction Checker',
      description: 'Real-time medication interaction analysis and dosage optimization',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Activity,
      title: 'Vital Signs Monitoring',
      description: 'Continuous monitoring of heart rate, blood pressure, and oxygen levels',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    'Reduce diagnostic errors by 85%',
    'Improve patient outcomes by 40%',
    'Cut healthcare costs by 30%',
    'Streamline clinical workflows',
    'Ensure regulatory compliance',
    'Enable remote patient monitoring'
  ];

  const useCases = [
    {
      industry: 'Hospitals',
      description: 'Comprehensive patient care and monitoring systems',
      icon: Building
    },
    {
      industry: 'Clinics',
      description: 'Streamlined patient management and diagnostics',
      icon: Stethoscope
    },
    {
      industry: 'Research',
      description: 'Advanced AI research and clinical trials support',
      icon: TestTube
    },
    {
      industry: 'Telemedicine',
      description: 'Remote healthcare delivery and monitoring',
      icon: Smartphone
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="AI Healthcare Platform - Intelligent Medical Solutions"
        description="Transform healthcare delivery with our AI-powered platform. Advanced diagnostics, patient monitoring, and clinical decision support for modern healthcare."
        keywords={['AI healthcare', 'medical AI', 'healthcare platform', 'patient monitoring', 'clinical decision support', 'HIPAA compliant']}
      />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Healthcare Platform
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Intelligent medical solutions that transform patient care through advanced AI and machine learning
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Learn More
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Healthcare Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Cutting-edge AI technology designed specifically for healthcare professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Healthcare Platform?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the future of healthcare with our comprehensive AI solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${solution.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-zion-slate-light">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose AI Healthcare Platform?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Transform your healthcare delivery with measurable improvements in patient care and operational efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-zion-slate-light text-lg">{benefit}</span>
              </motion.div>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Healthcare Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored solutions for various healthcare settings and specialties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <useCase.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join leading healthcare institutions using AI to improve patient outcomes and operational efficiency
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Schedule Demo
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Healthcare Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our AI platform addresses the most critical challenges in modern healthcare.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-900/20 via-pink-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading healthcare providers who are already using our AI platform 
                to improve patient outcomes and operational efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                >
                  Get Your Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border border-red-500/30 text-red-400 hover:bg-red-500/10 font-semibold rounded-lg transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}