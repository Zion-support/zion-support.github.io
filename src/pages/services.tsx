import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Our comprehensive technology services" />
      </Head>
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions for modern businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Solutions</h3>
              <p className="text-gray-600 mb-4">Advanced artificial intelligence and machine learning solutions.</p>
              <p className="text-blue-600 font-semibold">Starting from $2,500/month</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro SAAS</h3>
              <p className="text-gray-600 mb-4">Custom software-as-a-service applications.</p>
              <p className="text-blue-600 font-semibold">Starting from $1,500/month</p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Services</h3>
              <p className="text-gray-600 mb-4">Complete IT infrastructure and support.</p>
              <p className="text-blue-600 font-semibold">Starting from $3,000/month</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}