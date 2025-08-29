import { motion } from "framer-motion";
import React from 'react';
import { SEO } from '@/components/SEO';

const AIProofreadingStudio: React.FC = () => (
  <div className="min-h-screen bg-slate-900 text-white">
    <SEO title="AI Proofreading Studio - Zion Tech Group" description="AI-powered proofreading, tone, and localization for marketing and technical content." />
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">AI Proofreading Studio</h1>
      <p className="text-slate-300 max-w-3xl">Improve clarity, tone, and accuracy across blogs, docs, and emails. Enforce brand voice and compliance with customizable playbooks.</p>
    </section>
    <section className="container mx-auto px-4 pb-8 grid md:grid-cols-3 gap-6">
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">What it does</h3>
        <ul className="list-disc ml-5 text-slate-300 space-y-1">
          <li>Grammar, style, and readability enhancements</li>
          <li>Brand tone enforcement and glossary checks</li>
          <li>PII/PHI detection and redaction suggestions</li>
          <li>Localization drafts for 20+ languages</li>
        </ul>
      </div>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Connectors</h3>
        <ul className="list-disc ml-5 text-slate-300 space-y-1">
          <li>Google Docs, Office 365, Notion</li>
          <li>CMS: WordPress, Webflow, Ghost</li>
          <li>APIs and webhooks for custom pipelines</li>
        </ul>
      </div>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Pricing</h3>
        <ul className="text-slate-300 space-y-1">
          <li>Creator: $29/mo per seat</li>
          <li>Team: $149/mo up to 10 seats</li>
          <li>Enterprise: custom, SSO + DLP</li>
        </ul>
      </div>
    </section>
    <section className="container mx-auto px-4 pb-16">
      <a href="/contact" className="inline-block px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition">Start free trial</a>
    </section>
  </div>
);

export default AIProofreadingStudio;

