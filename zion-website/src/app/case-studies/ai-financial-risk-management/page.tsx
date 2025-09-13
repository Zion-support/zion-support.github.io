import React from 'react';

export const metadata = {
  title: 'AI in Financial Services: Risk Management Case Study | Zion Tech Group',
  description: 'How a major bank implemented AI for risk management, achieving 40% improvement in fraud detection and 25% reduction in false positives.',
  keywords: 'financial services, risk management, fraud detection, AI case study'
};

export default function Page() {
  return (
    <article className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI in Financial Services: Risk Management Case Study
          </h1>
          <div className="text-indigo-100 flex flex-wrap gap-4">
            <span>📊 Case Study</span>
            <span>⏱️ 14 min read</span>
            <span>🏷️ Financial Services</span>
            <span>Sep 12, 2025</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-lg text-gray-700 mb-8">
          A major bank modernized risk detection by combining graph analytics, anomaly detection, and real‑time scoring. The program delivered a 40% improvement in fraud detection and a 25% reduction in false positives within six months.
        </p>

        <section className="prose prose-indigo max-w-none">
          <h2>Objectives</h2>
          <ul>
            <li>Increase detection accuracy while cutting false positives</li>
            <li>Reduce manual review time with explainable scoring</li>
            <li>Support regulatory audits with end‑to‑end traceability</li>
          </ul>

          <h2>Solution</h2>
          <ul>
            <li>Feature store with real‑time features and offline parity</li>
            <li>Graph‑based signals for rings and mule accounts</li>
            <li>Human‑in‑the‑loop review and policy‑as‑code approvals</li>
          </ul>

          <h2>Results</h2>
          <ul>
            <li>+40% fraud detection improvement</li>
            <li>−25% false positives, fewer escalations</li>
            <li>Minutes‑to‑seconds decision latency</li>
          </ul>
        </section>
      </div>
    </article>
  );
}

