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
          <Link to="/services/micro-saas-solutions" className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:opacity-90">
            Explore Micro SaaS Solutions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
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

          <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            <div className="mb-2 font-semibold text-white">Comprehensive Pricing Overview</div>
            <ul className="grid gap-2 sm:grid-cols-2">
              <li>AI & Quantum Services: $2.5k–$25k+/month</li>
              <li>Micro SaaS Solutions: $39–$599/month</li>
              <li>Enterprise IT Projects: $10k–$120k+ setup</li>
              <li>Cybersecurity & Compliance: $3k–$15k/month</li>
            </ul>
            <div className="mt-4 flex items-center gap-2 text-xs">
              <DollarSign className="h-3 w-3" />
              Blended rates $110–$220/hr; fixed scope available. Volume discounts for enterprise clients.
            </div>
            <a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/services" target="_blank" rel="noopener noreferrer">
              Explore our full service catalog <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>

          {/* Enhanced Service Categories */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Service Categories</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-900/60 border border-cyan-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-3">AI & Machine Learning</h3>
                <p className="text-slate-300 mb-4">Cutting-edge AI solutions including business intelligence, healthcare diagnostics, financial trading, and autonomous systems.</p>
                <div className="text-sm text-cyan-300/80">Starting at $1,200/month</div>
                <Link to="/ai-services" className="mt-4 inline-flex items-center text-cyan-300 hover:text-cyan-200 text-sm">
                  Explore AI Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-slate-900/60 border border-cyan-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-3">Quantum Computing</h3>
                <p className="text-slate-300 mb-4">Revolutionary quantum solutions for cryptography, machine learning, optimization, and research applications.</p>
                <div className="text-sm text-cyan-300/80">Starting at $2,500/month</div>
                <Link to="/services" className="mt-4 inline-flex items-center text-cyan-300 hover:text-cyan-200 text-sm">
                  Explore Quantum Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-slate-900/60 border border-cyan-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-3">Cybersecurity & Compliance</h3>
                <p className="text-slate-300 mb-4">Advanced threat detection, quantum-safe cryptography, and comprehensive security solutions for enterprise protection.</p>
                <div className="text-sm text-cyan-300/80">Starting at $3,000/month</div>
                <Link to="/services" className="mt-4 inline-flex items-center text-cyan-300 hover:text-cyan-200 text-sm">
                  Explore Security Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-slate-900/60 border border-cyan-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-3">IoT & Smart Cities</h3>
                <p className="text-slate-300 mb-4">Comprehensive IoT platforms for smart cities, autonomous drones, edge computing, and sustainable energy management.</p>
                <div className="text-sm text-cyan-300/80">Starting at $2,800/month</div>
                <Link to="/services" className="mt-4 inline-flex items-center text-cyan-300 hover:text-cyan-200 text-sm">
                  Explore IoT Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-slate-900/60 border border-cyan-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-3">Blockchain & Supply Chain</h3>
                <p className="text-slate-300 mb-4">Transparent supply chain solutions, smart contracts, and blockchain-based applications for trust and traceability.</p>
                <div className="text-sm text-cyan-300/80">Starting at $2,200/month</div>
                <Link to="/services" className="mt-4 inline-flex items-center text-cyan-300 hover:text-cyan-200 text-sm">
                  Explore Blockchain Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-slate-900/60 border border-cyan-400/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-3">Biotechnology & Healthcare</h3>
                <p className="text-slate-300 mb-4">AI-powered healthcare diagnostics, synthetic biology platforms, and advanced medical technology solutions.</p>
                <div className="text-sm text-cyan-300/80">Starting at $4,500/month</div>
                <Link to="/services" className="mt-4 inline-flex items-center text-cyan-300 hover:text-cyan-200 text-sm">
                  Explore Healthcare Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Why Choose Zion Tech Group */}
          <div className="mt-16 rounded-xl border border-cyan-400/20 bg-gradient-to-r from-slate-900/80 to-slate-800/80 p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Zion Tech Group?</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🚀</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation First</h3>
                <p className="text-slate-300 text-sm">Cutting-edge AI, quantum computing, and emerging technologies that give you a competitive advantage.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">⚡</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Rapid Deployment</h3>
                <p className="text-slate-300 text-sm">Quick implementation with our proven methodologies and pre-built solutions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🛡️</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
                <p className="text-slate-300 text-sm">SOC 2, ISO 27001, and industry-leading security standards for your peace of mind.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🌍</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
                <p className="text-slate-300 text-sm">Serving clients worldwide with 24/7 support and localized solutions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">💡</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                <p className="text-slate-300 text-sm">World-class engineers, scientists, and consultants with deep domain expertise.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">📈</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven ROI</h3>
                <p className="text-slate-300 text-sm">Measurable results with typical ROI of 200-800% across our service portfolio.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge technology solutions to gain competitive advantages and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote" className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:+13024640950" className="inline-flex items-center px-8 py-4 rounded-lg border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-slate-400">
              <p>Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200">ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

