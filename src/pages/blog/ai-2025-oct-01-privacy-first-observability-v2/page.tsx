import React from "react";
import { Helmet } from "react-helmet-async";

export default function PrivacyFirstObservabilityV2(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <Helmet>
        <title>Privacy‑First Observability v2 — User‑Centric Traces, Zero‑PII</title>
      </Helmet>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy‑First Observability v2</h1>
        <p className="text-zion-slate-light mb-8">
          Scoped IDs • Redaction Filters • Retention Budgets
        </p>
        <div className="prose prose-invert max-w-3xl">
          <p>
            Build user‑centric observability without collecting PII. This guide covers identity scoping,
            field‑level redaction, sampling tied to KPIs, and retention policies enforced by automation.
          </p>
          <p>
            Learn how to add cost and privacy budgets to tracing, wire alerts to policy tests, and ensure
            fast, compliant visibility across services and edge devices.
          </p>
        </div>
      </div>
    </div>
  );
}
