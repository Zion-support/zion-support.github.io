import React from 'react';

export default function AIOpsRunbooks2025() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <header className='mb-8'>
          <p className='text-sm text-gray-500'>2025-09-11 • 9 min read • AI Operations</p>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>AI Ops Runbooks 2025: Resolve Incidents Faster with Guardrails</h1>
          <p className='mt-3 text-gray-600'>Practical runbooks for LLM incidents: budget spikes, quality regressions, tool failures, and data drift.</p>
        </header>

        <section className='prose prose-blue max-w-none'>
          <h2>Why AI Ops runbooks now</h2>
          <p>
            Production AI systems fail in unique ways: prompt brittleness, model changes, retrieval drift, tool outages, and
            cost explosions. Teams need fast, repeatable playbooks to detect and resolve issues without guesswork.
          </p>
          <h3>Top incident categories</h3>
          <ul>
            <li>Quality regression: evaluation scores drop across critical tasks</li>
            <li>Cost anomaly: tokens, vector ops, or tool calls spike unexpectedly</li>
            <li>Retrieval drift: grounding documents go stale or indexing lags</li>
            <li>Tooling failure: external APIs degrade or return inconsistent formats</li>
            <li>Policy breach: unsafe outputs slip past filters or approvals</li>
          </ul>
          <h3>Runbook anatomy</h3>
          <ul>
            <li>Detection: SLOs with evals, budgets, and anomaly alerts</li>
            <li>Diagnosis: narrow scope using trace IDs, conversation spans, and retrieval snapshots</li>
            <li>Mitigation: automatic fallbacks, model switches, or cached answers</li>
            <li>Resolution: root-cause analysis with concrete code or policy fixes</li>
            <li>Prevention: guardrails and tests added to CI and canary pipelines</li>
          </ul>
          <h3>Guardrails that matter</h3>
          <p>
            Budget ceilings per capability, approval workflows for risky tools, and eval gates in CI prevent most incidents
            from reaching users. Aim for mean time to detect in minutes and mean time to resolve in hours.
          </p>
        </section>
      </article>
    </div>
  );
}

