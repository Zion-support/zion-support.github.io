import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Leading technology solutions provider specializing in web development, mobile applications, AI integration, cloud services, and digital transformation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="technology solutions, web development, mobile apps, AI integration, cloud services, digital transformation" />
        <meta property="og:title" content="Zion Tech Group - Leading Technology Solutions Provider" />
        <meta property="og:description" content="Transform your business with cutting-edge technology solutions. Expert web development, mobile applications, AI integration, and cloud services." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-20 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Transform Your Business with
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Cutting-Edge Technology
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
                Leading technology solutions provider specializing in web development, 
                mobile applications, AI integration, cloud services, and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/services" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Our Services
                </Link>
                <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
                <p className="text-gray-300 mb-6">
                  Modern, responsive web applications built with the latest technologies including React, Next.js, and TypeScript.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Custom Web Applications</li>
                  <li>• E-commerce Solutions</li>
                  <li>• Progressive Web Apps</li>
                  <li>• API Development</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Mobile Development</h3>
                <p className="text-gray-300 mb-6">
                  Native and cross-platform mobile applications for iOS and Android with seamless user experiences.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• iOS & Android Apps</li>
                  <li>• React Native Development</li>
                  <li>• Flutter Applications</li>
                  <li>• App Store Optimization</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Integration</h3>
                <p className="text-gray-300 mb-6">
                  Leverage artificial intelligence to automate processes, gain insights, and enhance user experiences.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cloud Services</h3>
                <p className="text-gray-300 mb-6">
                  Scalable and secure cloud infrastructure solutions to power your digital transformation.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• AWS/Azure/GCP Migration</li>
                  <li>• DevOps & CI/CD</li>
                  <li>• Containerization</li>
                  <li>• Microservices Architecture</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Data Analytics</h3>
                <p className="text-gray-300 mb-6">
                  Transform your data into actionable insights with advanced analytics and business intelligence.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Business Intelligence</li>
                  <li>• Data Visualization</li>
                  <li>• ETL Pipelines</li>
                  <li>• Real-time Analytics</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
                <p className="text-gray-300 mb-6">
                  Protect your business with comprehensive security solutions and compliance frameworks.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Security Audits</li>
                  <li>• Penetration Testing</li>
                  <li>• Compliance Management</li>
                  <li>• Incident Response</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Fast Delivery</h3>
                <p className="text-gray-300">
                  Agile development processes ensure rapid delivery without compromising quality.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">
                  Highly skilled developers and designers with years of industry experience.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">
                  Round-the-clock technical support to keep your systems running smoothly.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cost Effective</h3>
                <p className="text-gray-300">
                  Competitive pricing with transparent costs and no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your business goals. 
              Get a free consultation with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Free Consultation
              </Link>
              <Link href="/pricing" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}