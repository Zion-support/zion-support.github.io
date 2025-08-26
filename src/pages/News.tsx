import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function News() {
  return (
    <>
      <SEO 
        title="News - Zion Tech Group"
        description="Stay updated with the latest news, company updates, and announcements from Zion Tech Group."
        canonical="/news"
        url="https://ziontechgroup.com/news"
      />
      
      <main className="min-h-screen bg-futuristic text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/50 to-blue-900/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Stay informed about our latest developments, company news, and industry insights
            </p>
          </div>
        </section>

        {/* News Content */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Latest Updates
              </h2>
              <p className="text-gray-300 text-lg">
                Company updates, press releases, and announcements will appear here.
              </p>
            </div>

            {/* Placeholder for future news */}
            <div className="bg-black/30 p-12 rounded-lg border border-cyan-500/20 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">News Coming Soon</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're working on bringing you the latest updates about our company, projects, and industry insights. 
                Check back soon for exciting announcements and news.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/services" 
                  className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-8 rounded-lg border border-cyan-500/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated</h3>
                <p className="text-gray-300 mb-6">
                  Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
