import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Activity, 
  Users, 
  Brain,
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Lightbulb, 
  BarChart3, 
  Smartphone, 
  Monitor, 
  AlertTriangle, 
  FileText,
  TrendingUp,
  Stethoscope,
  Microscope,
  Database,
  Lock,
  Globe,
  MessageCircle,
  Clock,
  Building,
  Flask
} from 'lucide-react';

const AIHealthcarePlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms for accurate disease detection and diagnosis',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Patient Monitoring',
      description: 'Real-time health monitoring with predictive analytics and early warning systems',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security with full HIPAA compliance and data protection',
      color: 'from-green-500 to-emerald-500'
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
      icon: Flask
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
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Healthcare Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive AI solutions that address the most critical healthcare challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
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
            ))}
          </div>
        </div>
      </section>

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

export default AIHealthcarePlatform;