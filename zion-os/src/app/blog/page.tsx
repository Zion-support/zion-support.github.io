<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
=======
import { getCategoriesWithCounts, getFeaturedPosts, getRecentPosts, tags } from '../../data/blog';

export const metadata = {
  title: 'Blog & News - Zion Tech Group',
  description:
    'Stay updated with the latest insights, news, and thought leadership from Zion Tech Group in AI, quantum computing, and technology innovation.',
};

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts();
  const categories = [{ name: 'All Posts', count: recentPosts.length, active: true }, ...getCategoriesWithCounts().map(c => ({ ...c, active: false }))];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const page: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">page</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & News</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest insights, breakthroughs, and thought leadership from our team.
          </p>
        </div>
      </section>

      {/* Promo Banner - New Article */}
      <section className="py-6 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <a
            href="/blog/ai-governance-operating-model-2026"
            className="block w-full bg-white rounded-xl border border-blue-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            aria-label="Read: AI 2026: Governance Operating Model — From Policy to Runtime Controls"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-bold">GM</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">AI Governance</span>
                  <span className="text-xs text-gray-500">New</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">AI 2026: Governance Operating Model — From Policy to Runtime Controls</h3>
                <p className="text-gray-600 text-sm md:text-base line-clamp-2 md:line-clamp-1">Translate policy into executable, auditable controls with KPIs and rollout safety.</p>
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
                    {post.title.split(' ').slice(0, 2).map((word) => word[0]).join('')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-sm font-medium">
                          {post.author.split(' ').map((n) => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-700 font-medium text-sm">
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
                    <span className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
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
                    {post.title.split(' ').slice(0, 2).map((word) => word[0]).join('')}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">{post.category}</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-xs font-medium">
                          {post.author.split(' ').map((n) => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default page;
=======
  const featuredPosts: PostListItem[] = [
    {
      id: 'ai-governance-2025',
      title: 'AI Governance 2025: Practical Guardrails for Autonomous Systems',
      excerpt: 'Implement measurable, reversible, and auditable controls for production AI.',
      category: 'AI Solutions',
      author: 'Dr. Emily Watson',
      date: '2025-09-15',
      readTime: '8 min read',
      image: '/blog/ai-governance.jpg',
      id: 'ai-governance-blueprint-2025',
      title: 'AI Governance Blueprint 2025: Practical Controls for Autonomous Systems',
      excerpt: 'How to deploy policy engines, observability, and reversible rollouts as autonomy grows.',
      category: 'AI Solutions',
      author: 'Dr. Emily Watson',
      date: '2025-09-14',
      readTime: '11 min read',
      author: 'Michael Rodriguez',
      date: '2025-09-05',
      readTime: '7 min read',
      image: '/blog/autonomous-it.jpg',
    },
    {
      id: 'secure-agent-marketplaces',
      title: 'Building Secure Agent Marketplaces: Identity, Reputation, and Policy',
      excerpt:
        'Trust frameworks for multi-agent ecosystems with identity, reputation, and safety.',
      category: 'Cybersecurity',
      author: 'Dr. Emily Watson',
      date: '2025-09-02',
      readTime: '8 min read',
      image: '/blog/secure-agent-marketplaces.jpg',
    },
    {
      id: 'ai-ops-cost-optimization-2025',
      title: 'AI Ops Cost Optimization 2025: Practical Playbook for 30–50% Savings',
      excerpt: 'Deploy AI-driven observability and predictive autoscaling to cut spend while improving reliability.',
      image: '/blog/ai-ops-cost.jpg',
      id: 'ai-ops-cost-optimization-2025',
      title: 'AI Ops Cost Optimization 2025: Practical Playbook for 30–50% Savings',
      excerpt: 'A 6-week rollout to reduce cloud and ops costs by 30–50% using AI-driven rightsizing and autoscaling.',
      category: 'AI Solutions',
      author: 'Michael Rodriguez',
      date: '2025-09-15',
      readTime: '9 min read',
      image: '/blog/ai-ops-cost.jpg'
    },
    {
      id: 'agentic-sales-playbooks',
      title: 'Agentic Sales Playbooks: Autonomous Pipelines from Lead to Close',
      excerpt: 'Build autonomous sales loops with RAG, orchestration, and CRM integration with human-in-the-loop.',
      category: 'AI Solutions',
      author: 'Dr. David Kim',
      date: '2025-09-12',
      readTime: '8 min read',
      image: '/blog/agentic-sales.jpg'
    },
    {
      id: 'agent-safety-tooling',
      title: 'Agent Safety Tooling: Defense-in-Depth for Multi-Agent Systems',
      excerpt: 'Policy guards, runtime monitors, and reputation systems for safer agents.',
      category: 'Cybersecurity',
      author: 'Dr. James Wilson',
    { name: 'AI Solutions', count: 4, active: false },
    { name: 'Accessibility', count: 1, active: false },
    { name: 'Infrastructure', count: 1, active: false },
            href="/blog/ai-ops-cost-optimization-2025"
            className="block w-full bg-white rounded-xl border border-blue-200 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            aria-label="Read: AI Ops Cost Optimization 2025: Practical Playbook for 30–50% Savings"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                AO
                AG
                AG
                  AI Ops Cost Optimization 2025: Practical Playbook for 30–50% Savings
                </h3>
                <p className="text-gray-600 text-sm md:text-base line-clamp-2 md:line-clamp-1">
                  Cut cloud and ops costs with AI-driven rightsizing and predictive autoscaling without sacrificing reliability.
                  AI Governance Blueprint 2025: Dual-Layer Policy for Safe Autonomy
                </h3>
                <p className="text-gray-600 text-sm md:text-base line-clamp-2 md:line-clamp-1">
                  A pragmatic framework for blending automated policy engines with human oversight for AI at scale.
                </p>
>>>>>>> 6995d05efbf958465be8e251001703bdbc87a50a
