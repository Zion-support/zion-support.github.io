import React from 'react';
import { SEO } from '@/components/SEO';

type Service = {
  name: string;
  path: string;
  summary: string;
  price: string;
  category: 'Micro SaaS' | 'IT Services' | 'AI Solutions';
};

const services: Service[] = [
  { name: 'Website AI Chatbot', path: '/services/website-ai-chatbot', summary: '24/7 on-site AI that answers, qualifies, and books meetings.', price: '$299–$899/mo', category: 'Micro SaaS' },
  { name: 'RAG Search', path: '/services/rag-search', summary: 'Private semantic search over your docs, wiki, and tickets.', price: '$199–$999/mo', category: 'AI Solutions' },
  { name: 'MLOps Pipeline', path: '/services/mlops-pipeline', summary: 'CI/CD for ML with monitoring, drift, and rollback.', price: '$1.5k–$8k/mo', category: 'AI Solutions' },
  { name: 'Ecommerce Personalization', path: '/services/ecommerce-personalization', summary: 'Recommendations, bundles, and search tuning.', price: '$499–$2k/mo', category: 'AI Solutions' },
  { name: 'API Monitoring & Status', path: '/services/api-monitoring', summary: 'SLA-grade uptime, SLOs, and public status pages.', price: '$79–$249/mo', category: 'Micro SaaS' },
  { name: 'GDPR & Cookie Compliance', path: '/services/gdpr-cookie-compliance', summary: 'Consent banners, scanners, and audit logs.', price: '$49–$149/mo', category: 'Micro SaaS' },
  { name: 'AI Proofreading Studio', path: '/services/ai-proofreading-studio', summary: 'Tone, brand, and compliance checks for content.', price: '$29–$149/mo/seat', category: 'Micro SaaS' },
  { name: 'IT Infrastructure', path: '/services/it-infrastructure', summary: 'Networks, servers, and endpoint management.', price: 'Custom/SOW', category: 'IT Services' },
  { name: 'Cloud & DevOps', path: '/services/cloud-devops', summary: 'Kubernetes, IaC, CI/CD and observability.', price: '$8k+ projects', category: 'IT Services' }
];

const groupByCategory = (items: Service[]) => items.reduce<Record<string, Service[]>>((acc, s) => {
  (acc[s.category] = acc[s.category] || []).push(s);
  return acc;
}, {});

const ServicesCatalog: React.FC = () => {
  const grouped = groupByCategory(services);
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SEO title="Services Catalog - Zion Tech Group" description="Explore our micro SaaS, IT, and AI solutions with features, benefits, and pricing." />
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-3">Services Catalog</h1>
        <p className="text-slate-300 max-w-3xl">Browse our production-ready micro SaaS tools, enterprise IT services, and AI solutions. To engage, call +1 302 464 0950 or email kleber@ziontechgroup.com.</p>
        <p className="text-slate-400 mt-2 text-sm">Published at <a className="underline text-cyan-400" href="https://ziontechgroup.com" target="_blank" rel="noreferrer">ziontechgroup.com</a></p>
      </section>

      <section className="container mx-auto px-4 pb-16 space-y-10">
        {Object.entries(grouped).map(([category, list]) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {list.map(item => (
                <a key={item.name} href={`https://ziontechgroup.com${item.path}`} className="block p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-600 transition">
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-slate-300 text-sm mb-3">{item.summary}</p>
                  <p className="text-cyan-400 text-sm">Typical pricing: {item.price}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-slate-300">Mobile: <a className="underline" href="tel:+13024640950">+1 302 464 0950</a> • Email: <a className="underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
          <p className="text-slate-400 mt-1">364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </section>
    </div>
  );
};

export default ServicesCatalog;

