import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const EnterpriseSolutionsPage: React.FC = () => {
  const enterpriseSolutions = [
    {
      title: "Enterprise AI Platform",
      description: "Comprehensive AI platform designed for large-scale enterprise deployment with advanced analytics and automation capabilities.",
      icon: "🏢",
      features: ["Scalable AI Infrastructure", "Enterprise Security", "Multi-tenant Architecture", "Advanced Analytics"],
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation solutions that modernize legacy systems and enable new digital capabilities.",
      icon: "🔄",
      features: ["Legacy Modernization", "Cloud Migration", "Process Automation", "Change Management"],
    },
    {
      title: "Enterprise Security",
      description: "Comprehensive security solutions including threat detection, compliance management, and data protection.",
      icon: "🛡️",
      features: ["Threat Detection", "Compliance Management", "Data Protection", "Security Monitoring"],
    },
    {
      title: "Enterprise Analytics",
      description: "Advanced analytics and business intelligence solutions for data-driven decision making across the organization.",
      icon: "📊",
      features: ["Business Intelligence", "Predictive Analytics", "Real-time Dashboards", "Data Governance"],
    },
    {
      title: "Enterprise Integration",
      description: "Seamless integration solutions that connect disparate systems and enable data flow across the enterprise.",
      icon: "🔗",
      features: ["System Integration", "API Management", "Data Synchronization", "Workflow Automation"],
    },
    {
      title: "Enterprise Support",
      description: "24/7 enterprise-grade support and maintenance services to ensure optimal system performance.",
      icon: "🛠️",
      features: ["24/7 Support", "Proactive Monitoring", "Performance Optimization", "Technical Consulting"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise solutions designed for large-scale organizations including AI platforms, security, analytics, and integration services." /></Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Solutions</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Comprehensive technology solutions designed for large-scale enterprise deployment and digital transformation.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseSolutions.map((solution, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Enterprise Solutions?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Built for scale, security, and performance with enterprise-grade reliability
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Scale</h3>
                <p className="text-gray-600">
                  Solutions designed to handle enterprise-level workloads and scale seamlessly with your organization.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Security First</h3>
                <p className="text-gray-600">
                  Built with enterprise-grade security, compliance, and data protection at the core of every solution.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock enterprise support with dedicated account management and rapid response times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
              Let's discuss how our enterprise solutions can drive your digital transformation and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors
              >
                Get Started
              </Link>
              <Link 
                to="/case-studies" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Component;