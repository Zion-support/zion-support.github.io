
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react';

'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">

        <div className="max-w-2xl w-full text-center">

          {/* 404 Animation */}
          <div className="relative mb-8">

            <div className="text-9xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-pulse">

              404
            </div>

            </div>
          </div>

              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h1>

            <Link
              href="/"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have vanished into the digital void. Don't worry, even our AI can't predict everything!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"

            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"

            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh
            </button>
          </div>

                type="text"
                placeholder="Search our services..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const query = (e.target as HTMLInputElement).value
                    if (query.trim()) {
                      window.location.href = `/search?q=${encodeURIComponent(query.trim())}`
                    }
                  }
                }}
              />
            </div>
          </div>

              <Link href="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Contact
              </Link>
              <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Blog
              </Link>
            </div>

          {/* Search Suggestion */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-cyan-400 mr-2" />
              <h3 className="text-lg font-semibold text-white">Looking for something specific?</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Try searching for what you need or browse our popular pages:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/ai-services" className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm hover:bg-cyan-500/30 transition-colors">
                AI Services
              </Link>
              <Link href="/it-solutions" className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm hover:bg-purple-500/30 transition-colors">
                IT Solutions
              </Link>
              <Link href="/about" className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm hover:bg-pink-500/30 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm hover:bg-green-500/30 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="mt-8 text-sm text-gray-400">
            <p>💡 Fun fact: Even the most advanced AI systems have a 0.1% error rate. You just found our 0.1%!</p>

          </div>
        </div>
      </div>
    </>

  );
};

export default NotFound;

