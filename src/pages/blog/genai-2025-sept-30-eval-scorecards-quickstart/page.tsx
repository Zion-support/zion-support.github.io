import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const GenAIEvalScorecardsQuickstartPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Helmet>
        <title>GenAI Eval Scorecards Quickstart — KPIs, Budgets, Rollback</title>
        <meta
          name="description"
          content="Stand up KPI‑linked evals and budget‑aware routing that gate traffic and trigger instant rollback without slowing teams."
        />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-3">GenAI Eval Scorecards Quickstart</h1>
        <div className="text-zion-slate-light text-sm mb-8">Published: 2025-09-30 • 8 min read • GenAI</div>
        <p className="text-zion-slate-light mb-4">
          Wire evaluation scorecards to business KPIs and route traffic by budget and quality tiers. Use offline suites,
          pre‑merge checks, and online canaries to prevent regressions while shipping fast.
        </p>
        <ul className="list-disc pl-6 text-zion-slate-light mb-6">
          <li>Define golden tasks and acceptance bands</li>
          <li>Cache answers and enforce budgets in CI</li>
          <li>Trigger rollback automatically under KPI thresholds</li>
        </ul>
        <p className="text-zion-slate-light mb-8">
          This quickstart is battle‑tested in production environments across multiple industries.
        </p>
        <Link to="/blog" className="text-zion-cyan hover:underline">← Back to all articles</Link>
      </div>
    </div>
  );
};

export default GenAIEvalScorecardsQuickstartPage;

