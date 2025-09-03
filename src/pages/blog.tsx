import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2025 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.',
      category: 'AI & Machine Learning',
      author: 'Kleber Santos',
      date: 'January 15, 2025',
      readTime: '5 min read',
      image: '🤖',
      featured: true
    }, {
      id: 2,
      title: 'Cloud FinOps: Optimizing Your Cloud Costs in 2025',
      excerpt: 'Learn the latest strategies for managing and optimizing cloud infrastructure costs in today\'s dynamic environment.',
      category: 'Cloud & DevOps',
      author: 'Cloud Team',
      date: 'January 12, 2025',
      readTime: '4 min read',
      image: '☁️',
      featured: false
    }, {
      id: 3,
      title: 'Zero Trust Security: The New Standard for Enterprise Protection',
      excerpt: 'Explore how zero trust architecture is becoming the foundation for modern cybersecurity strategies.',
      category: 'Cybersecurity',
      author: 'Security Team',
      date: 'January 10, 2025',
      readTime: '6 min read',
      image: '🔒',
      featured: false
    }, {
      id: 4,
      title: 'Building Scalable Micro SAAS Applications: Best Practices',
      excerpt: 'Essential guidelines for developing and scaling software-as-a-service applications for modern businesses.',
      category: 'Micro SAAS',
      author: 'Development Team',
      date: 'January 8, 2025',
      readTime: '7 min read',
      image: '💻',
      featured: false
    }, {
      id: 5,
      title: 'Data Analytics in Healthcare: Improving Patient Outcomes',
      excerpt: 'How healthcare organizations are leveraging data analytics to enhance patient care and operational efficiency.',
      category: 'Data Analytics',
      author: 'AI Team',
      date: 'January 5, 2025',
      readTime: '5 min read',
      image: '📊',
      featured: false
    }, {
      id: 6,
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'A practical look at quantum computing\'s current state and its real-world applications for businesses.',
      category: 'Emerging Tech',
      author: 'Research Team',
      date: 'January 3, 2025',
      readTime: '8 min read',
      image: '🚀',
      featured: false
    }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cloud & DevOps',
    'Cybersecurity',
    'Micro SAAS',
    'Data Analytics',
    'Emerging Tech'
  ];

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group | Technology Insights & Updates</title>
        <meta name="description" content="Stay updated with the latest technology trends, AI insights, and industry best practices from Zion Tech Group experts." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-gray-900">Zion Tech Group</Link>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</Link>
                <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Solutions</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
                <Link href="/blog" className="text-blue-600 font-medium">Blog</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with expert insights on AI, cloud computing, cybersecurity, and emerging technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#featured" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Read Latest Articles
              </Link>
              <Link href="/contact" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Post */}, {featuredPost && (
          <section id="featured" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
                <p className="text-lg text-gray-600">Our latest insights and analysis</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {featuredPost.category}
                      </span>
                      <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-lg">{featuredPost.image}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{featuredPost.author}</p>
                          <p className="text-sm text-gray-500">{featuredPost.date}</p>
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${featuredPost.id}`}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Read Full Article
                      </Link>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-6xl">{featuredPost.image}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}, {/* Category Filter */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">{post.image}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm">{post.image}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Load More Articles
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get the latest technology insights, industry updates, and expert analysis delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
                <p className="text-gray-400 mb-4">
                  Transforming businesses through innovative technology solutions and AI-powered automation.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Blog Categories</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/blog" className="hover:text-white transition-colors">AI & Machine Learning</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Cloud & DevOps</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Cybersecurity</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Emerging Tech</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <p>+1 302 464 0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>Middletown, DE 19709</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )}