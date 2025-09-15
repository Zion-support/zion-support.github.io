import React from 'react';

export default function TechLeadershipGuide2025(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-4">
          📘 New Guide • 2025
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tech Leadership Guide 2025</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          A practical playbook for CTOs and engineering leaders to scale product delivery, AI adoption, and platform reliability.
        </p>
      </div>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Outcome-Driven Roadmaps</h2>
          <p className="text-gray-600">Tie initiatives to measurable business outcomes using OKRs and impact mapping.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">AI Adoption Blueprint</h2>
          <p className="text-gray-600">From discovery to production: model selection, guardrails, monitoring, and ROI.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Platform Reliability</h2>
          <p className="text-gray-600">Golden paths, paved roads, and SLOs to accelerate developer productivity.</p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">What you’ll get</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Templates: AI project charter, risk register, and KPI scorecards</li>
          <li>Playbooks: incident response, model rollback, data quality checks</li>
          <li>Architecture guides: event-driven, vector databases, hybrid search</li>
        </ul>
        <div className="mt-6">
          <a href="/contact" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">Get the full guide</a>
        </div>
      </section>
    </main>
  );
}

