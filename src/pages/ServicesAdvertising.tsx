import React from 'react';
import { SEO } from '@/components/SEO';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

const anchor = (url: string, label?: string) => (
  <a className="text-cyan-400 underline" href={url} target="_blank" rel="noopener noreferrer">
    {label ?? new URL(url).host + (url.includes('/pricing') ? '/pricing' : '')}
  </a>
);

const ServicesAdvertising: React.FC = () => {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  } as const;

  const benefits: string[] = [
    'High-ROI projects with measurable KPIs',
    'Transparent pricing with market references',
    'Fast onboarding with templates and playbooks',
    'Enterprise-grade security and compliance',
    '24/7 support with SLAs',
    'Proven architectures and reference implementations',
    'No long-term lock-in; cancel anytime',
    'SOC 2-aligned processes and data handling',
    'Flexible deployment: SaaS or self-hosted options'
  ];

  const spotlight = [
    {
      title: 'Developer Productivity Copilot',
      price: 'Typical: $19–$39/dev/mo',
      refs: ['https://github.com/features/copilot#pricing', 'https://codeium.com/pricing', 'https://buildpulse.io/pricing'],
      href: '/services/developer-productivity-copilot'
    },
    {
      title: 'AI Sales Assistant',
      price: 'Typical: $30–$150/user/mo',
      refs: ['https://www.apollo.io/pricing', 'https://www.lemlist.com/pricing', 'https://www.hubspot.com/pricing/sales'],
      href: '/services/ai-sales-assistant'
    },
    {
      title: 'Security Posture Guardian',
      price: 'Typical: $100–$2,000/mo',
      refs: ['https://www.wiz.io/pricing', 'https://snyk.io/plans/', 'https://www.paloaltonetworks.com/prisma/cloud/pricing'],
      href: '/services/security-posture-guardian'
    },
    {
      title: 'AI Data Pipeline Optimizer',
      price: 'Typical: $200–$2,000/mo',
      refs: ['https://www.databricks.com/product/pricing', 'https://www.snowflake.com/pricing/', 'https://www.getdbt.com/pricing'],
      href: '/services/ai-data-pipeline-optimizer'
    },
    {
      title: 'Privacy Request Portal (DSAR)',
      price: 'From $99/mo + usage',
      refs: ['https://transcend.io/pricing/', 'https://www.onetrust.com/pricing/'],
      href: '/services/gdpr-dsar-portal'
    },
    {
      title: 'CSP & Security Headers Manager',
      price: 'From $49/mo per domain',
      refs: ['https://securityheaders.com/'],
      href: '/services/security-headers-csp-manager'
    },
    {
      title: 'Checkout A/B Optimizer',
      price: 'From $99/mo',
      refs: ['https://www.optimizely.com/pricing/'],
      href: '/services/checkout-performance-optimizer'
    },
    {
      title: 'Status & Incident Hub',
      price: 'From $59/mo',
      refs: ['https://betterstack.com/status/pricing'],
      href: '/services/status-incident-hub'
    }
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO
        title="AI, IT and Micro SaaS Services Advertising | Zion Tech Group"
        description="Explore our AI, IT, and micro SaaS services with features, capabilities, benefits, pricing references, and easy contact options."
      />

      <section className="relative pt-24 pb-12">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Services That Ship Outcomes
          </h1>
          <p className="mt-4 text-lg text-slate-300">AI platforms, enterprise IT solutions, and real micro SaaS accelerators.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg inline-flex items-center">
              Talk to Sales <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="/services" className="px-8 py-4 border border-gray-600 text-gray-200 rounded-lg inline-flex items-center">
              Browse Services <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          {benefits.map((b) => (
            <div key={b} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-1" />
                <p className="text-gray-200">{b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Spotlight: New Expert Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spotlight.map((h) => (
              <div key={h.title} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60">
                <h3 className="text-white font-semibold mb-2">{h.title}</h3>
                <div className="text-sm text-slate-400 mb-2">{h.price}</div>
                <ul className="text-slate-300 space-y-1 mt-2">
                  {h.refs.map((u) => (
                    <li key={u}>{anchor(u)}</li>
                  ))}
                </ul>
                <div className="mt-3"><a href={h.href} className="text-cyan-400 underline">Learn more</a></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Contact Us</h2>
          <div className="mx-auto max-w-2xl rounded-2xl bg-black/40 border border-white/10 p-6">
            <ul className="text-slate-300 space-y-1">
              <li><strong className="text-white">Mobile:</strong> <a className="text-cyan-400 underline" href="tel:+13024640950">{contact.mobile}</a></li>
              <li><strong className="text-white">E-mail:</strong> <a className="text-cyan-400 underline" href="mailto:kleber@ziontechgroup.com">{contact.email}</a></li>
              <li><strong className="text-white">Address:</strong> {contact.address}</li>
              <li><strong className="text-white">Website:</strong> <a className="text-cyan-400 underline" href={contact.website} target="_blank" rel="noopener noreferrer">ziontechgroup.com</a></li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="/contact" className="px-6 py-3 bg-cyan-600 text-white rounded-lg inline-flex">Contact Sales</a>
              <a href="/services" className="px-6 py-3 border border-gray-600 text-gray-200 rounded-lg inline-flex">Browse Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesAdvertising;

