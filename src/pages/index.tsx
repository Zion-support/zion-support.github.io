import React from "react";
import Head from "next/head";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary AI & Technology Solutions</title>
        <meta name="description" content="Leading provider of AI-powered micro SAAS solutions, cloud services, and cutting-edge technology services. Transform your business with our innovative solutions." />
        <meta name="keywords" content="AI solutions, micro SAAS, cloud services, technology consulting, Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Revolutionary AI-Powered Technology Solutions & Micro SAAS Services
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• AI-Powered Micro SAAS Solutions</li>
                  <li>• Cloud Migration & DevOps</li>
                  <li>• Cybersecurity & Quantum Security</li>
                  <li>• Blockchain & Supply Chain</li>
                  <li>• IoT & Edge Computing</li>
                  <li>• Custom Development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• 20+ Revolutionary AI Services</li>
                  <li>• Proven ROI of 400-800%</li>
                  <li>• 99.9% Uptime Guarantee</li>
                  <li>• 24/7 Expert Support</li>
                  <li>• Competitive Pricing</li>
                  <li>• Industry-Leading Innovation</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Our Services
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

export default Index;