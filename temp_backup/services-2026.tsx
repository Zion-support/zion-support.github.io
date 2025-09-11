import React from 'react';
import Head from 'next/head';
import UltraAdvancedServicesShowcase2026 from '../components/sections/UltraAdvancedServicesShowcase2026';

export default function Services2026Page() {
  return (
    <>
      <Head>
        <title>2026 Services | Zion Tech Group - AI & Emerging Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive 2026 portfolio of AI, quantum computing, emerging technology, and specialized industry solutions. Transform your business with cutting-edge innovation." />
        <meta property="og:title" content="2026 Services - Zion Tech Group" />
        <meta property="og:description" content="AI, quantum computing, emerging technology, and specialized industry solutions for 2026." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI services, quantum computing, emerging technology, micro SAAS, healthcare AI, fintech, manufacturing IoT, retail AI, education AI, logistics AI, Zion Tech Group" />
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                2026 Services Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Discover the future of technology with our comprehensive portfolio of AI, quantum computing, emerging technology, and specialized industry solutions designed to transform your business in 2026 and beyond.
              </p>
              
              {/* Contact Information */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 mb-8">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  kleber@ziontechgroup.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  364 E Main St STE 1008 Middletown DE 19709
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://ziontechgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 text-lg font-semibold"
                >
                  Visit Website <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50 text-lg font-semibold"
                >
                  Contact Sales Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Categories
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our comprehensive portfolio covers every aspect of modern technology innovation, from AI and quantum computing to specialized industry solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI & Machine Learning */}
              <div className="bg-gradient-to-br from-blue-600/20 to-indigo-700/20 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">AI & Machine Learning</h3>
                <p className="text-white/70 mb-6">
                  Advanced AI solutions including autonomous content creation, customer success automation, financial advisory, and HR optimization.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• AI Autonomous Content Factory</li>
                  <li>• AI Customer Success Platform</li>
                  <li>• AI Financial Advisor</li>
                  <li>• AI HR Platform</li>
                </ul>
              </div>

              {/* Quantum & Emerging Tech */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-700/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Quantum & Emerging Tech</h3>
                <p className="text-white/70 mb-6">
                  Cutting-edge quantum computing, space mining, zero trust security, and metaverse development solutions.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Quantum Internet Protocol</li>
                  <li>• Space Mining Platform</li>
                  <li>• Zero Trust Architecture</li>
                  <li>• Metaverse Development</li>
                </ul>
              </div>

              {/* Healthcare & Biotech */}
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-700/20 backdrop-blur-xl rounded-2xl p-8 border border-green-500/30">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Healthcare & Biotech</h3>
                <p className="text-white/70 mb-6">
                  AI-powered diagnostic platforms, medical image analysis, and healthcare automation solutions.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• AI Diagnostic Platform</li>
                  <li>• Medical Image Analysis</li>
                  <li>• Healthcare Automation</li>
                  <li>• Patient Data Analytics</li>
                </ul>
              </div>

              {/* Fintech & Finance */}
              <div className="bg-gradient-to-br from-yellow-600/20 to-orange-700/20 backdrop-blur-xl rounded-2xl p-8 border border-yellow-500/30">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Fintech & Finance</h3>
                <p className="text-white/70 mb-6">
                  AI-powered trading platforms, portfolio optimization, and financial advisory services.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• AI Trading Platform</li>
                  <li>• Portfolio Optimization</li>
                  <li>• Risk Management</li>
                  <li>• Financial Analytics</li>
                </ul>
              </div>

              {/* Manufacturing & IoT */}
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-700/20 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Manufacturing & IoT</h3>
                <p className="text-white/70 mb-6">
                  Smart factory automation, IoT sensor integration, and predictive maintenance solutions.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• IoT Platform</li>
                  <li>• Predictive Maintenance</li>
                  <li>• Process Optimization</li>
                  <li>• Quality Control</li>
                </ul>
              </div>

              {/* Retail & E-commerce */}
              <div className="bg-gradient-to-br from-pink-600/20 to-rose-700/20 backdrop-blur-xl rounded-2xl p-8 border border-pink-500/30">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Retail & E-commerce</h3>
                <p className="text-white/70 mb-6">
                  AI-powered personalization, dynamic pricing, and customer experience optimization.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• AI Personalization</li>
                  <li>• Dynamic Pricing</li>
                  <li>• Customer Analytics</li>
                  <li>• Inventory Management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Showcase */}
        <UltraAdvancedServicesShowcase2026 />

        {/* Why Choose Zion Tech Group */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We combine cutting-edge technology with real-world business value to deliver solutions that transform industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
                <p className="text-white/70">Pioneering the latest technologies and approaches in every solution we deliver.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Customer Success</h3>
                <p className="text-white/70">Dedicated support and success teams ensuring your implementation succeeds.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Grade</h3>
                <p className="text-white/70">Bank-level security, compliance, and scalability for enterprise deployments.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
                <p className="text-white/70">Measurable business impact with average 300%+ ROI across all solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join thousands of businesses already leveraging our cutting-edge technology solutions to drive innovation and growth.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-white/90">
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Mail className="w-5 h-5" />
                kleber@ziontechgroup.com
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5" />
                364 E Main St STE 1008 Middletown DE 19709
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 text-lg font-semibold"
              >
                Visit Website <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white transition-all duration-200 text-lg font-semibold"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Import required components and icons
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, ExternalLink, Lightbulb, 
  Users, Shield, TrendingUp 
} from 'lucide-react';