import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AIInfrastructureBlueprint2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white">
      <Helmet>
        <title>AI Infrastructure Blueprint 2025 | Zion Tech Group</title>
        <meta name="description" content="A pragmatic blueprint for building a cost-aware, reliable, and secure AI infrastructure in 2025." />
        <link rel="canonical" href="https://zion.app/blog/ai-infrastructure-blueprint-2025" />
      </Helmet>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <nav className="mb-8">
          <a href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">← Back to Blog</a>
        </nav>
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30">Infrastructure</span>
            <span className="text-white/60 text-sm">September 11, 2025</span>
            <span className="text-white/60 text-sm">•</span>
            <span className="text-white/60 text-sm">8 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Infrastructure Blueprint 2025</h1>
          <p className="text-white/80 mt-4 text-lg">Design a platform that balances performance, safety, and cost with proven patterns for training, inference, and observability.</p>
        </header>

        <article className="prose prose-invert prose-lg max-w-none">
          <h2>Foundational pillars</h2>
          <ul>
            <li>Separation of control plane vs data plane</li>
            <li>Workload-aware autoscaling (GPU/CPU, burst/spot)</li>
            <li>Zero-trust networking with service identity</li>
          </ul>

          <h2>Training stack</h2>
          <ul>
            <li>Data pipelines with lineage and governance</li>
            <li>Checkpointing and experiment tracking</li>
            <li>Fleet scheduling with quotas and fair share</li>
          </ul>

          <h2>Inference stack</h2>
          <ul>
            <li>Multi-provider routing with sticky sessions</li>
            <li>Prompt/version registries and rollout policies</li>
            <li>Observability: traces, tokens, latency, and cost</li>
          </ul>

          <h2>Safety and compliance</h2>
          <ul>
            <li>Guardrails for inputs and outputs with policy-as-code</li>
            <li>PII handling and retention windows</li>
            <li>Red-teaming and pre-release evals</li>
          </ul>

          <p className="mt-8 text-white/70">Want an architecture review? Explore our <a className="text-cyan-300 underline" href="/services#ai">AI Platform Engineering</a> services.</p>
        </article>

        <footer className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between text-sm text-white/60">
          <div>Written by Zion Tech Group</div>
          <div className="flex gap-4">
            <a href="/blog" className="text-cyan-300 hover:text-cyan-200">Back to Blog</a>
            <a href="/contact" className="text-fuchsia-300 hover:text-fuchsia-200">Get in Touch</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

