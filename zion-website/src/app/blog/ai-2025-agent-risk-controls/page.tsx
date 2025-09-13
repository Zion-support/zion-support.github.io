import React from 'react';

export const metadata = {
  title: 'Agent Risk Controls 2025: Policy-as-Code, Budgets, and SLAs',
  description: 'Operational blueprint for agent risk controls: runtime guardrails, budgets, RBAC, and exception workflows.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Agent Risk Controls 2025</h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-3xl">
            Design runtime guardrails, budget enforcement, and service‑level objectives for safe, reliable agents.
          </p>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-6 py-12 prose prose-lg">
        <h2>Control Plane</h2>
        <p>
          Build a policy control plane that validates tools, constrains prompts, red‑teams outputs, and logs decisions.
        </p>
        <h2>Runtime Budgets</h2>
        <p>
          Enforce token, time, and cost budgets with circuit breakers and graceful degradation strategies.
        </p>
        <h2>SLAs & SLOs</h2>
        <p>
          Define SLOs for latency, accuracy, and safety. Integrate with observability for alerts and auto‑rollback.
        </p>
      </article>
    </main>
  );
}

