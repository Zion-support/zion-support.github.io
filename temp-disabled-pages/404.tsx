<<<<<<< HEAD:temp-disabled-pages/404.tsx
<<<<<<< HEAD:app/404.tsx
'use client';

=======
"use client";
>>>>>>> origin/main:app/404.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react';
=======
'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react'
>>>>>>> origin/main:temp-disabled-pages/404.tsx

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
<<<<<<< HEAD:app/404.tsx
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-bounce">
<<<<<<< HEAD:temp-disabled-pages/404.tsx
              <AlertTriangle className="w-6 h-6 text-red-400"  />
=======
            <div className="absolute -top-4 -right-4">

              <AlertTriangle className="w-16 h-16 text-yellow-400 animate-bounce" />
>>>>>>> origin/main:temp-disabled-pages/404.tsx
            </div>
          </div>
=======
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
          </div>

>>>>>>> origin/main:app/404.tsx
          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h1>
<<<<<<< HEAD:temp-disabled-pages/404.tsx
          <p className="text-lg text-gray-300 mb-8">
            Oops! The page you&apos;re looking for seems to have vanished into the digital void. 
            Don&apos;t worry, even our AI can&apos;t predict everything!
          </p>
          
<<<<<<< HEAD:app/404.tsx
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
          {/* Search Suggestion */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-8">

            <div className="flex items-center justify-center mb-4">

              <Search className="w-6 h-6 text-cyan-400 mr-2" />
              <h2 className="text-lg font-semibold text-white">What were you looking for?</h2>
            </div>
            <p className="text-gray-300 text-sm mb-4">Try searching for one of these popular pages:</p>
            <div className="flex flex-wrap gap-2 justify-center">

              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 rounded-lg hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">

>>>>>>> origin/main:temp-disabled-pages/404.tsx
            <Link
              href="/"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
=======
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have vanished into the digital void. Don't worry, even our AI can't predict everything!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
>>>>>>> origin/main:app/404.tsx
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
<<<<<<< HEAD:temp-disabled-pages/404.tsx
            
            <button
              onClick={() => window.history.back()}
<<<<<<< HEAD:app/404.tsx
              className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center"
=======
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
>>>>>>> origin/main:temp-disabled-pages/404.tsx
=======
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
>>>>>>> origin/main:app/404.tsx
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
<<<<<<< HEAD:temp-disabled-pages/404.tsx
            
=======
>>>>>>> origin/main:app/404.tsx
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh
            </button>
          </div>
<<<<<<< HEAD:temp-disabled-pages/404.tsx
<<<<<<< HEAD:app/404.tsx
          
          <div className="mt-12">
            <p className="text-gray-400 mb-4">Looking for something specific?</p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
=======
          <div className="mt-12">

            <p className="text-gray-400 mb-4">Looking for something specific?</p>
            <div className="relative max-w-md mx-auto">

              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
>>>>>>> origin/main:temp-disabled-pages/404.tsx
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
<<<<<<< HEAD:app/404.tsx
          
          <div className="mt-12">
            <p className="text-gray-400 mb-6">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
=======
          <div className="mt-12">

            <p className="text-gray-400 mb-6">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">

>>>>>>> origin/main:temp-disabled-pages/404.tsx
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
=======

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
>>>>>>> origin/main:app/404.tsx
          </div>
        </div>
      </div>
    </>
<<<<<<< HEAD:temp-disabled-pages/404.tsx
  )
}
<<<<<<< HEAD:app/404.tsx

export default NotFound
=======
;
export default NotFound
>>>>>>> origin/main:temp-disabled-pages/404.tsx
=======
  );
};

export default NotFound;
>>>>>>> origin/main:app/404.tsx
