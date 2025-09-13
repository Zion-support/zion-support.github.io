import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Foundation Model Cost Optimization: 38% Spend Reduction | Zion Tech Group',
  description: 'Case study: How a global platform reduced GenAI spend by 38% via quantization, distillation, caching, smart routing, and policy budgets—while improving quality.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Foundation Model Cost Optimization: 38% Spend Reduction</h1>
          <p className="text-lg text-white/90">Quantization, distillation, response caching, and dynamic routing—implemented with policy budgets and eval safeguards.</p>
          <div className="mt-4 text-sm text-white/80">📊 Case Study • 9 min read • Sep 12, 2025</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose">
        <h2>Summary</h2>
        <p>
          By combining 4-bit quantization for frequently used models, targeted distillation for stable tasks, and tiered caching for prompts/responses, the team cut spend by 38% while maintaining quality through offline and inline evaluations.
        </p>

        <h2>Key Levers</h2>
        <ul>
          <li>Quantization + distillation of high-volume paths</li>
          <li>Semantic and instruction-level caching with TTLs</li>
          <li>Dynamic model routing based on task and quality score</li>
          <li>Budgets, rate limits, and guardrails at the policy gateway</li>
        </ul>

        <div className="mt-10 p-6 rounded-xl bg-blue-50 border border-blue-100">
          <h3 className="m-0">Explore the companion article</h3>
          <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <Link href="/blog/ai-2025-foundation-models-cost-optimization" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">📝 Read the Guide</Link>
            <Link href="/content-showcase" className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg">Browse More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

