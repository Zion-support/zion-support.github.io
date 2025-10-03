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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Micro SaaS Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Launch</h3>
              <p className="text-gray-600">From concept to live product in 4-8 weeks with full hosting and support.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Focused Solutions</h3>
              <p className="text-gray-600">Each tool solves one specific problem exceptionally well, not everything mediocre.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
              <p className="text-gray-600">Built to handle growth from day one with enterprise-grade reliability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Launch Your Micro SaaS?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Let's discuss your idea and build a focused solution that solves a real problem for your target market.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MicroSaaS;