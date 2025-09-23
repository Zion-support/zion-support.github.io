import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Users, Award } from 'lucide-react';

const NewContentShowcase2026: React.FC = () => {
  const featuredContent = [
    {
      title: "AI 2026: The Future of Autonomous Business Operations",
      description: "Discover how autonomous AI systems are revolutionizing business operations and creating unprecedented efficiency gains.",
      category: "AI Innovation",
      readTime: "12 min read",
      badge: "Trending",
      href: "/blog/ai-2026-autonomous-business-operations"
    },
    {
      title: "Quantum Computing Breakthroughs: Real-World Applications in 2026",
      description: "Explore the latest quantum computing advances and their practical applications across industries.",
      category: "Quantum Tech",
      readTime: "15 min read",
      badge: "New",
      href: "/blog/quantum-computing-breakthroughs-2026"
    },
    {
      title: "Neural Interface Revolution: The Next Frontier in Human-Computer Interaction",
      description: "Learn about the cutting-edge neural interface technologies that are reshaping how we interact with machines.",
      category: "Neural Tech",
      readTime: "10 min read",
      badge: "Featured",
      href: "/blog/neural-interface-revolution-2026"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "2.5M+", label: "Monthly Readers" },
    { icon: Users, value: "50K+", label: "Active Subscribers" },
    { icon: Award, value: "95%", label: "Content Satisfaction" },
    { icon: Sparkles, value: "200+", label: "Expert Articles" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Fresh Content 2026
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Breakthroughs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our cutting-edge research, expert analysis, and forward-thinking perspectives on the future of technology.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-lg mb-3">
                <stat.icon className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {content.category}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    content.badge === 'Trending' ? 'bg-red-100 text-red-700' :
                    content.badge === 'New' ? 'bg-green-100 text-green-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {content.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                  <Link 
                    href={content.href}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Don't Miss Out on the Latest Updates</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive access to premium content, early insights, and special reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2026;