import React from 'react'
import { LightBulbIcon, CpuChipIcon, GlobeAltIcon, ShieldCheckIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { getLatestUpdates } from '@/data/updates'

const features = [
  { name: 'AI-Powered Research', description: 'Cutting-edge artificial intelligence accelerating research and discovery.', icon: LightBulbIcon },
  { name: 'Quantum Computing', description: 'Next-generation quantum architectures for complex problems.', icon: CpuChipIcon },
  { name: 'Global Solutions', description: 'Worldwide deployment of autonomous business operations.', icon: GlobeAltIcon },
  { name: 'Enterprise Security', description: 'Security protocols protecting your most valuable digital assets.', icon: ShieldCheckIcon },
  { name: 'Data Analytics', description: 'Advanced analytics powering informed decisions.', icon: ChartBarIcon },
  { name: 'Expert Team', description: 'World-class researchers and engineers pushing boundaries.', icon: UserGroupIcon },
]

export default function HomePage() {
  const latest = getLatestUpdates(6)

  return (
    <div className="bg-black min-h-screen">
      {/* Promo banner */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm:p-5 text-center">
            <p className="text-sm sm:text-base font-semibold text-blue-200">
              New: AI Risk Mitigation in Production —
              <a href="/updates/ai-risk-mitigation-guide-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">read the guide</a>
              <span className="mx-2 text-blue-300/60">|</span>
              Benchmarking Multimodal RAG (2026 Preview) —
              <a href="/updates/multimodal-rag-benchmarking-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">see methods</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">see all updates</a>
            </p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6 pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Build reliable, cost‑efficient AI systems
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Production patterns for routing, evals, and governance to scale AI safely.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition">
              Get Started
            </a>
            <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="rounded-xl border border-white/10 p-6 bg-white/5">
              <feature.icon className="h-6 w-6 text-blue-300" />
              <dt className="mt-4 text-white font-semibold">{feature.name}</dt>
              <dd className="mt-2 text-gray-300">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Latest updates */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-2xl font-bold text-white">Latest updates</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((item) => (
            <a key={item.href} href={item.href} className="rounded-xl border border-white/10 p-5 bg-white/5 hover:bg-white/10 transition">
              <div className="text-sm text-blue-300">{item.tag}</div>
              <div className="mt-1 text-white font-semibold">{item.title}</div>
              <div className="mt-2 text-gray-300 text-sm">{item.summary}</div>
              <div className="mt-3 text-gray-400 text-xs">{item.date}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

