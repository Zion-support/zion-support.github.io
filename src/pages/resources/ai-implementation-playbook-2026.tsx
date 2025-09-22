import { Link } from 'react-router-dom';

export default function AIImplementationPlaybook2026() {
  return (
    <div className="min-h-screen bg-futuristic">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          AI Implementation Playbook 2026
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          A practical, executive-friendly playbook to plan, pilot, and scale AI initiatives in 2026. Learn the
          phases, roles, risks, KPIs, and a 90-day action plan to get measurable results quickly.
        </p>

        <div className="space-y-8">
          <section className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">What You’ll Learn</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>How to align AI strategy to business outcomes</li>
              <li>Prioritization framework: value, feasibility, and data readiness</li>
              <li>Team composition: product, data, ML, platform, and governance</li>
              <li>Architecture choices: hosted LLMs, fine-tuning, RAG, and agents</li>
              <li>Risk management: security, privacy, bias, and compliance</li>
              <li>KPIs and value tracking: time-to-first-value, adoption, ROI</li>
            </ul>
          </section>

          <section className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">90-Day Action Plan</h2>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>Weeks 1-2: Discovery, use-case inventory, and data audit</li>
              <li>Weeks 3-4: Pilot definition, success metrics, and guardrails</li>
              <li>Weeks 5-8: Build MVP, evaluate UX, reliability, and quality</li>
              <li>Weeks 9-10: Shadow-launch, feedback loops, error taxonomy</li>
              <li>Weeks 11-12: Scale plan, cost model, and productionization</li>
            </ol>
          </section>

          <section className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">Downloadable Templates</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>AI Business Case Canvas</li>
              <li>Data Readiness Checklist</li>
              <li>Model Evaluation Scorecard</li>
              <li>Risk & Compliance Register</li>
              <li>Operational Runbook</li>
            </ul>
          </section>

          <div className="flex items-center justify-between">
            <Link to="/" className="text-zion-cyan hover:text-zion-cyan-light">← Back to Home</Link>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:from-cyan-300 hover:to-blue-400 transition-colors"
            >
              Get the Full PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

