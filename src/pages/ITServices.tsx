import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Server, Shield, Cpu, Cable, LifeBuoy, DollarSign, ExternalLink, Wrench, Database, Building } from 'lucide-react';

const ITServices: React.FC = () => {
  const offerings = [
    { icon: Cloud, title: 'Cloud & DevOps', desc: 'CI/CD, IaC, Kubernetes, cost optimization and SRE with 24/7 runbooks.', price: '$6,000 - $80,000+' },
    { icon: Server, title: 'Migrations & Modernization', desc: 'On-prem to cloud, containerization, monolith-to-microservices, and zero-downtime cutovers.', price: '$10,000 - $120,000+' },
    { icon: Shield, title: 'Security & Compliance', desc: 'SOC2/ISO readiness, zero-trust, vulnerability management, and incident response plans.', price: '$3,000 - $40,000+' },
    { icon: Cpu, title: 'Networking & Edge', desc: 'SD-WAN, VPN, edge compute, IoT, and observability for distributed sites.', price: '$5,000 - $50,000+' },
    { icon: Cable, title: 'IT Onsite & Managed Services', desc: 'Hands-on deployment, device lifecycle, patching, help desk, and inventory.', price: '$1,500 - $15,000/mo' },
    { icon: LifeBuoy, title: 'Business Continuity', desc: 'Backups, DR plans, tabletop exercises, and RTO/RPO aligned architecture.', price: '$2,500 - $30,000+' },
    // New items
    { icon: Wrench, title: 'Platform Engineering', desc: 'Golden paths, internal developer platforms, Backstage portals, and paved-road governance.', price: '$8,000 - $90,000+' },
    { icon: Database, title: 'Data Platforms & MLOps', desc: 'Lakehouse setups, ELT pipelines, feature stores, and ML deployment with observability.', price: '$7,000 - $95,000+' },
    { icon: Building, title: 'Enterprise SaaS Rollouts', desc: 'Okta SSO, RBAC, tenant provisioning, and SOC2-aligned configuration baselines at scale.', price: '$5,000 - $70,000+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h1 className="text-4xl font-bold sm:text-5xl">Enterprise-grade IT services, delivered with startup speed</h1>
        <p className="mt-4 max-w-2xl text-slate-300">From modernization to managed services, we design and operate robust, secure and cost-efficient platforms.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold hover:from-cyan-400 hover:to-blue-500">Talk to an architect</Link>
          <Link to="/request-quote" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-white/5">Request a quote</Link>
        </div>
        <div className="mt-10 text-xs text-slate-400">Typical T&M: $110–$200/hr blended; fixed-scope engagements available.</div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o) => (
            <div key={o.title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-cyan-400/30">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                <o.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{o.desc}</p>
              <div className="mt-4 text-sm font-semibold text-cyan-300">{o.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          <div className="mb-2 font-semibold text-white">Deliverables</div>
          <ul className="grid gap-2 sm:grid-cols-2">
            <li>Architecture diagrams and IaC repositories</li>
            <li>Security baselines, policies and runbooks</li>
            <li>Monitoring and SLO dashboards</li>
            <li>Knowledge transfer and training sessions</li>
          </ul>
          <div className="mt-4 flex items-center gap-2 text-xs">
            <DollarSign className="h-3 w-3" />
            Avg project budgets: $10k–$120k depending on scope.
          </div>
          <a className="mt-3 inline-flex items-center text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com/it-services" target="_blank" rel="noreferrer">
            Explore IT services on our site <ExternalLink className="ml-1 h-3 w-3" />
          </a>
          <div className="mt-6 text-xs text-slate-400">
            Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServices;

