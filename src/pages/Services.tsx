import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence and machine learning solutions to transform your business operations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ['Predictive Analytics', 'Process Automation', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems'],
      color: 'from-zion-cyan to-zion-cyan-light',
      bgColor: 'bg-zion-cyan/20',
      borderColor: 'border-zion-cyan/30'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: ['Threat Detection & Response', 'Compliance Management', 'Zero Trust Architecture', 'Incident Response', 'Security Audits'],
      color: 'from-zion-purple to-zion-purple-light',
      bgColor: 'bg-zion-purple/20',
      borderColor: 'border-zion-purple/30'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions and infrastructure optimization for modern businesses.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      features: ['Multi-Cloud Strategy', 'DevOps Automation', 'Infrastructure as Code', 'Container Orchestration', 'Serverless Architecture'],
      color: 'from-zion-blue to-zion-blue-light',
      bgColor: 'bg-zion-blue/20',
      borderColor: 'border-zion-blue/30'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex problem-solving and optimization.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Machine Learning'],
      color: 'from-zion-green to-zion-green-light',
      bgColor: 'bg-zion-green/20',
      borderColor: 'border-zion-green/30'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: ['Process Optimization', 'Legacy System Modernization', 'Change Management', 'Digital Strategy', 'Technology Roadmap'],
      color: 'from-zion-orange to-zion-orange-light',
      bgColor: 'bg-zion-orange/20',
      borderColor: 'border-zion-orange/30'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Advanced data analytics and business intelligence solutions for data-driven decision making.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Modeling', 'Data Warehousing', 'Real-time Analytics'],
      color: 'from-zion-red to-zion-red-light',
      bgColor: 'bg-zion-red/20',
      borderColor: 'border-zion-red/30'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive innovation across all industries.
          </p>
          <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
            From AI and machine learning to cybersecurity and quantum computing, we provide cutting-edge solutions that give you a competitive advantage.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/20"
              >
                <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="text-zion-slate-light text-sm mb-6 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 font-medium group"
                >
                  Learn More 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and maximum value for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-cyan/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-zion-cyan">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Discovery</h3>
              <p className="text-zion-slate-light text-sm">
                We analyze your business needs and objectives to understand your unique requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-green/20 to-zion-green/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-zion-green">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Strategy</h3>
              <p className="text-zion-slate-light text-sm">
                We develop a comprehensive strategy and roadmap tailored to your business goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple/20 to-zion-purple/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-zion-purple">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Implementation</h3>
              <p className="text-zion-slate-light text-sm">
                Our expert team executes the solution with precision and attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-orange/20 to-zion-orange/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-zion-orange">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Optimization</h3>
              <p className="text-zion-slate-light text-sm">
                We continuously monitor and optimize the solution for maximum performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl p-12 border border-zion-cyan/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group px-10 py-4 bg-gradient-to-r from-zion-cyan to-zion-cyan-light text-zion-blue-dark font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/25"
              >
                <span className="flex items-center justify-center">
                  Contact Us
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                to="/"
                className="group px-10 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-zion-blue-dark transition-all duration-300 hover:shadow-xl hover:shadow-zion-cyan/25"
              >
                <span className="flex items-center justify-center">
                  Back to Home
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;