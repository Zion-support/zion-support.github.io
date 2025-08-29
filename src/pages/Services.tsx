import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, DollarSign, ExternalLink, Workflow, MessageSquare, Globe } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';

const Services: React.FC = () => {
  const [query, setQuery] = useState('');
  const services = INNOVATIVE_MICRO_SAAS_SERVICES_2025;
  const featuredCategories = [
    { icon: Workflow, title: 'Process Automation', desc: 'Human + AI workflows across CRMs, ERPs and support.', href: '/ai-services' },
    { icon: MessageSquare, title: 'Helpdesk & Knowledge', desc: 'Tickets, KB, and chatbots trained on your docs.', href: '/micro-saas' },
    { icon: Globe, title: 'Localization & Multilingual', desc: '50+ languages, locale-aware UX, translation QA pipelines.', href: '/micro-saas' }
  ];

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
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link to="/services/micro-saas-solutions" className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:opacity-90">
              Explore Micro SaaS Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/revolutionary-services-2030" className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90">
              Revolutionary Services 2030
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/revolutionary-services-showcase-2030" className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:opacity-90">
              Services Showcase 2030
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/pricing-2030" className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90">
              Pricing Guide 2030
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 text-sm text-slate-300">
            Questions? Call <a className="text-cyan-300 hover:text-cyan-200" href="tel:+13024640950">+1 302 464 0950</a> or email <a className="text-cyan-300 hover:text-cyan-200" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.
            Our office: 364 E Main St STE 1008 Middletown DE 19709.
            See more at <a className="text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">ziontechgroup.com</a>.
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((c) => (
              <Link key={c.title} to={c.href} className="block bg-slate-900/60 border border-cyan-400/15 hover:border-cyan-400/40 rounded-2xl p-6 text-left">
                <div className="text-xs uppercase tracking-wide text-cyan-300/70">Featured</div>
                <div className="mt-2 text-xl font-semibold">{c.title}</div>
                <div className="mt-2 text-sm text-slate-300">{c.desc}</div>
              </Link>
            ))}
          </div>

          {/* New Advanced Services Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Advanced Services Portfolio 2025</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link to="/advanced-services-showcase-2025" className="block bg-gradient-to-br from-blue-900/60 to-purple-900/60 border border-blue-400/30 hover:border-blue-400/60 rounded-2xl p-6 text-left transition-all duration-300 hover:scale-105">
                <div className="text-xs uppercase tracking-wide text-blue-300/70 font-medium">New</div>
                <div className="mt-2 text-xl font-semibold text-blue-200">Advanced Services Showcase</div>
                <div className="mt-2 text-sm text-blue-300/80">50+ cutting-edge AI, IT infrastructure, and micro SAAS solutions</div>
                <div className="mt-4 text-xs text-blue-400/70">Explore our comprehensive portfolio</div>
              </Link>
              
              <Link to="/revolutionary-services-2030" className="block bg-gradient-to-br from-purple-900/60 to-pink-900/60 border border-purple-400/30 hover:border-purple-400/60 rounded-2xl p-6 text-left transition-all duration-300 hover:scale-105">
                <div className="text-xs uppercase tracking-wide text-purple-300/70 font-medium">Future</div>
                <div className="mt-2 text-xl font-semibold text-purple-200">Revolutionary Services 2030</div>
                <div className="mt-2 text-sm text-purple-300/80">Next-generation AI, quantum computing, and autonomous systems</div>
                <div className="mt-4 text-xs text-purple-400/70">Shape the future of technology</div>
              </Link>
              
              <Link to="/pricing-2030" className="block bg-gradient-to-br from-green-900/60 to-emerald-900/60 border border-green-400/30 hover:border-green-400/60 rounded-2xl p-6 text-left transition-all duration-300 hover:scale-105">
                <div className="text-xs uppercase tracking-wide text-green-300/70 font-medium">Pricing</div>
                <div className="mt-2 text-xl font-semibold text-green-200">Comprehensive Pricing Guide 2030</div>
                <div className="mt-2 text-sm text-green-300/80">Detailed pricing, ROI analysis, and implementation guides</div>
                <div className="mt-4 text-xs text-green-400/70">Make informed investment decisions</div>
              </Link>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            <div className="mb-2 font-semibold text-white">Pricing Overview</div>
            <ul className="grid gap-2 sm:grid-cols-2">
              <li>AI projects: $5k–$60k+, IT projects: $10k–$120k+</li>
              <li>Micro SaaS: $39–$99/mo typical; setup $1k–$10k</li>
            </ul>
            <div className="mt-4 flex items-center gap-2 text-xs">
              <DollarSign className="h-3 w-3" />
              Blended rates $110–$220/hr; fixed scope available.
            </div>
            <a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/services" target="_blank" rel="noreferrer">
              See services on our site <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

