import React from 'react';

type Service = {
  title: string;
  description: string;
  priceRange: string;
  learnMoreUrl?: string;
  ctaUrl?: string;
};

const featuredServices: Service[] = [
  {
    title: 'AI Development & MLOps',
    description: 'Custom LLMs, RAG, fine-tuning, and MLOps pipelines on AWS/Azure/GCP.',
    priceRange: '$8,000 - $120,000',
    learnMoreUrl: 'https://learn.microsoft.com/azure/machine-learning/',
  },
  {
    title: 'Cloud Migration & Modernization',
    description: 'Lift-and-shift, containerization, and serverless refactors with IaC.',
    priceRange: '$15,000 - $250,000',
    learnMoreUrl: 'https://aws.amazon.com/migration-hub/',
  },
  {
    title: 'Zero-Trust Cybersecurity',
    description: 'ZTA architecture, SOC hardening, SIEM, EDR/XDR integrations.',
    priceRange: '$5,000 - $90,000',
    learnMoreUrl: 'https://cloud.google.com/security-command-center',
  },
  {
    title: 'Data Engineering & Analytics',
    description: 'ELT/ETL, data lakes/warehouses, BI dashboards, KPI design.',
    priceRange: '$7,500 - $140,000',
    learnMoreUrl: 'https://cloud.google.com/bigquery/docs',
  },
  {
    title: 'IoT & Edge Platforms',
    description: 'Secure device onboarding, telemetry pipelines, OTA, and twin modeling.',
    priceRange: '$12,000 - $180,000',
    learnMoreUrl: 'https://learn.microsoft.com/azure/iot-hub/',
  },
  {
    title: 'Quantum Readiness Advisory',
    description: 'PQ crypto readiness, QC PoCs, and quantum-inspired optimizations.',
    priceRange: '$6,000 - $60,000',
    learnMoreUrl: 'https://quantum.microsoft.com/azure-quantum',
  },
];

const microSaaS: Service[] = [
  {
    title: 'LeadGen AI Microsite',
    description: 'SEO + AI chat, CRM integration, and analytics for B2B lead capture.',
    priceRange: '$99 - $499/mo',
    learnMoreUrl: 'https://vercel.com/ai',
  },
  {
    title: 'Agentic Support Bot',
    description: 'Retrieval-augmented agent with help center and Slack/Teams connectors.',
    priceRange: '$149 - $999/mo',
    learnMoreUrl: 'https://platform.openai.com/',
  },
  {
    title: 'Automated Reporting Studio',
    description: 'Auto-ingest spreadsheets/CSV, generate dashboards and scheduled PDFs.',
    priceRange: '$79 - $399/mo',
    learnMoreUrl: 'https://www.metabase.com/',
  },
  {
    title: 'Security Posture Scanner',
    description: 'Continuous cloud config checks and CIS benchmarks with alerts.',
    priceRange: '$199 - $1,499/mo',
    learnMoreUrl: 'https://www.aquasec.com/cloud-security/',
  },
  {
    title: 'Image/Doc OCR Pipeline',
    description: 'OCR + LLM extraction for invoices, IDs, and contracts at scale.',
    priceRange: '$0.50 - $2.00 / 1k tokens + hosting',
    learnMoreUrl: 'https://platform.openai.com/docs/guides/vision',
  },
  {
    title: 'Synthetic Data Generator',
    description: 'Privacy-safe tabular and text data generation to augment small datasets.',
    priceRange: '$299 - $1,999/mo',
    learnMoreUrl: 'https://huggingface.co/',
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-20 text-white">
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Services & Micro SaaS
          </h1>
          <p className="text-base md:text-xl text-slate-300">
            Practical, production-grade solutions with transparent pricing and modern stacks.
          </p>
        </header>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-6">Enterprise Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((s) => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-colors">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-slate-300 mb-4">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-300 font-semibold">{s.priceRange}</span>
                  {s.learnMoreUrl && (
                    <a className="text-sm text-cyan-400 hover:text-cyan-300 underline" href={s.learnMoreUrl} target="_blank" rel="noreferrer">
                      Reference
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">Micro SaaS Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaaS.map((s) => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-400/40 transition-colors">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-slate-300 mb-4">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 font-semibold">{s.priceRange}</span>
                  {s.learnMoreUrl && (
                    <a className="text-sm text-purple-300 hover:text-purple-200 underline" href={s.learnMoreUrl} target="_blank" rel="noreferrer">
                      Learn more
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-slate-300">Have a project in mind? Get a tailored proposal.</p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="tel:+13024640950" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Call +1 302 464 0950</a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Email kleber@ziontechgroup.com</a>
              <a href="/request-quote" className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors">Request a Quote</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;