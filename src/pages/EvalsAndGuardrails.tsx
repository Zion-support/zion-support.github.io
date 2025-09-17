import React from 'react';

const EvalsAndGuardrails: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-900">
      <nav className="mb-6">
        <a href="/" className="text-blue-600 hover:text-blue-700">← Back to Home</a>
      </nav>
      <article className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Evals, Guardrails, and Safety</h1>
        <p className="text-gray-700 mb-6">Build trustworthy AI systems using evaluations, safety baselines, and policy-aligned guardrails.</p>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Core Topics</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Offline and online evaluations</li>
            <li>Content filtering and policy enforcement</li>
            <li>PII handling and redaction</li>
            <li>Adversarial testing and monitoring</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default EvalsAndGuardrails;

