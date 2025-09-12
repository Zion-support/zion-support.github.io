// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'GenAI Security in 2025: Practical Controls That Actually Work',
  description:
    'A pragmatic security blueprint for production GenAI: controls, gateways, evals, and governance that teams can actually run.',
};

export default function GenAISecurity2025Page() {
  return (
    <div className='min-h-screen bg-white'>
      <section className='py-12 border-b border-gray-200 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>GenAI Security in 2025</h1>
          <p className='mt-3 text-gray-600'>A pragmatic blueprint for securing GenAI systems in production without slowing teams down.</p>
        </div>
      </section>
      <section className='py-10'>
        <div className='prose prose-blue max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2>Security Objectives</h2>
          <ul>
            <li>Protect data confidentiality, integrity, and provenance end-to-end.</li>
            <li>Constrain model capabilities to safe, auditable behaviors.</li>
            <li>Enable rapid iteration through automation and guardrails.</li>
          </ul>
          <h2>Core Controls</h2>
          <ul>
            <li>Gateway enforcement: authn/z, rate limits, prompt filtering, response redaction.</li>
            <li>Secrets and tenancy isolation; per-tenant keys and budgets.</li>
            <li>Policy-as-code for inputs/outputs with automated unit evals.</li>
          </ul>
          <h2>Data Protection</h2>
          <ul>
            <li>Field-level masking and reversible tokenization for PII/PHI.</li>
            <li>Context minimization with task-scoped retrieval.</li>
            <li>Watermarking and lineage for training and augmentation assets.</li>
          </ul>
          <h2>Monitoring & Evals</h2>
          <ul>
            <li>Structured logs: prompts, tools, responses, decisions, costs.</li>
            <li>Golden task suites for safety, quality, and latency SLOs.</li>
            <li>Drift detection and auto-rollback with change freeze windows.</li>
          </ul>
          <h2>Rollout Plan</h2>
          <ol>
            <li>Start behind a gateway with read-only tools and strict logging.</li>
            <li>Introduce write actions with approval flows and budget caps.</li>
            <li>Scale to multi-tenant with per-tenant keys, evals, and dashboards.</li>
          </ol>
          <p>
            Want a hardened rollout?{' '}
            <Link href='/contact' className='text-blue-600 font-semibold'>Talk to our team</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}

