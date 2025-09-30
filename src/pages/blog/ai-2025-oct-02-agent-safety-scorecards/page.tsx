// @ts-nocheck
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <Helmet>
        <title>Agent Safety Scorecards — Budgets, Canaries, Rollback</title>
        <meta
          name="description"
          content="Operational safety for AI agents using budgets, canaries, and deterministic rollback tied to KPI scorecards."
        />
        <link rel="canonical" href="https://ziontechgroup.com/blog/ai-2025-oct-02-agent-safety-scorecards" />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 text-sm text-zion-slate-light">AI Operations • 9 min read • 2025-10-02</div>
          <h1 className="text-4xl font-bold mb-4">Agent Safety Scorecards</h1>
          <p className="text-zion-slate-light mb-6">
            Prevent runaway costs and risky behaviors by enforcing budgets and guardrails on every action. Use
            KPI‑linked scorecards, canary cohorts, and instant rollback to ship safely at speed.
          </p>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Core Controls</h2>
            <ul className="list-disc pl-6 text-zion-slate-light">
              <li>Budget guards per intent, environment, and risk category.</li>
              <li>Canary rollouts with automatic stop on score dips.</li>
              <li>Deterministic rollback and warm paths to safe state.</li>
              <li>Signed traces linking tokens → SLIs → KPIs.</li>
            </ul>

            <h2 className="text-2xl font-semibold">Quick Start</h2>
            <p className="text-zion-slate-light">
              Start with a scorecard schema, define SLIs, and wire budget‑aware routing for agent actions. Fail closed,
              record cost and quality, and auto‑rollback on violations.
            </p>
          </div>

          <div className="mt-8">
            <Link to="/blog" className="text-cyan-300 hover:underline">← Back to Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

