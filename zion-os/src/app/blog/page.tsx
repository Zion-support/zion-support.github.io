import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Blog & News - Zion Tech Group',
  description: 'Stay updated with the latest insights, news, and thought leadership from Zion Tech Group in AI, quantum computing, and technology innovation.',
};

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 'enterprise-agent-safety-2025',
      title: 'Enterprise Agent Safety 2025: Guardrails for Autonomy at Scale',
      excerpt: 'Deploy autonomous agents with executable policy guardrails, human-in-the-loop controls, and full auditability.',
      category: 'AI Governance',
      author: 'Dr. Emily Watson',
      date: '2025-09-15',
      readTime: '9 min read',
      image: '/blog/enterprise-agent-safety.jpg',
      featured: true
    },
    {
      id: 'ai-governance-blueprint-2025',
      title: 'AI Governance Blueprint 2025: Dual-Layer Policy for Safe Autonomy',
      excerpt: 'A pragmatic framework for blending automated policy engines with human oversight for AI at scale.',
      category: 'AI Governance',
      author: 'Dr. Emily Watson',
      date: '2025-09-15',
      readTime: '8 min read',
      image: '/blog/ai-governance.jpg',
      featured: true
    },
    {
      id: 'ai-foundation-models-2025',
      title: 'Foundation Models in 2025: Practical Enterprise Patterns That Work',
      excerpt: 'Battle-tested patterns for adapting, evaluating, and governing foundation models across core enterprise workflows.',
      category: 'AI Solutions',
      author: 'Dr. David Kim',
      date: '2025-09-15',
      readTime: '9 min read',
      image: '/blog/foundation-models-2025.jpg',
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 'edge-ai-agents-2025',
      title: 'Edge AI Agents: Real-Time Intelligence Across Devices and Locations',
      excerpt: 'Deploy low-latency, bandwidth‑efficient agents at the edge for on‑site decisioning and resilience.',
      category: 'IoT & Edge',
      author: 'Michael Rodriguez',
      date: '2025-09-12',
      readTime: '7 min read',
      image: '/blog/edge-ai-agents.jpg'
    },
    {
      id: 'enterprise-agent-guardrails',
      title: 'Enterprise Agent Guardrails: Safety, Identity, and Policy Enforcement',
      excerpt: 'A practical framework for shipping helpful, harmless, and honest AI agents with enterprise-grade controls.',
      category: 'Cybersecurity',
      author: 'Dr. Emily Watson',
      date: '2025-09-14',
      readTime: '8 min read',
      image: '/blog/enterprise-agent-guardrails.jpg'
    },
    {
      id: 'genai-productivity-benchmarks-2025',
      title: 'GenAI Productivity Benchmarks 2025: Measuring Real Business Impact',
      excerpt: 'A benchmarking framework for time savings, quality lift, and ROI in GenAI workflows.',
      category: 'Research & Development',
      author: 'Dr. Emily Watson',
      date: '2025-09-13',
      readTime: '8 min read',
      image: '/blog/genai-productivity-benchmarks.jpg'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 6, active: true },
    { name: 'AI Governance', count: 2, active: false },
    { name: 'AI Solutions', count: 2, active: false },
    { name: 'Cybersecurity', count: 1, active: false },
    { name: 'IoT & Edge', count: 1, active: false }
  ];

  const tags = [
    'AI Governance', 'Autonomous Systems', 'AI Safety', 'Edge AI', 'Foundation Models'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & News</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest insights, breakthroughs, and thought leadership 
            from our team of AI and technology experts.
          </p>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-6 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/blog/ai-foundation-models-2025"
            className="block w-full bg-white rounded-xl border border-blue-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            aria-label="Read: Foundation Models in 2025: Practical Enterprise Patterns That Work"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                FM
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">AI Solutions</span>
                  <span className="text-xs text-gray-500">New</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Foundation Models in 2025: Practical Enterprise Patterns That Work
                </h3>
                <p className="text-gray-600 text-sm md:text-base line-clamp-2 md:line-clamp-1">
                  Battle-tested patterns for adapting, evaluating, and governing foundation models across core enterprise workflows.
                </p>
              </div>
              <div className="text-blue-600 font-medium whitespace-nowrap">Read now →</div>
            </div>
          </a>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep insights and breakthrough research from our leading experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-sm font-medium">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories and Tags */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Categories */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
                      category.active
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tags */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <button
                    key={index}
                    className="bg-white text-gray-700 px-3 py-2 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors duration-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Articles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay current with the latest developments in AI, quantum computing, and technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-40 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-xs font-medium">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}