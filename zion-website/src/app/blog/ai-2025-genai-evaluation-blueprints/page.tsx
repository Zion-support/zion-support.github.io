import React from 'react';

export const metadata = {
  title: 'GenAI Evaluation Blueprints (2025) | Zion Tech Group',
  description: 'Practical blueprints for evaluating GenAI systems with offline and online methods, guardrails, and policy-as-code.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GenAI Evaluation Blueprints (2025)</h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl">
            Practical evaluation patterns for GenAI quality, safety, and cost. Learn how to design offline and online
            tests, automate measurements, and enforce guardrails with policy‑as‑code.
          </p>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-6 py-12 prose prose-lg">
        <p>
          This guide covers reference blueprints for evaluations across RAG, tool‑use, agents, and multimodal systems.
          We break down dataset curation, golden tasks, injection attacks, cost tracking, and regression automation.
        </p>
        <h2>Key Takeaways</h2>
        <ul>
          <li>Define task‑level success metrics and build golden datasets</li>
          <li>Automate offline evals in CI and wire online evals to production telemetry</li>
          <li>Use policy‑as‑code to gate risky behaviors and enforce budgets</li>
        </ul>
      </article>
    </main>
  );
}

