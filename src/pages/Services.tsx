import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      id: 'ai',
      title: 'AI Solutions',
      subtitle: 'Machine Learning & Artificial Intelligence',
      description: 'Transform your business with cutting-edge AI solutions that automate processes, provide insights, and drive innovation.',
      features: [
        'Machine Learning Models & Algorithms',
        'Natural Language Processing (NLP)',
        'Computer Vision & Image Recognition',
        'Predictive Analytics & Forecasting',
        'AI-Powered Chatbots & Virtual Assistants',
        'Recommendation Systems',
        'AI Ethics & Responsible AI Implementation'
      ],
      benefits: [
        'Automate repetitive tasks and processes',
        'Gain actionable insights from data',
        'Improve customer experience and engagement',
        'Reduce operational costs and increase efficiency',
        'Stay ahead of competition with AI-first approach'
      ],
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500',
      path: '/services/ai'
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      subtitle: 'Cloud Infrastructure & Development Operations',
      description: 'Accelerate your development and deployment with modern cloud solutions and DevOps practices.',
      features: [
        'Cloud Migration & Strategy',
        'Multi-Cloud Architecture',
        'Infrastructure as Code (IaC)',
        'CI/CD Pipeline Automation',
        'Container Orchestration (Kubernetes)',
        'Serverless Computing',
        'Cloud Cost Optimization'
      ],
      benefits: [
        'Faster time to market with automated deployments',
        'Scalable and flexible infrastructure',
        'Reduced infrastructure costs and maintenance',
        'Improved collaboration and development efficiency',
        'Enhanced security and compliance'
      ],
      icon: '☁️',
      color: 'from-green-500 to-emerald-500',
      path: '/services/cloud'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      subtitle: 'Comprehensive Security Solutions',
      description: 'Protect your digital assets with enterprise-grade security solutions and compliance frameworks.',
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment & Penetration Testing',
        'Security Architecture & Design',
        'Compliance & Governance (SOC 2, ISO 27001)',
        'Identity & Access Management',
        'Security Awareness Training',
        'Incident Response & Recovery'
      ],
      benefits: [
        'Protect sensitive data and intellectual property',
        'Meet regulatory compliance requirements',
        'Reduce security risks and vulnerabilities',
        'Build customer trust and confidence',
        'Minimize financial and reputational damage'
      ],
      icon: '🔒',
      color: 'from-red-500 to-pink-500',
      path: '/services/cybersecurity'
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure',
      subtitle: 'Enterprise Infrastructure Management',
      description: 'Build and maintain robust, scalable IT infrastructure that supports your business growth.',
      features: [
        'Network Design & Implementation',
        'Data Center Management',
        'Storage & Backup Solutions',
        'Virtualization & Hyperconvergence',
        'Monitoring & Performance Optimization',
        'Disaster Recovery & Business Continuity',
        'Infrastructure Modernization'
      ],
      benefits: [
        'Reliable and high-performance infrastructure',
        'Scalable solutions that grow with your business',
        'Reduced downtime and improved availability',
        'Optimized resource utilization',
        'Enhanced security and compliance'
      ],
      icon: '🏗️',
      color: 'from-purple-500 to-indigo-500',
      path: '/services/infrastructure'
    },
    {
      id: 'transformation',
      title: 'Digital Transformation',
      subtitle: 'Business Process Modernization',
      description: 'Transform your business operations with digital technologies and modern workflows.',
      features: [
        'Business Process Analysis & Optimization',
        'Workflow Automation & Integration',
        'Legacy System Modernization',
        'Change Management & Training',
        'Digital Strategy & Roadmap',
        'Performance Measurement & KPIs',
        'Continuous Improvement Programs'
      ],
      benefits: [
        'Streamlined and efficient business processes',
        'Improved employee productivity and satisfaction',
        'Enhanced customer experience and engagement',
        'Increased operational efficiency and cost savings',
        'Better data visibility and decision-making'
      ],
      icon: '🚀',
      color: 'from-orange-500 to-yellow-500',
      path: '/services/transformation'
    },
    {
      id: 'consulting',
      title: 'Technology Consulting',
      subtitle: 'Strategic Technology Advisory',
      description: 'Get expert guidance on technology strategy, architecture, and implementation decisions.',
      features: [
        'Technology Strategy & Roadmap',
        'Architecture Review & Design',
        'Technology Stack Selection',
        'Vendor Evaluation & Selection',
        'Project Management & Oversight',
        'Performance Audits & Optimization',
        'Technology Training & Knowledge Transfer'
      ],
      benefits: [
        'Make informed technology decisions',
        'Avoid costly implementation mistakes',
        'Accelerate project delivery and success',
        'Leverage industry best practices and expertise',
        'Optimize technology investments and ROI'
      ],
      icon: '💡',
      color: 'from-teal-500 to-cyan-500',
      path: '/services/consulting'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to drive your business forward, 
            improve efficiency, and ensure you stay ahead of the competition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={service.id} className="bg-slate-800/50 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-blue-400 font-medium">{service.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={service.path}
                  className={`bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center`}
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our innovative services can help drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us Today
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-2 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="mb-6">
            <Link
              to="/comprehensive-services-2025"
              className="inline-flex items-center px-6 py-2 text-blue-400 hover:text-blue-300 border border-blue-400 rounded-lg transition-all duration-300"
            >
              View Complete Services Portfolio →
            </Link>
            <p className="text-sm text-gray-400 mt-2">
              Discover our comprehensive showcase of 30+ innovative micro SAAS services, specialized IT solutions, and cutting-edge AI platforms for 2025
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
              <p className="text-gray-300 text-sm">
                Certified professionals with 15+ years of experience in enterprise technology solutions
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300 text-sm">
                Successfully delivered 1000+ projects with 99.9% client satisfaction rate
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300 text-sm">
                Round-the-clock support and monitoring to ensure your systems run smoothly
              </p>
            </div>
          </div>
        </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
              <p className="text-gray-300 text-sm">
                Understand your business needs, challenges, and objectives
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Strategy</h3>
              <p className="text-gray-300 text-sm">
                Develop comprehensive solution architecture and implementation plan
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
              <p className="text-gray-300 text-sm">
                Execute the solution with agile methodology and continuous feedback
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Optimization</h3>
              <p className="text-gray-300 text-sm">
                Monitor, maintain, and continuously improve the solution
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-12 text-center border border-blue-400/20">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how our technology solutions can help 
            transform your business and drive success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
