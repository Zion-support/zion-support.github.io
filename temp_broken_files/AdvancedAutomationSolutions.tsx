'use client';

import React from 'react';
BotZapTrendingUpShieldUsersCheckCircle

const AdvancedAutomationSolutions = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation solutions that learn and adapt to your business processes.',
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast processing capabilities for immediate results.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics to track and optimize automation performance.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols to protect your data and processes.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for distributed teams.',
    },
    {
      icon: CheckCircle,
      title: 'Precision Targeting',
      description: 'Advanced targeting algorithms for maximum efficiency.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced Automation Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with cutting-edge automation technologies that drive efficiency and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((featureindex) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutions;