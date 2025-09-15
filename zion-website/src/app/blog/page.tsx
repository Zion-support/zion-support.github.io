import React from 'react'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI: Quantum Neural Networks Revolution',
    excerpt: 'Explore how quantum neural networks are reshaping artificial intelligence and what this means for businesses worldwide.',
    content: 'Quantum neural networks represent a paradigm shift in computational power and AI capabilities. By leveraging quantum superposition and entanglement, these networks can process exponentially more complex data than traditional neural networks...',
    author: 'Dr. Sarah Chen',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'AI Research',
    featured: true,
    image: '/blog/quantum-neural-networks.jpg'
  },
  {
    id: 2,
    title: 'Autonomous Business Operations: The Next Frontier',
    excerpt: 'Discover how AI-powered automation is transforming enterprise operations and driving unprecedented efficiency gains.',
    content: 'Autonomous business operations represent the culmination of decades of AI research and development. These systems can independently manage complex business processes, make real-time decisions, and adapt to changing market conditions...',
    author: 'Michael Rodriguez',
    date: '2025-01-12',
    readTime: '6 min read',
    category: 'Business Innovation',
    featured: true,
    image: '/blog/autonomous-business.jpg'
  },
  {
    id: 3,
    title: 'Building Secure Digital Infrastructure for the Modern Enterprise',
    excerpt: 'Learn about the latest cybersecurity protocols and infrastructure solutions protecting businesses in the digital age.',
    content: 'As businesses become increasingly digital, the need for robust cybersecurity infrastructure has never been greater. Our latest research shows that organizations implementing comprehensive security frameworks see 85% fewer security incidents...',
    author: 'Alex Thompson',
    date: '2025-01-10',
    readTime: '7 min read',
    category: 'Cybersecurity',
    featured: false,
    image: '/blog/cybersecurity-infrastructure.jpg'
  },
  {
    id: 4,
    title: 'Quantum Computing Breakthrough: Solving Complex Optimization Problems',
    excerpt: 'Our latest quantum computing research has achieved a 1000x speedup in solving complex optimization problems.',
    content: 'In a groundbreaking development, our quantum computing team has successfully demonstrated quantum advantage in solving complex optimization problems that would take classical computers centuries to solve...',
    author: 'Dr. Elena Vasquez',
    date: '2025-01-08',
    readTime: '9 min read',
    category: 'Quantum Computing',
    featured: true,
    image: '/blog/quantum-computing.jpg'
  },
  {
    id: 5,
    title: 'The Rise of Autonomous AI Agents in Enterprise Applications',
    excerpt: 'How autonomous AI agents are revolutionizing customer service, data analysis, and business intelligence.',
    content: 'Autonomous AI agents are becoming the backbone of modern enterprise applications. These intelligent systems can operate independently, learning from interactions and continuously improving their performance...',
    author: 'Jennifer Liu',
    date: '2025-01-05',
    readTime: '5 min read',
    category: 'AI Applications',
    featured: false,
    image: '/blog/autonomous-agents.jpg'
  },
  {
    id: 6,
    title: 'Data Analytics Revolution: Real-Time Insights for Business Growth',
    excerpt: 'Advanced analytics platforms are providing businesses with unprecedented insights into their operations and market trends.',
    content: 'The future of business intelligence lies in real-time data analytics. Our advanced analytics platforms can process petabytes of data in real-time, providing businesses with instant insights that drive growth and innovation...',
    author: 'David Park',
    date: '2025-01-03',
    readTime: '6 min read',
    category: 'Data Analytics',
    featured: false,
    image: '/blog/data-analytics.jpg'
  }
]

const categories = ['All', 'AI Research', 'Business Innovation', 'Cybersecurity', 'Quantum Computing', 'AI Applications', 'Data Analytics']

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Insights & Innovation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Stay ahead of the curve with the latest research, insights, and breakthroughs in AI, quantum computing, and autonomous systems.
          </p>
        </div>

        {/* Categories */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors duration-200">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <UserIcon className="h-4 w-4" />
                    {post.author}
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-200"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Regular Posts */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 hover:text-blue-400 transition-colors duration-200">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <UserIcon className="h-4 w-4" />
                    {post.author}
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-200"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mx-auto mt-24 max-w-2xl">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights, research updates, and breakthrough announcements delivered to your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}