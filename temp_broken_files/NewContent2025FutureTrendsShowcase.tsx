import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NewContent2025FutureTrendsShowcase = () => {
  const trendItems = [
    {
      title: "Quantum AI Integration: The Next Frontier in Business Intelligence",
      description: "Explore how quantum computing is revolutionizing AI capabilities and enabling unprecedented business insights.",
      category: "Technology",
      impact: "High",
      timeline: "2025-2026"
    },
    {
      title: "Autonomous Business Operations: The Future of Enterprise Management",
      description: "Discover how AI-powered autonomous systems are transforming business operations and reducing human intervention.",
      category: "Operations",
      impact: "Transformational",
      timeline: "2025"
    },
    {
      title: "Advanced Neural Architectures: 1000x Faster Processing Capabilities",
      description: "Learn about next-generation neural networks that process information 1000x faster with human-like reasoning.",
      category: "AI Architecture",
      impact: "Revolutionary",
      timeline: "2026"
    },
    {
      title: "Predictive Analytics 2025: Anticipating Market Changes with 99.7% Accuracy",
      description: "Master advanced predictive analytics that forecast market trends and business outcomes with unprecedented accuracy.",
      category: "Analytics",
      impact: "High",
      timeline: "2025"
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Future Trends 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the competition with our insights into the most impactful AI trends and technologies shaping the future of business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {trendItems.map((itemindex) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </span>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Impact</div>
                  <div className="font-semibold text-emerald-600">{item.impact}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Timeline: <span className="font-semibold text-gray-700">{item.timeline}</span>
                </div>
                <a 
                  href="/ai-2025-2026-ultimate-breakthrough"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium transition-colors duration-200"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/ai-2025-2026-ultimate-breakthrough"
            className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Future Trends
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025FutureTrendsShowcase;