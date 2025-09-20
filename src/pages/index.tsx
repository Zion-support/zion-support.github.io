import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Zion Holdings - AI-Powered Solutions</title>
        <meta name="description" content="Leading provider of AI-powered business solutions and innovative technology services" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Holdings
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading provider of AI-powered business solutions and innovative technology services
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}