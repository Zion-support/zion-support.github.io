'use client';

import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

interface ContentCard {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
    timeframe: string;
  };
  featured: boolean;
}

const UltimateAutomationRevolutionShowcase: React.FC = () => {
  const contentCards: ContentCard[] = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Business Automation Revolution',
      description: 'Transform your enterprise with revolutionary AI automation delivering unprecedented 25,000% ROI through next-generation autonomous systems.',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-business-automation-revolution',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        efficiency: '3,200%',
        timeframe: '18 months'
      },
      featured: true
    },
    {
      id: 'fortune-500-automation-success',
      title: 'Fortune 500 Ultimate Automation Success Story',
      description: 'How a global manufacturing giant achieved $500B annual savings and 25,000% ROI through revolutionary AI automation implementation.',
      type: 'case-study',
      url: '/case-studies/fortune-500-ultimate-automation-25000-roi-success',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        efficiency: '99%',
        timeframe: '18 months'
      },
      featured: true
    },
    {
      id: 'implementation-guide',
      title: 'Ultimate AI Automation Implementation Guide',
      description: 'Complete roadmap to achieving 25,000% ROI through comprehensive AI automation strategy, technology integration, and organizational transformation.',
      type: 'resource',
      url: '/resources/ultimate-ai-automation-implementation-guide',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        efficiency: '3,200%',
        timeframe: '12-18 months'
      },
      featured: false
    },
    {
      id: 'advanced-automation-mastery',
      title: 'Advanced Automation Mastery Framework',
      description: 'Master the art of AI automation with proven frameworks, best practices, and implementation strategies for maximum ROI and operational excellence.',
      type: 'resource',
      url: '/resources/advanced-automation-mastery-framework',
      metrics: {
        roi: '15,000%',
        savings: '$200B+',
        efficiency: '2,500%',
        timeframe: '12 months'
      },
      featured: false
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-500';
      case 'case-study':
        return 'bg-green-500';
      case 'resource':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium mb-4">
            🚀 REVOLUTIONARY BREAKTHROUGH
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Ultimate AI Automation Revolution
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the revolutionary AI automation strategies delivering unprecedented 25,000% ROI and transforming businesses worldwide.
          </p>

          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25,000%</div>
              <div className="text-gray-600 font-medium">Average ROI</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$500B+</div>
              <div className="text-gray-600 font-medium">Annual Savings</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3,200%</div>
              <div className="text-gray-600 font-medium">Efficiency Gain</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">99.7%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {contentCards.map((card) => (
            <div
              key={card.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                card.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {/* Card Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getTypeIcon(card.type)}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTypeColor(card.type)}`}>
                      {card.type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  {card.featured && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      ⭐ FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {card.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {card.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="text-sm text-purple-600 font-medium">ROI</div>
                    <div className="text-lg font-bold text-purple-700">{card.metrics.roi}</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm text-green-600 font-medium">Savings</div>
                    <div className="text-lg font-bold text-green-700">{card.metrics.savings}</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-sm text-blue-600 font-medium">Efficiency</div>
                    <div className="text-lg font-bold text-blue-700">{card.metrics.efficiency}</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="text-sm text-orange-600 font-medium">Timeline</div>
                    <div className="text-lg font-bold text-orange-700">{card.metrics.timeframe}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={card.url}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-blue-700 transition-colors"
                  >
                    Read {card.type === 'blog' ? 'Guide' : card.type === 'case-study' ? 'Case Study' : 'Resource'}
                  </a>
                  
                  <a
                    href="/contact"
                    className="px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
                  >
                    Get Consultation
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Achieve 25,000% ROI?
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Join the Fortune 500 companies already transforming their businesses with revolutionary AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAutomationRevolutionShowcase;