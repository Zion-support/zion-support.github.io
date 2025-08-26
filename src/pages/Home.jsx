import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/comprehensive-services">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                View All Services
              </button>
            </Link>
            <Link to="/comprehensive-pricing">
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors">
                View Pricing
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <h3 className="text-xl font-semibold text-white mb-4">AI & Analytics</h3>
              <p className="text-zion-slate-light">
                Advanced AI-powered business intelligence and analytics solutions.
              </p>
            </div>
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
              <p className="text-zion-slate-light">
                Enterprise-grade security and threat detection systems.
              </p>
            </div>
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Solutions</h3>
              <p className="text-zion-slate-light">
                Scalable cloud infrastructure and DevOps services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 mb-8">
            Contact us today to discuss your technology needs.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
