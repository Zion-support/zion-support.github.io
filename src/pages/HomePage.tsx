import React from 'react';
import SEO from '../components/SEO';
import {

} from '../components/LazyLoader';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Zion Tech Group — AI, Micro SaaS, and IT Services"
        description="Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation."
        keywords="AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation"
      />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI-Powered Solutions for Modern Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI services, micro SaaS solutions, and enterprise IT solutions. 
              Drive growth, efficiency, and innovation with our proven technology stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
              <a 
                href="/services" 
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <LazyFeaturedServices />
          </div>
        </section>

        {/* Content Showcase */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <LazyContentShowcase />
          </div>
        </section>

        {/* Banner Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <LazyBanner />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our AI experts help you implement cutting-edge solutions that drive real results.
            </p>
            <a 
              href="/contact" 
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors inline-block"
            >
              Start Your Project Today
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;