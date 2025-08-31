import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Brain, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Search,
  BookOpen,
  Clock,
  DollarSign,
  BarChart3,
  Lock,
  Eye,
  FileSearch,
  UserCheck,
  Target,
  AlertTriangle,
  Database,
  Network,
  Globe,
  Cpu,
  FileText,
  Calendar,
  Award,
  TrendingUp,
  Briefcase,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIHRPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Recruitment',
      description: 'Intelligent candidate screening and matching using advanced algorithms'
    },
    {
      icon: Users,
      title: 'Employee Management',
      description: 'Comprehensive HR management with automated workflows and processes'
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Built-in compliance with GDPR, HIPAA, and other HR regulations'
    },
    {
      icon: Zap,
      title: 'Performance Analytics',
      description: 'Real-time performance tracking and AI-driven insights'
    },
    {
      icon: Heart,
      title: 'Employee Engagement',
      description: 'AI-powered engagement surveys and satisfaction monitoring'
    },
    {
      icon: CheckCircle,
      title: 'Automated Onboarding',
      description: 'Streamlined onboarding processes with intelligent automation'
    }
  ];

  const useCases = [
    {
      title: 'Talent Acquisition',
      description: 'AI-powered recruitment and candidate management',
      icon: UserCheck
    },
    {
      title: 'Performance Management',
      description: 'Continuous performance tracking and development planning',
      icon: TrendingUp
    },
    {
      title: 'Employee Development',
      description: 'Personalized training and career development paths',
      icon: BookOpen
    },
    {
      title: 'HR Analytics',
      description: 'Data-driven insights for strategic HR decision making',
      icon: BarChart3
    }
  ];

  const benefits = [
    'Reduce hiring time by 60%',
    'Improve candidate quality by 40%',
    'Increase employee retention by 35%',
    'Lower HR operational costs by 50%',
    'Enhanced compliance and risk management',
    'Scalable for any organization size'
  ];

  const modules = [
    {
      title: 'Recruitment',
      description: 'AI-powered candidate sourcing and screening',
      icon: UserCheck
    },
    {
      title: 'Onboarding',
      description: 'Automated employee onboarding workflows',
      icon: Briefcase
    },
    {
      title: 'Performance',
      description: 'Continuous performance management',
      icon: TrendingUp
    },
    {
      title: 'Analytics',
      description: 'Comprehensive HR analytics and reporting',
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-900 to-cyan-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-indigo-500/20 rounded-full">
                <Users className="w-12 h-12 text-indigo-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent">
              AI HR Platform
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto">
              Transform your HR operations with AI-powered recruitment, employee management, and intelligent automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-indigo-900 font-semibold rounded-lg transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced AI-Powered HR Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI HR platform combines cutting-edge machine learning with HR expertise to deliver unprecedented efficiency and insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl border border-indigo-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive HR Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From recruitment to performance management, our AI platform handles every aspect of HR operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete HR Platform Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our modular AI HR platform provides comprehensive solutions for all your HR needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <module.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI HR Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your HR operations with unprecedented efficiency, insights, and employee satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your HR with AI?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join leading organizations already using AI to revolutionize their HR operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-indigo-900 font-semibold rounded-lg transition-all duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIHRPlatform;