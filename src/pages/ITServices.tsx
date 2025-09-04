import React from 'react';
import { Helmet } from 'react-helmet-async';

type Service = { name: string; summary: string; pricing: string };

const itServices: Service[] = [
  { name: 'Cloud DevOps & SRE', summary: 'CI/CD, IaC, autoscaling, observability, incident response.', pricing: '$120–$220/hour or $6k–$30k/project' },
  { name: 'Security Hardening & SOC', summary: 'Zero Trust, EDR, CSP headers, SOC2 readiness.', pricing: '$5k–$40k project · $2k–$8k/mo managed' },
  { name: 'Cloud Migration & Modernization', summary: 'Containerization, serverless, data platforms.', pricing: '$10k–$150k project' },
  { name: 'Kubernetes Platform', summary: 'EKS/GKE/AKS baseline, multi-env, policy and security.', pricing: '$8k–$40k project' },
  { name: 'Observability Stack', summary: 'Logs, metrics, traces, SLOs and alerting.', pricing: '$8k–$35k project' },
  { name: 'Backup & DR', summary: 'RPO/RTO planning, cross-region replication, runbooks.', pricing: '$5k–$20k project' },
  { name: 'Compliance & Audits', summary: 'SOC2, HIPAA, GDPR gaps and remediation plans.', pricing: '$10k–$50k project' },
];

export default function ITServices() {
  return (
    <main style={{ padding: '40px 20px' }}>
      <Helmet>
        <title>IT Services — Zion Tech Group</title>
        <meta name="description" content="Cloud architecture, security, Kubernetes, observability, DR, and compliance services." />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: 24 }}>
          <h1 style={{ fontSize: 34, fontWeight: 800 }}>IT Services</h1>
          <p style={{ color: '#64748b' }}>Modern, secure, cloud-native foundations engineered for uptime and efficiency.</p>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {itServices.map((s) => (
            <div key={s.name} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>{s.name}</h3>
              <p style={{ color: '#64748b', margin: '8px 0' }}>{s.summary}</p>
              <p style={{ fontWeight: 600 }}>Pricing: {s.pricing}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}


