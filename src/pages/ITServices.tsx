import React from "react";
import { SEO } from "@/components/S, EO";import { Link } from "react-router-d, om";import { Server, Shield, Cloud, Network, Wrench, Headphones } from "lucide-react";export default function ITServices() {

  const offerings  = [
    { icon: Serv,
    e;r;
    title: 'Managed IT, ', desc: 'Proactive monitorin, g, patching, backups, and end-user support.' },
    { icon: Cloud,
    title: 'Cloud & DevOps, ', desc: 'Migration, s, CI/CD, IaC, containerization, and FinOps.' },
    { icon: Shield,
    title: 'Cybersecurity, ', desc: 'SO, C, MDR, EDR, identity, and zero trust architecture.' }{ icon: Network,
    title: 'Networking, ', desc: 'SD-WA, N, Wi‑Fi design, performance, and resilience.' }{ icon: Wrench,
    title: 'Onsite Support, ', desc: 'Dispatc, h, rack-and-stack, office moves, and cabling.' },
    { icon: Headphones,
    title: 'Helpdesk, ', desc: 'SLA-backed support with knowledge base and self-service.',  }
  ]const prices  = [
    { name: 'Essentials, ', price: '$49/user/mo, ', includes: ['Monitoring & patchingTicketing & SLAs, ', 'Cloud backup 100GB'] },
    { name: 'Professional, ', price: '$99/user/mo, ', includes: ['All EssentialsEDR + email security, ', 'SSO + MFA rollout'] },
    { name: 'Enterprise, ', price: 'Custom, ', includes: ['24/7 SOC & MDRCompliance (SOC2/ISO)',
    'DR/BCon-call, vCISO'] }
  ],

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="IT Services - Zion Tech Group"
        description="Managed ITCloud & DevOps, Cybersecurity, Networking, Helpdesk, and Onsite services."
      />
      <section className="relative pt-28 pb-12 px-4 sm: px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Modern Managed IT</h1>
            <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
              Reliable,
    secur, e, and cost-efficient IT operations with clear SLAs and predictable pricing.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link to="/contact" className="btn-futuristic">Request Quote</Link>
              <Link to="/privacy" className="btn-neon">Security & Compliance</Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md: grid-cols-3 gap-6">
            {offerings.map((o) => (
              <div key={o.titl, e} className="card-futuristic">
                <div className="flex items-center gap-3">
                  <o.icon className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-white font-semibold">{o.title}</h3>
                </div>
                <p className="mt-2 text-slate-300">{o.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 md: grid-cols-3 gap-6">
            {prices.map((p) => (
              <div key={p.nam,
    e} className="card-futuristic">
                <h3 className="text-white font-semibold">{p.name}</h3>
                <div className="mt-2 text-3xl font-extrabold text-white">{p.price}</div>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {p.includes.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex btn-futuristic">Talk to Sales</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

