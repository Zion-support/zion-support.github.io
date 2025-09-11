import React from 'react';
import Link from 'next/link';

export default function AIRiskManagement2025() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Header */}
        <header className='mb-12'>
          <div className='flex items-center gap-2 mb-4'>
            <Link href='/blog' className='text-blue-600 hover:underline'>Blog</Link>
            <span className='text-gray-400'>/</span>
            <span className='text-gray-600'>AI Governance</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            AI Risk Management in 2025: Practical Guardrails for Reliable Systems
          </h1>
          <div className='flex items-center gap-4 text-gray-600 mb-6'>
            <span>September 11, 2025</span>
            <span>•</span>
            <span>13 min read</span>
            <span>•</span>
            <span className='bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium'>
              Governance & Safety
            </span>
          </div>
          <p className='text-xl text-gray-600 leading-relaxed'>
            Learn how leading teams are building trustworthy AI with concrete safeguards across data,
            models, prompts, evaluations, and operations—without slowing delivery.
          </p>
        </header>

        {/* Featured Image */}
        <div className='mb-12'>
          <div className='aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center'>
            <div className='text-8xl'>🛡️</div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className='bg-gray-50 rounded-lg p-6 mb-12'>
          <h2 className='text-lg font-semibold text-gray-900 mb-4'>Table of Contents</h2>
          <ul className='space-y-2 text-gray-600'>
            <li><a href='#why-now' className='hover:text-blue-600'>Why AI Risk Management Matters Now</a></li>
            <li><a href='#framework' className='hover:text-blue-600'>The 5-Layer Guardrail Framework</a></li>
            <li><a href='#controls' className='hover:text-blue-600'>Controls by Lifecycle Stage</a></li>
            <li><a href='#evals' className='hover:text-blue-600'>Evals and Observability</a></li>
            <li><a href='#ops' className='hover:text-blue-600'>Operations and Incident Response</a></li>
            <li><a href='#checklist' className='hover:text-blue-600'>Executive Checklist</a></li>
          </ul>
        </nav>

        <div className='prose prose-lg max-w-none'>
          <section id='why-now'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Why AI Risk Management Matters Now</h2>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              With AI systems moving from prototypes to production, organizations face new classes of
              failure modes: prompt injection, data leakage, model drift, privacy breaches, and cost
              blowouts. Mature AI programs treat risk as an engineering discipline—not a compliance
              afterthought.
            </p>
            <div className='bg-purple-50 border-l-4 border-purple-500 p-6 mb-8'>
              <h3 className='text-lg font-semibold text-purple-900 mb-2'>Key Insight</h3>
              <p className='text-purple-800'>
                Teams that implement layered guardrails see 70% fewer production incidents and 40%
                lower operating costs within the first quarter of deployment.
              </p>
            </div>
          </section>

          <section id='framework'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>The 5-Layer Guardrail Framework</h2>
            <ul className='list-disc pl-6 mb-6 text-gray-700 space-y-2'>
              <li><strong>Data Guardrails:</strong> PII scrubbing, provenance, and access policies</li>
              <li><strong>Prompt Guardrails:</strong> Structured prompts, content filters, safety policies</li>
              <li><strong>Model Guardrails:</strong> Policy-tuned models, system prompts, tool limits</li>
              <li><strong>Workflow Guardrails:</strong> Function whitelists, rate limits, retries, timeouts</li>
              <li><strong>Business Guardrails:</strong> Approval gates, human-in-the-loop, audit trails</li>
            </ul>
          </section>

          <section id='controls'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Controls by Lifecycle Stage</h2>
            <div className='grid md:grid-cols-2 gap-6 mb-8'>
              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>Design</h4>
                <ul className='text-gray-700 text-sm space-y-1'>
                  <li>Threat models for prompts and tools</li>
                  <li>Data classification and minimization</li>
                  <li>Guardrail budget targets</li>
                </ul>
              </div>
              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>Build</h4>
                <ul className='text-gray-700 text-sm space-y-1'>
                  <li>Red-teaming & jailbreak tests</li>
                  <li>Deterministic parsing & schema validation</li>
                  <li>Secrets isolation and token scopes</li>
                </ul>
              </div>
              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>Ship</h4>
                <ul className='text-gray-700 text-sm space-y-1'>
                  <li>Progressive delivery and feature flags</li>
                  <li>SLOs for latency, cost, and safety</li>
                  <li>Rollback and kill-switch procedures</li>
                </ul>
              </div>
              <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <h4 className='font-semibold text-gray-900 mb-2'>Scale</h4>
                <ul className='text-gray-700 text-sm space-y-1'>
                  <li>Continuous evals with shadow traffic</li>
                  <li>Drift detection and re-tuning cadence</li>
                  <li>Cost governance with per-team caps</li>
                </ul>
              </div>
            </div>
          </section>

          <section id='evals'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Evals and Observability</h2>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              Combine golden datasets, synthetic edge cases, and production sampling. Track safety,
              helpfulness, latency, and cost. Use automatic alerts for regressions and quota spikes.
            </p>
          </section>

          <section id='ops'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Operations and Incident Response</h2>
            <ul className='list-disc pl-6 mb-8 text-gray-700 space-y-2'>
              <li>24/7 on-call rotation with playbooks for LLM-specific incidents</li>
              <li>Containment via feature flags and rate limiters</li>
              <li>Root-cause with trace-level prompt and tool logs</li>
              <li>Postmortems with remediation backlogs</li>
            </ul>
          </section>

          <section id='checklist'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>Executive Checklist</h2>
            <div className='bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-8 mb-8'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <ul className='text-gray-700 text-sm space-y-2'>
                    <li>• Named executive owner for AI risk</li>
                    <li>• Quarterly red-team exercises</li>
                    <li>• Cost and safety SLOs in SLAs</li>
                  </ul>
                </div>
                <div>
                  <ul className='text-gray-700 text-sm space-y-2'>
                    <li>• Vendor model risk assessments</li>
                    <li>• Data retention and deletion policies</li>
                    <li>• Incident drills and on-call coverage</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className='text-gray-700'>
              Want a turnkey governance rollout? Our team deploys guardrails, evals, and observability
              in weeks, not months.
            </p>
          </section>
        </div>

        {/* CTA Section */}
        <div className='mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white text-center'>
          <h2 className='text-2xl font-bold mb-4'>Ship Safer, Faster AI Systems</h2>
          <p className='text-lg opacity-90 mb-6 max-w-2xl mx-auto'>
            Get a governance blueprint tailored to your stack and risk profile.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
            >
              Request a Governance Audit
            </Link>
            <Link
              href='/services/ai-services'
              className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors'
            >
              Explore AI Services
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <section className='mt-16'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Related Articles</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <Link href='/blog/ai-architecture-cost-governance-2025' className='group'>
              <div className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow'>
                <h3 className='font-semibold text-gray-900 mb-2 group-hover:text-blue-600'>
                  AI Architecture & Cost Governance in 2025
                </h3>
                <p className='text-gray-600 text-sm'>
                  Guardrails and observability patterns to keep AI reliable and affordable.
                </p>
              </div>
            </Link>
            <Link href='/blog/genai-security-2025' className='group'>
              <div className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow'>
                <h3 className='font-semibold text-gray-900 mb-2 group-hover:text-blue-600'>
                  GenAI Security in 2025
                </h3>
                <p className='text-gray-600 text-sm'>
                  Practical security controls for modern LLM applications.
                </p>
              </div>
            </Link>
            <Link href='/blog/genai-evals-and-observability' className='group'>
              <div className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow'>
                <h3 className='font-semibold text-gray-900 mb-2 group-hover:text-blue-600'>
                  Evals & Observability for GenAI
                </h3>
                <p className='text-gray-600 text-sm'>
                  Measure quality, cost, and safety with production-grade telemetry.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

