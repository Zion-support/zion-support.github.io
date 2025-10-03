import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const QuantumComputingConsultingPage: React.FC = () => {
  const quantumServices = [
    {
      title: "Quantum Strategy Consulting",
      description: "Develop comprehensive quantum computing strategies aligned with your business objectives and technology roadmap.",
      icon: "🎯",
      features: ["Strategic Planning", "Technology Assessment", "ROI Analysis", "Implementation Roadmap"]
    },
    {
      title: "Quantum Algorithm Development",
      description: "Design and implement custom quantum algorithms to solve complex optimization and simulation problems.",
      icon: "⚛️",
      features: ["Algorithm Design", "Quantum Circuit Optimization", "Performance Tuning", "Hybrid Solutions"]
    },
    {
      title: "Quantum Software Integration",
      description: "Integrate quantum computing capabilities into your existing software infrastructure and workflows.",
      icon: "🔗",
      features: ["API Development", "System Integration", "Legacy System Support", "Hybrid Computing"]
    },
    {
      title: "Quantum Security Solutions",
      description: "Implement quantum-resistant cryptography and security measures to protect against future quantum threats.",
      icon: "🔒",
      features: ["Post-Quantum Cryptography", "Security Audits", "Migration Planning", "Compliance Support"]
    },
    {
      title: "Quantum Training & Education",
      description: "Comprehensive training programs to help your team understand and leverage quantum computing technologies.",
      icon: "🎓",
      features: ["Team Training", "Technical Workshops", "Best Practices", "Knowledge Transfer"]
    },
    {
      title: "Quantum Research & Development",
      description: "Collaborative R&D projects to explore quantum computing applications specific to your industry.",
      icon: "🔬",
      features: ["Research Partnerships", "Proof of Concepts", "Prototype Development", "Innovation Labs"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Quantum Computing Consulting - Zion Tech Group</title>
        <meta name="description" content="Expert quantum computing consulting services including strategy, algorithm development, and quantum security solutions from Zion Tech Group." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Quantum Computing Consulting</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Unlock the power of quantum computing with expert consulting services that transform your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </Link>
              <Link to="/demo" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quantumServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group for Quantum Computing?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team of quantum computing experts brings deep technical knowledge and industry experience to help you navigate the quantum revolution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">PhD-level quantum physicists and engineers with industry experience</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Successful quantum implementations across multiple industries</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Focus</h3>
                <p className="text-gray-600">Quantum-resistant security solutions for future-proof systems</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-gray-600">Continuous support and optimization for your quantum solutions</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Embrace Quantum Computing?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let's discuss how quantum computing can transform your business operations and give you a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Quantum Journey
              </Link>
              <Link to="/demo" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumComputingConsultingPage;