import React from 'react';
// Types and icon packages are optional; using emojis for broad compatibility
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise GenAI Security Blueprint 2025 | Zion Tech Group',
  description: 'Practical blueprint to secure GenAI systems in 2025: data protection, prompt injection defenses, abuse prevention, and compliance-by-design.',
  keywords: 'GenAI security, AI security, prompt injection, data leakage, compliance, enterprise AI',
  openGraph: {
    title: 'Enterprise GenAI Security Blueprint 2025',
    description: 'Practical blueprint to secure GenAI systems in 2025: data protection, prompt injection defenses, abuse prevention, and compliance-by-design.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'Security', 'GenAI', 'Compliance'],
  },
};

export default function GenAISecurityBlueprint2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors"
            >
              <span className="h-4 w-4 mr-2">←</span>
              Back to Blog
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise GenAI Security Blueprint 2025
            </h1>
            
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center"><span className="mr-2">👤</span> Zion Tech Group</div>
              <div className="flex items-center"><span className="mr-2">📅</span> September 12, 2025</div>
              <div className="flex items-center"><span className="mr-2">⏱️</span> 15 min read</div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            This blueprint provides a practical, step-by-step approach to securing GenAI systems across data protection, model and prompt safety, abuse prevention, and compliance-by-design. Use it to reduce risk while accelerating adoption.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Threat Model for 2025 GenAI Stacks</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Data exfiltration and leakage via indirect prompt injection</li>
            <li>Tool abuse and over-permissioned actions by agents</li>
            <li>Training data poisoning and retrieval source tampering</li>
            <li>Jailbreaks bypassing policy guardrails and content filters</li>
            <li>PII exposure and cross-tenant data mixing</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Controls Blueprint</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Data Protection</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>PII detection and redaction pre-inference; post-inference scrubbing</li>
                <li>Row- and field-level access via attribute-based access control</li>
                <li>Encryption in transit and at rest for embeddings and logs</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Prompt & Policy Safety</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Content policy-as-code with versioned rule sets</li>
                <li>Structured tool schemas with argument validation and allowlists</li>
                <li>Context firewalls and link scrubbing for external content</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Abuse Prevention</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Rate limits, quotas, and per-tenant budgets</li>
                <li>Shadow execution for risky actions; multi-party approval</li>
                <li>Runtime kill switches and blast-radius constraints</li>
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Compliance-by-Design</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Data residency controls and retention policies</li>
                <li>Audit trails: inputs, outputs, tools, and decisions</li>
                <li>Automated DPIAs and model cards for regulated use cases</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Operational Guardrails</h3>
          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Inline evaluations for safety, privacy, and hallucination checks</li>
              <li>Distributed tracing across prompts, tools, and external calls</li>
              <li>Red teaming and automated jailbreak testing in CI</li>
              <li>Incident response playbooks and runbooks for model misuse</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Reference Architecture</h3>
          <p className="text-gray-700 mb-6">
            A layered architecture separates concerns: policy gateway and context firewall up front; inference with tool sandboxing; observability and evaluation inline; and a compliance layer for logging, residency, and approvals.
          </p>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need a Security Review?</h3>
            <p className="text-gray-700 mb-6">
              Our team runs GenAI threat modeling, policy-as-code setup, and end-to-end guardrail implementations for regulated industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center"
              >
                Talk to Security Experts
              </Link>
              <Link 
                href="/case-studies" 
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center"
              >
                See Case Studies
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

