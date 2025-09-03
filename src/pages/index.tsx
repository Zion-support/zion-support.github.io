import React from "react";
import Head from "next/head";
import Link from "next/link";

const index = () => {
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI-Powered Technology Solutions</title>
        <meta name="description" content="Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services." />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              AI-Powered Technology Solutions for the Future
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• AI & Machine Learning Solutions</li>
                  <li>• Quantum Computing Services</li>
                  <li>• Blockchain Development</li>
                  <li>• Cloud Infrastructure</li>
                  <li>• Cybersecurity Solutions</li>
                  <li>• Custom Software Development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Cutting-Edge Technology</li>
                  <li>• Expert Team</li>
                  <li>• Proven Results</li>
                  <li>• 24/7 Support</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Services
              </Link>
              <Link href="/contact" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;