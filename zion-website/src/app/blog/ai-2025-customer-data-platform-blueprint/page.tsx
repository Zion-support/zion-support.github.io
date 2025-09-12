import React from 'react';

export const metadata = {
  title: 'Customer Data Platform (CDP) Blueprint 2025',
  description: 'Unified profiles, consent, segmentation, uplift modeling, and agentic activations for a modern CDP.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Data Platform Blueprint (2025)</h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl">
            Build a modern CDP with privacy‑first data collection, feature stores, uplift modeling, and agentic activations.
          </p>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-6 py-12 prose prose-lg">
        <h2>Architecture</h2>
        <p>
          Components include identity resolution, consent management, event pipelines, warehouse modeling, and a real‑time feature store.
        </p>
        <h2>Activation</h2>
        <p>
          Use agents to orchestrate offers, journeys, and service operations with policy‑as‑code and real‑time evaluations.
        </p>
      </article>
    </main>
  );
}

