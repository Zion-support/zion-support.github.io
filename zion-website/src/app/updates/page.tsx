import React from 'react'

type UpdateItem = {
  title: string
  date: string
  summary: string
  href: string
}

const updates: UpdateItem[] = [
  {
    title: 'Launch: AI Research Assistant 2.0',
    date: '2025-09-15',
    summary:
      'Major upgrade with multi-agent orchestration, faster retrieval, and improved research planning.',
    href: '/updates/ai-research-assistant-2-0'
  },
  {
    title: 'Guide: Production-Ready RAG Patterns',
    date: '2025-09-10',
    summary:
      'A concise guide to building reliable retrieval-augmented generation systems with observability.',
    href: '/updates/rag-production-patterns'
  },
  {
    title: 'Course: Web3 Fundamentals Track',
    date: '2025-09-01',
    summary:
      'A new beginner-friendly, hands-on curriculum that covers wallet safety, NFTs, and L2s.',
    href: '/updates/web3-fundamentals-track'
  }
]

export default function UpdatesIndexPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 lg:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Latest Updates</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Product launches, guides, and learning resources from Zion Academy and the team.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((item) => (
            <article key={item.href} className="flex flex-col bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="text-sm text-blue-400 font-medium">{item.date}</div>
              <h2 className="mt-2 text-xl font-semibold text-white">
                <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                  {item.title}
                </a>
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
              <a href={item.href} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                Read more <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

