import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Consulting: React.FC = () => {
  const consultingServices = [
    {
      title: "Technology Assessment",
      description: "Comprehensive evaluation of your current technology landscape and capabilities",
      features: ["Infrastructure Review", "Technology Stack Analysis", "Gap Identification", "Recommendations"],
      icon: "🔍"
    },
    {
      title: "Strategic Planning",
      description: "Develop long-term technology strategy aligned with business objectives",
      features: ["Technology Roadmap", "Investment Planning", "Risk Assessment", "Success Metrics"],
      icon: "📋"
    },
    {
      title: "Vendor Selection",
      description: "Expert guidance in selecting the right technology partners and solutions",
      features: ["Requirements Analysis", "Vendor Evaluation", "Contract Negotiation", "Implementation Support"],
      icon: "🤝"
    },
    {
      title: "Project Management",
      description: "Professional project management for successful technology implementations",
      features: ["Project Planning", "Team Coordination", "Timeline Management", "Quality Assurance"],
      icon: "📊"
    }
  ];

  const consultingApproach = [
    { step: "Discovery", icon: "🔍", description: "Understand your business needs and challenges" },
    { step: "Analysis", icon: "📊", description: "Analyze current state and identify opportunities" },
    { step: "Strategy", icon: "🎯", description: "Develop comprehensive recommendations" },
    { step: "Implementation", icon: "🚀", description: "Execute strategy with ongoing support" }
  ];

  return (
    <>
      <Helmet>
        <title>Consulting — Zion Tech Group | Technology Strategy & Advisory</title>
        <meta name="description" content="Get expert technology consulting from Zion Tech Group. Technology assessment, strategic planning, vendor selection, and project management services." />
        <meta property="og:title" content="Consulting — Zion Tech Group" />
        <meta property="og:description" content="Leading technology consulting services including strategic planning, vendor selection, and project management." />
        <meta property="og:url" content="https://ziontechgroup.com/services/consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/services/consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Consulting
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Make informed technology decisions with expert guidance. Our consulting services 
              help you navigate complex technology choices and maximize your technology investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Consultation
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

        {/* Consulting Approach */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consulting Approach
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A proven methodology for delivering strategic technology guidance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultingApproach.map((step, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.step}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consulting Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive consulting solutions to guide your technology decisions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingServices.map((service, index) => (
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
                Why Choose Our Consulting Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven expertise and methodologies to maximize your technology success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Expert Guidance</h3>
                <p className="text-gray-300">Seasoned consultants with deep industry expertise</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cost Savings</h3>
                <p className="text-gray-300">Avoid costly mistakes and optimize technology investments</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">Track record of successful technology implementations</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Expert Technology Guidance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our consulting services can help optimize your technology strategy
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Consulting;