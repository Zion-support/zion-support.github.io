import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSaaS: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Micro SaaS Solutions – Zion Tech Group</title>
        <meta name="description" content="Niche, subscription-based products: email deliverability, lead enrichment, vertical CRMs, and workflow bots." />
        <link rel="canonical" href="https://ziontechgroup.com/services/micro-saas" />
      </Helmet>

      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Micro SaaS</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">Idea-to-MVP in weeks. We build, host, and support focused SaaS tools that solve one painful problem extremely well.</p>
          <div className="mt-8 flex gap-4">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Start your MVP</Link>
            <Link to="/pricing" className="inline-flex items-center px-6 py-3 rounded-lg bg-white border hover:bg-gray-50">See pricing</Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold">Email Deliverability Optimizer</h3>
            <p className="text-gray-600 mt-2">Warmup, domain health, spam-checks, and template scoring.</p>
            <p className="mt-4 text-gray-800">$49–$199/month</p>
          </div>
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold">Sales Playbook Copilot</h3>
            <p className="text-gray-600 mt-2">Sequencing, outreach scripts, objection handling with AI.</p>
            <p className="mt-4 text-gray-800">$69–$249/month</p>
          </div>
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold">Local SEO Booster</h3>
            <p className="text-gray-600 mt-2">Citation management, review prompts, and rank tracking.</p>
            <p className="mt-4 text-gray-800">$39–$149/month</p>
          </div>
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold">Edge AI Inference</h3>
            <p className="text-gray-600 mt-2">Device-side models for low-latency detection and QA.</p>
            <p className="mt-4 text-gray-800">Custom</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Micro SaaS Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
              <p className="text-gray-600">From concept to MVP in 2-4 weeks with modern tech stack</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Revenue</h3>
              <p className="text-gray-600">Subscription models with predictable recurring revenue</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Support</h3>
              <p className="text-gray-600">Hosting, maintenance, and customer support included</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaaS;