import React from 'react'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

// This would typically come from a CMS or database
const blogPosts: Record<string, any> = {
  "1": {
    id: 1,
    title: 'The Future of AI: Quantum Neural Networks Revolution',
    content: `
      <p>Quantum neural networks represent a paradigm shift in computational power and AI capabilities. By leveraging quantum superposition and entanglement, these networks can process exponentially more complex data than traditional neural networks.</p>
      
      <h2>The Quantum Advantage</h2>
      <p>Traditional neural networks are limited by classical computing constraints. Quantum neural networks, however, can exist in multiple states simultaneously, allowing for parallel processing of vast amounts of information.</p>
      
      <h3>Key Benefits</h3>
      <ul>
        <li>Exponential speedup in complex problem solving</li>
        <li>Enhanced pattern recognition capabilities</li>
        <li>Improved efficiency in machine learning tasks</li>
        <li>Better handling of high-dimensional data</li>
      </ul>
      
      <h2>Real-World Applications</h2>
      <p>From drug discovery to financial modeling, quantum neural networks are opening new possibilities across industries. Our research team has successfully implemented these networks in:</p>
      
      <ul>
        <li>Pharmaceutical research and drug development</li>
        <li>Financial risk assessment and portfolio optimization</li>
        <li>Climate modeling and environmental prediction</li>
        <li>Cybersecurity and threat detection</li>
      </ul>
      
      <h2>The Road Ahead</h2>
      <p>As quantum computing technology matures, we expect to see widespread adoption of quantum neural networks in enterprise applications. The future is quantum, and the revolution starts now.</p>
    `,
    author: 'Dr. Sarah Chen',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'AI Research',
    image: '/blog/quantum-neural-networks.jpg'
  },
  "2": {
    id: 2,
    title: 'Autonomous Business Operations: The Next Frontier',
    content: `
      <p>Autonomous business operations represent the culmination of decades of AI research and development. These systems can independently manage complex business processes, make real-time decisions, and adapt to changing market conditions.</p>
      
      <h2>What Makes Operations Truly Autonomous?</h2>
      <p>Unlike traditional automation, autonomous operations systems can:</p>
      
      <ul>
        <li>Learn from experience and improve over time</li>
        <li>Make complex decisions without human intervention</li>
        <li>Adapt to unexpected situations and market changes</li>
        <li>Coordinate across multiple departments and systems</li>
      </ul>
      
      <h2>Industry Transformations</h2>
      <p>We're seeing remarkable transformations across various sectors:</p>
      
      <h3>Manufacturing</h3>
      <p>Smart factories are now capable of self-optimizing production lines, predictive maintenance, and quality control without human oversight.</p>
      
      <h3>Financial Services</h3>
      <p>Autonomous trading systems, risk management, and customer service are revolutionizing how financial institutions operate.</p>
      
      <h3>Healthcare</h3>
      <p>From diagnostic assistance to treatment optimization, autonomous systems are enhancing patient care and operational efficiency.</p>
      
      <h2>Implementation Strategies</h2>
      <p>Successfully implementing autonomous operations requires a strategic approach:</p>
      
      <ol>
        <li>Start with high-impact, low-risk processes</li>
        <li>Ensure robust data infrastructure</li>
        <li>Implement comprehensive monitoring and safety protocols</li>
        <li>Gradually expand autonomous capabilities</li>
        <li>Maintain human oversight for critical decisions</li>
      </ol>
      
      <h2>Looking Forward</h2>
      <p>The future of business lies in autonomous operations. Organizations that embrace this transformation today will have a significant competitive advantage tomorrow.</p>
    `,
    author: 'Michael Rodriguez',
    date: '2025-01-12',
    readTime: '6 min read',
    category: 'Business Innovation',
    image: '/blog/autonomous-business.jpg'
  }
}

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.id]
  
  if (!post) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-200"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-300 mb-6">
            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
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
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-3 text-gray-300">
            <UserIcon className="h-5 w-5" />
            <span className="font-medium">{post.author}</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <div 
            className="text-gray-300 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Related Articles */}
        <section className="mt-16 pt-12 border-t border-white/10">
          <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(blogPosts)
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 block"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                      {relatedPost.category}
                    </span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 hover:text-blue-400 transition-colors duration-200">
                    {relatedPost.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <UserIcon className="h-4 w-4" />
                    {relatedPost.author}
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights and research updates delivered to your inbox.
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