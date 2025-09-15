import React from 'react';

export default function NewShowcase2025(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white text-sm font-semibold mb-4">
          NEW • September 2025
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Autonomous AI Systems Showcase 2025
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our latest autonomous AI capabilities across sales, support, operations, and security—
          production-ready systems delivering measurable outcomes.
        </p>
      </div>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="text-4xl mb-3">🧭</div>
          <h2 className="text-xl font-semibold mb-2">Sales Copilot</h2>
          <p className="text-gray-600 mb-4">Autonomous prospecting, sequencing, and meeting booking with human-in-the-loop controls.</p>
          <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">Request demo →</a>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="text-4xl mb-3">🛟</div>
          <h2 className="text-xl font-semibold mb-2">Support Copilot</h2>
          <p className="text-gray-600 mb-4">24/7 autonomous triage and resolution, integrated with your helpdesk and knowledge base.</p>
          <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">See it live →</a>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="text-4xl mb-3">🏭</div>
          <h2 className="text-xl font-semibold mb-2">Ops Orchestrator</h2>
          <p className="text-gray-600 mb-4">Automate back-office workflows end-to-end with policy-guarded agents.</p>
          <a href="/pages/ComprehensiveServices2025" className="text-blue-600 hover:text-blue-700 font-semibold">Explore services →</a>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="text-4xl mb-3">🛡️</div>
          <h2 className="text-xl font-semibold mb-2">Threat Hunter</h2>
          <p className="text-gray-600 mb-4">Continuous detection and response with agentic correlation across your stack.</p>
          <a href="/pages/CybersecurityFortress2025" className="text-blue-600 hover:text-blue-700 font-semibold">Harden security →</a>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="text-4xl mb-3">📊</div>
          <h2 className="text-xl font-semibold mb-2">Analytics Autopilot</h2>
          <p className="text-gray-600 mb-4">Self-updating dashboards and proactive insights for every business unit.</p>
          <a href="/pages/AdvancedAnalytics2025" className="text-blue-600 hover:text-blue-700 font-semibold">See insights →</a>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="text-4xl mb-3">🔗</div>
          <h2 className="text-xl font-semibold mb-2">Workflow Integrations</h2>
          <p className="text-gray-600 mb-4">Connect to your CRM, ITSM, data warehouse, and cloud with secure adapters.</p>
          <a href="/pages/InnovationLanding2025" className="text-blue-600 hover:text-blue-700 font-semibold">All integrations →</a>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Deploy in Weeks, Not Months</h2>
            <p className="text-gray-700 mb-6">We bring templates, guardrails, and MLOps tooling to accelerate delivery safely.</p>
            <div className="space-x-3">
              <a href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">Talk to an expert</a>
              <a href="/pages/AIInnovationPlaybook2025" className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold">Read the playbook</a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <ul className="space-y-3 text-gray-700">
              <li>• Enterprise SSO, audit, and role policies included</li>
              <li>• SOC 2 and privacy by design best practices</li>
              <li>• On-prem and VPC deployment options</li>
              <li>• Ongoing tuning with human feedback loops</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

