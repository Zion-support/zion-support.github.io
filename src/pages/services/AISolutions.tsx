import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AISolutions: React.FC = () => {
  const aiServices = [
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms tailored to your business needs",
      features: ["Predictive Analytics", "Pattern Recognition", "Automated Decision Making", "Real-time Learning"],
      icon: "🧠"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced text and speech processing capabilities",
      features: ["Chatbot Development", "Sentiment Analysis", "Document Processing", "Language Translation"],
      icon: "💬"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis for automation and insights",
      features: ["Object Detection", "Facial Recognition", "Quality Control", "Process Automation"],
      icon: "👁️"
    },
    {
      title: "AI Consulting",
      description: "Strategic guidance for AI implementation and adoption",
      features: ["AI Strategy", "Use Case Identification", "Implementation Roadmap", "ROI Analysis"],
      icon: "🎯"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions — Zion Tech Group | Machine Learning & AI Services</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI solutions. Machine learning, NLP, computer vision, and AI consulting services." />
        <meta property="og:title" content="AI Solutions — Zion Tech Group" />
        <meta property="og:description" content="Leading AI solutions including machine learning, NLP, computer vision, and strategic consulting." />
        <meta property="og:url" content="https://ziontechgroup.com/services/ai" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance customer experiences, and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get AI Consultation
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

        {/* AI Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive artificial intelligence solutions designed to address your most complex challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Capabilities:</h4>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven expertise and cutting-edge technology to drive your AI transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
                <p className="text-gray-300">Optimized algorithms and infrastructure for real-time performance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Accurate Results</h3>
                <p className="text-gray-300">High-precision models trained on quality data for reliable outcomes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance for your sensitive data</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can drive innovation and growth for your organization
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Start Your AI Journey
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutions;