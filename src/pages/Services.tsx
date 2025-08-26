import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Services & Solutions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Real, ready-to-deploy offerings across Micro SaaS, AI, Cybersecurity, Data, and Cloud.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS</h3>
            <p className="text-zion-slate-light mb-4">
              Ready-to-deploy software solutions for specific business needs.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-zion-cyan hover:bg-zion-cyan-dark text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
            <p className="text-zion-slate-light mb-4">
              Cutting-edge artificial intelligence and machine learning services.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-zion-cyan hover:bg-zion-cyan-dark text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
            <p className="text-zion-slate-light mb-4">
              Comprehensive technology consulting and implementation services.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-zion-cyan hover:bg-zion-cyan-dark text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-zion-cyan mb-2">Phone</h3>
              <p className="text-white">{contact.mobile}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zion-cyan mb-2">Email</h3>
              <p className="text-white">{contact.email}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zion-cyan mb-2">Address</h3>
              <p className="text-white">{contact.address}</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a 
              href={contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-zion-cyan hover:bg-zion-cyan-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
