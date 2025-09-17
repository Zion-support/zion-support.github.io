"use client";
import React, { useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const RevolutionaryAIContentShowcase2025: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const revolutionaryContent = [
    {
      id: 'revolutionary-breakthrough-guide',
      title: 'AI 2025: The Revolutionary Breakthrough Ultimate Guide',
      subtitle: '50,000% ROI Through Next-Generation Intelligence',
      type: 'blog',
      category: 'AI Revolution',
      url: '/blog/ai-2025-revolutionary-breakthrough-ultimate-guide',
      metrics: {
        roi: '50,000%',
        savings: '$500B+',
        accuracy: '99.99%',
        efficiency: '5,000%'
      },
      readingTime: '45 min read',
      isNew: true,
      featured: true,
      description: 'The most comprehensive guide to achieving unprecedented ROI through revolutionary AI implementation, featuring real-world case studies and proven strategies.'
    },
    {
      id: 'fortune-500-success-story',
      title: 'Fortune 500 AI Revolution Success Story',
      subtitle: '$500B Annual Savings - 50,000% ROI',
      type: 'case-study',
      category: 'Success Stories',
      url: '/case-studies/fortune-500-ai-revolution-50000-roi-success-story',
      metrics: {
        roi: '50,000%',
        savings: '$500B',
        timeline: '18 months',
        efficiency: '5,000%'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true,
      description: 'Detailed case study of TechGlobal Industries achieving the most successful AI transformation in corporate history with verified results.'
    },
    {
      id: 'revolutionary-implementation-guide',
      title: 'Revolutionary AI Implementation Guide',
      subtitle: 'Complete Roadmap to 50,000% ROI',
      type: 'resource',
      category: 'Implementation',
      url: '/resources/revolutionary-ai-implementation-guide-50000-roi',
      metrics: {
        roi: '50,000%',
        timeline: '18 months',
        success: '99.7%',
        guide: '60 min read'
      },
      readingTime: '60 min read',
      isNew: true,
      featured: true,
      description: 'Step-by-step implementation roadmap for achieving revolutionary AI transformation with proven methodologies and best practices.'
    },
    {
      id: 'quantum-neural-fusion-guide',
      title: 'Quantum-Neural Fusion Revolution Guide',
      subtitle: '25,000% ROI Through Advanced AI',
      type: 'blog',
      category: 'AI Revolution',
      url: '/blog/ai-2025-quantum-neural-fusion-revolution-ultimate-breakthrough',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        accuracy: '99.97%',
        efficiency: '3,500%'
      },
      readingTime: '35 min read',
      isNew: false,
      featured: false,
      description: 'Comprehensive guide to quantum-enhanced neural networks delivering unprecedented business transformation results.'
    },
    {
      id: 'autonomous-business-case-study',
      title: 'Autonomous Business Revolution Case Study',
      subtitle: '30,000% ROI Through Self-Managing Systems',
      type: 'case-study',
      category: 'Success Stories',
      url: '/case-studies/fortune-500-autonomous-business-30000-roi-success-story',
      metrics: {
        roi: '30,000%',
        savings: '$2.8B',
        timeline: '18 months',
        accuracy: '99.99%'
      },
      readingTime: '25 min read',
      isNew: false,
      featured: false,
      description: 'Real-world implementation of autonomous business systems achieving extraordinary ROI and operational excellence.'
    },
    {
      id: 'neural-superintelligence-guide',
      title: 'Neural Superintelligence Implementation',
      subtitle: '12,000% ROI Through Advanced AI',
      type: 'resource',
      category: 'Implementation',
      url: '/resources/neural-superintelligence-implementation-ultimate-guide-2025-2026',
      metrics: {
        roi: '12,000%',
        timeline: '18 months',
        success: '99.7%',
        savings: '$45.8B+'
      },
      readingTime: '45 min read',
      isNew: false,
      featured: false,
      description: 'Complete implementation guide for neural superintelligence systems delivering breakthrough business results.'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Content', count: revolutionaryContent.length },
    { id: 'blog', label: 'Blog Posts', count: revolutionaryContent.filter(c => c.type === 'blog').length },
    { id: 'case-study', label: 'Case Studies', count: revolutionaryContent.filter(c => c.type === 'case-study').length },
    { id: 'resource', label: 'Resources', count: revolutionaryContent.filter(c => c.type === 'resource').length }
  ];

  const filteredContent = activeFilter === 'all' 
    ? revolutionaryContent 
    : revolutionaryContent.filter(content => content.type === activeFilter);

  const featuredContent = revolutionaryContent.filter(content => content.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-500';
      case 'case-study': return 'bg-green-500';
      case 'resource': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 REVOLUTIONARY AI BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Most Successful AI Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Fortune 500 companies are achieving unprecedented ROI through revolutionary AI implementations. 
            Verified results, proven strategies, and complete implementation guides.
          </p>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Featured: 50,000% ROI Success Story
            </h3>
            <p className="text-lg text-blue-200">
              The most successful AI transformation in corporate history
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredContent.slice(0, 3).map((content) => (
              <div key={content.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW
                  </span>
                  <span className={`${getTypeColor(content.type)} text-white px-3 py-1 rounded-full text-sm`}>
                    {getTypeIcon(content.type)} {content.type.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold mb-2 text-white">
                  {content.title}
                </h4>
                
                <p className="text-blue-200 mb-4 text-sm">
                  {content.subtitle}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-400">
                      {content.metrics.roi}
                    </div>
                    <div className="text-xs text-blue-200">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">
                      {content.metrics.savings || content.metrics.timeline}
                    </div>
                    <div className="text-xs text-blue-200">
                      {content.metrics.savings ? 'Savings' : 'Timeline'}
                    </div>
                  </div>
                </div>

                <a
                  href={content.url}
                  className="block w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-center py-2 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
                >
                  Read {content.readingTime}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-300 hover:text-purple-600'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Content header */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {content.isNew && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NEW
                    </span>
                  )}
                  <span className={`${getTypeColor(content.type)} text-white px-3 py-1 rounded-full text-sm`}>
                    {getTypeIcon(content.type)} {content.type.replace('-', ' ').toUpperCase()}
                  </span>
                  {content.featured && (
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">
                      {content.metrics.roi}
                    </div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm font-bold text-green-600">
                      {content.metrics.savings || content.metrics.timeline || content.metrics.success}
                    </div>
                    <div className="text-xs text-gray-600">
                      {content.metrics.savings ? 'Savings' : 
                       content.metrics.timeline ? 'Timeline' : 'Success Rate'}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <a
                    href={content.url}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
                  >
                    Read {content.readingTime}
                  </a>
                  <a
                    href="/contact"
                    className="w-full border-2 border-purple-600 text-purple-600 text-center py-2 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                  >
                    Get Implementation Help
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
              Ready to Achieve Revolutionary ROI?
            </h3>
            <p className="text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
              Join Fortune 500 companies achieving unprecedented results through revolutionary AI transformation. 
              Get expert guidance and proven strategies for your implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore AI Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAIContentShowcase2025;