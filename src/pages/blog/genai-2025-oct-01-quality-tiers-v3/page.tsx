// @ts-nocheck
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <Helmet>
        <title>GenAI 2025: Quality Tiers v3</title>
        <meta
          name="description"
          content="Predictable cost and stable UX using tiered routing, semantic caches, and KPI‑linked eval gates — v3 playbook."
        />
        <link rel="canonical" href="https://ziontechgroup.com/blog/genai-2025-oct-01-quality-tiers-v3" />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 text-sm text-zion-slate-light">GenAI • 8 min read • 2025-10-01</div>
          <h1 className="text-4xl font-bold mb-4">GenAI 2025: Quality Tiers v3</h1>
          <p className="text-zion-slate-light mb-6">
            Cut spend 40–70% with tier routing, semantic caches, and KPI‑linked eval scorecards that prevent regressions
            without hurting UX.
          </p>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Reference Architecture</h2>
            <ul className="list-disc pl-6 text-zion-slate-light">
              <li>Intent classifier → semantic cache → economy tier → quality tier.</li>
              <li>Freshness windows and cache TTLs by intent and SLA.</li>
              <li>Scorecards gating promotions and triggering rollback.</li>
            </ul>

            <div className="mt-8">
              <Link to="/blog" className="text-cyan-300 hover:underline">← Back to Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

// @ts-nocheck
import React from "react";
import { Helmet } from "react-helmet-async";

export default function GenAIQualityTiersV3(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <Helmet>
        <title>GenAI Quality Tiers v3 — 50% Savings, Stable UX</title>
        <meta
          name="description"
          content="Tiered routing, semantic caches, and eval‑gated fallbacks to cut cost without hurting experience."
        />
        <link
          rel="canonical"
          href="https://ziontechgroup.com/blog/genai-2025-oct-01-quality-tiers-v3"
        />
      </Helmet>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">GenAI Quality Tiers v3</h1>
        <p className="text-zion-slate-light mb-8">
          Tier Routing • Semantic Caches • Eval‑Gated Fallbacks
        </p>
        <div className="prose prose-invert max-w-3xl">
          <p>
            Achieve up to 50% cost reduction while maintaining product KPIs. This blueprint details
            quality tiering strategies across models, prompts, and toolchains, backed by semantic caches
            and eval‑gated fallbacks that keep experience stable during traffic surges.
          </p>
          <p>
            You will learn how to define quality tiers, wire policy tests to KPIs, and implement
            rollback hooks that respect budgets under real‑world constraints.
          </p>
        </div>
      </div>
    </div>
  );
}

