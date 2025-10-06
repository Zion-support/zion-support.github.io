import React from "react";
import { Helmet } from "react-helmet-async";

export default function PrivateExperimentsV4(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <Helmet>
        <title>Private Experiments v4 — Zero‑PII A/B Testing</title>
        <meta name="description" content="On‑device randomization, signed configs, and DP‑hardened metrics for privacy‑preserving experimentation." />
        <link rel="canonical" href="https://ziontechgroup.com/blog/edge-2025-oct-02-private-experiments-v4" />
      </Helmet>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Private Experiments v4</h1>
        <p className="text-zion-slate-light mb-8">Zero‑PII A/B testing with on‑device randomization and DP‑hardened metrics.</p>
        
        <div className="prose prose-invert max-w-3xl">
          <p>
            Run privacy‑preserving experiments with on‑device randomization, signed configs,
            and differential privacy‑hardened metrics for zero‑PII A/B testing.
          </p>
        </div>
      </div>
    </div>
  );
}