import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Server, Cloud, Shield, Cable, Wrench, Building2 } from 'lucide-react';

export default function ITServices() {
  const services = [
    { icon: Server, title: 'Managed IT', desc: 'Proactive monitoring, patching, endpoint security, and helpdesk.', price: 'from $1,200/mo', link: '/services/it-infrastructure' },
    { icon: Cloud, title: 'Cloud Migrations', desc: 'AWS/Azure migrations, landing zones, backups, and DR.', price: 'from $6,500 engagement', link: '/services/cloud-devops' },
    { icon: Shield, title: 'Zero Trust & IAM', desc: 'SSO, MFA, device posture, microsegmentation, and audits.', price: 'from $3,500/mo', link: '/services/zero-trust-network-architecture' },
    { icon: Cable, title: 'Network & SD-WAN', desc: 'LAN/WAN redesigns, Wi‑Fi, VPN, and observability.', price: 'from $4,000 engagement', link: '/services/it-infrastructure' },
    { icon: Wrench, title: 'Onsite Support', desc: 'Hands-on installs, office moves, and incident response.', price: 'from $150/hr', link: '/services/onsite-support' },
    { icon: Building2, title: 'Compliance Readiness', desc: 'SOC2/ISO gap analysis, policy kits, and hardening.', price: 'from $7,500 engagement', link: '/compliance' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO
        title="IT Services – Zion Tech Group"
        description="Managed IT, cloud migrations, zero trust, and enterprise networks."
        canonical="https://ziontechgroup.com/it-services"
      />

      <section className="relative py-20 px-6 md:px-10 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">IT Services</h1>
        <p className="text-zinc-300 text-lg md:text-xl max-w-3xl">
          Reliable, security-first IT for growing teams. We design, operate, and
          modernize your stack so you can focus on the business.
        </p>
        <div className="mt-6 text-zinc-400 text-sm">
          Contact: <a className="underline hover:text-cyan-400" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> ·
          <a className="underline hover:text-cyan-400 ml-2" href="tel:+13024640950">+1 302 464 0950</a>
        </div>
      </section>

      <section className="px-6 md:px-10 max-w-6xl mx-auto pb-20 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <Link key={s.title} to={s.link} className="group rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-cyan-500/40 transition-all">
            <div className="flex items-start gap-4">
              <s.icon className="w-8 h-8 text-cyan-400" />
              <div>
                <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
                <p className="text-zinc-400 mb-2">{s.desc}</p>
                <div className="text-sm text-zinc-300">{s.price}</div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="px-6 md:px-10 max-w-6xl mx-auto pb-24">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-2xl font-bold mb-2">Average Market Prices</h2>
          <ul className="list-disc pl-5 text-zinc-300 space-y-1">
            <li>Managed IT (10–25 users): $1.2k–$4k/mo</li>
            <li>Cloud migration (workload): $6.5k–$25k</li>
            <li>Zero trust rollout: $3.5k–$15k/mo</li>
          </ul>
          <p className="text-zinc-400 mt-3 text-sm">Final pricing depends on scope, licenses, and SLAs.</p>
        </div>
      </section>
    </div>
  );
}

