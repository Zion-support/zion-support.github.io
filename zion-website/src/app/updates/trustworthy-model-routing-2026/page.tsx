<<<<<<< HEAD
export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Trustworthy Model Routing (2026 Preview)
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            Trustworthy Model Routing ties policy-as-code, eval signals, and budget controls together to
            route requests to the right model deterministically. It improves reliability while keeping
            quality, latency, and cost within targets.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Policy-aware routing with guardrail and risk tiers</li>
            <li>Cost and latency budgets enforced at request and session levels</li>
            <li>Eval signals and golden tasks drive continuous optimization</li>
            <li>Audit-ready evidence bundles for reviews and certification</li>
          </ul>
          <h2>Get started</h2>
          <p>
            See a live demo and learn how to integrate routing with your eval pipelines and telemetry.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Talk to us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

=======
import React from 'react';

export default function TrustworthyModelRoutingPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 pt-24">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
            Trustworthy Model Routing 2026
          </h1>
          
          <div className="text-lg text-gray-300 mb-8">
            Policy-as-code routing with eval gates, SLOs, and cost-aware decisions for safe, efficient AI operations.
          </div>

          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              Trustworthy Model Routing 2026 introduces advanced policy-as-code routing mechanisms for AI systems. 
              This comprehensive framework enables safe, efficient, and cost-aware AI operations through 
              evaluation gates, service level objectives, and intelligent decision making.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Policy-as-code routing with version control</li>
              <li>• Real-time evaluation gates and quality checks</li>
              <li>• Service level objectives (SLOs) and monitoring</li>
              <li>• Cost-aware decision making and budget controls</li>
              <li>• Audit-ready evidence and compliance reporting</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">Implementation Guide</h2>
            <p className="text-gray-300 leading-relaxed">
              Follow our step-by-step implementation guide to deploy trustworthy model routing in your AI systems. 
              Includes code examples, configuration templates, and best practices for production deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
