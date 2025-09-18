
import React from 'react'

export default function ResearchPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Research & Innovation</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">Exploring AI systems, safety, and performance with open research and practical guides.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[{
              title: 'Enterprise Agent Observability',
              summary: 'Tracing, metrics, and audit signals for reliable agent systems.',
              href: '/blog/ai-2026-enterprise-agent-observability-deep-dive'
            }, {
              title: 'Policy‑as‑Code Blueprint',
              summary: 'Executable policies with CI gates and runtime evidence.',
              href: '/blog/ai-2026-policy-as-code-production-blueprint'
            }].map((x) => (
              <article key={x.href} className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-white"><a href={x.href} className="hover:text-blue-400">{x.title}</a></h3>
                <p className="mt-2 text-sm text-gray-300">{x.summary}</p>
                <a href={x.href} className="mt-4 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300">Read more →</a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
