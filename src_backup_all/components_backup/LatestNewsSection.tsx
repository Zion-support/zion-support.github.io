import React from 'react';

const LatestNewsSection: React.FC = () => {
  const latestNews = [
    {
      title: "Revolutionary AI Business Automation Breakthrough",
      excerpt: "Discover how AI automation is transforming enterprises in 2025 with unprecedented efficiency gains...",
      category: "AI & Automation",
      date: "January 20, 2025",
      link: "/content/blog/ai-2025-revolutionary-business-automation-breakthrough",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-green-100 text-green-700"
    },
    {
      title: "Quantum Computing Business Applications 2025",
      excerpt: "Explore the quantum computing revolution that's reshaping business operations and competitive advantage...",
      category: "Quantum Computing",
      date: "January 20, 2025",
      link: "/content/blog/quantum-computing-business-applications-2025",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-purple-100 text-purple-700"
    },
    {
      title: "$100M AI Automation Success Story",
      excerpt: "Real case study of how a Fortune 100 company achieved $100M in annual savings through AI automation...",
      category: "Case Study",
      date: "January 20, 2025",
      link: "/content/case-studies/ai-automation-revolutionary-breakthrough-2025-success",
      badge: "SUCCESS",
      badgeColor: "bg-blue-100 text-blue-700"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">📰 Latest Technology Insights</h2>
        <p className="text-lg text-gray-600">Stay updated with the latest trends and innovations</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {latestNews.map((news, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-2 mb-3">
              <span className={`px-2 py-1 text-xs rounded-full font-semibold ${news.badgeColor}`}>
                {news.badge}
              </span>
              <span className="text-sm text-gray-500">{news.date}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
            <p className="text-gray-600 mb-4">{news.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{news.category}</span>
              <a href={news.link} className="text-blue-600 hover:text-blue-700 font-semibold">
                Read Full Article →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="/blog" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
          View All Articles
        </a>
      </div>
    </div>
  );
};

export default LatestNewsSection;