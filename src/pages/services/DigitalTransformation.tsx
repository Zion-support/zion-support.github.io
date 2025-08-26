import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DigitalTransformation: React.FC = () => {
  const transformationServices = [
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions",
      features: ["Workflow Automation", "RPA Implementation", "Business Process Optimization", "Efficiency Metrics"],
      icon: "🤖"
    },
    {
      title: "Workflow Optimization",
      description: "Redesign and optimize business workflows for maximum efficiency",
      features: ["Process Mapping", "Bottleneck Analysis", "Workflow Redesign", "Performance Monitoring"],
      icon: "📊"
    },
    {
      title: "Change Management",
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
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation — Zion Tech Group | Business Transformation Consulting</title>
        <meta name="description" content="Transform your business with Zion Tech Group's digital transformation consulting services. Process automation, workflow optimization, and change management." />
        <meta property="og:title" content="Digital Transformation — Zion Tech Group" />
        <meta property="og:description" content="Leading digital transformation services including process automation, workflow optimization, and change management." />
        <meta property="og:url" content="https://ziontechgroup.com/services/transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/transformation" />
      </Helmet>

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
  );
};

export default DigitalTransformation;