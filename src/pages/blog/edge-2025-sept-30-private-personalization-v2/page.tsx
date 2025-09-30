import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const EdgePrivatePersonalizationV2Page: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Helmet>
        <title>Edge Private Personalization v2 — Zero‑PII, Global &lt;100ms</title>
        <meta
          name="description"
          content="Scoped IDs, signed configs, and on‑device models for privacy‑first personalization with stable SLAs."
        />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-3">Edge Private Personalization v2</h1>
        <div className="text-zion-slate-light text-sm mb-8">Published: 2025-09-30 • 6 min read • Edge Computing</div>
        <p className="text-zion-slate-light mb-4">
          Deliver sub‑100ms personalized experiences without collecting PII. Learn how scoped identifiers, signed
          configurations, and on‑device models enable compliant, low‑latency journeys worldwide.
        </p>
        <ul className="list-disc pl-6 text-zion-slate-light mb-6">
          <li>Scoped user identifiers and edge key‑value stores</li>
          <li>Signed experiment configs and attested telemetry</li>
          <li>On‑device feature extraction and DP noise</li>
        </ul>
        <p className="text-zion-slate-light mb-8">
          These patterns keep insights rich and privacy risk low, while maintaining predictable SLAs.
        </p>
        <Link to="/blog" className="text-zion-cyan hover:underline">← Back to all articles</Link>
      </div>
    </div>
  );
};

export default EdgePrivatePersonalizationV2Page;

