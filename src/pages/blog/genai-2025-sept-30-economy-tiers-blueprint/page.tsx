// @ts-nocheck
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-4">GenAI 2025: Economy Tiers Blueprint</h1>
      <p className="text-zion-slate-light mb-6">
        Tier routing + semantic caches with eval gates to cut spend 40–70% while keeping UX stable.
      </p>
      <div className="space-y-4 text-zion-slate-light">
        <p>
          Route traffic by SLA with quality tiers and cache hot paths semantically. Add online eval
          gates wired to KPIs to prevent regressions. Use budget‑aware routing to keep bills
          predictable without hurting outcomes.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Tiered model routing by latency, cost, and quality budgets</li>
          <li>Semantic caches with freshness windows and warm pools</li>
          <li>Eval gates that trigger deterministic rollback</li>
          <li>Scorecards correlating with business KPIs</li>
        </ul>
      </div>
      <div className="mt-8">
        <Link to="/blog" className="text-cyan-300 underline">Back to Blog</Link>
      </div>
    </div>
  );
};

export default Page;

