import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

type Service = { name: string; summary: string; pricing: string; link: string };

const featured: Service[] = [
  { name: 'AI Customer Support Automation', summary: 'Chatbots, RAG, triage, and human handoff.', pricing: 'Setup $3k–$12k, usage-based', link: '/ai-services' },
  { name: 'Cloud DevOps & SRE', summary: 'CI/CD, IaC, monitoring, cost guardrails.', pricing: '$120–$220/hour or fixed', link: '/it-services' },
  { name: 'Website Performance Optimizer', summary: 'Core Web Vitals and speed improvements.', pricing: '$199–$899/month', link: '/micro-saas' },
];

export default function Services() {
  return (
    <main style={{ padding: '40px 20px' }}>
      <Helmet>
        <title>Services — Zion Tech Group</title>
        <meta name="description" content="AI, IT, and Micro SaaS solutions with transparent pricing and rapid delivery." />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800 }}>Services Catalog</h1>
          <p style={{ color: '#64748b' }}>Results-focused delivery. Security, reliability, and measurable ROI.</p>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {featured.map((s) => (
            <div key={s.name} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>{s.name}</h3>
              <p style={{ color: '#64748b', margin: '8px 0 12px' }}>{s.summary}</p>
              <p style={{ fontWeight: 600 }}>Pricing: {s.pricing}</p>
              <Link to={s.link} style={{ color: '#0ea5e9', fontWeight: 700, textDecoration: 'none' }}>Explore →</Link>
            </div>
          ))}
        </div>
        <section style={{ marginTop: 40, textAlign: 'center' }}>
          <Link to="/contact" style={{ background: '#22d3ee', color: '#0b1220', padding: '12px 20px', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>Request Proposal</Link>
        </section>
      </div>
    </main>
  );
}

