import React from 'react';
<<<<<<< HEAD
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { RefreshCw, Target, Users, TrendingUp, Zap, Globe, ArrowRight, CheckCircle } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/website-audit-and-enhancement-98df

const DigitalTransformation: React.FC = () => {
  const features = [
    {
      icon: RefreshCw,
      title: "Process Automation",
<<<<<<< HEAD
      description: "Streamline operations with intelligent automation solutions"
    },
    {
      icon: Target,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation roadmap and execution"
=======
      description: "Streamline operations with intelligent automation solutions",
      features: ["Workflow Automation", "RPA Implementation", "Business Process Optimization", "Efficiency Metrics"],
      icon: "🤖"
    },
    {
      title: "Workflow Optimization",
      description: "Redesign and optimize business workflows for maximum efficiency",
      features: ["Process Mapping", "Bottleneck Analysis", "Workflow Redesign", "Performance Monitoring"],
      icon: "📊"
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
    },
    {
      icon: Users,
      title: "Change Management",
<<<<<<< HEAD
      description: "Expert guidance through organizational transformation"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Data-driven insights to improve business performance"
    }
  ];

  const benefits = [
    "Increased operational efficiency by 50%",
    "Enhanced customer experience and satisfaction",
    "Reduced operational costs and waste",
    "Improved decision-making with real-time data",
    "Competitive advantage in the digital marketplace"
=======
      description: "Guide your organization through digital transformation with expert change management",
      features: ["Stakeholder Engagement", "Training Programs", "Communication Strategy", "Success Metrics"],
      icon: "🔄"
    },
    {
      title: "Technology Strategy",
      description: "Develop a comprehensive roadmap for your digital transformation journey",
      features: ["Technology Assessment", "Roadmap Planning", "Vendor Selection", "Implementation Strategy"],
      icon: "🎯"
    }
  ];

  const transformationPhases = [
    { phase: "Assessment", icon: "🔍", description: "Evaluate current state and identify opportunities" },
    { phase: "Strategy", icon: "📋", description: "Develop comprehensive transformation roadmap" },
    { phase: "Implementation", icon: "🚀", description: "Execute transformation initiatives with precision" },
    { phase: "Optimization", icon: "⚡", description: "Continuously improve and optimize processes" }
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Digital Transformation - Zion Tech Group"
        description="Transform your business for the digital age with our comprehensive digital transformation services."
        keywords="digital transformation, process automation, digital strategy, change management, performance optimization"
        canonical="https://ziontechgroup.com/services/digital-transformation"
      />

<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-amber-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              {" "}Transformation
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Embrace the future of business with our comprehensive digital transformation services 
            designed to modernize your operations and drive sustainable growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
              Start Your Transformation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Transformation Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end digital transformation solutions for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Transformation Services?</h2>
              <p className="text-xl text-gray-600">
                Experience the benefits of a well-executed digital transformation
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our digital transformation services can modernize your operations and drive growth.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Transformation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate the digital future with confidence. Our comprehensive transformation services 
              help you reimagine your business processes and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Transformation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Transformation Phases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Transformation Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A proven methodology for successful digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {transformationPhases.map((phase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{phase.phase}</h3>
                  <p className="text-sm text-gray-300">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Transformation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions to drive your digital transformation success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transformationServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Transformation Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven expertise and methodologies to ensure transformation success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">Track record of successful transformations across industries</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">ROI Focused</h3>
                <p className="text-gray-300">Measurable outcomes and clear return on investment</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Change Management</h3>
                <p className="text-gray-300">Expert guidance through organizational change</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our digital transformation services can drive your success
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Your Transformation
            </Link>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
  );
};

export default DigitalTransformation;