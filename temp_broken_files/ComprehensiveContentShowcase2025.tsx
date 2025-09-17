'use client';

import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ShieldCloudZapTrendingUpCheckCircleArrowRightStar

const ComprehensiveContentShowcase2025: React.FC = () => {
  const newContent = [
    {
      id: 'cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution',
      description: 'How AI is transforming enterprise security with 89% incident reduction and 340% faster threat detection.',
      type: 'Blog Post',
      url: '/blog/ai-2025-cybersecurity-revolution',
      metrics: {
        incidentReduction: '89%',
        detectionSpeed: '340%',
        annualSavings: '$2.8M',
        accuracy: '99.7%'
      },
      icon: Shield,
      color: 'from-red-500 to-purple-600',
      featured: true
    },
    {
      id: 'cloud-optimization',
      title: 'AI 2025: Cloud Optimization Breakthrough',
      description: 'Revolutionize your cloud infrastructure with 67% cost reduction and 340% performance improvement.',
      type: 'Blog Post',
      url: '/blog/ai-2025-cloud-optimization-breakthrough',
      metrics: {
        costReduction: '67%',
        performance: '340%',
        utilization: '89%',
        annualSavings: '$4.2M'
      },
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      featured: true
    },
    {
      id: 'cybersecurity-success',
      title: 'AI Cybersecurity Enterprise Success',
      description: 'How a $5B company achieved 99.9% security with AI and $12.8M annual savings.',
      type: 'Case Study',
      url: '/case-studies/ai-cybersecurity-enterprise-success-2025',
      metrics: {
        incidentReduction: '99.9%',
        annualSavings: '$12.8M',
        detectionSpeed: '340%',
        zeroBreaches: '24 months'
      },
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      featured: true
    },
    {
      id: 'cloud-optimization-guide',
      title: 'AI Cloud Optimization Master Guide 2025',
      description: 'Complete implementation guide from strategy to 340% ROI with proven frameworks.',
      type: 'Resource',
      url: '/resources/ai-cloud-optimization-master-guide-2025',
      metrics: {
        averageROI: '340%',
        costReduction: '67%',
        utilization: '89%',
        annualSavings: '$4.2M'
      },
      icon: CheckCircle,
      color: 'from-purple-500 to-pink-600',
      featured: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <Star className="h-5 w-5 mr-2" />
            <span className="text-sm font-semibold">NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content for 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI solutions with proven ROI. From cybersecurity to cloud optimization
            learn how leading companies are achieving unprecedented success.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {newContent.map((content) => {
            const IconComponent = content.icon;
            return (
              <div
                key={content.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                  content.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
                }`}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${content.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <IconComponent className="h-8 w-8" />
                      <div>
                        <span className="text-sm font-medium opacity-90">{content.type}</span>
                        {content.featured && (
                          <span className="ml-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                            FEATURED
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{content.title}</h3>
                  <p className="text-sm opacity-90">{content.description}</p>
                </div>

                {/* Metrics */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(content.metrics).map(([keyvalue]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-gray-900">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={content.url}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center justify-center group-hover:scale-105"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Proven Results Across 500+ Implementations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">340%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$4.2M</div>
              <div className="text-gray-600">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">89%</div>
              <div className="text-gray-600">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Successful Implementations</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/resources"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Explore All Resources
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveContentShowcase2025;