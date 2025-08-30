import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Users, 
  Brain, 
  Search, 
  Target, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  Star, 
  Zap,
  Filter,
  MessageSquare,
  Calendar,
  BarChart3,
  Shield,
  Globe,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AIHRRecruitmentSuite() {
  const features = [
    {
      icon: Brain,
      title: 'AI Candidate Matching',
      description: 'Advanced AI algorithms that match candidates to job requirements with 95% accuracy'
    },
    {
      icon: Search,
      title: 'Intelligent Sourcing',
      description: 'AI-powered candidate discovery across multiple platforms and databases'
    },
    {
      icon: Filter,
      title: 'Smart Screening',
      description: 'Automated resume screening and candidate ranking based on skills and experience'
    },
    {
      icon: MessageSquare,
      title: 'AI Interview Assistant',
      description: 'Automated interview scheduling and AI-powered initial screening questions'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Data-driven insights on candidate success probability and retention rates'
    }
  ];

  const benefits = [
    'Reduce time-to-hire by 60%',
    'Improve candidate quality by 40%',
    'Cut recruitment costs by 35%',
    'Increase diversity in hiring',
    'Automate repetitive tasks',
    'Better candidate experience'
  ];

  const services = [
    {
      title: 'AI Recruitment Platform',
      description: 'Complete AI-powered recruitment management system',
      price: 'From $2,999/month',
      features: ['AI candidate matching', 'Automated screening', 'Interview scheduling', 'Analytics dashboard', 'Integration with ATS systems']
    },
    {
      title: 'Smart Sourcing Suite',
      description: 'AI-powered candidate discovery and outreach automation',
      price: 'From $1,499/month',
      features: ['Multi-platform sourcing', 'Automated outreach', 'Candidate engagement tracking', 'Talent pool management']
    },
    {
      title: 'AI Interview Platform',
      description: 'Automated interview scheduling and initial screening',
      price: 'From $999/month',
      features: ['Automated scheduling', 'AI screening questions', 'Video interview support', 'Candidate feedback system']
    },
    {
      title: 'Recruitment Analytics',
      description: 'Data-driven insights and reporting for recruitment optimization',
      price: 'From $799/month',
      features: ['Performance metrics', 'Predictive analytics', 'Custom reports', 'ROI tracking']
    }
  ];

  const technologies = [
    { name: 'Machine Learning', description: 'Advanced ML algorithms for candidate matching' },
    { name: 'Natural Language Processing', description: 'AI-powered resume and job description analysis' },
    { name: 'Predictive Analytics', description: 'Data-driven hiring success predictions' },
    { name: 'API Integration', description: 'Seamless integration with existing HR systems' },
    { name: 'Cloud Security', description: 'Enterprise-grade security and compliance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered HR Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI HR Recruitment
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Suite</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your recruitment process with AI-powered candidate matching, intelligent sourcing, 
              and automated screening. Reduce time-to-hire by 60% while improving candidate quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="https://ziontechgroup.com/services"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary AI Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI-powered recruitment suite combines cutting-edge technology with proven HR practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI HR Recruitment?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience unprecedented efficiency and results in your recruitment process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Service Packages
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the perfect package for your organization's recruitment needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 ${
                  index === 0 ? 'border-purple-500/50 bg-purple-500/5' : 'border-slate-700'
                }`}
              >
                {index === 0 && (
                  <div className="inline-flex items-center px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                
                <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full inline-flex justify-center items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    index === 0
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'border border-slate-600 text-slate-300 hover:border-purple-500/50 hover:text-purple-400'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with the latest AI and machine learning technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Recruitment?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of companies already using AI to revolutionize their hiring process
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}