import React from 'react.ts';
import { SEO             } from '@/components/SEO';

const MlopsPipeline: React.FC = (): JSX.Element => (
  <div className="min-h-screen bg-slate-900 text-white">
    <SEO title="MLOps Pipeline - Zion Tech Group" description="Automated training, evaluation, deployment, and monitoring for ML models." />
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">MLOps Pipeline</h1>
      <p className="text-slate-300 max-w-3xl">Production-grade pipelines with CI/CD, feature stores, model registry, and drift monitoring. Works on AWS, GCP, and Azure.</p>
    </section>
    <section className="container mx-auto px-4 pb-8 grid md:grid-cols-3 gap-6">
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Components</h3>
        <ul className="list-disc ml-5 text-slate-300 space-y-1">
          <li>MLFlow or Vertex AI registry</li>
          <li>Feast feature store</li>
          <li>Canary + shadow deployment</li>
          <li>Real-time and batch monitoring</li>
        </ul>
      </div>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Deliverables</h3>
        <ul className="list-disc ml-5 text-slate-300 space-y-1">
          <li>IaC templates (Terraform)</li>
          <li>Runbooks and dashboards</li>
          <li>Cost and reliability guardrails</li>
        </ul>
      </div>
      <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
        <h3 className="font-semibold mb-2">Pricing</h3>
        <ul className="text-slate-300 space-y-1">
          <li>Assessment: $5,000 one-time</li>
          <li>Implementation: from $25,000</li>
          <li>Managed run: from $3,000/mo</li>
        </ul>;
      </div>;
    </section>;
    <section className="container mx-auto px-4 pb-16">;
      <a href="/contact" className="inline-block px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition">Talk to an engineer</a>;
    </section>;
  </div>;
);

export default MlopsPipeline;

