import React from 'react';
import { SEO  } from '../../components/SEO';
import { motion  } from 'framer-motion';
import { Heart, Shield, Brain, Zap, Users, TrendingUp, CheckCircle, ArrowRight  } from 'lucide-react';

export default function HealthcareSolutions(...args: any[]): any {
  const solutions = [
    {
      icon: Heart,
      title: 'Healthcare Analytics',
      description: 'AI-powered analytics for patient care optimization and clinical decision support',
      features: ['Patient Risk Assessment', 'Treatment Optimization', 'Clinical Outcomes Analysis', 'Predictive Modeling'],
      href: '/services/ai-healthcare-analytics'
    },
    {
      icon: Shield,
      title: 'Healthcare Security',
      description: 'HIPAA-compliant security solutions for healthcare data protection',
      features: ['Data Encryption', 'Access Control', 'Audit Logging', 'Compliance Monitoring'],
      href: '/services/ai-compliance-copilot'
    },
    {
      icon: Brain,
      title: 'AI Diagnostics',
      description: 'Machine learning solutions for medical imaging and diagnostic support',
      features: ['Medical Image Analysis', 'Symptom Assessment', 'Disease Prediction', 'Treatment Recommendations'],
      href: '/services/healthcare-tech'
    },
    {
      icon: Zap,
      title: 'Healthcare Automation',
      description: 'Intelligent automation for healthcare workflows and administrative tasks',
      features: ['Appointment Scheduling', 'Patient Communication', 'Billing Automation', 'Resource Management'],
      href: '/services/ai-workflow-automation'
    },
    {
      icon: Users,
      title: 'Patient Experience',
      description: 'Digital solutions to enhance patient engagement and satisfaction',
      features: ['Patient Portals', 'Telemedicine', 'Mobile Apps', 'Communication Tools'],
      href: '/services/ai-customer-experience-platform'
    },
    {
      icon: TrendingUp,
      title: 'Population Health',
      description: 'Analytics and insights for population health management and preventive care',
      features: ['Health Trends Analysis', 'Preventive Care', 'Population Risk Assessment', 'Intervention Planning'],
      href: '/services/data-analytics'
    }
  ];

  const benefits = [
    'Improved patient outcomes and care quality',
    'Enhanced operational efficiency and cost reduction',
    'Better compliance with healthcare regulations',
    'Increased patient satisfaction and engagement',
    'Data-driven clinical decision making',
    'Streamlined administrative processes'
  ];

  const specialties = [
    'Primary Care',
    'Specialty Medicine',
    'Emergency Medicine',
    'Mental Health',
    'Pediatrics',
    'Geriatrics',
    'Oncology',
    'Cardiology'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Healthcare Solutions - Zion Tech Group"
        description="Transform healthcare delivery with AI-powered solutions. From diagnostics to patient care, we deliver innovative healthcare technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Healthcare Solutions for
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {' '}Better Care
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform healthcare delivery with AI-powered solutions that improve patient outcomes, 
              enhance operational efficiency, and ensure regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Healthcare Quote
              </a>
              <a
                href="/contact"
                className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-gray-500 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our healthcare solutions address the unique challenges of modern healthcare 
              delivery while improving patient care and operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index)  => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={solution.href}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Solutions */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Healthcare AI Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (<div key={index} className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white"/>
                    </div>
                    <h3 className="text-2xl font-bold">{solution.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>))}
                  </ul>
                  
                  <Link to={solution.href} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>);
        })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Benefits for Healthcare Organizations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (<div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white"/>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>);
        })}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Healthcare Specialties
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are designed to meet the unique needs of various 
              healthcare specialties and practice types.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md: anygrid-cols-4 gap-6">
            {specialties.map((specialty, index)  => (
              <motion.div
                key={specialty}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">{specialty}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Healthcare with AI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading healthcare organizations using our AI solutions to improve patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Healthcare Demo
              </Link>
              <Link to="/contact" className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300">
                Contact Healthcare Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  {/* Removed stray closing brace */}

