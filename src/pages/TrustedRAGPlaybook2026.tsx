import React from 'react';

const TrustedRAGPlaybook2026: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Trusted RAG Playbook (2026)</h1>
      <p className="text-white/80 mb-6">
        A concise field guide to ship grounded Retrieval-Augmented Generation with evidence-first evaluation gates.
      </p>
      <div className="space-y-4 text-white/85">
        <p>
          This playbook walks through practical patterns for data preparation, retrieval quality, grounding checks,
          and online evaluation, ensuring teams can move quickly without sacrificing reliability.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Dataset curation and provenance</li>
          <li>Retriever quality checks and drift monitors</li>
          <li>Eval gates: preflight, canary, post-release</li>
          <li>Budget-aware routing and fallbacks</li>
        </ul>
      </div>
    </div>
  );
};

export default TrustedRAGPlaybook2026;

