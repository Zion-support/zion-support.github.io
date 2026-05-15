// app/page.tsx — Home / Landing Page
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { allServices, Service } from './data/servicesData';

const FEATURED_IDS = [
  'ai-gen-1', 'ai-agent-1', 'ai-rag-1', 'ai-predictive-maintenance-3',
  'it-cloud-1', 'it-cybersecurity-1', 'it-devops-1', 'it-quantum-2',
  'saas-crm-1', 'saas-seo-1', 'saas-email-1', 'saas-ai-agent-2',
];

const stats = [
  { value: '220+', label: 'Services & Solutions' },
  { value: '4 Categories', label: 'AI · IT · SAAS · Consulting' },
  { value: '24/7', label: 'Monitoring & Support' },
  { value: '99.9%', label: 'SLA Uptime Guarantee' },
];

export default function HomePage() {
  const services: Service[] = allServices;

  const featuredServices = services.filter((s: any) => FEATURED_IDS.includes(s.id));

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(120,50,200,0.15),rgba(20,10,40,0.9))]" />
        <div className="relative container-page pt-32 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">AI & IT Services</span><br />
              for Your Business
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              172+ real-world micro SAAS services, IT solutions, and AI-powered platforms.
              From machine learning to cybersecurity, CRM automation to blockchain.
              Get a custom proposal in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/configurator" className="btn-primary text-lg">
                Get Your Custom Proposal →
              </Link>
              <Link href="/services" className="btn-secondary text-lg">
                Browse All Services
              </Link>
              <a href="tel:+13024640950" className="btn-secondary text-lg">
                ☎ +1 302 464 0950
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm mb-12">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                BBB Accredited
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                100% US-Based Team
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                SLA Guaranteed
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((s, i) => (
                <div key={i} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="text-3xl font-bold gradient-text">{s.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container-page">
          <h2 className="section-heading text-center">How It Works</h2>
          <p className="section-subheading text-center">From inquiry to implementation in 4 simple steps</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[
              { num: '01', title: 'Tell Us Your Needs', desc: 'Share your business goals, budget, and technical requirements.' },
              { num: '02', title: 'AI-Powered Matching', desc: 'Our AI engine recommends the best-fit services from 220+ options.' },
              { num: '03', title: 'Custom Proposal', desc: 'Receive a detailed PDF proposal with pricing, timeline, and next steps.' },
              { num: '04', title: 'Launch & Scale', desc: 'We implement, monitor, and optimize your solution for maximum ROI.' },
            ].map((s, i) => (
              <div key={i} className="glass-card text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {s.num}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-slate-900/30">
        <div className="container-page">
          <h2 className="section-heading text-center">Featured Services</h2>
          <p className="section-subheading text-center">Our most popular solutions across AI, IT, and Micro SAAS</p>
          <div className="feature-grid mt-4">
            {featuredServices.map((service: any) => (
              <div key={service.id} className="glass-card">
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.subtitle}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 4).map((f: string, i: number) => (
                    <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-slate-700/50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-purple-300 text-sm font-medium">
                      From {(service.pricing as Record<string, string>)[Object.keys(service.pricing)[0]]}
                    </span>
                  </div>
                  <Link href={`/services#${service.id}`} className="text-sm text-purple-400 hover:underline">
                    Learn more →
                  </Link>
                  <p className="text-xs text-slate-500 mt-2">{service.category.charAt(0).toUpperCase() + service.category.slice(1)} • {service.subcategory}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-primary">
              View All {services.length} Services
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container-page">
          <h2 className="section-heading text-center">Our Service Categories</h2>
          <p className="section-subheading text-center">Four core domains of expertise</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { key: 'ai', label: 'AI Services', emoji: '🧠', count: services.filter((s: any) => s.category === 'ai').length },
              { key: 'it', label: 'IT Services', emoji: '🖥️', count: services.filter((s: any) => s.category === 'it').length },
              { key: 'saas', label: 'Micro SAAS', emoji: '🚀', count: services.filter((s: any) => s.category === 'saas').length },
              { key: 'consulting', label: 'Consulting', emoji: '📋', count: services.filter((s: any) => s.category === 'consulting').length },
            ].map((cat: any) => (
              <Link key={cat.key} href={`/services?category=${cat.key}`} className="glass-card text-center hover:-translate-y-2 transition-transform">
                <div className="text-4xl mb-4">{cat.emoji}</div>
                <h3 className="text-xl font-semibold text-white">{cat.label}</h3>
                <p className="text-slate-400 mt-2">{cat.count} services</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-page">
          <div className="cta-section">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Get a custom-tailored proposal with services matched to your budget and needs.
              Delivered to your inbox as a PDF within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configurator" className="btn-primary text-lg">
                Start Configurator →
              </Link>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-lg">
                Email Us
              </a>
              <a href="tel:+13024640950" className="btn-secondary text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>

{/* Contact Info */}
      <section className="py-16 border-t border-slate-800">
        <div className="container-page">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">📞 Call Us</h4>
              <a href="tel:+130***0950" className="text-purple-300 text-lg">+1 302 464 0950</a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">✉️ Email</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 text-lg">kleber@ziontechgroup.com</a>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">📍 Visit Us</h4>
              <p className="text-slate-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm">
            <Link href="/faq" className="text-slate-400 hover:text-cyan-400 transition">❓ FAQ</Link>
            <Link href="/industry-solutions" className="text-slate-400 hover:text-cyan-400 transition">🏭 Industry Solutions</Link>
            <Link href="/testimonials" className="text-slate-400 hover:text-cyan-400 transition">⭐ Testimonials</Link>
            <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition">🛠️ All Services</Link>
            <Link href="/configurator" className="text-slate-400 hover:text-cyan-400 transition">⚙️ Configurator</Link>
            <Link href="/proposals" className="text-slate-400 hover:text-cyan-400 transition">📄 Proposals</Link>
          </div>
        </div>
      </section>
    </main>
  );
}