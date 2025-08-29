import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Stethoscope,
  Microscope,
  Pill,
  Activity,
  BarChart3,
  Lock,
  Globe,
  Clock,
  Star,
  Award,
  Rocket,
  Cpu,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Eye,
  Brain,
  Dna,
  TestTube,
  Building2,
  Car,
  UserCheck,
  FileText,
  MessageSquare,
  Video,
  Camera,
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Headphones,
  Speaker,
  Printer,
  Scanner,
  Activity,
  BarChart3,
  PieChart,
  Target,
  Crosshair,
  Radar,
  Satellite,
  Telescope,
  Microscope,
  Binoculars
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
      title: 'Predictive Analytics',
      description: 'Forecast health outcomes and identify risk factors before they become critical',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant Security',
      description: 'Enterprise-grade security with end-to-end encryption and compliance',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Continuous health monitoring with instant alerts and notifications',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Patient Management',
      description: 'Comprehensive patient records and care coordination platform',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track outcomes and optimize treatment protocols with data insights',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const useCases = [
    {
      title: 'Hospital Management',
      description: 'Streamline operations, reduce wait times, and improve patient outcomes',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Telemedicine',
      description: 'Enable remote consultations and virtual care delivery',
      icon: Video,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Clinical Research',
      description: 'Accelerate drug discovery and clinical trial management',
      icon: Microscope,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Preventive Care',
      description: 'Identify health risks early and promote wellness programs',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const technologies = [
    'Machine Learning & Deep Neural Networks',
    'Natural Language Processing (NLP)',
    'Computer Vision & Medical Imaging',
    'Predictive Analytics & Risk Assessment',
    'IoT & Wearable Device Integration',
    'Blockchain for Medical Records',
    'Cloud Computing & Edge Processing',
    'Real-time Data Streaming',
    'API-First Architecture',
    'Mobile-First Design'
  ];

  const benefits = [
    'Reduce diagnostic errors by up to 85%',
    'Improve patient outcomes by 40%',
    'Cut operational costs by 30%',
    'Increase patient satisfaction scores',
    'Enable 24/7 monitoring capabilities',
    'Reduce readmission rates',
    'Streamline administrative workflows',
    'Enhance clinical decision support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-red-900/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              AI Healthcare Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Revolutionizing Healthcare with
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
                {' '}AI Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform patient care with our comprehensive AI healthcare platform. 
              From diagnostics to treatment planning, our intelligent system enhances 
              medical decision-making and improves outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
                <Video className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Healthcare Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with medical expertise 
              to deliver unprecedented insights and capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} w-fit mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Healthcare Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From small clinics to large hospital networks, our platform scales 
              to meet your healthcare delivery requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-br ${useCase.color} w-fit mb-6`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built with the latest AI and healthcare technologies to ensure 
              reliability, security, and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Measurable Impact & Results
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI healthcare platform delivers tangible benefits that improve 
              both patient care and operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join leading healthcare providers who are already leveraging AI 
              to improve patient outcomes and operational efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Contact Sales
                <MessageSquare className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}