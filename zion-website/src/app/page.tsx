import React from 'react'
import Link from 'next/link'
import { LightBulbIcon, CpuChipIcon, GlobeAltIcon, ShieldCheckIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { getLatestUpdates } from '@/data/updates'

const features = [
  { name: 'AI-Powered Research', description: 'Cutting-edge artificial intelligence that accelerates research and discovery across all domains.', icon: LightBulbIcon },
  { name: 'Quantum Computing', description: 'Next-generation quantum neural networks for solving complex computational problems.', icon: CpuChipIcon },
  { name: 'Global Solutions', description: 'Worldwide deployment of autonomous business operations and digital transformation.', icon: GlobeAltIcon },
  { name: 'Enterprise Security', description: 'Military-grade security protocols protecting your most valuable digital assets.', icon: ShieldCheckIcon },
  { name: 'Data Analytics', description: 'Advanced analytics and insights driving informed decision-making.', icon: ChartBarIcon },
  { name: 'Expert Team', description: 'World-class researchers and engineers pushing the boundaries of technology.', icon: UserGroupIcon }
]

export default function HomePage() {
  const latest = getLatestUpdates(6)
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://zion.app",
    "logo": "https://zion.app/logo.png",
    "description": "Leading AI and Technology Solutions for Enterprise Innovation",
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://zion.app/contact"
    },
    "sameAs": [
      "https://twitter.com/ziontech",
      "https://linkedin.com/company/zion-tech-group"
    ],
    "offers": {
      "@type": "Offer",
      "category": "AI and Technology Services",
      "description": "Cutting-edge AI, quantum computing, and autonomous solutions"
    }
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Promo banner */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 sm:p-5 text-center">
            <p className="text-sm sm:text-base font-semibold text-blue-200">
              New: AI Risk Mitigation in Production (2026) —
              <a href="/updates/ai-risk-mitigation-guide-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">risk mitigation guide</a>
              <span className="mx-2 text-blue-300/60">|</span>
              Benchmarking Multimodal RAG (2026 Preview) —
              <a href="/updates/multimodal-rag-benchmarking-2026" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white ml-1">multimodal RAG guide</a>
              <span className="mx-2 text-blue-300/60">|</span>
              <a href="/updates" className="underline decoration-blue-300/60 underline-offset-4 hover:text-white">see all updates</a>
            </p>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              The Future of <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">AI & Technology</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Transform your business with cutting-edge AI, quantum computing, and autonomous solutions that drive innovation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105">Get Started</a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Learn More <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Updates section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</h2>
          <p className="mt-4 text-lg text-gray-300">
            Fresh content, announcements, and courses from Zion Academy. Visit the Updates page for more.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {latest.map((item) => (
              <div key={item.href} className="flex flex-col justify-between rounded-2xl bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div>
                  <div className="text-xs text-blue-300">{item.tag} • <time dateTime={item.date}>{item.date ? new Date(item.date).toLocaleDateString() : 'N/A'}</time></div>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-300">{item.summary}</p>
                </div>
                <div className="mt-4">
                  <a href={item.href} className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200">
                    Read more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Advanced technology solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our comprehensive suite of AI and technology solutions empowers organizations to achieve breakthrough results and maintain competitive advantage in the digital age.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join thousands of organizations already using our AI and technology solutions to drive innovation and growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/contact" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Get started today</a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors duration-200">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}