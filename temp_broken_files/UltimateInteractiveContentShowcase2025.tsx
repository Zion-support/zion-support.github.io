"use client";
import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const UltimateInteractiveContentShowcase2025: React.FC = () => {
  const [activeTabsetActiveTab] = useState('ai-solutions');
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const contentSections = [
    {
      id: 'ai-solutions',
      title: 'AI-Powered Solutions',
      icon: '🤖',
      description: 'Revolutionary AI technologies transforming business operations',
      features: [
        'Advanced Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Automated Decision Making'
      ],
      cta: 'Explore AI Solutions',
      link: '/ai-solutions'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: '⚛️',
      description: 'Next-generation computing power for complex problem solving',
      features: [
        'Quantum Algorithm Development',
        'Quantum Machine Learning',
        'Cryptography Solutions',
        'Optimization Problems',
        'Quantum Simulation'
      ],
      cta: 'Discover Quantum Power',
      link: '/quantum-computing'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces',
      icon: '🧠',
      description: 'Direct brain-computer interaction technologies',
      features: [
        'Brain-Computer Interfaces',
        'Neural Signal Processing',
        'Cognitive Enhancement',
        'Thought-to-Text Systems',
        'Mind-Controlled Devices'
      ],
      cta: 'Experience the Future',
      link: '/neural-interfaces'
    },
    {
      id: 'automation',
      title: 'Smart Automation',
      icon: '⚙️',
      description: 'Intelligent automation systems for enterprise efficiency',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Intelligent Document Processing',
        'Robotic Process Automation',
        'Smart Decision Systems'
      ],
      cta: 'Automate Your Business',
      link: '/automation-solutions'
    }
  ];

  const activeContent = contentSections.find(section => section.id === activeTab);

  return (
    <div className={`py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Ultimate Interactive Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most advanced technologies and solutions that are reshaping our world. 
            Interactive exploration of cutting-edge innovations.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {contentSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                activeTab === section.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl'
                  : 'bg-white text-gray-700 shadow-lg hover:shadow-xl border border-gray-200'
              }`}
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
              <p className="text-sm opacity-90">{section.description}</p>
            </button>
          ))}
        </div>

        {/* Active Content Display */}
        {activeContent && (
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-5xl mr-4">{activeContent.icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {activeContent.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {activeContent.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {activeContent.features.map((featureindex) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={activeContent.link}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {activeContent.cta}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4 opacity-50">{activeContent.icon}</div>
                    <div className="text-2xl font-bold text-gray-700 mb-2">
                      Interactive Demo
                    </div>
                    <p className="text-gray-600">
                      Experience {activeContent.title.toLowerCase()} in action
                    </p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Active Projects</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-indigo-600 mb-2">99.9%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of companies already using our cutting-edge solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/demo"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateInteractiveContentShowcase2025;