import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AIGovernanceChecklist2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-fuchsia-900 text-white">
      <Helmet>
        <title>AI Governance Checklist 2025 | Zion Tech Group</title>
        <meta
          name="description"
          content="An actionable checklist to operationalize AI governance with policies, evals, and controls that accelerate delivery."
        />
        <link rel="canonical" href="https://zion.app/blog/ai-governance-checklist-2025" />
      </Helmet>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <nav className="mb-8">
          <a href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">← Back to Blog</a>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-300 text-sm rounded-full border border-fuchsia-400/30">Governance</span>
            <span className="text-white/60 text-sm">September 11, 2025</span>
            <span className="text-white/60 text-sm">•</span>
            <span className="text-white/60 text-sm">6 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">AI Governance Checklist 2025</h1>
          <p className="text-white/80 mt-4 text-lg">Stand up pragmatic AI governance: policy, ownership, evals, and controls that unblock delivery.</p>
        </header>

        <article className="prose prose-invert prose-lg max-w-none">
          <h2>Policy and ownership</h2>
          <ul>
            <li>Define risk tiers and approval thresholds</li>
            <li>Establish model, prompt, and data owners</li>
            <li>Create incident runbooks and escalation paths</li>
          </ul>

          <h2>Evals and controls</h2>
          <ul>
            <li>Golden tasks and red-team prompts per risk tier</li>
            <li>Output filters for safety and leakage</li>
            <li>PII handling, retention, and access reviews</li>
          </ul>

        <h2>Operations</h2>
          <ul>
            <li>Version prompts and datasets; require changelogs</li>
            <li>Pre-production gates with budget and safety SLOs</li>
            <li>Continuous monitoring with weekly audits</li>
          </ul>

          <p className="mt-8 text-white/70">See <a className="text-cyan-300 underline" href="/services-advertising#ai-governance-and-evals">AI Governance & Evals</a> for help.</p>
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

