import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Custom500 = () => {
  return (
    <>
      <Head>
        <title>500 - Server Error | Zion Tech Group</title>
        <meta name="description" content="Internal server error occurred. Please try again later." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h1 className="text-9xl font-bold text-indigo-600">500</h1>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Internal Server Error
            </h2>
            <p className="text-white/70 text-lg max-w-md mx-auto mb-8">
              Something went wrong on our end. We&apos,re working to fix it. 
              Please try again in a few moments.
            </p>
          </div>
          <div className="space-y-4">
            <Link 
              href="/" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
            >
              Go back home
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/about" 
                className="px-6 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="px-6 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-2 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
