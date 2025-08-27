import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const Services: React.FC = () => {
  const [query, setQuery] = useState('');
  const services = INNOVATIVE_MICRO_SAAS_SERVICES_2025;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return services;
    return services.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.tags?.some(t => t.toLowerCase().includes(q))
    );
  }, [query, services]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO title="Services - Zion Tech Group" description="AI, Micro SaaS, Cloud/DevOps, Digital Twin, Data & Analytics, and Enterprise IT solutions." />

      <section className="relative py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Explore Our Services
            </motion.h1>
            <p className="mt-4 text-lg text-slate-300">Productized Micro SaaS, AI platforms, and end-to-end IT solutions.</p>
          </div>

          <div className="max-w-2xl mx-auto mt-10 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, e.g. analytics, quantum, devops"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/70 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
            />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 30).map((svc) => (
            <div key={svc.id} className="group bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-colors rounded-2xl p-6">
              <div className="text-xs uppercase tracking-wide text-cyan-300/70">{svc.category}</div>
              <h3 className="mt-2 text-xl font-semibold group-hover:text-cyan-300 transition-colors">{svc.title}</h3>
              <p className="mt-2 text-sm text-slate-300 line-clamp-3">{svc.description}</p>
              <div className="mt-4 text-sm text-cyan-300/80">Market: {svc.marketPrice}</div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 text-center mt-12">
          <Link to="/services/micro-saas-solutions" className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:opacity-90">
            Explore Micro SaaS Solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <div className="mt-6 text-sm text-slate-300">
            Questions? Call <a className="text-cyan-300 hover:text-cyan-200" href="tel:+13024640950">+1 302 464 0950</a> or email <a className="text-cyan-300 hover:text-cyan-200" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.
            Our office: 364 E Main St STE 1008 Middletown DE 19709.
            See more at <a className="text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">ziontechgroup.com</a>.
          </div>
        </div>

        {/* Marketing/Benefits Section */}
        <div className="container mx-auto px-4 mt-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Why Zion Tech Group</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-300 space-y-2">
                <li>Productized delivery with clear timelines and fixed bids available</li>
                <li>Security-first: SSO, RBAC, audit logs, and compliance guardrails</li>
                <li>Cloud-native architectures with cost and reliability SLAs</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Typical Market Pricing</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-300 space-y-2">
                <li>Micro SaaS subscriptions: $39–$199/mo per user/domain</li>
                <li>AI solution projects: $5k–$60k+ depending on scope</li>
                <li>IT modernization: $10k–$120k+ with optional managed services</li>
              </ul>
              <a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/services" target="_blank" rel="noreferrer">
                View live pricing guidance <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Get Started</h3>
              <p className="mt-3 text-sm text-slate-300">Book a strategy call or request a tailored proposal. We respond within 1 business day.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500">Book a call</Link>
                <Link to="/request-quote" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-white/5">Request a quote</Link>
                <a href="mailto:kleber@ziontechgroup.com" className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/5">Email us</a>
              </div>
              <div className="mt-4 text-xs text-slate-400">Direct: +1 302 464 0950 · 364 E Main St STE 1008 Middletown DE 19709</div>
              <a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">
                Visit ziontechgroup.com <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

