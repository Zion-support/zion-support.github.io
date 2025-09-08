import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Users, 
  Brain, 
  Target, 
  Shield, 
  BarChart3, 
  Cpu, 
  Database, 
  Network,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Award,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Headphones,
  HelpCircle,
  Bot,
  Globe,
  UserCheck,
  FileText,
  Calendar,
  PieChart,
  Zap,
  Briefcase,
  GraduationCap,
  Heart
} from 'lucide-react';

export default function AIHRPlatform() {
  const features = [
    {
      icon: Users,
      title: 'Talent Acquisition',
      description: 'AI-powered recruitment and candidate screening for faster, more accurate hiring decisions'
    },
    {
      icon: Brain,
      title: 'Performance Analytics',
      description: 'Intelligent performance tracking and predictive analytics for employee development'
    },
    {
      icon: Target,
      title: 'Employee Engagement',
      description: 'AI-driven insights into team morale, satisfaction, and retention strategies'
    },
    {
      icon: FileText,
      title: 'HR Automation',
      description: 'Streamlined HR processes from onboarding to offboarding with intelligent workflows'
    },
    {
      icon: PieChart,
      title: 'Predictive HR',
      description: 'AI-powered forecasting for workforce planning and talent management'
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Enterprise-grade security and regulatory compliance for sensitive HR data'
    }
  ];

  const benefits = [
    'Faster and more accurate hiring decisions',
    'Improved employee retention and satisfaction',
    'Reduced HR administrative workload',
    'Data-driven workforce planning',
    'Enhanced compliance and risk management',
    'Scalable HR operations for growing organizations'
  ];

  const useCases = [
    {
      title: 'Enterprise HR Management',
      description: 'Comprehensive AI-powered HR platform for large organizations managing thousands of employees across multiple locations'
    },
    {
      title: 'Startup Talent Acquisition',
      description: 'Scalable recruitment solutions for growing companies that need to hire quickly and efficiently'
    },
    {
      title: 'Remote Team Management',
      description: 'AI-enhanced tools for managing distributed teams, tracking performance, and maintaining engagement'
    },
    {
      title: 'Compliance & Risk Management',
      description: 'Automated compliance monitoring and risk assessment for HR operations in regulated industries'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Basic AI HR platform for small businesses',
      features: [
        'AI-powered recruitment',
        'Basic performance tracking',
        'Employee database',
        'Standard reporting'
      ]
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced AI HR solution for medium-scale operations',
      features: [
        'Advanced AI algorithms',
        'Performance analytics',
        'Employee engagement tools',
        'Custom workflows',
        'Advanced reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Full-scale AI HR platform for large organizations',
      features: [
        'Custom AI models',
        'Predictive analytics',
        '24/7 dedicated support',
        'White-label solutions',
        'Custom integrations'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="AI HR Platform - Zion Tech Group"
        description="Revolutionary AI-powered HR platform for talent acquisition, performance management, employee engagement, and predictive workforce analytics. Transform your HR operations with intelligent automation."
        keywords="AI HR platform, HR automation, talent acquisition AI, performance management, employee engagement, workforce analytics"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-800/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI HR Platform
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing human resources with cutting-edge AI technology. 
              From talent acquisition to performance management, our platform transforms HR operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-futuristic text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
            <button className="btn-futuristic-outline text-lg px-8 py-4">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI HR Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge machine learning with HR expertise 
              to deliver unprecedented capabilities in talent management and workforce optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI HR Platform?
            </h2>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              Experience the future of human resources with our AI-powered platform that delivers 
              unprecedented efficiency, insights, and strategic value for your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-lg text-white">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI HR platform is transforming organizations across industries and enabling new possibilities 
              in talent management and workforce optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your AI HR Plan
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your organization's growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-green-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full btn-futuristic">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
               Join the future of human resources with our AI-powered platform. 
               Contact us today to learn how we can optimize your workforce management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic-outline text-lg px-8 py-4 bg-white text-green-600 hover:bg-green-50">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
              <button className="btn-futuristic text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to explore the future of HR? Our team of experts 
                is here to help you build AI-powered HR systems that drive organizational success.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-white">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Request Information
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your HR needs"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-futuristic">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}