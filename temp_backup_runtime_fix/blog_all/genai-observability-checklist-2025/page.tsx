import React from 'react';

export default function GenAIObservabilityChecklist2025Page() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <header className='mb-10'>
          <h1 className='text-4xl font-bold text-gray-900 mb-3'>
            GenAI Observability: The 2025 Checklist
          </h1>
          <p className='text-gray-600'>Published: 2025-09-11 • 7 min read • MLOps</p>
        </header>

        <p className='text-lg text-gray-700 mb-6'>
          You cannot improve what you cannot see. This checklist ensures your GenAI apps have
          the right telemetry across prompts, tools, retrieval, costs, and outcomes.
        </p>

        <h2 className='text-2xl font-semibold text-gray-900 mt-10 mb-4'>Checklist</h2>
        <ul className='list-disc pl-6 text-gray-700 space-y-2'>
          <li>Prompt/response logging with PII redaction</li>
          <li>Tool call traces, errors, and latencies</li>
          <li>Retrieval quality metrics and hit rates</li>
          <li>Cost per request and per outcome</li>
          <li>Human feedback and task success labels</li>
        </ul>

        <footer className='mt-12 pt-6 border-t border-gray-200 text-gray-600'>
          We implement this stack end-to-end. Email kleber@ziontechgroup.com.
        </footer>
      </article>
    </div>
  );
}

